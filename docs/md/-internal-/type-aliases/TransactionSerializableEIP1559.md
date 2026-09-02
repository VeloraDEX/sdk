[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionSerializableEIP1559

# Type Alias: TransactionSerializableEIP1559\<quantity, index\>

> **TransactionSerializableEIP1559**\<`quantity`, `index`\> = [`TransactionSerializableBase`](TransactionSerializableBase.md)\<`quantity`, `index`\> & [`ExactPartial`](ExactPartial.md)\<[`FeeValuesEIP1559`](FeeValuesEIP1559.md)\<`quantity`\>\> & `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:202

## Type Declaration

### accessList?

> `optional` **accessList?**: [`AccessList`](AccessList-2.md)

### chainId

> **chainId**: `number`

### type?

> `optional` **type?**: `"eip1559"`

### yParity?

> `optional` **yParity?**: `number`

## Type Parameters

### quantity

`quantity` = `bigint`

### index

`index` = `number`
