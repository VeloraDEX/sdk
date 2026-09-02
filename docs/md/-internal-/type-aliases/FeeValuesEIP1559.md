[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / FeeValuesEIP1559

# Type Alias: FeeValuesEIP1559\<quantity\>

> **FeeValuesEIP1559**\<`quantity`\> = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/fee.d.ts:22

## Type Parameters

### quantity

`quantity` = `bigint`

## Properties

### gasPrice?

> `optional` **gasPrice?**: `undefined`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/fee.d.ts:23

***

### maxFeePerBlobGas?

> `optional` **maxFeePerBlobGas?**: `undefined`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/fee.d.ts:24

***

### maxFeePerGas

> **maxFeePerGas**: `quantity`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/fee.d.ts:26

Total fee per gas in wei (gasPrice/baseFeePerGas + maxPriorityFeePerGas).

***

### maxPriorityFeePerGas

> **maxPriorityFeePerGas**: `quantity`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/fee.d.ts:28

Max priority fee per gas (in wei).
