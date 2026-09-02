[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / BlockOverrides

# Type Alias: BlockOverrides\<bigintType, numberType\>

> **BlockOverrides**\<`bigintType`, `numberType`\> = `object`

Defined in: node\_modules/.pnpm/ox@0.14.34\_typescript@5.9.3\_zod@3.25.76/node\_modules/ox/\_types/core/BlockOverrides.d.ts:7

Block overrides.

## Type Parameters

### bigintType

`bigintType` = `bigint`

### numberType

`numberType` = `number`

## Properties

### baseFeePerGas?

> `optional` **baseFeePerGas?**: `bigintType`

Defined in: node\_modules/.pnpm/ox@0.14.34\_typescript@5.9.3\_zod@3.25.76/node\_modules/ox/\_types/core/BlockOverrides.d.ts:9

Base fee per gas.

***

### blobBaseFee?

> `optional` **blobBaseFee?**: `bigintType`

Defined in: node\_modules/.pnpm/ox@0.14.34\_typescript@5.9.3\_zod@3.25.76/node\_modules/ox/\_types/core/BlockOverrides.d.ts:11

Blob base fee.

***

### feeRecipient?

> `optional` **feeRecipient?**: [`Address`](Address-3.md)

Defined in: node\_modules/.pnpm/ox@0.14.34\_typescript@5.9.3\_zod@3.25.76/node\_modules/ox/\_types/core/BlockOverrides.d.ts:13

Fee recipient (also known as coinbase).

***

### gasLimit?

> `optional` **gasLimit?**: `bigintType`

Defined in: node\_modules/.pnpm/ox@0.14.34\_typescript@5.9.3\_zod@3.25.76/node\_modules/ox/\_types/core/BlockOverrides.d.ts:15

Gas limit.

***

### number?

> `optional` **number?**: `bigintType`

Defined in: node\_modules/.pnpm/ox@0.14.34\_typescript@5.9.3\_zod@3.25.76/node\_modules/ox/\_types/core/BlockOverrides.d.ts:17

Block number.

***

### prevRandao?

> `optional` **prevRandao?**: `bigintType`

Defined in: node\_modules/.pnpm/ox@0.14.34\_typescript@5.9.3\_zod@3.25.76/node\_modules/ox/\_types/core/BlockOverrides.d.ts:19

The previous value of randomness beacon.

***

### time?

> `optional` **time?**: `bigintType`

Defined in: node\_modules/.pnpm/ox@0.14.34\_typescript@5.9.3\_zod@3.25.76/node\_modules/ox/\_types/core/BlockOverrides.d.ts:21

Block timestamp.

***

### withdrawals?

> `optional` **withdrawals?**: [`Withdrawal`](Withdrawal.md)\<`bigintType`, `numberType`\>[]

Defined in: node\_modules/.pnpm/ox@0.14.34\_typescript@5.9.3\_zod@3.25.76/node\_modules/ox/\_types/core/BlockOverrides.d.ts:23

Withdrawals made by validators.
