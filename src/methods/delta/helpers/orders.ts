import type { NonEmptyArray, Prettify } from 'ts-essentials';
import {
  Bridge,
  DeltaAuction,
  DeltaAuctionOrder,
  DeltaAuctionTransaction,
  DeltaAuctionTWAP,
  DeltaAuctionTWAPBuy,
  DeltaAuctionUnion,
  DeltaOrderUnion,
  ExternalDeltaOrder,
  OnChainOrderType,
  OrderKind,
  SwapSideUnion,
  TWAPBuyDeltaOrder,
  TWAPDeltaOrder,
  UnifiedDeltaOrderData,
} from './types';

///// CHECKS //////

function isTWAPOrder(
  order: DeltaOrderUnion
): order is TWAPDeltaOrder | TWAPBuyDeltaOrder {
  return 'numSlices' in order && typeof order.numSlices === 'number';
}

function isTWAPSellOrder(order: DeltaOrderUnion): order is TWAPDeltaOrder {
  return (
    isTWAPOrder(order) &&
    'totalSrcAmount' in order &&
    typeof order.totalSrcAmount === 'string'
  );
}
function isTWAPBuyOrder(order: DeltaOrderUnion): order is TWAPBuyDeltaOrder {
  return (
    isTWAPOrder(order) &&
    'totalDestAmount' in order &&
    typeof order.totalDestAmount === 'string'
  );
}

function isExternalOrder(order: DeltaOrderUnion): order is ExternalDeltaOrder {
  return 'handler' in order;
}

function isDeltaOrder(order: DeltaOrderUnion): order is DeltaAuctionOrder {
  return (
    !isExternalOrder(order) && 'kind' in order && typeof order.kind === 'number'
  );
}

function isTWAPAuction<T extends OnChainOrderType>(auction: {
  onChainOrderType: T;
}): auction is { onChainOrderType: ('TWAPOrder' | 'TWAPBuyOrder') & T } {
  return isTWAPSellAuction(auction) || isTWAPBuyAuction(auction);
}

function isTWAPSellAuction<T extends OnChainOrderType>(auction: {
  onChainOrderType: T;
}): auction is { onChainOrderType: 'TWAPOrder' & T } {
  return auction.onChainOrderType === 'TWAPOrder';
}

function isTWAPBuyAuction<T extends OnChainOrderType>(auction: {
  onChainOrderType: T;
}): auction is { onChainOrderType: 'TWAPBuyOrder' & T } {
  return auction.onChainOrderType === 'TWAPBuyOrder';
}

function isDeltaAuction<T extends OnChainOrderType>(auction: {
  onChainOrderType: T;
}): auction is { onChainOrderType: 'Order' & T } {
  return auction.onChainOrderType === 'Order';
}

function isExternalAuction<T extends OnChainOrderType>(auction: {
  onChainOrderType: T;
}): auction is { onChainOrderType: 'ExternalOrder' & T } {
  return auction.onChainOrderType === 'ExternalOrder';
}

const checks = {
  isTWAPOrder,
  isTWAPSellOrder,
  isTWAPBuyOrder,
  isExternalOrder,
  isDeltaOrder,
  isTWAPAuction,
  isTWAPSellAuction,
  isTWAPBuyAuction,
  isDeltaAuction,
  isExternalAuction,
  isOrderCrosschain,
};

///// GETTERS //////

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

function getExpectedTwapOrderAmounts(
  order: TWAPDeltaOrder | TWAPBuyDeltaOrder
) {
  const srcAmount = getExpectedTwapSrcAmount(order);
  const destAmount = getExpectedTwapDestAmount(order);
  return { srcAmount, destAmount };
}

function getTwapAuctionAmounts(
  twapAuction:
    | Pick<DeltaAuctionTWAP, 'status' | 'transactions' | 'order'>
    | Pick<DeltaAuctionTWAPBuy, 'status' | 'transactions' | 'order'>
) {
  const isExecuted =
    twapAuction.status === 'EXECUTED' &&
    twapAuction.transactions.length === twapAuction.order.numSlices;

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

function getSwapSideFromDeltaOrder(
  order: DeltaAuctionOrder | ExternalDeltaOrder
): SwapSideUnion {
  return OrderKindToSwapSide[order.kind];
}

const TwapTypeToSwapSide = {
  TWAPOrder: 'SELL',
  TWAPBuyOrder: 'BUY',
} as const;

function getSwapSideFromTwapOrderType(
  onChainOrderType: 'TWAPOrder' | 'TWAPBuyOrder'
): SwapSideUnion {
  return TwapTypeToSwapSide[onChainOrderType];
}

function getAuctionSwapSide(auction: DeltaAuction): SwapSideUnion {
  if (isTWAPAuction(auction)) {
    // TWAP orders have onChainOrderType instead of kind
    return getSwapSideFromTwapOrderType(auction.onChainOrderType);
  }
  return getSwapSideFromDeltaOrder(auction.order);
}

function getUnifiedDeltaOrderData(
  auction: DeltaAuction
): UnifiedDeltaOrderData {
  const { order, chainId } = auction;

  const { srcToken, destToken } = getOrderTokenAddresses(order);
  const { expected, final } = getAuctionAmounts(auction);

  const srcChainId = chainId;
  const destChainId = getAuctionDestChainId({ order, chainId });

  const swapSide = getAuctionSwapSide(auction);

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
  };
}

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

function getTransactionAmounts(transactions: DeltaAuctionTransaction[]) {
  const { srcAmount, destAmount } = transactions.reduce(
    (acc, { spentAmount, receivedAmount, bridgeMetadata }) => {
      return {
        srcAmount: acc.srcAmount + BigInt(spentAmount),
        destAmount:
          acc.destAmount +
          BigInt(bridgeMetadata ? bridgeMetadata.outputAmount : receivedAmount),
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

function getAuctionAmounts(auction: DeltaAuction) {
  const isTwap = checks.isTWAPAuction(auction);
  if (isTwap) {
    return getTwapAuctionAmounts(auction);
  }

  let expected = {
    srcAmount: auction.order.srcAmount,
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

function isOrderCrosschain<T extends { bridge?: Bridge } | object>(
  order: T
  // Extract<ExternalOrder, { bridge?: Bridge }> == never
): order is Prettify<Extract<T, { bridge?: Bridge }> & { bridge: Bridge }> {
  return (
    'bridge' in order && !!order.bridge && order.bridge.destinationChainId !== 0
  );
}

function scaleByFactor(amount?: bigint, scalingFactor?: number): bigint {
  if (!amount) return 0n;

  if (scalingFactor === undefined) return amount;

  const base = 10n;

  return scalingFactor < 0
    ? amount / base ** BigInt(-scalingFactor)
    : amount * base ** BigInt(scalingFactor);
}

type ExecutedDeltaAuction = DeltaAuction & {
  status: 'EXECUTED';
  transactions: NonEmptyArray<DeltaAuctionTransaction>;
};

function isExecutedAuction(
  auction: DeltaAuction
): auction is ExecutedDeltaAuction {
  if (auction.status !== 'EXECUTED') return false;

  if (isOrderCrosschain(auction.order)) {
    const filledPercent = getFilledPercent(auction);
    return filledPercent === 100;
  }

  return true;
}

function getFilledPercent(auction: DeltaAuctionUnion): number {
  const transaction = !isOrderCrosschain(auction.order)
    ? auction.transactions
    : auction.transactions.filter(
        (transaction) => transaction.bridgeStatus === 'filled'
      );

  const filledPercentBps = transaction.reduce((acc, { filledPercent }) => {
    return acc + filledPercent;
  }, 0);

  const filledPercent = filledPercentBps / 100;
  return filledPercent;
}

///// TESTS //////
// @TODO remove

const auction = {} as DeltaAuctionUnion;
const minAuction = {
  onChainOrderType: 'TWAPOrder' as OnChainOrderType,
  gas: 6,
};
if (isTWAPAuction(minAuction)) {
  console.log('🚀 ~ auction:', minAuction);
  /**
   * {
    onChainOrderType: OnChainOrderType;
    gas: number;
    } & {
        onChainOrderType: "TWAPOrder" | "TWAPBuyOrder";
    }
   */
}
if (isTWAPAuction(auction)) {
  console.log('🚀 ~ auction:', auction);
  /**
   (DeltaAuctionBase & {
      onChainOrderType: "TWAPOrder";
      order: TWAPDeltaOrder;
    }) | (DeltaAuctionBase & {
        onChainOrderType: "TWAPBuyOrder";
        order: TWAPBuyDeltaOrder;
    })
   */
}
if (isTWAPSellAuction(auction)) {
  console.log('🚀 ~ auction:', auction);
  /**
   * DeltaAuctionBase & {
      onChainOrderType: "TWAPOrder";
      order: TWAPDeltaOrder;
    }
   */
}
if (isTWAPBuyAuction(auction)) {
  console.log('🚀 ~ auction:', auction);
  /**
   * DeltaAuctionBase & {
      onChainOrderType: "TWAPBuyOrder";
      order: TWAPBuyDeltaOrder;
    }
   */
}
if (isDeltaAuction(auction)) {
  console.log('🚀 ~ auction:', auction);
  /**
   * DeltaAuctionBase & {
      onChainOrderType: "Order";
      order: DeltaAuctionOrder;
    }
   */
}

if (isExternalAuction(auction)) {
  console.log('🚀 ~ auction:', auction);
  /**
   * DeltaAuctionBase & {
      onChainOrderType: "ExternalOrder";
      order: ExternalDeltaOrder;
    }
   */
}
// ------------------------------------------------------------ //

const orderAny = {} as DeltaOrderUnion;
if (isOrderCrosschain(orderAny)) {
  console.log('🚀 ~ order:', orderAny);
  /**
    DeltaAuctionOrder | TWAPDeltaOrder | TWAPBuyDeltaOrder
   */
}
const orderExternal = {} as ExternalDeltaOrder;
if (isOrderCrosschain(orderExternal)) {
  console.log('🚀 ~ order:', orderExternal);
  /**
    never
   */
}
const orderLike = {} as { bridge?: Bridge; a: 2 };
if (isOrderCrosschain(orderLike)) {
  console.log('🚀 ~ order:', orderLike);
  /**
   * {
      bridge: Bridge;
      a: 2;
    }
   */
}
