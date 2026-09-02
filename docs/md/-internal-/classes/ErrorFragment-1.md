[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ErrorFragment

# Class: ErrorFragment

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:78

## Extends

- [`Fragment`](Fragment-1.md)

## Constructors

### Constructor

> **new ErrorFragment**(`constructorGuard`, `params`): `ErrorFragment`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:44

#### Parameters

##### constructorGuard

`any`

##### params

`any`

#### Returns

`ErrorFragment`

#### Inherited from

[`Fragment`](Fragment-1.md).[`constructor`](Fragment-1.md#constructor)

## Properties

### \_isFragment

> `readonly` **\_isFragment**: `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:43

#### Inherited from

[`Fragment`](Fragment-1.md).[`_isFragment`](Fragment-1.md#_isfragment)

***

### inputs

> `readonly` **inputs**: [`ParamType`](ParamType-1.md)[]

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:42

#### Inherited from

[`Fragment`](Fragment-1.md).[`inputs`](Fragment-1.md#inputs)

***

### name

> `readonly` **name**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:41

#### Inherited from

[`Fragment`](Fragment-1.md).[`name`](Fragment-1.md#name)

***

### type

> `readonly` **type**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:40

#### Inherited from

[`Fragment`](Fragment-1.md).[`type`](Fragment-1.md#type)

## Methods

### format()

> **format**(`format?`): `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:79

#### Parameters

##### format?

`string`

#### Returns

`string`

#### Overrides

[`Fragment`](Fragment-1.md).[`format`](Fragment-1.md#format)

***

### from()

> `static` **from**(`value`): `ErrorFragment`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:80

#### Parameters

##### value

`string` \| [`JsonFragment`](../interfaces/JsonFragment.md) \| `ErrorFragment`

#### Returns

`ErrorFragment`

#### Overrides

[`Fragment`](Fragment-1.md).[`from`](Fragment-1.md#from)

***

### fromObject()

> `static` **fromObject**(`value`): `ErrorFragment`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:81

#### Parameters

##### value

[`JsonFragment`](../interfaces/JsonFragment.md) \| `ErrorFragment`

#### Returns

`ErrorFragment`

#### Overrides

[`Fragment`](Fragment-1.md).[`fromObject`](Fragment-1.md#fromobject)

***

### fromString()

> `static` **fromString**(`value`): `ErrorFragment`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:82

#### Parameters

##### value

`string`

#### Returns

`ErrorFragment`

#### Overrides

[`Fragment`](Fragment-1.md).[`fromString`](Fragment-1.md#fromstring)

***

### isErrorFragment()

> `static` **isErrorFragment**(`value`): `value is ErrorFragment`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:83

#### Parameters

##### value

`any`

#### Returns

`value is ErrorFragment`

***

### isFragment()

> `static` **isFragment**(`value`): `value is Fragment`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:49

#### Parameters

##### value

`any`

#### Returns

`value is Fragment`

#### Inherited from

[`Fragment`](Fragment-1.md).[`isFragment`](Fragment-1.md#isfragment)
