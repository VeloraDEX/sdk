/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import BigNumber from 'bignumber.js';
import { ethers } from 'ethersV5';
import { assert } from 'ts-essentials';
import {
  // swap methods
  constructPartialSDK,
  constructEthersContractCaller,
  constructAxiosFetcher,
  // OTCOrders methods
  constructBuildOTCOrder,
  constructCancelOTCOrder,
  constructSignOTCOrder,
  constructGetOTCOrders,
  constructPostOTCOrder,
  constructApproveTokenForOTCOrder,
  // extra types
  SignableOrderData,
  OTCOrderToPost,
  constructBuildOTCOrderTx,
} from '..';

const account = '0x1234...';

const fetcher = constructAxiosFetcher(axios);

// provider must have write access to account
// this would usually be wallet provider (Metamask)
const provider = ethers.getDefaultProvider(1);
const contractCaller = constructEthersContractCaller(
  {
    ethersProviderOrSigner: provider,
    EthersContract: ethers.Contract,
  },
  account
);

// type BuildOTCOrderFunctions
// & SignOTCOrderFunctions
// & CancelOTCOrderFunctions<ethers.ContractTransaction>
// & ApproveTokenFunctions<ethers.ContractTransaction>
const OTCOrderSDK = constructPartialSDK(
  {
    chainId: 1,
    fetcher,
    contractCaller,
  },
  constructBuildOTCOrder,
  constructCancelOTCOrder,
  constructSignOTCOrder,
  constructPostOTCOrder,
  constructGetOTCOrders,
  constructApproveTokenForOTCOrder
);

const DAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
const HEX = '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39';

const orderInput = {
  nonce: 1,
  expiry: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7, // week from now, in sec
  makerAsset: DAI,
  takerAsset: HEX,
  makerAmount: (1e18).toString(10),
  takerAmount: (8e18).toString(10),
  maker: account,
};

async function run() {
  /// cancelling current orders
  const { orders: currentOrders } = await OTCOrderSDK.getOTCOrders({
    maker: account,
  });

  if (currentOrders[0]?.orderHash) {
    const tx1: ethers.ContractTransaction =
      await OTCOrderSDK.cancelOTCOrder(currentOrders[0].orderHash);
  }

  const moreOrderHashes = currentOrders
    .slice(1, 2)
    .map((order) => order.orderHash);

  const tx2: ethers.ContractTransaction =
    await OTCOrderSDK.cancelOTCOrdersBulk(moreOrderHashes);

  /// creating a new order

  const tx3: ethers.ContractTransaction =
    await OTCOrderSDK.approveMakerTokenForOTCOrder(
      orderInput.makerAmount,
      orderInput.makerAsset
    );

  const signableOrderData: SignableOrderData =
    await OTCOrderSDK.buildOTCOrder(orderInput);

  const signature: string = await OTCOrderSDK.signOTCOrder(
    signableOrderData
  );

  const orderToPostToApi: OTCOrderToPost = {
    ...signableOrderData.data,
    signature,
  };

  const newOrder = await OTCOrderSDK.postOTCOrder(orderToPostToApi);

  /// filling an order

  // to act as order taker
  const anotherAccount = '0x5678...';

  const OTCOrderSDKForTaker = constructPartialSDK(
    {
      chainId: 1,
      fetcher,
      contractCaller: constructEthersContractCaller(
        {
          ethersProviderOrSigner: provider,
          EthersContract: ethers.Contract,
        },
        anotherAccount
      ),
    },
    constructBuildOTCOrderTx,
    constructApproveTokenForOTCOrder
  );

  const tx4: ethers.ContractTransaction =
    await OTCOrderSDKForTaker.approveTakerTokenForOTCOrder(
      orderInput.takerAmount,
      orderInput.takerAsset
    );

  const { gas: payloadGas, ...LOPayloadTxParams } =
    await OTCOrderSDKForTaker.buildOTCOrderTx({
      srcDecimals: 18,
      destDecimals: 18,
      userAddress: anotherAccount, // taker
      orders: [orderToPostToApi],
    });

  const tx5Params = {
    ...LOPayloadTxParams,
    gasPrice:
      LOPayloadTxParams.gasPrice &&
      '0x' + new BigNumber(LOPayloadTxParams.gasPrice).toString(16),
    maxFeePerGas:
      LOPayloadTxParams.maxFeePerGas &&
      '0x' + new BigNumber(LOPayloadTxParams.maxFeePerGas).toString(16),
    maxPriorityFeePerGas:
      LOPayloadTxParams.maxPriorityFeePerGas &&
      '0x' + new BigNumber(LOPayloadTxParams.maxPriorityFeePerGas).toString(16),
    gasLimit: '0x' + new BigNumber(payloadGas || 5000000).toString(16),
    value: '0x' + new BigNumber(LOPayloadTxParams.value).toString(16),
  };

  console.log('SENDING TX', tx5Params);

  assert(
    provider instanceof ethers.providers.JsonRpcProvider,
    'provider has signer (JsonRpcProvider)'
  );

  const tx5 = await provider
    .getSigner(anotherAccount)
    .sendTransaction(tx5Params);
}
