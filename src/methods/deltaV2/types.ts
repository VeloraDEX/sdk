import type { Address } from '../../types';
import type { TypedDataField } from '../common/orders/buildOrderData';
import type {
  Bridge,
  DeltaOrderType,
  DeltaOrderUnion,
  OnChainOrderType,
} from '../delta/helpers/types';

/** @description Response from POST /delta/v2/orders/build — EIP-712 typed data ready to sign. */
export type BuiltDeltaOrderV2 = {
  toSign: {
    domain: {
      name: string;
      version: string;
      chainId: number;
      verifyingContract: string;
    };
    /** EIP-712 type definitions keyed by type name. */
    types: Record<string, TypedDataField[]>;
    /** The on-chain order struct value to sign. */
    value: Record<string, unknown>;
  };
  /** EIP-712 order hash. */
  orderHash: string;
};

/** @description Token identity used across v2 endpoints. */
export type DeltaPriceToken = {
  chainId: number;
  address: Address;
};

/** @description A token amount with its USD value, used uniformly for inputs, outputs, and fees. */
export type DeltaTokenAmount = {
  token: DeltaPriceToken;
  /** @description Amount in wei. */
  amount: string;
  /** @description USD value of the amount. */
  amountUSD: string;
};

/** @description Bridge tag used to mark routes as recommended / fastest / best-return. */
export type BridgeTag = 'recommended' | 'fastest' | 'best-return';

/** @description Subset of the on-chain Bridge struct returned in v2 price responses.
 *  (the full `route` object is passed to the server when building an order). */
export type DeltaRouteBridgeContractParams = Omit<Bridge, 'destinationChainId'>;

/** @description Bridge details on a route. Same-chain routes carry `null` for `route.bridge`. */
export type DeltaRouteBridge = {
  /** @description Bridge protocol identifier (e.g. "Across", "Relay", "Mayan"). */
  protocol: string;
  /** @description Estimated bridging time in milliseconds. */
  estimatedTimeMs: number;
  /** @description Tags for this route ("recommended", "fastest", "best-return"). May be empty. */
  tags: BridgeTag[];
  /** @description Bridge contract parameters as returned by the server. */
  contractParams: DeltaRouteBridgeContractParams;
};

/** @description A single step of a route (origin chain or destination chain). */
export type DeltaRouteStep = {
  /** @description The token amount entering this step (before any per-step swap). */
  input: DeltaTokenAmount;
  /** @description The token amount exiting this step (after any per-step swap). */
  output: DeltaTokenAmount;
};

/** @description A route describes how the swap flows from origin chain to destination chain. */
export type DeltaRoute = {
  /** @description Source-chain step. The on-chain Delta order's amounts come from `origin.input` and `origin.output`. */
  origin: DeltaRouteStep;
  /** @description Destination-chain step. For same-chain routes this mirrors `origin`. */
  destination: DeltaRouteStep;
  /** @description Bridge details. `null` for same-chain routes. */
  bridge: DeltaRouteBridge | null;
  /** @description Fee breakdown for this route. */
  fees: {
    /** @description Gas fee (single DeltaTokenAmount on the source chain). */
    gas: DeltaTokenAmount;
    /** @description Bridge fees (empty array for same-chain). */
    bridge: DeltaTokenAmount[];
  };
};

/** @description v2 price response: route-based, cross-chain first. */
export type DeltaPriceV2 = {
  /** @description Unique request ID for tracing. */
  id: string;
  /** @description Order side. */
  side: 'SELL' | 'BUY';
  /** @description Token the user trades (identity only — amounts live in route.origin.input). */
  inputToken: DeltaPriceToken;
  /** @description Token the user receives (identity only — amounts live in route.destination.output). */
  outputToken: DeltaPriceToken;
  /** @description Recommended route with full amounts and bridge details. */
  route: DeltaRoute;
  /** @description Partner info attached to this price. */
  partner: {
    name: string;
    /** @description Partner fee in percent (e.g. 0.12 = 0.12%). */
    feePercent: number;
  };
  /** @description Address to approve for spending the input token. */
  spender: Address;
  /** @description Alternative routes (other bridges). Each is a full DeltaRoute. */
  alternatives: DeltaRoute[];
};

/** @description A flat bridge-routes entry returned by GET /delta/v2/prices/bridge-routes. (better version of v1 prices/bridge-info) */
export type BridgeRoute = {
  srcChainId: number;
  destChainId: number;
  /** @description Output tokens supported on the dest chain for this src→dest pair. */
  tokens: Address[];
};

/* ------------------------------------------------------------------ */
/* Orders v2 response shape (different from v1's DeltaAuction)         */
/* ------------------------------------------------------------------ */

/** @description Integrator-facing order status returned by v2 order endpoints. */
const DeltaOrderStatusV2Map = {
  Pending: 'PENDING',
  AwaitingSignature: 'AWAITING_SIGNATURE',
  Active: 'ACTIVE',
  Suspended: 'SUSPENDED',
  Cancelling: 'CANCELLING',
  Bridging: 'BRIDGING',
  Completed: 'COMPLETED',
  Failed: 'FAILED',
  Expired: 'EXPIRED',
  Cancelled: 'CANCELLED',
  Refunded: 'REFUNDED',
} as const;

export type DeltaOrderStatusV2 =
  (typeof DeltaOrderStatusV2Map)[keyof typeof DeltaOrderStatusV2Map];

/** @description `OnChainOrderType` plus the synthetic `FillableOrder` label, used when a Standard `Order` is `partiallyFillable`. */
export type DeltaOnChainOrderTypeReported = OnChainOrderType | 'FillableOrder';

/** @description Token side on an order. SELL provides an explicit `amount`; BUY provides expected/executed amounts. */
export type DeltaTokenSide =
  | {
      chainId: number;
      token: Address;
      amount: string;
    }
  | {
      chainId: number;
      token: Address;
      expectedAmount: string | null;
      executedAmount: string | null;
    };

/** @description A single transaction entry on a v2 order. */
export type DeltaTransactionV2 = {
  originTx: string;
  destinationTx: string | null;
  /** @description Filled percent of the slice (0–100). */
  filledPercent: number;
  spentAmount: string | null;
  receivedAmount: string | null;
};

/** @description Order shape returned by GET /v2/orders, /v2/orders/:id, /v2/orders/hash/:hash. */
export type DeltaOrderV2Response = {
  id: string;
  status: DeltaOrderStatusV2;
  side: 'SELL' | 'BUY';
  type: DeltaOrderType;
  onChainOrderType: DeltaOnChainOrderTypeReported | null;
  input: DeltaTokenSide;
  output: DeltaTokenSide;
  owner: Address;
  beneficiary: Address;
  orderHash: string | null;
  partner: string;
  order: DeltaOrderUnion;
  transactions: DeltaTransactionV2[];
  /** @description ISO datetime string. */
  createdAt: string | null;
  /** @description ISO datetime string. */
  updatedAt: string | null;
  /** @description ISO datetime string. */
  expiresAt: string | null;
};
