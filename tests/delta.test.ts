import * as dotenv from 'dotenv';
import Web3 from 'web3';
import { ethers } from 'ethersV5';
import { ethers as ethersV6 } from 'ethers';
import fetch from 'isomorphic-unfetch';
import {
  constructEthersV5ContractCaller,
  constructEthersV6ContractCaller,
  constructFetchFetcher,
  constructPartialSDK,
  constructWeb3ContractCaller,
  constructGetDeltaContract,
  constructGetDeltaOrders,
  constructGetDeltaPrice,
  constructBuildDeltaOrder,
  constructApproveTokenForDelta,
  constructSignDeltaOrder,
  constructViemContractCaller,
  constructGetPartnerFee,
  SignableDeltaOrderData,
  DeltaPrice,
  constructPostDeltaOrder,
  constructSubmitDeltaOrder,
  PostDeltaOrderParams,
  FetcherFunction,
  constructCancelDeltaOrder,
  constructPreSignDeltaOrder,
  GetDeltaContractFunctions,
  constructGetBridgeInfo,
  BridgeInfo,
} from '../src';
import BigNumber from 'bignumber.js';

import erc20abi from './abi/ERC20.json';

import { assert } from 'ts-essentials';
import { HardhatProvider } from './helpers/hardhat';
import { privateKeyToAccount } from 'viem/accounts';
import {
  Address,
  createWalletClient,
  custom,
  Hash,
  Hex,
  publicActions,
  verifyTypedData,
} from 'viem';
import { hardhat } from 'viem/chains';
import { ZERO_ADDRESS } from '../src/methods/common/orders/buildOrderData';
import {
  BridgePriceInfo,
  DeltaAuctionOrder,
} from '../src/methods/delta/helpers/types';

dotenv.config();

jest.setTimeout(30 * 1000);

const WETH = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
const DAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F';

const chainId = 1;
const srcToken = WETH;
const destToken = DAI;
const srcAmount = (1 * 1e18).toString(); //The source amount multiplied by its decimals

const TEST_MNEMONIC =
  'radar blur cabbage chef fix engine embark joy scheme fiction master release';
//0xaC39b311DCEb2A4b2f5d8461c1cdaF756F4F7Ae9
const wallet = ethers.Wallet.fromMnemonic(TEST_MNEMONIC);
const walletV6 = ethersV6.HDNodeWallet.fromPhrase(TEST_MNEMONIC);

const web3provider = new Web3(HardhatProvider as any);

const ethersProvider = new ethers.providers.Web3Provider(
  HardhatProvider as any
);

const ethersV6Provider = new ethersV6.BrowserProvider(HardhatProvider);
const signerV6 = walletV6.connect(ethersV6Provider);

const fetchFetcher = constructFetchFetcher(fetch);

const signer = wallet.connect(ethersProvider);
const senderAddress = signer.address;

const viemWalletClient = createWalletClient({
  // either walletClient needs to have account set at creation
  // or provider must own the account (for testing can `await viemTestClient.impersonateAccount({ address: senderAddress });`)
  // to be able to sign transactions
  account: privateKeyToAccount(wallet.privateKey as Hex),
  chain: { ...hardhat, id: chainId },
  transport: custom(HardhatProvider),
}).extend(publicActions);

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

const viemContractCaller = constructViemContractCaller(
  viemWalletClient,
  senderAddress
);

describe('Delta:methods', () => {
  const deltaSDK = constructPartialSDK(
    {
      chainId: 1,
      fetcher: fetchFetcher,
      contractCaller: ethersV5ContractCaller,
      apiURL: process.env.API_URL,
    },
    constructGetDeltaContract,
    constructGetDeltaOrders,
    constructGetDeltaPrice,
    constructBuildDeltaOrder,
    constructApproveTokenForDelta,
    constructGetPartnerFee,
    constructGetBridgeInfo
  );

  describe('Bridge methods', () => {
    function flattenAllBridgeInfoTokens(bridgeInfo: BridgeInfo): string[] {
      return Object.values(bridgeInfo).flatMap((chainMap) =>
        Object.values(chainMap).flat()
      );
    }
    test('Get Bridge Info', async () => {
      const bridgeInfo = await deltaSDK.getBridgeInfo();
      expect(Object.keys(bridgeInfo)).toEqual(
        // allow for more chains to be added in the future
        expect.arrayContaining(['1', '10', '56', '130', '137', '8453', '42161'])
      );

      const defaultNumOfTokens = flattenAllBridgeInfoTokens(bridgeInfo).length;

      const bridgeInfoDIsallowedBridgeAndSwap = await deltaSDK.getBridgeInfo({
        allowBridgeAndSwap: false,
      });

      expect(Object.keys(bridgeInfoDIsallowedBridgeAndSwap)).toEqual(
        Object.keys(bridgeInfo)
      );
      const disallowedNumOfTokens = flattenAllBridgeInfoTokens(
        bridgeInfoDIsallowedBridgeAndSwap
      ).length;

      // fewer tokens are available when bridge and swap (swap on destChain after bridge) is not allowed
      expect(disallowedNumOfTokens).toBeLessThan(defaultNumOfTokens);
    });

    test('Get Bridge Protocols', async () => {
      const bridgeProtocols = await deltaSDK.getBridgeProtocols();
      const expectedToInclude = [
        {
          displayName: 'Across',
          protocol: 'Across',
        },
        {
          displayName: 'Stargate Bus',
          protocol: 'StargateBus',
        },
        {
          displayName: 'Stargate Taxi',
          protocol: 'StargateTaxi',
        },
        {
          displayName: 'Stargate OFT V2',
          protocol: 'StargateOftV2',
        },
        {
          displayName: 'Relay',
          protocol: 'Relay',
        },
      ];
      expect(bridgeProtocols).toEqual(
        // allow for more bridges to be added in the future
        expect.arrayContaining(expectedToInclude)
      );
    });
  });

  test('Get Delta Price', async () => {
    const deltaPrice = await deltaSDK.getDeltaPrice({
      srcToken: srcToken,
      destToken: destToken,
      amount: srcAmount,
      userAddress: senderAddress,
      srcDecimals: 18,
      destDecimals: 18,
    });

    const staticDeltaPrice: typeof deltaPrice = {
      ...deltaPrice,
      destAmount: 'dynamic_number',
      destAmountBeforeFee: 'dynamic_number',
      srcUSD: 'dynamic_number',
      destUSD: 'dynamic_number',
      destUSDBeforeFee: 'dynamic_number',
      receivedDestAmount: 'dynamic_number',
      receivedDestUSD: 'dynamic_number',
      receivedDestAmountBeforeFee: 'dynamic_number',
      receivedDestUSDBeforeFee: 'dynamic_number',
      gasCost: 'dynamic_number',
      gasCostBeforeFee: 'dynamic_number',
      gasCostUSD: 'dynamic_number',
      gasCostUSDBeforeFee: 'dynamic_number',
      hmac: 'dynamic_string',
    };

    expect(staticDeltaPrice).toMatchSnapshot();
  });

  test('breaks for srcToken=ETH', async () => {
    const getDeltaPrice = () =>
      deltaSDK.getDeltaPrice({
        srcToken: ETH_ADDRESS,
        destToken: destToken,
        amount: srcAmount,
        userAddress: senderAddress,
        srcDecimals: 18,
        destDecimals: 18,
      });

    await expect(getDeltaPrice()).rejects.toThrowErrorMatchingInlineSnapshot(
      `"SourceEth: ETH as source token is not supported"`
    );
  });

  describe('Get Delta Price Crosschain', () => {
    const destChainId = 10;
    const ETH = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';
    const WETH = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
    const WETH_ON_OPTIMISM = '0x4200000000000000000000000000000000000006';
    // const DAI_TOKEN_ON_ETHEREUM = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
    const DAI_TOKEN_ON_OPTIMISM = '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1';

    test('Get Delta Price Crosschain/destToken=random', async () => {
      const deltaPrice = await deltaSDK.getDeltaPrice({
        srcToken: WETH,
        destToken: DAI_TOKEN_ON_OPTIMISM,
        amount: srcAmount,
        userAddress: senderAddress,
        srcDecimals: 18,
        destDecimals: 18,
        destChainId,
      });

      const staticDeltaPrice: typeof deltaPrice = {
        ...deltaPrice,
        destToken: 'dynamic_address', // will no longer match DAI_TOKEN_ON_ETHEREUM if bridge is Relay
        bridge: {
          ...deltaPrice.bridge,
          protocolData: 'dynamic_string',
          protocolSelector: 'dynamic_string',
          scalingFactor: NaN, // dynamic number
        },
        bridgeInfo: {
          ...deltaPrice.bridgeInfo,
          bestReturn: true,
          destAmountAfterBridge: 'dynamic_number',
          destUSDAfterBridge: 'dynamic_number',
          estimatedTimeMs: NaN, // dynamic number
          fastest: true,
          fees: [], // dynamic array
          protocolName: 'dynamic_string' as BridgePriceInfo['protocolName'],
          recommended: true,
        },
        destAmount: 'dynamic_number',
        destAmountBeforeFee: 'dynamic_number',
        srcUSD: 'dynamic_number',
        destUSD: 'dynamic_number',
        destUSDBeforeFee: 'dynamic_number',
        receivedDestAmount: 'dynamic_number',
        receivedDestUSD: 'dynamic_number',
        receivedDestAmountBeforeFee: 'dynamic_number',
        receivedDestUSDBeforeFee: 'dynamic_number',
        gasCost: 'dynamic_number',
        gasCostBeforeFee: 'dynamic_number',
        gasCostUSD: 'dynamic_number',
        gasCostUSDBeforeFee: 'dynamic_number',
        hmac: 'dynamic_string',
        availableBridges: [], // dynamic array of bridge variants
      };

      // will no longer be true if swap is through Relay
      // expect(deltaPrice.destToken).toEqual(DAI_TOKEN_ON_ETHEREUM.toLowerCase());
      expect(staticDeltaPrice).toMatchSnapshot();
      expect(deltaPrice.bridge.destinationChainId).toEqual(destChainId);
      expect(deltaPrice.bridge.outputToken).toEqual(
        DAI_TOKEN_ON_OPTIMISM.toLowerCase()
      );
    });

    test('Get Delta Price Crosschain/destToken=WETH', async () => {
      const deltaPrice = await deltaSDK.getDeltaPrice({
        srcToken: WETH,
        destToken: WETH_ON_OPTIMISM,
        amount: srcAmount,
        userAddress: senderAddress,
        srcDecimals: 18,
        destDecimals: 18,
        destChainId,
      });

      const staticDeltaPrice: typeof deltaPrice = {
        ...deltaPrice,
        bridge: {
          ...deltaPrice.bridge,
          protocolData: 'dynamic_string',
          protocolSelector: 'dynamic_string',
          scalingFactor: NaN, // dynamic number
        },
        bridgeInfo: {
          ...deltaPrice.bridgeInfo,
          bestReturn: true,
          destAmountAfterBridge: 'dynamic_number',
          destUSDAfterBridge: 'dynamic_number',
          estimatedTimeMs: NaN, // dynamic number
          fastest: true,
          fees: [], // dynamic array
          protocolName: 'dynamic_string' as BridgePriceInfo['protocolName'],
          recommended: true,
        },
        destAmount: 'dynamic_number',
        destAmountBeforeFee: 'dynamic_number',
        srcUSD: 'dynamic_number',
        destUSD: 'dynamic_number',
        destUSDBeforeFee: 'dynamic_number',
        receivedDestAmount: 'dynamic_number',
        receivedDestUSD: 'dynamic_number',
        receivedDestAmountBeforeFee: 'dynamic_number',
        receivedDestUSDBeforeFee: 'dynamic_number',
        gasCost: 'dynamic_number',
        gasCostBeforeFee: 'dynamic_number',
        gasCostUSD: 'dynamic_number',
        gasCostUSDBeforeFee: 'dynamic_number',
        hmac: 'dynamic_string',
        availableBridges: [], // dynamic array of bridge variants
      };

      expect(staticDeltaPrice).toMatchSnapshot();
      expect(deltaPrice.bridge.destinationChainId).toEqual(destChainId);
      expect(deltaPrice.bridge.outputToken).toEqual(
        WETH_ON_OPTIMISM.toLowerCase()
      );
    });

    test('Get Delta Price Crosschain/destToken=ETH', async () => {
      const deltaPrice = await deltaSDK.getDeltaPrice({
        srcToken: WETH,
        destToken: ETH,
        amount: srcAmount,
        userAddress: senderAddress,
        srcDecimals: 18,
        destDecimals: 18,
        destChainId,
      });

      const staticDeltaPrice: typeof deltaPrice = {
        ...deltaPrice,
        bridge: {
          ...deltaPrice.bridge,
          outputToken: 'dynamic_hash', // WETH or ETH depending on bridge used
          protocolData: 'dynamic_string',
          protocolSelector: 'dynamic_string',
          scalingFactor: NaN, // dynamic number
        },
        bridgeInfo: {
          ...deltaPrice.bridgeInfo,
          bestReturn: true,
          destAmountAfterBridge: 'dynamic_number',
          destUSDAfterBridge: 'dynamic_number',
          estimatedTimeMs: NaN, // dynamic number
          fastest: true,
          fees: [], // dynamic array
          protocolName: 'dynamic_string' as BridgePriceInfo['protocolName'],
          recommended: true,
        },
        destAmount: 'dynamic_number',
        destAmountBeforeFee: 'dynamic_number',
        srcUSD: 'dynamic_number',
        destUSD: 'dynamic_number',
        destUSDBeforeFee: 'dynamic_number',
        receivedDestAmount: 'dynamic_number',
        receivedDestUSD: 'dynamic_number',
        receivedDestAmountBeforeFee: 'dynamic_number',
        receivedDestUSDBeforeFee: 'dynamic_number',
        gasCost: 'dynamic_number',
        gasCostBeforeFee: 'dynamic_number',
        gasCostUSD: 'dynamic_number',
        gasCostUSDBeforeFee: 'dynamic_number',
        hmac: 'dynamic_string',
        availableBridges: [], // dynamic array of bridge variants
      };

      expect(staticDeltaPrice).toMatchSnapshot();
      expect(deltaPrice.bridge.destinationChainId).toEqual(destChainId);
      // bridge.outputToken = WETH|ETH for destToken=ETH|WETH on destChain depending on bridge used;
      // wrap/unwrap logic is determined by bridge.multiCallHandler presence
      expect([WETH_ON_OPTIMISM.toLowerCase(), ETH.toLowerCase()]).toContain(
        deltaPrice.bridge.outputToken
      );
    });
  });

  test('Get Delta Contract', async () => {
    const deltaContract = await deltaSDK.getDeltaContract();
    expect(deltaContract).toMatchInlineSnapshot(
      `"0x0000000000bbf5c5fd284e657f01bd000933c96d"`
    );
  });

  test('Approve Token For Delta', async () => {
    const deltaContract = await deltaSDK.getDeltaContract();
    assert(deltaContract, 'Delta contract not found');

    const allowanceBefore = await getTokenAllowance({
      tokenAddress: DAI,
      owner: senderAddress,
      spender: deltaContract,
    });

    expect(allowanceBefore.toString()).toEqual('0');

    const amount = '1000000000000000000'; // 1 DAI
    const tx = await deltaSDK.approveTokenForDelta(amount, DAI);
    expect(tx).toBeDefined();
    await tx.wait();

    const allowanceAfter = await getTokenAllowance({
      tokenAddress: DAI,
      owner: senderAddress,
      spender: deltaContract,
    });

    expect(allowanceAfter.toString()).toEqual(amount);
  });

  test('Get Delta Orders for user', async () => {
    const userWithOrders = '0x76176C2971300217E9f48E3dD4e40591500b96Ff';

    const deltaOrders = await deltaSDK.getDeltaOrders({
      userAddress: userWithOrders,
    });

    // Orders that we know the user had in the past
    const staticSliceOfPastOrders = deltaOrders.slice(-2); // first 2 orders historically
    expect(staticSliceOfPastOrders).toMatchSnapshot();
  });

  test('Get Delta Order by Id and Hash', async () => {
    const orderId = '7ec0dc82-98ad-4501-9f46-03e31e51098f';
    const deltaOrder = await deltaSDK.getDeltaOrderById(orderId);
    expect(deltaOrder).toMatchSnapshot();
    expect(deltaOrder).toBeDefined();
    assert(
      deltaOrder?.orderHash,
      "Delta order not found or doesn't have orderHash"
    );

    const orderByHash = await deltaSDK.getDeltaOrderByHash(
      deltaOrder.orderHash
    );
    expect(orderByHash).toEqual(deltaOrder);
  });

  test('Get PartnerFee', async () => {
    const partnerFee = await deltaSDK.getPartnerFee({ partner: 'paraswap.io' });
    expect(partnerFee).toMatchInlineSnapshot(`
      {
        "partnerAddress": "0xc85f5d432b7fa25287c7e0cb88139a1a4c37f565",
        "partnerFee": 0.15,
        "takeSurplus": false,
      }
    `);
  });

  test('Build Delta Order', async () => {
    const sampleDeltaPrice: DeltaPrice = {
      destAmount: '3163263721766488892666',
      destAmountBeforeFee: '3194635547945152526200',
      receivedDestAmount: '3163263721766488892666',
      destToken: '0x6b175474e89094c44da98b954eedeac495271d0f',
      destUSD: '3166.4269854931',
      receivedDestUSD: '3166.4269854931',
      destUSDBeforeFee: '3197.8301834931',
      gasCost: '347788',
      gasCostBeforeFee: '124240',
      gasCostUSD: '31.403198',
      gasCostUSDBeforeFee: '11.218137',
      partner: 'anon',
      partnerFee: 0,
      srcAmount: '1000000000000000000',
      srcToken: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      srcUSD: '3191.5500000000',
      hmac: '1234aeb',
      bridge: {
        protocolSelector: '0x00000000',
        destinationChainId: 0,
        outputToken: ZERO_ADDRESS,
        scalingFactor: 0,
        protocolData: '0x',
      },
    };

    const slippagePercent = 0.5;
    const destAmountAfterSlippage = decreaseBySlippage(
      sampleDeltaPrice.destAmount,
      slippagePercent
    );

    const amount = '1000000000000000000'; // 1 DAI

    const signableOrderData = await deltaSDK.buildDeltaOrder({
      deltaPrice: sampleDeltaPrice,
      owner: senderAddress,
      // beneficiary: anotherAccount, // if need to send destToken to another account
      // permit: "0x1234...", // if signed a Permit1 or Permit2 TransferFrom for DeltaContract
      srcToken: WETH,
      destToken: DAI,
      srcAmount: amount,
      destAmount: destAmountAfterSlippage, // minimum acceptable destAmount
    });

    const staticSignableOrderData: typeof signableOrderData = {
      ...signableOrderData,
      data: {
        ...signableOrderData.data,
        deadline: NaN, // dynamic number
        nonce: 'dynamic_number',
      },
    };
    //                                                            capSurplus (true) shifted (<< 9) = 512
    expect(signableOrderData.data.partnerAndFee).toEqual((1 << 9).toString());
    expect(staticSignableOrderData).toMatchSnapshot();
  });

  let signature = '';

  test.each([
    ['ethersV5', ethersV5ContractCaller],
    ['ethersV6', ethersV6ContractCaller],
    ['web3', web3ContractCaller],
    ['viem', viemContractCaller],
  ])('sign Delta Order with %s', async (_libName, contractCaller) => {
    const sdk = constructPartialSDK(
      {
        chainId: 1,
        fetcher: fetchFetcher,
        contractCaller,
        apiURL: process.env.API_URL,
      },
      constructSignDeltaOrder
    );

    const sampleOrder: SignableDeltaOrderData = {
      data: {
        beneficiary: '0xaC39b311DCEb2A4b2f5d8461c1cdaF756F4F7Ae9',
        deadline: 1731328853,
        destAmount: '3147447403157656698880',
        destToken: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        expectedAmount: '3163263721766488892666',
        nonce: '1731325253703',
        owner: '0xaC39b311DCEb2A4b2f5d8461c1cdaF756F4F7Ae9',
        partnerAndFee: '0',
        permit: '0x',
        srcAmount: '1000000000000000000',
        srcToken: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        kind: 0,
        metadata: '0x',
        bridge: {
          protocolSelector: '0x00000000',
          destinationChainId: 0,
          outputToken: ZERO_ADDRESS,
          scalingFactor: 0,
          protocolData: '0x',
        },
      },
      domain: {
        chainId: 1,
        name: 'Portikus',
        verifyingContract: '0x0000000000bbf5c5fd284e657f01bd000933c96d',
        version: '2.0.0',
      },
      types: {
        Order: [
          {
            name: 'owner',
            type: 'address',
          },
          {
            name: 'beneficiary',
            type: 'address',
          },
          {
            name: 'srcToken',
            type: 'address',
          },
          {
            name: 'destToken',
            type: 'address',
          },
          {
            name: 'srcAmount',
            type: 'uint256',
          },
          {
            name: 'destAmount',
            type: 'uint256',
          },
          {
            name: 'expectedAmount',
            type: 'uint256',
          },
          {
            name: 'deadline',
            type: 'uint256',
          },
          {
            name: 'kind',
            type: 'uint8',
          },
          {
            name: 'nonce',
            type: 'uint256',
          },
          {
            name: 'partnerAndFee',
            type: 'uint256',
          },
          {
            name: 'permit',
            type: 'bytes',
          },
          {
            name: 'metadata',
            type: 'bytes',
          },
          {
            name: 'bridge',
            type: 'Bridge',
          },
        ],
        Bridge: [
          {
            name: 'protocolSelector',
            type: 'bytes4',
          },
          {
            name: 'destinationChainId',
            type: 'uint256',
          },
          {
            name: 'outputToken',
            type: 'address',
          },
          {
            name: 'scalingFactor',
            type: 'int8',
          },
          {
            name: 'protocolData',
            type: 'bytes',
          },
        ],
      },
    };

    const deltaOrderSignature = await sdk.signDeltaOrder(sampleOrder);
    if (!signature) signature = deltaOrderSignature;
    // signatures match between libraries
    expect(deltaOrderSignature).toEqual(signature);
  });

  let cancelSignature = '';

  const sampleOrderId = '7ec0dc82-98ad-4501-9f46-03e31e51098f';

  test.each([
    ['ethersV5', ethersV5ContractCaller],
    ['ethersV6', ethersV6ContractCaller],
    ['web3', web3ContractCaller],
    ['viem', viemContractCaller],
  ])(
    'sign Cancel Delta Order Request with %s',
    async (_libName, contractCaller) => {
      const sdk = constructPartialSDK(
        {
          chainId: 1,
          fetcher: fetchFetcher,
          contractCaller,
          apiURL: process.env.API_URL,
        },
        constructCancelDeltaOrder
      );

      const deltaCancelSignature = await sdk.signCancelLimitDeltaOrderRequest({
        orderIds: [sampleOrderId],
      });

      const valid = await verifySignedCancelRequest({
        orderId: sampleOrderId,
        signature: deltaCancelSignature,
        address: senderAddress,
        chainId: sdk.chainId,
      });

      expect(valid).toBe(true);

      if (!cancelSignature) cancelSignature = deltaCancelSignature;
      // signatures match between libraries
      expect(deltaCancelSignature).toEqual(cancelSignature);
    }
  );

  const dummyFetcher: FetcherFunction = (params) => {
    // intercept POST requests
    if (params.method === 'POST') {
      return params as any;
    }

    return fetchFetcher(params);
  };

  const mockFetch = jest.fn(dummyFetcher);

  const dummySDK = constructPartialSDK(
    {
      chainId: 1,
      fetcher: mockFetch as FetcherFunction,
      contractCaller: ethersV5ContractCaller,
      apiURL: process.env.API_URL,
    },
    constructPostDeltaOrder,
    constructSubmitDeltaOrder
  );

  test('Post Delta Order', async () => {
    const sampleOrderData: SignableDeltaOrderData['data'] = {
      beneficiary: '0xaC39b311DCEb2A4b2f5d8461c1cdaF756F4F7Ae9',
      deadline: NaN, // dynamic number
      destAmount: '3147447403157656698880',
      destToken: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      expectedAmount: '3163263721766488892666',
      nonce: 'dynamic_number',
      owner: '0xaC39b311DCEb2A4b2f5d8461c1cdaF756F4F7Ae9',
      partnerAndFee: '0',
      permit: '0x',
      srcAmount: '1000000000000000000',
      srcToken: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      kind: 0,
      metadata: '0x',
      bridge: {
        protocolSelector: '0x00000000',
        destinationChainId: 0,
        outputToken: ZERO_ADDRESS,
        scalingFactor: 0,
        protocolData: '0x',
      },
    };

    const sampleSignature = '0x1234....';

    const input = {
      order: sampleOrderData,
      signature: sampleSignature,
    };

    await dummySDK.postDeltaOrder(input);

    expect(mockFetch).toHaveBeenLastCalledWith({
      data: { ...input, chainId: dummySDK.chainId },
      method: 'POST',
      url: `${dummySDK.apiURL}/delta/orders`,
    });
  });

  test('Submit(=build+sign+post) Delta Order', async () => {
    const sampleDeltaPrice: DeltaPrice = {
      destAmount: '3163263721766488892666',
      destAmountBeforeFee: '3194635547945152526200',
      receivedDestAmount: '3163263721766488892666',
      destToken: '0x6b175474e89094c44da98b954eedeac495271d0f',
      destUSD: '3166.4269854931',
      receivedDestUSD: '3166.4269854931',
      destUSDBeforeFee: '3197.8301834931',
      gasCost: '347788',
      gasCostBeforeFee: '124240',
      gasCostUSD: '31.403198',
      gasCostUSDBeforeFee: '11.218137',
      partner: 'anon',
      partnerFee: 0,
      srcAmount: '1000000000000000000',
      srcToken: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      srcUSD: '3191.5500000000',
      hmac: '1234aeb',
      bridge: {
        protocolSelector: '0x00000000',
        destinationChainId: 0,
        outputToken: ZERO_ADDRESS,
        scalingFactor: 0,
        protocolData: '0x',
      },
    };

    const slippagePercent = 0.5;
    const destAmountAfterSlippage = decreaseBySlippage(
      sampleDeltaPrice.destAmount,
      slippagePercent
    );

    const amount = '1000000000000000000'; // 1 DAI

    const input = {
      deltaPrice: sampleDeltaPrice,
      owner: senderAddress,
      // beneficiary: anotherAccount, // if need to send destToken to another account
      // permit: "0x1234...", // if signed a Permit1 or Permit2 TransferFrom for DeltaContract
      srcToken: WETH,
      destToken: DAI,
      srcAmount: amount,
      destAmount: destAmountAfterSlippage, // minimum acceptable destAmount
    };

    await dummySDK.submitDeltaOrder(input);

    const callArgs = mockFetch.mock.lastCall?.[0];
    assert(callArgs, 'No fetch call was made');
    assert('data' in callArgs, 'No data was sent in the fetch call');
    const { order, signature } = callArgs.data as PostDeltaOrderParams;

    expect(signature).toBeDefined();

    const staticSignedOrderData: SignableDeltaOrderData['data'] = {
      ...order,
      deadline: NaN, // dynamic number
      nonce: 'dynamic_number',
    };

    //                                                            capSurplus (true) shifted (<< 9) = 512
    expect(order.partnerAndFee).toEqual((1 << 9).toString());
    expect(staticSignedOrderData).toMatchSnapshot();
  });

  describe('PreSign Delta Order', () => {
    const sdk = constructPartialSDK(
      {
        chainId: 1,
        fetcher: fetchFetcher,
        contractCaller: viemContractCaller,
        apiURL: process.env.API_URL,
      },
      constructPreSignDeltaOrder,
      constructGetDeltaContract
    );

    const sampleOrder: DeltaAuctionOrder = {
      owner: '0xaC39b311DCEb2A4b2f5d8461c1cdaF756F4F7Ae9',
      beneficiary: '0xaC39b311DCEb2A4b2f5d8461c1cdaF756F4F7Ae9',
      srcToken: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
      destToken: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      srcAmount: '1000000000000000000',
      destAmount: '3147447403157656698880',
      expectedAmount: '3163263721766488892666',
      kind: 0,
      metadata: '0x',
      deadline: 1731328853,
      nonce: '1731325253703',
      permit: '0x',
      partnerAndFee: '0',
      bridge: {
        protocolSelector: '0x00000000',
        destinationChainId: 0,
        outputToken: ZERO_ADDRESS,
        scalingFactor: 0,
        protocolData: '0x',
      },
    };

    test('hash Delta Order', async () => {
      const orderHash = await sdk.hashDeltaOrder(sampleOrder);
      expect(orderHash).toMatchInlineSnapshot(
        `"0x4e68492d838e64c329ecdba51d32cb088088445ca62b1d5c4edf5a2ab80b586d"`
      );
    });
    test('PreSign Delta Order', async () => {
      const sampleOrderHash =
        '0x4e68492d838e64c329ecdba51d32cb088088445ca62b1d5c4edf5a2ab80b586d';
      const txHash = await sdk.setDeltaOrderPreSignature(sampleOrderHash);

      await viemWalletClient.waitForTransactionReceipt({ hash: txHash });

      const isPreSigned = await checkIfOrderHashPreSigned({
        orderHash: sampleOrderHash,
        owner: senderAddress,
        sdk,
      });
      expect(isPreSigned).toBe(true);
    });
  });
});

function getTokenAllowance({
  tokenAddress,
  owner,
  spender,
}: {
  tokenAddress: string;
  owner: string;
  spender: string;
}): Promise<BigNumber> {
  const contract = new ethers.Contract(tokenAddress, erc20abi, signer);
  return contract.allowance(owner, spender);
}

function decreaseBySlippage(amount: string, slippagePercent: number): string {
  const amountAfterSlippage = BigInt(
    +(+amount * (1 - slippagePercent / 100)).toFixed(0)
  ).toString(10);

  return amountAfterSlippage;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars

const ETH_ADDRESS = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';

type VerifySignedCancelRequestInput = {
  orderId: string;
  signature: string;
  address: string;
  chainId: number;
};

async function verifySignedCancelRequest({
  orderId,
  signature,
  address,
}: VerifySignedCancelRequestInput): Promise<boolean> {
  const ParaswapDelta = await constructGetDeltaContract({
    chainId,
    fetcher: fetchFetcher,
  }).getDeltaContract();

  assert(ParaswapDelta, 'ParaswapDelta is not defined');

  const valid = await verifyTypedData({
    address: address as Address,
    domain: {
      name: 'Portikus',
      version: '2.0.0',
      chainId,
      verifyingContract: ParaswapDelta as Address,
    },
    types: {
      OrderCancellations: [{ name: 'orderIds', type: 'string[]' }],
    },
    primaryType: 'OrderCancellations',
    message: {
      orderIds: [orderId],
    },
    signature: signature as Hex,
  });

  return valid;
}

const PreSignatureModuleAbi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'orderHash',
        type: 'bytes32',
      },
    ],
    name: 'isPreSigned',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'orderHash',
        type: 'bytes32',
      },
      {
        internalType: 'bool',
        name: 'preSigned',
        type: 'bool',
      },
    ],
    name: 'setPreSignature',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

type CheckIfOrderHashPreSignedInput = {
  orderHash: string;
  owner: string;
  sdk: GetDeltaContractFunctions;
};

async function checkIfOrderHashPreSigned({
  orderHash,
  owner,
  sdk,
}: CheckIfOrderHashPreSignedInput): Promise<boolean> {
  const ParaswapDelta = await sdk.getDeltaContract();

  assert(ParaswapDelta, 'ParaswapDelta is not available');

  const isPreSigned = await viemWalletClient.readContract({
    address: ParaswapDelta as Address,
    abi: PreSignatureModuleAbi,
    functionName: 'isPreSigned',
    args: [owner as Address, orderHash as Hash],
  });
  return isPreSigned;
}
