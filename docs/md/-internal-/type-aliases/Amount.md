[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Amount

# Type Alias: Amount

> **Amount** = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/token/internal.d.ts:51

A token amount, expressed both in the token's base units (`amount`) and as a
human-readable decimal string (`formatted`, derived from the token's
`decimals`).

## Properties

### amount

> **amount**: `bigint`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/token/internal.d.ts:53

Amount in the token's base units.

***

### decimals

> **decimals**: `number`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/token/internal.d.ts:55

Token decimals used to derive `formatted`.

***

### formatted

> **formatted**: `string`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/token/internal.d.ts:57

Amount formatted as a human-readable decimal string.
