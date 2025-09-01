import { API_URL, SwapSide } from '../../constants';
import { constructSearchString } from '../../helpers/misc';
import type { BridgePrice, DeltaPrice } from '../delta/getDeltaPrice';
import type {
  ConstructFetchInput,
  EnumerateLiteral,
  RequestParameters,
  OptimalRate,
} from '../../types';

type TradeMode = 'delta' | 'market' | 'all';
// enable passing enum value by string
type SwapSideUnion = EnumerateLiteral<typeof SwapSide>;

export type QuoteParams<M extends TradeMode = TradeMode> = {
  /** @description Source Token Address */
  srcToken: string;
  /** @description Destination Token Address */
  destToken: string;
  /** @description srcToken amount (in case of SELL) or destToken amount (in case of BUY), in wei */
  amount: string;
  /** @description Source Token Decimals.  */
  srcDecimals: number;
  /** @description Destination Token Decimals */
  destDecimals: number;
  /** @description SELL or BUY, default is SELL */
  side?: SwapSideUnion;
  /** @description User's Wallet Address */
  userAddress?: string;
  /** @description Partner string */
  partner?: string;
  /** @description Preferred mode for the trade. In case of "all", Delta pricing is returned, with Market as a fallback */
  mode: M;
};

type QuoteQueryOptions = QuoteParams & {
  chainId: number; // will return error from API on unsupported chains
};

type FallbackReason = {
  errorType: string;
  details: string;
};

export type QuoteWithMarketPrice = {
  market: OptimalRate;
};

export type QuoteWithDeltaPrice = {
  delta: DeltaPrice;
  deltaAddress: string;
};

export type QuoteWithBridgePrice = {
  delta: BridgePrice;
  deltaAddress: string;
};

export type QuoteWithDeltaPriceAndBridgePrice = {
  delta: DeltaPrice | BridgePrice;
  deltaAddress: string;
};

export type QuoteWithMarketPriceAsFallback = QuoteWithMarketPrice & {
  fallbackReason: FallbackReason;
};

export type QuoteResponse =
  | QuoteWithDeltaPrice
  | QuoteWithMarketPrice
  | QuoteWithBridgePrice
  | QuoteWithMarketPriceAsFallback
  | QuoteWithDeltaPriceAndBridgePrice;

interface GetQuoteFunc {
  (
    options: QuoteParams<'delta'> & { destChainId?: undefined },
    requestParams?: RequestParameters
  ): Promise<QuoteWithDeltaPrice>;
  (
    options: QuoteParams<'delta'> & { destChainId: number },
    requestParams?: RequestParameters
  ): Promise<QuoteWithBridgePrice>;
  (
    options: QuoteParams<'delta'>,
    requestParams?: RequestParameters
  ): Promise<QuoteWithDeltaPriceAndBridgePrice>;
  (
    options: QuoteParams<'market'>,
    requestParams?: RequestParameters
  ): Promise<QuoteWithMarketPrice>;
  (
    options: QuoteParams<'all'> & { destChainId?: undefined },
    requestParams?: RequestParameters
  ): Promise<
    QuoteWithDeltaPrice | QuoteWithMarketPriceAsFallback // "all" mode tries for deltaPrice and falls back to market priceRoute
  >;
  (
    options: QuoteParams<'all'> & { destChainId: number },
    requestParams?: RequestParameters
  ): Promise<QuoteWithBridgePrice>;
  (options: QuoteParams<'all'>, requestParams?: RequestParameters): Promise<
    QuoteWithDeltaPriceAndBridgePrice | QuoteWithMarketPriceAsFallback // "all" mode tries for deltaPrice and falls back to market priceRoute
  >;
  (
    options: QuoteParams,
    requestParams?: RequestParameters
  ): Promise<QuoteResponse>;
}

export type GetQuoteFunctions = {
  getQuote: GetQuoteFunc;
};

export const constructGetQuote = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): GetQuoteFunctions => {
  const pricesUrl = `${apiURL}/quote` as const;

  function getQuote(
    options: QuoteParams<'delta'> & { destChainId?: undefined },
    requestParams?: RequestParameters
  ): Promise<QuoteWithDeltaPrice>;
  function getQuote(
    options: QuoteParams<'delta'> & { destChainId: number },
    requestParams?: RequestParameters
  ): Promise<QuoteWithBridgePrice>;
  function getQuote(
    options: QuoteParams<'delta'>,
    requestParams?: RequestParameters
  ): Promise<QuoteWithDeltaPriceAndBridgePrice>;
  function getQuote(
    options: QuoteParams<'market'>,
    requestParams?: RequestParameters
  ): Promise<QuoteWithMarketPrice>;
  function getQuote(
    options: QuoteParams<'all'> & { destChainId?: undefined },
    requestParams?: RequestParameters
  ): Promise<
    QuoteWithDeltaPrice | QuoteWithMarketPriceAsFallback // "all" mode tries for deltaPrice and falls back to market priceRoute
  >;
  function getQuote(
    options: QuoteParams<'all'> & { destChainId: number },
    requestParams?: RequestParameters
  ): Promise<QuoteWithBridgePrice>;
  function getQuote(
    options: QuoteParams<'all'>,
    requestParams?: RequestParameters
  ): Promise<
    QuoteWithDeltaPriceAndBridgePrice | QuoteWithMarketPriceAsFallback
  >;
  function getQuote(
    options: QuoteParams,
    requestParams?: RequestParameters
  ): Promise<QuoteResponse>;
  async function getQuote(
    options: QuoteParams,
    requestParams?: RequestParameters
  ): Promise<QuoteResponse> {
    const search = constructSearchString<QuoteQueryOptions>({
      ...options,
      chainId,
      side: options.side ?? SwapSide.SELL,
    });

    const fetchURL = `${pricesUrl}/${search}` as const;

    const data = await fetcher<QuoteResponse>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    return data;
  }

  return {
    getQuote,
  };
};
