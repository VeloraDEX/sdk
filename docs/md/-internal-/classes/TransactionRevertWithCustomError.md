[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionRevertWithCustomError

# Class: TransactionRevertWithCustomError\<ReceiptType\>

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:55

This error is used when a transaction to a smart contract fails and
a custom user error (https://blog.soliditylang.org/2021/04/21/custom-errors/)
is able to be parsed from the revert reason

## Extends

- [`TransactionRevertInstructionError`](TransactionRevertInstructionError.md)\<`ReceiptType`\>

## Type Parameters

### ReceiptType

`ReceiptType` = [`TransactionReceipt`](../type-aliases/TransactionReceipt.md)

## Constructors

### Constructor

> **new TransactionRevertWithCustomError**\<`ReceiptType`\>(`reason`, `customErrorName`, `customErrorDecodedSignature`, `customErrorArguments`, `signature?`, `receipt?`, `data?`): `TransactionRevertWithCustomError`\<`ReceiptType`\>

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:64

#### Parameters

##### reason

`string`

##### customErrorName

`string`

##### customErrorDecodedSignature

`string`

##### customErrorArguments

[`Record`](../type-aliases/Record.md)\<`string`, `unknown`\>

##### signature?

`string`

##### receipt?

`ReceiptType`

##### data?

`string`

#### Returns

`TransactionRevertWithCustomError`\<`ReceiptType`\>

#### Overrides

[`TransactionRevertInstructionError`](TransactionRevertInstructionError.md).[`constructor`](TransactionRevertInstructionError.md#constructor)

## Properties

### cause

> **cause**: `Error` \| `undefined`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:9

#### Inherited from

[`TransactionRevertInstructionError`](TransactionRevertInstructionError.md).[`cause`](TransactionRevertInstructionError.md#cause)

***

### code

> **code**: `number`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:63

#### Overrides

[`TransactionRevertInstructionError`](TransactionRevertInstructionError.md).[`code`](TransactionRevertInstructionError.md#code)

***

### customErrorArguments

> **customErrorArguments**: [`Record`](../type-aliases/Record.md)\<`string`, `unknown`\>

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:59

***

### customErrorDecodedSignature

> **customErrorDecodedSignature**: `string`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:58

***

### customErrorName

> **customErrorName**: `string`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:57

***

### data?

> `optional` **data?**: `string`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:62

#### Overrides

[`TransactionRevertInstructionError`](TransactionRevertInstructionError.md).[`data`](TransactionRevertInstructionError.md#data)

***

### message

> **message**: `string`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

[`TransactionRevertInstructionError`](TransactionRevertInstructionError.md).[`message`](TransactionRevertInstructionError.md#message)

***

### name

> `readonly` **name**: `string`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:6

#### Inherited from

[`TransactionRevertInstructionError`](TransactionRevertInstructionError.md).[`name`](TransactionRevertInstructionError.md#name)

***

### reason

> **reason**: `string`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:56

#### Overrides

[`TransactionRevertInstructionError`](TransactionRevertInstructionError.md).[`reason`](TransactionRevertInstructionError.md#reason)

***

### receipt?

> `optional` **receipt?**: `ReceiptType`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:61

#### Overrides

[`TransactionRevertInstructionError`](TransactionRevertInstructionError.md).[`receipt`](TransactionRevertInstructionError.md#receipt)

***

### signature?

> `optional` **signature?**: `string`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:60

#### Overrides

[`TransactionRevertInstructionError`](TransactionRevertInstructionError.md).[`signature`](TransactionRevertInstructionError.md#signature)

***

### stack

> **stack**: `string` \| `undefined`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:8

#### Inherited from

[`TransactionRevertInstructionError`](TransactionRevertInstructionError.md).[`stack`](TransactionRevertInstructionError.md#stack)

***

### prepareStackTrace?

> `static` `optional` **prepareStackTrace?**: (`err`, `stackTraces`) => `any`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:143

Optional override for formatting stack traces

#### Parameters

##### err

`Error`

##### stackTraces

[`CallSite`](../interfaces/CallSite.md)[]

#### Returns

`any`

#### See

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

[`TransactionRevertInstructionError`](TransactionRevertInstructionError.md).[`prepareStackTrace`](TransactionRevertInstructionError.md#preparestacktrace)

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:145

#### Inherited from

[`TransactionRevertInstructionError`](TransactionRevertInstructionError.md).[`stackTraceLimit`](TransactionRevertInstructionError.md#stacktracelimit)

## Accessors

### innerError

#### Get Signature

> **get** **innerError**(): `Error` \| `Error`[] \| `undefined`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:13

##### Deprecated

Use the `cause` property instead.

##### Returns

`Error` \| `Error`[] \| `undefined`

#### Set Signature

> **set** **innerError**(`cause`): `void`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:17

##### Deprecated

Use the `cause` property instead.

##### Parameters

###### cause

`Error` \| `Error`[] \| `undefined`

##### Returns

`void`

#### Inherited from

`TransactionRevertInstructionError.innerError`

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:65

#### Returns

`object`

##### cause

> **cause**: `Error` \| `undefined`

##### code

> **code**: `number`

##### customErrorArguments

> **customErrorArguments**: [`Record`](../type-aliases/Record.md)\<`string`, `unknown`\>

##### customErrorDecodedSignature

> **customErrorDecodedSignature**: `string`

##### customErrorName

> **customErrorName**: `string`

##### data

> **data**: `string` \| `undefined`

##### innerError

> **innerError**: `Error` \| `undefined`

##### message

> **message**: `string`

##### name

> **name**: `string`

##### reason

> **reason**: `string`

##### receipt

> **receipt**: `ReceiptType` \| `undefined`

##### signature

> **signature**: `string` \| `undefined`

#### Overrides

[`TransactionRevertInstructionError`](TransactionRevertInstructionError.md).[`toJSON`](TransactionRevertInstructionError.md#tojson)

***

### captureStackTrace()

> `static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:136

Create .stack property on a target object

#### Parameters

##### targetObject

`object`

##### constructorOpt?

`Function`

#### Returns

`void`

#### Inherited from

[`TransactionRevertInstructionError`](TransactionRevertInstructionError.md).[`captureStackTrace`](TransactionRevertInstructionError.md#capturestacktrace)

***

### convertToString()

> `static` **convertToString**(`value`, `unquotValue?`): `string`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:19

#### Parameters

##### value

`unknown`

##### unquotValue?

`boolean`

#### Returns

`string`

#### Inherited from

[`TransactionRevertInstructionError`](TransactionRevertInstructionError.md).[`convertToString`](TransactionRevertInstructionError.md#converttostring)
