[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / FeeValuesEIP4844

# Type Alias: FeeValuesEIP4844\<quantity\>

> **FeeValuesEIP4844**\<`quantity`\> = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/fee.d.ts:30

## Type Parameters

### quantity

`quantity` = `bigint`

## Properties

### gasPrice?

> `optional` **gasPrice?**: `undefined`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/fee.d.ts:31

***

### maxFeePerBlobGas

> **maxFeePerBlobGas**: `quantity`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/fee.d.ts:33

Maximum total fee per gas sender is willing to pay for blob gas (in wei).

***

### maxFeePerGas

> **maxFeePerGas**: `quantity`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/fee.d.ts:35

Total fee per gas in wei (gasPrice/baseFeePerGas + maxPriorityFeePerGas).

***

### maxPriorityFeePerGas

> **maxPriorityFeePerGas**: `quantity`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/fee.d.ts:37

Max priority fee per gas (in wei).
