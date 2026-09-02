[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TokenParameters

# Type Alias: TokenParameters\<chain, tokens\>

> **TokenParameters**\<`chain`, `tokens`\> = [`TokenParameter`](TokenParameter.md)\<`chain`, `tokens`\> & `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/token/internal.d.ts:38

## Type Declaration

### decimals?

> `optional` **decimals?**: `number`

Decimals used to convert between base units and the human-readable amount.
Inferred from the Client's `tokens` array when `token` matches a declared
token; otherwise fetched from the token contract when needed.

## Type Parameters

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined`

### tokens

`tokens` *extends* [`Tokens`](Tokens.md) \| `undefined`
