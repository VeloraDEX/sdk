[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionEIP4844

# Type Alias: TransactionEIP4844\<quantity, index, isPending, type\>

> **TransactionEIP4844**\<`quantity`, `index`, `isPending`, `type`\> = [`TransactionBase`](TransactionBase.md)\<`quantity`, `index`, `isPending`\> & `object` & [`FeeValuesEIP4844`](FeeValuesEIP4844.md)\<`quantity`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:114

## Type Declaration

### accessList

> **accessList**: [`AccessList`](AccessList-2.md)

EIP-2930 Access List.

### authorizationList?

> `optional` **authorizationList?**: `undefined`

### blobVersionedHashes

> **blobVersionedHashes**: readonly [`Hex`](Hex.md)[]

List of versioned blob hashes associated with the transaction's blobs.

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

`type` = `"eip4844"`
