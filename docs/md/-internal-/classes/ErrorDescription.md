[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ErrorDescription

# Class: ErrorDescription

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:88

When using the [[Interface-parseError]] to automatically match an
 error for a call result for parsing, an **ErrorDescription** is returned.

## Constructors

### Constructor

> **new ErrorDescription**(`fragment`, `selector`, `args`): `ErrorDescription`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:112

@_ignore:

#### Parameters

##### fragment

[`ErrorFragment`](ErrorFragment.md)

##### selector

`string`

##### args

[`Result`](Result.md)

#### Returns

`ErrorDescription`

## Properties

### args

> `readonly` **args**: [`Result`](Result.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:100

The arguments passed to the Error with ``revert``.

***

### fragment

> `readonly` **fragment**: [`ErrorFragment`](ErrorFragment.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:92

The matching fragment.

***

### name

> `readonly` **name**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:96

The name of the Error.

***

### selector

> `readonly` **selector**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:108

The selector for the Error.

***

### signature

> `readonly` **signature**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:104

The full Error signature.
