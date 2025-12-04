[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / BlockOverrides

# Type Alias: BlockOverrides\<bigintType, numberType\>

> **BlockOverrides**\<`bigintType`, `numberType`\>: `object`

Block overrides.

## Type Parameters

• **bigintType** = `bigint`

• **numberType** = `number`

## Type declaration

### baseFeePerGas?

> `optional` **baseFeePerGas**: `bigintType`

Base fee per gas.

### blobBaseFee?

> `optional` **blobBaseFee**: `bigintType`

Blob base fee.

### feeRecipient?

> `optional` **feeRecipient**: [`Address`](Address.md)

Fee recipient (also known as coinbase).

### gasLimit?

> `optional` **gasLimit**: `bigintType`

Gas limit.

### number?

> `optional` **number**: `bigintType`

Block number.

### prevRandao?

> `optional` **prevRandao**: `bigintType`

The previous value of randomness beacon.

### time?

> `optional` **time**: `bigintType`

Block timestamp.

### withdrawals?

> `optional` **withdrawals**: [`Withdrawal`](Withdrawal.md)\<`bigintType`, `numberType`\>[]

Withdrawals made by validators.

## Defined in

node\_modules/viem/node\_modules/ox/\_types/core/BlockOverrides.d.ts:7
