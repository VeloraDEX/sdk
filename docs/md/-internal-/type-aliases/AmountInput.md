[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AmountInput

# Type Alias: AmountInput

> **AmountInput** = `bigint` \| \{ `decimals?`: `number`; `formatted`: `string`; \}

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/token/internal.d.ts:60

A write amount: a base-unit bigint, or an explicit formatted helper.

## Union Members

`bigint`

***

### Type Literal

\{ `decimals?`: `number`; `formatted`: `string`; \}

#### decimals?

> `optional` **decimals?**: `number`

Token decimals used to parse `formatted`.

#### formatted

> **formatted**: `string`

Human-readable decimal amount.
