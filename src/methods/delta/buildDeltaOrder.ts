import type {
  ConstructFetchInput,
  EnumerateLiteral,
  RequestParameters,
} from '../../types';
import { constructGetDeltaContract } from './getDeltaContract';
import type { BridgePrice } from './getDeltaPrice';
import { constructGetPartnerFee } from './getPartnerFee';
import {
  buildDeltaSignableOrderData,
  type BuildDeltaOrderDataInput,
  type SignableDeltaOrderData,
} from './helpers/buildDeltaOrderData';
import { SwapSideToOrderKind } from './helpers/types';
import { SwapSide } from '../../constants';
import type { MarkOptional } from 'ts-essentials';
import { ZERO_ADDRESS } from '../common/orders/buildOrderData';
export type { SignableDeltaOrderData } from './helpers/buildDeltaOrderData';

export type SwapSideUnion = EnumerateLiteral<typeof SwapSide>;

type BuildDeltaOrderDataParamsBase = {
  /** @description The address of the order owner */
  owner: string;
  /** @description The address of the order beneficiary */
  beneficiary?: string; // beneficiary==owner if no transferTo
  /** @description The address of the src token */
  srcToken: string; // lowercase
  /** @description The address of the dest token. For Crosschain Order - destination token on the destination chain */
  destToken: string; // lowercase
  /** @description The deadline for the order */
  deadline?: number; // seconds
  /** @description The nonce of the order */
  nonce?: number | string; // can be random, can even be Date.now()
  /** @description Optional permit signature for the src token https://developers.velora.xyz/api/velora-api/velora-delta-api/build-a-delta-order-to-sign#supported-permits-order#supported-permits */
  permit?: string; //can be "0x"
  /** @description Partner string. */
  partner?: string;

  /** @description Destination Chain ID for Crosschain Orders */
  destChainId?: number;

  /** @description price response received from /delta/prices (getDeltaPrice method) */
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

  /** @description The side of the order. Default is SELL */
  side?: SwapSideUnion;
  /** @description Metadata for the order, hex string */
  metadata?: string;
};

/** @description SELL with slippage: srcAmount provided, destAmount auto-computed from deltaPrice.destAmount */
type DeltaAmountsSellSlippage = {
  /** @description Slippage in basis points (bps). 10000 = 100%, 50 = 0.5% */
  slippage: number;
  /** @description The amount of src token to swap */
  srcAmount: string;
  destAmount?: never;
};
/** @description BUY with slippage: destAmount provided, srcAmount auto-computed from deltaPrice.srcAmount */
type DeltaAmountsBuySlippage = {
  /** @description Slippage in basis points (bps). 10000 = 100%, 50 = 0.5% */
  slippage: number;
  /** @description The minimum amount of dest token to receive */
  destAmount: string;
  srcAmount?: never;
};
/** @description Explicit amounts, no slippage (backward-compatible) */
type DeltaAmountsExplicit = {
  slippage?: never;
  /** @description The amount of src token to swap */
  srcAmount: string;
  /** @description The minimum amount of dest token to receive */
  destAmount: string;
};

export type BuildDeltaOrderDataParams = BuildDeltaOrderDataParamsBase &
  (DeltaAmountsSellSlippage | DeltaAmountsBuySlippage | DeltaAmountsExplicit);

type BuildDeltaOrder = (
  buildOrderParams: BuildDeltaOrderDataParams,
  requestParams?: RequestParameters
) => Promise<SignableDeltaOrderData>;

export type BuildDeltaOrderFunctions = {
  /** @description Build Orders to be posted to Delta API for execution */
  buildDeltaOrder: BuildDeltaOrder;
};

export const constructBuildDeltaOrder = (
  options: ConstructFetchInput
): BuildDeltaOrderFunctions => {
  const { chainId } = options;

  // cached internally
  const { getDeltaContract } = constructGetDeltaContract(options);
  // cached internally for `partner`
  const { getPartnerFee } = constructGetPartnerFee(options);

  const buildDeltaOrder: BuildDeltaOrder = async (options, requestParams) => {
    const ParaswapDelta = await getDeltaContract(requestParams);
    if (!ParaswapDelta) {
      throw new Error(`Delta is not available on chain ${chainId}`);
    }

    ////// Partner logic //////

    // externally supplied partner fee data takes precedence
    let partnerAddress = options.partnerAddress;
    let partnerFeeBps =
      options.partnerFeeBps ??
      (options.deltaPrice.partnerFee
        ? options.deltaPrice.partnerFee * 100
        : undefined);
    let partnerTakesSurplus = options.partnerTakesSurplus;

    // if fee given, takeSurplus is ignored
    const feeOrTakeSurplusSupplied =
      partnerFeeBps !== undefined || partnerTakesSurplus !== undefined;

    if (partnerAddress === undefined || feeOrTakeSurplusSupplied) {
      const partner = options.partner || options.deltaPrice.partner;
      if (!partner) {
        // if no partner given in options or deltaPrice, default partnerAddress to zero,
        // unless supplied explicitly
        partnerAddress = partnerAddress ?? ZERO_ADDRESS;
      } else {
        const partnerFeeResponse = await getPartnerFee(
          { partner },
          requestParams
        );

        partnerAddress = partnerAddress ?? partnerFeeResponse.partnerAddress;
        // deltaPrice.partnerFee and partnerFeeResponse.partnerFee should be the same, but give priority to externally provided
        partnerFeeBps = partnerFeeBps ?? partnerFeeResponse.partnerFee;
        partnerTakesSurplus =
          partnerTakesSurplus ?? partnerFeeResponse.takeSurplus;
      }
    }

    partnerFeeBps = partnerFeeBps ?? 0;
    partnerTakesSurplus = partnerTakesSurplus ?? false;

    const swapSide = options.side ?? SwapSide.SELL;

    const expectedAmount =
      swapSide === SwapSide.SELL
        ? options.deltaPrice.destAmount
        : options.deltaPrice.srcAmount;

    // Resolve srcAmount and destAmount, applying slippage if provided
    let srcAmount: string;
    let destAmount: string;

    if (options.slippage != null) {
      if (options.srcAmount) {
        // SELL with slippage: destAmount auto-computed
        srcAmount = options.srcAmount;
        destAmount = applySlippage(
          options.deltaPrice.destAmount,
          options.slippage,
          false
        );
      } else {
        // BUY with slippage: srcAmount auto-computed
        destAmount = options.destAmount!;
        srcAmount = applySlippage(
          options.deltaPrice.srcAmount,
          options.slippage,
          true
        );
      }
    } else {
      srcAmount = options.srcAmount;
      destAmount = options.destAmount;
    }

    const input: BuildDeltaOrderDataInput = {
      owner: options.owner,
      beneficiary: options.beneficiary,
      srcToken: options.srcToken,
      // for some cases of WETH->ETH crosschain swaps, the destToken is changed to WETH or ETH,
      // this is already reflected in deltaPrice
      destToken: options.deltaPrice.destToken,
      srcAmount,
      destAmount,
      expectedAmount,
      deadline: options.deadline,
      nonce: options.nonce?.toString(10),
      permit: options.permit,
      kind: SwapSideToOrderKind[swapSide],
      metadata: options.metadata,

      chainId,
      paraswapDeltaAddress: ParaswapDelta,
      partnerAddress,
      partnerTakesSurplus,
      partnerFeeBps,

      capSurplus: options.capSurplus,

      bridge: options.deltaPrice.bridge, // ZERO_BRIDGE for same-chain Orders
    };

    return buildDeltaSignableOrderData(input);
  };

  return {
    buildDeltaOrder,
  };
};

function applySlippage(
  amount: string,
  slippageBps: number,
  increase: boolean
): string {
  const BPS_BASE = 10_000n;
  const amt = BigInt(amount);
  const bps = BigInt(slippageBps);

  return increase
    ? ((amt * (BPS_BASE + bps)) / BPS_BASE).toString(10)
    : ((amt * (BPS_BASE - bps)) / BPS_BASE).toString(10);
}
