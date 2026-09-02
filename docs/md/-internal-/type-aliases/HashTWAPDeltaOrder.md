[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / HashTWAPDeltaOrder

# Type Alias: HashTWAPDeltaOrder

> **HashTWAPDeltaOrder** = \{(`orderData`, `onChainOrderType`, `requestParams?`): `Promise`\<`string`\>; (`orderData`, `onChainOrderType`, `requestParams?`): `Promise`\<`string`\>; \}

Defined in: [src/methods/delta/preSignTWAPDeltaOrder.ts:23](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/preSignTWAPDeltaOrder.ts#L23)

## Call Signature

> (`orderData`, `onChainOrderType`, `requestParams?`): `Promise`\<`string`\>

### Parameters

#### orderData

[`TWAPDeltaOrder`](../../type-aliases/TWAPDeltaOrder.md)

#### onChainOrderType

`"TWAPOrder"`

#### requestParams?

[`RequestParameters`](RequestParameters.md)

### Returns

`Promise`\<`string`\>

## Call Signature

> (`orderData`, `onChainOrderType`, `requestParams?`): `Promise`\<`string`\>

### Parameters

#### orderData

[`TWAPBuyDeltaOrder`](../../type-aliases/TWAPBuyDeltaOrder.md)

#### onChainOrderType

`"TWAPBuyOrder"`

#### requestParams?

[`RequestParameters`](RequestParameters.md)

### Returns

`Promise`\<`string`\>
