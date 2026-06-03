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

`constructFullSDK` exposes namespaced methods: `sdk.delta.*`, `sdk.swap.*`, `sdk.quote.*`, etc.

## Provider Adapters (`src/helpers/providers/`)

Each file exports `constructContractCaller(provider, account)` → `ContractCallerFunctions<TxResponse>`:
- `viem.ts` — viem `PublicClient` + `WalletClient` (`Hex` tx response)
- `ethers.ts` — ethersv5 provider/signer (`ContractTransaction` tx response)
- `ethersV6.ts` — ethersv6 provider/signer
- `web3.ts` — Web3.js

## Module Structure (`src/methods/`)

- `delta/` — Core feature: Delta auction orders (server-side order building, route-based pricing, paginated orders; see detail below)
- `swap/` — Token swap: rates, transaction building, approvals, balances
- `limitOrders/` — **Deprecated.** EIP-712 signed limit orders
- `nftOrders/` — **Deprecated.** EIP-712 signed NFT orders
- `quote/` — Unified `/v2/quote` endpoint (mode-selectable Delta v2 price / market / fallback)

## Composable Constructor Pattern

Every feature module exports a `constructXxx(options) => XxxFunctions` factory:
- `options` is `ConstructProviderFetchInput<T, D>` or a `Pick` of it
- `D` selects required caller methods: `'transactCall'` | `'signTypedDataCall'` | both
- Generic `<T>` = transaction response type (e.g., `TxHash`, `ethers.ContractTransaction`)
- Non-generic constructors use `any` (for API-only flows that don't return tx responses)
- All Delta constructors are combined in `constructAllDeltaOrdersHandlers` in `src/methods/delta/index.ts`. **Convention:** bind each `constructXxx(options)` call to a named local (`const deltaPrice = constructGetDeltaPrice(options)`), then spread those locals into the returned object — don't spread the constructor calls inline. (Matches `constructAllLimitOrdersHandlers`.)

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

Delta is the SDK's core feature: server-built, on-chain auction orders. Exposed as `sdk.delta.*` and via bare top-level exports.

> **History.** Delta was once a **v1** with local EIP-712 order building and per-family sign functions. It was replaced (breaking) by the server-built **v2** described here — `sdk.delta.*` *is* v2, with a single set of bare top-level exports. All Delta URLs use the `/delta/v2/...` prefix.

Order building is **server-side**: `POST /delta/v2/orders/build` returns a `BuiltDeltaOrder { toSign, orderHash }`; a single `signDeltaOrder(builtOrder)` signs every family; `post*` submits the signed order. Partner fee is passed as raw params (`partner`, `partnerFeeBps`) to the server rather than resolved locally. Reads are paginated (`PaginatedResponse<DeltaAuction>`), price is route-based.

### Order families

All built via `POST /delta/v2/orders/build` with an `orderType` field:

| Family | `orderType` / `onChainOrderType` | Build params | Build fn |
|--------|-------------------|-----------|----------|
| Standard | `'Order'` | `BuildDeltaOrderParams` | `buildDeltaOrder` |
| External | `'ExternalOrder'` | `BuildExternalDeltaOrderParams` (adds `handler`, `data`) | `buildExternalDeltaOrder` |
| TWAP Sell | `'TWAPOrder'` | `BuildTWAPSellDeltaOrderParams` | `buildTWAPDeltaOrder` |
| TWAP Buy | `'TWAPBuyOrder'` | `BuildTWAPBuyDeltaOrderParams` | `buildTWAPDeltaOrder` |
| Productive | `'ProductiveOrder'` | _read-only_ — no SDK builder (server-produced) | — |

`'FillableOrder'` is also a key in `OnChainOrderMap`/`OnChainOrderType`, mapping to the same `DeltaAuctionOrder` shape as `'Order'`. It is not a separate buildable family — it's the `onChainOrderType` the server reports when a Standard order is `partiallyFillable`. Only surfaces (read-only) on the way back through the read paths.

Submit orchestrators (`constructSubmitDeltaOrder`, `constructSubmitExternalDeltaOrder`, `constructSubmitTWAPDeltaOrder`) in `index.ts` wrap build→sign→post. Productive orders surface only through the read paths (`getDeltaOrders*` / `getDeltaOrderById*`).

### Key Files

| File | Constructor | Purpose | Generic? |
|------|-------------|---------|----------|
| `index.ts` | `constructAllDeltaOrdersHandlers`, `constructSubmit{Delta,External,TWAP}Order`, `constructSignDeltaOrder` | Composite: orchestrates all modules, defines `DeltaOrderHandlers<T>`, hosts the single `signDeltaOrder` (signs any `BuiltDeltaOrder`), re-exports every leaf module | `allHandlers`: `<T>` |
| `buildDeltaOrder.ts` | `constructBuildDeltaOrder` | POST `/v2/orders/build` → `BuiltDeltaOrder` | No |
| `buildExternalDeltaOrder.ts` | `constructBuildExternalDeltaOrder` | Same, `orderType: 'ExternalOrder'` | No |
| `buildTWAPDeltaOrder.ts` | `constructBuildTWAPDeltaOrder` | Same, `orderType: 'TWAPOrder'` / `'TWAPBuyOrder'` | No |
| `postDeltaOrder.ts` / `postExternalDeltaOrder.ts` / `postTWAPDeltaOrder.ts` | `constructPost*DeltaOrder` | POST `/v2/orders` → `DeltaAuction` | No |
| `getDeltaPrice.ts` | `constructGetDeltaPrice` | GET `/delta/v2/prices` → `DeltaPrice` (route-based: `route` + `alternatives`; cross-chain handled in-route via `destChainId`) | No |
| `getDeltaOrders.ts` | `constructGetDeltaOrders` | `getDeltaOrders` (paginated list), `getDeltaOrderById`, `getDeltaOrderByHash`, `getRequiredBalanceForDeltaOrders`. Reads return `DeltaAuction`. | No |
| `cancelDeltaOrder.ts` | `constructCancelDeltaOrder` | `signCancelDeltaOrderRequest` → `postCancelDeltaOrderRequest` → `cancelDeltaOrders` (orchestrator). POST `/v2/orders/cancel`. | No (`any`) |
| `getBridgeRoutes.ts` | `constructGetBridgeRoutes` | `getBridgeRoutes` (flat `BridgeRoute[]`) + `getBridgeProtocols` | No |
| `isTokenSupportedInDelta.ts` | `constructIsTokenSupportedInDelta` | GET `/v2/prices/is-token-supported` → `boolean` | No |
| `getAgentsList.ts` | `constructGetAgentsList` | GET `/v2/agents/list/:chainId` → `string[]` | No |
| `getDeltaContract.ts` | `constructGetDeltaContract` | Resolve ParaswapDelta contract address | No |
| `getPartnerFee.ts` | `constructGetPartnerFee` | Fetch partner fee info (cached per partner in a `Map`) | No |
| `approveForDelta.ts` | `constructApproveTokenForDelta` | ERC-20 `approve` with ParaswapDelta as spender | `<T>` |
| `preSignDeltaOrder.ts` / `preSignExternalDeltaOrder.ts` / `preSignTWAPDeltaOrder.ts` | `constructPreSign*DeltaOrder` | On-chain `setPreSignature` + order hashing helpers (`produceDeltaOrderHash`, etc.) | `<T>` |
| `deltaTokenModule.ts` | `constructDeltaTokenModule` | On-chain `cancelAndWithdrawDeltaOrder`, `withdrawDeltaNative`, `depositNativeAndPreSign`, `depositNativeAndPreSignDeltaOrder` | `<T>` |

The on-chain modules (`preSign*`, `deltaTokenModule`, `approveForDelta`) and the local EIP-712 hashing helpers (`helpers/build*OrderData`, `helpers/misc`) are retained from the original delta module — they back the on-chain flows (pre-signing, native deposit, cancel-and-withdraw) that complement server-side building.

### Types

- **`src/methods/delta/types.ts`** (v2 surface) — `BuiltDeltaOrder`, `DeltaPrice` (+ `DeltaRoute` / `DeltaRouteStep` / `DeltaRouteBridge` / `DeltaRouteBridgeContractParams`, `DeltaPriceToken`, `DeltaTokenAmount`, `BridgeTag`, `BridgeRoute`), `DeltaAuction<T>` (the envelope returned by **every** read/post — `status: DeltaOrderStatus`, `input`/`output: DeltaTokenSide`, flat `transactions: DeltaTransaction`, explicit `side`; generic over `onChainOrderType`, narrowing `order` to `OnChainOrderMap[T]`), `DeltaOrderStatus`, `DeltaTokenSide`, `DeltaTransaction`.
- **`src/methods/delta/helpers/types.ts`** (shared on-chain order structs) — `DeltaAuctionOrder`, `ExternalDeltaOrder`, `TWAPDeltaOrder`, `TWAPBuyDeltaOrder`, `ProductiveDeltaOrder`, `Bridge`, `OnChainOrderMap` (Standard/Fillable/External/TWAP Sell/TWAP Buy/Productive), `OnChainOrderType`, `TWAPOnChainOrderType`, `DeltaOrderUnion`, `DeltaOrderType` (`'MARKET' | 'LIMIT'`), `DeltaAmounts*`, `UnifiedDeltaOrderData`, `OrderKind` / `SwapSideToOrderKind`.
- `PaginatedResponse<T>` lives in `src/types.ts`.

### Delta Helpers (`src/methods/delta/helpers/`)
- `types.ts` — shared order-struct types (above).
- `buildDeltaOrderData.ts` / `buildExternalOrderData.ts` / `buildTWAPOrderData.ts` — local EIP-712 typed-data builders + `produceDeltaOrderTypedData`, `SignableDeltaOrderData` / `SignableExternalOrderData` / `SignableTWAPOrderData`, `DELTA_DEFAULT_EXPIRY` (consumed by `preSign*` / `deltaTokenModule`).
- `buildCancelDeltaOrderData.ts` — `SignableCancelDeltaOrderData`, `CancelDeltaOrderData`.
- `misc.ts` — `sanitizeDeltaOrderData` (strips extra fields before signing/hashing), `applySlippage`, `resolvePartnerFee`, `producePartnerAndFee`.
- `orders.ts` — single `OrderHelpers` object `{ checks, getters }` (no v1/v2 split):
  - `checks`: order-struct guards (`isDeltaOrder`, `isExternalOrder`, `isTWAPOrder` / `isTWAPSellOrder` / `isTWAPBuyOrder`, `isProductiveOrder`, `isOrderCrosschain`); auction discriminants (`isDeltaAuction`, `isExternalAuction`, `isTWAPAuction` / `isTWAPSellAuction` / `isTWAPBuyAuction`, `isProductiveAuction`, `isFillableAuction`); status guards over the v2 envelope (`isCompletedAuction`, `isFailedAuction`, `isCanceledAuction`, `isExpiredAuction`, `isPendingAuction`, `isPartiallyExecutedAuction`).
  - `getters`: `getUnifiedDeltaOrderData`, `getAuctionAmounts` (`{ expected, executed }`), `getAuctionTokenAddresses`, `getAuctionSrcChainId` / `getAuctionDestChainId`, `getAuctionSwapSide` (reads `auction.side`), `getTransactionAmounts`, `getFilledPercent`; plus order-level `getOrderTokenAddresses`, `getSwapSideFromDeltaOrder`, `getSwapSideFromTwapOrderType`, `getExpectedTwapSrcAmount` / `getExpectedTwapDestAmount` / `getExpectedTwapOrderAmounts`.
- `abi.ts` — shared ABI fragments.

### Core Types (`src/`)
- `types.ts` — `ConstructProviderFetchInput`, `ContractCallerFunctions`, `TxSendOverrides`, `PaginatedResponse<T>`
- `helpers/misc.ts` — `ExtractAbiMethodNames<T>`
- `sdk/partial.ts` — `constructPartialSDK`, `InferWithTxResponse` type tuple

### `OnChainOrderType` note

`'ProductiveOrder'` is part of `OnChainOrderType` and `OnChainOrderMap` — `DeltaAuction<'ProductiveOrder'>` resolves to `ProductiveDeltaOrder`. The type is wired through the public surface, but **no build/sign/post helpers** exist for productive orders (`constructSubmit*` / `construct(Build|Post)*` cover only `Order`, `ExternalOrder`, `TWAPOrder`, `TWAPBuyOrder`). Productive orders are read-only from the SDK's perspective. Sides are inferred as `SELL` (productive orders carry no `OrderKind`).

`'FillableOrder'` is likewise a member of `OnChainOrderType`/`OnChainOrderMap`, resolving (via `DeltaAuction<'FillableOrder'>`) to the same `DeltaAuctionOrder` shape as `'Order'`. It's the `onChainOrderType` the server reports for a `partiallyFillable` Standard order — there is no separate builder. Consumers narrowing a `DeltaAuction` should treat `onChainOrderType === 'FillableOrder'` the same as `'Order'` (`isDeltaAuction(a) || isFillableAuction(a)`).

## Quote Module (`src/methods/quote/`)

`constructGetQuote` → `getQuote` hits **`GET /v2/quote`**. Same overloaded, `mode`-based shape as before (`mode: 'delta' | 'market' | 'all'`, with `'all'` returning Delta pricing or a market `fallbackReason`) — the only v2 change is that the delta side is the v2 `DeltaPrice` (route-based) from `methods/delta/types`, not the old v1 `DeltaPrice`/`BridgePrice`. Return types (`QuoteWithDeltaPrice`, `QuoteWithBridgePrice`, `QuoteWithDeltaPriceAndBridgePrice`, `QuoteWithMarketPrice`, `QuoteWithMarketPriceAsFallback`) and all function overloads are preserved. Exposed as `sdk.quote.getQuote`.

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
- Cross-chain detection: `isOrderCrosschain(order)` checks `bridge.destinationChainId !== 0`
- **Commit messages**: `prefix/what was done` — `prefix` is the file, function, or component that was changed. Examples: `OrderDetails/added button`, `useDeltaPrice/migrate to v2 route fields`. Do NOT add a `Co-Authored-By: Claude` trailer.
