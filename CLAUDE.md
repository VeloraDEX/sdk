# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Velora SDK — Architecture Guide

TypeScript SDK for the Paraswap/Velora Delta protocol (on-chain order-based DEX).

## Commands

```bash
yarn build          # compile to dist/
yarn test           # run Jest tests (testEnvironment: node)
yarn lint           # dts lint
yarn start          # watch mode (dts watch)
npx tsc --noEmit    # type-check without emitting
```

Run a single test file:
```bash
yarn test --testPathPattern=src/path/to/file.test.ts
```

## SDK Entry Points (`src/sdk/`)

Three ways to construct the SDK:

| File | Export | Use When |
|------|--------|----------|
| `simple.ts` | `constructSimpleSDK(options, providerOptions?)` | Most consumers — handles fetcher/provider wiring automatically |
| `full.ts` | `constructFullSDK<TxResponse>(config)` | Full control over all methods, namespaced (`sdk.delta.*`, `sdk.swap.*`) |
| `partial.ts` | `constructPartialSDK<Config, Funcs>(config, ...funcs)` | Pick only the constructors you need; TypeScript infers the return type |

`constructSimpleSDK` accepts `{ axios }`, `{ fetch }`, or `{ fetcher }` for the network layer, and optionally `{ ethersProviderOrSigner | ethersV6ProviderOrSigner | viemClient | web3, account }` for signing/transacting.

`constructFullSDK` exposes namespaced methods: `sdk.delta.*` (v1), `sdk.deltaV2.*` (v2), `sdk.swap.*`, etc.

## Provider Adapters (`src/helpers/providers/`)

Each file exports `constructContractCaller(provider, account)` → `ContractCallerFunctions<TxResponse>`:
- `viem.ts` — viem `PublicClient` + `WalletClient` (`Hex` tx response)
- `ethers.ts` — ethersv5 provider/signer (`ContractTransaction` tx response)
- `ethersV6.ts` — ethersv6 provider/signer
- `web3.ts` — Web3.js

## Module Structure (`src/methods/`)

- `delta/` — Core feature: Delta auction orders v1 (see detail below)
- `deltaV2/` — Delta v2: server-side order building, route-based pricing, paginated orders (see detail below)
- `swap/` — Token swap: rates, transaction building, approvals, balances
- `limitOrders/` — **Deprecated.** EIP-712 signed limit orders
- `nftOrders/` — **Deprecated.** EIP-712 signed NFT orders
- `quote/` — Unified quote endpoint

## Composable Constructor Pattern

Every feature module exports a `constructXxx(options) => XxxFunctions` factory:
- `options` is `ConstructProviderFetchInput<T, D>` or a `Pick` of it
- `D` selects required caller methods: `'transactCall'` | `'signTypedDataCall'` | both
- Generic `<T>` = transaction response type (e.g., `TxHash`, `ethers.ContractTransaction`)
- Non-generic constructors use `any` (for API-only flows that don't return tx responses)
- All Delta constructors are combined in `constructAllDeltaOrdersHandlers` in `src/methods/delta/index.ts`

## Key Patterns

### On-Chain Transaction (reference: `src/methods/delta/preSignDeltaOrder.ts`)
1. Define minimal ABI inline as `const XxxAbi = [...] as const`
2. Extract method names: `type AvailableMethods = ExtractAbiMethodNames<typeof XxxAbi>`
3. Constructor takes `ConstructProviderFetchInput<T, 'transactCall'>`
4. Get contract address: `const { getDeltaContract } = constructGetDeltaContract(options)`
5. Call contract: `options.contractCaller.transactCall<AvailableMethods>({ address, abi, contractMethod, args, overrides })`

### API Call (reference: `src/methods/delta/cancelDeltaOrder.ts` sign/post methods)
1. Sign EIP-712 typed data via `options.contractCaller.signTypedDataCall(typedData)`
2. POST to API via `options.fetcher<ResponseType>({ url, method, data })`

## Delta Module (`src/methods/delta/`)

Four order families with build/sign/post/preSign constructors, plus a read-only Productive family:

| Family | `onChainOrderType` | Order type | Build input key |
|--------|-------------------|-----------|-----------------|
| Standard | `'Order'` | `DeltaAuctionOrder` | `buildDeltaOrder` |
| External | `'ExternalOrder'` | `ExternalDeltaOrder` | `buildExternalDeltaOrder` (has `handler` field instead of `bridge`) |
| TWAP Sell | `'TWAPOrder'` | `TWAPDeltaOrder` | `buildTWAPDeltaOrder` |
| TWAP Buy | `'TWAPBuyOrder'` | `TWAPBuyDeltaOrder` | `buildTWAPDeltaOrder` |
| Productive | `'ProductiveOrder'` | `ProductiveDeltaOrder` | _read-only_ — no SDK builder (server-produced) |

`'FillableOrder'` is also a key in `OnChainOrderMap`/`OnChainOrderType`, mapping to the same `DeltaAuctionOrder` shape as `'Order'`. It is not a separate buildable family — it's the `onChainOrderType` the server reports when a Standard order is `partiallyFillable`. Built/signed/posted exactly as a Standard `Order`; only surfaces (read-only) on the way back through the read paths.

The first four families have four files each: `build*`, `sign*`, `post*`, `preSign*`. High-level orchestrators (`constructSubmitDeltaOrder`, `constructSubmitExternalDeltaOrder`, `constructSubmitTWAPDeltaOrder`) in `index.ts` wrap build→sign→post. Productive orders surface only through the read paths (`getDeltaOrders*` / `getDeltaOrderById*` / `DeltaAuctionUnion`).

### Key Files

| File | Constructor | Purpose | Generic? | Pattern |
|------|-------------|---------|----------|---------|
| `index.ts` | `constructSubmitDeltaOrder`, `constructAllDeltaOrdersHandlers` | Composite: orchestrates all modules, defines `DeltaOrderHandlers<T>` | `submitDelta`: No, `allHandlers`: `<T>` | Composite |
| `buildDeltaOrder.ts` | `constructBuildDeltaOrder` | Build `SignableDeltaOrderData` from params (fetches contract + partner fee, then local computation) | No | API fetch + local |
| `signDeltaOrder.ts` | `constructSignDeltaOrder` | EIP-712 sign order via `signTypedDataCall` → returns signature `string` | No (`any`) | `signTypedDataCall` |
| `postDeltaOrder.ts` | `constructPostDeltaOrder` | POST signed order to API → `DeltaOrderApiResponse` | No | `fetcher` POST |
| `getDeltaPrice.ts` | `constructGetDeltaPrice` | Fetch quote/price from API. Overloaded: returns `DeltaPrice` (same-chain) or `BridgePrice` (cross-chain when `destChainId` present) | No | `fetcher` GET |
| `getDeltaOrders.ts` | `constructGetDeltaOrders` | Query orders from API: `getDeltaOrderById`, `getDeltaOrderByHash`, `getDeltaOrders` (list), `getRequiredBalanceForDeltaLimitOrders` | No | `fetcher` GET |
| `getDeltaContract.ts` | `constructGetDeltaContract` | Resolve ParaswapDelta contract address from contracts endpoint | No | `fetcher` GET |
| `approveForDelta.ts` | `constructApproveTokenForDelta` | ERC-20 `approve` with ParaswapDelta as spender (delegates to `approveTokenMethodFactory`) | `<T>` | `transactCall` |
| `preSignDeltaOrder.ts` | `constructPreSignDeltaOrder` | On-chain `setPreSignature` + order hashing helpers (`hashDeltaOrderTypedData`, `hashDeltaOrder`, `preSignDeltaOrder`) | `<T>` | `transactCall` |
| `cancelDeltaOrder.ts` | `constructCancelDeltaOrder` | API cancel: `signCancelLimitDeltaOrderRequest` → `postCancelLimitDeltaOrderRequest` → `cancelLimitDeltaOrders` (orchestrator) | No (`any`) | `signTypedDataCall` + `fetcher` POST |
| `deltaTokenModule.ts` | `constructDeltaTokenModule` | On-chain `cancelAndWithdrawDeltaOrder`, `withdrawDeltaNative`, `depositNativeAndPreSign`, `depositNativeAndPreSignDeltaOrder` | `<T>` | `transactCall` |
| `getPartnerFee.ts` | `constructGetPartnerFee` | Fetch partner fee info (internally cached per partner in a `Map`) | No | `fetcher` GET |
| `getBridgeInfo.ts` | `constructGetBridgeInfo` | `getBridgeInfo` (supported routes) + `getBridgeProtocols` | No | `fetcher` GET |
| `isTokenSupportedInDelta.ts` | `constructIsTokenSupportedInDelta` | Check if a token is supported → `boolean` | No | `fetcher` GET |
| `constants.ts` | — | `DEFAULT_BRIDGE` constant (all-zero values for same-chain orders) | — | — |

### Delta Helpers (`src/methods/delta/helpers/`)
- `types.ts` — `DeltaAuctionOrder`, `ExternalDeltaOrder`, `ProductiveDeltaOrder`, `TWAPDeltaOrder`, `TWAPBuyDeltaOrder`, `Bridge`, `DeltaAuction<T>`, `OnChainOrderMap` (Standard/External/TWAP Sell/TWAP Buy/Productive families, plus the `FillableOrder` variant of Standard), `DeltaAuctionStatus`, `BridgeMetadata`, `BridgeStatus`, `OnChainOrderType`, `DeltaOrderType` (`'MARKET' | 'LIMIT'`, shared by v1 & v2), `DeltaAuctionUnion` (= `DeltaAuctionDelta | DeltaAuctionFillable | DeltaAuctionExternal | DeltaAuctionTWAP | DeltaAuctionTWAPBuy | DeltaAuctionProductive`)
- `buildDeltaOrderData.ts` — `buildDeltaSignableOrderData`, `produceDeltaOrderTypedData`, `SignableDeltaOrderData`, `BuildDeltaOrderDataInput`, `DELTA_DEFAULT_EXPIRY`
- `buildCancelDeltaOrderData.ts` — `buildCancelDeltaOrderSignableData`, `SignableCancelDeltaOrderData`, `CancelDeltaOrderData`
- `buildTWAPOrderData.ts` — `buildTWAPSignableOrderData`, `SignableTWAPOrderData`, `BuildTWAPOrderDataInput`
- `buildExternalOrderData.ts` — `buildExternalSignableOrderData`, `SignableExternalOrderData`
- `misc.ts` — `sanitizeDeltaOrderData` (strips extra fields before signing/hashing), `applySlippage`, `resolvePartnerFee`
- `orders.ts` — `OrderHelpers` namespace with `.checks` (type guards: `isDeltaOrder`, `isTWAPOrder`, `isExternalOrder`, `isOrderCrosschain`, `isExecutedAuction`, etc.) and `.getters` (`getUnifiedDeltaOrderData`, `getAuctionAmounts`, `getTwapAuctionAmounts`, `getFilledPercent`, etc.)
- `abi.ts` — shared ABI fragments

### Core Types (`src/`)
- `types.ts` — `ConstructProviderFetchInput`, `ContractCallerFunctions`, `TxSendOverrides`, `PaginatedResponse<T>`
- `helpers/misc.ts` — `ExtractAbiMethodNames<T>`
- `sdk/partial.ts` — `constructPartialSDK`, `InferWithTxResponse` type tuple

## Delta V2 Module (`src/methods/deltaV2/`)

Exposed as `sdk.deltaV2.*` on the full/simple SDK, and as the **`DeltaV2` namespace** at the top of the package. Ships alongside v1 (non-breaking). All URLs use the `/delta/v2/...` prefix.

### Public access pattern — the `DeltaV2` namespace

`src/index.ts` re-exports the v2 surface as `export * as DeltaV2 from './methods/deltaV2'`. Inside the v2 folder, symbols use unsuffixed names (`constructBuildDeltaOrder`, `BuiltDeltaOrder`, `DeltaPrice`, …); consumers reach them as `DeltaV2.X`. This avoids top-level collisions with v1 (which also exports `DeltaPrice`, `constructBuildDeltaOrder`, etc.) while letting the v2 source live under the canonical names it will eventually inherit.

```ts
import { DeltaV2 } from '@velora-dex/sdk';

// runtime: DeltaV2.constructBuildDeltaOrder, DeltaV2.constructAllDeltaOrdersHandlers, ...
// types:   DeltaV2.DeltaPrice, DeltaV2.BuiltDeltaOrder, DeltaV2.DeltaRoute, ...
```

`import type { DeltaV2 } from '@velora-dex/sdk'` works the same way for type-only consumers (no runtime cost). Types live *inside* the namespace — destructuring at the import site (`const { DeltaPrice } = DeltaV2`) does not bring the type; alias via `type DeltaPrice = DeltaV2.DeltaPrice;` instead.

The migration story (1) v1 bare + DeltaV2 namespace, (2) flip to v2 bare + DeltaV1 backcompat, (3) drop v1 — is documented inline in [src/index.ts](src/index.ts) above the `export * as DeltaV2` line.

### Key differences from v1

| Concern | v1 | v2 |
|---------|----|----|
| Order building | Local EIP-712 computation | `POST /delta/v2/orders/build` → returns `DeltaV2.BuiltDeltaOrder { toSign, orderHash }` |
| Signing | Family-specific sign functions | Single `signDeltaOrder(builtOrder)` for all order types |
| Price response | `DeltaPrice` / `BridgePrice` overload | `DeltaV2.DeltaPrice` with `route: DeltaRoute` and `alternatives: DeltaRoute[]` |
| Order list | Flat array | `PaginatedResponse<DeltaV2.DeltaAuction>` envelope |
| Partner fee | Resolved locally via `getPartnerFee` | Passed as raw params to server (`partner`, `partnerAddress`, `partnerFeeBps`) |

### Order families

Same three families as v1, all built via `POST /delta/v2/orders/build` with an `orderType` field:

| Family | `orderType` | Build params type (under `DeltaV2.*`) |
|--------|-------------|-------------------|
| Standard | `'Order'` | `BuildDeltaOrderParams` |
| External | `'ExternalOrder'` | `BuildExternalDeltaOrderParams` (adds `handler`, `data`) |
| TWAP Sell | `'TWAPOrder'` | `BuildTWAPSellDeltaOrderParams` |
| TWAP Buy | `'TWAPBuyOrder'` | `BuildTWAPBuyDeltaOrderParams` |

### Key files

Symbol names below are as they appear **inside** the v2 folder (no V2 suffix). Through the namespace they are `DeltaV2.constructBuildDeltaOrder`, etc.

| File | Constructor | Purpose |
|------|-------------|---------|
| `index.ts` | `constructAllDeltaOrdersHandlers`, `constructSubmitDeltaOrder` etc. | Composite: orchestrates all v2 modules, defines `DeltaOrderHandlers<T>`. Submit orchestrators wrap build→sign→post. Re-exports every leaf module so `import * as DeltaV2` carries the full surface. |
| `buildDeltaOrder.ts` | `constructBuildDeltaOrder` | POST to `/v2/orders/build` → `BuiltDeltaOrder` |
| `buildExternalDeltaOrder.ts` | `constructBuildExternalDeltaOrder` | Same, `orderType: 'ExternalOrder'` |
| `buildTWAPDeltaOrder.ts` | `constructBuildTWAPDeltaOrder` | Same, `orderType: 'TWAPOrder'` or `'TWAPBuyOrder'` |
| `getDeltaPrice.ts` | `constructGetDeltaPrice` | GET `/v2/prices` → `DeltaPrice` |
| `getDeltaOrders.ts` | `constructGetDeltaOrders` | `getDeltaOrders` (paginated list), `getDeltaOrderById`, `getDeltaOrderByHash`, `getRequiredBalanceForDeltaOrders` (mirrors v1's `getRequiredBalanceForDeltaLimitOrders` under `/delta/v2/orders/fillablebalance/...`). Read endpoints return the v2 `DeltaAuction` (= `DeltaV2.DeltaAuction`). |
| `postDeltaOrder.ts` | `constructPostDeltaOrder` | POST `/v2/orders` → `DeltaAuction<'Order'>` (the v2 `DeltaV2.DeltaAuction`) |
| `cancelDeltaOrder.ts` | `constructCancelDeltaOrder` | `signCancelDeltaOrderRequest` → `postCancelDeltaOrderRequest` → `cancelDeltaOrders` (orchestrator). POSTs to `/v2/orders/cancel`. |
| `getBridgeRoutes.ts` | `constructGetBridgeRoutes` | `getBridgeRoutes` (flat `BridgeRoute[]`) + `getBridgeProtocols` |
| `isTokenSupportedInDelta.ts` | `constructIsTokenSupportedInDelta` | GET `/v2/prices/is-token-supported` → `boolean` |
| `getAgentsList.ts` | `constructGetAgentsList` | GET `/v2/agents/list/:chainId` → `string[]` |

On-chain methods (preSign, approve, deltaTokenModule) and `getPartnerFee`/`getDeltaContract` are **reused from v1** — no duplication. Inside the v2 folder they're imported from `../delta/*`.

### SDK wiring (`sdk/full.ts`, `sdk/simple.ts`)

Because v1 and v2 share unsuffixed names, the SDK assembly files import v2 either as a namespace (`import * as DeltaV2 from '../methods/deltaV2'`, used in `simple.ts`) or with local aliases that re-add the `V2` suffix (e.g., `constructAllDeltaOrdersHandlers as constructAllDeltaV2OrdersHandlers`, used in `full.ts`). Either form keeps the v1/v2 distinction visible in the wiring code. The pre-bound bag on `sdk.deltaV2.*` exposes methods under their unsuffixed names — `sdk.deltaV2.buildDeltaOrder()`, `sdk.deltaV2.postDeltaOrder()`, etc.

### V2 Types (`src/methods/deltaV2/types.ts`)

(Access via `DeltaV2.X` at the package boundary.)

- `BuiltDeltaOrder` — server build response: `{ toSign: { domain, types, value }, orderHash }`
- `DeltaPrice` — v2 price response with `route: DeltaRoute` and `alternatives: DeltaRoute[]`
- `DeltaRoute` / `DeltaRouteStep` / `DeltaRouteBridge` / `DeltaRouteBridgeContractParams` — route shape
- `DeltaPriceToken` / `DeltaTokenAmount` — token identity and amount with USD value
- `BridgeTag` — `'recommended' | 'fastest' | 'best-return'`
- `BridgeRoute` — flat bridge route entry `{ srcChainId, destChainId, tokens }`
- `DeltaAuction<T>` — the order shape returned by **every** v2 order method, both reads (`getDeltaOrders*` / `getDeltaOrderById*`) and posts (`postDeltaOrder` / `postExternalDeltaOrder` / `postTWAPDeltaOrder`). Generic over `onChainOrderType` exactly like v1's `DeltaAuction<T>` (distributes over `OnChainOrderType`, narrowing `order` to `OnChainOrderMap[T]`), but with the v2 base fields (`status: DeltaOrderStatus`, `input`/`output: DeltaTokenSide`, flat `transactions`, etc.) instead of v1's. Reached as `DeltaV2.DeltaAuction` — a distinct type from the top-level v1 `DeltaAuction`; v2 method files import it from `./types`, never from `../delta`.
- `DeltaOrderStatus` — integrator-facing status enum values
- `DeltaTokenSide` / `DeltaTransaction` — order input/output and transaction entry types

`PaginatedResponse<T>` lives in `src/types.ts` (shared, still exported bare from the top of the package).

### `OnChainOrderType` note

`'ProductiveOrder'` is part of `OnChainOrderType` and `OnChainOrderMap` — `DeltaAuction<'ProductiveOrder'>` (also exported as `DeltaAuctionProductive`) resolves to `ProductiveDeltaOrder`. The type is wired through the public surface, but **no build/sign/post helpers** exist for productive orders yet (`constructSubmit*` / `construct(Build|Sign|Post)*` cover only `Order`, `ExternalOrder`, `TWAPOrder`, `TWAPBuyOrder`). Productive orders are read-only from the SDK's perspective — produced and managed by the server. Sides are inferred as `SELL` (productive orders carry no `OrderKind`).

`'FillableOrder'` is likewise a member of `OnChainOrderType`/`OnChainOrderMap`, resolving (via `DeltaAuction<'FillableOrder'>`, also exported as `DeltaAuctionFillable` and included in `DeltaAuctionUnion`) to the same `DeltaAuctionOrder` shape as `'Order'`. It's the `onChainOrderType` the server reports for a `partiallyFillable` Standard order — there is no separate builder. Consumers narrowing a `DeltaAuction` (v1 or v2) should treat `onChainOrderType === 'FillableOrder'` the same as `'Order'`.

## Checklist: Adding a New On-Chain Method

1. Add ABI to the module file (inline `as const`)
2. Add `type AvailableMethods = ExtractAbiMethodNames<typeof Abi>`
3. Make constructor generic `<T>` if not already
4. Add `'transactCall'` to the `ConstructProviderFetchInput` `Pick`
5. Implement function using `options.contractCaller.transactCall<AvailableMethods>({...})`
6. Export function type + param types
7. Update `DeltaOrderHandlers<T>` in `src/methods/delta/index.ts` (make generic if was non-generic)
8. Add to `InferWithTxResponse` tuple in `src/sdk/partial.ts` (import + add to array)
9. Export new types from `src/index.ts`
10. Run `npx tsc --noEmit` to verify

## Solidity ABI: Order Struct Mapping

When writing inline ABI for functions that take the `Order` struct:

```
Order tuple (maps to DeltaAuctionOrder in TS):
  owner           → address
  beneficiary     → address
  srcToken        → address
  destToken       → address
  srcAmount       → uint256
  destAmount      → uint256
  expectedAmount  → uint256
  kind            → uint8 (enum OrderKind)
  metadata        → bytes32
  deadline        → uint256
  nonce           → uint256
  permit          → bytes
  partnerAndFee   → uint256
  bridge          → tuple (Bridge)
    protocolSelector    → bytes4
    destinationChainId  → uint64
    outputToken         → address
    scalingFactor       → uint32
    protocolData        → bytes

OrderWithSig tuple:
  order     → tuple (Order)
  signature → bytes
```

## Key Conventions
- Contract address is always resolved via `constructGetDeltaContract(options).getDeltaContract()`
- EIP-712 domain: `{ name: 'Portikus', version: '2.0.0', chainId, verifyingContract }`
- Order hash: computed via viem's `hashTypedData` in `produceDeltaOrderHash()`
- ABI style: always inline `const ... as const`, never imported from external ABI files
- Cross-chain detection: `isOrderCrosschain(order)` checks `bridge.destinationChainId !== 0`; `DEFAULT_BRIDGE` has all-zero values for same-chain orders
