[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionRequestGeneric

# Type Alias: TransactionRequestGeneric\<quantity, index\>

> **TransactionRequestGeneric**\<`quantity`, `index`\> = [`TransactionRequestBase`](TransactionRequestBase.md)\<`quantity`, `index`\> & `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:174

## Type Declaration

### accessList?

> `optional` **accessList?**: [`AccessList`](AccessList-2.md)

### blobs?

> `optional` **blobs?**: readonly [`Hex`](Hex.md)[] \| readonly [`ByteArray`](ByteArray.md)[]

### blobVersionedHashes?

> `optional` **blobVersionedHashes?**: readonly [`Hex`](Hex.md)[]

### gasPrice?

> `optional` **gasPrice?**: `quantity`

### maxFeePerBlobGas?

> `optional` **maxFeePerBlobGas?**: `quantity`

### maxFeePerGas?

> `optional` **maxFeePerGas?**: `quantity`

### maxPriorityFeePerGas?

> `optional` **maxPriorityFeePerGas?**: `quantity`

### type?

> `optional` **type?**: `string`

## Type Parameters

### quantity

`quantity` = `bigint`

### index

`index` = `number`
