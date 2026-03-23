import type { EnumerateLiteral } from '../../../types';
import { SwapSide } from '../../../constants';

export type SwapSideUnion = EnumerateLiteral<typeof SwapSide>;

/** @description SELL with slippage: srcAmount provided, destAmount auto-computed from deltaPrice.destAmount */
export type AmountsSellSlippage = {
  /** @description Slippage in basis points (bps). 10000 = 100%, 50 = 0.5% */
  slippage: number;
  /** @description The amount of src token to swap */
  srcAmount: string;
  destAmount?: never;
  /** @description The side of the order */
  side?: 'SELL';
};
/** @description BUY with slippage: destAmount provided, srcAmount auto-computed from deltaPrice.srcAmount */
export type AmountsBuySlippage = {
  /** @description Slippage in basis points (bps). 10000 = 100%, 50 = 0.5% */
  slippage: number;
  /** @description The minimum amount of dest token to receive */
  destAmount: string;
  srcAmount?: never;
  /** @description The side of the order */
  side?: 'BUY';
};
/** @description Explicit amounts, no slippage (backward-compatible) */
export type AmountsExplicit = {
  slippage?: never;
  /** @description The amount of src token to swap */
  srcAmount: string;
  /** @description The minimum amount of dest token to receive */
  destAmount: string;
  /** @description The side of the order. Default is SELL */
  side?: SwapSideUnion;
};

export type AmountsWithSlippage =
  | AmountsSellSlippage
  | AmountsBuySlippage
  | AmountsExplicit;

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

export type ExternalDeltaOrder = {
  /** @description The address of the order owner */
  owner: string;
  /** @description The address of the external handler contract */
  handler: string;
  /** @description The address of the src token */
  srcToken: string;
  /** @description The address of the dest token */
  destToken: string;
  /** @description The amount of src token to swap */
  srcAmount: string;
  /** @description The minimum amount of dest token to receive */
  destAmount: string;
  /** @description The expected amount of token to receive */
  expectedAmount: string;
  /** @description The kind of the order */
  kind: OrderKind;
  /** @description Metadata for the order, hex string */
  metadata: string;
  /** @description The deadline for the order */
  deadline: number;
  /** @description The nonce of the order */
  nonce: string;
  /** @description Optional permit signature for the src token */
  permit: string;
  /** @description Encoded partner address, fee bps, and flags for the order */
  partnerAndFee: string;
  /** @description Protocol-specific encoded bytes for the external handler */
  data: string;
};

export type DeltaAuctionStatus =
  | 'NOT_STARTED'
  | 'AWAITING_PRE_SIGNATURE'
  | 'RUNNING'
  | 'EXECUTING'
  | 'EXECUTED'
  | 'FAILED'
  | 'EXPIRED'
  | 'CANCELLED'
  | 'CANCELLING'
  | 'SUSPENDED'
  | 'REFUNDED';

type DeltaAuctionTransaction = {
  id: string;
  hash: string;
  orderId: string;
  bidId: string | null;
  blockNumber: number;
  blockHash: string;
  blockTimestamp: string | null; // ISO string, null for older Orders
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

export type OnChainOrderMap = {
  Order: DeltaAuctionOrder;
  ExternalOrder: ExternalDeltaOrder;
};

type DeltaAuctionBase = {
  id: string;
  deltaVersion: string; // 1.0 or 2.0 currently
  user: string;
  status: DeltaAuctionStatus;
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

  type: 'MARKET' | 'LIMIT';
};

export type DeltaAuction<T extends OnChainOrderType = OnChainOrderType> =
  T extends T
    ? DeltaAuctionBase & {
        onChainOrderType: T;
        order: OnChainOrderMap[T];
      }
    : never;

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

export type OnChainOrderType = 'Order' | 'ExternalOrder';

//// available on BridgePrice ////

type BridgeQuoteFee = {
  feeToken: string;
  amount: string;
  amountInSrcToken: string;
  amountInUSD: string;
};

export type BridgePriceInfo = {
  protocolName: string;
  destAmountAfterBridge: string;
  destUSDAfterBridge: string;
  fees: BridgeQuoteFee[];
  estimatedTimeMs: number;
  fastest: boolean;
  bestReturn: boolean;
  recommended: boolean;
};
