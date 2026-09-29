import { spawnSync } from 'child_process';
import path from 'path';
import { Contract as ContractV5, VoidSigner as VoidSignerV5 } from 'ethersV5';
import {
  Contract,
  VoidSigner,
  TransactionResponse,
  ContractTransactionResponse,
} from 'ethers';
import { createWalletClient, custom, encodeFunctionData, Hex } from 'viem';
import { base } from 'viem/chains';
import Web3 from 'web3';
import { constructFillOTCOrder } from '../src/methods/otcOrders/fillOrderDirectly';
import { constructEthersV5ContractCaller } from '../src/helpers/providers/ethers';
import { constructContractCaller as ethersV6Caller } from '../src/helpers/providers/ethersV6';
import { constructContractCaller as viemCaller } from '../src/helpers/providers/viem';
import { constructContractCaller as web3Caller } from '../src/helpers/providers/web3';
import type { FetcherFunction } from '../src/types';
import * as buildConfig from '../src/helpers/buildConfig';

jest.mock('../src/helpers/buildConfig', () => ({
  __esModule: true,
  BASE_BUILDER_CODE_SUFFIX: '',
}));
const suffix: Hex =
  '0x62635f686d363471346a6d0b0080218021802180218021802180218021';
const address = '0x0000000000000000000000000000000000000001';
const hash = `0x${'ab'.repeat(32)}`;
const order = {
  nonceAndMeta: '1',
  expiry: 2000000000,
  makerAsset: address,
  takerAsset: address,
  maker: address,
  taker: address,
  makerAmount: '100',
  takerAmount: '200',
};

afterEach(() => {
  jest.restoreAllMocks();
  Object.assign(buildConfig, { BASE_BUILDER_CODE_SUFFIX: '' });
});

describe('direct RFQ attribution scope', () => {
  it.each([
    [8453, suffix, suffix],
    [1, suffix, undefined],
    [8453, '', undefined],
  ])(
    'chain %s with configured suffix %s',
    async (chainId, configured, expected) => {
      Object.assign(buildConfig, { BASE_BUILDER_CODE_SUFFIX: configured });
      const transactCall = jest.fn().mockResolvedValue(hash);
      const fetcher: FetcherFunction = async <T>() =>
        ({ AugustusRFQ: address }) as T;
      const { fillOTCOrder } = constructFillOTCOrder({
        chainId: Number(chainId),
        fetcher,
        contractCaller: { transactCall },
      });
      await fillOTCOrder({ order, signature: '0x1234' });
      await fillOTCOrder({
        order,
        signature: '0x1234',
        takerPermit: { encodedPermitParams: '0x5678' },
      });
      expect(transactCall).toHaveBeenNthCalledWith(
        1,
        expect.objectContaining({
          contractMethod: 'fillOrder',
          dataSuffix: expected,
        })
      );
      expect(transactCall).toHaveBeenNthCalledWith(
        2,
        expect.objectContaining({
          contractMethod: 'partialFillOrderWithTargetPermit',
          dataSuffix: expected,
        })
      );
    }
  );
});

const abi = [
  {
    type: 'function',
    name: 'trade',
    stateMutability: 'payable',
    inputs: [{ name: 'amount', type: 'uint256' }],
    outputs: [],
  },
] as const;
const calldata = encodeFunctionData({
  abi,
  functionName: 'trade',
  args: [42n],
});
const params = {
  address,
  abi,
  contractMethod: 'trade',
  args: ['42'],
  overrides: { value: '7', gas: 100000, nonce: 3 },
};

describe.each([undefined, suffix])(
  'provider calldata (suffix %s)',
  (dataSuffix) => {
    const expected = `${calldata}${dataSuffix?.slice(2) || ''}`;
    it('ethers v5 and v6 preserve contract responses and append before signer submission', async () => {
      const signerV5 = new VoidSignerV5(address);
      const sendV5 = jest.spyOn(signerV5, 'sendTransaction').mockResolvedValue({
        hash,
        wait: jest.fn().mockResolvedValue({ logs: [] }),
      } as unknown as Awaited<ReturnType<typeof signerV5.sendTransaction>>);
      const v5 = constructEthersV5ContractCaller(
        {
          ethersProviderOrSigner: signerV5,
          EthersContract: ContractV5,
        },
        address
      );
      const responseV5 = await v5.transactCall({ ...params, dataSuffix });
      expect(responseV5.hash).toBe(hash);
      expect((await responseV5.wait()).events).toEqual([]);
      expect(sendV5).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expected,
          to: address,
          nonce: 3,
        })
      );
      const signer = new VoidSigner(address);
      const send = jest
        .spyOn(signer, 'sendTransaction')
        .mockResolvedValue({ hash } as TransactionResponse);
      const v6 = ethersV6Caller(
        { ethersV6ProviderOrSigner: signer, EthersV6Contract: Contract },
        address
      );
      const response = await v6.transactCall({ ...params, dataSuffix });
      expect(response.hash).toBe(hash);
      expect(response).toBeInstanceOf(ContractTransactionResponse);
      expect(send).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expected,
          to: address,
          value: 7n,
          gasLimit: 100000n,
          nonce: 3,
        })
      );
    });

    it('viem sends suffixed calldata to the wallet RPC', async () => {
      const request = jest.fn(async ({ method }: { method: string }) => {
        if (method === 'eth_chainId') return '0x2105';
        if (method === 'eth_sendTransaction') return hash;
        throw new Error(`Unexpected RPC ${method}`);
      });
      const client = createWalletClient({
        account: address,
        chain: base,
        transport: custom({ request }),
      });
      const caller = viemCaller(client, address);
      expect(await caller.transactCall({ ...params, dataSuffix })).toBe(hash);
      expect(request).toHaveBeenCalledWith(
        expect.objectContaining({
          method: 'eth_sendTransaction',
          params: [
            expect.objectContaining({
              data: expected,
              value: '0x7',
              gas: '0x186a0',
              nonce: '0x3',
            }),
          ],
        }),
        undefined
      );
    });

    it('Web3 adds the suffix through contract transaction middleware and retains events', async () => {
      const web3 = new Web3('http://localhost:1');
      const actualContract = web3.eth.Contract;
      const sent = jest.fn();
      // Keep real ABI encoding, but stop at contract.send to avoid RPC or receipt polling.
      jest.spyOn(web3.eth, 'Contract').mockImplementation((...args) => {
        const contract = new actualContract(...args);
        const method = contract.methods.trade!;
        contract.methods.trade = (...values) => {
          const prepared = method(...values);
          prepared.send = jest.fn((options) => {
            const middleware = contract.getTransactionMiddleware();
            const tx = {
              ...options,
              data: prepared.encodeABI(),
              input: prepared.encodeABI(),
            };
            sent(
              middleware
                ? middleware.processTransaction(tx)
                : Promise.resolve(tx)
            );
            return { on: jest.fn(), once: jest.fn() } as unknown as ReturnType<
              typeof prepared.send
            >;
          });
          return prepared;
        };
        return contract;
      });
      const response = await web3Caller(web3, address).transactCall({
        ...params,
        dataSuffix,
      });
      expect(typeof response.on).toBe('function');
      expect(typeof response.once).toBe('function');
      expect(await sent.mock.calls[0]?.[0]).toEqual(
        expect.objectContaining({ data: expected, input: expected, value: '7' })
      );
    });
  }
);

describe('build-time configuration', () => {
  const buildConfig = (code: string) =>
    spawnSync(
      process.execPath,
      [
        '-e',
        `
      require(
        require.resolve('ts-node', { paths: [require.resolve('dts-cli')] })
      ).register({ compilerOptions: { module: 'CommonJS' }, transpileOnly: true });
      const config = require('./dts.config.ts').default;
      const { plugins } = config.rollup({ plugins: [] });
      const output = plugins[0].transform('export const BASE_BUILDER_CODE_SUFFIX = process.env.BASE_BUILDER_CODE_SUFFIX;', require('path').resolve('src/helpers/buildConfig.ts'));
      process.stdout.write(output.code);
    `,
      ],
      {
        cwd: path.resolve(__dirname, '..'),
        env: { ...process.env, BASE_BUILDER_CODE: code },
        encoding: 'utf8',
        timeout: 5000,
      }
    );

  it.each(['bc_hm64q4jm', ''])('embeds configured code %s', (code) => {
    const result = buildConfig(code);
    expect(result.status).toBe(0);
    expect(result.stdout).toBe(
      `export const BASE_BUILDER_CODE_SUFFIX = ${JSON.stringify(
        code ? suffix : ''
      )};`
    );
  });

  it('rejects malformed configuration during the build', () => {
    const result = buildConfig('code,other');
    expect(result.status).toBe(1);
    expect(result.stderr).toContain('BASE_BUILDER_CODE must be');
  });
});
