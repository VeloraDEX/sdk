[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / EventFragment

# Class: EventFragment

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:51

## Extends

- [`Fragment`](Fragment-1.md)

## Constructors

### Constructor

> **new EventFragment**(`constructorGuard`, `params`): `EventFragment`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:44

#### Parameters

##### constructorGuard

`any`

##### params

`any`

#### Returns

`EventFragment`

#### Inherited from

[`Fragment`](Fragment-1.md).[`constructor`](Fragment-1.md#constructor)

## Properties

### \_isFragment

> `readonly` **\_isFragment**: `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:43

#### Inherited from

[`Fragment`](Fragment-1.md).[`_isFragment`](Fragment-1.md#_isfragment)

***

### anonymous

> `readonly` **anonymous**: `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:52

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

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:53

#### Parameters

##### format?

`string`

#### Returns

`string`

#### Overrides

[`Fragment`](Fragment-1.md).[`format`](Fragment-1.md#format)

***

### from()

> `static` **from**(`value`): `EventFragment`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:54

#### Parameters

##### value

`string` \| [`JsonFragment`](../interfaces/JsonFragment.md) \| `EventFragment`

#### Returns

`EventFragment`

#### Overrides

[`Fragment`](Fragment-1.md).[`from`](Fragment-1.md#from)

***

### fromObject()

> `static` **fromObject**(`value`): `EventFragment`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:55

#### Parameters

##### value

[`JsonFragment`](../interfaces/JsonFragment.md) \| `EventFragment`

#### Returns

`EventFragment`

#### Overrides

[`Fragment`](Fragment-1.md).[`fromObject`](Fragment-1.md#fromobject)

***

### fromString()

> `static` **fromString**(`value`): `EventFragment`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:56

#### Parameters

##### value

`string`

#### Returns

`EventFragment`

#### Overrides

[`Fragment`](Fragment-1.md).[`fromString`](Fragment-1.md#fromstring)

***

### isEventFragment()

> `static` **isEventFragment**(`value`): `value is EventFragment`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:57

#### Parameters

##### value

`any`

#### Returns

`value is EventFragment`

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
