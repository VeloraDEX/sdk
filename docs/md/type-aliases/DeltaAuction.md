[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / DeltaAuction

# Type Alias: DeltaAuction\<T\>

> **DeltaAuction**\<`T`\> = `T` *extends* `T` ? [`Prettify`](../-internal-/type-aliases/Prettify.md)\<[`DeltaAuctionBase`](../-internal-/type-aliases/DeltaAuctionBase.md) & `object`\> : `never`

Defined in: [src/methods/delta/types.ts:252](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L252)

## Type Parameters

### T

`T` *extends* [`OnChainOrderType`](OnChainOrderType.md) = [`OnChainOrderType`](OnChainOrderType.md)

## Description

Order shape returned by GET /v2/orders, /v2/orders/:id, /v2/orders/hash/:hash.
 Generic over `onChainOrderType` like v1's `DeltaAuction`: the type distributes over the
 union so that `order` narrows to the matching family (`OnChainOrderMap[T]`).
