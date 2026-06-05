import * as dotenv from 'dotenv';
import fetch from 'isomorphic-unfetch';
import {
  constructPartialSDK,
  constructFetchFetcher,
  constructGetDeltaContract,
  constructGetPartnerFee,
  constructAllDeltaOrdersHandlers,
  constructBuildDeltaOrder,
  constructBuildExternalDeltaOrder,
  constructBuildTWAPDeltaOrder,
  constructCancelDeltaOrder,
  constructGetAgentsList,
  constructGetBridgeRoutes,
  constructGetDeltaOrders,
  constructGetDeltaPrice,
  constructIsTokenSupportedInDelta,
  constructPostDeltaOrder,
  constructPostExternalDeltaOrder,
  constructPostTWAPDeltaOrder,
  constructSubmitDeltaOrder,
  PaginatedResponse,
  FetcherFunction,
} from '../src';
import type { ContractCallerFunctions, TxHash } from '../src/types';
import type {
  DeltaAuction,
  DeltaPrice,
  DeltaRoute,
  BuiltDeltaOrder,
  BridgeRoute,
} from '../src/methods/delta/types';

dotenv.config();

const PARASWAP_DELTA = '0x1111111111111111111111111111111111111111';
const WETH = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
const DAI = '0x6b175474e89094c44da98b954eedeac495271d0f';
const USDC_ARB = '0xaf88d065e77c8cc2239327c5edb3a432268e5831';
const OWNER = '0xac39b311dceb2a4b2f5d8461c1cdaf756f4f7ae9';
const API_URL = 'https://api.test.invalid';
const FAKE_SIGNATURE = '0x' + 'ab'.repeat(64);

type FetchSpy = jest.Mock<Promise<any>, Parameters<FetcherFunction>>;

function buildPriceFixture(
  overrides: Partial<DeltaPrice> = {}
): DeltaPrice {
  const srcInput = {
    token: { chainId: 1, address: WETH },
    amount: '1000000000000000000',
    amountUSD: '3000',
  };
  const destOutput = {
    token: { chainId: 1, address: DAI },
    amount: '2950000000000000000000',
    amountUSD: '2950',
  };

  const route: DeltaRoute = {
    origin: { input: srcInput, output: destOutput },
    destination: { input: destOutput, output: destOutput },
    bridge: null,
    fees: {
      gas: {
        token: {
          chainId: 1,
          address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        },
        amount: '500000',
        amountUSD: '0.5',
      },
      bridge: [],
    },
  };

  return {
    id: 'price-id-1',
    side: 'SELL',
    inputToken: { chainId: 1, address: WETH },
    outputToken: { chainId: 1, address: DAI },
    route,
    partner: { name: 'sdk-test', feePercent: 0 },
    spender: PARASWAP_DELTA,
    alternatives: [],
    ...overrides,
  };
}

function buildCrosschainRoute(): DeltaRoute {
  const srcInput = {
    token: { chainId: 1, address: WETH },
    amount: '1000000000000000000',
    amountUSD: '3000',
  };
  const srcOutputIntermediate = {
    token: {
      chainId: 1,
      address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
    },
    amount: '2980000000',
    amountUSD: '2980',
  };
  const destInput = {
    token: { chainId: 42161, address: USDC_ARB },
    amount: '2978000000',
    amountUSD: '2978',
  };
  const destOutput = {
    token: { chainId: 42161, address: USDC_ARB },
    amount: '2978000000',
    amountUSD: '2978',
  };

  return {
    origin: { input: srcInput, output: srcOutputIntermediate },
    destination: { input: destInput, output: destOutput },
    bridge: {
      protocol: 'Across',
      tags: ['recommended', 'fastest'],
      estimatedTimeMs: 90_000,
      contractParams: {
        protocolSelector: '0xdeadbeef',
        outputToken: USDC_ARB,
        scalingFactor: -12,
        protocolData: '0xabcd',
      },
    },
    fees: {
      gas: {
        token: { chainId: 1, address: WETH },
        amount: '7000000000000000',
        amountUSD: '21',
      },
      bridge: [
        {
          token: { chainId: 42161, address: USDC_ARB },
          amount: '200000',
          amountUSD: '0.2',
        },
      ],
    },
  };
}

/** Minimal BuiltDeltaOrder fixture representing a server-built order. */
function buildBuiltOrderFixture(
  value: Record<string, unknown> = {},
  orderHash = '0xdeadbeef1234'
): BuiltDeltaOrder {
  return {
    toSign: {
      domain: {
        name: 'Portikus',
        version: '2.0.0',
        chainId: 1,
        verifyingContract: PARASWAP_DELTA,
      },
      types: {
        Order: [
          { name: 'owner', type: 'address' },
          { name: 'beneficiary', type: 'address' },
          { name: 'srcToken', type: 'address' },
          { name: 'destToken', type: 'address' },
          { name: 'srcAmount', type: 'uint256' },
          { name: 'destAmount', type: 'uint256' },
          { name: 'expectedAmount', type: 'uint256' },
          { name: 'deadline', type: 'uint256' },
          { name: 'kind', type: 'uint8' },
          { name: 'nonce', type: 'uint256' },
          { name: 'partnerAndFee', type: 'uint256' },
          { name: 'permit', type: 'bytes' },
          { name: 'metadata', type: 'bytes' },
          { name: 'bridge', type: 'Bridge' },
        ],
        Bridge: [
          { name: 'protocolSelector', type: 'bytes4' },
          { name: 'destinationChainId', type: 'uint256' },
          { name: 'outputToken', type: 'address' },
          { name: 'scalingFactor', type: 'int8' },
          { name: 'protocolData', type: 'bytes' },
        ],
      },
      value: {
        owner: OWNER,
        beneficiary: OWNER,
        srcToken: WETH,
        destToken: DAI,
        srcAmount: '1000000000000000000',
        destAmount: '2950000000000000000000',
        expectedAmount: '2950000000000000000000',
        deadline: 9999999999,
        kind: 0,
        nonce: '12345',
        permit: '0x',
        partnerAndFee: '0',
        metadata: '0x',
        bridge: {
          protocolSelector: '0x00000000',
          destinationChainId: 0,
          outputToken: '0x0000000000000000000000000000000000000000',
          scalingFactor: 0,
          protocolData: '0x',
        },
        ...value,
      },
    },
    orderHash,
  };
}

function makeMockContractCaller(): ContractCallerFunctions<TxHash> {
  return {
    staticCall: jest.fn(async () => {
      throw new Error(
        'staticCall should not be invoked in v2 fetch-only tests'
      );
    }),
    transactCall: jest.fn(async () => '0xfeedface' as TxHash),
    signTypedDataCall: jest.fn(async () => FAKE_SIGNATURE),
  };
}

function makeFetcher(handler: (params: any) => any): FetchSpy {
  return jest.fn(async (params) => handler(params)) as FetchSpy;
}

describe('Delta: fetch methods', () => {
  test('getDeltaPrice hits /delta/v2/prices and returns DeltaPrice', async () => {
    const fixture = buildPriceFixture();
    const fetcher = makeFetcher(({ url, method }) => {
      expect(method).toBe('GET');
      expect(url.startsWith(`${API_URL}/delta/v2/prices?`)).toBe(true);
      expect(url).toContain(`srcToken=${WETH}`);
      expect(url).toContain(`destToken=${DAI}`);
      expect(url).toContain('amount=1000000000000000000');
      expect(url).toContain('chainId=1');
      expect(url).toContain('side=SELL');
      return fixture;
    });

    const { getDeltaPrice } = constructGetDeltaPrice({
      apiURL: API_URL,
      chainId: 1,
      fetcher,
    });

    const price = await getDeltaPrice({
      srcToken: WETH,
      destToken: DAI,
      amount: '1000000000000000000',
      srcDecimals: 18,
      destDecimals: 18,
    });

    expect(price).toEqual(fixture);
    expect(price.route.origin.input.amount).toBe('1000000000000000000');
    expect(price.route.bridge).toBeNull();
    expect(fetcher).toHaveBeenCalledTimes(1);
  });

  test('getDeltaPrice passes destChainId for cross-chain', async () => {
    const fixture = buildPriceFixture({
      route: buildCrosschainRoute(),
      outputToken: { chainId: 42161, address: USDC_ARB },
    });
    const fetcher = makeFetcher(({ url }) => {
      expect(url).toContain('destChainId=42161');
      return fixture;
    });

    const { getDeltaPrice } = constructGetDeltaPrice({
      apiURL: API_URL,
      chainId: 1,
      fetcher,
    });

    const price = await getDeltaPrice({
      srcToken: WETH,
      destToken: USDC_ARB,
      amount: '1000000000000000000',
      srcDecimals: 18,
      destDecimals: 6,
      destChainId: 42161,
    });

    expect(price.route.bridge?.protocol).toBe('Across');
    expect(price.route.destination.input.token.chainId).toBe(42161);
  });

  test('getBridgeRoutes hits /delta/v2/prices/bridge-routes and unwraps `routes`', async () => {
    const routes: BridgeRoute[] = [
      { srcChainId: 1, destChainId: 42161, tokens: [USDC_ARB] },
      { srcChainId: 1, destChainId: 10, tokens: [DAI] },
    ];
    const fetcher = makeFetcher(({ url, method }) => {
      expect(method).toBe('GET');
      expect(url).toBe(`${API_URL}/delta/v2/prices/bridge-routes`);
      return { routes };
    });

    const { getBridgeRoutes } = constructGetBridgeRoutes({
      apiURL: API_URL,
      chainId: 1,
      fetcher,
    });

    expect(await getBridgeRoutes()).toEqual(routes);
  });

  test('getBridgeRoutes passes filter params', async () => {
    const fetcher = makeFetcher(({ url }) => {
      expect(url).toContain('allowBridgeAndSwap=false');
      expect(url).toContain('bridges=Across%2CRelay');
      return { routes: [] };
    });

    const { getBridgeRoutes } = constructGetBridgeRoutes({
      apiURL: API_URL,
      chainId: 1,
      fetcher,
    });

    expect(
      await getBridgeRoutes({
        allowBridgeAndSwap: false,
        bridges: ['Across', 'Relay'],
      })
    ).toEqual([]);
  });

  test('isTokenSupportedInDelta unwraps `supported`', async () => {
    const fetcher = makeFetcher(({ url, method }) => {
      expect(method).toBe('GET');
      expect(
        url.startsWith(`${API_URL}/delta/v2/prices/is-token-supported/?`)
      ).toBe(true);
      expect(url).toContain(`token=${WETH}`);
      expect(url).toContain('chainId=1');
      return { supported: true };
    });

    const { isTokenSupportedInDelta } = constructIsTokenSupportedInDelta({
      apiURL: API_URL,
      chainId: 1,
      fetcher,
    });

    expect(await isTokenSupportedInDelta(WETH)).toBe(true);
  });

  test('getDeltaOrders returns the pagination envelope', async () => {
    const order = { id: 'auction-1' } as unknown as DeltaAuction;
    const envelope: PaginatedResponse<DeltaAuction> = {
      data: [order],
      total: 1,
      page: 1,
      limit: 100,
      hasMore: false,
    };

    const fetcher = makeFetcher(({ url, method }) => {
      expect(method).toBe('GET');
      expect(url.startsWith(`${API_URL}/delta/v2/orders?`)).toBe(true);
      expect(url).toContain(`userAddress=${OWNER}`);
      expect(url).toContain('page=2');
      expect(url).toContain('limit=10');
      return envelope;
    });

    const { getDeltaOrders } = constructGetDeltaOrders({
      apiURL: API_URL,
      chainId: 1,
      fetcher,
    });

    const result = await getDeltaOrders({
      userAddress: OWNER,
      page: 2,
      limit: 10,
    });

    expect(result).toEqual(envelope);
    expect(result.hasMore).toBe(false);
    expect(result.data).toHaveLength(1);
  });

  test('getDeltaOrders by id / by hash use the v2 path', async () => {
    const order = { id: 'auction-1' } as unknown as DeltaAuction;
    const fetcher = makeFetcher(({ url }) => {
      if (url === `${API_URL}/delta/v2/orders/auction-1`) return order;
      if (url === `${API_URL}/delta/v2/orders/hash/0xhash`) return order;
      throw new Error(`unexpected URL ${url}`);
    });

    const { getDeltaOrderById, getDeltaOrderByHash } =
      constructGetDeltaOrders({ apiURL: API_URL, chainId: 1, fetcher });

    expect(await getDeltaOrderById('auction-1')).toBe(order);
    expect(await getDeltaOrderByHash('0xhash')).toBe(order);
  });

  test('getRequiredBalanceForDeltaOrders hits /delta/v2/orders/fillablebalance/:chainId/:userAddress', async () => {
    const required = {
      [WETH]: '500000000000000000',
      [DAI]: '1500000000000000000000',
    };
    const fetcher = makeFetcher(({ url, method }) => {
      expect(method).toBe('GET');
      expect(url).toBe(
        `${API_URL}/delta/v2/orders/fillablebalance/1/${OWNER}`
      );
      return required;
    });

    const { getRequiredBalanceForDeltaOrders } =
      constructGetDeltaOrders({ apiURL: API_URL, chainId: 1, fetcher });

    expect(
      await getRequiredBalanceForDeltaOrders({ userAddress: OWNER })
    ).toEqual(required);
  });

  test('getRequiredBalanceForDeltaOrders narrows the URL when tokenAddress is passed', async () => {
    const fetcher = makeFetcher(({ url }) => {
      expect(url).toBe(
        `${API_URL}/delta/v2/orders/fillablebalance/1/${OWNER}/${WETH}`
      );
      return { [WETH]: '500000000000000000' };
    });

    const { getRequiredBalanceForDeltaOrders } =
      constructGetDeltaOrders({ apiURL: API_URL, chainId: 1, fetcher });

    const balance = await getRequiredBalanceForDeltaOrders({
      userAddress: OWNER,
      tokenAddress: WETH,
    });
    expect(balance[WETH]).toBe('500000000000000000');
  });

  test('getAgentsList hits /delta/v2/agents/list/:chainId and returns agent names', async () => {
    const agents = ['agent-a', 'agent-b'];
    const fetcher = makeFetcher(({ url, method }) => {
      expect(method).toBe('GET');
      expect(url).toBe(`${API_URL}/delta/v2/agents/list/42161`);
      return agents; // server returns string[] directly
    });

    const { getAgentsList } = constructGetAgentsList({
      apiURL: API_URL,
      chainId: 42161,
      fetcher,
    });

    expect(await getAgentsList()).toEqual(agents);
  });
});

describe('Delta: build (server-side via POST /v2/orders/build)', () => {
  test('buildDeltaOrder POSTs to /delta/v2/orders/build with correct body', async () => {
    const builtFixture = buildBuiltOrderFixture();
    let postedBody: any;

    const fetcher = makeFetcher(({ url, method, data }) => {
      expect(method).toBe('POST');
      expect(url).toBe(`${API_URL}/delta/v2/orders/build`);
      postedBody = data;
      return builtFixture;
    });

    const { buildDeltaOrder } = constructBuildDeltaOrder({
      apiURL: API_URL,
      chainId: 1,
      fetcher,
    });

    const route = buildPriceFixture().route;
    const result = await buildDeltaOrder({
      owner: OWNER,
      route,
      side: 'SELL',
      partnerAddress: '0x0000000000000000000000000000000000000000',
    });

    expect(result).toEqual(builtFixture);
    // build endpoint derives the chain from the route — no chainId in the body
    expect(postedBody.chainId).toBeUndefined();
    expect(postedBody.side).toBe('SELL');
    expect(postedBody.owner).toBe(OWNER);
    expect(postedBody.route).toBe(route);
    expect(postedBody.slippage).toBeUndefined();
    expect(postedBody.orderType).toBe('Order');
  });

  test('buildDeltaOrder passes slippage to server for SELL', async () => {
    const builtFixture = buildBuiltOrderFixture();
    let postedBody: any;

    const fetcher = makeFetcher(({ url, data }) => {
      if (url === `${API_URL}/delta/v2/orders/build`) {
        postedBody = data;
        return builtFixture;
      }
      throw new Error(`unexpected ${url}`);
    });

    const { buildDeltaOrder } = constructBuildDeltaOrder({
      apiURL: API_URL,
      chainId: 1,
      fetcher,
    });

    await buildDeltaOrder({
      owner: OWNER,
      route: buildPriceFixture().route,
      side: 'SELL',
      slippage: 100,
      partnerAddress: '0x0000000000000000000000000000000000000000',
    });

    // slippage is forwarded to server; server applies it to destAmount
    expect(postedBody.slippage).toBe(100);
    expect(postedBody.side).toBe('SELL');
  });

  test('buildDeltaOrder passes slippage to server for BUY', async () => {
    const builtFixture = buildBuiltOrderFixture();
    let postedBody: any;

    const fetcher = makeFetcher(({ url, data }) => {
      if (url === `${API_URL}/delta/v2/orders/build`) {
        postedBody = data;
        return builtFixture;
      }
      throw new Error(`unexpected ${url}`);
    });

    const { buildDeltaOrder } = constructBuildDeltaOrder({
      apiURL: API_URL,
      chainId: 1,
      fetcher,
    });

    await buildDeltaOrder({
      owner: OWNER,
      route: buildPriceFixture().route,
      side: 'BUY',
      slippage: 100,
      partnerAddress: '0x0000000000000000000000000000000000000000',
    });

    expect(postedBody.slippage).toBe(100);
    expect(postedBody.side).toBe('BUY');
  });

  test('buildDeltaOrder passes cross-chain route as-is; server injects destinationChainId', async () => {
    const ccRoute = buildCrosschainRoute();
    const builtFixture = buildBuiltOrderFixture({
      srcToken: WETH,
      destToken: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      bridge: {
        protocolSelector: '0xdeadbeef',
        destinationChainId: 42161,
        outputToken: USDC_ARB,
        scalingFactor: -12,
        protocolData: '0xabcd',
      },
    });
    let postedBody: any;

    const fetcher = makeFetcher(({ url, data }) => {
      if (url === `${API_URL}/delta/v2/orders/build`) {
        postedBody = data;
        return builtFixture;
      }
      throw new Error(`unexpected ${url}`);
    });

    const { buildDeltaOrder } = constructBuildDeltaOrder({
      apiURL: API_URL,
      chainId: 1,
      fetcher,
    });

    const result = await buildDeltaOrder({
      owner: OWNER,
      route: ccRoute,
      side: 'SELL',
      partnerAddress: '0x0000000000000000000000000000000000000000',
    });

    // route is forwarded as-is; bridge in route.contractParams has no destinationChainId
    expect(postedBody.route).toBe(ccRoute);
    // the server (fixture) fills in destinationChainId
    expect(result.toSign.value.bridge).toMatchObject({
      protocolSelector: '0xdeadbeef',
      destinationChainId: 42161,
    });
  });

  test('buildExternalDeltaOrder sends orderType ExternalOrder with handler/data', async () => {
    const builtFixture = buildBuiltOrderFixture();
    let postedBody: any;

    const fetcher = makeFetcher(({ url, data }) => {
      if (url === `${API_URL}/delta/v2/orders/build`) {
        postedBody = data;
        return builtFixture;
      }
      throw new Error(`unexpected ${url}`);
    });

    const { buildExternalDeltaOrder } = constructBuildExternalDeltaOrder({
      apiURL: API_URL,
      chainId: 1,
      fetcher,
    });

    const route = buildPriceFixture().route;
    await buildExternalDeltaOrder({
      owner: OWNER,
      handler: '0x2222222222222222222222222222222222222222',
      data: '0xdeadbeef',
      route,
      side: 'SELL',
      partnerAddress: '0x0000000000000000000000000000000000000000',
    });

    expect(postedBody.orderType).toBe('ExternalOrder');
    expect(postedBody.handler).toBe(
      '0x2222222222222222222222222222222222222222'
    );
    expect(postedBody.data).toBe('0xdeadbeef');
    expect(postedBody.route).toBe(route);
  });

  test('buildTWAPDeltaOrder (sell) sends TWAPOrder body; slippage forwarded to server', async () => {
    const builtFixture = buildBuiltOrderFixture();
    let postedBody: any;

    const fetcher = makeFetcher(({ url, data }) => {
      if (url === `${API_URL}/delta/v2/orders/build`) {
        postedBody = data;
        return builtFixture;
      }
      throw new Error(`unexpected ${url}`);
    });

    const { buildTWAPDeltaOrder } = constructBuildTWAPDeltaOrder({
      apiURL: API_URL,
      chainId: 1,
      fetcher,
    });

    const route = buildPriceFixture().route;
    await buildTWAPDeltaOrder({
      owner: OWNER,
      onChainOrderType: 'TWAPOrder',
      route,
      totalSrcAmount: '5000000000000000000',
      interval: 300,
      numSlices: 5,
      slippage: 50,
      partnerAddress: '0x0000000000000000000000000000000000000000',
    });

    expect(postedBody.orderType).toBe('TWAPOrder');
    expect(postedBody.interval).toBe(300);
    expect(postedBody.numSlices).toBe(5);
    expect(postedBody.totalSrcAmount).toBe('5000000000000000000');
    expect(postedBody.slippage).toBe(50); // server applies slippage to destAmountPerSlice
    expect(postedBody.side).toBe('SELL');
  });

  test('buildTWAPDeltaOrder (buy) forwards slippage and maxSrcAmount to server', async () => {
    const builtFixture = buildBuiltOrderFixture();
    let postedBody: any;

    const fetcher = makeFetcher(({ url, data }) => {
      if (url === `${API_URL}/delta/v2/orders/build`) {
        postedBody = data;
        return builtFixture;
      }
      throw new Error(`unexpected ${url}`);
    });

    const { buildTWAPDeltaOrder } = constructBuildTWAPDeltaOrder({
      apiURL: API_URL,
      chainId: 1,
      fetcher,
    });

    const route = buildPriceFixture().route;
    await buildTWAPDeltaOrder({
      owner: OWNER,
      onChainOrderType: 'TWAPBuyOrder',
      route,
      totalDestAmount: '5000000000000000000',
      maxSrcAmount: '1000000000000000000',
      interval: 300,
      numSlices: 5,
      slippage: 100,
      partnerAddress: '0x0000000000000000000000000000000000000000',
    });

    expect(postedBody.orderType).toBe('TWAPBuyOrder');
    expect(postedBody.side).toBe('BUY');
    expect(postedBody.maxSrcAmount).toBe('1000000000000000000');
    expect(postedBody.slippage).toBe(100);
  });
});

describe('Delta: submit (build → sign → post)', () => {
  test('submitDeltaOrder posts to /delta/v2/orders with signed order', async () => {
    const builtFixture = buildBuiltOrderFixture();
    let posted: any;
    let postUrl = '';

    const fetcher = makeFetcher(({ url, method, data }) => {
      if (method === 'POST' && url === `${API_URL}/delta/v2/orders/build`) {
        return builtFixture;
      }
      if (method === 'POST' && url.startsWith(`${API_URL}/delta/v2/orders`)) {
        postUrl = url;
        posted = data;
        return {
          id: 'auction-99',
          order: data.order,
          onChainOrderType: 'Order',
        } as unknown as DeltaAuction<'Order'>;
      }
      throw new Error(`unexpected request ${method} ${url}`);
    });

    const { submitDeltaOrder } = constructSubmitDeltaOrder({
      apiURL: API_URL,
      chainId: 1,
      fetcher,
      contractCaller: makeMockContractCaller(),
    });

    const response = await submitDeltaOrder({
      owner: OWNER,
      route: buildPriceFixture().route,
      side: 'SELL',
      partnerAddress: '0x0000000000000000000000000000000000000000',
    });

    expect(postUrl.startsWith(`${API_URL}/delta/v2/orders`)).toBe(true);
    expect(posted.signature).toBe(FAKE_SIGNATURE);
    expect(posted.chainId).toBe(1);
    // order comes from builtFixture.toSign.value
    expect(posted.order.owner).toBe(OWNER);
    expect(posted.order.srcToken).toBe(WETH);
    expect(posted.order.destToken).toBe(DAI);
    expect(response.id).toBe('auction-99');
  });

  test('postDeltaOrder forwards degenMode as a query param', async () => {
    const fetcher = makeFetcher(({ url, method }) => {
      expect(method).toBe('POST');
      expect(url).toContain('degenMode=true');
      return { id: 'x' } as unknown as DeltaAuction<'Order'>;
    });

    const { postDeltaOrder } = constructPostDeltaOrder({
      apiURL: API_URL,
      chainId: 1,
      fetcher,
    });

    expect(
      await postDeltaOrder({
        signature: FAKE_SIGNATURE,
        order: {} as any,
        degenMode: true,
      })
    ).toEqual({ id: 'x' });
  });

  test('postExternalDeltaOrder sends to /delta/v2/orders', async () => {
    const fetcher = makeFetcher(({ url, method }) => {
      expect(method).toBe('POST');
      expect(url).toBe(`${API_URL}/delta/v2/orders`);
      return { id: 'ext-1' } as unknown as DeltaAuction<'ExternalOrder'>;
    });

    const { postExternalDeltaOrder } = constructPostExternalDeltaOrder({
      apiURL: API_URL,
      chainId: 1,
      fetcher,
    });

    expect(
      await postExternalDeltaOrder({
        signature: FAKE_SIGNATURE,
        order: {} as any,
      })
    ).toEqual({ id: 'ext-1' });
  });

  test('postTWAPDeltaOrder sends to /delta/v2/orders with onChainOrderType', async () => {
    const fetcher = makeFetcher(({ url, method, data }) => {
      expect(method).toBe('POST');
      expect(url.startsWith(`${API_URL}/delta/v2/orders`)).toBe(true);
      expect(data.onChainOrderType).toBe('TWAPOrder');
      return { id: 'twap-1' } as unknown as DeltaAuction<'TWAPOrder'>;
    });

    const { postTWAPDeltaOrder } = constructPostTWAPDeltaOrder({
      apiURL: API_URL,
      chainId: 1,
      fetcher,
    });

    expect(
      await postTWAPDeltaOrder({
        signature: FAKE_SIGNATURE,
        order: {} as any,
        onChainOrderType: 'TWAPOrder',
      })
    ).toEqual({ id: 'twap-1' });
  });
});

describe('Delta: cancel', () => {
  test('cancelDeltaOrders signs then posts to /delta/v2/orders/cancel', async () => {
    let postedTo = '';
    let postedBody: any;

    const fetcher = makeFetcher(({ url, method, data }) => {
      const adapter = url.includes('/adapters/contracts')
        ? {
            AugustusSwapper: '0x',
            TokenTransferProxy: '0x',
            AugustusRFQ: '0x',
            Executors: {},
            ParaswapDelta: '0x1111111111111111111111111111111111111111',
          }
        : undefined;
      if (adapter) return adapter;
      if (method === 'POST') {
        postedTo = url;
        postedBody = data;
        return { success: true };
      }
      throw new Error('unexpected');
    });

    const { cancelDeltaOrders } = constructCancelDeltaOrder({
      apiURL: API_URL,
      chainId: 1,
      fetcher,
      contractCaller: makeMockContractCaller(),
    });

    const result = await cancelDeltaOrders({
      orderIds: ['a', 'b'],
    });

    expect(result).toEqual({ success: true });
    expect(postedTo).toBe(`${API_URL}/delta/v2/orders/cancel`);
    expect(postedBody.orderIds).toEqual(['a', 'b']);
    expect(postedBody.signature).toBe(FAKE_SIGNATURE);
  });
});

describe('Delta: live API contract', () => {
  jest.setTimeout(30_000);

  const LIVE_API = process.env.API_URL;
  const fetchFetcher = constructFetchFetcher(fetch);

  test('GET /delta/v2/prices (same-chain) matches DeltaPrice shape', async () => {
    const { getDeltaPrice } = constructGetDeltaPrice({
      apiURL: LIVE_API,
      chainId: 1,
      fetcher: fetchFetcher,
    });

    const price = await getDeltaPrice({
      srcToken: WETH,
      destToken: DAI,
      amount: '1000000000000000000',
      srcDecimals: 18,
      destDecimals: 18,
      side: 'SELL',
    });

    expect(price.side).toBe('SELL');
    expect(price.inputToken.chainId).toBe(1);
    expect(price.outputToken.chainId).toBe(1);
    expect(typeof price.id).toBe('string');
    expect(typeof price.spender).toBe('string');
    expect(price.route.origin.input.token.address.toLowerCase()).toBe(WETH);
    expect(typeof price.route.origin.input.amount).toBe('string');
    expect(typeof price.route.origin.input.amountUSD).toBe('string');
    // same-chain: bridge is null
    expect(price.route.bridge).toBeNull();
    // fees.gas is a single DeltaTokenAmount, fees.bridge is an array
    expect(typeof price.route.fees.gas.amount).toBe('string');
    expect(Array.isArray(price.route.fees.bridge)).toBe(true);
  });

  test('GET /delta/v2/prices (cross-chain) returns DeltaRoute with bridge.contractParams (no destinationChainId)', async () => {
    const { getDeltaPrice } = constructGetDeltaPrice({
      apiURL: LIVE_API,
      chainId: 1,
      fetcher: fetchFetcher,
    });

    const price = await getDeltaPrice({
      srcToken: WETH,
      destToken: USDC_ARB,
      amount: '1000000000000000000',
      srcDecimals: 18,
      destDecimals: 6,
      destChainId: 42161,
      side: 'SELL',
    });

    expect(price.outputToken.chainId).toBe(42161);
    expect(price.route.destination.input.token.chainId).toBe(42161);
    expect(price.route.bridge).not.toBeNull();
    if (price.route.bridge) {
      expect(typeof price.route.bridge.protocol).toBe('string');
      expect(Array.isArray(price.route.bridge.tags)).toBe(true);
      expect(typeof price.route.bridge.contractParams.protocolSelector).toBe(
        'string'
      );
      expect(typeof price.route.bridge.contractParams.outputToken).toBe(
        'string'
      );
      // destinationChainId is NOT present on the wire — the SDK injects it at build time
      expect('destinationChainId' in price.route.bridge.contractParams).toBe(
        false
      );
    }
  });

  test('GET /delta/v2/prices/bridge-routes returns flat array', async () => {
    const { getBridgeRoutes } = constructGetBridgeRoutes({
      apiURL: LIVE_API,
      chainId: 1,
      fetcher: fetchFetcher,
    });

    const routes = await getBridgeRoutes();
    expect(Array.isArray(routes)).toBe(true);
    expect(routes.length).toBeGreaterThan(0);
    const first = routes[0]!;
    expect(typeof first.srcChainId).toBe('number');
    expect(typeof first.destChainId).toBe('number');
    expect(Array.isArray(first.tokens)).toBe(true);
  });

  test('GET /delta/v2/prices/bridge-protocols returns protocols', async () => {
    const { getBridgeProtocols } = constructGetBridgeRoutes({
      apiURL: LIVE_API,
      chainId: 1,
      fetcher: fetchFetcher,
    });

    const protocols = await getBridgeProtocols();
    expect(protocols.length).toBeGreaterThan(0);
    expect(protocols.some((p) => p.protocol === 'Across')).toBe(true);
  });
});

describe('Delta: SDK wiring', () => {
  test('constructAllDeltaOrdersHandlers exposes all v2 methods', () => {
    const sdk = constructAllDeltaOrdersHandlers({
      apiURL: API_URL,
      chainId: 1,
      fetcher: makeFetcher(() => ({})),
      contractCaller: makeMockContractCaller(),
    });

    expect(typeof sdk.getDeltaPrice).toBe('function');
    expect(typeof sdk.getDeltaOrders).toBe('function');
    expect(typeof sdk.getRequiredBalanceForDeltaOrders).toBe('function');
    expect(typeof sdk.getBridgeRoutes).toBe('function');
    expect(typeof sdk.buildDeltaOrder).toBe('function');
    expect(typeof sdk.postDeltaOrder).toBe('function');
    expect(typeof sdk.submitDeltaOrder).toBe('function');
    expect(typeof sdk.submitExternalDeltaOrder).toBe('function');
    expect(typeof sdk.submitTWAPDeltaOrder).toBe('function');
    expect(typeof sdk.cancelDeltaOrders).toBe('function');
    expect(typeof sdk.isTokenSupportedInDelta).toBe('function');
    expect(typeof sdk.getAgentsList).toBe('function');
    // reused v1 utilities
    expect(typeof sdk.getDeltaContract).toBe('function');
    expect(typeof sdk.getPartnerFee).toBe('function');
    expect(typeof sdk.approveTokenForDelta).toBe('function');
    // v2 sign function (replaces v1 sign in deltaV2 namespace)
    expect(typeof sdk.signDeltaOrder).toBe('function');
  });

  test('constructPartialSDK accepts v2 constructors individually', () => {
    const fetcher = makeFetcher(() => ({}));
    const sdk = constructPartialSDK(
      { apiURL: API_URL, chainId: 1, fetcher },
      constructBuildDeltaOrder,
      constructPostDeltaOrder,
      constructGetDeltaOrders,
      constructGetDeltaPrice,
      constructGetDeltaContract,
      constructGetPartnerFee,
      constructGetBridgeRoutes,
      constructIsTokenSupportedInDelta
    );

    expect(typeof sdk.getDeltaPrice).toBe('function');
    expect(typeof sdk.getBridgeRoutes).toBe('function');
    expect(typeof sdk.getDeltaOrders).toBe('function');
    expect(typeof sdk.getRequiredBalanceForDeltaOrders).toBe('function');
    expect(typeof sdk.buildDeltaOrder).toBe('function');
    expect(typeof sdk.postDeltaOrder).toBe('function');
    expect(typeof sdk.isTokenSupportedInDelta).toBe('function');
  });
});
