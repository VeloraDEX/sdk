[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / PostTWAPDeltaOrder

# Type Alias: PostTWAPDeltaOrder

> **PostTWAPDeltaOrder** = (`postData`, `requestParams?`) => `Promise`\<[`DeltaAuction`](../../type-aliases/DeltaAuction.md)\<`"TWAPOrder"`\> \| [`DeltaAuction`](../../type-aliases/DeltaAuction.md)\<`"TWAPBuyOrder"`\>\>

Defined in: [src/methods/delta/postTWAPDeltaOrder.ts:20](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/postTWAPDeltaOrder.ts#L20)

## Parameters

### postData

[`PostTWAPDeltaOrderParams`](../../type-aliases/PostTWAPDeltaOrderParams.md)

### requestParams?

[`RequestParameters`](RequestParameters.md)

## Returns

`Promise`\<[`DeltaAuction`](../../type-aliases/DeltaAuction.md)\<`"TWAPOrder"`\> \| [`DeltaAuction`](../../type-aliases/DeltaAuction.md)\<`"TWAPBuyOrder"`\>\>
