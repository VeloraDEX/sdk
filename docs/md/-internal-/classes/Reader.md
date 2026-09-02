[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Reader

# Class: Reader

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:37

## Constructors

### Constructor

> **new Reader**(`data`, `wordSize?`, `coerceFunc?`, `allowLoose?`): `Reader`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:43

#### Parameters

##### data

[`BytesLike`](../type-aliases/BytesLike-1.md)

##### wordSize?

`number`

##### coerceFunc?

[`CoerceFunc`](../type-aliases/CoerceFunc-1.md)

##### allowLoose?

`boolean`

#### Returns

`Reader`

## Properties

### \_coerceFunc

> `readonly` **\_coerceFunc**: [`CoerceFunc`](../type-aliases/CoerceFunc-1.md)

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:41

***

### \_data

> `readonly` **\_data**: `Uint8Array`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:40

***

### \_offset

> **\_offset**: `number`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:42

***

### allowLoose

> `readonly` **allowLoose**: `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:39

***

### wordSize

> `readonly` **wordSize**: `number`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:38

## Accessors

### consumed

#### Get Signature

> **get** **consumed**(): `number`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:45

##### Returns

`number`

***

### data

#### Get Signature

> **get** **data**(): `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:44

##### Returns

`string`

## Methods

### \_peekBytes()

> **\_peekBytes**(`offset`, `length`, `loose?`): `Uint8Array`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:48

#### Parameters

##### offset

`number`

##### length

`number`

##### loose?

`boolean`

#### Returns

`Uint8Array`

***

### coerce()

> **coerce**(`name`, `value`): `any`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:47

#### Parameters

##### name

`string`

##### value

`any`

#### Returns

`any`

***

### readBytes()

> **readBytes**(`length`, `loose?`): `Uint8Array`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:50

#### Parameters

##### length

`number`

##### loose?

`boolean`

#### Returns

`Uint8Array`

***

### readValue()

> **readValue**(): [`BigNumber`](BigNumber.md)

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:51

#### Returns

[`BigNumber`](BigNumber.md)

***

### subReader()

> **subReader**(`offset`): `Reader`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:49

#### Parameters

##### offset

`number`

#### Returns

`Reader`

***

### coerce()

> `static` **coerce**(`name`, `value`): `any`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/coders/abstract-coder.d.ts:46

#### Parameters

##### name

`string`

##### value

`any`

#### Returns

`any`
