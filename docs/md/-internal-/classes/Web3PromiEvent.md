[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3PromiEvent

# Class: Web3PromiEvent\<ResolveType, EventMap\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_promi\_event.d.ts:3

## Extends

- [`Web3EventEmitter`](Web3EventEmitter.md)\<`EventMap`\>

## Type Parameters

### ResolveType

`ResolveType`

### EventMap

`EventMap` *extends* [`Web3EventMap`](../type-aliases/Web3EventMap.md)

## Implements

- `Promise`\<`ResolveType`\>

## Constructors

### Constructor

> **new Web3PromiEvent**\<`ResolveType`, `EventMap`\>(`executor`): `Web3PromiEvent`\<`ResolveType`, `EventMap`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_promi\_event.d.ts:5

#### Parameters

##### executor

[`PromiseExecutor`](../type-aliases/PromiseExecutor.md)\<`ResolveType`\>

#### Returns

`Web3PromiEvent`\<`ResolveType`, `EventMap`\>

#### Overrides

[`Web3EventEmitter`](Web3EventEmitter.md).[`constructor`](Web3EventEmitter.md#constructor)

## Properties

### \[toStringTag\]

> **\[toStringTag\]**: `"Promise"`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_promi\_event.d.ts:6

#### Implementation of

`Promise.[toStringTag]`

## Methods

### catch()

> **catch**\<`TResult`\>(`onrejected?`): `Promise`\<`ResolveType` \| `TResult`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_promi\_event.d.ts:8

Attaches a callback for only the rejection of the Promise.

#### Type Parameters

##### TResult

`TResult` = `never`

#### Parameters

##### onrejected?

(`reason`) => `TResult` \| [`PromiseLike`](../interfaces/PromiseLike.md)\<`TResult`\>

The callback to execute when the Promise is rejected.

#### Returns

`Promise`\<`ResolveType` \| `TResult`\>

A Promise for the completion of the callback.

#### Implementation of

`Promise.catch`

***

### emit()

> **emit**\<`K`\>(`eventName`, `params`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:16

#### Type Parameters

##### K

`K` *extends* `string`

#### Parameters

##### eventName

`K`

##### params

`EventMap`\[`K`\]

#### Returns

`void`

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`emit`](Web3EventEmitter.md#emit)

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:19

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`eventNames`](Web3EventEmitter.md#eventnames)

***

### finally()

> **finally**(`onfinally?`): `Promise`\<`ResolveType`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_promi\_event.d.ts:9

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
resolved value cannot be modified from the callback.

#### Parameters

##### onfinally?

() => `void`

The callback to execute when the Promise is settled (fulfilled or rejected).

#### Returns

`Promise`\<`ResolveType`\>

A Promise for the completion of the callback.

#### Implementation of

`Promise.finally`

***

### getMaxListeners()

> **getMaxListeners**(): `number`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:22

#### Returns

`number`

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`getMaxListeners`](Web3EventEmitter.md#getmaxlisteners)

***

### listenerCount()

> **listenerCount**\<`K`\>(`eventName`): `number`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:17

#### Type Parameters

##### K

`K` *extends* `string`

#### Parameters

##### eventName

`K`

#### Returns

`number`

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`listenerCount`](Web3EventEmitter.md#listenercount)

***

### listeners()

> **listeners**\<`K`\>(`eventName`): (...`args`) => `void`[]

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:18

#### Type Parameters

##### K

`K` *extends* `string`

#### Parameters

##### eventName

`K`

#### Returns

(...`args`) => `void`[]

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`listeners`](Web3EventEmitter.md#listeners)

***

### off()

> **off**\<`K`\>(`eventName`, `fn`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:15

#### Type Parameters

##### K

`K` *extends* `string`

#### Parameters

##### eventName

`K`

##### fn

[`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`EventMap`\[`K`\]\>

#### Returns

`void`

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`off`](Web3EventEmitter.md#off)

***

### on()

> **on**\<`K`\>(`eventName`, `fn`): `this`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_promi\_event.d.ts:10

#### Type Parameters

##### K

`K` *extends* `string`

#### Parameters

##### eventName

`K`

##### fn

[`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`EventMap`\[`K`\]\>

#### Returns

`this`

#### Overrides

[`Web3EventEmitter`](Web3EventEmitter.md).[`on`](Web3EventEmitter.md#on)

***

### once()

> **once**\<`K`\>(`eventName`, `fn`): `this`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_promi\_event.d.ts:11

#### Type Parameters

##### K

`K` *extends* `string`

#### Parameters

##### eventName

`K`

##### fn

[`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`EventMap`\[`K`\]\>

#### Returns

`this`

#### Overrides

[`Web3EventEmitter`](Web3EventEmitter.md).[`once`](Web3EventEmitter.md#once)

***

### removeAllListeners()

> **removeAllListeners**(): [`EventEmitter`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md)

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:20

#### Returns

[`EventEmitter`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md)

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`removeAllListeners`](Web3EventEmitter.md#removealllisteners)

***

### setMaxListenerWarningThreshold()

> **setMaxListenerWarningThreshold**(`maxListenersWarningThreshold`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:21

#### Parameters

##### maxListenersWarningThreshold

`number`

#### Returns

`void`

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`setMaxListenerWarningThreshold`](Web3EventEmitter.md#setmaxlistenerwarningthreshold)

***

### then()

> **then**\<`TResult1`, `TResult2`\>(`onfulfilled?`, `onrejected?`): `Promise`\<`TResult1` \| `TResult2`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_promi\_event.d.ts:7

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type Parameters

##### TResult1

`TResult1` = `ResolveType`

##### TResult2

`TResult2` = `never`

#### Parameters

##### onfulfilled?

(`value`) => `TResult1` \| [`PromiseLike`](../interfaces/PromiseLike.md)\<`TResult1`\>

The callback to execute when the Promise is resolved.

##### onrejected?

(`reason`) => `TResult2` \| [`PromiseLike`](../interfaces/PromiseLike.md)\<`TResult2`\>

The callback to execute when the Promise is rejected.

#### Returns

`Promise`\<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

#### Implementation of

`Promise.then`
