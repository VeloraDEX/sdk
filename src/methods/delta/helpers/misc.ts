import { ZERO_ADDRESS } from '../../common/orders/buildOrderData';
import type { SignableDeltaOrderData } from './buildDeltaOrderData';
import type { SignableExternalOrderData } from './buildExternalOrderData';

// default deadline = 1 hour for now (may be changed later)
export const DELTA_DEFAULT_EXPIRY = 60 * 60; // seconds

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

export function applySlippage(
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
