[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionSerializableEIP7702

# Type Alias: TransactionSerializableEIP7702\<quantity, index\>

> **TransactionSerializableEIP7702**\<`quantity`, `index`\> = [`TransactionSerializableBase`](TransactionSerializableBase.md)\<`quantity`, `index`\> & [`ExactPartial`](ExactPartial.md)\<[`FeeValuesEIP1559`](FeeValuesEIP1559.md)\<`quantity`\>\> & `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:222

## Type Declaration

### accessList?

> `optional` **accessList?**: [`AccessList`](AccessList-2.md)

### authorizationList

> **authorizationList**: [`SignedAuthorizationList`](SignedAuthorizationList.md)

### chainId

> **chainId**: `number`

### type?

> `optional` **type?**: `"eip7702"`

### yParity?

> `optional` **yParity?**: `number`

## Type Parameters

### quantity

`quantity` = `bigint`

### index

`index` = `number`
