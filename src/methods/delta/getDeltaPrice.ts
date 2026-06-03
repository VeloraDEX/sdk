import { API_URL, SwapSide } from '../../constants';
import { constructSearchString } from '../../helpers/misc';
import type {
  ConstructFetchInput,
  EnumerateLiteral,
  RequestParameters,
} from '../../types';
import type { DeltaPrice } from './types';

type SwapSideUnion = EnumerateLiteral<typeof SwapSide>;

export type DeltaPriceParams = {
  /** @description Source Token Address */
  srcToken: string;
  /** @description Destination Token Address. For Crosschain Orders, the destination token on the destination chain */
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
  beneficiary?: string;
  /** @description Partner string. */
  partner?: string;
  /** @description Partner fee in basis points (bps), 50bps=0.5% */
  partnerFeeBps?: number;
  /** @description Destination Chain ID for Crosschain Orders */
  destChainId?: number;
  /** @description SELL or BUY, default is SELL */
  side?: SwapSideUnion;
  /** @description In %. Bypasses the API price impact check (default = 15%) */
  maxImpact?: number;
  maxUSDImpact?: number;

  includeAgents?: string[];
  excludeAgents?: string[];
  includeBridges?: string[];
  excludeBridges?: string[];

  /** @description Allow swap on destChain after bridge. Default is true. */
  allowBridgeAndSwap?: boolean;
  degenMode?: boolean;
};

type DeltaPriceQueryOptions = Omit<
  DeltaPriceParams,
  'includeAgents' | 'excludeAgents' | 'includeBridges' | 'excludeBridges'
> & {
  chainId: number;
  includeAgents?: string;
  excludeAgents?: string;
  includeBridges?: string;
  excludeBridges?: string;
};

type GetDeltaPrice = (
  options: DeltaPriceParams,
  requestParams?: RequestParameters
) => Promise<DeltaPrice>;

export type GetDeltaPriceFunctions = {
  /** @description Fetch a v2 price quote (route-based response). */
  getDeltaPrice: GetDeltaPrice;
};

export const constructGetDeltaPrice = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): GetDeltaPriceFunctions => {
  const pricesUrl = `${apiURL}/delta/v2/prices` as const;

  const getDeltaPrice: GetDeltaPrice = async (options, requestParams) => {
    const {
      includeAgents,
      excludeAgents,
      includeBridges,
      excludeBridges,
      ...rest
    } = options;

    const search = constructSearchString<DeltaPriceQueryOptions>({
      ...rest,
      chainId,
      side: options.side ?? SwapSide.SELL,
      includeAgents: includeAgents?.join(','),
      excludeAgents: excludeAgents?.join(','),
      includeBridges: includeBridges?.join(','),
      excludeBridges: excludeBridges?.join(','),
    });

    const fetchURL = `${pricesUrl}${search}` as const;

    const data = await fetcher<DeltaPrice>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    return data;
  };

  return { getDeltaPrice };
};
