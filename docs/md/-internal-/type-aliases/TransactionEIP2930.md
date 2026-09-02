[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionEIP2930

# Type Alias: TransactionEIP2930\<quantity, index, isPending, type\>

> **TransactionEIP2930**\<`quantity`, `index`, `isPending`, `type`\> = [`TransactionBase`](TransactionBase.md)\<`quantity`, `index`, `isPending`\> & `object` & [`FeeValuesLegacy`](FeeValuesLegacy.md)\<`quantity`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:96

## Type Declaration

### accessList

> **accessList**: [`AccessList`](AccessList-2.md)

EIP-2930 Access List.

### authorizationList?

> `optional` **authorizationList?**: `undefined`

### blobVersionedHashes?

> `optional` **blobVersionedHashes?**: `undefined`

### chainId

> **chainId**: `index`

Chain ID that this transaction is valid on.

### type

> **type**: `type`

## Type Parameters

### quantity

`quantity` = `bigint`

### index

`index` = `number`

### isPending

`isPending` *extends* `boolean` = `boolean`

### type

`type` = `"eip2930"`
