import {
  constructApproveToken,
  ApproveTokenFunctions,
} from './methods/swap/approve';
import {
  constructGetBalances,
  GetBalancesFunctions,
  isAllowance,
  Allowance,
} from './methods/swap/balance';
import {
  constructGetSpender,
  GetSpenderFunctions,
  AdaptersContractsResult,
} from './methods/swap/spender';
import {
  constructGetAdapters,
  GetAdaptersFunctions,
} from './methods/swap/adapters';
import {
  constructGetRate,
  GetRateFunctions,
  GetRateInput,
} from './methods/swap/rates';
import { constructSwapTx, GetSwapTxFunctions } from './methods/swap/swapTx';
import { constructGetTokens, GetTokensFunctions } from './methods/swap/token';
import { BuildTxFunctions, constructBuildTx } from './methods/swap/transaction';

import {
  BuildOTCOrderFunctions,
  BuildOTCOrderInput,
  BuildOrderDataInput,
  constructBuildOTCOrder,
} from './methods/otcOrders/buildOrder';
import {
  SignOTCOrderFunctions,
  constructSignOTCOrder,
} from './methods/otcOrders/signOrder';
import {
  CancelOTCOrderFunctions,
  constructCancelOTCOrder,
} from './methods/otcOrders/cancelOrder';
import {
  FillOTCOrderFunctions,
  constructFillOTCOrder,
} from './methods/otcOrders/fillOrderDirectly';
import {
  GetOTCOrdersFunctions,
  constructGetOTCOrders,
  OTCOrdersUserParams,
} from './methods/otcOrders/getOrders';
import {
  PostOTCOrderFunctions,
  constructPostOTCOrder,
} from './methods/otcOrders/postOrder';
import {
  ApproveTokenForOTCOrderFunctions,
  constructApproveTokenForOTCOrder,
} from './methods/otcOrders/approveForOrder';
import {
  GetOTCOrdersContractFunctions,
  constructGetOTCOrdersContract,
} from './methods/otcOrders/getOrdersContract';
import {
  BuildOTCOrdersTxFunctions,
  constructBuildOTCOrderTx,
} from './methods/otcOrders/transaction';

import {
  constructEthersContractCaller,
  constructEthersV5ContractCaller,
  constructEthersV6ContractCaller,
  constructWeb3ContractCaller,
  constructViemContractCaller,
  txParamsToViemTxParams,
  constructAxiosFetcher,
  constructFetchFetcher,
  isFetcherError,
  FetcherErrorInterface,
  EthersProviderDeps,
  EthersV5ProviderDeps,
  EthersV6ProviderDeps,
  MinViemClient,
  constructToken,
  FetcherError,
} from './helpers';
import type {
  ConstructFetchInput,
  ContractCallerFunctions,
  ConstructProviderFetchInput,
  Address,
  AddressOrSymbol,
  FetcherFunction,
  Token,
  PriceString,
  TxHash,
  TxSendOverrides,
  OptimalRate,
  OptionalRate,
  APIVersion,
  ExtraFetchParams,
  PaginatedResponse,
} from './types';

// ── Delta ─────────────────────────────────────────────────────────────────
// Delta is v2 (server-built orders). The previous local-build v1 surface was
// removed; every Delta symbol below refers to the v2 implementation.

// Shared on-chain order-struct types
import type {
  DeltaAuctionOrder,
  Bridge,
  ExternalDeltaOrder,
  ProductiveDeltaOrder,
  TWAPDeltaOrder,
  TWAPBuyDeltaOrder,
  TWAPOnChainOrderType,
  OnChainOrderType,
  DeltaOrderType,
  SwapSideUnion,
  DeltaAmountsWithSlippage,
  DeltaAmountsSellSlippage,
  DeltaAmountsBuySlippage,
  DeltaAmountsExplicit,
  DeltaOrderUnion,
  UnifiedDeltaOrderData,
} from './methods/delta/helpers/types';
// v2 auction, price & route types
import type {
  BuiltDeltaOrder,
  DeltaAuction,
  DeltaOrderStatus,
  DeltaTokenSide,
  DeltaTransaction,
  DeltaPrice,
  DeltaPriceToken,
  DeltaTokenAmount,
  BridgeTag,
  DeltaRoute,
  DeltaRouteStep,
  DeltaRouteBridge,
  DeltaRouteBridgeContractParams,
  BridgeRoute,
} from './methods/delta/types';

import {
  BuildDeltaOrderFunctions,
  BuildDeltaOrderParams,
  constructBuildDeltaOrder,
} from './methods/delta/buildDeltaOrder';
import {
  constructPostDeltaOrder,
  DeltaOrderToPost,
  PostDeltaOrderFunctions,
  PostDeltaOrderParams,
} from './methods/delta/postDeltaOrder';
import {
  constructSignDeltaOrder,
  SignDeltaOrderFunctions,
} from './methods/delta';
import {
  constructPreSignDeltaOrder,
  PreSignDeltaOrderFunctions,
} from './methods/delta/preSignDeltaOrder';
import {
  GetDeltaContractFunctions,
  constructGetDeltaContract,
} from './methods/delta/getDeltaContract';
import {
  constructGetDeltaPrice,
  GetDeltaPriceFunctions,
  DeltaPriceParams,
} from './methods/delta/getDeltaPrice';
import {
  constructGetDeltaOrders,
  GetDeltaOrdersFunctions,
} from './methods/delta/getDeltaOrders';
import {
  ApproveTokenForDeltaFunctions,
  constructApproveTokenForDelta,
} from './methods/delta/approveForDelta';
import {
  constructGetPartnerFee,
  GetPartnerFeeFunctions,
} from './methods/delta/getPartnerFee';
import {
  constructGetBridgeRoutes,
  GetBridgeRoutesFunctions,
  BridgeProtocolResponse,
} from './methods/delta/getBridgeRoutes';
import {
  constructIsTokenSupportedInDelta,
  IsTokenSupportedInDeltaFunctions,
} from './methods/delta/isTokenSupportedInDelta';
import {
  constructGetAgentsList,
  GetAgentsListFunctions,
  AgentList,
} from './methods/delta/getAgentsList';

import {
  constructBuildExternalDeltaOrder,
  BuildExternalDeltaOrderFunctions,
  BuildExternalDeltaOrderParams,
} from './methods/delta/buildExternalDeltaOrder';
import type { SignableExternalOrderData } from './methods/delta/helpers/buildExternalOrderData';
import {
  constructPostExternalDeltaOrder,
  PostExternalDeltaOrderFunctions,
  PostExternalDeltaOrderParams,
} from './methods/delta/postExternalDeltaOrder';
import {
  constructPreSignExternalDeltaOrder,
  PreSignExternalDeltaOrderFunctions,
} from './methods/delta/preSignExternalDeltaOrder';

import {
  BuildTWAPDeltaOrderParams,
  BuildTWAPSellDeltaOrderParams,
  BuildTWAPBuyDeltaOrderParams,
  BuildTWAPDeltaOrderFunctions,
  constructBuildTWAPDeltaOrder,
} from './methods/delta/buildTWAPDeltaOrder';
import type { SignableTWAPOrderData } from './methods/delta/helpers/buildTWAPOrderData';
import {
  constructPostTWAPDeltaOrder,
  PostTWAPDeltaOrderFunctions,
  PostTWAPDeltaOrderParams,
} from './methods/delta/postTWAPDeltaOrder';
import {
  constructPreSignTWAPDeltaOrder,
  PreSignTWAPDeltaOrderFunctions,
} from './methods/delta/preSignTWAPDeltaOrder';

import {
  constructGetQuote,
  GetQuoteFunctions,
  QuoteParams,
  QuoteResponse,
  QuoteWithDeltaPrice,
  QuoteWithMarketPrice,
  QuoteWithMarketPriceAsFallback,
} from './methods/quote/getQuote';
import {
  CancelDeltaOrderFunctions,
  CancelDeltaOrder,
  SignCancelDeltaOrderRequest,
  PostCancelDeltaOrderRequest,
  constructCancelDeltaOrder,
} from './methods/delta/cancelDeltaOrder';
import {
  DeltaTokenModuleFunctions,
  CancelAndWithdrawDeltaOrderParams,
  constructDeltaTokenModule,
  DepositNativeAndPreSignParams,
  DepositNativeAndPreSignDeltaOrderParams,
} from './methods/delta/deltaTokenModule';
import {
  CancelDeltaOrderData,
  SignableCancelDeltaOrderData,
} from './methods/delta/helpers/buildCancelDeltaOrderData';
import { SignableDeltaOrderData } from './methods/delta/helpers/buildDeltaOrderData';

export { constructSwapSDK, SwapSDKMethods } from './methods/swap';

export {
  constructAllOTCOrdersHandlers,
  constructSubmitOTCOrder,
  OTCOrderHandlers,
} from './methods/otcOrders';

export {
  constructAllDeltaOrdersHandlers,
  constructSubmitDeltaOrder,
  constructSubmitExternalDeltaOrder,
  constructSubmitTWAPDeltaOrder,
  DeltaOrderHandlers,
  SubmitDeltaOrderParams,
  SubmitExternalDeltaOrderParams,
  SubmitTWAPDeltaOrderParams,
} from './methods/delta';

export type {
  TransactionParams,
  BuildOptions,
  BuildOptionsBase,
  BuildOptionsWitWithMaxFee,
  BuildOptionsWithGasPrice,
  BuildTxInput,
  BuildSwapTxInput,
  BuildOTCOrderTxInput,
  BuildSwapAndOTCOrderTxInput,
  SwappableOrder,
} from './methods/swap/transaction';
export type { Web3UnpromiEvent } from './helpers';
export * from './constants';
export type {
  SignableOrderData,
  OrderData,
} from './methods/otcOrders/helpers/buildOrderData';
export type { SignableTypedData } from './methods/common/orders/buildOrderData';

// can import these individually
// and use in constructPartialSDK only what you need
// unused should tree-shake
export {
  // swap methods:
  constructApproveToken,
  constructGetBalances, // getAllowances is inside
  constructGetSpender, // this was getTokenTransferProxy
  constructGetTokens,
  constructBuildTx,
  constructGetAdapters,
  constructGetRate,
  constructSwapTx,
  // OTCOrders methods:
  constructBuildOTCOrder,
  constructSignOTCOrder,
  constructCancelOTCOrder,
  constructFillOTCOrder,
  constructGetOTCOrders,
  constructPostOTCOrder,
  constructApproveTokenForOTCOrder,
  constructGetOTCOrdersContract,
  constructBuildOTCOrderTx,
  // Delta methods
  constructBuildDeltaOrder,
  constructPostDeltaOrder,
  constructSignDeltaOrder,
  constructPreSignDeltaOrder,
  constructGetDeltaContract,
  constructGetDeltaPrice,
  constructGetDeltaOrders,
  constructCancelDeltaOrder,
  constructDeltaTokenModule,
  constructApproveTokenForDelta,
  constructGetAgentsList,
  // External Delta methods
  constructBuildExternalDeltaOrder,
  constructPostExternalDeltaOrder,
  constructPreSignExternalDeltaOrder,
  // TWAP Delta methods
  constructBuildTWAPDeltaOrder,
  constructPostTWAPDeltaOrder,
  constructPreSignTWAPDeltaOrder,
  // Quote methods
  constructGetQuote,
  // different helpers
  constructGetPartnerFee,
  constructGetBridgeRoutes,
  constructIsTokenSupportedInDelta,
  constructEthersContractCaller, // same as constructEthersV5ContractCaller for backwards compatibility
  constructEthersV5ContractCaller,
  constructEthersV6ContractCaller,
  constructWeb3ContractCaller,
  constructViemContractCaller,
  txParamsToViemTxParams,
  constructAxiosFetcher,
  constructFetchFetcher,
  isFetcherError,
  isAllowance,
  constructToken,
  // custom fetcher
  FetcherError,
  FetcherFunction,
};

export type {
  Allowance,
  // contractCaller requirements
  EthersProviderDeps,
  EthersV5ProviderDeps,
  EthersV6ProviderDeps,
  MinViemClient,
  // types for swap methods:
  ApproveTokenFunctions,
  GetBalancesFunctions,
  GetSpenderFunctions,
  AdaptersContractsResult,
  GetTokensFunctions,
  GetAdaptersFunctions,
  GetRateFunctions,
  GetRateInput,
  BuildTxFunctions,
  GetSwapTxFunctions,
  // types for OTCOrders methods:
  BuildOTCOrderFunctions,
  SignOTCOrderFunctions,
  CancelOTCOrderFunctions,
  FillOTCOrderFunctions,
  GetOTCOrdersContractFunctions,
  BuildOTCOrdersTxFunctions,
  BuildOTCOrderInput,
  BuildOrderDataInput,
  PostOTCOrderFunctions,
  ApproveTokenForOTCOrderFunctions,
  GetOTCOrdersFunctions,
  OTCOrdersUserParams,
  // types for Delta methods
  DeltaPrice,
  DeltaPriceParams,
  DeltaPriceToken,
  DeltaTokenAmount,
  DeltaRoute,
  DeltaRouteStep,
  DeltaRouteBridge,
  DeltaRouteBridgeContractParams,
  BridgeTag,
  BridgeRoute,
  BuiltDeltaOrder,
  DeltaAuctionOrder,
  DeltaAuction,
  DeltaOrderStatus,
  DeltaTokenSide,
  DeltaTransaction,
  DeltaOrderUnion,
  UnifiedDeltaOrderData,
  CancelDeltaOrderData,
  SignableCancelDeltaOrderData,
  SignableDeltaOrderData,
  // bridge part of DeltaOrder
  Bridge,
  BridgeProtocolResponse,
  BuildDeltaOrderFunctions,
  BuildDeltaOrderParams,
  DeltaOrderToPost,
  PostDeltaOrderFunctions,
  PostDeltaOrderParams,
  SignDeltaOrderFunctions,
  PreSignDeltaOrderFunctions,
  GetDeltaContractFunctions,
  GetDeltaPriceFunctions,
  GetDeltaOrdersFunctions,
  GetBridgeRoutesFunctions,
  GetAgentsListFunctions,
  AgentList,
  ApproveTokenForDeltaFunctions,
  CancelDeltaOrderFunctions,
  CancelDeltaOrder,
  SignCancelDeltaOrderRequest,
  PostCancelDeltaOrderRequest,
  DeltaTokenModuleFunctions,
  CancelAndWithdrawDeltaOrderParams,
  DepositNativeAndPreSignParams,
  DepositNativeAndPreSignDeltaOrderParams,
  // External Delta types
  ExternalDeltaOrder,
  // Productive Delta types
  ProductiveDeltaOrder,
  TWAPDeltaOrder,
  TWAPBuyDeltaOrder,
  TWAPOnChainOrderType,
  OnChainOrderType,
  DeltaOrderType,
  DeltaAmountsWithSlippage,
  DeltaAmountsSellSlippage,
  DeltaAmountsBuySlippage,
  DeltaAmountsExplicit,
  SignableExternalOrderData,
  BuildExternalDeltaOrderParams,
  BuildExternalDeltaOrderFunctions,
  PostExternalDeltaOrderFunctions,
  PostExternalDeltaOrderParams,
  PreSignExternalDeltaOrderFunctions,
  // TWAP Delta types
  BuildTWAPDeltaOrderParams,
  BuildTWAPSellDeltaOrderParams,
  BuildTWAPBuyDeltaOrderParams,
  BuildTWAPDeltaOrderFunctions,
  SignableTWAPOrderData,
  PostTWAPDeltaOrderFunctions,
  PostTWAPDeltaOrderParams,
  PreSignTWAPDeltaOrderFunctions,
  // types for Quote methods
  GetQuoteFunctions,
  QuoteParams,
  QuoteResponse,
  QuoteWithDeltaPrice,
  QuoteWithMarketPrice,
  QuoteWithMarketPriceAsFallback,
  //common
  ConstructFetchInput,
  ContractCallerFunctions,
  ConstructProviderFetchInput,
  // other types
  GetPartnerFeeFunctions,
  IsTokenSupportedInDeltaFunctions,
  Token,
  Address,
  AddressOrSymbol,
  PriceString,
  TxHash,
  TxSendOverrides,
  OptimalRate,
  OptionalRate,
  FetcherErrorInterface,
  APIVersion,
  SwapSideUnion,
  ExtraFetchParams,
  PaginatedResponse,
};

export { SDKConfig, constructPartialSDK } from './sdk/partial';
export { AllSDKMethods, constructFullSDK } from './sdk/full';
export {
  SimpleFetchSDK,
  SimpleSDK,
  constructSimpleSDK,
  ProviderOptions as SimpleSDKProviderOptions,
} from './sdk/simple';

// bundled methods for OTCOrders
export * from './methods/otcOrders';
export * from './methods/otcOrders/helpers/types';

// helpers for Delta Orders
export { OrderHelpers } from './methods/delta/helpers/orders';
