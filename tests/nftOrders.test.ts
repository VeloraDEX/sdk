import * as dotenv from 'dotenv';
import Web3 from 'web3';
import type { TransactionReceipt as Web3TransactionReceipt } from 'web3';
import { BigNumber as BigNumberEthers, Contract, ethers } from 'ethersV5';
import { ethers as ethersV6 } from 'ethers';
import { hexValue, hexZeroPad } from '@ethersproject/bytes';
import axios from 'axios';
import {
  constructPartialSDK,
  constructBuildNFTOrder,
  BuildNFTOrderFunctions,
  constructSignNFTOrder,
  SignNFTOrderFunctions,
  constructCancelNFTOrder,
  CancelNFTOrderFunctions,
  constructEthersV5ContractCaller,
  constructEthersV6ContractCaller,
  SDKConfig,
  ConstructProviderFetchInput,
  constructAxiosFetcher,
  ApproveTokenForNFTOrderFunctions,
  constructApproveTokenForNFTOrder,
  constructGetNFTOrdersContract,
  GetNFTOrdersContractFunctions,
  constructPostNFTOrder,
  PostNFTOrderFunctions,
  NFTOrderToSend,
  GetNFTOrdersFunctions,
  constructGetNFTOrders,
  Web3UnpromiEvent,
  constructWeb3ContractCaller,
  GetSpenderFunctions,
  constructGetSpender,
  BuildNFTOrdersTxFunctions,
  constructBuildNFTOrderTx,
  BuildTxFunctions,
  constructBuildTx,
  AssetType,
} from '../src';
import BigNumber from 'bignumber.js';

import ERC20MinableABI from './abi/ERC20Mintable.json';
import ERC721MintableABI from './abi/ERC721Mintable.json';
import { bytecode as ERC20MintableBytecode } from './bytecode/ERC20Mintable.json';
import { bytecode as ERC721MintableBytecode } from './bytecode/ERC721Mintable.json';
import AugustusRFQAbi from './abi/AugustusRFQ.json';
import { bytecode as AugustusRFQBytecode } from './bytecode/AugustusRFQ.json';

import {
  BuildNFTOrderInput,
  SignableNFTOrderData,
} from '../src/methods/nftOrders/buildOrder';
import { assert } from 'ts-essentials';
import { ZERO_ADDRESS } from '../src/methods/common/orders/buildOrderData';
import { buyErc20TokenForEth } from './helpers';
import { HardhatProvider, setupFork } from './helpers/hardhat';

dotenv.config();

jest.setTimeout(60 * 1000);

declare let process: any;

const referrer = 'sdk-test';

// const ETH = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
const DAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
const BUSD = '0x4fabb145d64652a948d72533023f6e7a623c7c53';
const COMP = '0xc00e94cb662c3520282e6f5717214004a7f26888';
const AAVE = '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9';
const MAKER = '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2';

// const DUMMY_ADDRESS_FOR_TESTING_ORDERS =
//   '0xb9A079479A7b0F4E7F398F7ED3946bE6d9a40E79';

const chainId = process.env.CHAIN_ID || 1;
const srcToken = DAI;
const destToken = BUSD;

const TEST_MNEMONIC =
  'radar blur cabbage chef fix engine embark joy scheme fiction master release';

//0xaC39b311DCEb2A4b2f5d8461c1cdaF756F4F7Ae9
const walletV5Stable = ethers.Wallet.fromMnemonic(TEST_MNEMONIC);
//0xD7c0Cd9e7d2701c710D64Fc492C7086679BdF7b4
const walletV5Stable2 = ethers.Wallet.fromMnemonic(
  TEST_MNEMONIC,
  "m/44'/60'/0'/0/1"
);

// if test against tenderly fork, make sure accounts have enough ETH and zero nonce
const tenderlyForkUrl = process.env.TENDERLY_FORK_URL;
const ethersV5Provider = tenderlyForkUrl
  ? new ethers.providers.JsonRpcProvider(tenderlyForkUrl)
  : new ethers.providers.Web3Provider(HardhatProvider as any);

const signerV5 = walletV5Stable.connect(ethersV5Provider);
const senderAddress = signerV5.address;

const takerV5 = walletV5Stable2.connect(ethersV5Provider);

const walletV6Stable = ethersV6.HDNodeWallet.fromPhrase(TEST_MNEMONIC);
const walletV6Stable2 = ethersV6.HDNodeWallet.fromPhrase(
  TEST_MNEMONIC,
  undefined,
  "m/44'/60'/0'/0/1"
);

const ethersV6Provider = new ethersV6.BrowserProvider(HardhatProvider);

const signerV6 = walletV6Stable.connect(ethersV6Provider);
const takerV6 = walletV6Stable2.connect(ethersV6Provider);

const axiosFetcher = constructAxiosFetcher(axios);

const ethersV5ContractCaller = constructEthersV5ContractCaller(
  {
    ethersProviderOrSigner: signerV5,
    EthersContract: ethers.Contract,
  },
  senderAddress
);
const takerEthersV5ContractCaller = constructEthersV5ContractCaller(
  {
    ethersProviderOrSigner: takerV5,
    EthersContract: ethers.Contract,
  },
  walletV5Stable2.address
);

const ethersV6ContractCaller = constructEthersV6ContractCaller(
  {
    ethersV6ProviderOrSigner: signerV6,
    EthersV6Contract: ethersV6.Contract,
  },
  senderAddress
);
const takerEthersV6ContractCaller = constructEthersV6ContractCaller(
  {
    ethersV6ProviderOrSigner: takerV6,
    EthersV6Contract: ethersV6.Contract,
  },
  walletV6Stable2.address
);

const web3provider = new Web3(HardhatProvider as any);

const web3ContractCaller = constructWeb3ContractCaller(
  web3provider,
  senderAddress
);
const takerWeb3ContractCaller = constructWeb3ContractCaller(
  web3provider,
  walletV5Stable2.address
);

const ERC20MintableFactory = new ethers.ContractFactory(
  ERC20MinableABI,
  ERC20MintableBytecode,
  signerV5
);

const ERC721MintableFactory = new ethers.ContractFactory(
  ERC721MintableABI,
  ERC721MintableBytecode,
  signerV5
);

const AugustusRFQFactory = new ethers.ContractFactory(
  AugustusRFQAbi,
  AugustusRFQBytecode,
  signerV5
);

const expectTxParamsScheme = expect.objectContaining({
  from: expect.any(String),
  to: expect.any(String),
  value: expect.any(String),
  data: expect.any(String),
  gasPrice: expect.any(String),
  chainId: expect.any(Number),
});

describe('NFT Orders', () => {
  let sdk: BuildNFTOrderFunctions &
    SignNFTOrderFunctions &
    GetNFTOrdersContractFunctions &
    PostNFTOrderFunctions &
    GetNFTOrdersFunctions &
    CancelNFTOrderFunctions<ethers.ContractTransaction> &
    ApproveTokenForNFTOrderFunctions<ethers.ContractTransaction> &
    GetSpenderFunctions &
    BuildNFTOrdersTxFunctions &
    BuildTxFunctions;

  type MinEthersV5SDK = BuildNFTOrderFunctions &
    SignNFTOrderFunctions &
    CancelNFTOrderFunctions<ethers.ContractTransaction> &
    ApproveTokenForNFTOrderFunctions<ethers.ContractTransaction>;
  type MinTakerEthersV5SDK = BuildNFTOrdersTxFunctions &
    ApproveTokenForNFTOrderFunctions<ethers.ContractTransaction>;

  type MinEthersV6SDK = BuildNFTOrderFunctions &
    SignNFTOrderFunctions &
    CancelNFTOrderFunctions<ethersV6.ContractTransactionResponse> &
    ApproveTokenForNFTOrderFunctions<ethersV6.ContractTransactionResponse>;
  type MinTakerEthersV6SDK = BuildNFTOrdersTxFunctions &
    ApproveTokenForNFTOrderFunctions<ethersV6.ContractTransactionResponse>;

  type MinWeb3SDK = BuildNFTOrderFunctions &
    SignNFTOrderFunctions &
    CancelNFTOrderFunctions<Web3UnpromiEvent> &
    ApproveTokenForNFTOrderFunctions<Web3UnpromiEvent>;
  type MinTakerWeb3SDK = ApproveTokenForNFTOrderFunctions<Web3UnpromiEvent>;

  type EthersV5CancelOrderConstructor = (
    options: ConstructProviderFetchInput<
      ethers.ContractTransaction,
      'transactCall'
    >
  ) => CancelNFTOrderFunctions<ethers.ContractTransaction>;
  type EthersV5ApproveTokenForNFTOrderConstructor = (
    options: ConstructProviderFetchInput<
      ethers.ContractTransaction,
      'transactCall'
    >
  ) => ApproveTokenForNFTOrderFunctions<ethers.ContractTransaction>;

  type EthersV6CancelOrderConstructor = (
    options: ConstructProviderFetchInput<
      ethersV6.ContractTransactionResponse,
      'transactCall'
    >
  ) => CancelNFTOrderFunctions<ethersV6.ContractTransactionResponse>;
  type EthersV6ApproveTokenForNFTOrderConstructor = (
    options: ConstructProviderFetchInput<
      ethersV6.ContractTransactionResponse,
      'transactCall'
    >
  ) => ApproveTokenForNFTOrderFunctions<ethersV6.ContractTransactionResponse>;

  type Web3CancelOrderConstructor = (
    options: ConstructProviderFetchInput<Web3UnpromiEvent, 'transactCall'>
  ) => CancelNFTOrderFunctions<Web3UnpromiEvent>;
  type Web3ApproveTokenForNFTOrderConstructor = (
    options: ConstructProviderFetchInput<Web3UnpromiEvent, 'transactCall'>
  ) => ApproveTokenForNFTOrderFunctions<Web3UnpromiEvent>;

  const ethersV5SDK: MinEthersV5SDK = constructPartialSDK<
    SDKConfig<ethers.ContractTransaction>,
    [
      typeof constructBuildNFTOrder,
      typeof constructSignNFTOrder,
      EthersV5CancelOrderConstructor,
      EthersV5ApproveTokenForNFTOrderConstructor
    ]
  >(
    {
      chainId,
      contractCaller: ethersV5ContractCaller,
      fetcher: axiosFetcher,
      apiURL: process.env.API_URL,
      version: '5',
    },
    constructBuildNFTOrder,
    constructSignNFTOrder,
    constructCancelNFTOrder,
    constructApproveTokenForNFTOrder
  );

  const takerEthersV5SDK: MinTakerEthersV5SDK = constructPartialSDK<
    SDKConfig<ethers.ContractTransaction>,
    [
      EthersV5ApproveTokenForNFTOrderConstructor,
      typeof constructBuildNFTOrderTx
    ]
  >(
    {
      chainId,
      contractCaller: takerEthersV5ContractCaller,
      fetcher: axiosFetcher,
      apiURL: process.env.API_URL,
      version: '5',
    },
    constructApproveTokenForNFTOrder,
    constructBuildNFTOrderTx
  );

  const ethersV6SDK: MinEthersV6SDK = constructPartialSDK<
    SDKConfig<ethersV6.ContractTransactionResponse>,
    [
      typeof constructBuildNFTOrder,
      typeof constructSignNFTOrder,
      EthersV6CancelOrderConstructor,
      EthersV6ApproveTokenForNFTOrderConstructor
    ]
  >(
    {
      chainId,
      contractCaller: ethersV6ContractCaller,
      fetcher: axiosFetcher,
      apiURL: process.env.API_URL,
      version: '5',
    },
    constructBuildNFTOrder,
    constructSignNFTOrder,
    constructCancelNFTOrder,
    constructApproveTokenForNFTOrder
  );

  const takerEthersV6SDK: MinTakerEthersV6SDK = constructPartialSDK<
    SDKConfig<ethersV6.ContractTransactionResponse>,
    [
      EthersV6ApproveTokenForNFTOrderConstructor,
      typeof constructBuildNFTOrderTx
    ]
  >(
    {
      chainId,
      contractCaller: takerEthersV6ContractCaller,
      fetcher: axiosFetcher,
      apiURL: process.env.API_URL,
      version: '5',
    },
    constructApproveTokenForNFTOrder,
    constructBuildNFTOrderTx
  );

  const web3SDK: MinWeb3SDK = constructPartialSDK<
    SDKConfig<Web3UnpromiEvent>,
    [
      typeof constructBuildNFTOrder,
      typeof constructSignNFTOrder,
      Web3CancelOrderConstructor,
      Web3ApproveTokenForNFTOrderConstructor
    ]
  >(
    {
      chainId,
      contractCaller: web3ContractCaller,
      fetcher: axiosFetcher,
      apiURL: process.env.API_URL,
      version: '5',
    },
    constructBuildNFTOrder,
    constructSignNFTOrder,
    constructCancelNFTOrder,
    constructApproveTokenForNFTOrder
  );

  const takerWeb3SDK: MinTakerWeb3SDK = constructPartialSDK<
    SDKConfig<Web3UnpromiEvent>,
    [Web3ApproveTokenForNFTOrderConstructor]
  >(
    {
      chainId,
      contractCaller: takerWeb3ContractCaller,
      fetcher: axiosFetcher,
      apiURL: process.env.API_URL,
      version: '5',
    },

    constructApproveTokenForNFTOrder
  );

  const txSDKs = [
    { lib: 'ethersV5', sdk: ethersV5SDK, takerSDK: takerEthersV5SDK },
    { lib: 'ethersV6', sdk: ethersV6SDK, takerSDK: takerEthersV6SDK },
    { lib: 'web3', sdk: web3SDK, takerSDK: takerWeb3SDK },
  ] as const;

  let orderInput: BuildNFTOrderInput;
  //                                        UTC format
  const orderExpiry = Math.floor(new Date('2025-12-20').getTime() / 1000);

  let erc20Token1: Contract;
  let erc20Token2: Contract;
  let erc721Token1: Contract;
  let erc721Token2: Contract;
  let erc721Token3: Contract;
  let erc721Token4: Contract;

  let AugustusRFQ: Contract;

  // let initialChainId2verifyingContract = { ...chainId2verifyingContract };

  beforeAll(async () => {
    await setupFork({
      accounts: [
        { balance: 1000e18, address: walletV5Stable.address },
        { balance: 1000e18, address: walletV5Stable2.address },
      ],
    });

    orderInput = {
      nonce: 1,
      expiry: orderExpiry,
      makerAsset: srcToken,
      takerAsset: destToken,
      makerAmount: (1e18).toString(10),
      takerAmount: (8e18).toString(10),
      maker: senderAddress,
      makerAssetType: AssetType.ERC1155,
      takerAssetType: AssetType.ERC20,
      makerAssetId: '9982',
    };

    erc20Token1 = await ERC20MintableFactory.deploy(
      'ERC20Token1',
      'ERC20Token1'
    );
    await erc20Token1.deployTransaction.wait();

    erc20Token2 = await ERC20MintableFactory.deploy(
      'ERC20Token2',
      'ERC20Token2'
    );
    await erc20Token2.deployTransaction.wait();

    await erc20Token1.mint(walletV5Stable.address, (60e18).toString(10));
    await erc20Token1.mint(walletV5Stable2.address, (60e18).toString(10));
    await erc20Token2.mint(walletV5Stable.address, (60e18).toString(10));
    await erc20Token2.mint(walletV5Stable2.address, (60e18).toString(10));

    erc721Token1 = await ERC721MintableFactory.deploy();
    await erc721Token1.deployTransaction.wait();

    erc721Token2 = await ERC721MintableFactory.deploy();
    await erc721Token2.deployTransaction.wait();

    erc721Token3 = await ERC721MintableFactory.deploy();
    await erc721Token3.deployTransaction.wait();

    erc721Token4 = await ERC721MintableFactory.deploy();
    await erc721Token4.deployTransaction.wait();

    sdk = constructPartialSDK<
      SDKConfig<ethers.ContractTransaction>,
      [
        typeof constructBuildNFTOrder,
        typeof constructSignNFTOrder,
        typeof constructGetNFTOrdersContract,
        typeof constructPostNFTOrder,
        typeof constructGetNFTOrders,
        EthersV5CancelOrderConstructor,
        EthersV5ApproveTokenForNFTOrderConstructor,
        typeof constructGetSpender,
        typeof constructBuildNFTOrderTx,
        typeof constructBuildTx
      ]
    >(
      {
        chainId,
        contractCaller: ethersV5ContractCaller,
        fetcher: axiosFetcher,
        apiURL: process.env.API_URL,
        version: '5',
      },
      constructBuildNFTOrder,
      constructSignNFTOrder,
      constructGetNFTOrdersContract,
      constructPostNFTOrder,
      constructGetNFTOrders,
      constructCancelNFTOrder,
      constructApproveTokenForNFTOrder,
      constructGetSpender,
      constructBuildNFTOrderTx,
      constructBuildTx
    );

    AugustusRFQ = AugustusRFQFactory.attach(await sdk.getNFTOrdersContract());
    // AugustusRFQ = await AugustusRFQFactory.deploy();
    // await AugustusRFQ.deployTransaction.wait();
  });

  // takes care of `there are asynchronous operations that weren't stopped in your tests`
  // @TODO check if still needed after there are tx tests
  // afterAll(async () => {
  //   Object.assign(chainId2verifyingContract, initialChainId2verifyingContract);
  // });

  test('getNFTOrdersContract', async () => {
    const augustusRFQAddress = await sdk.getNFTOrdersContract();

    expect(augustusRFQAddress).toMatchInlineSnapshot(
      `"0xe92b586627ccA7a83dC919cc7127196d70f55a06"`
    );
  });

  // API returns 504
  test.skip('get NFT order by hash', async () => {
    const knownOrderHash =
      '0xec8018729db146d5bb20f313028ee765f6737deb4f859cd92c66f371bdb34aad';
    const sdk = constructPartialSDK(
      {
        chainId,
        fetcher: axiosFetcher,
        apiURL: process.env.API_URL,
        version: '5',
      },
      constructGetNFTOrders
    );

    const order = await sdk.getNFTOrderByHash(knownOrderHash);
    expect(order).toMatchInlineSnapshot(`
      {
        "chainId": 137,
        "createdAt": 1658989256,
        "expiry": 1658992856,
        "fillableBalance": "0",
        "maker": "0x112f39ea2ccff2d088086590d11cd9f092954f77",
        "makerAmount": "1",
        "makerAsset": "0x235be10a7fb69727b4a907b0a957a716c7c14c13",
        "makerAssetId": "2",
        "makerAssetType": 1,
        "nonceAndMeta": "20622990137246266303598744434210481256286975629423071997844118496006",
        "orderHash": "0xec8018729db146d5bb20f313028ee765f6737deb4f859cd92c66f371bdb34aad",
        "permitMakerAsset": null,
        "signature": "0x028a2b4dbb6695c46ec432cac2952575c047f55b7e87be7cc5b28e6951200a8d4cbdb82d1a1a2506d59eba979e16c2c25e815d25a5bb840646881797f8d251941c",
        "state": "FULFILLED",
        "taker": "0xdef171fe48cf0115b1d80b88dc8eab59176fee57",
        "takerAmount": "1000",
        "takerAsset": "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
        "takerAssetId": "0",
        "takerAssetType": 0,
        "takerFromMeta": "0x7ba594df3161729bf2e68a9d0a11dceb57a2e306",
        "transactionHash": "0x44ff478136d857d620a7704d19083e0ff8f24021d9612fb8a0b6bcb9558ffcd3",
        "type": "P2P",
      }
    `);
  });

  test('buildNFTOrder', async () => {
    const signableOrderData = await sdk.buildNFTOrder(orderInput);

    // taker address that would be checked as part of nonceAndMeta in Augustus
    const metaAddress = deriveTakerFromNonceAndTaker(
      signableOrderData.data.nonceAndMeta
    );

    // taker in nonceAndTaker = Zero
    expect(metaAddress).toBe(ZERO_ADDRESS);

    const AugustusAddress = await sdk.getAugustusSwapper();
    // taker in AugustusRFQ = Augustus
    expect(signableOrderData.data.taker.toLowerCase()).toBe(
      AugustusAddress.toLowerCase()
    );

    expect(signableOrderData.data.maker).toBe(senderAddress);
    expect(signableOrderData.data.expiry).toBe(orderExpiry);

    expect(signableOrderData).toMatchSnapshot('Order_Data_Snapshot');
  });

  test('buildNFTOrder p2p', async () => {
    const p2pOrderInput = {
      ...orderInput,
      taker: takerV5.address,
    };
    const signableOrderData = await sdk.buildNFTOrder({
      ...orderInput,
      taker: takerV5.address,
    });

    // taker address that would be checked as part of nonceAndMeta in Augustus
    const metaAddress = deriveTakerFromNonceAndTaker(
      signableOrderData.data.nonceAndMeta
    );

    // taker in nonceAndTaker = p2pOrderInput.taker
    expect(metaAddress.toLowerCase()).toBe(p2pOrderInput.taker.toLowerCase());

    const AugustusAddress = await sdk.getAugustusSwapper();
    // taker in AugustusRFQ = Augustus
    expect(signableOrderData.data.taker.toLowerCase()).toBe(
      AugustusAddress.toLowerCase()
    );

    expect(signableOrderData.data.maker).toBe(senderAddress);
    expect(signableOrderData.data.expiry).toBe(orderExpiry);

    expect(signableOrderData).toMatchSnapshot('P2P_Order_Data_Snapshot');
  });

  test('Build_NFT_Tx', async () => {
    const maker = walletV5Stable.connect(ethersV5Provider);
    const makerEthersContractCaller = constructEthersV5ContractCaller(
      {
        ethersProviderOrSigner: maker,
        EthersContract: ethers.Contract,
      },
      maker.address
    );

    const sdk = constructPartialSDK(
      {
        chainId,
        fetcher: axiosFetcher,
        apiURL: process.env.API_URL,
        contractCaller: makerEthersContractCaller,
        version: '5',
      },
      constructBuildNFTOrder,
      constructSignNFTOrder,
      constructBuildNFTOrderTx
    );

    // swap NFT -> BAT, then fill BAT (takerAsset) for NFT (makerAsset)

    // 1 NFT
    const makerAmount = '1';
    // for 6 DAI
    const takerAmount = (6e18).toString(10);

    const nftContract = new ethers.Contract(
      erc721Token1.address,
      ERC721MintableABI,
      maker
    );

    await nftContract.mint(maker.address);
    const afterMintLastId = (await nftContract.lastMintedTokenId()).toString();

    const order = {
      nonce: 99,
      expiry: orderExpiry,
      maker: maker.address,
      makerAsset: erc721Token1.address,
      makerAmount,
      takerAsset: DAI,
      takerAmount,
      makerAssetType: AssetType.ERC721,
      takerAssetType: AssetType.ERC20,
      makerAssetId: afterMintLastId,
    };

    const signableOrderData = await sdk.buildNFTOrder(order);

    const signature = await sdk.signNFTOrder(signableOrderData);

    const orderWithSignature = {
      ...order, // providers makerAssetType & takerAssetType, necessary for encoding makerAsset & takerAsset as uint (if got order by hash from API)
      ...signableOrderData.data, // provides actual order data necessary for the contract
      signature, // necessary for execution in the contract
      // extra stuff will be removed before POSTing to /transaction
    };

    const swapAndNFTPayload = await sdk.buildNFTOrderTx(
      {
        srcDecimals: 18,
        userAddress: senderAddress,
        partner: referrer,
        orders: [orderWithSignature],
      },
      { ignoreChecks: true }
    );

    expect(swapAndNFTPayload).toEqual(expectTxParamsScheme);
    expect({
      from: swapAndNFTPayload.from,
      to: swapAndNFTPayload.to,
      value: swapAndNFTPayload.value,
      chainId: swapAndNFTPayload.chainId,
      //  data & gasPrice vary from run to run
    }).toMatchInlineSnapshot(`
      {
        "chainId": 1,
        "from": "0xaC39b311DCEb2A4b2f5d8461c1cdaF756F4F7Ae9",
        "to": "0xdef171fe48cf0115b1d80b88dc8eab59176fee57",
        "value": "0",
      }
    `);
  });

  test(`fillNFTOrder through Augustus`, async () => {
    // 1 NFT
    const makerAmount = (1).toString(10);
    // for 6 COMP
    const takerAmount = (6e18).toString(10);

    const maker = walletV5Stable.connect(ethersV5Provider);

    const nftContract = new ethers.Contract(
      erc721Token2.address,
      ERC721MintableABI,
      maker
    );

    await (await nftContract.mint(maker.address)).wait();
    const afterMintLastId = (await nftContract.lastMintedTokenId()).toString();

    const taker = walletV5Stable2.connect(ethersV5Provider);

    //more to account for rogue Insufficient Balance errors
    const buyAmount = new BigNumber(takerAmount).multipliedBy(2).toString(10);

    const { balance: compBalance } = await buyErc20TokenForEth({
      fetcherOptions: { axios },
      tokenAddress: COMP,
      amount: buyAmount,
      signer: taker,
      providerOptions: {
        ethersProviderOrSigner: taker,
        EthersContract: ethers.Contract,
        account: taker.address,
      },
      chainId,
      ethersProvider: ethersV5Provider,
    });

    expect(new BigNumber(compBalance).gte(takerAmount)).toBeTruthy();
    const makerEthersContractCaller = constructEthersV5ContractCaller(
      {
        ethersProviderOrSigner: maker,
        EthersContract: ethers.Contract,
      },
      maker.address
    );
    const takerEthersContractCaller = constructEthersV5ContractCaller(
      {
        ethersProviderOrSigner: taker,
        EthersContract: ethers.Contract,
      },
      taker.address
    );

    const makerSDK = constructPartialSDK(
      {
        chainId,
        contractCaller: makerEthersContractCaller,
        fetcher: axiosFetcher,
        apiURL: process.env.API_URL,
        version: '5',
      },
      constructBuildNFTOrder,
      constructSignNFTOrder,
      constructApproveTokenForNFTOrder
    );

    const takerSDK = constructPartialSDK(
      {
        chainId,
        contractCaller: takerEthersContractCaller,
        fetcher: axiosFetcher,
        apiURL: process.env.API_URL,
        version: '5',
      },
      constructBuildNFTOrder,
      constructSignNFTOrder,
      constructApproveTokenForNFTOrder,
      constructBuildNFTOrderTx,
      constructGetSpender
    );

    const order: BuildNFTOrderInput = {
      nonce: 999,
      expiry: orderExpiry,
      maker: maker.address,
      makerAsset: erc721Token2.address,
      makerAmount,
      takerAsset: COMP,
      takerAmount,
      taker: taker.address,
      makerAssetType: AssetType.ERC721,
      takerAssetType: AssetType.ERC20,
      makerAssetId: afterMintLastId,
    };

    const signableOrderData = await makerSDK.buildNFTOrder(order);

    const signature = await makerSDK.signNFTOrder(signableOrderData);

    const NFT_Token = erc20Token1.attach(erc721Token2.address);
    const COMP_Token = erc20Token1.attach(COMP);

    const makerTokenNFTInitBalance: BigNumberEthers = await NFT_Token.balanceOf(
      maker.address
    );
    const takerTokenNFTInitBalance: BigNumberEthers = await NFT_Token.balanceOf(
      taker.address
    );
    const makerTokenERC20InitBalance: BigNumberEthers =
      await COMP_Token.balanceOf(maker.address);
    const takerTokenERC20InitBalance: BigNumberEthers =
      await COMP_Token.balanceOf(taker.address);

    // without SDK
    // await NFT_Token.connect(maker).approve(AugustusRFQ.address, makerAmount);

    // withSDK
    const approveForMakerTx = await makerSDK.approveNFTForNFTOrder(
      NFT_Token.address
    );

    await awaitTx(approveForMakerTx);

    // without SDK
    // await BAT_Token.connect(taker).approve(AugustusSwapper.address, takerAmount);

    // withSDK
    const approveForTakerTx = await takerSDK.approveERC20ForNFTOrder(
      takerAmount,
      COMP_Token.address
    );
    await awaitTx(approveForTakerTx);

    const orderWithSignature = {
      ...order, // providers makerAssetType & takerAssetType, necessary for encoding makerAsset & takerAsset as uint (if got order by hash from API)
      ...signableOrderData.data, // provides actual order data necessary for the contract
      signature, // necessary for execution in the contract
    };

    // taker address that would be checked as part of nonceAndMeta in Augustus
    const metaAddress = deriveTakerFromNonceAndTaker(
      signableOrderData.data.nonceAndMeta
    );

    // taker in nonceAndTaker = Zero
    expect(metaAddress.toLowerCase()).toBe(taker.address.toLowerCase());

    expect(orderWithSignature).toMatchInlineSnapshot(`
      {
        "expiry": 1766188800,
        "maker": "0xaC39b311DCEb2A4b2f5d8461c1cdaF756F4F7Ae9",
        "makerAmount": "1",
        "makerAsset": "3619753999533144330718273179089670910543115756213",
        "makerAssetId": "0",
        "makerAssetType": 2,
        "nonce": 999,
        "nonceAndMeta": "1461271868364326844682297910593670628577722568144820",
        "signature": "0xef64a66db7989602dd711ea1a09dd9cb7c277e353ec0b274d3e75a967054b7cf759444927184b9a8621fb04d19af89c1545501223c8f8197361569eb485104801c",
        "taker": "0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57",
        "takerAmount": "6000000000000000000",
        "takerAsset": "1096451400262405796991039590211805051831004063880",
        "takerAssetId": "0",
        "takerAssetType": 0,
      }
    `);

    const { gas: payloadGas, ...NFTPayloadTxParams } =
      await takerSDK.buildNFTOrderTx(
        {
          srcDecimals: 18,
          userAddress: taker.address,
          partner: referrer,
          orders: [orderWithSignature],
        },
        // ignore checks as otherwise would throw "not enough balance"
        { ignoreChecks: true }
      );

    const transaction: ethers.providers.TransactionRequest = {
      ...NFTPayloadTxParams,
      gasPrice:
        NFTPayloadTxParams.gasPrice &&
        '0x' + new BigNumber(NFTPayloadTxParams.gasPrice).toString(16),
      maxFeePerGas:
        NFTPayloadTxParams.maxFeePerGas &&
        '0x' + new BigNumber(NFTPayloadTxParams.maxFeePerGas).toString(16),
      maxPriorityFeePerGas:
        NFTPayloadTxParams.maxPriorityFeePerGas &&
        '0x' +
          new BigNumber(NFTPayloadTxParams.maxPriorityFeePerGas).toString(16),
      gasLimit: '0x' + new BigNumber(payloadGas || 5000000).toString(16),
      value: '0x' + new BigNumber(NFTPayloadTxParams.value).toString(16),
    };

    const augustusTakerTokenBalanceBeforeSwap: BigNumberEthers =
      await COMP_Token.balanceOf(await takerSDK.getAugustusSwapper());

    const takerFillsOrderTx = await taker.sendTransaction(transaction);

    await awaitTx(takerFillsOrderTx);

    const makerTokenNFTAfterBalance: BigNumberEthers =
      await NFT_Token.balanceOf(maker.address);
    const takerTokenNFTAfterBalance: BigNumberEthers =
      await NFT_Token.balanceOf(taker.address);
    const makerTokenERC20AfterBalance: BigNumberEthers =
      await COMP_Token.balanceOf(maker.address);
    const takerTokenERC20AfterBalance: BigNumberEthers =
      await COMP_Token.balanceOf(taker.address);

    expect(
      new BigNumber(makerTokenNFTAfterBalance.toString()).toString(10)
    ).toEqual(
      new BigNumber(makerTokenNFTInitBalance.toString())
        .minus(makerAmount)
        .toString(10)
    );
    expect(
      new BigNumber(takerTokenNFTAfterBalance.toString()).toString(10)
    ).toEqual(
      new BigNumber(takerTokenNFTInitBalance.toString())
        .plus(makerAmount)
        .toString(10)
    );
    expect(
      new BigNumber(makerTokenERC20AfterBalance.toString()).toString(10)
    ).toEqual(
      new BigNumber(makerTokenERC20InitBalance.toString())
        .plus(takerAmount)
        .toString(10)
    );

    const takerAmountAfter = new BigNumber(
      takerTokenERC20InitBalance.toString()
    )
      .minus(takerAmount)
      .toString(10);
    const AugustusAmountAfter = new BigNumber(
      takerTokenERC20AfterBalance.toString()
    )
      .minus(augustusTakerTokenBalanceBeforeSwap.toString())
      .toString(10);

    // if augustus contained some dust, it'll be transferred to the taker in the result of a swap,
    // except 1 wei may be left over
    expect([
      takerAmountAfter,
      new BigNumber(takerAmountAfter).minus(1).toString(10),
    ]).toContain(AugustusAmountAfter);
  });

  // old Augustus contract
  test.skip(`fill NFTOrder+Swap through Augustus`, async () => {
    // swap AAVE -> MAKER, then fill MAKER (takerAsset) for NFT (makerAsset) Order

    // 1 NFT
    const makerAmount = '1';
    // for 6 MAKER
    const takerAmount = (6e18).toString(10);

    // mint NFT for maker
    const maker = walletV5Stable.connect(ethersV5Provider);

    const nftContract = new ethers.Contract(
      erc721Token4.address,
      ERC721MintableABI,
      maker
    );

    await (await nftContract.mint(maker.address)).wait();
    const afterMintLastId = (await nftContract.lastMintedTokenId()).toString();

    // buy some AAVE for taker
    const taker = walletV5Stable2.connect(ethersV5Provider);

    const order = {
      nonce: 998,
      expiry: orderExpiry,
      maker: maker.address,
      makerAsset: erc721Token4.address,
      makerAmount,
      takerAsset: MAKER,
      takerAmount,
      taker: taker.address,
      makerAssetType: AssetType.ERC721,
      takerAssetType: AssetType.ERC20,
      makerAssetId: afterMintLastId,
    };

    const makerEthersContractCaller = constructEthersV5ContractCaller(
      {
        ethersProviderOrSigner: maker,
        EthersContract: ethers.Contract,
      },
      maker.address
    );
    const takerEthersContractCaller = constructEthersV5ContractCaller(
      {
        ethersProviderOrSigner: taker,
        EthersContract: ethers.Contract,
      },
      taker.address
    );

    const makerSDK = constructPartialSDK(
      {
        chainId,
        contractCaller: makerEthersContractCaller,
        fetcher: axiosFetcher,
        apiURL: process.env.API_URL,
        version: '5',
      },
      constructBuildNFTOrder,
      constructSignNFTOrder,
      constructApproveTokenForNFTOrder
    );

    const takerSDK = constructPartialSDK(
      {
        chainId,
        contractCaller: takerEthersContractCaller,
        fetcher: axiosFetcher,
        apiURL: process.env.API_URL,
        version: '5',
      },
      constructBuildNFTOrder,
      constructSignNFTOrder,
      constructApproveTokenForNFTOrder,
      constructBuildNFTOrderTx
    );

    const signableOrderData = await makerSDK.buildNFTOrder(order);

    const signature = await makerSDK.signNFTOrder(signableOrderData);

    const NFT_Token = erc20Token1.attach(erc721Token4.address);
    const MAKER_Token = erc20Token1.attach(MAKER);
    const AAVE_Token = erc20Token1.attach(AAVE);

    // without SDK
    // await NFT_Token.connect(maker).approve(AugustusRFQ.address, makerAmount);

    // withSDK
    const approveForMakerTx = await makerSDK.approveNFTForNFTOrder(
      NFT_Token.address
    );

    await awaitTx(approveForMakerTx);

    const orderWithSignature = {
      ...order, // providers makerAssetType & takerAssetType, necessary for encoding makerAsset & takerAsset as uint (if got order by hash from API)
      ...signableOrderData.data, // provides actual order data necessary for the contract
      signature, // necessary for execution in the contract
    };

    // taker address that would be checked as part of nonceAndMeta in Augustus
    const metaAddress = deriveTakerFromNonceAndTaker(
      signableOrderData.data.nonceAndMeta
    );

    // taker in nonceAndTaker = Zero
    expect(metaAddress.toLowerCase()).toBe(taker.address.toLowerCase());

    const priceRoute = await takerSDK.getNFTOrdersRate(
      {
        srcToken: AAVE,
        destToken: MAKER,
        userAddress: taker.address,
      },
      [order]
    );

    //more to account for rogue Insufficient Balance errors
    const buyAmount = new BigNumber(priceRoute.srcAmount)
      .multipliedBy(2)
      .toString(10);

    await buyErc20TokenForEth({
      fetcherOptions: { axios },
      tokenAddress: AAVE,
      amount: buyAmount,
      signer: taker,
      providerOptions: {
        ethersProviderOrSigner: taker,
        EthersContract: ethers.Contract,
        account: taker.address,
      },
      chainId,
      ethersProvider: ethersV5Provider,
    });

    const makerTokenNFTInitBalance: BigNumberEthers = await NFT_Token.balanceOf(
      maker.address
    );
    const takerTokenNFTInitBalance: BigNumberEthers = await NFT_Token.balanceOf(
      taker.address
    );
    const makerERC20TokenInitBalance: BigNumberEthers =
      await MAKER_Token.balanceOf(maker.address);
    const taker3rdTokenInitBalance: BigNumberEthers =
      await AAVE_Token.balanceOf(taker.address);

    // without SDK
    // await DAI_Token.connect(taker).approve(AugustusSwapper.address, takerAmount);

    // withSDK
    const approveForTakerTx = await takerSDK.approveERC20ForNFTOrder(
      buyAmount,
      AAVE_Token.address
    );
    await awaitTx(approveForTakerTx);

    const swapAndNFTPayloadTxParams = await takerSDK.buildSwapAndNFTOrderTx(
      {
        priceRoute,
        userAddress: taker.address,
        partner: referrer,
        orders: [orderWithSignature],
      },
      { ignoreChecks: true }
    );

    const transaction = {
      ...swapAndNFTPayloadTxParams,
      gasPrice:
        swapAndNFTPayloadTxParams.gasPrice &&
        '0x' + new BigNumber(swapAndNFTPayloadTxParams.gasPrice).toString(16),
      maxFeePerGas:
        swapAndNFTPayloadTxParams.maxFeePerGas &&
        '0x' +
          new BigNumber(swapAndNFTPayloadTxParams.maxFeePerGas).toString(16),
      maxPriorityFeePerGas:
        swapAndNFTPayloadTxParams.maxPriorityFeePerGas &&
        '0x' +
          new BigNumber(
            swapAndNFTPayloadTxParams.maxPriorityFeePerGas
          ).toString(16),
      gasLimit: '0x' + new BigNumber(5000000).toString(16),
      value: '0x' + new BigNumber(swapAndNFTPayloadTxParams.value).toString(16),
    };

    try {
      const takerFillsOrderTx = await taker.sendTransaction(transaction);
      await awaitTx(takerFillsOrderTx);
    } catch (error: any) {
      // allow for hard-to-anticipate errors unrelated to tests
      expect(error.message).toContain('External call failed');
      return;
    }

    const makerTokenNFTAfterBalance: BigNumberEthers =
      await NFT_Token.balanceOf(maker.address);
    const takerTokenNFTAfterBalance: BigNumberEthers =
      await NFT_Token.balanceOf(taker.address);
    const makerERC20TokenAfterBalance: BigNumberEthers =
      await MAKER_Token.balanceOf(maker.address);
    const taker3rdTokenAfterBalance: BigNumberEthers =
      await AAVE_Token.balanceOf(taker.address);

    expect(
      new BigNumber(makerTokenNFTAfterBalance.toString()).toString(10)
    ).toEqual(
      new BigNumber(makerTokenNFTInitBalance.toString())
        .minus(makerAmount)
        .toString(10)
    );
    expect(
      new BigNumber(takerTokenNFTAfterBalance.toString()).toString(10)
    ).toEqual(
      new BigNumber(takerTokenNFTInitBalance.toString())
        .plus(makerAmount)
        .toString(10)
    );
    expect(
      new BigNumber(makerERC20TokenAfterBalance.toString()).toString(10)
    ).toEqual(
      new BigNumber(makerERC20TokenInitBalance.toString())
        .plus(takerAmount)
        .toString(10)
    );
    expect(BigInt(taker3rdTokenAfterBalance.toString())).toBeLessThan(
      BigInt(taker3rdTokenInitBalance.toString()) // can't calculate how much less precisely, because of slippage
    );
  });

  test('Build_Swap+NFT_Tx', async () => {
    // swap DAI -> BUSD, then fill BUSD (takerAsset) for NFT (makerAsset)

    // 1 NFT
    const makerAmount = (1).toString(10);
    // for 6 BUSD
    const takerAmount = (6e18).toString(10);

    const maker = walletV5Stable.connect(ethersV5Provider);
    const nftContract = new ethers.Contract(
      erc721Token3.address,
      ERC721MintableABI,
      maker
    );

    await (await nftContract.mint(maker.address)).wait();
    const afterMintLastId = (await nftContract.lastMintedTokenId()).toString();

    const order = {
      nonce: 99,
      expiry: orderExpiry,
      maker: maker.address,
      makerAsset: erc721Token3.address,
      makerAmount,
      takerAsset: BUSD,
      takerAmount,
      makerAssetType: AssetType.ERC721,
      takerAssetType: AssetType.ERC20,
      makerAssetId: afterMintLastId,
    };

    // token to get after SWAP must be the takerAsset to allow to fill Order
    const destToken = order.takerAsset;
    // token to swap for destToken prior to filling Order
    const srcToken = DAI;

    const signableOrderData = await sdk.buildNFTOrder(order);

    const signature = await sdk.signNFTOrder(signableOrderData);

    const priceRoute = await sdk.getNFTOrdersRate(
      {
        srcToken,
        destToken,
        userAddress: senderAddress,
      },
      [order]
    );

    const stablePriceRouteMatch: typeof priceRoute = {
      ...priceRoute,
      blockNumber: NaN, // will change with time
      srcAmount: '---', //will change based on srcToken/destToken rate
      hmac: '---', // will change with any other change
      srcUSD: '---',
      destUSD: '---',
      gasCostUSD: '---',
      gasCost: '---', // unstable, varies based on whether it's UniswapV2 or UniswapV3 at the time of writing
      bestRoute: priceRoute.bestRoute.map((route) => ({
        ...route,
        swaps: route.swaps.map((swap) => ({
          ...swap,
          swapExchanges: swap.swapExchanges.map((exchange) => ({
            ...exchange,
            data: {
              ...exchange.data,
              path: '---', // stablilze test because of variable path.
              pools: '---',
              factory: '---',
              feeFactor: '---',
              initCode: '---',
              gasUSD: '---',
            },
            exchange: '---', // unstable, sometimes it's UniswapV2, other times UniswapV3
            poolAddresses: ['---'],
            srcAmount: '---', //will change based on srcToken/destToken rate
          })),
        })),
      })),
    };

    // @CONSIDER this may change
    expect(stablePriceRouteMatch).toMatchInlineSnapshot(`
      {
        "bestRoute": [
          {
            "percent": 100,
            "swaps": [
              {
                "destDecimals": 18,
                "destToken": "0x4fabb145d64652a948d72533023f6e7a623c7c53",
                "srcDecimals": 18,
                "srcToken": "0x6b175474e89094c44da98b954eedeac495271d0f",
                "swapExchanges": [
                  {
                    "data": {
                      "factory": "---",
                      "feeFactor": "---",
                      "gasUSD": "---",
                      "initCode": "---",
                      "path": "---",
                      "pools": "---",
                    },
                    "destAmount": "6000000000000000000",
                    "exchange": "---",
                    "percent": 100,
                    "poolAddresses": [
                      "---",
                    ],
                    "poolIdentifiers": [
                      "UniswapV3_0x4fabb145d64652a948d72533023f6e7a623c7c53_0x6b175474e89094c44da98b954eedeac495271d0f_500",
                    ],
                    "srcAmount": "---",
                  },
                ],
              },
            ],
          },
        ],
        "blockNumber": NaN,
        "contractAddress": "0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57",
        "contractMethod": "simpleBuy",
        "destAmount": "6000000000000000000",
        "destDecimals": 18,
        "destToken": "0x4fabb145d64652a948d72533023f6e7a623c7c53",
        "destUSD": "---",
        "gasCost": "---",
        "gasCostUSD": "---",
        "hmac": "---",
        "maxImpactReached": false,
        "network": 1,
        "partner": "anon",
        "partnerFee": 0,
        "side": "BUY",
        "srcAmount": "---",
        "srcDecimals": 18,
        "srcToken": "0x6b175474e89094c44da98b954eedeac495271d0f",
        "srcUSD": "---",
        "tokenTransferProxy": "0x216b4b4ba9f3e719726886d34a177484278bfcae",
        "version": "5",
      }
    `);

    const swapTxPayload = await sdk.buildTx(
      {
        srcToken,
        destToken,
        srcAmount: priceRoute.srcAmount,
        destAmount: priceRoute.destAmount,
        priceRoute,
        userAddress: senderAddress,
        partner: referrer,
      },
      { ignoreChecks: true }
    );

    expect(swapTxPayload).toEqual(expectTxParamsScheme);

    expect({
      from: swapTxPayload.from,
      to: swapTxPayload.to,
      value: swapTxPayload.value,
      chainId: swapTxPayload.chainId,
      //  data & gasPrice vary from run to run
    }).toMatchInlineSnapshot(`
      {
        "chainId": 1,
        "from": "0xaC39b311DCEb2A4b2f5d8461c1cdaF756F4F7Ae9",
        "to": "0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57",
        "value": "0",
      }
    `);

    const swappableOrder = {
      ...order, // providers makerAssetType & takerAssetType, necessary for encoding makerAsset & takerAsset as uint (if got order by hash from API)
      ...signableOrderData.data, // provides actual order data necessary for the contract
      signature, // necessary for execution in the contract
    };

    const swapAndNFTPayload = await sdk.buildSwapAndNFTOrderTx(
      {
        priceRoute,
        userAddress: senderAddress,
        partner: referrer,
        orders: [swappableOrder],
      },
      { ignoreChecks: true }
    );

    expect(swapAndNFTPayload).toEqual(expectTxParamsScheme);
    expect({
      from: swapAndNFTPayload.from,
      to: swapAndNFTPayload.to,
      value: swapAndNFTPayload.value,
      chainId: swapAndNFTPayload.chainId,
      //  data & gasPrice vary from run to run
    }).toMatchInlineSnapshot(`
      {
        "chainId": 1,
        "from": "0xaC39b311DCEb2A4b2f5d8461c1cdaF756F4F7Ae9",
        "to": "0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57",
        "value": "0",
      }
    `);
  });

  describe.each(txSDKs)(
    'ethereum lib tests: $lib',
    ({ lib, sdk, takerSDK }) => {
      test(`signNFTOrder with ${lib}`, async () => {
        const signableOrderData = await sdk.buildNFTOrder(orderInput);

        const signature = await sdk.signNFTOrder(signableOrderData);
        expect(signature).toMatchInlineSnapshot(
          `"0x72143ce3bc801dac394838d88d3acd39afce1999dee0ffff11bc4c69b5a2d76c02862144eb45a0f6033a3b04f5174c4eb0dbc2ebf0daa2af52528ed1ca12ae281b"`
        );

        const presumedOrderHash = calculateOrderHash(signableOrderData);

        expect(
          ethers.utils.recoverAddress(presumedOrderHash, signature)
        ).toEqual(senderAddress);
      });

      let libDependentNumber = 1;

      test(`cancelNFTOrder with ${lib}`, async () => {
        // bytes32
        const randomOrderHash = `0x${libDependentNumber++}000000000000000000000000000000000000000000000000000000000000000`;

        const tx = await sdk.cancelNFTOrder(randomOrderHash);
        await awaitTx(tx);

        const orderStatus: BigNumberEthers = await AugustusRFQ.remaining(
          senderAddress,
          randomOrderHash
        );
        expect(orderStatus.toNumber()).toEqual(1);
      });

      test(`cancelNFTOrder Bulk with ${lib}`, async () => {
        // bytes32[]
        const randomOrderHashes = [
          `0x20${libDependentNumber++}0000000000000000000000000000000000000000000000000000000000000`,
          `0x30${libDependentNumber++}0000000000000000000000000000000000000000000000000000000000000`,
        ];

        const tx = await sdk.cancelNFTOrderBulk(randomOrderHashes);
        await awaitTx(tx);

        const orderStatus0 = await AugustusRFQ.remaining(
          senderAddress,
          randomOrderHashes[0]
        );
        const orderStatus1 = await AugustusRFQ.remaining(
          senderAddress,
          randomOrderHashes[1]
        );

        expect(orderStatus0.toNumber()).toEqual(1);
        expect(orderStatus1.toNumber()).toEqual(1);
      });
    }
  );

  test.skip('getNFTOrders', async () => {
    const account = '0x112f39ea2ccff2d088086590d11cd9f092954f77';
    const orderHash =
      '0x6b3906698abedb72c2954b2ea39006e4be779b12eb9e72a1b8dba8dbd2ba975b';

    const { orders } = await sdk.getNFTOrders({
      maker: account,
      type: 'LIMIT',
    });

    const order = orders.find(
      (order) => order.orderHash.toLowerCase() === orderHash
    );

    assert(order, `order must exist for orderHash ${orderHash}`);

    expect(order.state).toEqual('EXPIRED');

    // EXPIRED order won't change
    expect(order).toMatchInlineSnapshot(`
      Object {
        "chainId": 3,
        "createdAt": 1652430671,
        "expiry": 0,
        "maker": "0x05182e579fdfcf69e4390c3411d8fea1fb6467cf",
        "makerAmount": "10000000000000000000",
        "makerAsset": "0xad6d458402f60fd3bd25163575031acdce07538d",
        "makerBalance": "10000000000000000000",
        "nonceAndMeta": "8209317000076433728076072485312968185294986748283703458703343616",
        "orderHash": "0x6b3906698abedb72c2954b2ea39006e4be779b12eb9e72a1b8dba8dbd2ba975b",
        "permitMakerAsset": null,
        "signature": "0x5df9b6f3abaef67993e57e94ab2ed9e58a4c709fb03f0cf23117c0ed8a4b46097c515c2b055d2a5a1c373513faaa618ae3873e167c129128bb0b28a8be5f980e1b",
        "state": "EXPIRED",
        "taker": "0x0000000000000000000000000000000000000000",
        "takerAmount": "1000000000000000000",
        "takerAsset": "0xc778417e063141139fce010982780140aa0cd5ab",
      }
    `);
  });

  test.skip('postNFTOrder', async () => {
    // @TODO breaks with 'maker' doesn't have sufficient balance for this NFT order
    // because of API balance check
    // need to use a fixed address through a PK
    const signableOrderData = await sdk.buildNFTOrder({
      ...orderInput,
      nonce: 2,
    });

    const signature = await sdk.signNFTOrder(signableOrderData);
    // expect(signature).toMatchInlineSnapshot(
    //   `"0x3aa58967f07b7752c8220191ebd80e9e00f95212b2e9f3ee61f9e92ebbeeffab397833627056ade28ae2726d59534a30ee3099731aa1b41176e7e7bb0f8b28e71b"`
    // );

    const orderWithSignature: NFTOrderToSend = {
      ...signableOrderData.data,
      signature,
    };

    const newOrder = await sdk.postNFTLimitOrder(orderWithSignature);

    const recoveredAddress = ethers.utils.recoverAddress(
      newOrder.orderHash,
      signature
    );

    expect(recoveredAddress).toEqual(senderAddress);

    // expect(newOrder).toMatchSnapshot('Order_from_API_Snapshot');
  });
});

function calculateOrderHash({
  domain,
  types,
  data,
}: SignableNFTOrderData): string {
  return ethers.utils._TypedDataEncoder.hash(domain, types, data);
}

async function awaitTx(
  tx: { wait(): Promise<unknown> } | Web3UnpromiEvent
): Promise<void> {
  if ('wait' in tx) {
    await tx.wait();

    return;
  }

  await new Promise<Web3TransactionReceipt>((resolve, reject) => {
    tx.once('receipt', resolve);
    tx.once('error', reject);
  });
}

function deriveTakerFromNonceAndTaker(nonceAndMeta: string): string {
  return hexZeroPad(
    hexValue(BigInt(nonceAndMeta) & ((BigInt(1) << BigInt(160)) - BigInt(1))),
    20
  );
}
