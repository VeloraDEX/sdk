import type { NonEmptyArray, Prettify } from 'ts-essentials';
import {
  Bridge,
  DeltaAuction,
  DeltaAuctionOrder,
  DeltaAuctionStatus,
  DeltaAuctionTransaction,
  DeltaAuctionTWAP,
  DeltaAuctionTWAPBuy,
  DeltaOrderUnion,
  ExternalDeltaOrder,
  OnChainOrderType,
  OrderKind,
  ProductiveDeltaOrder,
  SwapSideUnion,
  TWAPBuyDeltaOrder,
  TWAPDeltaOrder,
  UnifiedDeltaOrderData,
} from './types';

///// CHECKS //////

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

const checks = {
  isTWAPOrder,
  isTWAPSellOrder,
  isTWAPBuyOrder,
  isExternalOrder,
  isDeltaOrder,
  isProductiveOrder,
  isTWAPAuction,
  isTWAPSellAuction,
  isTWAPBuyAuction,
  isDeltaAuction,
  isExternalAuction,
  isProductiveAuction,
  isOrderCrosschain,
  isExecutedAuction,
  isPartiallyExecutedAuction,
  isFailedAuction,
  isCanceledAuction,
  isExpiredAuction,
  isPendingAuction,
};

///// GETTERS //////

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

/**
 * @description Returns expected and, when available, final amounts for a TWAP auction.
 */
function getTwapAuctionAmounts(
  twapAuction:
    | Pick<DeltaAuctionTWAP, 'status' | 'transactions' | 'order'>
    | Pick<DeltaAuctionTWAPBuy, 'status' | 'transactions' | 'order'>
) {
  const isExecuted = isExecutedAuction(twapAuction);

  const expected = getExpectedTwapOrderAmounts(twapAuction.order);
  if (isExecuted) {
    const final = getTransactionAmounts(twapAuction.transactions);
    return {
      final,
      expected,
    };
  }
  return {
    expected,
  };
}

const getters = {
  getUnifiedDeltaOrderData,
  getExpectedTwapSrcAmount,
  getExpectedTwapDestAmount,
  getExpectedTwapOrderAmounts,
  getTwapAuctionAmounts,
  getAuctionDestChainId,
  getSwapSideFromDeltaOrder,
  getSwapSideFromTwapOrderType,
  getAuctionSwapSide,
  getOrderTokenAddresses,
  getTransactionAmounts,
  getAuctionAmounts,
  getFilledPercent,
};

export const OrderHelpers = {
  checks,
  getters,
};

// -------------------- Auction Unified Data --------------------

/**
 * @description Returns the destination chain id for the auction.
 */
function getAuctionDestChainId({
  order,
  chainId,
}: Pick<DeltaAuction, 'order' | 'chainId'>) {
  return isOrderCrosschain(order) ? order.bridge.destinationChainId : chainId;
}

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
 * @description Returns swap side for any auction type.
 */
function getAuctionSwapSide(auction: DeltaAuction): SwapSideUnion {
  if (isTWAPAuction(auction)) {
    // TWAP orders have onChainOrderType instead of kind
    return getSwapSideFromTwapOrderType(auction.onChainOrderType);
  }
  if (isProductiveAuction(auction)) {
    // ProductiveOrders don't carry an explicit OrderKind; treated as SELL.
    return 'SELL';
  }
  return getSwapSideFromDeltaOrder(auction.order);
}

/**
 * @description Returns unified order data with normalized amounts, tokens, and side.
 */
function getUnifiedDeltaOrderData(
  auction: DeltaAuction
): UnifiedDeltaOrderData {
  const { order, chainId } = auction;

  const { srcToken, destToken } = getOrderTokenAddresses(order);
  const { expected, final } = getAuctionAmounts(auction);

  const srcChainId = chainId;
  const destChainId = getAuctionDestChainId({ order, chainId });

  const swapSide = getAuctionSwapSide(auction);

  const filledPercent = getFilledPercent(auction);

  return {
    srcChainId,
    destChainId,
    srcAmount: final?.srcAmount || expected.srcAmount,
    destAmount: final?.destAmount || expected.destAmount,
    amounts: {
      expected,
      final,
    },
    srcToken,
    destToken,
    swapSide,
    filledPercent,
  };
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
 * @description Aggregates transaction amounts into total source and destination values.
 */
function getTransactionAmounts(transactions: DeltaAuctionTransaction[]) {
  const { srcAmount, destAmount } = transactions.reduce(
    (acc, { spentAmount, receivedAmount, bridgeMetadata }) => {
      return {
        srcAmount: acc.srcAmount + BigInt(spentAmount),
        destAmount:
          acc.destAmount +
          BigInt(
            bridgeMetadata?.outputAmount
              ? bridgeMetadata.outputAmount
              : receivedAmount
          ),
      };
    },
    {
      srcAmount: 0n,
      destAmount: 0n,
    }
  );

  return {
    srcAmount: srcAmount.toString(),
    destAmount: destAmount.toString(),
  };
}

/**
 * @description Returns expected and, when available, final amounts for an auction.
 */
function getAuctionAmounts(auction: DeltaAuction) {
  const isTwap = checks.isTWAPAuction(auction);
  if (isTwap) {
    return getTwapAuctionAmounts(auction);
  }

  let expected = {
    srcAmount: auction.order.srcAmount,
    // defensive fallback in case Order shape changes or legacy Orders don't have all fields
    destAmount: auction.order.expectedAmount || auction.order.destAmount,
  };

  const order = auction.order;

  if (isOrderCrosschain(order)) {
    expected = {
      srcAmount: expected.srcAmount,
      destAmount: scaleByFactor(
        BigInt(expected.destAmount),
        order.bridge.scalingFactor
      ).toString(),
    };
  }

  const isExecuted = isExecutedAuction(auction);
  if (isExecuted) {
    const final = getTransactionAmounts(auction.transactions);
    return {
      final,
      expected,
    };
  }
  return {
    expected,
  };
}

/**
 * @description Checks whether an order includes valid cross-chain bridge details.
 */
function isOrderCrosschain<T extends { bridge?: Bridge } | object>(
  order: T
  // Extract<ExternalOrder, { bridge?: Bridge }> == never
): order is Prettify<Extract<T, { bridge?: Bridge }> & { bridge: Bridge }> {
  return (
    'bridge' in order && !!order.bridge && order.bridge.destinationChainId !== 0
  );
}

function scaleByFactor(amount: bigint, scalingFactor: number): bigint {
  if (!amount) return 0n;

  if (scalingFactor === 0) return amount;

  const base = 10n;

  return scalingFactor < 0
    ? amount / base ** BigInt(-scalingFactor)
    : amount * base ** BigInt(scalingFactor);
}

type ExecutedDeltaAuctionProps = {
  status: 'EXECUTED';
  transactions: NonEmptyArray<DeltaAuctionTransaction>;
};

/**
 * @description Checks whether an auction is fully executed.
 */
function isExecutedAuction<
  T extends Pick<DeltaAuction, 'order' | 'status' | 'transactions'>
>(auction: T): auction is T & ExecutedDeltaAuctionProps {
  if (auction.status !== 'EXECUTED') return false;

  if (isOrderCrosschain(auction.order)) {
    const filledPercent = getFilledPercent(auction);
    return filledPercent === 100;
  }

  return true;
}

const failedAuctionStatuses = [
  'FAILED',
  'EXPIRED',
  'CANCELLED',
  'REFUNDED',
] as const;

const failedAuctionStatusesSet = new Set<DeltaAuctionStatus>(
  failedAuctionStatuses
);

type FailedDeltaAuctionProps =
  | {
      status: (typeof failedAuctionStatuses)[number];
    }
  | {
      status: 'EXECUTED'; // srcChain tx succeeded
      bridgeStatus: 'expired' | 'refunded'; // destChain tx failed or relayer didn't deliver
    };

/**
 * @description Checks whether an auction is failed on source or destination chain.
 */
function isFailedAuction<
  T extends Pick<DeltaAuction, 'status' | 'order' | 'bridgeStatus'>
>(auction: T): auction is T & FailedDeltaAuctionProps {
  // already failed on srcChain, whether Order is crosschain or not
  if (failedAuctionStatusesSet.has(auction.status)) return true;

  // crosschain Order is executed on srcChain, but failed on destChain
  if (auction.status === 'EXECUTED' && isOrderCrosschain(auction.order)) {
    return (
      auction.bridgeStatus === 'expired' || auction.bridgeStatus === 'refunded'
    );
  }

  return false;
}

/**
 * @description Checks whether an auction status is cancelled.
 */
function isCanceledAuction<T extends Pick<DeltaAuction, 'status'>>(
  auction: T
): auction is T & {
  status: 'CANCELLED';
} {
  return auction.status === 'CANCELLED';
}

/**
 * @description Checks whether an auction status is expired.
 */
function isExpiredAuction<T extends Pick<DeltaAuction, 'status'>>(
  auction: T
): auction is T & {
  status: 'EXPIRED';
} {
  return auction.status === 'EXPIRED';
}

const pendingAuctionStatuses = [
  'NOT_STARTED',
  'AWAITING_PRE_SIGNATURE',
  'RUNNING',
  'EXECUTING',
] as const;

const pendingAuctionStatusesSet = new Set<DeltaAuctionStatus>(
  pendingAuctionStatuses
);
/**
 * @description Checks whether an auction status is in pending execution states.
 */
function isPendingAuction<T extends Pick<DeltaAuction, 'status'>>(
  auction: T
): auction is T & {
  status: (typeof pendingAuctionStatuses)[number];
} {
  return pendingAuctionStatusesSet.has(auction.status);
}

/**
 * @description Auction can be cancelled in the middle of execution,
 * or crosschain-TWAP slices may not all be bridged,
 * or order can be suspended if it runs out of user balance/allowance.
 * Orders in the middle of normal execution can also be considered partially executed if they have any transactions.
 */
function isPartiallyExecutedAuction<
  T extends Pick<DeltaAuction, 'order' | 'transactions'>
>(
  auction: T
): auction is T & { transactions: NonEmptyArray<DeltaAuctionTransaction> } {
  if (auction.transactions.length === 0) return false;

  const filledPercent = getFilledPercent(auction);

  return filledPercent > 0 && filledPercent < 100;
}

/**
 * @description Calculates filled percentage from auction transaction filled bps values.
 */
function getFilledPercent(
  auction: Pick<DeltaAuction, 'order' | 'transactions'>
): number {
  const completeTransactions = !isOrderCrosschain(auction.order)
    ? auction.transactions
    : auction.transactions.filter(
        (transaction) => transaction.bridgeStatus === 'filled'
      );

  const filledPercentBps = completeTransactions.reduce(
    (acc, { filledPercent }) => {
      return acc + filledPercent;
    },
    0
  );

  const filledPercent = filledPercentBps / 100;
  return filledPercent;
}
