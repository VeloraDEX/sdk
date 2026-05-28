import type { SDKConfig } from './partial';
import { constructSwapSDK, SwapSDKMethods } from '../methods/swap';
import {
  constructAllLimitOrdersHandlers,
  LimitOrderHandlers,
} from '../methods/limitOrders';
import {
  constructAllNFTOrdersHandlers,
  NFTOrderHandlers,
} from '../methods/nftOrders';
import {
  constructAllDeltaOrdersHandlers,
  DeltaOrderHandlers,
} from '../methods/delta';
import {
  constructAllDeltaOrdersHandlers as constructAllDeltaV2OrdersHandlers,
  DeltaOrderHandlers as DeltaV2OrderHandlers,
} from '../methods/deltaV2';
import {
  constructGetQuote,
  GetQuoteFunctions,
} from '../methods/quote/getQuote';
import { ConstructBaseInput } from '../types';
import { API_URL, DEFAULT_VERSION } from '../constants';

export type AllSDKMethods<TxResponse> = {
  swap: SwapSDKMethods<TxResponse>;
  /** @deprecated Limit Orders are deprecated and will be removed in a future version. */
  limitOrders: LimitOrderHandlers<TxResponse>;
  /** @deprecated NFT Orders are deprecated and will be removed in a future version. */
  nftOrders: NFTOrderHandlers<TxResponse>;
  delta: DeltaOrderHandlers<TxResponse>;
  deltaV2: DeltaV2OrderHandlers<TxResponse>;
  quote: GetQuoteFunctions;
} & Required<ConstructBaseInput>;

/** @description construct SDK with every method, for swap and limitOrders */
export const constructFullSDK = <TxResponse = any>(
  config: SDKConfig<TxResponse>
): AllSDKMethods<TxResponse> => {
  // include all available functions
  const swap: SwapSDKMethods<TxResponse> = constructSwapSDK(config);
  const limitOrders: LimitOrderHandlers<TxResponse> =
    constructAllLimitOrdersHandlers(config);
  const nftOrders: NFTOrderHandlers<TxResponse> =
    constructAllNFTOrdersHandlers(config);
  const delta: DeltaOrderHandlers<TxResponse> =
    constructAllDeltaOrdersHandlers(config);
  const deltaV2: DeltaV2OrderHandlers<TxResponse> =
    constructAllDeltaV2OrdersHandlers(config);
  const quote = constructGetQuote(config);

  return {
    swap,
    limitOrders,
    nftOrders,
    delta,
    deltaV2,
    quote,
    apiURL: config.apiURL ?? API_URL,
    chainId: config.chainId,
    version: config.version ?? DEFAULT_VERSION,
  };
};
