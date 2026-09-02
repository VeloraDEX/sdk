[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionRequestEIP4844

# Type Alias: TransactionRequestEIP4844\<quantity, index, type\>

> **TransactionRequestEIP4844**\<`quantity`, `index`, `type`\> = [`RequiredBy`](RequiredBy.md)\<[`TransactionRequestBase`](TransactionRequestBase.md)\<`quantity`, `index`, `type`\>, `"to"`\> & [`ExactPartial`](ExactPartial.md)\<[`FeeValuesEIP4844`](FeeValuesEIP4844.md)\<`quantity`\>\> & `object` & [`OneOf`](OneOf.md)\<\{ `blobs?`: readonly [`Hex`](Hex.md)[] \| readonly [`ByteArray`](ByteArray.md)[]; `blobVersionedHashes`: readonly [`Hex`](Hex.md)[]; \} \| \{ `blobs`: readonly [`Hex`](Hex.md)[] \| readonly [`ByteArray`](ByteArray.md)[]; `blobVersionedHashes?`: readonly [`Hex`](Hex.md)[]; `kzg?`: [`Kzg`](Kzg.md); \}\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:158

## Type Declaration

### accessList?

> `optional` **accessList?**: [`AccessList`](AccessList-2.md)

### sidecars?

> `optional` **sidecars?**: readonly [`BlobSidecar`](BlobSidecar.md)\<[`Hex`](Hex.md)\>[]

## Type Parameters

### quantity

`quantity` = `bigint`

### index

`index` = `number`

### type

`type` = `"eip4844"`
