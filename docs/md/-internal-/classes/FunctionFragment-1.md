[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / FunctionFragment

# Class: FunctionFragment

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:69

## Extends

- [`ConstructorFragment`](ConstructorFragment-1.md)

## Constructors

### Constructor

> **new FunctionFragment**(`constructorGuard`, `params`): `FunctionFragment`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:44

#### Parameters

##### constructorGuard

`any`

##### params

`any`

#### Returns

`FunctionFragment`

#### Inherited from

[`ConstructorFragment`](ConstructorFragment-1.md).[`constructor`](ConstructorFragment-1.md#constructor)

## Properties

### \_isFragment

> `readonly` **\_isFragment**: `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:43

#### Inherited from

[`ConstructorFragment`](ConstructorFragment-1.md).[`_isFragment`](ConstructorFragment-1.md#_isfragment)

***

### constant

> **constant**: `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:70

***

### gas?

> `optional` **gas?**: [`BigNumber`](BigNumber.md)

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:62

#### Inherited from

[`ConstructorFragment`](ConstructorFragment-1.md).[`gas`](ConstructorFragment-1.md#gas)

***

### inputs

> `readonly` **inputs**: [`ParamType`](ParamType-1.md)[]

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:42

#### Inherited from

[`ConstructorFragment`](ConstructorFragment-1.md).[`inputs`](ConstructorFragment-1.md#inputs)

***

### name

> `readonly` **name**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:41

#### Inherited from

[`ConstructorFragment`](ConstructorFragment-1.md).[`name`](ConstructorFragment-1.md#name)

***

### outputs?

> `optional` **outputs?**: [`ParamType`](ParamType-1.md)[]

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:71

***

### payable

> **payable**: `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:61

#### Inherited from

[`ConstructorFragment`](ConstructorFragment-1.md).[`payable`](ConstructorFragment-1.md#payable)

***

### stateMutability

> **stateMutability**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:60

#### Inherited from

[`ConstructorFragment`](ConstructorFragment-1.md).[`stateMutability`](ConstructorFragment-1.md#statemutability)

***

### type

> `readonly` **type**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:40

#### Inherited from

[`ConstructorFragment`](ConstructorFragment-1.md).[`type`](ConstructorFragment-1.md#type)

## Methods

### format()

> **format**(`format?`): `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:72

#### Parameters

##### format?

`string`

#### Returns

`string`

#### Overrides

[`ConstructorFragment`](ConstructorFragment-1.md).[`format`](ConstructorFragment-1.md#format)

***

### from()

> `static` **from**(`value`): `FunctionFragment`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:73

#### Parameters

##### value

`string` \| [`JsonFragment`](../interfaces/JsonFragment.md) \| `FunctionFragment`

#### Returns

`FunctionFragment`

#### Overrides

[`ConstructorFragment`](ConstructorFragment-1.md).[`from`](ConstructorFragment-1.md#from)

***

### fromObject()

> `static` **fromObject**(`value`): `FunctionFragment`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:74

#### Parameters

##### value

[`JsonFragment`](../interfaces/JsonFragment.md) \| `FunctionFragment`

#### Returns

`FunctionFragment`

#### Overrides

[`ConstructorFragment`](ConstructorFragment-1.md).[`fromObject`](ConstructorFragment-1.md#fromobject)

***

### fromString()

> `static` **fromString**(`value`): `FunctionFragment`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:75

#### Parameters

##### value

`string`

#### Returns

`FunctionFragment`

#### Overrides

[`ConstructorFragment`](ConstructorFragment-1.md).[`fromString`](ConstructorFragment-1.md#fromstring)

***

### isConstructorFragment()

> `static` **isConstructorFragment**(`value`): `value is ConstructorFragment`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:67

#### Parameters

##### value

`any`

#### Returns

`value is ConstructorFragment`

#### Inherited from

[`ConstructorFragment`](ConstructorFragment-1.md).[`isConstructorFragment`](ConstructorFragment-1.md#isconstructorfragment)

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

[`ConstructorFragment`](ConstructorFragment-1.md).[`isFragment`](ConstructorFragment-1.md#isfragment)

***

### isFunctionFragment()

> `static` **isFunctionFragment**(`value`): `value is FunctionFragment`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:76

#### Parameters

##### value

`any`

#### Returns

`value is FunctionFragment`
