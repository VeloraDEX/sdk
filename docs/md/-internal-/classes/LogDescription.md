[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / LogDescription

# Class: LogDescription

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:23

When using the [[Interface-parseLog]] to automatically match a Log to its event
 for parsing, a **LogDescription** is returned.

## Constructors

### Constructor

> **new LogDescription**(`fragment`, `topic`, `args`): `LogDescription`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:47

@_ignore:

#### Parameters

##### fragment

[`EventFragment`](EventFragment.md)

##### topic

`string`

##### args

[`Result`](Result.md)

#### Returns

`LogDescription`

## Properties

### args

> `readonly` **args**: [`Result`](Result.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:43

The arguments passed into the Event with ``emit``.

***

### fragment

> `readonly` **fragment**: [`EventFragment`](EventFragment.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:27

The matching fragment for the ``topic0``.

***

### name

> `readonly` **name**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:31

The name of the Event.

***

### signature

> `readonly` **signature**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:35

The full Event signature.

***

### topic

> `readonly` **topic**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:39

The topic hash for the Event.
