[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / BridgeRoute

# Type Alias: BridgeRoute

> **BridgeRoute** = `object`

Defined in: [src/methods/delta/types.ts:117](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L117)

## Description

A flat bridge-routes entry returned by GET /v2/delta/prices/bridge-routes (better version of v1 prices/bridge-info).
Can be used to populate bridge selection UIs and to validate that bridge is possible for a given src/dest pair before calling GET /v2/delta/prices.

## Properties

### destChainId

> **destChainId**: `number`

Defined in: [src/methods/delta/types.ts:119](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L119)

***

### srcChainId

> **srcChainId**: `number`

Defined in: [src/methods/delta/types.ts:118](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L118)

***

### tokens

> **tokens**: [`Address`](Address.md)[]

Defined in: [src/methods/delta/types.ts:121](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L121)

#### Description

Output tokens supported on the dest chain for this src→dest pair.
