import { ZERO_ADDRESS } from '../../common/orders/buildOrderData';
import type { SignableDeltaOrderData } from './buildDeltaOrderData';
import type { SignableExternalOrderData } from './buildExternalOrderData';
import type { SignableTWAPOrderData } from './buildTWAPOrderData';
import type { GetPartnerFeeFunctions } from '../getPartnerFee';
import type { RequestParameters } from '../../../types';
import type { AmountsWithSlippage, SwapSideUnion } from './types';
import { SwapSide } from '../../../constants';
import { assert } from 'ts-essentials';

// default deadline = 10 min
export const DELTA_DEFAULT_EXPIRY = 10 * 60; // seconds

type ProducePartnerAndFeeInput = {
  partnerFeeBps: number;
  partnerAddress: string;
  partnerTakesSurplus: boolean;
  capSurplus: boolean;
};

// fee and address are encoded together
export function producePartnerAndFee({
  partnerFeeBps,
  partnerAddress,
  partnerTakesSurplus,
  capSurplus,
}: ProducePartnerAndFeeInput): string {
  const capSurplusShifted = BigInt(capSurplus) << BigInt(9);
  if (partnerAddress === ZERO_ADDRESS) {
    return capSurplusShifted.toString(10);
  } else {
    const partnerAndFee =
      (BigInt(partnerAddress) << BigInt(96)) |
      BigInt(partnerFeeBps.toFixed(0)) |
      (BigInt(partnerTakesSurplus) << BigInt(8)) |
      capSurplusShifted;

    return partnerAndFee.toString(10);
  }
}

type ApplySlippageInput = {
  amount: string;
  slippageBps: number;
  increase: boolean;
};

export function applySlippage({
  amount,
  slippageBps,
  increase,
}: ApplySlippageInput): string {
  assert(
    Number.isInteger(slippageBps) && slippageBps >= 0 && slippageBps <= 10_000,
    'slippageBps must be an integer between 0 and 10_000'
  );

  const BPS_BASE = 10_000n;
  const amt = BigInt(amount);
  const bps = BigInt(slippageBps);

  return increase
    ? ((amt * (BPS_BASE + bps)) / BPS_BASE).toString(10)
    : ((amt * (BPS_BASE - bps)) / BPS_BASE).toString(10);
}

export type ResolvePartnerFeeInput = {
  partnerAddress?: string;
  partnerFeeBps?: number;
  partnerTakesSurplus?: boolean;
  partner?: string;
  deltaPrice: { partner?: string; partnerFee?: number };
};

export type ResolvedPartnerFee = {
  partnerAddress: string;
  partnerFeeBps: number;
  partnerTakesSurplus: boolean;
};

export async function resolvePartnerFee(
  options: ResolvePartnerFeeInput,
  getPartnerFee: GetPartnerFeeFunctions['getPartnerFee'],
  requestParams?: RequestParameters
): Promise<ResolvedPartnerFee> {
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
      partnerFeeBps = partnerFeeBps ?? partnerFeeResponse.partnerFee * 100;
      partnerTakesSurplus =
        partnerTakesSurplus ?? partnerFeeResponse.takeSurplus;
    }
  }

  return {
    partnerAddress: partnerAddress!,
    partnerFeeBps: partnerFeeBps ?? 0,
    partnerTakesSurplus: partnerTakesSurplus ?? false,
  };
}

export type ResolveAmountsInput = AmountsWithSlippage & {
  deltaPrice: { destAmount: string; srcAmount: string };
};

export type ResolvedAmounts = {
  srcAmount: string;
  destAmount: string;
  expectedAmount: string;
  swapSide: SwapSideUnion;
};

export function resolveAmounts(options: ResolveAmountsInput): ResolvedAmounts {
  let srcAmount: string;
  let destAmount: string;

  const swapSide: SwapSideUnion =
    options.slippage !== undefined
      ? options.srcAmount !== undefined
        ? SwapSide.SELL
        : SwapSide.BUY
      : options.side ?? SwapSide.SELL;

  if (options.slippage !== undefined) {
    if (options.srcAmount !== undefined) {
      // SELL with slippage: destAmount auto-computed
      srcAmount = options.srcAmount;
      destAmount = applySlippage({
        amount: options.deltaPrice.destAmount,
        slippageBps: options.slippage,
        increase: false,
      });
    } else {
      // BUY with slippage: srcAmount auto-computed
      destAmount = options.destAmount;
      srcAmount = applySlippage({
        amount: options.deltaPrice.srcAmount,
        slippageBps: options.slippage,
        increase: true,
      });
    }
  } else {
    srcAmount = options.srcAmount;
    destAmount = options.destAmount;
  }

  const expectedAmount =
    swapSide === SwapSide.SELL
      ? options.deltaPrice.destAmount
      : options.deltaPrice.srcAmount;

  return { srcAmount, destAmount, expectedAmount, swapSide };
}

export function sanitizeDeltaOrderData({
  owner,
  beneficiary,
  srcToken,
  destToken,
  srcAmount,
  destAmount,
  expectedAmount,
  deadline,
  nonce,
  permit,
  partnerAndFee,
  bridge,
  kind,
  metadata,
}: SignableDeltaOrderData['data'] &
  Record<string, any>): SignableDeltaOrderData['data'] {
  return {
    owner,
    beneficiary,
    srcToken,
    destToken,
    srcAmount,
    destAmount,
    expectedAmount,
    deadline,
    nonce,
    permit,
    partnerAndFee,
    bridge,
    kind,
    metadata,
  };
}

export function sanitizeExternalOrderData({
  owner,
  handler,
  srcToken,
  destToken,
  srcAmount,
  destAmount,
  expectedAmount,
  deadline,
  nonce,
  permit,
  partnerAndFee,
  kind,
  metadata,
  data,
}: SignableExternalOrderData['data'] &
  Record<string, any>): SignableExternalOrderData['data'] {
  return {
    owner,
    handler,
    srcToken,
    destToken,
    srcAmount,
    destAmount,
    expectedAmount,
    deadline,
    nonce,
    permit,
    partnerAndFee,
    kind,
    metadata,
    data,
  };
}

export function sanitizeTWAPOrderData(
  orderData: SignableTWAPOrderData['data']
): SignableTWAPOrderData['data'] {
  const common = {
    owner: orderData.owner,
    beneficiary: orderData.beneficiary,
    srcToken: orderData.srcToken,
    destToken: orderData.destToken,
    nonce: orderData.nonce,
    partnerAndFee: orderData.partnerAndFee,
    deadline: orderData.deadline,
    interval: orderData.interval,
    numSlices: orderData.numSlices,
    permit: orderData.permit,
    metadata: orderData.metadata,
    bridge: orderData.bridge,
  };

  if ('destAmountPerSlice' in orderData) {
    return {
      ...common,
      destAmountPerSlice: orderData.destAmountPerSlice,
      totalSrcAmount: orderData.totalSrcAmount,
    };
  }

  return {
    ...common,
    totalDestAmount: orderData.totalDestAmount,
    maxSrcAmount: orderData.maxSrcAmount,
  };
}
