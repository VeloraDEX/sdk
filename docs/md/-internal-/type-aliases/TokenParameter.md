[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TokenParameter

# Type Alias: TokenParameter\<chain, tokens\>

> **TokenParameter**\<`chain`, `tokens`\> = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/token/internal.d.ts:30

Selects an ERC-20 token by `token`, which is either the symbol of a token
declared on the Client's `tokens` array or a contract `address`.

When `token` is a declared symbol (or an address that matches a declared
token), token metadata is resolved from the Client's `tokens` array.

## Type Parameters

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined`

### tokens

`tokens` *extends* [`Tokens`](Tokens.md) \| `undefined`

## Properties

### token

> **token**: [`TokenName`](TokenName.md)\<`chain`, `tokens`\> \| [`Address`](Address-1.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/token/internal.d.ts:36

Token to operate on: either the symbol of a token declared on the Client's
`tokens` array (with an address for the Client's `chain.id`), or a
contract `address`.
