import { assert } from 'ts-essentials';
import { ZERO_ADDRESS } from '../../common/orders/buildOrderData';
import { BeneficiaryType } from '../../common/orders/types';
import { Bridge } from './types';

export const ACROSS_WETH_ADDRESSES_MAP: Record<number, string> = {
  // Mainnet
  1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  // Sepolia
  11155111: '0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14',
  // Base
  8453: '0x4200000000000000000000000000000000000006',
  // Base Sepolia
  84532: '0x4200000000000000000000000000000000000006',
  // Optimism
  10: '0x4200000000000000000000000000000000000006',
  // Optimism Sepolia
  11155420: '0x4200000000000000000000000000000000000006',
  // Polygon
  137: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
  // Polygon Amoy
  80002: '0x52eF3d68BaB452a294342DC3e5f464d7f610f72E',
  // Aleph Zero
  41455: '0xB3f0eE446723f4258862D949B4c9688e7e7d35d3',
  // Arbitrum
  42161: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
  // Arbitrum Sepolia
  421614: '0x980B62Da83eFf3D4576C647993b0c1D7faf17c73',
  // Boba
  288: '0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000',
  // Blast
  81457: '0x4300000000000000000000000000000000000004',
  // Blast Sepolia
  168587773: '0x4200000000000000000000000000000000000023',
  // BSC
  56: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
  // Ink
  57073: '0x4200000000000000000000000000000000000006',
  // Ink Sepolia
  763373: '0x4200000000000000000000000000000000000006',
  // Lens
  232: '0xE5ecd226b3032910CEaa43ba92EE8232f8237553',
  // Lens Sepolia
  37111: '0xaA91D645D7a6C1aeaa5988e0547267B77d33fe16',
  // Linea
  59144: '0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f',
  // Lisk
  1135: '0x4200000000000000000000000000000000000006',
  // Lisk Sepolia
  4202: '0x4200000000000000000000000000000000000006',
  // Mode
  34443: '0x4200000000000000000000000000000000000006',
  // Mode Sepolia
  919: '0x4200000000000000000000000000000000000006',
  // Redstone
  690: '0x4200000000000000000000000000000000000006',
  // Scroll
  534352: '0x5300000000000000000000000000000000000004',
  // Scroll Sepolia
  534351: '0x5300000000000000000000000000000000000004',
  // Soneium
  1868: '0x4200000000000000000000000000000000000006',
  // Tatara
  129399: '0x17B8Ee96E3bcB3b04b3e8334de4524520C51caB4',
  // Unichain
  130: '0x4200000000000000000000000000000000000006',
  // Unichain Sepolia
  1301: '0x4200000000000000000000000000000000000006',
  // World Chain
  480: '0x4200000000000000000000000000000000000006',
  // ZK Sync
  324: '0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91',
  // ZK Sync Sepolia
  300: '0x2D6Db36B3117802E996f13073A08A685D3FeF7eD',
  // Zora
  7777777: '0x4200000000000000000000000000000000000006',
};

export function isAcrossWETH(tokenAddress: string, chainId: number) {
  return (
    ACROSS_WETH_ADDRESSES_MAP[chainId]?.toLowerCase() ===
    tokenAddress.toLowerCase()
  );
}

const ETH_ADDRESS = '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE';

const ETH_ADDRESS_LOWERCASE = ETH_ADDRESS.toLowerCase() as Lowercase<
  typeof ETH_ADDRESS
>;

export function isETHaddress(tokenAddress: string): boolean {
  return tokenAddress.toLowerCase() === ETH_ADDRESS_LOWERCASE;
}

// WETH > ETH Across logic
// https://docs.across.to/introduction/technical-faq#what-is-the-behavior-of-eth-weth-in-transfers

// Velora API ref
// https://developers.velora.xyz/api/velora-api/velora-delta-api/build-a-delta-order-to-sign

export type GetDeltaBridgeAndDestTokenInput = {
  destTokenDestChain: string; // the token user wants to ultimately receive
  destChainId: number;
  bridgeFee: string;
  bridgeOutputToken: string; // the token on the destination chain, in case of WETH -> ETH, will be different from destTokenDestChain and unwrapped
  beneficiaryType: BeneficiaryType;
  getMulticallHandler: (chainId: number) => Promise<string>;
};

export type GetDeltaBridgeAndDestTokenOutput = {
  /** @description The bridge object to be used for Order.bridge */
  bridge: Bridge;
};

export async function getDeltaBridge({
  destTokenDestChain,
  destChainId,
  bridgeFee,
  bridgeOutputToken,
  beneficiaryType,
  getMulticallHandler,
}: GetDeltaBridgeAndDestTokenInput): Promise<GetDeltaBridgeAndDestTokenOutput> {
  assert(
    beneficiaryType === 'EOA' || beneficiaryType === 'SmartContract',
    'beneficiaryType must be EOA or SmartContract'
  );

  const outputToken = bridgeOutputToken.toLowerCase(); // for uniformity

  let multiCallHandler: string = ZERO_ADDRESS;

  if (beneficiaryType === 'EOA' && isETHaddress(destTokenDestChain)) {
    /*
    if beneficiary is an EOA and destToken on destChain = ETH
    order.destToken=ETH (deltaPrice already contains correct destToken)
    order.bridge.outputToken=WETH_DEST_CHAIN (deltaPrice already contains correct bridge.outputToken)
    order.bridge.multiCallHandler=NULL_ADDRESS
    */

    multiCallHandler = ZERO_ADDRESS;
  }
  if (
    beneficiaryType === 'EOA' &&
    isAcrossWETH(destTokenDestChain, destChainId)
  ) {
    /*
    if beneficiary is an EOA and destToken on destChain = WETH
    order.destToken=WETH (deltaPrice already contains correct destToken)
    order.bridge.outputToken=WETH_DEST_CHAIN (deltaPrice already contains correct bridge.outputToken)
    order.bridge.multiCallHandler=MULTI_CALL_HANDLER
    */
    multiCallHandler = await getMulticallHandler(destChainId);
  }

  if (beneficiaryType === 'SmartContract' && isETHaddress(destTokenDestChain)) {
    /* 
      if beneficiary is a contract and destToken on destChain = ETH
      order.destToken=ETH (deltaPrice already contains correct destToken)
      order.bridge.outputToken=WETH_DEST_CHAIN (deltaPrice already contains correct bridge.outputToken)
      order.bridge.multiCallHandler=MULTI_CALL_HANDLER
      */
    multiCallHandler = await getMulticallHandler(destChainId);
  }

  if (
    beneficiaryType === 'SmartContract' &&
    isAcrossWETH(destTokenDestChain, destChainId)
  ) {
    /*
      if beneficiary is a contract and destToken on destChain = WETH
      order.destToken=WETH (deltaPrice already contains correct destToken)
      order.bridge.outputToken=WETH_DEST_CHAIN (deltaPrice already contains correct bridge.outputToken)
      order.bridge.multiCallHandler=NULL_ADDRESS
    */
    multiCallHandler = ZERO_ADDRESS;
  }

  const bridge: Bridge = {
    maxRelayerFee: bridgeFee,
    destinationChainId: destChainId,
    outputToken,
    multiCallHandler,
  } as any; // @TODO remove the whole getDeltaBridge() when API provides BridgePrice.bridge = whole Bridge object

  return {
    bridge,
  };
}
