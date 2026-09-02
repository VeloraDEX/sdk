[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Fragment

# Abstract Class: Fragment

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:39

## Extended by

- [`ErrorFragment`](ErrorFragment-1.md)
- [`EventFragment`](EventFragment-1.md)
- [`ConstructorFragment`](ConstructorFragment-1.md)

## Constructors

### Constructor

> **new Fragment**(`constructorGuard`, `params`): `Fragment`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:44

#### Parameters

##### constructorGuard

`any`

##### params

`any`

#### Returns

`Fragment`

## Properties

### \_isFragment

> `readonly` **\_isFragment**: `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:43

***

### inputs

> `readonly` **inputs**: [`ParamType`](ParamType-1.md)[]

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:42

***

### name

> `readonly` **name**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:41

***

### type

> `readonly` **type**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:40

## Methods

### format()

> `abstract` **format**(`format?`): `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:45

#### Parameters

##### format?

`string`

#### Returns

`string`

***

### from()

> `static` **from**(`value`): `Fragment`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:46

#### Parameters

##### value

`string` \| `Fragment` \| [`JsonFragment`](../interfaces/JsonFragment.md)

#### Returns

`Fragment`

***

### fromObject()

> `static` **fromObject**(`value`): `Fragment`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:47

#### Parameters

##### value

`Fragment` \| [`JsonFragment`](../interfaces/JsonFragment.md)

#### Returns

`Fragment`

***

### fromString()

> `static` **fromString**(`value`): `Fragment`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:48

#### Parameters

##### value

`string`

#### Returns

`Fragment`

***

### isFragment()

> `static` **isFragment**(`value`): `value is Fragment`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/fragments.d.ts:49

#### Parameters

##### value

`any`

#### Returns

`value is Fragment`
