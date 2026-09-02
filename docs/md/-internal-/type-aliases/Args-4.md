[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Args

# Type Alias: Args\<chain, tokens\>

> **Args**\<`chain`, `tokens`\> = `object` & [`TokenParameter`](TokenParameter.md)\<`chain`, `tokens`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/token/transfer.d.ts:59

## Type Declaration

### amount

> **amount**: [`AmountInput`](AmountInput.md)

Amount to transfer in base units, or as a formatted helper.

### from?

> `optional` **from?**: [`Address`](Address-1.md)

Address to transfer tokens from (uses an allowance via `transferFrom`).

### to

> **to**: [`Address`](Address-1.md)

Address to transfer tokens to.

## Type Parameters

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

### tokens

`tokens` *extends* [`Tokens`](Tokens.md) \| `undefined` = [`Tokens`](Tokens.md) \| `undefined`
