import {
  createWalletClient,
  custom,
  decodeFunctionData,
  Hex,
  parseAbi,
} from 'viem';
import { mainnet } from 'viem/chains';
import { constructSimpleSDK } from '../src/sdk/simple';
import { constructContractCaller } from '../src/helpers/providers/viem';

const account = '0x0000000000000000000000000000000000000001';
const spender = '0x0000000000000000000000000000000000000002';
const token = '0x0000000000000000000000000000000000000003';
const hash: Hex = `0x${'ab'.repeat(32)}`;
const approvalAbi = parseAbi([
  'function approve(address spender, uint256 amount) returns (bool)',
]);
const maxUint256 = (1n << 256n) - 1n;

function createHarness() {
  const transactions: { to: Hex; data: Hex }[] = [];
  const walletClient = createWalletClient({
    account,
    chain: mainnet,
    transport: custom({
      request: async ({ method, params }) => {
        if (method === 'eth_chainId') return '0x1';
        if (method === 'eth_sendTransaction') {
          const [transaction] = params as [{ to: Hex; data: Hex }];
          transactions.push(transaction);
          return hash;
        }
        throw new Error(`Unexpected wallet request: ${method}`);
      },
    }),
  });
  const sdk = constructSimpleSDK(
    {
      chainId: mainnet.id,
      fetch: async () =>
        Response.json({
          TokenTransferProxy: spender,
          ParaswapDelta: spender,
          AugustusRFQ: spender,
        }),
    },
    { viemClient: walletClient, account }
  );

  return {
    sdk,
    caller: constructContractCaller(walletClient, account),
    transactions,
  };
}

describe('viem decimal integer arguments', () => {
  test.each([
    '0',
    '12345',
    '9007199254740991',
    '9007199254740993',
    '1000000000000000001',
    '1000000000000000123',
    '1000010000000000000000', // 1000.01 tokens with 18 decimals
    maxUint256.toString(),
    '  +01000000000000000001  ',
  ])('encodes the exact requested approval %s', async (amount) => {
    const { sdk, transactions } = createHarness();

    await expect(sdk.swap.approveToken(amount, token)).resolves.toBe(hash);

    expect(transactions).toHaveLength(1);
    expect(transactions[0]?.to).toBe(token);
    const decoded = decodeFunctionData({
      abi: approvalAbi,
      data: transactions[0]!.data,
    });
    expect(decoded.args).toEqual([spender, BigInt(amount)]);
  });

  test.each(['delta', 'otc'] as const)(
    'preserves exact amounts in the %s approval path',
    async (kind) => {
      const { sdk, transactions } = createHarness();
      const amount = '1000010000000000000000';

      if (kind === 'delta') {
        await sdk.delta.approveTokenForDelta(amount, token);
      } else {
        await sdk.otcOrders.approveMakerTokenForOTCOrder(amount, token);
      }

      const decoded = decodeFunctionData({
        abi: approvalAbi,
        data: transactions[0]!.data,
      });
      expect(decoded.args).toEqual([spender, BigInt(amount)]);
    }
  );

  test.each(['-9007199254740993', (-(1n << 255n) + 1n).toString()])(
    'preserves signed integer %s',
    async (amount) => {
      const { caller, transactions } = createHarness();
      const abi = parseAbi(['function setValue(int256 value)']);
      await caller.transactCall({
        address: token,
        abi,
        contractMethod: 'setValue',
        args: [amount],
        overrides: {},
      });

      expect(
        decodeFunctionData({ abi, data: transactions[0]!.data }).args
      ).toEqual([BigInt(amount)]);
    }
  );

  test.each([
    ['0x' + maxUint256.toString(16), maxUint256],
    ['1e18', 1000000000000000000n],
    ['1.0', 1n],
  ])('retains existing numeric format %s', async (amount, expected) => {
    const { sdk, transactions } = createHarness();
    await sdk.swap.approveToken(amount as string, token);
    const decoded = decodeFunctionData({
      abi: approvalAbi,
      data: transactions[0]!.data,
    });
    expect(decoded.args).toEqual([spender, expected]);
  });

  test('leaves nonnumeric string, bytes, and bigint arguments intact', async () => {
    const { caller, transactions } = createHarness();
    const abi = parseAbi([
      'function setValues(string label, bytes data, uint256 amount)',
    ]);
    const args = ['example', '0x1234', maxUint256];
    await caller.transactCall({
      address: token,
      abi,
      contractMethod: 'setValues',
      args,
      overrides: {},
    });

    expect(
      decodeFunctionData({ abi, data: transactions[0]!.data }).args
    ).toEqual(args);
  });
});
