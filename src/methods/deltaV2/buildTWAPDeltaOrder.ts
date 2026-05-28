import { API_URL } from '../../constants';
import type { ConstructFetchInput, RequestParameters } from '../../types';
import type { BuiltDeltaOrder, DeltaRoute } from './types';
export type { BuiltDeltaOrder } from './types';

type BuildTWAPDeltaOrderBase = {
  /** @description The address of the order owner */
  owner: string;
  /** @description The address of the order beneficiary. Defaults to owner. */
  beneficiary?: string;
  /** @description The deadline for the order (unix seconds) */
  deadline?: number;
  /** @description The nonce of the order. Random if omitted. */
  nonce?: string;
  /** @description Optional permit signature for the src token. Defaults to "0x". */
  permit?: string;
  /** @description Partner string. Passed to the server to resolve partner fee details. */
  partner?: string;
  /** @description Seconds between slice executions (min 60) */
  interval: number;
  /** @description Number of slices (min 2) */
  numSlices: number;
  /** @description Slippage in basis points (bps). 10000 = 100%, 50 = 0.5%. Default 0. */
  slippage?: number;
  /** @description DeltaRoute from getDeltaPrice for a single slice */
  route: DeltaRoute;
  /** @description Partner fee in basis points (bps) */
  partnerFeeBps?: number;
  /** @description Partner address */
  partnerAddress?: string;
  /** @description Take surplus flag */
  partnerTakesSurplus?: boolean;
  /** @description Whether the surplus should be capped. True by default. */
  capSurplus?: boolean;
  /** @description Metadata for the order, hex string */
  metadata?: string;
  /** @description Designates the Order as partially fillable. Default false. */
  partiallyFillable?: boolean;
  /** @description If passed, the server will use this as SELL destAmount (as BUY srcAmount) and expectedAmount for each slice */
  limitAmount?: string;
};

export type BuildTWAPSellDeltaOrderParams = BuildTWAPDeltaOrderBase & {
  onChainOrderType: 'TWAPOrder';
  /** @description Total source token amount across all slices. route.origin.input.amount must equal floor(totalSrcAmount / numSlices). */
  totalSrcAmount: string;
};

export type BuildTWAPBuyDeltaOrderParams = BuildTWAPDeltaOrderBase & {
  onChainOrderType: 'TWAPBuyOrder';
  /** @description Total destination token amount to buy across all slices. route.origin.output.amount must equal floor(totalDestAmount / numSlices). */
  totalDestAmount: string;
  /** @description Maximum source token amount willing to spend across all slices. */
  maxSrcAmount: string;
};

export type BuildTWAPDeltaOrderParams =
  | BuildTWAPSellDeltaOrderParams
  | BuildTWAPBuyDeltaOrderParams;

type BuildTWAPDeltaOrder = (
  buildOrderParams: BuildTWAPDeltaOrderParams,
  requestParams?: RequestParameters
) => Promise<BuiltDeltaOrder>;

export type BuildTWAPDeltaOrderFunctions = {
  /** @description Build a Delta v2 TWAP Order (sell or buy) from a DeltaRoute via the server endpoint, ready to sign and post. */
  buildTWAPDeltaOrder: BuildTWAPDeltaOrder;
};

export const constructBuildTWAPDeltaOrder = (
  options: ConstructFetchInput
): BuildTWAPDeltaOrderFunctions => {
  const { apiURL = API_URL, chainId, fetcher } = options;
  const buildUrl = `${apiURL}/delta/v2/orders/build` as const;

  const buildTWAPDeltaOrder: BuildTWAPDeltaOrder = async (
    params,
    requestParams
  ) => {
    const commonBody = {
      chainId,
      route: params.route,
      owner: params.owner,
      beneficiary: params.beneficiary,
      deadline: params.deadline,
      nonce: params.nonce,
      permit: params.permit,
      slippage: params.slippage,
      limitAmount: params.limitAmount,
      metadata: params.metadata,
      partiallyFillable: params.partiallyFillable,
      partner: params.partner,
      partnerAddress: params.partnerAddress,
      partnerFeeBps: params.partnerFeeBps,
      partnerTakesSurplus: params.partnerTakesSurplus,
      capSurplus: params.capSurplus,
      interval: params.interval,
      numSlices: params.numSlices,
    };

    if (params.onChainOrderType === 'TWAPOrder') {
      return fetcher<BuiltDeltaOrder>({
        url: buildUrl,
        method: 'POST',
        data: {
          ...commonBody,
          side: 'SELL',
          orderType: 'TWAPOrder',
          totalSrcAmount: params.totalSrcAmount,
        },
        requestParams,
      });
    }

    return fetcher<BuiltDeltaOrder>({
      url: buildUrl,
      method: 'POST',
      data: {
        ...commonBody,
        side: 'BUY',
        orderType: 'TWAPBuyOrder',
        totalDestAmount: params.totalDestAmount,
        maxSrcAmount: params.maxSrcAmount,
      },
      requestParams,
    });
  };

  return { buildTWAPDeltaOrder };
};
