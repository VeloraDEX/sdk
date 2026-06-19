import type { EnumerateLiteral } from '../../../types';
import { SwapSide } from '../../../constants';

export type SwapSideUnion = EnumerateLiteral<typeof SwapSide>;

/** @description SELL with slippage: srcAmount provided, destAmount auto-computed from deltaPrice.destAmount */
export type DeltaAmountsSellSlippage = {
  /** @description Slippage in basis points (bps). 10000 = 100%, 50 = 0.5% */
  slippage: number;
  /** @description The amount of src token to swap */
  srcAmount: string;
  destAmount?: never;
  /** @description The side of the order */
  side?: 'SELL';
};
/** @description BUY with slippage: destAmount provided, srcAmount auto-computed from deltaPrice.srcAmount */
export type DeltaAmountsBuySlippage = {
  /** @description Slippage in basis points (bps). 10000 = 100%, 50 = 0.5% */
  slippage: number;
  /** @description The minimum amount of dest token to receive */
  destAmount: string;
  srcAmount?: never;
  /** @description The side of the order */
  side?: 'BUY';
};
/** @description Explicit amounts, no slippage (backward-compatible) */
export type DeltaAmountsExplicit = {
  slippage?: never;
  /** @description The amount of src token to swap */
  srcAmount: string;
  /** @description The minimum amount of dest token to receive */
  destAmount: string;
  /** @description The side of the order. Default is SELL */
  side?: SwapSideUnion;
};

export type DeltaAmountsWithSlippage =
  | DeltaAmountsSellSlippage
  | DeltaAmountsBuySlippage
  | DeltaAmountsExplicit;

export enum OrderKind {
  Sell = 0,
  Buy = 1,
}

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

export type ProductiveDeltaOrder = {
  /** @description The address of the order owner */
  owner: string;
  /** @description The address of the order beneficiary */
  beneficiary: string;
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
  /** @description The deadline for the order */
  deadline: number;
  /** @description The nonce of the order */
  nonce: string;
  /** @description Metadata for the order, hex string */
  metadata: string;
  /** @description Encoded partner address, fee bps, and flags for the order. partnerAndFee = (partner << 96) | (partnerTakesSurplus << 8) | fee in bps (max fee is 2%) */
  partnerAndFee: string;
  /** @description Optional permit signature for the src token */
  permit: string;
  /** @description The strategy address. */
  strategy: string;
  /** @description The number of shares to execute for this order. */
  shares: string;
  /** @description Whether the order uses shares or raw amounts. */
  useShares: boolean;
  /** @description The bridge input */
  bridge: Bridge;
};

type TWAPDeltaOrderBase = {
  /** @description The address of the order owner */
  owner: string;
  /** @description The address of the order beneficiary */
  beneficiary: string; // beneficiary==owner if no transferTo
  /** @description The address of the src token */
  srcToken: string; // lowercase
  /** @description The address of the dest token */
  destToken: string; // lowercase
  /** @description The nonce of the order */
  nonce: string; // can be random, can even be Date.now()
  /** @description Encoded partner address, fee bps, and flags for the order. partnerAndFee = (partner << 96) | (partnerTakesSurplus << 8) | fee in bps (max fee is 2%) */
  partnerAndFee: string;
  /** @description The deadline for the order */
  deadline: number; // seconds
  /** @description The interval between each slice execution */
  interval: number; // seconds
  /** @description The number of slices to execute */
  numSlices: number;
  /** @description Optional permit signature for the src token */
  permit: string; //can be "0x"
  /** @description Metadata for the order, hex string */
  metadata: string;
  /** @description The bridge input */
  bridge: Bridge;
};

export type TWAPDeltaOrder = TWAPDeltaOrderBase & {
  /** @description The amount of dest token to receive per slice */
  destAmountPerSlice: string; // wei
  /** @description The total amount of src token to swap */
  totalSrcAmount: string; // wei
  /** @description Optional permit signature for the src token */
};

export type TWAPBuyDeltaOrder = TWAPDeltaOrderBase & {
  /** @description The total amount of dest token to buy across all slices */
  totalDestAmount: string; // wei
  /** @description The maximum amount of src token willing to spend */
  maxSrcAmount: string; // wei
};

export type OnChainOrderMap = {
  Order: DeltaAuctionOrder;
  FillableOrder: DeltaAuctionOrder;
  ExternalOrder: ExternalDeltaOrder;
  TWAPOrder: TWAPDeltaOrder;
  TWAPBuyOrder: TWAPBuyDeltaOrder;
  ProductiveOrder: ProductiveDeltaOrder;
};

export type DeltaOrderUnion = OnChainOrderMap[keyof OnChainOrderMap];

export type OnChainOrderType = keyof OnChainOrderMap;

export type TWAPOnChainOrderType = 'TWAPOrder' | 'TWAPBuyOrder';

/** @description Order kind: MARKET (immediate) vs LIMIT (rate-pegged). */
export type DeltaOrderType = 'MARKET' | 'LIMIT';

export type UnifiedDeltaOrderData = {
  /** @description  amounts at the start of Order execution and after Order execution. May differ from each other */
  amounts: {
    /** @description  expected amounts at the start of Order execution */
    expected: {
      srcAmount: string;
      destAmount: string;
    };
    /** @description  minimal amounts that user should receive if the order is filled, known at the start of Order execution */
    minimal: {
      srcAmount: string;
      destAmount: string;
    };
    /** @description  final amounts after Order execution. May be less than expected if there is slippage or only partial execution was achieved */
    final?: {
      srcAmount: string;
      destAmount: string;
    };
  };
  /** @description  source chain id */
  srcChainId: number;
  /** @description  destination chain id (same as source chain id for single chain orders) */
  destChainId: number;
  /** @description  input token amount */
  srcAmount: string;
  /** @description  output token amount (expected amount for pending orders, actual received amount for executed orders) */
  destAmount: string;
  /** @description  input token address */
  srcToken: string;
  /** @description  output token address */
  destToken: string;
  /** @description  swap side of the order */
  swapSide: SwapSideUnion;
  /** @description  filled percent of the order (based on transactions[].filledPercent) */
  filledPercent: number;
};
