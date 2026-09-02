[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AbiCoder

# Class: AbiCoder

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/abi-coder.d.ts:5

## Constructors

### Constructor

> **new AbiCoder**(`coerceFunc?`): `AbiCoder`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/abi-coder.d.ts:7

#### Parameters

##### coerceFunc?

[`CoerceFunc`](../type-aliases/CoerceFunc.md)

#### Returns

`AbiCoder`

## Properties

### coerceFunc

> `readonly` **coerceFunc**: [`CoerceFunc`](../type-aliases/CoerceFunc.md)

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/abi-coder.d.ts:6

## Methods

### \_getCoder()

> **\_getCoder**(`param`): [`Coder`](Coder.md)

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/abi-coder.d.ts:8

#### Parameters

##### param

[`ParamType`](ParamType-1.md)

#### Returns

[`Coder`](Coder.md)

***

### \_getReader()

> **\_getReader**(`data`, `allowLoose?`): [`Reader`](Reader.md)

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/abi-coder.d.ts:10

#### Parameters

##### data

`Uint8Array`

##### allowLoose?

`boolean`

#### Returns

[`Reader`](Reader.md)

***

### \_getWordSize()

> **\_getWordSize**(): `number`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/abi-coder.d.ts:9

#### Returns

`number`

***

### \_getWriter()

> **\_getWriter**(): [`Writer`](Writer.md)

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/abi-coder.d.ts:11

#### Returns

[`Writer`](Writer.md)

***

### decode()

> **decode**(`types`, `data`, `loose?`): [`Result`](../interfaces/Result.md)

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/abi-coder.d.ts:14

#### Parameters

##### types

readonly (`string` \| [`ParamType`](ParamType-1.md))[]

##### data

[`BytesLike`](../type-aliases/BytesLike-1.md)

##### loose?

`boolean`

#### Returns

[`Result`](../interfaces/Result.md)

***

### encode()

> **encode**(`types`, `values`): `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/abi-coder.d.ts:13

#### Parameters

##### types

readonly (`string` \| [`ParamType`](ParamType-1.md))[]

##### values

readonly `any`[]

#### Returns

`string`

***

### getDefaultValue()

> **getDefaultValue**(`types`): [`Result`](../interfaces/Result.md)

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/abi-coder.d.ts:12

#### Parameters

##### types

readonly (`string` \| [`ParamType`](ParamType-1.md))[]

#### Returns

[`Result`](../interfaces/Result.md)
