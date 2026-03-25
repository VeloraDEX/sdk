import type { ConstructFetchInput, RequestParameters } from '../../types';
import { constructGetDeltaContract } from './getDeltaContract';
import type { BridgePrice } from './getDeltaPrice';
import { constructGetPartnerFee } from './getPartnerFee';
import {
  buildTWAPSignableOrderData,
  type BuildTWAPOrderDataInput,
  type SignableTWAPOrderData,
} from './helpers/buildTWAPOrderData';
import { applySlippage, resolvePartnerFee } from './helpers/misc';
import type { MarkOptional } from 'ts-essentials';
export type { SignableTWAPOrderData } from './helpers/buildTWAPOrderData';

type BuildTWAPDeltaOrderParamsBase = {
  /** @description The address of the order owner */
  owner: string;
  /** @description The address of the order beneficiary */
  beneficiary?: string;
  /** @description The address of the src token */
  srcToken: string;
  /** @description The address of the dest token. For Crosschain Order - destination token on the destination chain */
  destToken: string;
  /** @description The deadline for the order */
  deadline?: number;
  /** @description The nonce of the order */
  nonce?: number | string;
  /** @description Optional permit signature for the src token */
  permit?: string;
  /** @description Partner string */
  partner?: string;
  /** @description Destination Chain ID for Crosschain Orders */
  destChainId?: number;
  /** @description Seconds between slice executions (min 60) */
  interval: number;
  /** @description Number of slices (min 2) */
  numSlices: number;
  /** @description Slippage in basis points (bps). 10000 = 100%, 50 = 0.5% */
  slippage?: number;

  /** @description price response received from /delta/prices (getDeltaPrice method) for a single slice */
  deltaPrice: MarkOptional<
    Pick<
      BridgePrice,
      | 'destAmount'
      | 'partner'
      | 'partnerFee'
      | 'destToken'
      | 'srcAmount'
      | 'bridge'
    >,
    'partner' | 'partnerFee'
  >;

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
};

type BuildTWAPSellOrderParams = BuildTWAPDeltaOrderParamsBase & {
  /** @description Must be "TWAPOrder" for sell orders */
  onChainOrderType: 'TWAPOrder';
  /** @description Total source token amount across all slices */
  totalSrcAmount: string;
};

type BuildTWAPBuyOrderParams = BuildTWAPDeltaOrderParamsBase & {
  /** @description Must be "TWAPBuyOrder" for buy orders */
  onChainOrderType: 'TWAPBuyOrder';
  /** @description Total destination token amount to buy across all slices */
  totalDestAmount: string;
  /** @description Maximum source token amount willing to spend */
  maxSrcAmount: string;
};

export type BuildTWAPDeltaOrderParams =
  | BuildTWAPSellOrderParams
  | BuildTWAPBuyOrderParams;

type BuildTWAPDeltaOrder = (
  buildOrderParams: BuildTWAPDeltaOrderParams,
  requestParams?: RequestParameters
) => Promise<SignableTWAPOrderData>;

export type BuildTWAPDeltaOrderFunctions = {
  /** @description Build TWAP Orders (sell or buy) to be posted to Delta API for execution */
  buildTWAPDeltaOrder: BuildTWAPDeltaOrder;
};

export const constructBuildTWAPDeltaOrder = (
  options: ConstructFetchInput
): BuildTWAPDeltaOrderFunctions => {
  const { chainId } = options;

  const { getDeltaContract } = constructGetDeltaContract(options);
  const { getPartnerFee } = constructGetPartnerFee(options);

  const buildTWAPDeltaOrder: BuildTWAPDeltaOrder = async (
    params,
    requestParams
  ) => {
    const ParaswapDelta = await getDeltaContract(requestParams);
    if (!ParaswapDelta) {
      throw new Error(`Delta is not available on chain ${chainId}`);
    }

    const { partnerAddress, partnerFeeBps, partnerTakesSurplus } =
      await resolvePartnerFee(params, getPartnerFee, requestParams);

    const commonInput = {
      owner: params.owner,
      beneficiary: params.beneficiary,
      srcToken: params.srcToken,
      destToken: params.deltaPrice.destToken,
      deadline: params.deadline,
      nonce: params.nonce?.toString(10),
      permit: params.permit,
      metadata: params.metadata,
      interval: params.interval,
      numSlices: params.numSlices,
      bridge: params.deltaPrice.bridge,

      chainId,
      paraswapDeltaAddress: ParaswapDelta,
      partnerAddress,
      partnerTakesSurplus,
      partnerFeeBps,
      capSurplus: params.capSurplus,
    };

    let input: BuildTWAPOrderDataInput;

    if (params.onChainOrderType === 'TWAPOrder') {
      const slippage = params.slippage ?? 0;
      const destAmountPerSlice =
        slippage > 0
          ? applySlippage({
              amount: params.deltaPrice.destAmount,
              slippageBps: slippage,
              increase: false,
            })
          : params.deltaPrice.destAmount;

      input = {
        ...commonInput,
        onChainOrderType: 'TWAPOrder',
        destAmountPerSlice,
        totalSrcAmount: params.totalSrcAmount,
      };
    } else {
      const slippage = params.slippage ?? 0;
      const maxSrcAmount =
        slippage > 0
          ? applySlippage({
              amount: params.deltaPrice.srcAmount,
              slippageBps: slippage,
              increase: true,
            })
          : params.maxSrcAmount;

      input = {
        ...commonInput,
        onChainOrderType: 'TWAPBuyOrder',
        totalDestAmount: params.totalDestAmount,
        maxSrcAmount,
      };
    }

    return buildTWAPSignableOrderData(input);
  };

  return {
    buildTWAPDeltaOrder,
  };
};
