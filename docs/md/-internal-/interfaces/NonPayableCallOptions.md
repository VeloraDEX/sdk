[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / NonPayableCallOptions

# Interface: NonPayableCallOptions

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:32

## Extended by

- [`PayableCallOptions`](PayableCallOptions.md)

## Properties

### data?

> `optional` **data?**: `string`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:50

***

### from?

> `optional` **from?**: `string`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:38

The address which is the call (the transaction) should be made from. For calls the `from` property is optional however it is
highly recommended to explicitly set it or it may default to address(0) depending on your node or provider.

***

### gas?

> `optional` **gas?**: `string`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:42

The maximum gas (gas limit) provided for this call (this transaction)

***

### gasPrice?

> `optional` **gasPrice?**: `string`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:48

The gas price in wei to use for this call `transaction`.

***

### input?

> `optional` **input?**: `string`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:51

***

### maxFeePerGas?

> `optional` **maxFeePerGas?**: `string`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:44

***

### maxPriorityFeePerGas?

> `optional` **maxPriorityFeePerGas?**: `string`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:43

***

### nonce?

> `optional` **nonce?**: `string`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:33

***

### type?

> `optional` **type?**: `string` \| `number`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:49
