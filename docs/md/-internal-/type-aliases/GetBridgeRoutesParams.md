[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetBridgeRoutesParams

# Type Alias: GetBridgeRoutesParams

> **GetBridgeRoutesParams** = `object`

Defined in: [src/methods/delta/getBridgeRoutes.ts:12](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getBridgeRoutes.ts#L12)

## Properties

### allowBridgeAndSwap?

> `optional` **allowBridgeAndSwap?**: `boolean`

Defined in: [src/methods/delta/getBridgeRoutes.ts:14](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getBridgeRoutes.ts#L14)

#### Description

Include tokens that can be swapped on destChain after bridge. Default is true.

***

### bridges?

> `optional` **bridges?**: `string`[]

Defined in: [src/methods/delta/getBridgeRoutes.ts:16](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/getBridgeRoutes.ts#L16)

#### Description

Include only the specified bridges. Default is all bridges.
