[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WalletGetCallsStatusReturnType

# Type Alias: WalletGetCallsStatusReturnType\<capabilities, numberType, bigintType, receiptStatus\>

> **WalletGetCallsStatusReturnType**\<`capabilities`, `numberType`, `bigintType`, `receiptStatus`\>: `object`

## Type Parameters

• **capabilities** *extends* [`Capabilities`](Capabilities.md) = [`Capabilities`](Capabilities.md)

• **numberType** = [`Hex`](Hex.md)

• **bigintType** = [`Hex`](Hex.md)

• **receiptStatus** = [`Hex`](Hex.md)

## Type declaration

### atomic

> **atomic**: `boolean`

### capabilities?

> `optional` **capabilities**: `capabilities` \| [`Capabilities`](Capabilities.md)

### chainId

> **chainId**: `numberType`

### id

> **id**: `string`

### receipts?

> `optional` **receipts**: [`WalletCallReceipt`](WalletCallReceipt.md)\<`bigintType`, `receiptStatus`\>[]

### status

> **status**: `number`

### version

> **version**: `string`

## Defined in

node\_modules/viem/\_types/types/eip1193.d.ts:135
