[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Transaction

# Type Alias: Transaction\<quantity, index, isPending\>

> **Transaction**\<`quantity`, `index`, `isPending`\> = [`OneOf`](OneOf.md)\<[`TransactionLegacy`](TransactionLegacy.md)\<`quantity`, `index`, `isPending`\> \| [`TransactionEIP2930`](TransactionEIP2930.md)\<`quantity`, `index`, `isPending`\> \| [`TransactionEIP1559`](TransactionEIP1559.md)\<`quantity`, `index`, `isPending`\> \| [`TransactionEIP4844`](TransactionEIP4844.md)\<`quantity`, `index`, `isPending`\> \| [`TransactionEIP7702`](TransactionEIP7702.md)\<`quantity`, `index`, `isPending`\>\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:134

## Type Parameters

### quantity

`quantity` = `bigint`

### index

`index` = `number`

### isPending

`isPending` *extends* `boolean` = `boolean`
