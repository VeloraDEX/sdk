[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Event

# Class: Event

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:8

## Constructors

### Constructor

> **new Event**(`tag`, `listener`, `once`): `Event`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:14

#### Parameters

##### tag

`string`

##### listener

[`Listener`](../type-aliases/Listener.md)

##### once

`boolean`

#### Returns

`Event`

## Properties

### \_inflight

> **\_inflight**: `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:13

***

### \_lastBlockNumber

> **\_lastBlockNumber**: `number`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:12

***

### listener

> `readonly` **listener**: [`Listener`](../type-aliases/Listener.md)

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:9

***

### once

> `readonly` **once**: `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:10

***

### tag

> `readonly` **tag**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:11

## Accessors

### event

#### Get Signature

> **get** **event**(): [`EventType`](../type-aliases/EventType.md)

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:15

##### Returns

[`EventType`](../type-aliases/EventType.md)

***

### filter

#### Get Signature

> **get** **filter**(): [`Filter`](../interfaces/Filter.md)

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:18

##### Returns

[`Filter`](../interfaces/Filter.md)

***

### hash

#### Get Signature

> **get** **hash**(): `string`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:17

##### Returns

`string`

***

### type

#### Get Signature

> **get** **type**(): `string`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:16

##### Returns

`string`

## Methods

### pollable()

> **pollable**(): `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/base-provider.d.ts:19

#### Returns

`boolean`
