import { API_URL } from '../../constants';
import type { ConstructFetchInput, RequestParameters } from '../../types';
import type { ExternalDeltaOrder } from '../delta/helpers/types';
import type { BuiltDeltaOrder, DeltaRoute } from './types';
export type { BuiltDeltaOrder } from './types';

export type BuildExternalDeltaOrderParams = {
  /** @description The address of the order owner */
  owner: string;
  /** @description The address of the external handler contract */
  handler: string;
  /** @description Protocol-specific encoded bytes for the external handler */
  data: string;
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
  /** @description Partner fee in basis points (bps), 50bps=0.5% */
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

  /** @description DeltaRoute from getDeltaPrice */
  route: DeltaRoute;
  /** @description Order side. SELL or BUY. */
  side: 'SELL' | 'BUY';
  /** @description Slippage in basis points (bps). Default 0. */
  slippage?: number;
  /** @description If passed, the server will use this as SELL destAmount (as BUY srcAmount) and expectedAmount */
  limitAmount?: string;
};

type BuildExternalDeltaOrder = (
  buildOrderParams: BuildExternalDeltaOrderParams,
  requestParams?: RequestParameters
) => Promise<BuiltDeltaOrder<ExternalDeltaOrder>>;

export type BuildExternalDeltaOrderFunctions = {
  /** @description Build a Delta v2 External Order from a DeltaRoute via the server endpoint, ready to sign and post. */
  buildExternalDeltaOrder: BuildExternalDeltaOrder;
};

export const constructBuildExternalDeltaOrder = (
  options: ConstructFetchInput
): BuildExternalDeltaOrderFunctions => {
  const { apiURL = API_URL, chainId, fetcher } = options;
  const buildUrl = `${apiURL}/delta/v2/orders/build` as const;

  const buildExternalDeltaOrder: BuildExternalDeltaOrder = async (
    params,
    requestParams
  ) =>
    fetcher<BuiltDeltaOrder<ExternalDeltaOrder>>({
      url: buildUrl,
      method: 'POST',
      data: {
        chainId,
        side: params.side,
        route: params.route,
        owner: params.owner,
        handler: params.handler,
        data: params.data,
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
        orderType: 'ExternalOrder',
      },
      requestParams,
    });

  return { buildExternalDeltaOrder };
};
