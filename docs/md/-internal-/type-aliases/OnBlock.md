[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / OnBlock

# Type Alias: OnBlock()\<chain, includeTransactions, blockTag\>

> **OnBlock**\<`chain`, `includeTransactions`, `blockTag`\>: (`block`, `prevBlock`) => `void`

## Type Parameters

• **chain** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md)

• **includeTransactions** *extends* `boolean` = `false`

• **blockTag** *extends* [`BlockTag`](BlockTag.md) = `"latest"`

## Parameters

• **block**: [`OnBlockParameter`](OnBlockParameter.md)\<`chain`, `includeTransactions`, `blockTag`\>

• **prevBlock**: [`OnBlockParameter`](OnBlockParameter.md)\<`chain`, `includeTransactions`, `blockTag`\> \| `undefined`

## Returns

`void`

## Defined in

node\_modules/.pnpm/viem@2.39.0\_typescript@5.6.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/watchBlocks.d.ts:11
