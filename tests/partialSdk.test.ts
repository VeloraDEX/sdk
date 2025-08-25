import * as dotenv from 'dotenv';
import Web3 from 'web3';
import { TransactionReceipt as Web3TransactionReceipt } from 'web3';
import { BigNumber as BigNumberEthers, ethers } from 'ethersV5';
import { ethers as ethersV6 } from 'ethers';
import axios from 'axios';
import fetch from 'isomorphic-unfetch';
import {
  ApproveTokenFunctions,
  BuildTxFunctions,
  constructApproveToken,
  constructAxiosFetcher,
  constructBuildTx,
  constructEthersV5ContractCaller,
  constructEthersV6ContractCaller,
  constructFetchFetcher,
  constructGetAdapters,
  constructGetRate,
  constructGetSpender,
  constructGetTokens,
  constructPartialSDK,
  constructWeb3ContractCaller,
  ConstructProviderFetchInput,
  GetSpenderFunctions,
  GetTokensFunctions,
  SDKConfig,
  Web3UnpromiEvent,
  constructGetBalances,
  GetBalancesFunctions,
  GetAdaptersFunctions,
  GetRateFunctions,
  isAllowance,
  SwapSide,
  GetSwapTxFunctions,
  constructSwapTx,
} from '../src';
import BigNumber from 'bignumber.js';

import erc20abi from './abi/ERC20.json';

import { assert } from 'ts-essentials';
import type {
  ContractCallerFunctions,
  StaticContractCallerFn,
  TransactionContractCallerFn,
} from '../src/types';
import { HardhatProvider, setupFork } from './helpers/hardhat';

dotenv.config();

jest.setTimeout(30 * 1000);

const ETH = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
const DAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
// const HEX = '0x2b591e99afe9f32eaa6214f7b7629768c40eeb39';

const DUMMY_ADDRESS_FOR_TESTING_ALLOWANCES =
  '0xb9A079479A7b0F4E7F398F7ED3946bE6d9a40E79';

const chainId = 1;
const srcToken = ETH;
const destToken = DAI;
const srcAmount = (1 * 1e18).toString(); //The source amount multiplied by its decimals

const referrer = 'sdk-test';

const TEST_MNEMONIC =
  // fresh throw-away mnemonic, acc from previous public mnemonic was overused and generated errors on BUY
  'venue olympic vendor sign era tongue sleep peace daughter enjoy dry august';
//0xbB12cA3d135e40517CDDAc23E9fBE0E66f53e829
const wallet = ethers.Wallet.fromMnemonic(TEST_MNEMONIC);
const walletV6 = ethersV6.HDNodeWallet.fromPhrase(TEST_MNEMONIC);

const web3provider = new Web3(HardhatProvider as any);

const ethersProvider = new ethers.providers.Web3Provider(
  HardhatProvider as any
);

const ethersV6Provider = new ethersV6.BrowserProvider(HardhatProvider);
const signerV6 = walletV6.connect(ethersV6Provider);

const fetchFetcher = constructFetchFetcher(fetch);
const axiosFetcher = constructAxiosFetcher(axios);

const signer = wallet.connect(ethersProvider);
const senderAddress = signer.address;

const ethersV5ContractCaller = constructEthersV5ContractCaller(
  {
    ethersProviderOrSigner: signer,
    EthersContract: ethers.Contract,
  },
  senderAddress
);

const ethersV6ContractCaller = constructEthersV6ContractCaller(
  {
    ethersV6ProviderOrSigner: signerV6,
    EthersV6Contract: ethersV6.Contract,
  },
  senderAddress
);

const web3ContractCaller = constructWeb3ContractCaller(
  web3provider,
  senderAddress
);

const customGanacheContractCaller = constructProviderOnlyContractCaller(
  HardhatProvider,
  senderAddress
);

describe.each([
  ['fetchFetcher', fetchFetcher],
  ['axiosFetcher', axiosFetcher],
])('Partial SDK: fetching methods: %s', (testName, fetcher) => {
  let sdk: GetBalancesFunctions &
    GetAdaptersFunctions &
    GetTokensFunctions &
    GetRateFunctions &
    GetSpenderFunctions &
    BuildTxFunctions &
    GetSwapTxFunctions;

  beforeAll(async () => {
    await setupFork({
      accounts: [{ address: senderAddress, balance: 8e18 }],
    });

    sdk = constructPartialSDK(
      { chainId, fetcher, version: '5' },
      constructGetBalances,
      constructGetAdapters,
      constructGetTokens,
      constructGetRate,
      constructGetSpender,
      constructBuildTx,
      constructSwapTx
    );
  });
  test('getBalance', async () => {
    try {
      const balance = await sdk.getBalance(senderAddress, ETH);
      expect(balance).toBeDefined();
    } catch (error: any) {
      // workaround for API sometimes failing on some Tokens(?)
      expect(error.message).toMatch(/Only chainId \d+ is supported/);
    }
  });

  test('Get_Markets', async () => {
    const markets = await sdk.getAdapters();
    expect(markets.length).toBeGreaterThan(15);
  });

  test('Get_Tokens', async () => {
    const tokens = await sdk.getTokens();

    expect(Array.isArray(tokens)).toBe(true);
    expect(tokens.length).toBeGreaterThan(0);
    expect(tokens[0]).toEqual(
      expect.objectContaining({
        symbol: expect.any(String),
        address: expect.any(String),
        decimals: expect.any(Number),
      })
    );
  });

  test('Get_Rates', async () => {
    const priceRoute = await sdk.getRate({
      srcToken: ETH,
      destToken: DAI,
      amount: srcAmount,
      userAddress: senderAddress,
      side: SwapSide.SELL,
      options: {
        includeDEXS: ['UniswapV2'],
        otherExchangePrices: true,
      },
    });

    const { destAmount, bestRoute, others } = priceRoute;

    expect(typeof destAmount).toBe('string');

    expect(Array.isArray(bestRoute)).toBe(true);

    const swapExchange = bestRoute[0]?.swaps[0]?.swapExchanges[0];

    assert(swapExchange, 'exchange available at swapExchanges[0]');

    expect(typeof swapExchange.destAmount).toBe('string');
    expect(new BigNumber(swapExchange.destAmount).isNaN()).toBe(false);

    expect(typeof swapExchange.exchange).toBe('string');

    const firstBestRoute = bestRoute[0];
    assert(firstBestRoute, 'route available at bestRoute[0]');

    expect(typeof firstBestRoute.percent).toBe('number');
    expect(new BigNumber(firstBestRoute.percent).isNaN()).toBe(false);

    expect(typeof swapExchange.srcAmount).toBe('string');
    expect(new BigNumber(swapExchange.srcAmount).isNaN()).toBe(false);

    expect(Array.isArray(others)).toBe(true);

    const firstRoute = others?.[0];

    assert(firstRoute, 'at least one route must exist');

    expect(typeof firstRoute.exchange).toBe('string');

    expect(typeof firstRoute.unit).toBe('string');
    expect(firstRoute.unit && new BigNumber(firstRoute.unit).isNaN()).toBe(
      false
    );
  });

  test('Get_SwapTxData', async () => {
    const { priceRoute, txParams } = await sdk.getSwapTxData({
      srcToken: ETH,
      destToken: DAI,
      amount: srcAmount,
      userAddress: senderAddress,
      side: SwapSide.SELL,
      slippage: 500,
      options: {
        includeDEXS: ['UniswapV2'],
      },
    });

    const bestRouteStable = priceRoute.bestRoute.map((b) => ({
      ...b,
      swaps: b.swaps.map((s) => ({
        ...s,
        swapExchanges: s.swapExchanges.map((se) => ({
          ...se,
          destAmount: 'dynamic_number',
          data: {
            ...se.data,
            gasUSD: 'dynamic_number',
          },
        })),
      })),
    }));

    const priceRouteStable = {
      ...priceRoute,
      gasCost: 'dynamic_number',
      gasCostUSD: 'dynamic_number',
      hmac: 'dynamic_string',
      destAmount: 'dynamic_number',
      blockNumber: 'dynamic_number',
      srcUSD: 'dynamic_number',
      destUSD: 'dynamic_number',
      bestRoute: bestRouteStable,
    };

    const txParamsStable = {
      ...txParams,
      data: 'dynamic_string',
      from: 'dynamic_string',
      gasPrice: 'dynamic_number',
    };

    expect(txParams.from).toEqual(senderAddress);

    expect(priceRouteStable).toMatchSnapshot('Get_SwapTxData::priceRoute');
    expect(txParamsStable).toMatchSnapshot('Get_SwapTxData::txParams');
  });

  test('Get_Spender', async () => {
    const spender = await sdk.getSpender();
    expect(web3provider.utils.isAddress(spender)).toBe(true);
  });

  test('Get_AugustusSwapper', async () => {
    const Augustus = await sdk.getAugustusSwapper();
    expect(web3provider.utils.isAddress(Augustus)).toBe(true);
  });

  test('Get_Contracts', async () => {
    const contracts = await sdk.getContracts();
    expect(contracts).toMatchSnapshot(testName);
  });

  test('Get_Allowance', async () => {
    const allowance = await sdk.getAllowance(
      DUMMY_ADDRESS_FOR_TESTING_ALLOWANCES,
      DAI
    );

    assert(isAllowance(allowance), 'hardcoded dummy address should be found');

    expect(allowance.allowance).toEqual('123000000000000000');
  });

  test('Get_Adapters', async () => {
    const adapters = await sdk.getAdapters();

    expect(adapters).toMatchSnapshot('Get_Adapters');
  });

  test('Build_Tx', async () => {
    const destToken = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';
    const priceRoute = await sdk.getRate({
      srcToken,
      destToken,
      amount: srcAmount,
      userAddress: senderAddress,
      side: SwapSide.SELL,
      options: {
        includeDEXS: ['UniswapV2'],
      },
    });

    const destAmount = new BigNumber(priceRoute.destAmount)
      .times(0.99)
      .toFixed(0);

    const txParams = await sdk.buildTx(
      {
        srcToken,
        destToken,
        srcAmount,
        destAmount,
        priceRoute,
        userAddress: senderAddress,
        partner: referrer,
      },
      { ignoreChecks: true }
    );

    expect(typeof txParams).toBe('object');
  });
  test('Build_and_Send_Tx', async () => {
    const priceRoute = await sdk.getRate({
      srcToken,
      destToken,
      amount: srcAmount,
      userAddress: senderAddress,
      side: SwapSide.SELL,
      options: {
        includeDEXS: ['Uniswap', 'UniswapV2', 'Balancer', 'Oasis'],
      },
    });

    const destAmount = new BigNumber(priceRoute.destAmount)
      .times(0.99)
      .toFixed(0);

    const txParams = await sdk.buildTx(
      {
        srcToken,
        destToken,
        srcAmount,
        destAmount,
        priceRoute,
        userAddress: signer.address,
        partner: referrer,
      },
      { ignoreChecks: true }
    );

    const transaction = {
      ...txParams,
      gasPrice:
        txParams.gasPrice &&
        '0x' + new BigNumber(txParams.gasPrice).toString(16),
      maxFeePerGas:
        txParams.maxFeePerGas &&
        '0x' + new BigNumber(txParams.maxFeePerGas).toString(16),
      maxPriorityFeePerGas:
        txParams.maxPriorityFeePerGas &&
        '0x' + new BigNumber(txParams.maxPriorityFeePerGas).toString(16),
      gasLimit: '0x' + new BigNumber(5000000).toString(16),
      value: '0x' + new BigNumber(txParams.value).toString(16),
    };
    const toContract = new ethers.Contract(destToken, erc20abi, ethersProvider);
    const beforeFromBalance = await ethersProvider.getBalance(signer.address);
    const beforeToBalance = await toContract.balanceOf(signer.address);

    const txr = await signer.sendTransaction(transaction);
    await txr.wait(1);
    const afterFromBalance = await ethersProvider.getBalance(signer.address);
    const afterToBalance = await toContract.balanceOf(signer.address);
    expect(beforeFromBalance.gt(afterFromBalance)).toBeTruthy();
    expect(beforeToBalance.lt(afterToBalance)).toBeTruthy();
  });
  test('Build_and_Send_Tx_BUY', async () => {
    const destAmount = srcAmount;
    const priceRoute = await sdk.getRate({
      srcToken,
      destToken,
      amount: destAmount,
      userAddress: senderAddress,
      side: SwapSide.BUY,
      options: { includeDEXS: ['Uniswap', 'UniswapV2', 'Balancer', 'Oasis'] },
    });
    const _srcAmount = new BigNumber(priceRoute.srcAmount)
      .times(1.1)
      .toFixed(0);

    const txParams = await sdk.buildTx(
      {
        srcToken,
        destToken,
        srcAmount: _srcAmount,
        destAmount,
        priceRoute,
        userAddress: signer.address,
        partner: referrer,
      },
      { ignoreChecks: true }
    );

    const transaction = {
      ...txParams,
      gasPrice:
        txParams.gasPrice &&
        '0x' + new BigNumber(txParams.gasPrice).toString(16),
      maxFeePerGas:
        txParams.maxFeePerGas &&
        '0x' + new BigNumber(txParams.maxFeePerGas).toString(16),
      maxPriorityFeePerGas:
        txParams.maxPriorityFeePerGas &&
        '0x' + new BigNumber(txParams.maxPriorityFeePerGas).toString(16),
      gasLimit: '0x' + new BigNumber(5000000).toString(16),
      value: '0x' + new BigNumber(txParams.value).toString(16),
    };
    const toContract = new ethers.Contract(destToken, erc20abi, ethersProvider);
    const beforeFromBalance = await ethersProvider.getBalance(signer.address);
    const beforeToBalance = await toContract.balanceOf(signer.address);

    const txr = await signer.sendTransaction(transaction);
    await txr.wait(1);
    const afterFromBalance = await ethersProvider.getBalance(signer.address);
    const afterToBalance = await toContract.balanceOf(signer.address);
    expect(beforeFromBalance.gt(afterFromBalance)).toBeTruthy();
    expect(beforeToBalance.lt(afterToBalance)).toBeTruthy();
  });
});

describe.each([
  [
    'fetchFetcher & ethersV5ContractCaller',
    fetchFetcher,
    ethersV5ContractCaller,
  ],
  [
    'fetchFetcher & ethersV6ContractCaller',
    fetchFetcher,
    ethersV6ContractCaller,
  ],
  ['axiosFetcher & web3ContractCaller', axiosFetcher, web3ContractCaller],
  [
    'axiosFetcher & customGanacheContractCaller',
    axiosFetcher,
    customGanacheContractCaller,
  ],
])(
  'Partial SDK: contract calling methods: %s',
  (testName, fetcher, contractCaller) => {
    type ApproveTxResult =
      | ethers.ContractTransaction
      | ethersV6.ContractTransactionResponse
      | Web3UnpromiEvent
      | string;
    // @TODO try Instantiation Expression when TS 4.7 `as constructApproveToken<TxResponse>`
    type ApproveConstructor = (
      options: ConstructProviderFetchInput<ApproveTxResult, 'transactCall'>
    ) => ApproveTokenFunctions<ApproveTxResult>;

    let sdk: ApproveTokenFunctions<ApproveTxResult> & GetSpenderFunctions;

    beforeAll(() => {
      sdk = constructPartialSDK<
        SDKConfig<ApproveTxResult>,
        [ApproveConstructor, typeof constructGetSpender]
      >(
        { chainId, fetcher, contractCaller, version: '5' },
        constructApproveToken,
        constructGetSpender
      );
    });
    test('approveToken', async () => {
      const tx = await sdk.approveToken('12345', DAI);

      if (typeof tx === 'string') {
        // tx is sent
        // wait for it to mine however you prefer
        await ethersProvider.waitForTransaction(tx);
      } else if ('wait' in tx) {
        await tx.wait(1);
      } else if ('on' in tx) {
        await new Promise<Web3TransactionReceipt>((resolve, reject) => {
          tx.once('receipt', resolve);
          tx.once('error', reject);
        });
      }
      const toContract = new ethers.Contract(
        destToken,
        erc20abi,
        ethersProvider
      );
      const spender = await sdk.getSpender();
      const allowance: BigNumberEthers = await toContract.allowance(
        signer.address,
        spender
      );
      expect(allowance.toString()).toEqual('12345');
    });
  }
);

interface MinProvider {
  request(args: { method: string; params: any }): Promise<any>;
}
// example of constructing a custom contractCaller with provider only
function constructProviderOnlyContractCaller(
  provider: MinProvider,
  account?: string
): Pick<
  ContractCallerFunctions<string>,
  'staticCall' | 'transactCall' | 'signTypedDataCall'
> {
  // staticCall isn't currently necessary, because provider is only used in approveToken currently for tx making
  const staticCall: StaticContractCallerFn = async ({
    address,
    abi,
    contractMethod,
    args,
    overrides,
  }) => {
    // need to encode data somehow, to send raw call
    const iface = new ethers.utils.Interface(abi);
    const calldataEncoded = iface.encodeFunctionData(contractMethod, args);

    const gasPrice =
      overrides.gasPrice &&
      '0x' + Number.parseInt(overrides.gasPrice).toString(16);
    const gas = overrides.gas && '0x' + overrides.gas.toString(16);
    const value = overrides.value && '0x' + overrides.value.toString(16);

    const params = [
      {
        from: account,
        to: address,
        gasPrice,
        gas,
        value,
        data: calldataEncoded,
      },
    ];

    // what provider here returns will depend on provider
    // ganache returns `result` from {"id":1, "jsonrpc": "2.0", "result": "0x..."} JsonRpcResponse
    // keeping it `as any` as we don't know
    const res = await provider.request({
      method: 'eth_call',
      params,
    });

    return res;
  };

  const transactCall: TransactionContractCallerFn<string> = async ({
    address,
    abi,
    contractMethod,
    args,
    overrides,
  }) => {
    const iface = new ethers.utils.Interface(abi);
    const calldataEncoded = iface.encodeFunctionData(contractMethod, args);

    const gasPrice =
      overrides.gasPrice &&
      '0x' + Number.parseInt(overrides.gasPrice).toString(16);
    const gas = overrides.gas && '0x' + overrides.gas.toString(16);
    const value = overrides.value && '0x' + overrides.value.toString(16);

    const params = [
      {
        from: account,
        to: address,
        gasPrice,
        gas,
        value,
        data: calldataEncoded,
      },
    ];

    // what provider here returns will depend on provider
    // hardhat returns `result` from {"id":1, "jsonrpc": "2.0", "result": "0x..."} JsonRpcResponse
    // `string`
    const res = await provider.request({
      // we can only sendTransaction right away because we asked hardhat to impersonate account
      // for other provider we may need to signTransaction first, then sendRawTransaction
      method: 'eth_sendTransaction',
      params,
    });

    return res;
  };

  const signTypedDataCall = () => {
    throw new Error('not implemented');
  };

  return { transactCall, signTypedDataCall, staticCall };
}
