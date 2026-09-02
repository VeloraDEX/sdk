[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Fragment

# Abstract Class: Fragment

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:223

An abstract class to represent An individual fragment from a parse ABI.

## Extended by

- [`ConstructorFragment`](ConstructorFragment.md)
- [`FallbackFragment`](FallbackFragment.md)
- [`NamedFragment`](NamedFragment.md)

## Properties

### inputs

> `readonly` **inputs**: readonly [`ParamType`](ParamType.md)[]

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:231

The inputs for the fragment.

***

### type

> `readonly` **type**: [`FragmentType`](../type-aliases/FragmentType.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:227

The type of the fragment.

## Methods

### format()

> `abstract` **format**(`format?`): `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:239

Returns a string representation of this fragment as %%format%%.

#### Parameters

##### format?

[`FormatType`](../type-aliases/FormatType-1.md)

#### Returns

`string`

***

### from()

> `static` **from**(`obj`): `Fragment`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:244

Creates a new **Fragment** for %%obj%%, wich can be any supported
 ABI frgament type.

#### Parameters

##### obj

`any`

#### Returns

`Fragment`

***

### isConstructor()

> `static` **isConstructor**(`value`): `value is ConstructorFragment`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:248

Returns true if %%value%% is a [[ConstructorFragment]].

#### Parameters

##### value

`any`

#### Returns

`value is ConstructorFragment`

***

### isError()

> `static` **isError**(`value`): `value is ErrorFragment`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:252

Returns true if %%value%% is an [[ErrorFragment]].

#### Parameters

##### value

`any`

#### Returns

`value is ErrorFragment`

***

### isEvent()

> `static` **isEvent**(`value`): `value is EventFragment`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:256

Returns true if %%value%% is an [[EventFragment]].

#### Parameters

##### value

`any`

#### Returns

`value is EventFragment`

***

### isFunction()

> `static` **isFunction**(`value`): `value is FunctionFragment`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:260

Returns true if %%value%% is a [[FunctionFragment]].

#### Parameters

##### value

`any`

#### Returns

`value is FunctionFragment`

***

### isStruct()

> `static` **isStruct**(`value`): `value is StructFragment`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:264

Returns true if %%value%% is a [[StructFragment]].

#### Parameters

##### value

`any`

#### Returns

`value is StructFragment`
