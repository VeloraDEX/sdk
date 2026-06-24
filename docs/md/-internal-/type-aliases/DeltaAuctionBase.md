[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / DeltaAuctionBase

# Type Alias: DeltaAuctionBase

> **DeltaAuctionBase**: `object`

## Type declaration

### beneficiary

> **beneficiary**: [`Address`](../../type-aliases/Address.md)

### createdAt

> **createdAt**: `string`

#### Description

ISO datetime string.

### expiresAt

> **expiresAt**: `string`

#### Description

ISO datetime string.

### id

> **id**: `string`

### input

> **input**: [`DeltaTokenSide`](../../type-aliases/DeltaTokenSide.md)

### orderHash

> **orderHash**: `string`

### output

> **output**: [`DeltaTokenSide`](../../type-aliases/DeltaTokenSide.md)

### owner

> **owner**: [`Address`](../../type-aliases/Address.md)

### partner

> **partner**: `string`

### refunds

> **refunds**: [`BridgeRefundMetadata`](../../type-aliases/BridgeRefundMetadata.md)[]

### side

> **side**: `"SELL"` \| `"BUY"`

### status

> **status**: [`DeltaOrderStatus`](../../type-aliases/DeltaOrderStatus.md)

### transactions

> **transactions**: [`DeltaTransaction`](../../type-aliases/DeltaTransaction.md)[]

### type

> **type**: [`DeltaOrderType`](../../type-aliases/DeltaOrderType.md)

### updatedAt

> **updatedAt**: `string`

#### Description

ISO datetime string.

## Defined in

[src/methods/delta/types.ts:179](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L179)
