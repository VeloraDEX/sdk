[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionSerializableEIP4844

# Type Alias: TransactionSerializableEIP4844\<quantity, index, nullableSidecars\>

> **TransactionSerializableEIP4844**\<`quantity`, `index`, `nullableSidecars`\> = [`RequiredBy`](RequiredBy.md)\<[`TransactionSerializableBase`](TransactionSerializableBase.md)\<`quantity`, `index`\>, `"to"`\> & [`ExactPartial`](ExactPartial.md)\<[`FeeValuesEIP4844`](FeeValuesEIP4844.md)\<`quantity`\>\> & `object` & [`OneOf`](OneOf.md)\<\{ `blobs?`: readonly [`Hex`](Hex.md)[] \| readonly [`ByteArray`](ByteArray.md)[]; `blobVersionedHashes`: readonly [`Hex`](Hex.md)[]; \} \| \{ `blobs`: readonly [`Hex`](Hex.md)[] \| readonly [`ByteArray`](ByteArray.md)[]; `blobVersionedHashes?`: readonly [`Hex`](Hex.md)[]; `kzg`: [`Kzg`](Kzg.md); \}\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:208

## Type Declaration

### accessList?

> `optional` **accessList?**: [`AccessList`](AccessList-2.md)

### chainId

> **chainId**: `number`

### sidecars?

> `optional` **sidecars?**: readonly [`BlobSidecar`](BlobSidecar.md)\<[`Hex`](Hex.md)\>[] \| `nullableSidecars` *extends* `true` ? `false` : `never`

### type?

> `optional` **type?**: `"eip4844"`

### yParity?

> `optional` **yParity?**: `number`

## Type Parameters

### quantity

`quantity` = `bigint`

### index

`index` = `number`

### nullableSidecars

`nullableSidecars` *extends* `boolean` = `boolean`
