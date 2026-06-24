[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / BridgeRoute

# Type Alias: BridgeRoute

> **BridgeRoute**: `object`

## Type declaration

### destChainId

> **destChainId**: `number`

### srcChainId

> **srcChainId**: `number`

### tokens

> **tokens**: [`Address`](Address.md)[]

#### Description

Output tokens supported on the dest chain for this src→dest pair.

## Description

A flat bridge-routes entry returned by GET /v2/delta/prices/bridge-routes (better version of v1 prices/bridge-info).
Can be used to populate bridge selection UIs and to validate that bridge is possible for a given src/dest pair before calling GET /v2/delta/prices.

## Defined in

[src/methods/delta/types.ts:117](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L117)
