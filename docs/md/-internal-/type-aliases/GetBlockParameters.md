[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetBlockParameters

# Type Alias: GetBlockParameters\<includeTransactions, blockTag\>

> **GetBlockParameters**\<`includeTransactions`, `blockTag`\> = `object` & \{ `blockHash?`: [`Hash`](Hash.md); `blockNumber?`: `undefined`; `blockTag?`: `undefined`; \} \| \{ `blockHash?`: `undefined`; `blockNumber?`: `bigint`; `blockTag?`: `undefined`; \} \| \{ `blockHash?`: `undefined`; `blockNumber?`: `undefined`; `blockTag?`: `blockTag` \| [`BlockTag`](BlockTag-2.md); \}

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/getBlock.d.ts:13

## Type Declaration

### includeTransactions?

> `optional` **includeTransactions?**: `includeTransactions`

Whether or not to include transaction data in the response.

## Type Parameters

### includeTransactions

`includeTransactions` *extends* `boolean` = `false`

### blockTag

`blockTag` *extends* [`BlockTag`](BlockTag-2.md) = `"latest"`
