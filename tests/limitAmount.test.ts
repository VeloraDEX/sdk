import {
  constructBuildDeltaOrder,
  constructBuildExternalDeltaOrder,
  constructBuildTWAPDeltaOrder,
} from '../src';
import type { FetcherFunction, FetcherPostInput } from '../src/types';
import { toOrderLimitAmount } from '../src/methods/delta/helpers/limitAmount';
import type { DeltaRoute } from '../src/methods/delta/types';

const USDC_MAINNET = {
  chainId: 1,
  address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
} as const;
const USDC_ARBITRUM = {
  chainId: 42161,
  address: '0xaf88d065e77c8cc2239327c5edb3a432268e5831',
} as const;

const step = (token: { chainId: number; address: string }, amount: string) => ({
  input: { token, amount, amountUSD: '0' },
  output: { token, amount, amountUSD: '0' },
});

function makeRoute(scalingFactor: number | null): DeltaRoute {
  return {
    origin: step(USDC_MAINNET, '1000000'),
    destination: step(
      scalingFactor === null ? USDC_MAINNET : USDC_ARBITRUM,
      '1000000'
    ),
    bridge:
      scalingFactor === null
        ? null
        : {
            protocol: 'Across',
            estimatedTimeMs: 1000,
            tags: [],
            contractParams: {
              protocolSelector: '0x00000000',
              outputToken: USDC_ARBITRUM.address,
              scalingFactor,
              protocolData: '0x',
            },
          },
  } as DeltaRoute;
}

/** Mirrors the scaling the settlement contract applies on the destination chain. */
function scaleBack(
  orderAmount: string | undefined,
  scalingFactor: number
): bigint {
  if (orderAmount === undefined) throw new Error('expected a scaled amount');

  const value = BigInt(orderAmount);
  return scalingFactor < 0
    ? value / 10n ** BigInt(-scalingFactor)
    : value * 10n ** BigInt(scalingFactor);
}

describe('toOrderLimitAmount', () => {
  test('same-chain route is returned unchanged', () => {
    expect(
      toOrderLimitAmount({
        limitAmount: '1000000000000000001',
        route: makeRoute(null),
        side: 'SELL',
      })
    ).toEqual('1000000000000000001');
  });

  test('BUY is returned unchanged — limitAmount bounds srcAmount', () => {
    expect(
      toOrderLimitAmount({
        limitAmount: '1000000000000000001',
        route: makeRoute(12),
        side: 'BUY',
      })
    ).toEqual('1000000000000000001');
  });

  test('scalingFactor 0 is returned unchanged', () => {
    expect(
      toOrderLimitAmount({
        limitAmount: '1000000000000000001',
        route: makeRoute(0),
        side: 'SELL',
      })
    ).toEqual('1000000000000000001');
  });

  test('negative scalingFactor multiplies exactly', () => {
    expect(
      toOrderLimitAmount({
        limitAmount: '1234567',
        route: makeRoute(-6),
        side: 'SELL',
      })
    ).toEqual('1234567000000');
  });

  test('positive scalingFactor divides, rounding up', () => {
    expect(
      toOrderLimitAmount({
        limitAmount: '1000000000000000001',
        route: makeRoute(12),
        side: 'SELL',
      })
      // 1000000.000000000001 -> 1000001, NOT 1000000
    ).toEqual('1000001');
  });

  test('positive scalingFactor leaves exact multiples alone', () => {
    expect(
      toOrderLimitAmount({
        limitAmount: '1000000000000000000',
        route: makeRoute(12),
        side: 'SELL',
      })
    ).toEqual('1000000');
  });

  test('handles amounts beyond Number.MAX_SAFE_INTEGER', () => {
    expect(
      toOrderLimitAmount({
        limitAmount: '123456789012345678901234567890',
        route: makeRoute(-2),
        side: 'SELL',
      })
    ).toEqual('12345678901234567890123456789000');
  });

  test('rounds up past 20 decimal places', () => {
    // big.js truncates a quotient at Big.DP (20) before rounding, so the
    // equivalent `.div(...).toFixed(0, Big.roundUp)` collapses this to '0' —
    // a minimum-receive bound of zero, which accepts any output at all.
    expect(
      toOrderLimitAmount({
        limitAmount: '1',
        route: makeRoute(21),
        side: 'SELL',
      })
    ).toEqual('1');
  });

  test('an absent limitAmount stays absent', () => {
    expect(
      toOrderLimitAmount({
        limitAmount: undefined,
        route: makeRoute(12),
        side: 'SELL',
      })
    ).toBeUndefined();
  });

  test('zero stays zero', () => {
    expect(
      toOrderLimitAmount({
        limitAmount: '0',
        route: makeRoute(12),
        side: 'SELL',
      })
    ).toEqual('0');
  });

  describe.each([-18, -6, -1, 1, 6, 12, 18])(
    'round-trip, scalingFactor %i',
    (scalingFactor) => {
      test.each([
        '1',
        '999999999999999999',
        '1000000000000000000',
        '1000000000000000001',
        '31415926535897932384',
      ])('scaling %s back never drops below it', (limitAmount) => {
        const orderAmount = toOrderLimitAmount({
          limitAmount,
          route: makeRoute(scalingFactor),
          side: 'SELL',
        });

        expect(scaleBack(orderAmount, scalingFactor)).toBeGreaterThanOrEqual(
          BigInt(limitAmount)
        );
      });
    }
  );
});

/**
 * Whether a bridge route converts at all is decided by `route.bridge` and `side`.
 * When no conversion applies the amount is the caller's own string and is handed
 * back untouched, not round-tripped through BigInt. These pin that boundary: a
 * limit amount that comes back subtly rewritten on some routes and not others is
 * the asymmetry this whole conversion exists to remove.
 */
describe('toOrderLimitAmount, routes where no conversion applies', () => {
  const noConversion = [
    ['same-chain route, SELL', makeRoute(null), 'SELL'],
    ['bridge route, BUY', makeRoute(12), 'BUY'],
    ['same-chain route, BUY', makeRoute(null), 'BUY'],
    ['bridge route with scalingFactor 0, SELL', makeRoute(0), 'SELL'],
    ['bridge route with scalingFactor 0, BUY', makeRoute(0), 'BUY'],
  ] as const;

  describe.each(noConversion)('%s', (_label, route, side) => {
    test('returns the amount verbatim', () => {
      expect(
        toOrderLimitAmount({ limitAmount: '1000000', route, side })
      ).toEqual('1000000');
    });

    test('does not normalize the amount', () => {
      expect(
        toOrderLimitAmount({ limitAmount: '0001000', route, side })
      ).toEqual('0001000');
    });

    test('leaves an amount with a leading + alone', () => {
      expect(toOrderLimitAmount({ limitAmount: '+1000', route, side })).toEqual(
        '+1000'
      );
    });
  });

  test.each([-6, 12])(
    'the same amount is normalized once scalingFactor %i does apply',
    (scalingFactor) => {
      expect(
        toOrderLimitAmount({
          limitAmount: '0001000',
          route: makeRoute(scalingFactor),
          side: 'SELL',
        })
      ).not.toEqual('0001000');
    }
  );

  test('a SELL over a bridge route is the only case that converts', () => {
    const limitAmount = '1000000000000000000';

    const converted = toOrderLimitAmount({
      limitAmount,
      route: makeRoute(12),
      side: 'SELL',
    });

    expect(converted).not.toEqual(limitAmount);
    expect(converted).toEqual('1000000');
  });
});

describe('buildDeltaOrder limitAmount', () => {
  function buildWithSpy() {
    const sent: FetcherPostInput[] = [];

    const fetcher: FetcherFunction = async (params) => {
      sent.push(params as FetcherPostInput);
      return {} as never;
    };

    const { buildDeltaOrder } = constructBuildDeltaOrder({
      chainId: 1,
      fetcher,
    });

    const sentBody = () => {
      const [request] = sent;
      if (!request) throw new Error('no request was sent');
      return request.data;
    };

    return { buildDeltaOrder, sentBody };
  }

  const owner = '0xac39b311dceb2a4b2f5d8461c1cdaf756f4f7ae9';

  test('scales a SELL limitAmount on a bridge route', async () => {
    const { buildDeltaOrder, sentBody } = buildWithSpy();

    await buildDeltaOrder({
      owner,
      route: makeRoute(12),
      side: 'SELL',
      limitAmount: '1000000000000000001',
    });

    expect(sentBody().limitAmount).toEqual('1000001');
  });

  test('leaves a same-chain SELL limitAmount alone', async () => {
    const { buildDeltaOrder, sentBody } = buildWithSpy();

    await buildDeltaOrder({
      owner,
      route: makeRoute(null),
      side: 'SELL',
      limitAmount: '1000000000000000001',
    });

    expect(sentBody().limitAmount).toEqual('1000000000000000001');
  });

  test('leaves a BUY limitAmount alone on a bridge route', async () => {
    const { buildDeltaOrder, sentBody } = buildWithSpy();

    await buildDeltaOrder({
      owner,
      route: makeRoute(12),
      side: 'BUY',
      limitAmount: '1000000000000000001',
    });

    expect(sentBody().limitAmount).toEqual('1000000000000000001');
  });

  test('leaves a bridge-route limitAmount alone when scalingFactor is 0', async () => {
    const { buildDeltaOrder, sentBody } = buildWithSpy();

    await buildDeltaOrder({
      owner,
      route: makeRoute(0),
      side: 'SELL',
      limitAmount: '1000000000000000001',
    });

    expect(sentBody().limitAmount).toEqual('1000000000000000001');
  });

  test('sends no limitAmount when none was passed', async () => {
    const { buildDeltaOrder, sentBody } = buildWithSpy();

    await buildDeltaOrder({
      owner,
      route: makeRoute(12),
      side: 'SELL',
      slippage: 50,
    });

    expect(sentBody().limitAmount).toBeUndefined();
  });
});

// The build endpoint declares `limitAmount` only on the `Order` variant of its
// strict request schema, so the sibling builders must never put the key in the
// body — a re-added `limitAmount: params.limitAmount` would 400 at runtime.
describe('sibling builders send no limitAmount', () => {
  function spy() {
    const sent: FetcherPostInput[] = [];

    const fetcher: FetcherFunction = async (params) => {
      sent.push(params as FetcherPostInput);
      return {} as never;
    };

    const sentBody = () => {
      const [request] = sent;
      if (!request) throw new Error('no request was sent');
      return request.data as Record<string, unknown>;
    };

    return { fetcher, sentBody };
  }

  const owner = '0xac39b311dceb2a4b2f5d8461c1cdaf756f4f7ae9';

  test('buildExternalDeltaOrder omits the key entirely', async () => {
    const { fetcher, sentBody } = spy();
    const { buildExternalDeltaOrder } = constructBuildExternalDeltaOrder({
      chainId: 1,
      fetcher,
    });

    await buildExternalDeltaOrder({
      owner,
      route: makeRoute(12),
      side: 'SELL',
      handler: '0x0000000000000000000000000000000000000001',
      data: '0x',
    });

    expect(Object.keys(sentBody())).not.toContain('limitAmount');
  });

  test('buildTWAPDeltaOrder omits the key entirely on a sell', async () => {
    const { fetcher, sentBody } = spy();
    const { buildTWAPDeltaOrder } = constructBuildTWAPDeltaOrder({
      chainId: 1,
      fetcher,
    });

    await buildTWAPDeltaOrder({
      owner,
      route: makeRoute(12),
      onChainOrderType: 'TWAPOrder',
      interval: 60,
      numSlices: 2,
      totalSrcAmount: '2000000',
    });

    expect(Object.keys(sentBody())).not.toContain('limitAmount');
  });

  test('buildTWAPDeltaOrder omits the key entirely on a buy', async () => {
    const { fetcher, sentBody } = spy();
    const { buildTWAPDeltaOrder } = constructBuildTWAPDeltaOrder({
      chainId: 1,
      fetcher,
    });

    await buildTWAPDeltaOrder({
      owner,
      route: makeRoute(12),
      onChainOrderType: 'TWAPBuyOrder',
      interval: 60,
      numSlices: 2,
      totalDestAmount: '2000000',
      maxSrcAmount: '2100000',
    });

    expect(Object.keys(sentBody())).not.toContain('limitAmount');
  });
});
