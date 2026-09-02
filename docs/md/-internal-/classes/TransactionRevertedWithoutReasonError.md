[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionRevertedWithoutReasonError

# Class: TransactionRevertedWithoutReasonError\<ReceiptType\>

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:94

Base class for Web3 errors.

## Extends

- [`TransactionError`](TransactionError.md)\<`ReceiptType`\>

## Type Parameters

### ReceiptType

`ReceiptType` = [`TransactionReceipt`](../type-aliases/TransactionReceipt.md)

## Constructors

### Constructor

> **new TransactionRevertedWithoutReasonError**\<`ReceiptType`\>(`receipt?`): `TransactionRevertedWithoutReasonError`\<`ReceiptType`\>

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:95

#### Parameters

##### receipt?

`ReceiptType`

#### Returns

`TransactionRevertedWithoutReasonError`\<`ReceiptType`\>

#### Overrides

[`TransactionError`](TransactionError.md).[`constructor`](TransactionError.md#constructor)

## Properties

### cause

> **cause**: `Error` \| `undefined`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:9

#### Inherited from

[`TransactionError`](TransactionError.md).[`cause`](TransactionError.md#cause)

***

### code

> **code**: `number`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:5

#### Inherited from

[`TransactionError`](TransactionError.md).[`code`](TransactionError.md#code)

***

### message

> **message**: `string`

Defined in: node\_modules/.pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:1077

#### Inherited from

[`TransactionError`](TransactionError.md).[`message`](TransactionError.md#message)

***

### name

> `readonly` **name**: `string`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:6

#### Inherited from

[`TransactionError`](TransactionError.md).[`name`](TransactionError.md#name)

***

### receipt?

> `optional` **receipt?**: `ReceiptType`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:4

#### Inherited from

[`TransactionError`](TransactionError.md).[`receipt`](TransactionError.md#receipt)

***

### stack

> **stack**: `string` \| `undefined`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/web3\_error\_base.d.ts:8

#### Inherited from

[`TransactionError`](TransactionError.md).[`stack`](TransactionError.md#stack)

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

[`TransactionError`](TransactionError.md).[`prepareStackTrace`](TransactionError.md#preparestacktrace)

***

### stackTraceLimit

> `static` **stackTraceLimit**: `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/globals.d.ts:145

#### Inherited from

[`TransactionError`](TransactionError.md).[`stackTraceLimit`](TransactionError.md#stacktracelimit)

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

`TransactionError.innerError`

## Methods

### toJSON()

> **toJSON**(): `object`

Defined in: node\_modules/.pnpm/web3-errors@1.3.0/node\_modules/web3-errors/lib/commonjs/errors/transaction\_errors.d.ts:7

#### Returns

`object`

##### cause

> **cause**: `Error` \| `undefined`

##### code

> **code**: `number`

##### innerError

> **innerError**: `Error` \| `undefined`

##### message

> **message**: `string`

##### name

> **name**: `string`

##### receipt

> **receipt**: `ReceiptType` \| `undefined`

#### Inherited from

[`TransactionError`](TransactionError.md).[`toJSON`](TransactionError.md#tojson)

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

[`TransactionError`](TransactionError.md).[`captureStackTrace`](TransactionError.md#capturestacktrace)

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

[`TransactionError`](TransactionError.md).[`convertToString`](TransactionError.md#converttostring)
