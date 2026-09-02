[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionRequestEIP2930

# Type Alias: TransactionRequestEIP2930\<quantity, index, type\>

> **TransactionRequestEIP2930**\<`quantity`, `index`, `type`\> = [`TransactionRequestBase`](TransactionRequestBase.md)\<`quantity`, `index`, `type`\> & [`ExactPartial`](ExactPartial.md)\<[`FeeValuesLegacy`](FeeValuesLegacy.md)\<`quantity`\>\> & `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:152

## Type Declaration

### accessList?

> `optional` **accessList?**: [`AccessList`](AccessList-2.md)

## Type Parameters

### quantity

`quantity` = `bigint`

### index

`index` = `number`

### type

`type` = `"eip2930"`
