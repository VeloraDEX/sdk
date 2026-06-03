import type { SDKConfig } from './partial';
import { constructSwapSDK, SwapSDKMethods } from '../methods/swap';
import {
  constructAllOTCOrdersHandlers,
  OTCOrderHandlers,
} from '../methods/otcOrders';
import {
  constructAllNFTOrdersHandlers,
  NFTOrderHandlers,
} from '../methods/nftOrders';
import {
  constructAllDeltaOrdersHandlers,
  DeltaOrderHandlers,
} from '../methods/delta';
import {
  constructGetQuote,
  GetQuoteFunctions,
} from '../methods/quote/getQuote';
import { ConstructBaseInput } from '../types';
import { API_URL, DEFAULT_VERSION } from '../constants';

export type AllSDKMethods<TxResponse> = {
  swap: SwapSDKMethods<TxResponse>;
  otcOrders: OTCOrderHandlers<TxResponse>;
  /** @deprecated NFT Orders are deprecated and will be removed in a future version. */
  nftOrders: NFTOrderHandlers<TxResponse>;
  delta: DeltaOrderHandlers<TxResponse>;
  quote: GetQuoteFunctions;
} & Required<ConstructBaseInput>;

/** @description construct SDK with every method, for swap and otcOrders */
export const constructFullSDK = <TxResponse = any>(
  config: SDKConfig<TxResponse>
): AllSDKMethods<TxResponse> => {
  // include all available functions
  const swap: SwapSDKMethods<TxResponse> = constructSwapSDK(config);
  const otcOrders: OTCOrderHandlers<TxResponse> =
    constructAllOTCOrdersHandlers(config);
  const nftOrders: NFTOrderHandlers<TxResponse> =
    constructAllNFTOrdersHandlers(config);
  const delta: DeltaOrderHandlers<TxResponse> =
    constructAllDeltaOrdersHandlers(config);
  const quote = constructGetQuote(config);

  return {
    swap,
    otcOrders,
    nftOrders,
    delta,
    quote,
    apiURL: config.apiURL ?? API_URL,
    chainId: config.chainId,
    version: config.version ?? DEFAULT_VERSION,
  };
};
