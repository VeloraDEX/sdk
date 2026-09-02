[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / CallExceptionError

# Interface: CallExceptionError

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/errors.d.ts:298

This **Error** indicates a transaction reverted.

## Extends

- [`EthersError`](EthersError.md)\<`"CALL_EXCEPTION"`\>

## Properties

### action

> **action**: [`CallExceptionAction`](../type-aliases/CallExceptionAction.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/errors.d.ts:302

The action being performed when the revert was encountered.

***

### cause?

> `optional` **cause?**: `unknown`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2022.error.d.ts:26

#### Inherited from

[`EthersError`](EthersError.md).[`cause`](EthersError.md#cause)

***

### code

> **code**: [`ErrorCode`](../type-aliases/ErrorCode.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/errors.d.ts:89

The string error code.

#### Inherited from

[`EthersError`](EthersError.md).[`code`](EthersError.md#code)

***

### data

> **data**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/errors.d.ts:306

The revert data returned.

***

### error?

> `optional` **error?**: `Error`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/errors.d.ts:104

Any related error.

#### Inherited from

[`EthersError`](EthersError.md).[`error`](EthersError.md#error)

***

### info?

> `optional` **info?**: [`Record`](../type-aliases/Record.md)\<`string`, `any`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/errors.d.ts:100

Additional info regarding the error that may be useful.

 This is generally helpful mostly for human-based debugging.

#### Inherited from

[`EthersError`](EthersError.md).[`info`](EthersError.md#info)

***

### invocation

> **invocation**: \{ `args`: `any`[]; `method`: `string`; `signature`: `string`; \} \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/errors.d.ts:318

The contract invocation details, if available.

***

### message

> **message**: `string`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

[`EthersError`](EthersError.md).[`message`](EthersError.md#message)

***

### name

> **name**: `string`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1076

#### Inherited from

[`EthersError`](EthersError.md).[`name`](EthersError.md#name)

***

### reason

> **reason**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/errors.d.ts:310

A human-readable representation of data, if possible.

***

### receipt?

> `optional` **receipt?**: [`TransactionReceipt`](../classes/TransactionReceipt.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/errors.d.ts:335

If the error occurred in a transaction that was mined
 (with a status of ``0``), this is the receipt.

***

### revert

> **revert**: \{ `args`: `any`[]; `name`: `string`; `signature`: `string`; \} \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/errors.d.ts:326

The built-in or custom revert error, if available

***

### shortMessage

> **shortMessage**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/errors.d.ts:94

A short message describing the error, with minimal additional
 details.

#### Inherited from

[`EthersError`](EthersError.md).[`shortMessage`](EthersError.md#shortmessage)

***

### stack?

> `optional` **stack?**: `string`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1078

#### Inherited from

[`EthersError`](EthersError.md).[`stack`](EthersError.md#stack)

***

### transaction

> **transaction**: [`CallExceptionTransaction`](../type-aliases/CallExceptionTransaction.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/errors.d.ts:314

The transaction that triggered the exception.
