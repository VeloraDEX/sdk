[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetTransactionParameters

# Type Alias: GetTransactionParameters\<blockTag\>

> **GetTransactionParameters**\<`blockTag`\> = [`OneOf`](OneOf.md)\<\{ `blockHash`: [`Hash`](Hash.md); `index`: `number`; \} \| \{ `blockNumber`: `bigint`; `index`: `number`; \} \| \{ `blockTag`: `blockTag` \| [`BlockTag`](BlockTag-2.md); `index`: `number`; \} \| \{ `hash`: [`Hash`](Hash.md); \} \| \{ `nonce`: `number`; `sender`: [`Address`](Address-1.md); \}\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/getTransaction.d.ts:13

## Type Parameters

### blockTag

`blockTag` *extends* [`BlockTag`](BlockTag-2.md) = `"latest"`
