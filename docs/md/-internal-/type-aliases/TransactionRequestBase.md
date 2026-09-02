[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionRequestBase

# Type Alias: TransactionRequestBase\<quantity, index, type\>

> **TransactionRequestBase**\<`quantity`, `index`, `type`\> = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:135

## Type Parameters

### quantity

`quantity` = `bigint`

### index

`index` = `number`

### type

`type` = `string`

## Properties

### data?

> `optional` **data?**: [`Hex`](Hex.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:137

Contract code or a hashed method call with encoded args

***

### from?

> `optional` **from?**: [`Address`](Address-1.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:139

Transaction sender

***

### gas?

> `optional` **gas?**: `quantity`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:141

Gas provided for transaction execution

***

### nonce?

> `optional` **nonce?**: `index`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:143

Unique number identifying this transaction

***

### to?

> `optional` **to?**: [`Address`](Address-1.md) \| `null`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:145

Transaction recipient

***

### type?

> `optional` **type?**: `type`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:147

Transaction type

***

### value?

> `optional` **value?**: `quantity`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:149

Value in wei sent with this transaction
