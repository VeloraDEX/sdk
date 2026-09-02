[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionSerializableGeneric

# Type Alias: TransactionSerializableGeneric\<quantity, index\>

> **TransactionSerializableGeneric**\<`quantity`, `index`\> = [`TransactionSerializableBase`](TransactionSerializableBase.md)\<`quantity`, `index`\> & `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:230

## Type Declaration

### accessList?

> `optional` **accessList?**: [`AccessList`](AccessList-2.md)

### authorizationList?

> `optional` **authorizationList?**: [`AuthorizationList`](AuthorizationList.md)\<`index`, `boolean`\>

### blobs?

> `optional` **blobs?**: readonly [`Hex`](Hex.md)[] \| readonly [`ByteArray`](ByteArray.md)[]

### blobVersionedHashes?

> `optional` **blobVersionedHashes?**: readonly [`Hex`](Hex.md)[]

### chainId?

> `optional` **chainId?**: `number`

### gasPrice?

> `optional` **gasPrice?**: `quantity`

### maxFeePerBlobGas?

> `optional` **maxFeePerBlobGas?**: `quantity`

### maxFeePerGas?

> `optional` **maxFeePerGas?**: `quantity`

### maxPriorityFeePerGas?

> `optional` **maxPriorityFeePerGas?**: `quantity`

### sidecars?

> `optional` **sidecars?**: readonly [`BlobSidecar`](BlobSidecar.md)\<[`Hex`](Hex.md)\>[] \| `false`

### type?

> `optional` **type?**: `string`

## Type Parameters

### quantity

`quantity` = `bigint`

### index

`index` = `number`
