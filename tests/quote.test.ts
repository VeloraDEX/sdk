import * as dotenv from 'dotenv';
import fetch from 'isomorphic-unfetch';
import {
  constructFetchFetcher,
  constructPartialSDK,
  constructGetQuote,
  isFetcherError,
} from '../src';

import { assert } from 'ts-essentials';

dotenv.config();

jest.setTimeout(30 * 1000);

const ETH = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';
const USDC = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';

const chainId = 1;

const fetchFetcher = constructFetchFetcher(fetch);

describe('Quote:methods', () => {
  const quoteSDK = constructPartialSDK(
    {
      chainId,
      fetcher: fetchFetcher,
      apiURL: process.env.API_URL,
    },
    constructGetQuote
  );

  const amount = '100000000000'; // 100000 USDC
  const tooSmallAmount = '10000'; // 0.01 USDC

  test('Get Quote for delta', async () => {
    const quote = await quoteSDK.getQuote({
      srcToken: USDC,
      destToken: ETH,
      amount,
      srcDecimals: 6,
      destDecimals: 18,
      mode: 'delta',
      side: 'SELL',
    });

    expect('delta' in quote).toBeTruthy();
    assert('delta' in quote, 'Delta price not found in Quote');

    const staticDeltaPrice: typeof quote.delta = {
      ...quote.delta,
      id: 'dynamic_string',
      // route + alternatives carry the dynamic amounts/USD/gas fields in v2;
      // stabilized wholesale so the inline snapshot below regenerates cleanly.
      route: 'dynamic_route' as unknown as typeof quote.delta.route,
      alternatives:
        'dynamic_alternatives' as unknown as typeof quote.delta.alternatives,
      partner: { name: quote.delta.partner.name, feePercent: NaN },
    };

    expect(staticDeltaPrice).toMatchInlineSnapshot(`
      {
        "alternatives": "dynamic_alternatives",
        "id": "dynamic_string",
        "inputToken": {
          "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          "chainId": 1,
        },
        "outputToken": {
          "address": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          "chainId": 1,
        },
        "partner": {
          "feePercent": NaN,
          "name": "anon",
        },
        "route": "dynamic_route",
        "side": "SELL",
        "spender": "0x76e0ebb8d4c6dccb3fdedab7a3e1c87036719a42",
      }
    `);
  });

  test('Fail Quote for delta for small amounts', async () => {
    const quotePromise = quoteSDK.getQuote({
      srcToken: USDC,
      destToken: ETH,
      amount: tooSmallAmount,
      srcDecimals: 6,
      destDecimals: 18,
      mode: 'delta',
      side: 'SELL',
    });

    // receives one error or another
    await expect(quotePromise).rejects.toThrow(
      /GasCostExceedsTradeAmount|PricingError/
    );

    const error = await quotePromise.catch((e) => e);

    assert(isFetcherError(error), 'Error should be a FetchError');
    const { details, errorType } = error.response?.data;

    expect([
      {
        details: 'Gas cost exceeds trade amount',
        errorType: 'GasCostExceedsTradeAmount',
      },
      {
        details: 'Error getting price data',
        errorType: 'PricingError',
      },
    ]).toContainEqual({ details, errorType });
  });

  test('Get Quote for delta for BUY', async () => {
    const quote = await quoteSDK.getQuote({
      srcToken: USDC,
      destToken: ETH,
      amount,
      srcDecimals: 6,
      destDecimals: 18,
      mode: 'delta',
      side: 'BUY',
    });

    expect('delta' in quote).toBeTruthy();
    assert('delta' in quote, 'Delta price not found in Quote');

    const staticDeltaPrice: typeof quote.delta = {
      ...quote.delta,
      id: 'dynamic_string',
      // route + alternatives carry the dynamic amounts/USD/gas fields in v2;
      // stabilized wholesale so the inline snapshot below regenerates cleanly.
      route: 'dynamic_route' as unknown as typeof quote.delta.route,
      alternatives:
        'dynamic_alternatives' as unknown as typeof quote.delta.alternatives,
      partner: { name: quote.delta.partner.name, feePercent: NaN },
    };

    expect(staticDeltaPrice).toMatchInlineSnapshot(`
      {
        "alternatives": "dynamic_alternatives",
        "id": "dynamic_string",
        "inputToken": {
          "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          "chainId": 1,
        },
        "outputToken": {
          "address": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          "chainId": 1,
        },
        "partner": {
          "feePercent": NaN,
          "name": "anon",
        },
        "route": "dynamic_route",
        "side": "BUY",
        "spender": "0x76e0ebb8d4c6dccb3fdedab7a3e1c87036719a42",
      }
    `);
  });

  test('Get Quote for market', async () => {
    const quote = await quoteSDK.getQuote({
      srcToken: USDC,
      destToken: ETH,
      amount,
      srcDecimals: 6,
      destDecimals: 18,
      mode: 'market',
      side: 'SELL',
    });

    expect(quote.market).toBeDefined();
    const priceRoute = quote.market;

    const bestRouteStable = priceRoute.bestRoute
      .map((b) => ({
        ...b,
        percentage: 'dynamic_number',
        percent: 'dynamic_number',
        swaps: 'dynamic_array',
      }))
      .slice(0, 1); // dynamic length, grab first only

    const priceRouteStable = {
      ...priceRoute,
      partnerFee: NaN, // dynamic number, can change slightly depending on API config
      gasCost: 'dynamic_number',
      gasCostUSD: 'dynamic_number',
      hmac: 'dynamic_string',
      destAmount: 'dynamic_number',
      destAmountAfterFee: 'dynamic_number',
      blockNumber: 'dynamic_number',
      srcUSD: 'dynamic_number',
      destUSD: 'dynamic_number',
      contractMethod: 'dynamic_string',
      bestRoute: bestRouteStable,
    };

    expect(priceRouteStable).toMatchSnapshot();
  });

  test('Get Delta Quote for all', async () => {
    const quote = await quoteSDK.getQuote({
      srcToken: USDC,
      destToken: ETH,
      amount,
      srcDecimals: 6,
      destDecimals: 18,
      mode: 'all',
      side: 'SELL',
    });

    expect('delta' in quote).toBeTruthy();
    assert('delta' in quote, 'Delta price not found in Quote');

    const staticDeltaPrice: typeof quote.delta = {
      ...quote.delta,
      id: 'dynamic_string',
      // route + alternatives carry the dynamic amounts/USD/gas fields in v2;
      // stabilized wholesale so the inline snapshot below regenerates cleanly.
      route: 'dynamic_route' as unknown as typeof quote.delta.route,
      alternatives:
        'dynamic_alternatives' as unknown as typeof quote.delta.alternatives,
      partner: { name: quote.delta.partner.name, feePercent: NaN },
    };

    expect(staticDeltaPrice).toMatchInlineSnapshot(`
      {
        "alternatives": "dynamic_alternatives",
        "id": "dynamic_string",
        "inputToken": {
          "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
          "chainId": 1,
        },
        "outputToken": {
          "address": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
          "chainId": 1,
        },
        "partner": {
          "feePercent": NaN,
          "name": "anon",
        },
        "route": "dynamic_route",
        "side": "SELL",
        "spender": "0x76e0ebb8d4c6dccb3fdedab7a3e1c87036719a42",
      }
    `);
  });

  test('Get Fallback Market Quote for all', async () => {
    const quote = await quoteSDK.getQuote({
      srcToken: USDC,
      destToken: ETH,
      amount: tooSmallAmount,
      srcDecimals: 6,
      destDecimals: 18,
      mode: 'all',
      side: 'SELL',
    });

    assert(!('delta' in quote), 'Delta price not found in quote');

    expect(quote.fallbackReason).toMatchInlineSnapshot(`
      {
        "details": "Gas cost exceeds trade amount",
        "errorType": "GasCostExceedsTradeAmount",
      }
    `);

    const priceRoute = quote.market;

    const bestRouteStable = priceRoute.bestRoute.map((b) => ({
      ...b,
      swaps: b.swaps.map((s) => ({
        ...s,
        swapExchanges: s.swapExchanges.map((se) => ({
          ...se,
          exchange: 'dynamic_string',
          destAmount: 'dynamic_number',
          data: 'largerly dynamic object',
          poolAddresses: 'dynamic_array',
          poolIdentifiers: 'dynamic_array',
          srcAmount: 'dynamic_number',
        })),
      })),
    }));

    const priceRouteStable = {
      ...priceRoute,
      partnerFee: NaN, // dynamic number
      gasCost: 'dynamic_number',
      gasCostUSD: 'dynamic_number',
      hmac: 'dynamic_string',
      destAmount: 'dynamic_number',
      blockNumber: 'dynamic_number',
      srcUSD: 'dynamic_number',
      destUSD: 'dynamic_number',
      bestRoute: bestRouteStable,
      contractMethod: 'dynamic_string',
    };

    expect(priceRouteStable).toMatchSnapshot();
  });
});
