[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionSerializableEIP4844

# Type Alias: TransactionSerializableEIP4844\<quantity, index, nullableSidecars\>

> **TransactionSerializableEIP4844**\<`quantity`, `index`, `nullableSidecars`\>: [`RequiredBy`](RequiredBy.md)\<[`TransactionSerializableBase`](TransactionSerializableBase.md)\<`quantity`, `index`\>, `"to"`\> & [`ExactPartial`](ExactPartial.md)\<[`FeeValuesEIP4844`](FeeValuesEIP4844.md)\<`quantity`\>\> & `object` & [`OneOf`](OneOf.md)\<`object` \| `object`\>

## Type declaration

### accessList?

> `optional` **accessList**: [`AccessList`](AccessList.md)

### chainId

> **chainId**: `number`

### sidecars?

> `optional` **sidecars**: readonly [`BlobSidecar`](BlobSidecar.md)\<[`Hex`](Hex.md)\>[] \| `nullableSidecars` *extends* `true` ? `false` : `never`

### type?

> `optional` **type**: `"eip4844"`

### yParity?

> `optional` **yParity**: `number`

## Type Parameters

• **quantity** = `bigint`

• **index** = `number`

• **nullableSidecars** *extends* `boolean` = `boolean`

## Defined in

node\_modules/viem/\_types/types/transaction.d.ts:204
