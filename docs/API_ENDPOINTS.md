# API Endpoints Accessed by the SDK

Every HTTP call site in [`src/`](../src). The base is the `apiURL` config option, defaulting to
`https://api.velora.xyz` ([`src/constants.ts:15`](../src/constants.ts#L15)).

Organised into three supergroups — **Delta**, **Quote**, **The Rest** — each split by HTTP method.

Path segments in `{braces}` are interpolated variables; each distinct variant is listed as its own
endpoint where the variable changes the path shape (not merely its value).

---

## 1. Delta (`/v2/delta/…`)

Source: [`src/methods/delta/`](../src/methods/delta/)

### GET

| Path | Function | Source |
| --- | --- | --- |
| `/v2/delta/prices?srcToken&destToken&amount&srcDecimals&destDecimals&chainId&side&userAddress&beneficiary&partner&partnerFeeBps&destChainId&maxImpact&maxUSDImpact&includeAgents&excludeAgents&includeBridges&excludeBridges&allowBridgeAndSwap&degenMode` | `getDeltaPrice` | [`getDeltaPrice.ts:75`](../src/methods/delta/getDeltaPrice.ts#L75) |
| `/v2/delta/prices/bridge-routes?allowBridgeAndSwap&bridges` | `getBridgeRoutes` | [`getBridgeRoutes.ts:64`](../src/methods/delta/getBridgeRoutes.ts#L64) |
| `/v2/delta/prices/bridge-protocols` | `getBridgeProtocols` | [`getBridgeRoutes.ts:75`](../src/methods/delta/getBridgeRoutes.ts#L75) |
| `/v2/delta/prices/is-token-supported?token&chainId` | `isTokenSupportedInDelta` | [`isTokenSupportedInDelta.ts:40`](../src/methods/delta/isTokenSupportedInDelta.ts#L40) |
| `/v2/delta/orders?userAddress&page&limit&type&onChainOrderType&chainId&status` | `getDeltaOrders` | [`getDeltaOrders.ts:117`](../src/methods/delta/getDeltaOrders.ts#L117) |
| `/v2/delta/orders/{orderId}` | `getDeltaOrderById` | [`getDeltaOrders.ts:80`](../src/methods/delta/getDeltaOrders.ts#L80) |
| `/v2/delta/orders/hash/{orderHash}` | `getDeltaOrderByHash` | [`getDeltaOrders.ts:92`](../src/methods/delta/getDeltaOrders.ts#L92) |
| `/v2/delta/orders/fillablebalance/{chainId}/{userAddress}` | `getRequiredBalanceForDeltaOrders` | [`getDeltaOrders.ts:129`](../src/methods/delta/getDeltaOrders.ts#L129) |
| `/v2/delta/orders/fillablebalance/{chainId}/{userAddress}/{tokenAddress}` | `getRequiredBalanceForDeltaOrders` (token given) | [`getDeltaOrders.ts:131`](../src/methods/delta/getDeltaOrders.ts#L131) |
| `/v2/delta/agents/list/{chainId}` | `getAgentsList` | [`getAgentsList.ts:20`](../src/methods/delta/getAgentsList.ts#L20) |
| `/prices/partnerfee/{chainId}?partner&…` ⚠️ **not** under `/v2/delta` | `getPartnerFee` | [`getPartnerFee.ts:29`](../src/methods/delta/getPartnerFee.ts#L29) |

### POST

| Path | Body discriminator | Function | Source |
| --- | --- | --- | --- |
| `/v2/delta/orders/build` | `orderType: 'Order'`, `side: 'SELL' \| 'BUY'` | `buildDeltaOrder` | [`buildDeltaOrder.ts:57`](../src/methods/delta/buildDeltaOrder.ts#L57) |
| `/v2/delta/orders/build` | `orderType: 'ExternalOrder'` | `buildExternalDeltaOrder` | [`buildExternalDeltaOrder.ts:61`](../src/methods/delta/buildExternalDeltaOrder.ts#L61) |
| `/v2/delta/orders/build` | `orderType: 'TWAPOrder'`, `side: 'SELL'` | `buildTWAPDeltaOrder` | [`buildTWAPDeltaOrder.ts:103`](../src/methods/delta/buildTWAPDeltaOrder.ts#L103) |
| `/v2/delta/orders/build` | `orderType: 'TWAPBuyOrder'`, `side: 'BUY'` | `buildTWAPDeltaOrder` | [`buildTWAPDeltaOrder.ts:116`](../src/methods/delta/buildTWAPDeltaOrder.ts#L116) |
| `/v2/delta/orders?degenMode` | standard order | `postDeltaOrder` | [`postDeltaOrder.ts:42`](../src/methods/delta/postDeltaOrder.ts#L42) |
| `/v2/delta/orders` (no query) | external order | `postExternalDeltaOrder` | [`postExternalDeltaOrder.ts:25`](../src/methods/delta/postExternalDeltaOrder.ts#L25) |
| `/v2/delta/orders?degenMode` | TWAP sell / buy order | `postTWAPDeltaOrder` | [`postTWAPDeltaOrder.ts:34`](../src/methods/delta/postTWAPDeltaOrder.ts#L34) |
| `/v2/delta/orders/cancel` | `{ orderIds, signature, … }` | `postCancelDeltaOrderRequest` | [`cancelDeltaOrder.ts:88`](../src/methods/delta/cancelDeltaOrder.ts#L88) |

**Notes**

- `/v2/delta/orders/build` is a single server endpoint hit from four builders that differ only by the
  `orderType` in the request body.
- `/v2/delta/orders` likewise serves three posters; only the external-order poster omits the
  `degenMode` query param.
- `getPartnerFee` lives in the Delta module but targets the market-API `/prices/partnerfee/{chainId}`
  path, so it is the one Delta-module endpoint outside the `/v2/delta` prefix.
- The remaining Delta modules (`preSign*`, `deltaTokenModule`, `approveForDelta`) are on-chain calls
  via `contractCaller` — no HTTP.

---

## 2. Quote (`/v2/quote`)

Source: [`src/methods/quote/`](../src/methods/quote/)

### GET

| Path | Function | Source |
| --- | --- | --- |
| `/v2/quote?chainId&side&mode&…` | `getQuote` | [`getQuote.ts:126`](../src/methods/quote/getQuote.ts#L126) |

### POST

_None._

---

## 3. The Rest

### 3.1 Swap

Source: [`src/methods/swap/`](../src/methods/swap/)

#### GET

| Path | Function | Source |
| --- | --- | --- |
| `/prices?srcToken&destToken&chainId&version&…` | `getRate` | [`rates.ts:233`](../src/methods/swap/rates.ts#L233) |
| `/prices?route&chainId&version&…` (same endpoint; `route` replaces `srcToken`+`destToken`) | `getRateByRoute` | [`rates.ts:265`](../src/methods/swap/rates.ts#L265) |
| `/swap?amount&srcToken&destToken&route&chainId&version&…` | `getSwapTxData` | [`swapTx.ts:252`](../src/methods/swap/swapTx.ts#L252) |
| `/adapters/contracts?chainId&version` | `getContracts` / `getSpender` | [`spender.ts:45`](../src/methods/swap/spender.ts#L45) |
| `/adapters/list?chainId&version` | `getAdapters` | [`adapters.ts:37`](../src/methods/swap/adapters.ts#L37) |
| `/fiat/tokens/{chainId}?category` | `getTokens` | [`token.ts:51`](../src/methods/swap/token.ts#L51) |
| `/fiat/tokens/all?category` | `getAllTokens` | [`token.ts:72`](../src/methods/swap/token.ts#L72) |
| `/fiat/tokens/categories` | `getTokenCategories` | [`token.ts:84`](../src/methods/swap/token.ts#L84) |
| `/users/tokens/{chainId}/{userAddress}` | `getBalances` (deprecated) | [`balance.ts:66`](../src/methods/swap/balance.ts#L66) |
| `/users/tokens/{chainId}/{userAddress}/{tokenAddressOrSymbol}` | `getBalance` / `getAllowance` (deprecated) | [`balance.ts:85`](../src/methods/swap/balance.ts#L85) |

#### POST

| Path | Body | Function | Source |
| --- | --- | --- | --- |
| `/transactions/{chainId}?{BuildOptions}` | swap / swap+order tx params | `buildTx` | [`transaction.ts:189`](../src/methods/swap/transaction.ts#L189) |

### 3.2 OTC Orders (`/ft/…`)

Source: [`src/methods/otcOrders/`](../src/methods/otcOrders/)

#### GET

| Path | Function | Source |
| --- | --- | --- |
| `/ft/p2p/{chainId}/maker/{maker}?offset&limit&hideSmallBalances&orderBy` | `getOTCOrders` (by maker) | [`getOrders.ts:85`](../src/methods/otcOrders/getOrders.ts#L85) |
| `/ft/p2p/{chainId}/taker/{taker}?offset&limit&hideSmallBalances&orderBy` | `getOTCOrders` (by taker) | [`getOrders.ts:85`](../src/methods/otcOrders/getOrders.ts#L85) |
| `/ft/order/{orderHash}` | `getOTCOrderByHash` | [`getOrders.ts:125`](../src/methods/otcOrders/getOrders.ts#L125) |
| `/ft/fillablebalance/{chainId}/{maker}` | `getRequiredBalance` | [`getOrders.ts:103`](../src/methods/otcOrders/getOrders.ts#L103) |
| `/ft/fillablebalance/{chainId}/{maker}/{token}` | `getRequiredBalance` (token given) | [`getOrders.ts:105`](../src/methods/otcOrders/getOrders.ts#L105) |

#### POST

| Path | Body | Function | Source |
| --- | --- | --- | --- |
| `/ft/p2p/{chainId}` | signed OTC order | `postOTCOrder` | [`postOrder.ts:35`](../src/methods/otcOrders/postOrder.ts#L35) |

**Note.** The shared URL factory can also produce the LIMIT variant `/ft/orders/{chainId}`
([`common/orders/misc.ts:68`](../src/methods/common/orders/misc.ts#L68)), but `OTCOrderType` is
narrowed to `'P2P'` only ([`otcOrders/helpers/types.ts:3`](../src/methods/otcOrders/helpers/types.ts#L3)),
so no OTC call site ever produces it.

### 3.3 NFT Orders (`/nft/…`) — deprecated

Source: [`src/methods/nftOrders/`](../src/methods/nftOrders/)

#### GET

| Path | Function | Source |
| --- | --- | --- |
| `/nft/orders/{chainId}/maker/{maker}` | `getNFTOrders` (`type: 'LIMIT'`) | [`getOrders.ts:53`](../src/methods/nftOrders/getOrders.ts#L53) |
| `/nft/orders/{chainId}/taker/{taker}` | `getNFTOrders` (`type: 'LIMIT'`) | [`getOrders.ts:53`](../src/methods/nftOrders/getOrders.ts#L53) |
| `/nft/p2p/{chainId}/maker/{maker}` | `getNFTOrders` (`type: 'P2P'`) | [`getOrders.ts:53`](../src/methods/nftOrders/getOrders.ts#L53) |
| `/nft/p2p/{chainId}/taker/{taker}` | `getNFTOrders` (`type: 'P2P'`) | [`getOrders.ts:53`](../src/methods/nftOrders/getOrders.ts#L53) |
| `/nft/order/{orderHash}` | `getNFTOrderByHash` | [`getOrders.ts:70`](../src/methods/nftOrders/getOrders.ts#L70) |

#### POST

| Path | Body | Function | Source |
| --- | --- | --- | --- |
| `/nft/orders/{chainId}` | signed NFT LIMIT order | `postNFTLimitOrder` | [`postOrder.ts:35`](../src/methods/nftOrders/postOrder.ts#L35) |
| `/nft/p2p/{chainId}` | signed NFT P2P order | `postNFTP2POrder` | [`postOrder.ts:35`](../src/methods/nftOrders/postOrder.ts#L35) |

---

## Totals

| Supergroup | GET | POST | Call sites |
| --- | --- | --- | --- |
| Delta | 11 | 8 | 19 |
| Quote | 1 | 0 | 1 |
| The Rest — Swap | 10 | 1 | 11 |
| The Rest — OTC | 5 | 1 | 6 |
| The Rest — NFT | 5 | 2 | 7 |
| **Total** | **32** | **12** | **44** |

Call-site counts collapse where one code path emits several path variants (e.g. the two
`fillablebalance` shapes come from one `fetcher` call, and `getNFTOrders`' four shapes from one).
The underlying `fetcher` invocations number 37 across the SDK.
