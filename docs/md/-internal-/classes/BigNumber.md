[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / BigNumber

# Class: BigNumber

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:4

## Implements

- [`Hexable`](../interfaces/Hexable.md)

## Constructors

### Constructor

> **new BigNumber**(`constructorGuard`, `hex`): `BigNumber`

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:7

#### Parameters

##### constructorGuard

`any`

##### hex

`string`

#### Returns

`BigNumber`

## Properties

### \_hex

> `readonly` **\_hex**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:5

***

### \_isBigNumber

> `readonly` **\_isBigNumber**: `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:6

## Methods

### abs()

> **abs**(): `BigNumber`

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:10

#### Returns

`BigNumber`

***

### add()

> **add**(`other`): `BigNumber`

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:11

#### Parameters

##### other

[`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

`BigNumber`

***

### and()

> **and**(`other`): `BigNumber`

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:17

#### Parameters

##### other

[`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

`BigNumber`

***

### div()

> **div**(`other`): `BigNumber`

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:13

#### Parameters

##### other

[`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

`BigNumber`

***

### eq()

> **eq**(`other`): `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:23

#### Parameters

##### other

[`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

`boolean`

***

### fromTwos()

> **fromTwos**(`value`): `BigNumber`

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:8

#### Parameters

##### value

`number`

#### Returns

`BigNumber`

***

### gt()

> **gt**(`other`): `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:26

#### Parameters

##### other

[`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

`boolean`

***

### gte()

> **gte**(`other`): `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:27

#### Parameters

##### other

[`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

`boolean`

***

### isNegative()

> **isNegative**(): `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:28

#### Returns

`boolean`

***

### isZero()

> **isZero**(): `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:29

#### Returns

`boolean`

***

### lt()

> **lt**(`other`): `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:24

#### Parameters

##### other

[`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

`boolean`

***

### lte()

> **lte**(`other`): `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:25

#### Parameters

##### other

[`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

`boolean`

***

### mask()

> **mask**(`value`): `BigNumber`

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:20

#### Parameters

##### value

`number`

#### Returns

`BigNumber`

***

### mod()

> **mod**(`other`): `BigNumber`

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:15

#### Parameters

##### other

[`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

`BigNumber`

***

### mul()

> **mul**(`other`): `BigNumber`

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:14

#### Parameters

##### other

[`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

`BigNumber`

***

### or()

> **or**(`other`): `BigNumber`

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:18

#### Parameters

##### other

[`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

`BigNumber`

***

### pow()

> **pow**(`other`): `BigNumber`

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:16

#### Parameters

##### other

[`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

`BigNumber`

***

### shl()

> **shl**(`value`): `BigNumber`

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:21

#### Parameters

##### value

`number`

#### Returns

`BigNumber`

***

### shr()

> **shr**(`value`): `BigNumber`

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:22

#### Parameters

##### value

`number`

#### Returns

`BigNumber`

***

### sub()

> **sub**(`other`): `BigNumber`

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:12

#### Parameters

##### other

[`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

`BigNumber`

***

### toBigInt()

> **toBigInt**(): `bigint`

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:31

#### Returns

`bigint`

***

### toHexString()

> **toHexString**(): `string`

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:33

#### Returns

`string`

#### Implementation of

[`Hexable`](../interfaces/Hexable.md).[`toHexString`](../interfaces/Hexable.md#tohexstring)

***

### toJSON()

> **toJSON**(`key?`): `any`

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:34

#### Parameters

##### key?

`string`

#### Returns

`any`

***

### toNumber()

> **toNumber**(): `number`

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:30

#### Returns

`number`

***

### toString()

> **toString**(): `string`

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:32

Returns a string representation of an object.

#### Returns

`string`

***

### toTwos()

> **toTwos**(`value`): `BigNumber`

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:9

#### Parameters

##### value

`number`

#### Returns

`BigNumber`

***

### xor()

> **xor**(`other`): `BigNumber`

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:19

#### Parameters

##### other

[`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

`BigNumber`

***

### from()

> `static` **from**(`value`): `BigNumber`

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:35

#### Parameters

##### value

`any`

#### Returns

`BigNumber`

***

### isBigNumber()

> `static` **isBigNumber**(`value`): `value is BigNumber`

Defined in: node\_modules/.pnpm/@ethersproject+bignumber@5.8.0/node\_modules/@ethersproject/bignumber/lib/bignumber.d.ts:36

#### Parameters

##### value

`any`

#### Returns

`value is BigNumber`
