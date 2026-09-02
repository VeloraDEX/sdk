[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionLegacy

# Type Alias: TransactionLegacy\<quantity, index, isPending, type\>

> **TransactionLegacy**\<`quantity`, `index`, `isPending`, `type`\> = [`Omit`](Omit-1.md)\<[`TransactionBase`](TransactionBase.md)\<`quantity`, `index`, `isPending`\>, `"yParity"`\> & `object` & [`FeeValuesLegacy`](FeeValuesLegacy.md)\<`quantity`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:86

## Type Declaration

### accessList?

> `optional` **accessList?**: `undefined`

EIP-2930 Access List.

### authorizationList?

> `optional` **authorizationList?**: `undefined`

### blobVersionedHashes?

> `optional` **blobVersionedHashes?**: `undefined`

### chainId?

> `optional` **chainId?**: `index`

Chain ID that this transaction is valid on.

### type

> **type**: `type`

### yParity?

> `optional` **yParity?**: `undefined`

## Type Parameters

### quantity

`quantity` = `bigint`

### index

`index` = `number`

### isPending

`isPending` *extends* `boolean` = `boolean`

### type

`type` = `"legacy"`
