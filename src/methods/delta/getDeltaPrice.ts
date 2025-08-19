import { Bridge } from '../..';
import { API_URL, SwapSide } from '../../constants';
import { constructSearchString } from '../../helpers/misc';
import type {
  ConstructFetchInput,
  EnumerateLiteral,
  RequestParameters,
} from '../../types';

type SwapSideUnion = EnumerateLiteral<typeof SwapSide>;

export type DeltaPriceParams = {
  /** @description Source Token Address. Not Native Token */
  srcToken: string;
  /** @description Destination Token Address */
  destToken: string;
  /** @description srcToken amount in wei */
  amount: string;
  /** @description Source Token Decimals */
  srcDecimals: number;
  /** @description Destination Token Decimals */
  destDecimals: number;
  /** @description User's Wallet Address */
  userAddress?: string;
  /** @description Partner string. */
  partner?: string;
  /** @description Destination Chain ID for Crosschain Orders */
  destChainId?: number;
  /** @description SELL or BUY, default is SELL */
  side?: SwapSideUnion;
};

type DeltaPriceQueryOptions = DeltaPriceParams & {
  chainId: number; // will return error from API on unsupported chains
};

export type DeltaPrice = {
  srcToken: string;
  destToken: string;
  srcAmount: string;
  /** @description Available for BUY side */
  srcAmountBeforeFee?: string;
  destAmount: string;
  /** @description Available for SELL side */
  destAmountBeforeFee?: string;
  gasCost: string;
  gasCostBeforeFee: string;
  gasCostUSD: string;
  gasCostUSDBeforeFee: string;
  srcUSD: string;
  /** @description Available for BUY side */
  srcUSDBeforeFee?: string;
  destUSD: string;
  /** @description Available for SELL side */
  destUSDBeforeFee?: string;
  partner: string;
  partnerFee: number; // in %
  hmac: string;
};

export type BridgePrice = DeltaPrice & {
  destAmountAfterBridge: string;
  destUSDAfterBridge: string;
  bridgeFee: string;
  bridgeFeeUSD: string;
  poolAddress: string;
  bridge: Pick<Bridge, 'destinationChainId' | 'outputToken'>;
};

type DeltaPriceResponse = {
  price: DeltaPrice | BridgePrice;
  deltaAddress: string;
};

interface GetDeltaPrice {
  (
    options: DeltaPriceParams & { destChainId: number },
    requestParams?: RequestParameters
  ): Promise<BridgePrice>;
  (
    options: DeltaPriceParams & { destChainId?: undefined },
    requestParams?: RequestParameters
  ): Promise<DeltaPrice>;
  (options: DeltaPriceParams, requestParams?: RequestParameters): Promise<
    DeltaPrice | BridgePrice
  >;
}

export type GetDeltaPriceFunctions = {
  getDeltaPrice: GetDeltaPrice;
};

export const constructGetDeltaPrice = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): GetDeltaPriceFunctions => {
  const pricesUrl = `${apiURL}/delta/prices` as const;

  async function getDeltaPrice(
    options: DeltaPriceParams & { destChainId: number },
    requestParams?: RequestParameters
  ): Promise<BridgePrice>;
  async function getDeltaPrice(
    options: DeltaPriceParams & { destChainId?: undefined },
    requestParams?: RequestParameters
  ): Promise<DeltaPrice>;
  async function getDeltaPrice(
    options: DeltaPriceParams,
    requestParams?: RequestParameters
  ): Promise<DeltaPrice | BridgePrice>;
  async function getDeltaPrice(
    options: DeltaPriceParams,
    requestParams?: RequestParameters
  ): Promise<DeltaPrice | BridgePrice> {
    const search = constructSearchString<DeltaPriceQueryOptions>({
      ...options,
      chainId,
      side: options.side ?? SwapSide.SELL,
    });

    const fetchURL = `${pricesUrl}/${search}` as const;

    const data = await fetcher<DeltaPriceResponse>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    return data.price;
  }

  return {
    getDeltaPrice,
  };
};
