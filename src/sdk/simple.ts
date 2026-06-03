import { constructPartialSDK, SDKConfig } from './partial';
import {
  GetAdaptersFunctions,
  constructGetAdapters,
} from '../methods/swap/adapters';
import {
  GetBalancesFunctions,
  constructGetBalances,
} from '../methods/swap/balance';
import { GetRateFunctions, constructGetRate } from '../methods/swap/rates';
import {
  GetSpenderFunctions,
  constructGetSpender,
} from '../methods/swap/spender';
import { GetTokensFunctions, constructGetTokens } from '../methods/swap/token';
import {
  BuildTxFunctions,
  constructBuildTx,
} from '../methods/swap/transaction';
import { constructSwapTx, GetSwapTxFunctions } from '../methods/swap/swapTx';

import {
  constructAxiosFetcher,
  constructFetchFetcher,
  constructEthersV5ContractCaller,
  constructEthersV6ContractCaller,
  constructWeb3ContractCaller,
  constructViemContractCaller,
} from '../helpers';

import type {
  ConstructBaseInput,
  ConstructFetchInput,
  ContractCallerFunctions,
  TransactionContractCallerFn,
  TxHash,
  Address,
  FetcherFunction,
  ExtraFetchParams,
} from '../types';

import type { EthersProviderDeps, MinViemClient } from '../helpers';
import type Web3 from 'web3';

import type { SwapSDKMethods } from '../methods/swap';
import {
  BuildOTCOrderFunctions,
  constructBuildOTCOrder,
} from '../methods/otcOrders/buildOrder';
import {
  constructPostOTCOrder,
  PostOTCOrderFunctions,
} from '../methods/otcOrders/postOrder';
import {
  constructGetOTCOrders,
  GetOTCOrdersFunctions,
} from '../methods/otcOrders/getOrders';
import {
  constructGetOTCOrdersContract,
  GetOTCOrdersContractFunctions,
} from '../methods/otcOrders/getOrdersContract';
import {
  constructBuildOTCOrderTx,
  BuildOTCOrdersTxFunctions,
} from '../methods/otcOrders/transaction';
import {
  constructAllOTCOrdersHandlers,
  OTCOrderHandlers,
} from '../methods/otcOrders';

import { constructSwapSDK } from '../methods/swap';
import type { AxiosRequirement } from '../helpers/fetchers/axios';
import { API_URL, DEFAULT_VERSION } from '../constants';
import {
  constructAllDeltaOrdersHandlers,
  DeltaOrderHandlers,
} from '../methods/delta';
import {
  BuildDeltaOrderFunctions,
  constructBuildDeltaOrder,
} from '../methods/delta/buildDeltaOrder';
import {
  constructGetDeltaOrders,
  GetDeltaOrdersFunctions,
} from '../methods/delta/getDeltaOrders';
import {
  constructGetDeltaPrice,
  GetDeltaPriceFunctions,
} from '../methods/delta/getDeltaPrice';
import {
  constructGetDeltaContract,
  GetDeltaContractFunctions,
} from '../methods/delta/getDeltaContract';
import {
  constructGetPartnerFee,
  GetPartnerFeeFunctions,
} from '../methods/delta/getPartnerFee';
import {
  constructPostDeltaOrder,
  PostDeltaOrderFunctions,
} from '../methods/delta/postDeltaOrder';
import {
  constructGetQuote,
  GetQuoteFunctions,
} from '../methods/quote/getQuote';
import {
  constructGetBridgeRoutes,
  GetBridgeRoutesFunctions,
} from '../methods/delta/getBridgeRoutes';
import {
  constructIsTokenSupportedInDelta,
  IsTokenSupportedInDeltaFunctions,
} from '../methods/delta/isTokenSupportedInDelta';

export type SwapFetchMethods = GetBalancesFunctions &
  GetTokensFunctions &
  GetSpenderFunctions &
  BuildTxFunctions &
  GetAdaptersFunctions &
  GetRateFunctions &
  GetSwapTxFunctions;

export type OTCOrdersFetchMethods = GetOTCOrdersContractFunctions &
  GetOTCOrdersFunctions &
  BuildOTCOrderFunctions &
  PostOTCOrderFunctions &
  BuildOTCOrdersTxFunctions;

export type DeltaFetchMethods = BuildDeltaOrderFunctions &
  GetDeltaOrdersFunctions &
  GetDeltaPriceFunctions &
  GetDeltaContractFunctions &
  GetPartnerFeeFunctions &
  GetBridgeRoutesFunctions &
  IsTokenSupportedInDeltaFunctions &
  PostDeltaOrderFunctions;

export type SimpleFetchSDK = {
  swap: SwapFetchMethods;
  otcOrders: OTCOrdersFetchMethods;
  delta: DeltaFetchMethods;
  quote: QuoteFetchMethods;
} & Required<ConstructBaseInput>;

export type QuoteFetchMethods = GetQuoteFunctions;

export type SimpleSDK = {
  swap: SwapSDKMethods<TxHash>;
  otcOrders: OTCOrderHandlers<TxHash>;
  delta: DeltaOrderHandlers<TxHash>;
  quote: QuoteFetchMethods;
} & Required<ConstructBaseInput>;

export type FetcherOptions = (
  | {
    axios: AxiosRequirement;
  }
  | { fetch: typeof fetch }
  | { fetcher: FetcherFunction }
) &
  ExtraFetchParams;

type SimpleOptions = ConstructBaseInput & FetcherOptions;

export type ProviderOptions = (
  | EthersProviderDeps
  | { web3: Web3 }
  | { viemClient: MinViemClient }
) & {
  account: Address;
};

const constructFetcher = (options: FetcherOptions): FetcherFunction => {
  if ('axios' in options) {
    return constructAxiosFetcher(options.axios, options);
  }
  if ('fetch' in options) {
    return constructFetchFetcher(options.fetch, options);
  }
  return (params) => {
    // adding apiKey to headers if it's provided
    const headers = options?.apiKey
      ? {
        ...options.headers,
        'X-API-KEY': options.apiKey,
        ...params.headers,
        ...params.requestParams?.headers,
      }
      : {
        ...options.headers,
        ...params.headers,
        ...params.requestParams?.headers,
      };

    return options.fetcher({ ...params, headers });
  };
};

/** @description construct SDK with methods that fetch from API and optionally with blockchain provider calling methods */
export function constructSimpleSDK(options: SimpleOptions): SimpleFetchSDK;

export function constructSimpleSDK(
  options: SimpleOptions,
  providerOptions: ProviderOptions
): SimpleSDK;
export function constructSimpleSDK(
  options: SimpleOptions,
  providerOptions?: ProviderOptions
): SimpleFetchSDK | SimpleSDK {
  const fetcher = constructFetcher(options);

  if (!providerOptions) {
    const config: ConstructFetchInput = {
      apiURL: options.apiURL,
      chainId: options.chainId,
      version: options.version,
      fetcher,
    };

    // include all available functions that don't need `contractCaller`
    const swap: SwapFetchMethods = constructPartialSDK(
      config,
      constructGetBalances,
      constructGetTokens,
      constructGetSpender,
      constructBuildTx,
      constructGetAdapters,
      constructGetRate,
      constructSwapTx
    );

    const otcOrders = constructPartialSDK(
      config,
      constructBuildOTCOrder,
      constructPostOTCOrder,
      constructGetOTCOrders,
      constructGetOTCOrdersContract,
      constructBuildOTCOrderTx
    );

    const delta = constructPartialSDK(
      config,
      constructBuildDeltaOrder,
      constructPostDeltaOrder,
      constructGetDeltaOrders,
      constructGetDeltaPrice,
      constructGetDeltaContract,
      constructGetPartnerFee,
      constructGetBridgeRoutes,
      constructIsTokenSupportedInDelta
    );

    const quote = constructPartialSDK(config, constructGetQuote);

    return {
      swap,
      otcOrders,
      delta,
      quote,
      apiURL: options.apiURL ?? API_URL,
      chainId: options.chainId,
      version: options.version ?? DEFAULT_VERSION,
    };
  }

  const contractCaller = constructSimpleContractCaller(providerOptions);

  const config: SDKConfig<TxHash> = {
    apiURL: options.apiURL,
    version: options.version,
    chainId: options.chainId,
    fetcher,
    contractCaller,
  };

  const swap: SwapSDKMethods<TxHash> = constructSwapSDK(config);

  const otcOrders: OTCOrderHandlers<TxHash> =
    constructAllOTCOrdersHandlers<TxHash>(config);

  const delta: DeltaOrderHandlers<TxHash> =
    constructAllDeltaOrdersHandlers<TxHash>(config);

  const quote = constructGetQuote(config);

  return {
    swap,
    otcOrders,
    delta,
    quote,
    apiURL: options.apiURL ?? API_URL,
    chainId: options.chainId,
    version: options.version ?? DEFAULT_VERSION,
  };
}

function constructSimpleContractCaller(
  providerOptions: ProviderOptions
): ContractCallerFunctions<TxHash> {
  if ('ethersProviderOrSigner' in providerOptions) {
    const {
      staticCall,
      transactCall: _transactCall,
      signTypedDataCall,
    } = constructEthersV5ContractCaller(
      providerOptions,
      providerOptions.account
    );

    const transactCall: TransactionContractCallerFn<TxHash> = async (
      params
    ) => {
      const contractTx = await _transactCall(params);

      // as soon as tx is sent
      // returning tx hash, it's up to the user to wait for tx
      return contractTx.hash as TxHash;
    };

    return { staticCall, transactCall, signTypedDataCall };
  }

  if ('ethersV6ProviderOrSigner' in providerOptions) {
    const {
      staticCall,
      transactCall: _transactCall,
      signTypedDataCall,
    } = constructEthersV6ContractCaller(
      providerOptions,
      providerOptions.account
    );

    const transactCall: TransactionContractCallerFn<TxHash> = async (
      params
    ) => {
      const contractTx = await _transactCall(params);

      // as soon as tx is sent
      // returning tx hash, it's up to the user to wait for tx
      return contractTx.hash as TxHash;
    };

    return { staticCall, transactCall, signTypedDataCall };
  }

  if ('viemClient' in providerOptions) {
    const contractCaller = constructViemContractCaller(
      providerOptions.viemClient,
      providerOptions.account
    );
    return contractCaller;
  }

  const {
    staticCall,
    transactCall: _transactCall,
    signTypedDataCall,
  } = constructWeb3ContractCaller(
    providerOptions.web3,
    providerOptions.account
  );

  const transactCall: TransactionContractCallerFn<TxHash> = async (params) => {
    const unpromiEvent = await _transactCall(params);

    // as soon as tx is sent
    // returning tx hash, it's up to the user to wait for tx
    return new Promise<TxHash>((resolve, reject) => {
      unpromiEvent.once('transactionHash', (hash) => resolve(hash as TxHash));
      unpromiEvent.once('error', reject);
    });
  };

  return { staticCall, transactCall, signTypedDataCall };
}
