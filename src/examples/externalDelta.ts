/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import { ethers, Wallet } from 'ethersV5';
import {
  constructPartialSDK,
  constructEthersContractCaller,
  constructAxiosFetcher,
  constructAllDeltaOrdersHandlers,
  SwapSide,
} from '..';
import { startStatusCheck } from './helpers/delta';

const fetcher = constructAxiosFetcher(axios);

const provider = ethers.getDefaultProvider(8453); // Base
const signer = Wallet.createRandom().connect(provider);
const account = signer.address;
const contractCaller = constructEthersContractCaller({
  ethersProviderOrSigner: signer,
  EthersContract: ethers.Contract,
});

const deltaSDK = constructPartialSDK(
  {
    chainId: 8453, // Base
    fetcher,
    contractCaller,
  },
  constructAllDeltaOrdersHandlers
);

// Base tokens
const USDC = '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913';
const WETH = '0x4200000000000000000000000000000000000006';

// Aave external handler on Base
const AAVE_HANDLER = '0xe4c9d68f134b6d2380d124233002535ba786d5a1';

// Aave order types passed as `data` field
const AaveOrderTypes = {
  COLLATERAL_SWAP:
    '0x0000000000000000000000000000000000000000000000000000000000000000',
  DEBT_SWAP:
    '0x0000000000000000000000000000000000000000000000000000000000000001',
  REPAY_WITH_COLLATERAL:
    '0x0000000000000000000000000000000000000000000000000000000000000002',
};

// Aave Collateral Swap: swap one collateral asset for another (SELL side)
async function collateralSwapFlow() {
  const amount = (10 ** 6).toString(); // 1 USDC in wei

  const deltaPrice = await deltaSDK.getDeltaPrice({
    srcToken: USDC,
    destToken: WETH,
    amount,
    userAddress: account,
    srcDecimals: 6,
    destDecimals: 18,
    side: SwapSide.SELL,
  });

  const destAmountAfterSlippage = (
    (BigInt(deltaPrice.destAmount) * 95n) /
    100n
  ).toString();

  const signableOrderData = await deltaSDK.buildExternalDeltaOrder({
    deltaPrice,
    owner: account,
    handler: AAVE_HANDLER,
    data: AaveOrderTypes.COLLATERAL_SWAP,
    srcToken: USDC,
    destToken: WETH,
    srcAmount: amount,
    destAmount: destAmountAfterSlippage,
    side: SwapSide.SELL,
  });

  const signature = await deltaSDK.signExternalDeltaOrder(signableOrderData);

  const deltaAuction = await deltaSDK.postExternalDeltaOrder({
    order: signableOrderData.data,
    signature,
  });

  startStatusCheck(() => deltaSDK.getDeltaOrderById(deltaAuction.id));
}

// Aave Debt Swap: swap one debt for another (BUY side)
async function debtSwapFlow() {
  const debtAmount = (10 ** 6).toString(); // amount of debt to swap

  const deltaPrice = await deltaSDK.getDeltaPrice({
    srcToken: USDC,
    destToken: WETH,
    amount: debtAmount,
    userAddress: account,
    srcDecimals: 6,
    destDecimals: 18,
    side: SwapSide.BUY,
  });

  const srcAmountWithSlippage = (
    (BigInt(deltaPrice.srcAmount) * 105n) /
    100n
  ).toString();

  const signableOrderData = await deltaSDK.buildExternalDeltaOrder({
    deltaPrice,
    owner: account,
    handler: AAVE_HANDLER,
    data: AaveOrderTypes.DEBT_SWAP,
    srcToken: USDC,
    destToken: WETH,
    srcAmount: srcAmountWithSlippage,
    destAmount: deltaPrice.destAmount,
    side: SwapSide.BUY,
  });

  const signature = await deltaSDK.signExternalDeltaOrder(signableOrderData);

  const deltaAuction = await deltaSDK.postExternalDeltaOrder({
    order: signableOrderData.data,
    signature,
  });

  startStatusCheck(() => deltaSDK.getDeltaOrderById(deltaAuction.id));
}

// Aave Repay with Collateral: use collateral to repay debt (BUY side)
async function repayWithCollateralFlow() {
  const collateralAmount = (10 ** 6).toString();

  const deltaPrice = await deltaSDK.getDeltaPrice({
    srcToken: USDC,
    destToken: WETH,
    amount: collateralAmount,
    userAddress: account,
    srcDecimals: 6,
    destDecimals: 18,
    side: SwapSide.BUY,
  });

  const srcAmountWithSlippage = (
    (BigInt(deltaPrice.srcAmount) * 105n) /
    100n
  ).toString();

  const signableOrderData = await deltaSDK.buildExternalDeltaOrder({
    deltaPrice,
    owner: account,
    handler: AAVE_HANDLER,
    data: AaveOrderTypes.REPAY_WITH_COLLATERAL,
    srcToken: USDC,
    destToken: WETH,
    srcAmount: srcAmountWithSlippage,
    destAmount: deltaPrice.destAmount,
    side: SwapSide.BUY,
  });

  const signature = await deltaSDK.signExternalDeltaOrder(signableOrderData);

  const deltaAuction = await deltaSDK.postExternalDeltaOrder({
    order: signableOrderData.data,
    signature,
  });

  startStatusCheck(() => deltaSDK.getDeltaOrderById(deltaAuction.id));
}
