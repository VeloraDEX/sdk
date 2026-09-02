[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionRequestEIP7702

# Type Alias: TransactionRequestEIP7702\<quantity, index, type\>

> **TransactionRequestEIP7702**\<`quantity`, `index`, `type`\> = [`TransactionRequestBase`](TransactionRequestBase.md)\<`quantity`, `index`, `type`\> & [`ExactPartial`](ExactPartial.md)\<[`FeeValuesEIP1559`](FeeValuesEIP1559.md)\<`quantity`\>\> & `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:169

## Type Declaration

### accessList?

> `optional` **accessList?**: [`AccessList`](AccessList-2.md)

### authorizationList?

> `optional` **authorizationList?**: [`AuthorizationList`](AuthorizationList.md)\<`index`, `boolean`\>

## Type Parameters

### quantity

`quantity` = `bigint`

### index

`index` = `number`

### type

`type` = `"eip7702"`
