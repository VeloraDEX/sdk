[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / StructFragment

# Class: StructFragment

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:447

A Fragment which represents a structure.

## Extends

- [`NamedFragment`](NamedFragment.md)

## Properties

### inputs

> `readonly` **inputs**: readonly [`ParamType`](ParamType.md)[]

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:231

The inputs for the fragment.

#### Inherited from

[`NamedFragment`](NamedFragment.md).[`inputs`](NamedFragment.md#inputs)

***

### name

> `readonly` **name**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:274

The name of the fragment.

#### Inherited from

[`NamedFragment`](NamedFragment.md).[`name`](NamedFragment.md#name)

***

### type

> `readonly` **type**: [`FragmentType`](../type-aliases/FragmentType.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:227

The type of the fragment.

#### Inherited from

[`NamedFragment`](NamedFragment.md).[`type`](NamedFragment.md#type)

## Methods

### format()

> **format**(): `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:455

Returns a string representation of this struct as %%format%%.

#### Returns

`string`

#### Overrides

[`NamedFragment`](NamedFragment.md).[`format`](NamedFragment.md#format)

***

### from()

> `static` **from**(`obj`): `StructFragment`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:459

Returns a new **StructFragment** for %%obj%%.

#### Parameters

##### obj

`any`

#### Returns

`StructFragment`

#### Overrides

[`NamedFragment`](NamedFragment.md).[`from`](NamedFragment.md#from)

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

#### Inherited from

[`NamedFragment`](NamedFragment.md).[`isConstructor`](NamedFragment.md#isconstructor)

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

#### Inherited from

[`NamedFragment`](NamedFragment.md).[`isError`](NamedFragment.md#iserror)

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

#### Inherited from

[`NamedFragment`](NamedFragment.md).[`isEvent`](NamedFragment.md#isevent)

***

### isFragment()

> `static` **isFragment**(`value`): `value is FunctionFragment`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:464

Returns ``true`` and provides a type guard if %%value%% is a
 **StructFragment**.

#### Parameters

##### value

`any`

#### Returns

`value is FunctionFragment`

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

#### Inherited from

[`NamedFragment`](NamedFragment.md).[`isFunction`](NamedFragment.md#isfunction)

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

#### Inherited from

[`NamedFragment`](NamedFragment.md).[`isStruct`](NamedFragment.md#isstruct)
