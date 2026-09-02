[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionDescription

# Class: TransactionDescription

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:54

When using the [[Interface-parseTransaction]] to automatically match
 a transaction data to its function for parsing,
 a **TransactionDescription** is returned.

## Constructors

### Constructor

> **new TransactionDescription**(`fragment`, `selector`, `args`, `value`): `TransactionDescription`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:82

@_ignore:

#### Parameters

##### fragment

[`FunctionFragment`](FunctionFragment.md)

##### selector

`string`

##### args

[`Result`](Result.md)

##### value

`bigint`

#### Returns

`TransactionDescription`

## Properties

### args

> `readonly` **args**: [`Result`](Result.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:66

The arguments passed to the Function from the transaction ``data``.

***

### fragment

> `readonly` **fragment**: [`FunctionFragment`](FunctionFragment.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:58

The matching fragment from the transaction ``data``.

***

### name

> `readonly` **name**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:62

The name of the Function from the transaction ``data``.

***

### selector

> `readonly` **selector**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:74

The selector for the Function from the transaction ``data``.

***

### signature

> `readonly` **signature**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:70

The full Function signature from the transaction ``data``.

***

### value

> `readonly` **value**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:78

The ``value`` (in wei) from the transaction.
