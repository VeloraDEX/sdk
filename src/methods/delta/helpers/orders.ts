import type { NonEmptyArray, Prettify } from 'ts-essentials';
import {
  Bridge,
  DeltaAuctionOrder,
  ExternalDeltaOrder,
  OnChainOrderType,
  OrderKind,
  ProductiveDeltaOrder,
  SwapSideUnion,
  TWAPBuyDeltaOrder,
  TWAPDeltaOrder,
  DeltaOrderUnion,
  UnifiedDeltaOrderData,
} from './types';
import type {
  DeltaAuction,
  DeltaOrderStatus,
  DeltaTokenSide,
  DeltaTransaction,
} from '../types';

/**
 * Delta order helpers.
 *
 * The on-chain order structs (`auction.order`) and the `onChainOrderType` union
 * are shared across all order families, so the order-struct guards, auction
 * discriminant guards, and order-level getters operate purely on those shapes.
 *
 * The *auction* envelope is the integrator-facing v2 shape:
 *  - `status` is the integrator-facing `DeltaOrderStatus`
 *    (PENDING/ACTIVE/COMPLETED/…),
 *  - amounts live on `input`/`output` (`DeltaTokenSide`) and `transactions`
 *    (`DeltaTransaction`),
 *  - `side` is carried explicitly on the auction.
 */

///// CHECKS — order structs //////

/**
 * @description Checks whether an order is a TWAP Sell or TWAP Buy order.
 */
function isTWAPOrder(
  order: DeltaOrderUnion
): order is TWAPDeltaOrder | TWAPBuyDeltaOrder {
  return 'numSlices' in order && typeof order.numSlices === 'number';
}

/**
 * @description Checks whether an order is a TWAP Sell order.
 */
function isTWAPSellOrder(order: DeltaOrderUnion): order is TWAPDeltaOrder {
  return (
    isTWAPOrder(order) &&
    'totalSrcAmount' in order &&
    typeof order.totalSrcAmount === 'string'
  );
}

/**
 * @description Checks whether an order is a TWAP Buy order.
 */
function isTWAPBuyOrder(order: DeltaOrderUnion): order is TWAPBuyDeltaOrder {
  return (
    isTWAPOrder(order) &&
    'totalDestAmount' in order &&
    typeof order.totalDestAmount === 'string'
  );
}

/**
 * @description Checks whether an order is an External order.
 */
function isExternalOrder(order: DeltaOrderUnion): order is ExternalDeltaOrder {
  return 'handler' in order;
}

/**
 * @description Checks whether an order is a regular Delta auction order.
 */
function isDeltaOrder(order: DeltaOrderUnion): order is DeltaAuctionOrder {
  return (
    !isExternalOrder(order) && 'kind' in order && typeof order.kind === 'number'
  );
}

/**
 * @description Checks whether an order is a Productive Delta order
 * (strategy-routed order without an explicit OrderKind).
 */
function isProductiveOrder(
  order: DeltaOrderUnion
): order is ProductiveDeltaOrder {
  return 'strategy' in order && typeof order.strategy === 'string';
}

///// CHECKS — auction discriminants //////

/**
 * @description Checks whether an auction is a TWAP auction.
 */
function isTWAPAuction<T extends OnChainOrderType>(auction: {
  onChainOrderType: T;
}): auction is { onChainOrderType: ('TWAPOrder' | 'TWAPBuyOrder') & T } {
  return isTWAPSellAuction(auction) || isTWAPBuyAuction(auction);
}

/**
 * @description Checks whether an auction is a TWAP Sell auction.
 */
function isTWAPSellAuction<T extends OnChainOrderType>(auction: {
  onChainOrderType: T;
}): auction is { onChainOrderType: 'TWAPOrder' & T } {
  return auction.onChainOrderType === 'TWAPOrder';
}

/**
 * @description Checks whether an auction is a TWAP Buy auction.
 */
function isTWAPBuyAuction<T extends OnChainOrderType>(auction: {
  onChainOrderType: T;
}): auction is { onChainOrderType: 'TWAPBuyOrder' & T } {
  return auction.onChainOrderType === 'TWAPBuyOrder';
}

/**
 * @description Checks whether an auction is a Delta auction.
 */
function isDeltaAuction<T extends OnChainOrderType>(auction: {
  onChainOrderType: T;
}): auction is { onChainOrderType: 'Order' & T } {
  return auction.onChainOrderType === 'Order';
}

/**
 * @description Checks whether an auction is an External auction.
 */
function isExternalAuction<T extends OnChainOrderType>(auction: {
  onChainOrderType: T;
}): auction is { onChainOrderType: 'ExternalOrder' & T } {
  return auction.onChainOrderType === 'ExternalOrder';
}

/**
 * @description Checks whether an auction is a Productive auction.
 */
function isProductiveAuction<T extends OnChainOrderType>(auction: {
  onChainOrderType: T;
}): auction is { onChainOrderType: 'ProductiveOrder' & T } {
  return auction.onChainOrderType === 'ProductiveOrder';
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

///// CHECKS — status / execution (v2 envelope) //////

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

/**
 * @description Checks whether an order includes valid cross-chain bridge details.
 */
function isOrderCrosschain<T extends { bridge?: Bridge } | object>(
  order: T
): order is Prettify<Extract<T, { bridge?: Bridge }> & { bridge: Bridge }> {
  return (
    'bridge' in order && !!order.bridge && order.bridge.destinationChainId !== 0
  );
}

const checks = {
  // order-struct guards
  isTWAPOrder,
  isTWAPSellOrder,
  isTWAPBuyOrder,
  isExternalOrder,
  isDeltaOrder,
  isProductiveOrder,
  isOrderCrosschain,

  // auction discriminant guards
  isTWAPAuction,
  isTWAPSellAuction,
  isTWAPBuyAuction,
  isDeltaAuction,
  isExternalAuction,
  isProductiveAuction,
  isFillableAuction,

  // status / execution guards (v2 envelope)
  isCompletedAuction,
  isFailedAuction,
  isCanceledAuction,
  isExpiredAuction,
  isPendingAuction,
  isPartiallyExecutedAuction,
};

///// GETTERS — order structs //////

const OrderKindToSwapSide = {
  [OrderKind.Sell]: 'SELL',
  [OrderKind.Buy]: 'BUY',
} as const;

/**
 * @description Returns swap side from a Delta or External order kind.
 */
function getSwapSideFromDeltaOrder(
  order: DeltaAuctionOrder | ExternalDeltaOrder
): SwapSideUnion {
  return OrderKindToSwapSide[order.kind];
}

const TwapTypeToSwapSide = {
  TWAPOrder: 'SELL',
  TWAPBuyOrder: 'BUY',
} as const;

/**
 * @description Returns swap side from TWAP on-chain order type.
 */
function getSwapSideFromTwapOrderType(
  onChainOrderType: 'TWAPOrder' | 'TWAPBuyOrder'
): SwapSideUnion {
  return TwapTypeToSwapSide[onChainOrderType];
}

/**
 * @description Returns source and destination token addresses for an order.
 */
function getOrderTokenAddresses(order: DeltaAuction['order']) {
  const srcToken = order.srcToken;
  const destToken = isOrderCrosschain(order)
    ? order.bridge.outputToken
    : order.destToken;
  return {
    srcToken,
    destToken,
  };
}

/**
 * @description Returns the expected source amount for a TWAP order.
 */
function getExpectedTwapSrcAmount(
  order:
    | Pick<TWAPDeltaOrder, 'totalSrcAmount'>
    | Pick<TWAPBuyDeltaOrder, 'maxSrcAmount'>
) {
  if ('totalSrcAmount' in order) {
    // SELL
    return order.totalSrcAmount;
  }

  return order.maxSrcAmount; // BUY
}

/**
 * @description Returns the expected destination amount for a TWAP order.
 */
function getExpectedTwapDestAmount(
  order:
    | Pick<TWAPDeltaOrder, 'destAmountPerSlice' | 'numSlices' | 'bridge'>
    | Pick<TWAPBuyDeltaOrder, 'totalDestAmount' | 'bridge'>
) {
  const destAmount =
    'destAmountPerSlice' in order
      ? BigInt(order.destAmountPerSlice) * BigInt(order.numSlices) // SELL
      : BigInt(order.totalDestAmount); // BUY

  if (isOrderCrosschain(order)) {
    return scaleByFactor(destAmount, order.bridge.scalingFactor).toString();
  }

  return destAmount.toString();
}

/**
 * @description Returns expected source and destination amounts for a TWAP order.
 */
function getExpectedTwapOrderAmounts(
  order: TWAPDeltaOrder | TWAPBuyDeltaOrder
) {
  const srcAmount = getExpectedTwapSrcAmount(order);
  const destAmount = getExpectedTwapDestAmount(order);
  return { srcAmount, destAmount };
}

function scaleByFactor(amount: bigint, scalingFactor: number): bigint {
  if (!amount) return 0n;

  if (scalingFactor === 0) return amount;

  const base = 10n;

  return scalingFactor < 0
    ? amount / base ** BigInt(-scalingFactor)
    : amount * base ** BigInt(scalingFactor);
}

///// GETTERS — auction envelope (v2) //////

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
 * @description Returns the swap side for any auction. The auction carries `side`
 * directly, so no order introspection is needed.
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
 * per-transaction `filledPercent` values. For cross-chain orders,
 * only transactions with a `destinationTx` are counted towards the filled percent.
 */
function getFilledPercent({
  order,
  transactions,
}: Pick<DeltaAuction, 'order' | 'transactions'>): number {
  if (transactions.length === 0) return 0;

  const completedTransactions = !isOrderCrosschain(order)
    ? transactions
    : transactions.filter((transaction) => !!transaction.destinationTx);

  const total = completedTransactions.reduce(
    (acc, { filledPercent }) => acc + filledPercent,
    0
  );

  return total;
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
 * @description Returns expected and minimal amounts and, once the auction is completed,
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

  const order = auction.order;

  let minimal;
  if (isTWAPOrder(order)) {
    minimal = expected; // TWAP doesn't carry explicit min amounts
  } else if (isOrderCrosschain(order)) {
    minimal = {
      srcAmount: order.srcAmount,
      destAmount: scaleByFactor(
        BigInt(order.destAmount),
        order.bridge.scalingFactor
      ).toString(),
    };
  } else {
    minimal = {
      srcAmount: order.srcAmount,
      destAmount: order.destAmount,
    };
  }

  if (!isCompletedAuction(auction)) {
    return { expected, minimal };
  }

  const txAmounts = getTransactionAmounts(auction.transactions);

  const executed = {
    srcAmount: getExecutedAmount(auction.input, txAmounts.srcAmount),
    destAmount: getExecutedAmount(auction.output, txAmounts.destAmount),
  };

  return { expected, executed, minimal };
}

/**
 * @description Returns unified order data with normalized amounts, tokens,
 * chain ids, and side, built from the auction envelope.
 */
function getUnifiedDeltaOrderData(
  auction: DeltaAuction
): UnifiedDeltaOrderData {
  const { srcToken, destToken } = getAuctionTokenAddresses(auction);
  const { expected, executed, minimal } = getAuctionAmounts(auction);

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
      minimal,
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

  // order-level getters — order structs shared across families.
  getOrderTokenAddresses,
  getSwapSideFromDeltaOrder,
  getSwapSideFromTwapOrderType,
  getExpectedTwapSrcAmount,
  getExpectedTwapDestAmount,
  getExpectedTwapOrderAmounts,
};

export const OrderHelpers = {
  checks,
  getters,
};
