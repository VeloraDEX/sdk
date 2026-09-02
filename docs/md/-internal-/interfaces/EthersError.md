[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / EthersError

# Interface: EthersError\<T\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/errors.d.ts:85

All errors in Ethers include properties to assist in
 machine-readable errors.

## Extends

- `Error`

## Extended by

- [`CallExceptionError`](CallExceptionError.md)

## Type Parameters

### T

`T` *extends* [`ErrorCode`](../type-aliases/ErrorCode.md) = [`ErrorCode`](../type-aliases/ErrorCode.md)

## Properties

### cause?

> `optional` **cause?**: `unknown`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:26

#### Inherited from

`Error.cause`

***

### code

> **code**: [`ErrorCode`](../type-aliases/ErrorCode.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/errors.d.ts:89

The string error code.

***

### error?

> `optional` **error?**: `Error`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/errors.d.ts:104

Any related error.

***

### info?

> `optional` **info?**: [`Record`](../type-aliases/Record.md)\<`string`, `any`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/errors.d.ts:100

Additional info regarding the error that may be useful.

 This is generally helpful mostly for human-based debugging.

***

### message

> **message**: `string`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

`Error.message`

***

### name

> **name**: `string`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

`Error.name`

***

### shortMessage

> **shortMessage**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/errors.d.ts:94

A short message describing the error, with minimal additional
 details.

***

### stack?

> `optional` **stack?**: `string`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

`Error.stack`
