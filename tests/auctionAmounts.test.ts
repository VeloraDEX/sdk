import { OrderHelpers } from '../src';
import type { DeltaAuction, DeltaTransaction } from '../src/methods/delta/types';

const { getAuctionAmounts, getTransactionAmounts } = OrderHelpers.getters;

const USDC_MAINNET = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';
const USDC_ARBITRUM = '0xaf88d065e77c8cc2239327c5edb3a432268e5831';

// Deliberately different so a test can tell which leg was summed. The fixtures
// below let the legacy `receivedAmount` disagree with the explicit pair, which
// a real payload would not: the point is to pin *which field is authoritative*,
// not to reproduce a server response.
const ORIGIN_LEG = '1000000000000000000';
const DESTINATION_LEG = '999000';

function tx(overrides: Partial<DeltaTransaction> = {}): DeltaTransaction {
  return {
    originTx: '0xorigin',
    destinationTx: '0xdestination',
    filledPercent: 100,
    spentAmount: '5000000',
    receivedAmount: ORIGIN_LEG,
    originReceivedAmount: ORIGIN_LEG,
    destinationReceivedAmount: DESTINATION_LEG,
    timestamp: null,
    ...overrides,
  };
}

describe('getTransactionAmounts leg selection', () => {
  test('reads the destination leg when crosschain', () => {
    expect(
      getTransactionAmounts([tx()], { crosschain: true }).destAmount
    ).toEqual(DESTINATION_LEG);
  });

  test('reads the origin leg when same-chain', () => {
    expect(
      getTransactionAmounts([tx({ destinationReceivedAmount: null })], {
        crosschain: false,
      }).destAmount
    ).toEqual(ORIGIN_LEG);
  });

  test('sums across transactions without mixing legs', () => {
    expect(
      getTransactionAmounts([tx(), tx()], { crosschain: true }).destAmount
    ).toEqual((BigInt(DESTINATION_LEG) * 2n).toString());
  });

  test('falls back to receivedAmount when the specific leg is absent', () => {
    expect(
      getTransactionAmounts([tx({ destinationReceivedAmount: null })], {
        crosschain: true,
      }).destAmount
    ).toEqual(ORIGIN_LEG);
  });

  test('sums the legacy receivedAmount when no leg is given', () => {
    expect(getTransactionAmounts([tx()]).destAmount).toEqual(ORIGIN_LEG);
  });

  test('always sums spentAmount for srcAmount', () => {
    expect(
      getTransactionAmounts([tx(), tx()], { crosschain: true }).srcAmount
    ).toEqual('10000000');
  });
});

function auction(crosschain: boolean): DeltaAuction {
  return {
    status: 'COMPLETED',
    side: 'SELL',
    transactions: [tx()],
    input: { chainId: 1, token: USDC_MAINNET, amount: '5000000' },
    output: {
      chainId: crosschain ? 42161 : 1,
      token: crosschain ? USDC_ARBITRUM : USDC_MAINNET,
      expectedAmount: DESTINATION_LEG,
      minAmount: DESTINATION_LEG,
      // null so the sum over transactions is what gets reported
      executedAmount: null,
    },
    order: {
      kind: 0,
      srcAmount: '5000000',
      destAmount: DESTINATION_LEG,
      bridge: { destinationChainId: crosschain ? 42161 : 0 },
    },
  } as unknown as DeltaAuction;
}

describe('getAuctionAmounts executed destAmount', () => {
  test('reports the destination leg for a bridge order', () => {
    expect(getAuctionAmounts(auction(true)).executed?.destAmount).toEqual(
      DESTINATION_LEG
    );
  });

  test('reports the origin leg for a same-chain order', () => {
    expect(getAuctionAmounts(auction(false)).executed?.destAmount).toEqual(
      ORIGIN_LEG
    );
  });

  test('prefers the executedAmount baked onto the output side', () => {
    const base = auction(true);
    const amounts = getAuctionAmounts({
      ...base,
      output: { ...base.output, executedAmount: '424242' } as never,
    });

    expect(amounts.executed?.destAmount).toEqual('424242');
  });
});
