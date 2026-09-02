[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / PayableCallOptions

# Interface: PayableCallOptions

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:53

## Extends

- [`NonPayableCallOptions`](NonPayableCallOptions.md)

## Properties

### data?

> `optional` **data?**: `string`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:50

#### Inherited from

[`NonPayableCallOptions`](NonPayableCallOptions.md).[`data`](NonPayableCallOptions.md#data)

***

### from?

> `optional` **from?**: `string`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:38

The address which is the call (the transaction) should be made from. For calls the `from` property is optional however it is
highly recommended to explicitly set it or it may default to address(0) depending on your node or provider.

#### Inherited from

[`NonPayableCallOptions`](NonPayableCallOptions.md).[`from`](NonPayableCallOptions.md#from)

***

### gas?

> `optional` **gas?**: `string`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:42

The maximum gas (gas limit) provided for this call (this transaction)

#### Inherited from

[`NonPayableCallOptions`](NonPayableCallOptions.md).[`gas`](NonPayableCallOptions.md#gas)

***

### gasPrice?

> `optional` **gasPrice?**: `string`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:48

The gas price in wei to use for this call `transaction`.

#### Inherited from

[`NonPayableCallOptions`](NonPayableCallOptions.md).[`gasPrice`](NonPayableCallOptions.md#gasprice)

***

### input?

> `optional` **input?**: `string`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:51

#### Inherited from

[`NonPayableCallOptions`](NonPayableCallOptions.md).[`input`](NonPayableCallOptions.md#input)

***

### maxFeePerGas?

> `optional` **maxFeePerGas?**: `string`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:44

#### Inherited from

[`NonPayableCallOptions`](NonPayableCallOptions.md).[`maxFeePerGas`](NonPayableCallOptions.md#maxfeepergas)

***

### maxPriorityFeePerGas?

> `optional` **maxPriorityFeePerGas?**: `string`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:43

#### Inherited from

[`NonPayableCallOptions`](NonPayableCallOptions.md).[`maxPriorityFeePerGas`](NonPayableCallOptions.md#maxpriorityfeepergas)

***

### nonce?

> `optional` **nonce?**: `string`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:33

#### Inherited from

[`NonPayableCallOptions`](NonPayableCallOptions.md).[`nonce`](NonPayableCallOptions.md#nonce)

***

### type?

> `optional` **type?**: `string` \| `number`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:49

#### Inherited from

[`NonPayableCallOptions`](NonPayableCallOptions.md).[`type`](NonPayableCallOptions.md#type)

***

### value?

> `optional` **value?**: `string`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:57
