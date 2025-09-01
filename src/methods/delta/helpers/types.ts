import { SwapSide } from '../../../constants';

enum OrderKind {
  Sell = 0,
  Buy = 1,
}

export const SwapSideToOrderKind = {
  [SwapSide.SELL]: OrderKind.Sell,
  [SwapSide.BUY]: OrderKind.Buy,
} as const;

export type DeltaAuctionOrder = {
  /** @description The address of the order owner */
  owner: string;
  /** @description The address of the order beneficiary */
  beneficiary: string; // beneficiary==owner if no transferTo
  /** @description The address of the src token */
  srcToken: string; // lowercase
  /** @description The address of the dest token */
  destToken: string; // lowercase
  /** @description The amount of src token to swap */
  srcAmount: string; // wei
  /** @description The minimum amount of dest token to receive */
  destAmount: string; // wei
  /** @description The expected amount of token to receive */
  expectedAmount: string; // wei
  /** @description The kind of the order */
  kind: OrderKind;
  /** @description Metadata for the order, hex string */
  metadata: string;
  /** @description The deadline for the order */
  deadline: number; // seconds
  /** @description The nonce of the order */
  nonce: string; // can be random, can even be Date.now()
  /** @description Optional permit signature for the src token */
  permit: string; //can be "0x"
  /** @description Encoded partner address, fee bps, and flags for the order. partnerAndFee = (partner << 96) | (partnerTakesSurplus << 8) | fee in bps (max fee is 2%) */
  partnerAndFee: string;
  /** @description The bridge input */
  bridge: Bridge;
};

export type Bridge = {
  protocolSelector: string; // Hex string
  destinationChainId: number;
  /** @description The address of the output token. Same as Order.destToken but on destination chain, so can still be a different address */
  outputToken: string;
  scalingFactor: number;

  /** @description Data specific to the protocol */
  protocolData: string; // Hex string
};

export type DeltaAuctionStatus =
  | 'NOT_STARTED'
  | 'RUNNING'
  | 'EXECUTING'
  | 'EXECUTED'
  | 'FAILED'
  | 'EXPIRED'
  | 'CANCELLED'
  | 'SUSPENDED';

type DeltaAuctionTransaction = {
  id: string;
  hash: string;
  orderId: string;
  bidId: string | null;
  blockNumber: number;
  blockHash: string;
  gasUsed: bigint;
  gasPrice: bigint;
  blobGasUsed: bigint;
  blobGasPrice: bigint;
  index: number;
  status: number;
  from: string;
  to: string;
  receivedAmount: string;
  receivedAmountUSD: number;
  spentAmount: string;
  spentAmountUSD: number;
  filledPercent: number; // in base points
  protocolFee: string;
  partnerFee: string;
  agent: string;
  auctionId: string;
};

export type DeltaAuction = {
  id: string;
  deltaVersion: string; // 1.0 or 2.0 currently
  user: string;
  signature: string;
  status: DeltaAuctionStatus;
  order: DeltaAuctionOrder;
  orderHash: string | null; // not available on old Orders only
  transactions: DeltaAuctionTransaction[];
  chainId: number;
  partner: string;
  referrerAddress: string | null;
  expiresAt: string;
  createdAt: string;
  updatedAt: string;
  partiallyFillable: boolean;

  excludeAgents: string[] | null;
  includeAgents: string[] | null;

  bridgeMetadata: BridgeMetadata | null;
  bridgeStatus: BridgeStatus | null;

  // @TODO only returned after POST Order so far
  // orderVersion: string; // "2.0.0"
  // deltaGasOverhead: number;

  type: 'MARKET' | 'LIMIT'; // @TODO when available in API for individual /order/:hash|:id
};

export type BridgeMetadata = {
  /** @description The amount that user should expect to get */
  outputAmount: string;
  /** @description The cross-chain deadline. If deadline passes, the bridgeStatus would be expired */
  fillDeadline: number;
  /** @description The deposit id */
  depositId: number;
  /** @description The transaction hash on the destination chain that fulfilled the order. When bridgeStatus='filled' */
  fillTx?: string;
  /** @description The transaction hash on the source chain that refunded the deposit. When bridgeStatus='refunded' */
  depositRefundTxHash?: string;
};

//                                                             refunded is basically failed
export type BridgeStatus = 'pending' | 'filled' | 'expired' | 'refunded';

//// available on BridgePrice ////

// so far
type ProtocolName = 'Across' | 'StargateBus' | 'StargateTaxi';

type BridgeQuoteFee = {
  feeToken: string;
  amount: string;
  amountInSrcToken: string;
  amountInUSD: string;
};

export type BridgePriceInfo = {
  protocolName: ProtocolName;
  destAmountAfterBridge: string;
  destUSDAfterBridge: string;
  fees: BridgeQuoteFee[];
  estimatedTimeMs: number;
};
