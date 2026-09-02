[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WalletGetCallsStatusReturnType

# Type Alias: WalletGetCallsStatusReturnType\<capabilities, numberType, bigintType, receiptStatus\>

> **WalletGetCallsStatusReturnType**\<`capabilities`, `numberType`, `bigintType`, `receiptStatus`\> = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/eip1193.d.ts:135

## Type Parameters

### capabilities

`capabilities` *extends* [`Capabilities`](Capabilities.md) = [`Capabilities`](Capabilities.md)

### numberType

`numberType` = [`Hex`](Hex.md)

### bigintType

`bigintType` = [`Hex`](Hex.md)

### receiptStatus

`receiptStatus` = [`Hex`](Hex.md)

## Properties

### atomic

> **atomic**: `boolean`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/eip1193.d.ts:136

***

### capabilities?

> `optional` **capabilities?**: `capabilities` \| [`Capabilities`](Capabilities.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/eip1193.d.ts:137

***

### chainId

> **chainId**: `numberType`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/eip1193.d.ts:138

***

### id

> **id**: `string`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/eip1193.d.ts:139

***

### receipts?

> `optional` **receipts?**: [`WalletCallReceipt`](WalletCallReceipt.md)\<`bigintType`, `receiptStatus`\>[]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/eip1193.d.ts:140

***

### status

> **status**: `number`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/eip1193.d.ts:141

***

### version

> **version**: `string`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/eip1193.d.ts:142
