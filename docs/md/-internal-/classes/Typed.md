[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Typed

# Class: Typed

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:77

The **Typed** class to wrap values providing explicit type information.

## Extended by

- [`TypedBigInt`](../interfaces/TypedBigInt.md)
- [`TypedData`](../interfaces/TypedData.md)
- [`TypedString`](../interfaces/TypedString.md)

## Constructors

### Constructor

> **new Typed**(`gaurd`, `type`, `value`, `options?`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:94

@_ignore:

#### Parameters

##### gaurd

`any`

##### type

`string`

##### value

`any`

##### options?

`any`

#### Returns

`Typed`

## Properties

### \_typedSymbol

> `readonly` **\_typedSymbol**: `Symbol`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:90

@_ignore:

***

### type

> `readonly` **type**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:82

The type, as a Solidity-compatible type.

***

### value

> `readonly` **value**: `any`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:86

The actual value.

## Accessors

### arrayLength

#### Get Signature

> **get** **arrayLength**(): `number` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:132

Returns the length of the array type or ``-1`` if it is dynamic.

 Throws if the type is not an array.

##### Returns

`number` \| `null`

***

### tupleName

#### Get Signature

> **get** **tupleName**(): `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:126

Returns the tuple name, if this is a tuple. Throws otherwise.

##### Returns

`string` \| `null`

## Methods

### defaultValue()

> **defaultValue**(): `string` \| `number` \| `bigint` \| [`Result`](Result.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:102

The default value returned by this type.

#### Returns

`string` \| `number` \| `bigint` \| [`Result`](Result.md)

***

### format()

> **format**(): `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:98

Format the type as a Human-Readable type.

#### Returns

`string`

***

### isBigInt()

> **isBigInt**(): `this is TypedBigInt`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:114

Returns ``true`` and provides a type guard is this is a [[TypedBigInt]].

#### Returns

`this is TypedBigInt`

***

### isData()

> **isData**(): `this is TypedData`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:118

Returns ``true`` and provides a type guard is this is a [[TypedData]].

#### Returns

`this is TypedData`

***

### isString()

> **isString**(): `this is TypedString`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:122

Returns ``true`` and provides a type guard is this is a [[TypedString]].

#### Returns

`this is TypedString`

***

### maxValue()

> **maxValue**(): `string` \| `number` \| `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:110

The maximum value for numeric types.

#### Returns

`string` \| `number` \| `bigint`

***

### minValue()

> **minValue**(): `string` \| `number` \| `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:106

The minimum value for numeric types.

#### Returns

`string` \| `number` \| `bigint`

***

### address()

> `static` **address**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:532

Return a new ``address`` type for %%v%%.

#### Parameters

##### v

`string` \| [`Addressable`](../interfaces/Addressable.md)

#### Returns

`Typed`

***

### array()

> `static` **array**(`v`, `dynamic?`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:548

Return a new ``array`` type for %%v%%, allowing %%dynamic%% length.

#### Parameters

##### v

`any`[]

##### dynamic?

`boolean` \| `null`

#### Returns

`Typed`

***

### bool()

> `static` **bool**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:536

Return a new ``bool`` type for %%v%%.

#### Parameters

##### v

`any`

#### Returns

`Typed`

***

### bytes()

> `static` **bytes**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:540

Return a new ``bytes`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### bytes1()

> `static` **bytes1**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:404

Return a new ``bytes1`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### bytes10()

> `static` **bytes10**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:440

Return a new ``bytes10`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### bytes11()

> `static` **bytes11**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:444

Return a new ``bytes11`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### bytes12()

> `static` **bytes12**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:448

Return a new ``bytes12`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### bytes13()

> `static` **bytes13**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:452

Return a new ``bytes13`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### bytes14()

> `static` **bytes14**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:456

Return a new ``bytes14`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### bytes15()

> `static` **bytes15**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:460

Return a new ``bytes15`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### bytes16()

> `static` **bytes16**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:464

Return a new ``bytes16`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### bytes17()

> `static` **bytes17**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:468

Return a new ``bytes17`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### bytes18()

> `static` **bytes18**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:472

Return a new ``bytes18`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### bytes19()

> `static` **bytes19**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:476

Return a new ``bytes19`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### bytes2()

> `static` **bytes2**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:408

Return a new ``bytes2`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### bytes20()

> `static` **bytes20**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:480

Return a new ``bytes20`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### bytes21()

> `static` **bytes21**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:484

Return a new ``bytes21`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### bytes22()

> `static` **bytes22**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:488

Return a new ``bytes22`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### bytes23()

> `static` **bytes23**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:492

Return a new ``bytes23`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### bytes24()

> `static` **bytes24**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:496

Return a new ``bytes24`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### bytes25()

> `static` **bytes25**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:500

Return a new ``bytes25`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### bytes26()

> `static` **bytes26**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:504

Return a new ``bytes26`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### bytes27()

> `static` **bytes27**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:508

Return a new ``bytes27`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### bytes28()

> `static` **bytes28**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:512

Return a new ``bytes28`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### bytes29()

> `static` **bytes29**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:516

Return a new ``bytes29`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### bytes3()

> `static` **bytes3**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:412

Return a new ``bytes3`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### bytes30()

> `static` **bytes30**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:520

Return a new ``bytes30`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### bytes31()

> `static` **bytes31**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:524

Return a new ``bytes31`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### bytes32()

> `static` **bytes32**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:528

Return a new ``bytes32`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### bytes4()

> `static` **bytes4**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:416

Return a new ``bytes4`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### bytes5()

> `static` **bytes5**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:420

Return a new ``bytes5`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### bytes6()

> `static` **bytes6**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:424

Return a new ``bytes6`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### bytes7()

> `static` **bytes7**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:428

Return a new ``bytes7`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### bytes8()

> `static` **bytes8**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:432

Return a new ``bytes8`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### bytes9()

> `static` **bytes9**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:436

Return a new ``bytes9`` type for %%v%%.

#### Parameters

##### v

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

`Typed`

***

### dereference()

> `static` **dereference**\<`T`\>(`value`, `type`): `T`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:568

If the value is a [[Typed]] instance, validates the underlying value
 and returns it, otherwise returns value directly.

 This is useful for functions that with to accept either a [[Typed]]
 object or values.

#### Type Parameters

##### T

`T`

#### Parameters

##### value

`Typed` \| `T`

##### type

`string`

#### Returns

`T`

***

### from()

> `static` **from**(`type`, `value`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:136

Returns a new **Typed** of %%type%% with the %%value%%.

#### Parameters

##### type

`string`

##### value

`any`

#### Returns

`Typed`

***

### int()

> `static` **int**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:400

Return a new ``int256`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### int104()

> `static` **int104**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:320

Return a new ``int104`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### int112()

> `static` **int112**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:324

Return a new ``int112`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### int120()

> `static` **int120**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:328

Return a new ``int120`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### int128()

> `static` **int128**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:332

Return a new ``int128`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### int136()

> `static` **int136**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:336

Return a new ``int136`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### int144()

> `static` **int144**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:340

Return a new ``int144`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### int152()

> `static` **int152**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:344

Return a new ``int52`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### int16()

> `static` **int16**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:276

Return a new ``int16`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### int160()

> `static` **int160**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:348

Return a new ``int160`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### int168()

> `static` **int168**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:352

Return a new ``int168`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### int176()

> `static` **int176**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:356

Return a new ``int176`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### int184()

> `static` **int184**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:360

Return a new ``int184`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### int192()

> `static` **int192**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:364

Return a new ``int92`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### int200()

> `static` **int200**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:368

Return a new ``int200`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### int208()

> `static` **int208**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:372

Return a new ``int208`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### int216()

> `static` **int216**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:376

Return a new ``int216`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### int224()

> `static` **int224**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:380

Return a new ``int224`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### int232()

> `static` **int232**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:384

Return a new ``int232`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### int24()

> `static` **int24**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:280

Return a new ``int24`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### int240()

> `static` **int240**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:388

Return a new ``int240`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### int248()

> `static` **int248**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:392

Return a new ``int248`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### int256()

> `static` **int256**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:396

Return a new ``int256`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### int32()

> `static` **int32**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:284

Return a new ``int32`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### int40()

> `static` **int40**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:288

Return a new ``int40`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### int48()

> `static` **int48**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:292

Return a new ``int48`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### int56()

> `static` **int56**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:296

Return a new ``int56`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### int64()

> `static` **int64**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:300

Return a new ``int64`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### int72()

> `static` **int72**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:304

Return a new ``int72`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### int8()

> `static` **int8**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:272

Return a new ``int8`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### int80()

> `static` **int80**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:308

Return a new ``int80`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### int88()

> `static` **int88**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:312

Return a new ``int88`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### int96()

> `static` **int96**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:316

Return a new ``int96`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### isTyped()

> `static` **isTyped**(`value`): `value is Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:560

Returns true only if %%value%% is a [[Typed]] instance.

#### Parameters

##### value

`any`

#### Returns

`value is Typed`

***

### overrides()

> `static` **overrides**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:556

Return a new ``uint8`` type for %%v%%.

#### Parameters

##### v

[`Record`](../type-aliases/Record.md)\<`string`, `any`\>

#### Returns

`Typed`

***

### string()

> `static` **string**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:544

Return a new ``string`` type for %%v%%.

#### Parameters

##### v

`string`

#### Returns

`Typed`

***

### tuple()

> `static` **tuple**(`v`, `name?`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:552

Return a new ``tuple`` type for %%v%%, with the optional %%name%%.

#### Parameters

##### v

`any`[] \| [`Record`](../type-aliases/Record.md)\<`string`, `any`\>

##### name?

`string`

#### Returns

`Typed`

***

### uint()

> `static` **uint**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:268

Return a new ``uint256`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### uint104()

> `static` **uint104**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:188

Return a new ``uint104`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### uint112()

> `static` **uint112**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:192

Return a new ``uint112`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### uint120()

> `static` **uint120**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:196

Return a new ``uint120`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### uint128()

> `static` **uint128**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:200

Return a new ``uint128`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### uint136()

> `static` **uint136**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:204

Return a new ``uint136`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### uint144()

> `static` **uint144**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:208

Return a new ``uint144`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### uint152()

> `static` **uint152**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:212

Return a new ``uint152`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### uint16()

> `static` **uint16**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:144

Return a new ``uint16`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### uint160()

> `static` **uint160**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:216

Return a new ``uint160`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### uint168()

> `static` **uint168**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:220

Return a new ``uint168`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### uint176()

> `static` **uint176**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:224

Return a new ``uint176`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### uint184()

> `static` **uint184**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:228

Return a new ``uint184`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### uint192()

> `static` **uint192**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:232

Return a new ``uint192`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### uint200()

> `static` **uint200**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:236

Return a new ``uint200`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### uint208()

> `static` **uint208**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:240

Return a new ``uint208`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### uint216()

> `static` **uint216**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:244

Return a new ``uint216`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### uint224()

> `static` **uint224**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:248

Return a new ``uint224`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### uint232()

> `static` **uint232**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:252

Return a new ``uint232`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### uint24()

> `static` **uint24**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:148

Return a new ``uint24`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### uint240()

> `static` **uint240**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:256

Return a new ``uint240`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### uint248()

> `static` **uint248**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:260

Return a new ``uint248`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### uint256()

> `static` **uint256**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:264

Return a new ``uint256`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### uint32()

> `static` **uint32**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:152

Return a new ``uint32`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### uint40()

> `static` **uint40**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:156

Return a new ``uint40`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### uint48()

> `static` **uint48**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:160

Return a new ``uint48`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### uint56()

> `static` **uint56**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:164

Return a new ``uint56`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### uint64()

> `static` **uint64**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:168

Return a new ``uint64`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### uint72()

> `static` **uint72**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:172

Return a new ``uint72`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### uint8()

> `static` **uint8**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:140

Return a new ``uint8`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### uint80()

> `static` **uint80**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:176

Return a new ``uint80`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### uint88()

> `static` **uint88**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:180

Return a new ``uint88`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`

***

### uint96()

> `static` **uint96**(`v`): `Typed`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/typed.d.ts:184

Return a new ``uint96`` type for %%v%%.

#### Parameters

##### v

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

`Typed`
