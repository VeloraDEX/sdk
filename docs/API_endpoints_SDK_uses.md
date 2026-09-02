# API Endpoints Accessed by the SDK

## 1. Delta (`/v2/delta/…`)

### GET

- `/v2/delta/prices?srcToken&destToken&amount&srcDecimals&destDecimals&chainId&side&userAddress&beneficiary&partner&partnerFeeBps&destChainId&maxImpact&maxUSDImpact&includeAgents&excludeAgents&includeBridges&excludeBridges&allowBridgeAndSwap&degenMode`
- `/v2/delta/prices/bridge-routes?allowBridgeAndSwap&bridges`
- `/v2/delta/prices/bridge-protocols`
- `/v2/delta/prices/is-token-supported?token&chainId`
- `/v2/delta/orders?userAddress&page&limit&type&onChainOrderType&chainId&status`
- `/v2/delta/orders/{orderId}`
- `/v2/delta/orders/hash/{orderHash}`
- `/v2/delta/orders/fillablebalance/{chainId}/{userAddress}`
- `/v2/delta/orders/fillablebalance/{chainId}/{userAddress}/{tokenAddress}`
- `/v2/delta/agents/list/{chainId}`
- `/prices/partnerfee/{chainId}?partner&…` ⚠️ **not** under `/v2/delta`

### POST

- `/v2/delta/orders/build` — `orderType: 'Order'`, `side: 'SELL' | 'BUY'`
- `/v2/delta/orders/build` — `orderType: 'ExternalOrder'`
- `/v2/delta/orders/build` — `orderType: 'TWAPOrder'`, `side: 'SELL'`
- `/v2/delta/orders/build` — `orderType: 'TWAPBuyOrder'`, `side: 'BUY'`
- `/v2/delta/orders?degenMode` — standard order
- `/v2/delta/orders` (no query) — external order
- `/v2/delta/orders?degenMode` — TWAP sell / buy order
- `/v2/delta/orders/cancel` — `{ orderIds, signature, … }`

---

## 2. Quote (`/v2/quote`)

### GET

- `/v2/quote?chainId&side&mode&…`

### POST

_None._

---

## 3. The Rest (Is this considered Market?)

### 3.1 Swap

#### GET

- `/prices?srcToken&destToken&chainId&version&…`
- `/prices?route&chainId&version&…` (same endpoint; `route` replaces `srcToken`+`destToken`)
- `/swap?amount&srcToken&destToken&route&chainId&version&…`
- `/adapters/contracts?chainId&version`
- `/adapters/list?chainId&version`
- `/fiat/tokens/{chainId}?category`
- `/fiat/tokens/all?category`
- `/fiat/tokens/categories`
- `/users/tokens/{chainId}/{userAddress}` (deprecated)
- `/users/tokens/{chainId}/{userAddress}/{tokenAddressOrSymbol}` (deprecated)

#### POST

- `/transactions/{chainId}?{BuildOptions}` — swap / swap+order tx params

### 3.2 OTC Orders (`/ft/…`)

#### GET

- `/ft/p2p/{chainId}/maker/{maker}?offset&limit&hideSmallBalances&orderBy`
- `/ft/p2p/{chainId}/taker/{taker}?offset&limit&hideSmallBalances&orderBy`
- `/ft/order/{orderHash}`
- `/ft/fillablebalance/{chainId}/{maker}`
- `/ft/fillablebalance/{chainId}/{maker}/{token}`

#### POST

- `/ft/p2p/{chainId}` — signed OTC order

### 3.3 NFT Orders (`/nft/…`) — deprecated

#### GET

- `/nft/orders/{chainId}/maker/{maker}`
- `/nft/orders/{chainId}/taker/{taker}`
- `/nft/p2p/{chainId}/maker/{maker}`
- `/nft/p2p/{chainId}/taker/{taker}`
- `/nft/order/{orderHash}`

#### POST

- `/nft/orders/{chainId}` — signed NFT LIMIT order
- `/nft/p2p/{chainId}` — signed NFT P2P order
