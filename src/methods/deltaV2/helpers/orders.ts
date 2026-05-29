import type { NonEmptyArray } from 'ts-essentials';
import { OrderHelpers as DeltaV1OrderHelpers } from '../../delta/helpers/orders';
import type {
  SwapSideUnion,
  UnifiedDeltaOrderData,
} from '../../delta/helpers/types';
import type {
  DeltaAuction,
  DeltaOrderStatus,
  DeltaTokenSide,
  DeltaTransaction,
} from '../types';

/**
 * v2 order helpers.
 *
 * The on-chain order structs (`auction.order`) are identical between v1 and v2
 * — they come from the same `OnChainOrderMap` — so every order-struct guard and
 * order-level getter is reused directly from v1's `OrderHelpers`. Likewise the
 * auction discriminant guards only look at `onChainOrderType` (same union in
 * both versions), so those are reused too.
 *
 * What differs in v2 is the *auction* envelope:
 *  - `status` is the integrator-facing `DeltaOrderStatus`
 *    (PENDING/ACTIVE/COMPLETED/… — not v1's `DeltaAuctionStatus`),
 *  - amounts live on `input`/`output` (`DeltaTokenSide`) and `transactions`
 *    (`DeltaTransaction`) instead of v1's order/transaction shapes,
 *  - `side` is carried explicitly on the auction.
 *
 * Those pieces are reimplemented here against the v2 shapes.
 */

const v1Checks = DeltaV1OrderHelpers.checks;
const v1Getters = DeltaV1OrderHelpers.getters;

///// CHECKS //////

/**
 * @description Checks whether an auction is fully executed (settled on every chain).
 */
function isCompletedAuction<T extends Pick<DeltaAuction, 'status'>>(
  auction: T
): auction is T & { status: 'COMPLETED' } {
  return auction.status === 'COMPLETED';
}

const failedAuctionStatuses = [
  'FAILED',
  'EXPIRED',
  'CANCELLED',
  'REFUNDED',
] as const;

const failedAuctionStatusesSet = new Set<DeltaOrderStatus>(
  failedAuctionStatuses
);

/**
 * @description Checks whether an auction is in a terminal failure state
 * (failed, expired, cancelled, or refunded).
 */
function isFailedAuction<T extends Pick<DeltaAuction, 'status'>>(
  auction: T
): auction is T & { status: (typeof failedAuctionStatuses)[number] } {
  return failedAuctionStatusesSet.has(auction.status);
}

/**
 * @description Checks whether an auction status is cancelled.
 */
function isCanceledAuction<T extends Pick<DeltaAuction, 'status'>>(
  auction: T
): auction is T & { status: 'CANCELLED' } {
  return auction.status === 'CANCELLED';
}

/**
 * @description Checks whether an auction status is expired.
 */
function isExpiredAuction<T extends Pick<DeltaAuction, 'status'>>(
  auction: T
): auction is T & { status: 'EXPIRED' } {
  return auction.status === 'EXPIRED';
}

const pendingAuctionStatuses = [
  'PENDING',
  'AWAITING_SIGNATURE',
  'ACTIVE',
  'BRIDGING',
] as const;

const pendingAuctionStatusesSet = new Set<DeltaOrderStatus>(
  pendingAuctionStatuses
);

/**
 * @description Checks whether an auction is still in flight (not yet settled
 * and not failed): awaiting signature, pending, actively executing, or bridging.
 */
function isPendingAuction<T extends Pick<DeltaAuction, 'status'>>(
  auction: T
): auction is T & { status: (typeof pendingAuctionStatuses)[number] } {
  return pendingAuctionStatusesSet.has(auction.status);
}

/**
 * @description Checks whether an auction is a Fillable auction.
 * `FillableOrder` is the `onChainOrderType` the server reports for a
 * `partiallyFillable` Standard order; it carries the same order struct as
 * `Order`. Consumers that don't distinguish the two should treat
 * `isDeltaAuction(a) || isFillableAuction(a)` as "is a standard order".
 */
function isFillableAuction<T extends Pick<DeltaAuction, 'onChainOrderType'>>(
  auction: T
): auction is T & { onChainOrderType: 'FillableOrder' } {
  return auction.onChainOrderType === 'FillableOrder';
}

/**
 * @description Checks whether an auction has been partially executed:
 * it has at least one transaction and an overall filled percent strictly
 * between 0 and 100.
 */
function isPartiallyExecutedAuction<
  T extends Pick<DeltaAuction, 'order' | 'transactions'>,
>(
  auction: T
): auction is T & { transactions: NonEmptyArray<DeltaTransaction> } {
  if (auction.transactions.length === 0) return false;

  const filledPercent = getFilledPercent(auction);

  return filledPercent > 0 && filledPercent < 100;
}

const checks = {
  // order-struct guards — order structs are shared with v1, reused as-is.
  isTWAPOrder: v1Checks.isTWAPOrder,
  isTWAPSellOrder: v1Checks.isTWAPSellOrder,
  isTWAPBuyOrder: v1Checks.isTWAPBuyOrder,
  isExternalOrder: v1Checks.isExternalOrder,
  isDeltaOrder: v1Checks.isDeltaOrder,
  isProductiveOrder: v1Checks.isProductiveOrder,

  // auction discriminant guards — `onChainOrderType` union is shared, reused as-is.
  isTWAPAuction: v1Checks.isTWAPAuction,
  isTWAPSellAuction: v1Checks.isTWAPSellAuction,
  isTWAPBuyAuction: v1Checks.isTWAPBuyAuction,
  isDeltaAuction: v1Checks.isDeltaAuction,
  isExternalAuction: v1Checks.isExternalAuction,
  isProductiveAuction: v1Checks.isProductiveAuction,
  isFillableAuction,

  // status / execution guards — v2 status enum & transaction shape.
  isCompletedAuction,
  isFailedAuction,
  isCanceledAuction,
  isExpiredAuction,
  isPendingAuction,
  isPartiallyExecutedAuction,
};

///// GETTERS //////

/**
 * @description Reads an amount off a v2 token side. A SELL input / BUY output
 * carries an explicit `amount`; the opposite side carries
 * `expectedAmount`/`executedAmount`. `prefer` chooses which to read on the
 * expected/executed variant.
 */
function getTokenSideAmount(
  side: DeltaTokenSide,
  prefer: 'expected' | 'executed'
): string {
  if ('amount' in side) return side.amount;

  const value =
    prefer === 'executed' ? side.executedAmount : side.expectedAmount;

  return value ?? '0';
}

/**
 * @description Returns the source chain id for the auction (the input side's chain).
 */
function getAuctionSrcChainId(auction: Pick<DeltaAuction, 'input'>): number {
  return auction.input.chainId;
}

/**
 * @description Returns the destination chain id for the auction (the output side's chain).
 * Equals the source chain id for same-chain orders.
 */
function getAuctionDestChainId(auction: Pick<DeltaAuction, 'output'>): number {
  return auction.output.chainId;
}

/**
 * @description Returns the swap side for any auction. v2 carries `side` on the
 * auction directly, so no order introspection is needed.
 */
function getAuctionSwapSide(
  auction: Pick<DeltaAuction, 'side'>
): SwapSideUnion {
  return auction.side;
}

/**
 * @description Returns source and destination token addresses for the auction,
 * read from the input/output sides (already resolved to the dest-chain token
 * for cross-chain orders).
 */
function getAuctionTokenAddresses(
  auction: Pick<DeltaAuction, 'input' | 'output'>
) {
  return {
    srcToken: auction.input.token,
    destToken: auction.output.token,
  };
}

/**
 * @description Aggregates transaction amounts into total spent (src) and
 * received (dest) values.
 */
function getTransactionAmounts(transactions: DeltaTransaction[]) {
  const { srcAmount, destAmount } = transactions.reduce(
    (acc, { spentAmount, receivedAmount }) => ({
      srcAmount: acc.srcAmount + BigInt(spentAmount ?? 0),
      destAmount: acc.destAmount + BigInt(receivedAmount ?? 0),
    }),
    { srcAmount: 0n, destAmount: 0n }
  );

  return {
    srcAmount: srcAmount.toString(),
    destAmount: destAmount.toString(),
  };
}

/**
 * @description Calculates the overall filled percent (0–100) from the
 * per-transaction `filledPercent` values. For TWAP orders each transaction is
 * a slice (0–100 of that slice), so the slice values are averaged across
 * `numSlices`; for single-fill orders the values sum directly.
 */
function getFilledPercent(
  auction: Pick<DeltaAuction, 'order' | 'transactions'>
): number {
  if (auction.transactions.length === 0) return 0;

  const total = auction.transactions.reduce(
    (acc, { filledPercent }) => acc + filledPercent,
    0
  );

  if (checks.isTWAPOrder(auction.order) && auction.order.numSlices > 0) {
    return total / auction.order.numSlices;
  }

  return total;
}

/**
 * @description Returns expected amounts and, once the auction is completed,
 * executed amounts. Executed amounts prefer the `executedAmount` baked onto the
 * token sides and fall back to summing transactions.
 */
function getAuctionAmounts(
  auction: Pick<
    DeltaAuction,
    'status' | 'order' | 'input' | 'output' | 'transactions'
  >
) {
  const expected = {
    srcAmount: getTokenSideAmount(auction.input, 'expected'),
    destAmount: getTokenSideAmount(auction.output, 'expected'),
  };

  if (!isCompletedAuction(auction)) {
    return { expected };
  }

  const txAmounts = getTransactionAmounts(auction.transactions);

  const executed = {
    srcAmount: getExecutedAmount(auction.input, txAmounts.srcAmount),
    destAmount: getExecutedAmount(auction.output, txAmounts.destAmount),
  };

  return { expected, executed };
}

/**
 * @description Returns the executed amount of a token side when present,
 * otherwise the provided fallback (typically summed from transactions).
 */
function getExecutedAmount(side: DeltaTokenSide, fallback: string): string {
  if ('executedAmount' in side && side.executedAmount != null) {
    return side.executedAmount;
  }

  return fallback;
}

/**
 * @description Returns unified order data with normalized amounts, tokens,
 * chain ids, and side — the v2 counterpart of v1's `getUnifiedDeltaOrderData`,
 * built from the v2 auction envelope.
 */
function getUnifiedDeltaOrderData(
  auction: DeltaAuction
): UnifiedDeltaOrderData {
  const { srcToken, destToken } = getAuctionTokenAddresses(auction);
  const { expected, executed } = getAuctionAmounts(auction);

  const srcChainId = getAuctionSrcChainId(auction);
  const destChainId = getAuctionDestChainId(auction);
  const swapSide = getAuctionSwapSide(auction);
  const filledPercent = getFilledPercent(auction);

  return {
    srcChainId,
    destChainId,
    srcAmount: executed?.srcAmount || expected.srcAmount,
    destAmount: executed?.destAmount || expected.destAmount,
    amounts: {
      expected,
      final: executed,
    },
    srcToken,
    destToken,
    swapSide,
    filledPercent,
  };
}

const getters = {
  getUnifiedDeltaOrderData,

  // auction-level getters — v2 envelope shape.
  getAuctionTokenAddresses,
  getAuctionSrcChainId,
  getAuctionDestChainId,
  getAuctionSwapSide,
  getTransactionAmounts,
  getAuctionAmounts,
  getFilledPercent,

  // order-level getters — order structs are shared with v1, reused as-is.
  getOrderTokenAddresses: v1Getters.getOrderTokenAddresses,
  getSwapSideFromDeltaOrder: v1Getters.getSwapSideFromDeltaOrder,
  getSwapSideFromTwapOrderType: v1Getters.getSwapSideFromTwapOrderType,
  getExpectedTwapSrcAmount: v1Getters.getExpectedTwapSrcAmount,
  getExpectedTwapDestAmount: v1Getters.getExpectedTwapDestAmount,
  getExpectedTwapOrderAmounts: v1Getters.getExpectedTwapOrderAmounts,
};

export const OrderHelpers = {
  checks,
  getters,
};
