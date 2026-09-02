[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TokenName

# Type Alias: TokenName\<chain, tokens\>

> **TokenName**\<`chain`, `tokens`\> = `chain` *extends* `object` ? `number` *extends* `chainId` ? `never` : `tokens` *extends* [`Tokens`](Tokens.md) ? [`TokenSymbolForChain`](TokenSymbolForChain.md)\<`tokens`\[`number`\], `chainId`\> : `never` : `never`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/token/internal.d.ts:19

**`Internal`**

Union of symbols of the Client's declared `tokens` whose `addresses` include
the Client's `chain.id`. Collapses to `never` when there is no chain mapping
(no `tokens`, no `chain`, a widened `chain.id`, or widened token symbols).

## Type Parameters

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined`

### tokens

`tokens` *extends* [`Tokens`](Tokens.md) \| `undefined`
