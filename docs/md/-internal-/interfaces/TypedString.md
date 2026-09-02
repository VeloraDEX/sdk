[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TypedString

# Interface: TypedString

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:64

A **Typed** that represents a UTF-8 sequence of bytes.

## Extends

- [`Typed`](../classes/Typed.md)

## Properties

### \_typedSymbol

> `readonly` **\_typedSymbol**: `Symbol`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:90

@_ignore:

#### Inherited from

[`Typed`](../classes/Typed.md).[`_typedSymbol`](../classes/Typed.md#_typedsymbol)

***

### type

> `readonly` **type**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:82

The type, as a Solidity-compatible type.

#### Inherited from

[`Typed`](../classes/Typed.md).[`type`](../classes/Typed.md#type)

***

### value

> **value**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:68

The value.

#### Overrides

[`Typed`](../classes/Typed.md).[`value`](../classes/Typed.md#value)

## Accessors

### arrayLength

#### Get Signature

> **get** **arrayLength**(): `number` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:132

Returns the length of the array type or ``-1`` if it is dynamic.

 Throws if the type is not an array.

##### Returns

`number` \| `null`

#### Inherited from

`Typed.arrayLength`

***

### tupleName

#### Get Signature

> **get** **tupleName**(): `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:126

Returns the tuple name, if this is a tuple. Throws otherwise.

##### Returns

`string` \| `null`

#### Inherited from

`Typed.tupleName`

## Methods

### defaultValue()

> **defaultValue**(): `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:72

The default value for the string type is the empty string (i.e. ``""``).

#### Returns

`string`

#### Overrides

[`Typed`](../classes/Typed.md).[`defaultValue`](../classes/Typed.md#defaultvalue)

***

### format()

> **format**(): `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:98

Format the type as a Human-Readable type.

#### Returns

`string`

#### Inherited from

[`Typed`](../classes/Typed.md).[`format`](../classes/Typed.md#format)

***

### isBigInt()

> **isBigInt**(): `this is TypedBigInt`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:114

Returns ``true`` and provides a type guard is this is a [[TypedBigInt]].

#### Returns

`this is TypedBigInt`

#### Inherited from

[`Typed`](../classes/Typed.md).[`isBigInt`](../classes/Typed.md#isbigint)

***

### isData()

> **isData**(): `this is TypedData`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:118

Returns ``true`` and provides a type guard is this is a [[TypedData]].

#### Returns

`this is TypedData`

#### Inherited from

[`Typed`](../classes/Typed.md).[`isData`](../classes/Typed.md#isdata)

***

### isString()

> **isString**(): `this is TypedString`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:122

Returns ``true`` and provides a type guard is this is a [[TypedString]].

#### Returns

`this is TypedString`

#### Inherited from

[`Typed`](../classes/Typed.md).[`isString`](../classes/Typed.md#isstring)

***

### maxValue()

> **maxValue**(): `string` \| `number` \| `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:110

The maximum value for numeric types.

#### Returns

`string` \| `number` \| `bigint`

#### Inherited from

[`Typed`](../classes/Typed.md).[`maxValue`](../classes/Typed.md#maxvalue)

***

### minValue()

> **minValue**(): `string` \| `number` \| `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:106

The minimum value for numeric types.

#### Returns

`string` \| `number` \| `bigint`

#### Inherited from

[`Typed`](../classes/Typed.md).[`minValue`](../classes/Typed.md#minvalue)
