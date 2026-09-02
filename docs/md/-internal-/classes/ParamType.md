[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ParamType

# Class: ParamType

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:108

Each input and output of a [[Fragment]] is an Array of **ParamType**.

## Properties

### arrayChildren

> `readonly` **arrayChildren**: `ParamType` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:146

The type of each child in the array.

 For non-array types this is ``null``.

***

### arrayLength

> `readonly` **arrayLength**: `number` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:140

The array length, or ``-1`` for dynamic-lengthed arrays.

 For non-array types this is ``null``.

***

### baseType

> `readonly` **baseType**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:122

The base type (e.g. ``"address"``, ``"tuple"``, ``"array"``)

***

### components

> `readonly` **components**: readonly `ParamType`[] \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:134

The components for the tuple.

 For non-tuple types this is ``null``.

***

### indexed

> `readonly` **indexed**: `boolean` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:128

True if the parameters is indexed.

 For non-indexable types this is ``null``.

***

### name

> `readonly` **name**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:113

The local name of the parameter (or ``""`` if unbound)

***

### type

> `readonly` **type**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:118

The fully qualified type (e.g. ``"address"``, ``"tuple(address)"``,
 ``"uint256[3][]"``)

## Methods

### format()

> **format**(`format?`): `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:162

Return a string representation of this type.

 For example,

 ``sighash" => "(uint256,address)"``

 ``"minimal" => "tuple(uint256,address) indexed"``

 ``"full" => "tuple(uint256 foo, address bar) indexed baz"``

#### Parameters

##### format?

[`FormatType`](../type-aliases/FormatType-1.md)

#### Returns

`string`

***

### isArray()

> **isArray**(): `this is ParamType & { arrayChildren: ParamType; arrayLength: number }`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:169

Returns true if %%this%% is an Array type.

 This provides a type gaurd ensuring that [[arrayChildren]]
 and [[arrayLength]] are non-null.

#### Returns

`this is ParamType & { arrayChildren: ParamType; arrayLength: number }`

***

### isIndexable()

> **isIndexable**(): `this is ParamType & { indexed: boolean }`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:188

Returns true if %%this%% is an Indexable type.

 This provides a type gaurd ensuring that [[indexed]]
 is non-null.

#### Returns

`this is ParamType & { indexed: boolean }`

***

### isTuple()

> **isTuple**(): `this is ParamType & { components: readonly ParamType[] }`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:179

Returns true if %%this%% is a Tuple type.

 This provides a type gaurd ensuring that [[components]]
 is non-null.

#### Returns

`this is ParamType & { components: readonly ParamType[] }`

***

### walk()

> **walk**(`value`, `process`): `any`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:195

Walks the **ParamType** with %%value%%, calling %%process%%
 on each type, destructing the %%value%% recursively.

#### Parameters

##### value

`any`

##### process

[`ParamTypeWalkFunc`](../type-aliases/ParamTypeWalkFunc.md)

#### Returns

`any`

***

### walkAsync()

> **walkAsync**(`value`, `process`): `Promise`\<`any`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:203

Walks the **ParamType** with %%value%%, asynchronously calling
 %%process%% on each type, destructing the %%value%% recursively.

 This can be used to resolve ENS names by walking and resolving each
 ``"address"`` type.

#### Parameters

##### value

`any`

##### process

[`ParamTypeWalkAsyncFunc`](../type-aliases/ParamTypeWalkAsyncFunc.md)

#### Returns

`Promise`\<`any`\>

***

### from()

> `static` **from**(`obj`, `allowIndexed?`): `ParamType`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:210

Creates a new **ParamType** for %%obj%%.

 If %%allowIndexed%% then the ``indexed`` keyword is permitted,
 otherwise the ``indexed`` keyword will throw an error.

#### Parameters

##### obj

`any`

##### allowIndexed?

`boolean`

#### Returns

`ParamType`

***

### isParamType()

> `static` **isParamType**(`value`): `value is ParamType`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/fragments.d.ts:214

Returns true if %%value%% is a **ParamType**.

#### Parameters

##### value

`any`

#### Returns

`value is ParamType`
