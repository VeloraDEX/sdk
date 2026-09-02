[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractInitOptions

# Interface: ContractInitOptions

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:6

## Properties

### data?

> `readonly` `optional` **data?**: [`Bytes`](../type-aliases/Bytes-1.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:23

The byte code of the contract. Used when the contract gets [deployed](../classes/Contract-2.md#deploy)

***

### dataInputFill?

> `readonly` `optional` **dataInputFill?**: `"data"` \| `"input"` \| `"both"`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:30

***

### from?

> `readonly` `optional` **from?**: `string`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:19

The address transactions should be made from

***

### gas?

> `readonly` `optional` **gas?**: `string`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:10

The maximum gas provided for a transaction (gas limit).

***

### gasLimit?

> `readonly` `optional` **gasLimit?**: `string`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:11

***

### gasPrice?

> `readonly` `optional` **gasPrice?**: `string`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:15

The gas price in wei to use for transactions.

***

### input?

> `readonly` `optional` **input?**: [`Bytes`](../type-aliases/Bytes-1.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:24

***

### provider?

> `readonly` `optional` **provider?**: `string` \| [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<[`EthExecutionAPI`](../type-aliases/EthExecutionAPI.md)\>

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:25

***

### syncWithContext?

> `readonly` `optional` **syncWithContext?**: `boolean`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_contract\_types.d.ts:29

If `true`, the defaults of the contract instance will be updated automatically based on the changes of the context used to instantiate the contract.
