[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / OrderHelpers

# Variable: OrderHelpers

> `const` **OrderHelpers**: `object`

## Type declaration

### checks

> **checks**: `object`

### checks.isCanceledAuction()

> **isCanceledAuction**: \<`T`\>(`auction`) => `auction is T & Object`

#### Type Parameters

• **T** *extends* [`Pick`](../-internal-/type-aliases/Pick.md)\<[`DeltaAuction`](../type-aliases/DeltaAuction.md), `"status"`\>

#### Parameters

• **auction**: `T`

#### Returns

`auction is T & Object`

#### Description

Checks whether an auction status is cancelled.

### checks.isCompletedAuction()

> **isCompletedAuction**: \<`T`\>(`auction`) => `auction is T & Object`

#### Type Parameters

• **T** *extends* [`Pick`](../-internal-/type-aliases/Pick.md)\<[`DeltaAuction`](../type-aliases/DeltaAuction.md), `"status"`\>

#### Parameters

• **auction**: `T`

#### Returns

`auction is T & Object`

#### Description

Checks whether an auction is fully executed (settled on every chain).

### checks.isDeltaAuction()

> **isDeltaAuction**: \<`T`\>(`auction`) => `auction is Object`

#### Type Parameters

• **T** *extends* keyof [`OnChainOrderMap`](../-internal-/type-aliases/OnChainOrderMap.md)

#### Parameters

• **auction**

• **auction.onChainOrderType**: `T`

#### Returns

`auction is Object`

#### Description

Checks whether an auction is a Delta auction.

### checks.isDeltaOrder()

> **isDeltaOrder**: (`order`) => `order is DeltaAuctionOrder`

#### Parameters

• **order**: [`DeltaOrderUnion`](../type-aliases/DeltaOrderUnion.md)

#### Returns

`order is DeltaAuctionOrder`

#### Description

Checks whether an order is a regular Delta auction order.

### checks.isExpiredAuction()

> **isExpiredAuction**: \<`T`\>(`auction`) => `auction is T & Object`

#### Type Parameters

• **T** *extends* [`Pick`](../-internal-/type-aliases/Pick.md)\<[`DeltaAuction`](../type-aliases/DeltaAuction.md), `"status"`\>

#### Parameters

• **auction**: `T`

#### Returns

`auction is T & Object`

#### Description

Checks whether an auction status is expired.

### checks.isExternalAuction()

> **isExternalAuction**: \<`T`\>(`auction`) => `auction is Object`

#### Type Parameters

• **T** *extends* keyof [`OnChainOrderMap`](../-internal-/type-aliases/OnChainOrderMap.md)

#### Parameters

• **auction**

• **auction.onChainOrderType**: `T`

#### Returns

`auction is Object`

#### Description

Checks whether an auction is an External auction.

### checks.isExternalOrder()

> **isExternalOrder**: (`order`) => `order is ExternalDeltaOrder`

#### Parameters

• **order**: [`DeltaOrderUnion`](../type-aliases/DeltaOrderUnion.md)

#### Returns

`order is ExternalDeltaOrder`

#### Description

Checks whether an order is an External order.

### checks.isFailedAuction()

> **isFailedAuction**: \<`T`\>(`auction`) => `auction is T & Object`

#### Type Parameters

• **T** *extends* [`Pick`](../-internal-/type-aliases/Pick.md)\<[`DeltaAuction`](../type-aliases/DeltaAuction.md), `"status"`\>

#### Parameters

• **auction**: `T`

#### Returns

`auction is T & Object`

#### Description

Checks whether an auction is in a terminal failure state
(failed, expired, cancelled, or refunded).

### checks.isFillableAuction()

> **isFillableAuction**: \<`T`\>(`auction`) => `auction is T & Object`

#### Type Parameters

• **T** *extends* [`Pick`](../-internal-/type-aliases/Pick.md)\<[`DeltaAuction`](../type-aliases/DeltaAuction.md), `"onChainOrderType"`\>

#### Parameters

• **auction**: `T`

#### Returns

`auction is T & Object`

#### Description

Checks whether an auction is a Fillable auction.
`FillableOrder` is the `onChainOrderType` the server reports for a
`partiallyFillable` Standard order; it carries the same order struct as
`Order`. Consumers that don't distinguish the two should treat
`isDeltaAuction(a) || isFillableAuction(a)` as "is a standard order".

### checks.isOrderCrosschain()

> **isOrderCrosschain**: \<`T`\>(`order`) => `order is Prettify<Extract<T, Object> & Object>`

#### Type Parameters

• **T** *extends* `object` \| `object`

#### Parameters

• **order**: `T`

#### Returns

`order is Prettify<Extract<T, Object> & Object>`

#### Description

Checks whether an order includes valid cross-chain bridge details.

### checks.isPartiallyExecutedAuction()

> **isPartiallyExecutedAuction**: \<`T`\>(`auction`) => `auction is T & Object`

#### Type Parameters

• **T** *extends* [`Pick`](../-internal-/type-aliases/Pick.md)\<[`DeltaAuction`](../type-aliases/DeltaAuction.md), `"order"` \| `"transactions"`\>

#### Parameters

• **auction**: `T`

#### Returns

`auction is T & Object`

#### Description

Checks whether an auction has been partially executed:
it has at least one transaction and an overall filled percent strictly
between 0 and 100.

### checks.isPendingAuction()

> **isPendingAuction**: \<`T`\>(`auction`) => `auction is T & Object`

#### Type Parameters

• **T** *extends* [`Pick`](../-internal-/type-aliases/Pick.md)\<[`DeltaAuction`](../type-aliases/DeltaAuction.md), `"status"`\>

#### Parameters

• **auction**: `T`

#### Returns

`auction is T & Object`

#### Description

Checks whether an auction is still in flight (not yet settled
and not failed): awaiting signature, pending, actively executing, or bridging.

### checks.isProductiveAuction()

> **isProductiveAuction**: \<`T`\>(`auction`) => `auction is Object`

#### Type Parameters

• **T** *extends* keyof [`OnChainOrderMap`](../-internal-/type-aliases/OnChainOrderMap.md)

#### Parameters

• **auction**

• **auction.onChainOrderType**: `T`

#### Returns

`auction is Object`

#### Description

Checks whether an auction is a Productive auction.

### checks.isProductiveOrder()

> **isProductiveOrder**: (`order`) => `order is ProductiveDeltaOrder`

#### Parameters

• **order**: [`DeltaOrderUnion`](../type-aliases/DeltaOrderUnion.md)

#### Returns

`order is ProductiveDeltaOrder`

#### Description

Checks whether an order is a Productive Delta order
(strategy-routed order without an explicit OrderKind).

### checks.isTWAPAuction()

> **isTWAPAuction**: \<`T`\>(`auction`) => `auction is Object`

#### Type Parameters

• **T** *extends* keyof [`OnChainOrderMap`](../-internal-/type-aliases/OnChainOrderMap.md)

#### Parameters

• **auction**

• **auction.onChainOrderType**: `T`

#### Returns

`auction is Object`

#### Description

Checks whether an auction is a TWAP auction.

### checks.isTWAPBuyAuction()

> **isTWAPBuyAuction**: \<`T`\>(`auction`) => `auction is Object`

#### Type Parameters

• **T** *extends* keyof [`OnChainOrderMap`](../-internal-/type-aliases/OnChainOrderMap.md)

#### Parameters

• **auction**

• **auction.onChainOrderType**: `T`

#### Returns

`auction is Object`

#### Description

Checks whether an auction is a TWAP Buy auction.

### checks.isTWAPBuyOrder()

> **isTWAPBuyOrder**: (`order`) => `order is TWAPBuyDeltaOrder`

#### Parameters

• **order**: [`DeltaOrderUnion`](../type-aliases/DeltaOrderUnion.md)

#### Returns

`order is TWAPBuyDeltaOrder`

#### Description

Checks whether an order is a TWAP Buy order.

### checks.isTWAPOrder()

> **isTWAPOrder**: (`order`) => order is TWAPDeltaOrder \| TWAPBuyDeltaOrder

#### Parameters

• **order**: [`DeltaOrderUnion`](../type-aliases/DeltaOrderUnion.md)

#### Returns

order is TWAPDeltaOrder \| TWAPBuyDeltaOrder

#### Description

Checks whether an order is a TWAP Sell or TWAP Buy order.

### checks.isTWAPSellAuction()

> **isTWAPSellAuction**: \<`T`\>(`auction`) => `auction is Object`

#### Type Parameters

• **T** *extends* keyof [`OnChainOrderMap`](../-internal-/type-aliases/OnChainOrderMap.md)

#### Parameters

• **auction**

• **auction.onChainOrderType**: `T`

#### Returns

`auction is Object`

#### Description

Checks whether an auction is a TWAP Sell auction.

### checks.isTWAPSellOrder()

> **isTWAPSellOrder**: (`order`) => `order is TWAPDeltaOrder`

#### Parameters

• **order**: [`DeltaOrderUnion`](../type-aliases/DeltaOrderUnion.md)

#### Returns

`order is TWAPDeltaOrder`

#### Description

Checks whether an order is a TWAP Sell order.

### getters

> **getters**: `object`

### getters.getAuctionAmounts()

> **getAuctionAmounts**: (`auction`) => `object` \| `object`

#### Parameters

• **auction**: [`Pick`](../-internal-/type-aliases/Pick.md)\<[`DeltaAuction`](../type-aliases/DeltaAuction.md), `"status"` \| `"order"` \| `"input"` \| `"transactions"` \| `"output"`\>

#### Returns

`object` \| `object`

#### Description

Returns expected and minimal amounts and, once the auction is completed,
executed amounts. Executed amounts prefer the `executedAmount` baked onto the
token sides and fall back to summing transactions.

### getters.getAuctionDestChainId()

> **getAuctionDestChainId**: (`auction`) => `number`

#### Parameters

• **auction**: [`Pick`](../-internal-/type-aliases/Pick.md)\<[`DeltaAuction`](../type-aliases/DeltaAuction.md), `"output"`\>

#### Returns

`number`

#### Description

Returns the destination chain id for the auction (the output side's chain).
Equals the source chain id for same-chain orders.

### getters.getAuctionSrcChainId()

> **getAuctionSrcChainId**: (`auction`) => `number`

#### Parameters

• **auction**: [`Pick`](../-internal-/type-aliases/Pick.md)\<[`DeltaAuction`](../type-aliases/DeltaAuction.md), `"input"`\>

#### Returns

`number`

#### Description

Returns the source chain id for the auction (the input side's chain).

### getters.getAuctionSwapSide()

> **getAuctionSwapSide**: (`auction`) => [`SwapSideUnion`](../type-aliases/SwapSideUnion.md)

#### Parameters

• **auction**: [`Pick`](../-internal-/type-aliases/Pick.md)\<[`DeltaAuction`](../type-aliases/DeltaAuction.md), `"side"`\>

#### Returns

[`SwapSideUnion`](../type-aliases/SwapSideUnion.md)

#### Description

Returns the swap side for any auction. The auction carries `side`
directly, so no order introspection is needed.

### getters.getAuctionTokenAddresses()

> **getAuctionTokenAddresses**: (`auction`) => `object`

#### Parameters

• **auction**: [`Pick`](../-internal-/type-aliases/Pick.md)\<[`DeltaAuction`](../type-aliases/DeltaAuction.md), `"input"` \| `"output"`\>

#### Returns

`object`

##### destToken

> **destToken**: `string` = `auction.output.token`

##### srcToken

> **srcToken**: `string` = `auction.input.token`

#### Description

Returns source and destination token addresses for the auction,
read from the input/output sides (already resolved to the dest-chain token
for cross-chain orders).

### getters.getExpectedTwapDestAmount()

> **getExpectedTwapDestAmount**: (`order`) => `string`

#### Parameters

• **order**: [`Pick`](../-internal-/type-aliases/Pick.md)\<[`TWAPDeltaOrder`](../type-aliases/TWAPDeltaOrder.md), `"bridge"` \| `"numSlices"` \| `"destAmountPerSlice"`\> \| [`Pick`](../-internal-/type-aliases/Pick.md)\<[`TWAPBuyDeltaOrder`](../type-aliases/TWAPBuyDeltaOrder.md), `"bridge"` \| `"totalDestAmount"`\>

#### Returns

`string`

#### Description

Returns the expected destination amount for a TWAP order.

### getters.getExpectedTwapOrderAmounts()

> **getExpectedTwapOrderAmounts**: (`order`) => `object`

#### Parameters

• **order**: [`TWAPDeltaOrder`](../type-aliases/TWAPDeltaOrder.md) \| [`TWAPBuyDeltaOrder`](../type-aliases/TWAPBuyDeltaOrder.md)

#### Returns

`object`

##### destAmount

> **destAmount**: `string`

##### srcAmount

> **srcAmount**: `string`

#### Description

Returns expected source and destination amounts for a TWAP order.

### getters.getExpectedTwapSrcAmount()

> **getExpectedTwapSrcAmount**: (`order`) => `string`

#### Parameters

• **order**: [`Pick`](../-internal-/type-aliases/Pick.md)\<[`TWAPDeltaOrder`](../type-aliases/TWAPDeltaOrder.md), `"totalSrcAmount"`\> \| [`Pick`](../-internal-/type-aliases/Pick.md)\<[`TWAPBuyDeltaOrder`](../type-aliases/TWAPBuyDeltaOrder.md), `"maxSrcAmount"`\>

#### Returns

`string`

#### Description

Returns the expected source amount for a TWAP order.

### getters.getFilledPercent()

> **getFilledPercent**: (`__namedParameters`) => `number`

#### Parameters

• **\_\_namedParameters**: [`Pick`](../-internal-/type-aliases/Pick.md)\<[`DeltaAuction`](../type-aliases/DeltaAuction.md), `"order"` \| `"transactions"`\>

#### Returns

`number`

#### Description

Calculates the overall filled percent (0–100) from the
per-transaction `filledPercent` values. For cross-chain orders,
only transactions with a `destinationTx` are counted towards the filled percent.

### getters.getOrderTokenAddresses()

> **getOrderTokenAddresses**: (`order`) => `object`

#### Parameters

• **order**: [`DeltaAuctionOrder`](../type-aliases/DeltaAuctionOrder.md) \| [`ExternalDeltaOrder`](../type-aliases/ExternalDeltaOrder.md) \| [`ProductiveDeltaOrder`](../type-aliases/ProductiveDeltaOrder.md) \| [`TWAPDeltaOrder`](../type-aliases/TWAPDeltaOrder.md) \| [`TWAPBuyDeltaOrder`](../type-aliases/TWAPBuyDeltaOrder.md)

#### Returns

`object`

##### destToken

> **destToken**: `string`

##### srcToken

> **srcToken**: `string`

#### Description

Returns source and destination token addresses for an order.

### getters.getSwapSideFromDeltaOrder()

> **getSwapSideFromDeltaOrder**: (`order`) => [`SwapSideUnion`](../type-aliases/SwapSideUnion.md)

#### Parameters

• **order**: [`DeltaAuctionOrder`](../type-aliases/DeltaAuctionOrder.md) \| [`ExternalDeltaOrder`](../type-aliases/ExternalDeltaOrder.md)

#### Returns

[`SwapSideUnion`](../type-aliases/SwapSideUnion.md)

#### Description

Returns swap side from a Delta or External order kind.

### getters.getSwapSideFromTwapOrderType()

> **getSwapSideFromTwapOrderType**: (`onChainOrderType`) => [`SwapSideUnion`](../type-aliases/SwapSideUnion.md)

#### Parameters

• **onChainOrderType**: `"TWAPOrder"` \| `"TWAPBuyOrder"`

#### Returns

[`SwapSideUnion`](../type-aliases/SwapSideUnion.md)

#### Description

Returns swap side from TWAP on-chain order type.

### getters.getTransactionAmounts()

> **getTransactionAmounts**: (`transactions`) => `object`

#### Parameters

• **transactions**: [`DeltaTransaction`](../type-aliases/DeltaTransaction.md)[]

#### Returns

`object`

##### destAmount

> **destAmount**: `string`

##### srcAmount

> **srcAmount**: `string`

#### Description

Aggregates transaction amounts into total spent (src) and
received (dest) values.

### getters.getUnifiedDeltaOrderData()

> **getUnifiedDeltaOrderData**: (`auction`) => [`UnifiedDeltaOrderData`](../type-aliases/UnifiedDeltaOrderData.md)

#### Parameters

• **auction**: [`DeltaAuction`](../type-aliases/DeltaAuction.md)

#### Returns

[`UnifiedDeltaOrderData`](../type-aliases/UnifiedDeltaOrderData.md)

#### Description

Returns unified order data with normalized amounts, tokens,
chain ids, and side, built from the auction envelope.

## Defined in

[src/methods/delta/helpers/orders.ts:612](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/orders.ts#L612)
