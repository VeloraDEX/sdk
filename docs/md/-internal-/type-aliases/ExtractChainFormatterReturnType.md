[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ExtractChainFormatterReturnType

# Type Alias: ExtractChainFormatterReturnType\<chain, type, fallback\>

> **ExtractChainFormatterReturnType**\<`chain`, `type`, `fallback`\> = [`IsNarrowable`](IsNarrowable.md)\<`chain`, [`Chain`](Chain.md)\> *extends* `true` ? `chain` *extends* `object` ? `chain`\[`"formatters"`\] *extends* `undefined` ? `fallback` : [`IsNarrowable`](IsNarrowable.md)\<`formatter`, [`ChainFormatter`](ChainFormatter.md)\<`type`\>\> *extends* `true` ? [`ReturnType`](ReturnType.md)\<`formatter`\[`"format"`\]\> : `fallback` : `fallback` : `fallback`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/chain.d.ts:161

## Type Parameters

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined`

### type

`type` *extends* keyof [`ChainFormatters`](ChainFormatters.md)

### fallback

`fallback`
