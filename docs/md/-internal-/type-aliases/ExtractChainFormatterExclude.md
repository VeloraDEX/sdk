[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ExtractChainFormatterExclude

# Type Alias: ExtractChainFormatterExclude\<chain, type\>

> **ExtractChainFormatterExclude**\<`chain`, `type`\> = `chain` *extends* `object` ? `formatters`\[`type`\] *extends* `object` ? [`Extract`](Extract.md)\<`exclude`, readonly `string`[]\>\[`number`\] : `""` : `""`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/chain.d.ts:153

## Type Parameters

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined`

### type

`type` *extends* keyof [`ChainFormatters`](ChainFormatters.md)
