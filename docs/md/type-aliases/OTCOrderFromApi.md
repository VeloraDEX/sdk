[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / OTCOrderFromApi

# Type Alias: OTCOrderFromApi

> **OTCOrderFromApi**: `object`

## Type declaration

### chainId

> **chainId**: `number`

### createdAt

> **createdAt**: `number`

### expiry

> **expiry**: `number`

### fillableBalance

> **fillableBalance**: `string`

### maker

> **maker**: `string`

### makerAmount

> **makerAmount**: `string`

### makerAsset

> **makerAsset**: `string`

### makerBalance

> **makerBalance**: `string`

### nonceAndMeta

> **nonceAndMeta**: `string`

### orderHash

> **orderHash**: `string`

### permitMakerAsset

> **permitMakerAsset**: `null` \| `string`

### reservedBalance

> **reservedBalance**: `string`

### signature

> **signature**: `string`

### state

> **state**: [`OTCOrderState`](OTCOrderState.md)

### swappableBalance

> **swappableBalance**: `string`

### taker

> **taker**: `string`

### takerAmount

> **takerAmount**: `string`

### takerAsset

> **takerAsset**: `string`

### takerFromMeta

> **takerFromMeta**: `string`

### transactionHash

> **transactionHash**: `null` \| `string`

#### Description

transaction with the last event pertaining to the order: OrderFilled or OrderCancelled

### type

> **type**: [`OTCOrderType`](OTCOrderType.md)

### updatedAt

> **updatedAt**: `number`

## Defined in

[src/methods/otcOrders/helpers/types.ts:37](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/otcOrders/helpers/types.ts#L37)
