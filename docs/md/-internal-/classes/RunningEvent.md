[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / RunningEvent

# Class: RunningEvent

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:63

## Constructors

### Constructor

> **new RunningEvent**(`tag`, `filter`): `RunningEvent`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:67

#### Parameters

##### tag

`string`

##### filter

[`EventFilter`](../type-aliases/EventFilter.md)

#### Returns

`RunningEvent`

## Properties

### filter

> `readonly` **filter**: [`EventFilter`](../type-aliases/EventFilter.md)

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:65

***

### tag

> `readonly` **tag**: `string`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:64

## Methods

### addListener()

> **addListener**(`listener`, `once`): `void`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:68

#### Parameters

##### listener

[`Listener`](../type-aliases/Listener.md)

##### once

`boolean`

#### Returns

`void`

***

### getEmit()

> **getEmit**(`event`): `any`[]

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:75

#### Parameters

##### event

[`Event`](../interfaces/Event.md)

#### Returns

`any`[]

***

### listenerCount()

> **listenerCount**(): `number`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:72

#### Returns

`number`

***

### listeners()

> **listeners**(): [`Listener`](../type-aliases/Listener.md)[]

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:71

#### Returns

[`Listener`](../type-aliases/Listener.md)[]

***

### prepareEvent()

> **prepareEvent**(`event`): `void`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:74

#### Parameters

##### event

[`Event`](../interfaces/Event.md)

#### Returns

`void`

***

### removeAllListeners()

> **removeAllListeners**(): `void`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:70

#### Returns

`void`

***

### removeListener()

> **removeListener**(`listener`): `void`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:69

#### Parameters

##### listener

[`Listener`](../type-aliases/Listener.md)

#### Returns

`void`

***

### run()

> **run**(`args`): `number`

Defined in: node\_modules/.pnpm/@ethersproject+contracts@5.8.0/node\_modules/@ethersproject/contracts/lib/index.d.ts:73

#### Parameters

##### args

`any`[]

#### Returns

`number`
