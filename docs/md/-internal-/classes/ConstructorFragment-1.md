[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ConstructorFragment

# Class: ConstructorFragment

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:59

## Extends

- [`Fragment`](Fragment-1.md)

## Extended by

- [`FunctionFragment`](FunctionFragment-1.md)

## Constructors

### Constructor

> **new ConstructorFragment**(`constructorGuard`, `params`): `ConstructorFragment`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:44

#### Parameters

##### constructorGuard

`any`

##### params

`any`

#### Returns

`ConstructorFragment`

#### Inherited from

[`Fragment`](Fragment-1.md).[`constructor`](Fragment-1.md#constructor)

## Properties

### \_isFragment

> `readonly` **\_isFragment**: `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:43

#### Inherited from

[`Fragment`](Fragment-1.md).[`_isFragment`](Fragment-1.md#_isfragment)

***

### gas?

> `optional` **gas?**: [`BigNumber`](BigNumber.md)

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:62

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

### payable

> **payable**: `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:61

***

### stateMutability

> **stateMutability**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:60

***

### type

> `readonly` **type**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:40

#### Inherited from

[`Fragment`](Fragment-1.md).[`type`](Fragment-1.md#type)

## Methods

### format()

> **format**(`format?`): `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:63

#### Parameters

##### format?

`string`

#### Returns

`string`

#### Overrides

[`Fragment`](Fragment-1.md).[`format`](Fragment-1.md#format)

***

### from()

> `static` **from**(`value`): `ConstructorFragment`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:64

#### Parameters

##### value

`string` \| [`JsonFragment`](../interfaces/JsonFragment.md) \| `ConstructorFragment`

#### Returns

`ConstructorFragment`

#### Overrides

[`Fragment`](Fragment-1.md).[`from`](Fragment-1.md#from)

***

### fromObject()

> `static` **fromObject**(`value`): `ConstructorFragment`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:65

#### Parameters

##### value

[`JsonFragment`](../interfaces/JsonFragment.md) \| `ConstructorFragment`

#### Returns

`ConstructorFragment`

#### Overrides

[`Fragment`](Fragment-1.md).[`fromObject`](Fragment-1.md#fromobject)

***

### fromString()

> `static` **fromString**(`value`): `ConstructorFragment`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:66

#### Parameters

##### value

`string`

#### Returns

`ConstructorFragment`

#### Overrides

[`Fragment`](Fragment-1.md).[`fromString`](Fragment-1.md#fromstring)

***

### isConstructorFragment()

> `static` **isConstructorFragment**(`value`): `value is ConstructorFragment`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:67

#### Parameters

##### value

`any`

#### Returns

`value is ConstructorFragment`

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
