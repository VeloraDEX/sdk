[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ChainEstimateFeesPerGasFnParameters

# Type Alias: ChainEstimateFeesPerGasFnParameters\<formatters\>

> **ChainEstimateFeesPerGasFnParameters**\<`formatters`\> = `object` & [`ChainFeesFnParameters`](ChainFeesFnParameters.md)\<`formatters`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/chain.d.ts:103

## Type Declaration

### multiply

> **multiply**: (`x`) => `bigint`

A function to multiply the base fee based on the `baseFeeMultiplier` value.

#### Parameters

##### x

`bigint`

#### Returns

`bigint`

### type

> **type**: [`FeeValuesType`](FeeValuesType.md)

The type of fees to return.

## Type Parameters

### formatters

`formatters` *extends* [`ChainFormatters`](ChainFormatters.md) \| `undefined` = [`ChainFormatters`](ChainFormatters.md) \| `undefined`
