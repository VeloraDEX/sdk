[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ExtractChainFormatterParameters

# Type Alias: ExtractChainFormatterParameters\<chain, type, fallback\>

> **ExtractChainFormatterParameters**\<`chain`, `type`, `fallback`\> = `chain` *extends* `object` ? `formatters`\[`type`\] *extends* [`ChainFormatter`](ChainFormatter.md) ? [`Parameters`](Parameters-8.md)\<`formatters`\[`type`\]\[`"format"`\]\>\[`0`\] : `fallback` : `fallback`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/chain.d.ts:158

## Type Parameters

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined`

### type

`type` *extends* keyof [`ChainFormatters`](ChainFormatters.md)

### fallback

`fallback`
