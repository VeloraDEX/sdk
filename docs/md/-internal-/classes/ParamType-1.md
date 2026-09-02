[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ParamType

# Class: ParamType

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:23

## Constructors

### Constructor

> **new ParamType**(`constructorGuard`, `params`): `ParamType`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:32

#### Parameters

##### constructorGuard

`any`

##### params

`any`

#### Returns

`ParamType`

## Properties

### \_isParamType

> `readonly` **\_isParamType**: `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:31

***

### arrayChildren

> `readonly` **arrayChildren**: `ParamType`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:30

***

### arrayLength

> `readonly` **arrayLength**: `number`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:29

***

### baseType

> `readonly` **baseType**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:26

***

### components

> `readonly` **components**: `ParamType`[]

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:28

***

### indexed

> `readonly` **indexed**: `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:27

***

### name

> `readonly` **name**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:24

***

### type

> `readonly` **type**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:25

## Methods

### format()

> **format**(`format?`): `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:33

#### Parameters

##### format?

`string`

#### Returns

`string`

***

### from()

> `static` **from**(`value`, `allowIndexed?`): `ParamType`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:34

#### Parameters

##### value

`string` \| [`JsonFragmentType`](../interfaces/JsonFragmentType.md) \| `ParamType`

##### allowIndexed?

`boolean`

#### Returns

`ParamType`

***

### fromObject()

> `static` **fromObject**(`value`): `ParamType`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:35

#### Parameters

##### value

[`JsonFragmentType`](../interfaces/JsonFragmentType.md) \| `ParamType`

#### Returns

`ParamType`

***

### fromString()

> `static` **fromString**(`value`, `allowIndexed?`): `ParamType`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:36

#### Parameters

##### value

`string`

##### allowIndexed?

`boolean`

#### Returns

`ParamType`

***

### isParamType()

> `static` **isParamType**(`value`): `value is ParamType`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:37

#### Parameters

##### value

`any`

#### Returns

`value is ParamType`
