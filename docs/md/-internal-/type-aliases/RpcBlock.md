[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / RpcBlock

# Type Alias: RpcBlock\<blockTag, includeTransactions, transaction\>

> **RpcBlock**\<`blockTag`, `includeTransactions`, `transaction`\> = [`Block`](Block.md)\<[`Quantity`](Quantity.md), `includeTransactions`, `blockTag`, `transaction`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/rpc.d.ts:28

## Type Parameters

### blockTag

`blockTag` *extends* [`BlockTag`](BlockTag-2.md) = [`BlockTag`](BlockTag-2.md)

### includeTransactions

`includeTransactions` *extends* `boolean` = `boolean`

### transaction

`transaction` = [`RpcTransaction`](RpcTransaction.md)\<`blockTag` *extends* `"pending"` ? `true` : `false`\>
