[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / JsonFragment

# Interface: JsonFragment

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:40

A fragment for a method, event or error in a [JSON ABI format](link-solc-jsonabi).

## Properties

### anonymous?

> `readonly` `optional` **anonymous?**: `boolean`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:52

If the event is anonymous.

***

### constant?

> `readonly` `optional` **constant?**: `boolean`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:60

If the function is constant.

***

### gas?

> `readonly` `optional` **gas?**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:76

The gas limit to use when sending a transaction for this function.

***

### inputs?

> `readonly` `optional` **inputs?**: readonly [`JsonFragmentType`](JsonFragmentType-1.md)[]

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:68

The input parameters.

***

### name?

> `readonly` `optional` **name?**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:44

The name of the error, event, function, etc.

***

### outputs?

> `readonly` `optional` **outputs?**: readonly [`JsonFragmentType`](JsonFragmentType-1.md)[]

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:72

The output parameters.

***

### payable?

> `readonly` `optional` **payable?**: `boolean`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:56

If the function is payable.

***

### stateMutability?

> `readonly` `optional` **stateMutability?**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:64

The mutability state of the function.

***

### type?

> `readonly` `optional` **type?**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:48

The type of the fragment (e.g. ``event``, ``"function"``, etc.)
