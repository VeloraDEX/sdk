[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Writer

# Class: Writer

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:22

## Constructors

### Constructor

> **new Writer**(`wordSize?`): `Writer`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:27

#### Parameters

##### wordSize?

`number`

#### Returns

`Writer`

## Properties

### \_data

> **\_data**: `Uint8Array`\<[`ArrayBufferLike`](../type-aliases/ArrayBufferLike.md)\>[]

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:24

***

### \_dataLength

> **\_dataLength**: `number`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:25

***

### \_padding

> **\_padding**: `Uint8Array`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:26

***

### wordSize

> `readonly` **wordSize**: `number`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:23

## Accessors

### data

#### Get Signature

> **get** **data**(): `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:28

##### Returns

`string`

***

### length

#### Get Signature

> **get** **length**(): `number`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:29

##### Returns

`number`

## Methods

### \_getValue()

> **\_getValue**(`value`): `Uint8Array`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:33

#### Parameters

##### value

[`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

`Uint8Array`

***

### \_writeData()

> **\_writeData**(`data`): `number`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:30

#### Parameters

##### data

`Uint8Array`

#### Returns

`number`

***

### appendWriter()

> **appendWriter**(`writer`): `number`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:31

#### Parameters

##### writer

`Writer`

#### Returns

`number`

***

### writeBytes()

> **writeBytes**(`value`): `number`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:32

#### Parameters

##### value

[`BytesLike`](../type-aliases/BytesLike-1.md)

#### Returns

`number`

***

### writeUpdatableValue()

> **writeUpdatableValue**(): (`value`) => `void`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:35

#### Returns

(`value`) => `void`

***

### writeValue()

> **writeValue**(`value`): `number`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:34

#### Parameters

##### value

[`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

`number`
