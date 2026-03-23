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

const provider = ethers.getDefaultProvider(1); // Ethereum
const signer = Wallet.createRandom().connect(provider);
const account = signer.address;
const contractCaller = constructEthersContractCaller(
  {
    ethersProviderOrSigner: signer,
    EthersContract: ethers.Contract,
  },
  account
);

const deltaSDK = constructPartialSDK(
  {
    chainId: 1, // Ethereum
    fetcher,
    contractCaller,
  },
  constructAllDeltaOrdersHandlers
);

// Ethereum tokens
const USDC = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
const WETH = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';

// Aave external handler on Ethereum (https://etherscan.io/address/0xb4a2c36668cf8b19fe08f263e3685a5e16e82912#code)
// The handler contract is provided by the integrator and must implement IExternalProtocolHandler.
// Different handlers serve different purposes and may have different prerequisites
// (e.g. token approvals, credit delegation, position setup).
const AAVE_HANDLER = '0xb4a2c36668cf8b19fe08f263e3685a5e16e82912';

// Aave-specific order types passed as `data` field.
// The `data` encoding is handler-specific — each handler defines its own format.
const AaveOrderTypes = {
  COLLATERAL_SWAP:
    '0x0000000000000000000000000000000000000000000000000000000000000000',
  DEBT_SWAP:
    '0x0000000000000000000000000000000000000000000000000000000000000001',
  REPAY_WITH_COLLATERAL:
    '0x0000000000000000000000000000000000000000000000000000000000000002',
};

// Aave Collateral Swap: swap one collateral asset for another (SELL side)
// Prerequisites: user must approve the source aToken to the handler
async function collateralSwapFlow() {
  const amount = ethers.utils.parseUnits('1', 6).toString(); // 1 USDC

  const deltaPrice = await deltaSDK.getDeltaPrice({
    srcToken: USDC,
    destToken: WETH,
    amount,
    userAddress: account,
    srcDecimals: 6,
    destDecimals: 18,
    side: SwapSide.SELL,
  });

  const signableOrderData = await deltaSDK.buildExternalDeltaOrder({
    deltaPrice,
    owner: account,
    handler: AAVE_HANDLER,
    data: AaveOrderTypes.COLLATERAL_SWAP,
    srcToken: USDC,
    destToken: WETH,
    srcAmount: amount,
    slippage: 50, // 0.5% slippage in bps
  });

  const signature = await deltaSDK.signExternalDeltaOrder(signableOrderData);

  const deltaAuction = await deltaSDK.postExternalDeltaOrder({
    order: signableOrderData.data,
    signature,
  });

  startStatusCheck(() => deltaSDK.getDeltaOrderById(deltaAuction.id));
}

// Aave Debt Swap: swap one debt for another (BUY side)
// Prerequisites: user must grant borrowAllowance on the source variable debt token to the handler
async function debtSwapFlow() {
  const debtAmount = ethers.utils.parseUnits('1', 6).toString(); // amount of debt to swap

  const deltaPrice = await deltaSDK.getDeltaPrice({
    srcToken: USDC,
    destToken: WETH,
    amount: debtAmount,
    userAddress: account,
    srcDecimals: 6,
    destDecimals: 18,
    side: SwapSide.BUY,
  });

  const signableOrderData = await deltaSDK.buildExternalDeltaOrder({
    deltaPrice,
    owner: account,
    handler: AAVE_HANDLER,
    data: AaveOrderTypes.DEBT_SWAP,
    srcToken: USDC,
    destToken: WETH,
    destAmount: debtAmount,
    slippage: 50, // 0.5% slippage in bps
  });

  const signature = await deltaSDK.signExternalDeltaOrder(signableOrderData);

  const deltaAuction = await deltaSDK.postExternalDeltaOrder({
    order: signableOrderData.data,
    signature,
  });

  startStatusCheck(() => deltaSDK.getDeltaOrderById(deltaAuction.id));
}

// Aave Repay with Collateral: use collateral to repay debt (BUY side)
// Prerequisites: user must approve the source aToken to the handler
async function repayWithCollateralFlow() {
  const collateralAmount = ethers.utils.parseUnits('1', 6).toString();

  const deltaPrice = await deltaSDK.getDeltaPrice({
    srcToken: USDC,
    destToken: WETH,
    amount: collateralAmount,
    userAddress: account,
    srcDecimals: 6,
    destDecimals: 18,
    side: SwapSide.BUY,
  });

  const signableOrderData = await deltaSDK.buildExternalDeltaOrder({
    deltaPrice,
    owner: account,
    handler: AAVE_HANDLER,
    data: AaveOrderTypes.REPAY_WITH_COLLATERAL,
    srcToken: USDC,
    destToken: WETH,
    destAmount: collateralAmount,
    slippage: 50, // 0.5% slippage in bps
  });

  const signature = await deltaSDK.signExternalDeltaOrder(signableOrderData);

  const deltaAuction = await deltaSDK.postExternalDeltaOrder({
    order: signableOrderData.data,
    signature,
  });

  startStatusCheck(() => deltaSDK.getDeltaOrderById(deltaAuction.id));
}
