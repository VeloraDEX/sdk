[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / DeltaAuction

# Type Alias: DeltaAuction\<T\>

> **DeltaAuction**\<`T`\>: `T` *extends* `T` ? [`Prettify`](../-internal-/type-aliases/Prettify.md)\<[`DeltaAuctionBase`](../-internal-/type-aliases/DeltaAuctionBase.md) & `object`\> : `never`

## Type Parameters

• **T** *extends* [`OnChainOrderType`](OnChainOrderType.md) = [`OnChainOrderType`](OnChainOrderType.md)

## Description

Order shape returned by GET /v2/orders, /v2/orders/:id, /v2/orders/hash/:hash.
 Generic over `onChainOrderType` like v1's `DeltaAuction`: the type distributes over the
 union so that `order` narrows to the matching family (`OnChainOrderMap[T]`).

## Defined in

[src/methods/delta/types.ts:203](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L203)
