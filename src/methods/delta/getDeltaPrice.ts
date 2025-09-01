import { Bridge } from '../..';
import { API_URL, SwapSide } from '../../constants';
import { constructSearchString } from '../../helpers/misc';
import type {
  ConstructFetchInput,
  EnumerateLiteral,
  RequestParameters,
} from '../../types';
import { ZERO_ADDRESS } from '../common/orders/buildOrderData';
import { BridgePriceInfo } from './helpers/types';

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
  /** @description Beneficiary Address */
  beneficiary?: string; // beneficiary==owner if no transferTo
  /** @description Partner string. */
  partner?: string;
  /** @description Destination Chain ID for Crosschain Orders */
  destChainId?: number;
  /** @description SELL or BUY, default is SELL */
  side?: SwapSideUnion;

  includeAgents?: string[];
  excludeAgents?: string[];
};

type DeltaPriceQueryOptions = Omit<
  DeltaPriceParams,
  'includeAgents' | 'excludeAgents'
> & {
  chainId: number; // will return error from API on unsupported chains
  includeAgents?: string;
  excludeAgents?: string;
};

// for same-chain Orders, all 0 params
export const DEFAULT_BRIDGE = {
  protocolSelector: '0x00000000', // 4 bytes
  destinationChainId: 0,
  outputToken: ZERO_ADDRESS,
  scalingFactor: 0,
  protocolData: '0x',
} as const satisfies Bridge;

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
  bridge: Bridge; // for single-chain DeltaPrice, it's DEFAULT_BRIDGE
};

export type BridgePrice = Omit<DeltaPrice, 'bridge'> & {
  // destAmountAfterBridge: string; // became bridgeInfo.destAmountAfterBridge
  // destUSDAfterBridge: string; // became bridgeInfo.destUSDAfterBridge
  // bridgeFee: string; // became bridgeInfo.fees[0].amount
  // bridgeFeeUSD: string; // became bridgeInfo.fees[0].amountInUSD
  // poolAddress: string;
  bridge: Bridge;
  bridgeInfo: BridgePriceInfo;
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
    const { includeAgents, excludeAgents, ...rest } = options;
    const includeAgentsString = includeAgents
      ? includeAgents.join(',')
      : undefined;
    const excludeAgentsString = excludeAgents
      ? excludeAgents.join(',')
      : undefined;

    const search = constructSearchString<DeltaPriceQueryOptions>({
      ...rest,
      chainId,
      side: options.side ?? SwapSide.SELL,
      includeAgents: includeAgentsString,
      excludeAgents: excludeAgentsString,
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
