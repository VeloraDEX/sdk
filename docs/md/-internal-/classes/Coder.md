[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Coder

# Abstract Class: Coder

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:11

## Constructors

### Constructor

> **new Coder**(`name`, `type`, `localName`, `dynamic`): `Coder`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:16

#### Parameters

##### name

`string`

##### type

`string`

##### localName

`string`

##### dynamic

`boolean`

#### Returns

`Coder`

## Properties

### dynamic

> `readonly` **dynamic**: `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:15

***

### localName

> `readonly` **localName**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:14

***

### name

> `readonly` **name**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:12

***

### type

> `readonly` **type**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:13

## Methods

### \_throwError()

> **\_throwError**(`message`, `value`): `void`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:17

#### Parameters

##### message

`string`

##### value

`any`

#### Returns

`void`

***

### decode()

> `abstract` **decode**(`reader`): `any`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:19

#### Parameters

##### reader

[`Reader`](Reader.md)

#### Returns

`any`

***

### defaultValue()

> `abstract` **defaultValue**(): `any`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:20

#### Returns

`any`

***

### encode()

> `abstract` **encode**(`writer`, `value`): `number`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:18

#### Parameters

##### writer

[`Writer`](Writer.md)

##### value

`any`

#### Returns

`number`
