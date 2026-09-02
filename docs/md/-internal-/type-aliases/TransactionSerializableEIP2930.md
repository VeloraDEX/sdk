[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionSerializableEIP2930

# Type Alias: TransactionSerializableEIP2930\<quantity, index\>

> **TransactionSerializableEIP2930**\<`quantity`, `index`\> = [`TransactionSerializableBase`](TransactionSerializableBase.md)\<`quantity`, `index`\> & [`ExactPartial`](ExactPartial.md)\<[`FeeValuesLegacy`](FeeValuesLegacy.md)\<`quantity`\>\> & `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:196

## Type Declaration

### accessList?

> `optional` **accessList?**: [`AccessList`](AccessList-2.md)

### chainId

> **chainId**: `number`

### type?

> `optional` **type?**: `"eip2930"`

### yParity?

> `optional` **yParity?**: `number`

## Type Parameters

### quantity

`quantity` = `bigint`

### index

`index` = `number`
