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
  constructAllOTCOrdersHandlers,
  // extra types
  OTCOrderFromApi,
  SwappableOrder,
} from '..';

const account = '0x1234...';
const takerAccount = '0x5678...';

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
  constructAllOTCOrdersHandlers
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
  taker: takerAccount,
};

async function run() {
  // approve token for the OTC order
  const tx1: ethers.ContractTransaction =
    await OTCOrderSDK.approveMakerTokenForOTCOrder(
      orderInput.makerAmount,
      orderInput.makerAsset
    );

  // builds + signs + posts order to API
  // new OTC order returned from API
  const newOTCOrder: OTCOrderFromApi = await OTCOrderSDK.submitOTCOrder(
    orderInput
  );

  // to act as order taker
  const anotherAccount = '0x5678...';

  const OTCOrdersSDKForTaker = constructPartialSDK(
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
    constructAllOTCOrdersHandlers
  );

  const tx2: ethers.ContractTransaction =
    await OTCOrdersSDKForTaker.approveTakerTokenForOTCOrder(
      orderInput.takerAmount,
      orderInput.takerAsset
    );

  const executingOrder: SwappableOrder = {
    ...newOTCOrder,
    permitMakerAsset: newOTCOrder.permitMakerAsset || undefined,
  };

  const { gas: payloadGas, ...LOPayloadTxParams } =
    await OTCOrdersSDKForTaker.buildOTCOrderTx({
      srcDecimals: 18,
      destDecimals: 18,
      userAddress: anotherAccount, // taker
      orders: [executingOrder],
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

  const tx3 = await provider
    .getSigner(anotherAccount)
    .sendTransaction(tx5Params);
}
