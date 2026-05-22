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

Three order families, each with build/sign/post/preSign constructors:

| Family | `onChainOrderType` | Order type | Build input key |
|--------|-------------------|-----------|-----------------|
| Standard | `'Order'` | `DeltaAuctionOrder` | `buildDeltaOrder` |
| External | `'ExternalOrder'` | `ExternalDeltaOrder` | `buildExternalDeltaOrder` (has `handler` field instead of `bridge`) |
| TWAP Sell | `'TWAPOrder'` | `TWAPDeltaOrder` | `buildTWAPDeltaOrder` |
| TWAP Buy | `'TWAPBuyOrder'` | `TWAPBuyDeltaOrder` | `buildTWAPDeltaOrder` |

Each family has four files: `build*`, `sign*`, `post*`, `preSign*`. High-level orchestrators (`constructSubmitDeltaOrder`, `constructSubmitExternalDeltaOrder`, `constructSubmitTWAPDeltaOrder`) in `index.ts` wrap build→sign→post.

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
- `types.ts` — `DeltaAuctionOrder`, `Bridge`, `DeltaAuction<T>`, `OnChainOrderMap`, `DeltaAuctionStatus`, `BridgeMetadata`, `BridgeStatus`, `OnChainOrderType` (includes `'ProductiveOrder'`), `DeltaAuctionUnion`
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

Exposed as `sdk.deltaV2.*` on the full/simple SDK. Ships alongside v1 (non-breaking). All URLs use the `/delta/v2/...` prefix.

### Key differences from v1

| Concern | v1 | v2 |
|---------|----|----|
| Order building | Local EIP-712 computation | `POST /delta/v2/orders/build` → returns `BuiltDeltaOrderV2 { toSign, orderHash }` |
| Signing | Family-specific sign functions | Single `signDeltaOrderV2(builtOrder)` for all order types |
| Price response | `DeltaPrice` / `BridgePrice` overload | `DeltaPriceV2` with `route: DeltaRoute` and `alternatives: DeltaRoute[]` |
| Order list | Flat array | `PaginatedResponse<DeltaOrderV2Response>` envelope |
| Partner fee | Resolved locally via `getPartnerFee` | Passed as raw params to server (`partner`, `partnerAddress`, `partnerFeeBps`) |

### Order families

Same three families as v1, all built via `POST /delta/v2/orders/build` with an `orderType` field:

| Family | `orderType` | Build params type |
|--------|-------------|-------------------|
| Standard | `'Order'` | `BuildDeltaOrderV2Params` |
| External | `'ExternalOrder'` | `BuildExternalDeltaOrderV2Params` (adds `handler`, `data`) |
| TWAP Sell | `'TWAPOrder'` | `BuildTWAPSellDeltaOrderV2Params` |
| TWAP Buy | `'TWAPBuyOrder'` | `BuildTWAPBuyDeltaOrderV2Params` |

### Key files

| File | Constructor | Purpose |
|------|-------------|---------|
| `index.ts` | `constructAllDeltaV2OrdersHandlers`, `constructSubmitDeltaOrderV2` etc. | Composite: orchestrates all v2 modules, defines `DeltaV2OrderHandlers<T>`. Submit orchestrators wrap build→sign→post. |
| `buildDeltaOrderV2.ts` | `constructBuildDeltaOrderV2` | POST to `/v2/orders/build` → `BuiltDeltaOrderV2` |
| `buildExternalDeltaOrderV2.ts` | `constructBuildExternalDeltaOrderV2` | Same, `orderType: 'ExternalOrder'` |
| `buildTWAPDeltaOrderV2.ts` | `constructBuildTWAPDeltaOrderV2` | Same, `orderType: 'TWAPOrder'` or `'TWAPBuyOrder'` |
| `getDeltaPriceV2.ts` | `constructGetDeltaPriceV2` | GET `/v2/prices` → `DeltaPriceV2` |
| `getDeltaOrdersV2.ts` | `constructGetDeltaOrdersV2` | `getDeltaOrdersV2` (paginated list), `getDeltaOrderByIdV2`, `getDeltaOrderByHashV2` |
| `postDeltaOrderV2.ts` | `constructPostDeltaOrderV2` | POST `/v2/orders` → `DeltaAuction<'Order'>` |
| `cancelDeltaOrderV2.ts` | `constructCancelDeltaOrderV2` | Sign + POST `/v2/orders/cancel` |
| `getBridgeRoutes.ts` | `constructGetBridgeRoutes` | `getBridgeRoutes` (flat `BridgeRoute[]`) + `getBridgeProtocolsV2` |
| `isTokenSupportedInDeltaV2.ts` | `constructIsTokenSupportedInDeltaV2` | GET `/v2/prices/is-token-supported` → `boolean` |
| `getAgentsListV2.ts` | `constructGetAgentsListV2` | GET `/v2/agents/list/:chainId` → `string[]` |

On-chain methods (preSign, approve, deltaTokenModule) and `getPartnerFee`/`getDeltaContract` are **reused from v1** — no duplication.

### V2 Types (`src/methods/deltaV2/types.ts`)

- `BuiltDeltaOrderV2` — server build response: `{ toSign: { domain, types, value }, orderHash }`
- `DeltaPriceV2` — v2 price response with `route: DeltaRoute` and `alternatives: DeltaRoute[]`
- `DeltaRoute` / `DeltaRouteStep` / `DeltaRouteBridge` / `DeltaRouteBridgeContractParams` — route shape
- `DeltaPriceToken` / `DeltaTokenAmount` — token identity and amount with USD value
- `BridgeTag` — `'recommended' | 'fastest' | 'best-return'`
- `BridgeRoute` — flat bridge route entry `{ srcChainId, destChainId, tokens }`
- `DeltaOrderV2Response` — order shape from v2 order endpoints (different from v1's `DeltaAuction`)
- `DeltaOrderStatusV2` — integrator-facing status enum values
- `DeltaOrderTypeV2` — `'MARKET' | 'LIMIT'`
- `DeltaOnChainOrderTypeReported` — `OnChainOrderType | 'FillableOrder'`
- `DeltaTokenSide` / `DeltaTransactionV2` — order input/output and transaction entry types

`PaginatedResponse<T>` lives in `src/types.ts` (shared).

### `OnChainOrderType` note

`'ProductiveOrder'` is part of `OnChainOrderType` (in `delta/helpers/types.ts`) but is **not** in `OnChainOrderMap` (no SDK build support yet). Generics constrained to `keyof OnChainOrderMap` (`DeltaAuction<T>`, `getDeltaOrders`) will not accept `'ProductiveOrder'` as `T`.

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
