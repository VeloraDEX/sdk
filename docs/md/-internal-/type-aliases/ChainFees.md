[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ChainFees

# Type Alias: ChainFees\<formatters\>

> **ChainFees**\<`formatters`\> = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/chain.d.ts:111

## Type Parameters

### formatters

`formatters` *extends* [`ChainFormatters`](ChainFormatters.md) \| `undefined` = [`ChainFormatters`](ChainFormatters.md) \| `undefined`

## Properties

### baseFeeMultiplier?

> `optional` **baseFeeMultiplier?**: `number` \| ((`args`) => `Promise`\<`number`\> \| `number`)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/chain.d.ts:118

The fee multiplier to use to account for fee fluctuations.
Used in the [`estimateFeesPerGas` Action](/docs/actions/public/estimateFeesPerGas).

#### Default

```ts
1.2
```

***

### ~~defaultPriorityFee?~~

> `optional` **defaultPriorityFee?**: `bigint` \| [`ChainMaxPriorityFeePerGasFn`](ChainMaxPriorityFeePerGasFn.md)\<`formatters`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/chain.d.ts:127

#### Deprecated

Use `maxPriorityFeePerGas` instead.

***

### estimateFeesPerGas?

> `optional` **estimateFeesPerGas?**: [`ChainEstimateFeesPerGasFn`](ChainEstimateFeesPerGasFn.md)\<`formatters`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/chain.d.ts:133

Allows customization of fee per gas values (e.g. `maxFeePerGas`/`maxPriorityFeePerGas`).

Overrides the return value in the [`estimateFeesPerGas` Action](/docs/actions/public/estimateFeesPerGas).

***

### maxPriorityFeePerGas?

> `optional` **maxPriorityFeePerGas?**: `bigint` \| [`ChainMaxPriorityFeePerGasFn`](ChainMaxPriorityFeePerGasFn.md)\<`formatters`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/chain.d.ts:125

The default `maxPriorityFeePerGas` to use when a priority
fee is not defined upon sending a transaction.

Overrides the return value in the [`estimateMaxPriorityFeePerGas` Action](/docs/actions/public/estimateMaxPriorityFeePerGas).
