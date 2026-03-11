import type { ConstructFetchInput, RequestParameters } from '../../types';
import { constructGetDeltaContract } from './getDeltaContract';
import type { DeltaPrice } from './getDeltaPrice';
import { constructGetPartnerFee } from './getPartnerFee';
import {
  buildExternalOrderSignableData,
  type BuildExternalOrderDataInput,
  type SignableExternalOrderData,
} from './helpers/buildExternalOrderData';
import type { AmountsWithSlippage } from './helpers/types';
import { SwapSideToOrderKind } from './helpers/types';
import type { MarkOptional } from 'ts-essentials';
import { resolvePartnerFee, resolveAmounts } from './helpers/misc';
export type { SignableExternalOrderData } from './helpers/buildExternalOrderData';

type BuildExternalDeltaOrderParamsBase = {
  /** @description The address of the order owner */
  owner: string;
  /** @description The address of the external handler contract */
  handler: string;
  /** @description Protocol-specific encoded bytes for the external handler */
  data: string;
  /** @description The address of the src token */
  srcToken: string;
  /** @description The address of the dest token */
  destToken: string;
  /** @description The deadline for the order */
  deadline?: number;
  /** @description The nonce of the order */
  nonce?: number | string;
  /** @description Optional permit signature for the src token */
  permit?: string;
  /** @description Partner string */
  partner?: string;
  /** @description partner fee in basis points (bps), 50bps=0.5% */
  partnerFeeBps?: number;
  /** @description partner address */
  partnerAddress?: string;
  /** @description take surplus */
  partnerTakesSurplus?: boolean;
  /** @description A boolean indicating whether the surplus should be capped. True by default */
  capSurplus?: boolean;
  /** @description Metadata for the order, hex string */
  metadata?: string;

  /** @description price response received from /delta/prices (getDeltaPrice method) */
  deltaPrice: MarkOptional<
    Pick<
      DeltaPrice,
      'destAmount' | 'partner' | 'partnerFee' | 'destToken' | 'srcAmount'
    >,
    'partner' | 'partnerFee'
  >;
};

export type BuildExternalDeltaOrderParams = BuildExternalDeltaOrderParamsBase &
  AmountsWithSlippage;

type BuildExternalDeltaOrder = (
  buildOrderParams: BuildExternalDeltaOrderParams,
  requestParams?: RequestParameters
) => Promise<SignableExternalOrderData>;

export type BuildExternalDeltaOrderFunctions = {
  /** @description Build External Orders to be posted to Delta API for execution */
  buildExternalDeltaOrder: BuildExternalDeltaOrder;
};

export const constructBuildExternalDeltaOrder = (
  options: ConstructFetchInput
): BuildExternalDeltaOrderFunctions => {
  const { chainId } = options;

  // cached internally
  const { getDeltaContract } = constructGetDeltaContract(options);
  // cached internally for `partner`
  const { getPartnerFee } = constructGetPartnerFee(options);

  const buildExternalDeltaOrder: BuildExternalDeltaOrder = async (
    options,
    requestParams
  ) => {
    const ParaswapDelta = await getDeltaContract(requestParams);
    if (!ParaswapDelta) {
      throw new Error(`Delta is not available on chain ${chainId}`);
    }

    const { partnerAddress, partnerFeeBps, partnerTakesSurplus } =
      await resolvePartnerFee(options, getPartnerFee, requestParams);

    const { srcAmount, destAmount, expectedAmount, swapSide } =
      resolveAmounts(options);

    const input: BuildExternalOrderDataInput = {
      owner: options.owner,
      handler: options.handler,
      srcToken: options.srcToken,
      destToken: options.deltaPrice.destToken,
      srcAmount,
      destAmount,
      expectedAmount,
      deadline: options.deadline,
      nonce: options.nonce?.toString(10),
      permit: options.permit,
      kind: SwapSideToOrderKind[swapSide],
      metadata: options.metadata,
      data: options.data,

      chainId,
      paraswapDeltaAddress: ParaswapDelta,
      partnerAddress,
      partnerTakesSurplus,
      partnerFeeBps,

      capSurplus: options.capSurplus,
    };

    return buildExternalOrderSignableData(input);
  };

  return {
    buildExternalDeltaOrder,
  };
};
