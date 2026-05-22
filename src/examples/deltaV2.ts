/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { ethers, Wallet } from 'ethersV5';
import {
  constructPartialSDK,
  constructEthersContractCaller,
  constructAxiosFetcher,
  constructAllDeltaV2OrdersHandlers,
} from '..';
import { startStatusCheckV2 } from './helpers/deltaV2';

const fetcher = constructAxiosFetcher(axios);

const provider = ethers.getDefaultProvider(1);
const signer = Wallet.createRandom().connect(provider);
const account = signer.address;
const contractCaller = constructEthersContractCaller(
  {
    ethersProviderOrSigner: provider,
    EthersContract: ethers.Contract,
  },
  account
);

const deltaSDK = constructPartialSDK(
  {
    chainId: 1,
    fetcher,
    contractCaller,
  },
  constructAllDeltaV2OrdersHandlers
);

const DAI_TOKEN = '0x6b175474e89094c44da98b954eedeac495271d0f';
const USDC_TOKEN = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';

async function simpleDeltaV2Flow() {
  const amount = '1000000000000'; // wei

  const deltaPrice = await deltaSDK.getDeltaPriceV2({
    srcToken: DAI_TOKEN,
    destToken: USDC_TOKEN,
    amount,
    userAddress: account,
    srcDecimals: 18,
    destDecimals: 6,
    // partner: "..." // if available
  });

  const DeltaContract = await deltaSDK.getDeltaContract();

  // or sign a Permit1 or Permit2 TransferFrom for DeltaContract
  const tx = await deltaSDK.approveTokenForDelta(amount, DAI_TOKEN);
  await tx.wait();

  const deltaAuction = await deltaSDK.submitDeltaOrderV2({
    route: deltaPrice.route, // or pick from deltaPrice.alternatives
    side: deltaPrice.side,
    owner: account,
    // beneficiary: anotherAccount, // if need to send destToken to another account
    // permit: "0x1234...", // if signed a Permit1 or Permit2 TransferFrom for DeltaContract
    slippage: 50, // 50 bps = 0.5% slippage
  });

  // poll if necessary
  startStatusCheckV2(() => deltaSDK.getDeltaOrderByIdV2(deltaAuction.id));
}

async function manualDeltaV2Flow() {
  const amount = '1000000000000'; // wei

  const deltaPrice = await deltaSDK.getDeltaPriceV2({
    srcToken: DAI_TOKEN,
    destToken: USDC_TOKEN,
    amount,
    userAddress: account,
    srcDecimals: 18,
    destDecimals: 6,
    // partner: "..." // if available
  });

  const DeltaContract = await deltaSDK.getDeltaContract();

  // or sign a Permit1 or Permit2 TransferFrom for DeltaContract
  const tx = await deltaSDK.approveTokenForDelta(amount, DAI_TOKEN);
  await tx.wait();

  // server-side build (returns EIP-712 typed data + orderHash)
  const builtOrder = await deltaSDK.buildDeltaOrderV2({
    route: deltaPrice.route, // or pick from deltaPrice.alternatives
    side: deltaPrice.side,
    owner: account,
    // beneficiary: anotherAccount, // if need to send destToken to another account
    // permit: "0x1234...", // if signed a Permit1 or Permit2 TransferFrom for DeltaContract
    slippage: 50, // 50 bps = 0.5% slippage
  });

  // one signer for every v2 order type (Order / ExternalOrder / TWAPOrder / TWAPBuyOrder)
  const signature = await deltaSDK.signDeltaOrderV2(builtOrder);

  const deltaAuction = await deltaSDK.postDeltaOrderV2({
    // partner: "..." // if available
    order: builtOrder.toSign.value as Parameters<
      typeof deltaSDK.postDeltaOrderV2
    >[0]['order'],
    signature,
  });

  // poll if necessary
  startStatusCheckV2(() => deltaSDK.getDeltaOrderByIdV2(deltaAuction.id));
}

// External orders forward execution to an integrator-provided handler contract.
// Same build/sign/post shape as standard orders, plus { handler, data }.
// See externalDelta.ts for handler-specific examples (Aave collateral swap, etc.).
async function externalDeltaV2Flow() {
  const amount = ethers.utils.parseUnits('1', 6).toString(); // 1 USDC

  const deltaPrice = await deltaSDK.getDeltaPriceV2({
    srcToken: USDC_TOKEN,
    destToken: DAI_TOKEN,
    amount,
    userAddress: account,
    srcDecimals: 6,
    destDecimals: 18,
  });

  const HANDLER = '0xb4a2c36668cf8b19fe08f263e3685a5e16e82912'; // handler contract
  const HANDLER_DATA =
    '0x0000000000000000000000000000000000000000000000000000000000000000'; // handler-specific encoded bytes

  const builtOrder = await deltaSDK.buildExternalDeltaOrderV2({
    route: deltaPrice.route,
    side: deltaPrice.side,
    owner: account,
    handler: HANDLER,
    data: HANDLER_DATA,
    slippage: 50,
  });

  const signature = await deltaSDK.signDeltaOrderV2(builtOrder);

  const deltaAuction = await deltaSDK.postExternalDeltaOrderV2({
    order: builtOrder.toSign.value as Parameters<
      typeof deltaSDK.postExternalDeltaOrderV2
    >[0]['order'],
    signature,
  });

  startStatusCheckV2(() => deltaSDK.getDeltaOrderByIdV2(deltaAuction.id));
}

// TWAP sell splits a total srcAmount into N equal slices executed `interval` seconds apart.
// The price quote is fetched for a single slice; the server multiplies amounts by numSlices.
async function twapSellDeltaV2Flow() {
  const numSlices = 4;
  const totalSrcAmount = ethers.utils.parseUnits('100', 18).toString(); // 100 DAI total
  const perSliceAmount = (BigInt(totalSrcAmount) / BigInt(numSlices)).toString();

  // quote a single slice — route amounts must match floor(totalSrcAmount / numSlices)
  const deltaPrice = await deltaSDK.getDeltaPriceV2({
    srcToken: DAI_TOKEN,
    destToken: USDC_TOKEN,
    amount: perSliceAmount,
    userAddress: account,
    srcDecimals: 18,
    destDecimals: 6,
  });

  const tx = await deltaSDK.approveTokenForDelta(totalSrcAmount, DAI_TOKEN);
  await tx.wait();

  const deltaAuction = await deltaSDK.submitTWAPDeltaOrderV2({
    onChainOrderType: 'TWAPOrder',
    route: deltaPrice.route,
    owner: account,
    totalSrcAmount,
    numSlices,
    interval: 300, // 5 minutes between slices (min 60)
    slippage: 50,
  });

  startStatusCheckV2(() => deltaSDK.getDeltaOrderByIdV2(deltaAuction.id));
}

// Paginated list of a user's orders (v2 returns a { results, pagination } envelope).
async function listUserOrders() {
  const page1 = await deltaSDK.getDeltaOrdersV2({
    userAddress: account,
    page: 1,
    limit: 50,
    // status: ['ACTIVE', 'BRIDGING'],
    // type: 'MARKET',
  });

  console.log('orders:', page1.data);
  console.log('total:', page1.total, 'hasMore:', page1.hasMore);
}
