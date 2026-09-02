[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / OnBlock

# Type Alias: OnBlock\<chain, includeTransactions, blockTag\>

> **OnBlock**\<`chain`, `includeTransactions`, `blockTag`\> = (`block`, `prevBlock`) => `void`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/watchBlocks.d.ts:11

## Type Parameters

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md)

### includeTransactions

`includeTransactions` *extends* `boolean` = `false`

### blockTag

`blockTag` *extends* [`BlockTag`](BlockTag-2.md) = `"latest"`

## Parameters

### block

[`OnBlockParameter`](OnBlockParameter.md)\<`chain`, `includeTransactions`, `blockTag`\>

### prevBlock

[`OnBlockParameter`](OnBlockParameter.md)\<`chain`, `includeTransactions`, `blockTag`\> \| `undefined`

## Returns

`void`
