[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Uncle

# Type Alias: Uncle\<quantity, includeTransactions, blockTag, transaction\>

> **Uncle**\<`quantity`, `includeTransactions`, `blockTag`, `transaction`\> = [`Block`](Block.md)\<`quantity`, `includeTransactions`, `blockTag`, `transaction`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/block.d.ts:90

## Type Parameters

### quantity

`quantity` = `bigint`

### includeTransactions

`includeTransactions` *extends* `boolean` = `boolean`

### blockTag

`blockTag` *extends* [`BlockTag`](BlockTag-2.md) = [`BlockTag`](BlockTag-2.md)

### transaction

`transaction` = [`Transaction`](Transaction.md)\<`bigint`, `number`, `blockTag` *extends* `"pending"` ? `true` : `false`\>
