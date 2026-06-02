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

### checks.isDeltaAuction()

> **isDeltaAuction**: \<`T`\>(`auction`) => `auction is Object`

#### Type Parameters

• **T** *extends* [`OnChainOrderType`](../type-aliases/OnChainOrderType.md)

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

### checks.isExecutedAuction()

> **isExecutedAuction**: \<`T`\>(`auction`) => `auction is T & ExecutedDeltaAuctionProps`

#### Type Parameters

• **T** *extends* [`Pick`](../-internal-/type-aliases/Pick.md)\<[`DeltaAuction`](../type-aliases/DeltaAuction.md), `"status"` \| `"order"` \| `"transactions"`\>

#### Parameters

• **auction**: `T`

#### Returns

`auction is T & ExecutedDeltaAuctionProps`

#### Description

Checks whether an auction is fully executed.

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

• **T** *extends* [`OnChainOrderType`](../type-aliases/OnChainOrderType.md)

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

> **isFailedAuction**: \<`T`\>(`auction`) => `auction is T & FailedDeltaAuctionProps`

#### Type Parameters

• **T** *extends* [`Pick`](../-internal-/type-aliases/Pick.md)\<[`DeltaAuction`](../type-aliases/DeltaAuction.md), `"status"` \| `"order"` \| `"bridgeStatus"`\>

#### Parameters

• **auction**: `T`

#### Returns

`auction is T & FailedDeltaAuctionProps`

#### Description

Checks whether an auction is failed on source or destination chain.

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

Auction can be cancelled in the middle of execution,
or crosschain-TWAP slices may not all be bridged,
or order can be suspended if it runs out of user balance/allowance.
Orders in the middle of normal execution can also be considered partially executed if they have any transactions.

### checks.isPendingAuction()

> **isPendingAuction**: \<`T`\>(`auction`) => `auction is T & Object`

#### Type Parameters

• **T** *extends* [`Pick`](../-internal-/type-aliases/Pick.md)\<[`DeltaAuction`](../type-aliases/DeltaAuction.md), `"status"`\>

#### Parameters

• **auction**: `T`

#### Returns

`auction is T & Object`

#### Description

Checks whether an auction status is in pending execution states.

### checks.isTWAPAuction()

> **isTWAPAuction**: \<`T`\>(`auction`) => `auction is Object`

#### Type Parameters

• **T** *extends* [`OnChainOrderType`](../type-aliases/OnChainOrderType.md)

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

• **T** *extends* [`OnChainOrderType`](../type-aliases/OnChainOrderType.md)

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

• **T** *extends* [`OnChainOrderType`](../type-aliases/OnChainOrderType.md)

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

• **auction**: [`DeltaAuction`](../type-aliases/DeltaAuction.md)

#### Returns

`object` \| `object`

#### Description

Returns expected and, when available, final amounts for an auction.

### getters.getAuctionDestChainId()

> **getAuctionDestChainId**: (`__namedParameters`) => `number`

#### Parameters

• **\_\_namedParameters**: [`Pick`](../-internal-/type-aliases/Pick.md)\<[`DeltaAuction`](../type-aliases/DeltaAuction.md), `"chainId"` \| `"order"`\>

#### Returns

`number`

#### Description

Returns the destination chain id for the auction.

### getters.getAuctionSwapSide()

> **getAuctionSwapSide**: (`auction`) => [`SwapSideUnion`](../type-aliases/SwapSideUnion.md)

#### Parameters

• **auction**: [`DeltaAuction`](../type-aliases/DeltaAuction.md)

#### Returns

[`SwapSideUnion`](../type-aliases/SwapSideUnion.md)

#### Description

Returns swap side for any auction type.

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

> **getFilledPercent**: (`auction`) => `number`

#### Parameters

• **auction**: [`Pick`](../-internal-/type-aliases/Pick.md)\<[`DeltaAuction`](../type-aliases/DeltaAuction.md), `"order"` \| `"transactions"`\>

#### Returns

`number`

#### Description

Calculates filled percentage from auction transaction filled bps values.

### getters.getOrderTokenAddresses()

> **getOrderTokenAddresses**: (`order`) => `object`

#### Parameters

• **order**: [`DeltaAuctionOrder`](../type-aliases/DeltaAuctionOrder.md) \| [`ExternalDeltaOrder`](../type-aliases/ExternalDeltaOrder.md) \| [`TWAPDeltaOrder`](../type-aliases/TWAPDeltaOrder.md) \| [`TWAPBuyDeltaOrder`](../type-aliases/TWAPBuyDeltaOrder.md)

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

• **transactions**: [`DeltaAuctionTransaction`](../type-aliases/DeltaAuctionTransaction.md)[]

#### Returns

`object`

##### destAmount

> **destAmount**: `string`

##### srcAmount

> **srcAmount**: `string`

#### Description

Aggregates transaction amounts into total source and destination values.

### getters.getTwapAuctionAmounts()

> **getTwapAuctionAmounts**: (`twapAuction`) => `object` \| `object`

#### Parameters

• **twapAuction**: [`Pick`](../-internal-/type-aliases/Pick.md)\<`object`, `"status"` \| `"order"` \| `"transactions"`\> \| [`Pick`](../-internal-/type-aliases/Pick.md)\<`object`, `"status"` \| `"order"` \| `"transactions"`\>

#### Returns

`object` \| `object`

#### Description

Returns expected and, when available, final amounts for a TWAP auction.

### getters.getUnifiedDeltaOrderData()

> **getUnifiedDeltaOrderData**: (`auction`) => [`UnifiedDeltaOrderData`](../type-aliases/UnifiedDeltaOrderData.md)

#### Parameters

• **auction**: [`DeltaAuction`](../type-aliases/DeltaAuction.md)

#### Returns

[`UnifiedDeltaOrderData`](../type-aliases/UnifiedDeltaOrderData.md)

#### Description

Returns unified order data with normalized amounts, tokens, and side.

## Defined in

[src/methods/delta/helpers/orders.ts:223](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/orders.ts#L223)
