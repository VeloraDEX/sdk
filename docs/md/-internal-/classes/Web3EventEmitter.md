[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3EventEmitter

# Class: Web3EventEmitter\<T\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:11

## Extended by

- [`Web3RequestManager`](Web3RequestManager.md)
- [`Web3Config`](Web3Config.md)
- [`Web3Subscription`](Web3Subscription.md)
- [`Web3PromiEvent`](Web3PromiEvent.md)

## Type Parameters

### T

`T` *extends* [`Web3EventMap`](../type-aliases/Web3EventMap.md)

## Implements

- [`Web3Emitter`](../interfaces/Web3Emitter.md)\<`T`\>

## Constructors

### Constructor

> **new Web3EventEmitter**\<`T`\>(): `Web3EventEmitter`\<`T`\>

#### Returns

`Web3EventEmitter`\<`T`\>

## Methods

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

`T`\[`K`\]

#### Returns

`void`

#### Implementation of

[`Web3Emitter`](../interfaces/Web3Emitter.md).[`emit`](../interfaces/Web3Emitter.md#emit)

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:19

#### Returns

(`string` \| `symbol`)[]

***

### getMaxListeners()

> **getMaxListeners**(): `number`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:22

#### Returns

`number`

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

[`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`T`\[`K`\]\>

#### Returns

`void`

#### Implementation of

[`Web3Emitter`](../interfaces/Web3Emitter.md).[`off`](../interfaces/Web3Emitter.md#off)

***

### on()

> **on**\<`K`\>(`eventName`, `fn`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:13

#### Type Parameters

##### K

`K` *extends* `string`

#### Parameters

##### eventName

`K`

##### fn

[`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`T`\[`K`\]\>

#### Returns

`void`

#### Implementation of

[`Web3Emitter`](../interfaces/Web3Emitter.md).[`on`](../interfaces/Web3Emitter.md#on)

***

### once()

> **once**\<`K`\>(`eventName`, `fn`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:14

#### Type Parameters

##### K

`K` *extends* `string`

#### Parameters

##### eventName

`K`

##### fn

[`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`T`\[`K`\]\>

#### Returns

`void`

#### Implementation of

[`Web3Emitter`](../interfaces/Web3Emitter.md).[`once`](../interfaces/Web3Emitter.md#once)

***

### removeAllListeners()

> **removeAllListeners**(): [`EventEmitter`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md)

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:20

#### Returns

[`EventEmitter`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md)

***

### setMaxListenerWarningThreshold()

> **setMaxListenerWarningThreshold**(`maxListenersWarningThreshold`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:21

#### Parameters

##### maxListenersWarningThreshold

`number`

#### Returns

`void`
