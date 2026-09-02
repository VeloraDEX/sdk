[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / FeeHistory

# Type Alias: FeeHistory\<quantity\>

> **FeeHistory**\<`quantity`\> = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/fee.d.ts:2

## Type Parameters

### quantity

`quantity` = `bigint`

## Properties

### baseFeePerGas

> **baseFeePerGas**: `quantity`[]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/fee.d.ts:7

An array of block base fees per gas (in wei). This includes the next block after
the newest of the returned range, because this value can be derived from the newest block.
Zeroes are returned for pre-EIP-1559 blocks.

***

### gasUsedRatio

> **gasUsedRatio**: `number`[]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/fee.d.ts:9

An array of block gas used ratios. These are calculated as the ratio of gasUsed and gasLimit.

***

### oldestBlock

> **oldestBlock**: `quantity`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/fee.d.ts:11

Lowest number block of the returned range.

***

### reward?

> `optional` **reward?**: `quantity`[][]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/fee.d.ts:13

An array of effective priority fees (in wei) per gas data points from a single block. All zeroes are returned if the block is empty.
