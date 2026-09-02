[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Parameters

# Type Alias: Parameters\<addresses\>

> **Parameters**\<`addresses`\> = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/tokens/defineToken.d.ts:70

## Type Parameters

### addresses

`addresses` *extends* [`Record`](Record.md)\<`number`, [`Address`](Address-1.md)\> = [`Record`](Record.md)\<`number`, [`Address`](Address-1.md)\>

## Properties

### addresses

> **addresses**: `addresses`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/tokens/defineToken.d.ts:72

Token contract addresses, keyed by chain id.

***

### currency?

> `optional` **currency?**: `string`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/tokens/defineToken.d.ts:74

Currency denomination of the token (e.g. `'USD'`).

***

### decimals

> **decimals**: `number`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/tokens/defineToken.d.ts:76

Number of decimals the token uses.

***

### name?

> `optional` **name?**: `string`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/tokens/defineToken.d.ts:78

Human-readable name of the token.

***

### popular?

> `optional` **popular?**: `boolean`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/tokens/defineToken.d.ts:80

Whether the token should be treated as popular in token lists.

***

### symbol?

> `optional` **symbol?**: `string`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/tokens/defineToken.d.ts:82

Ticker symbol of the token.
