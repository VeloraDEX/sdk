[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / EventEmitterable

# Interface: EventEmitterable\<T\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/events.d.ts:11

An **EventEmitterable** behaves similar to an EventEmitter
 except provides async access to its methods.

 An EventEmitter implements the observer pattern.

## Extended by

- [`Provider`](Provider.md)

## Type Parameters

### T

`T`

## Methods

### addListener()

> **addListener**(`event`, `listener`): `Promise`\<`EventEmitterable`\<`T`\>\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/events.d.ts:46

Alias for [[on]].

#### Parameters

##### event

`T`

##### listener

[`Listener`](../type-aliases/Listener-1.md)

#### Returns

`Promise`\<`EventEmitterable`\<`T`\>\>

***

### emit()

> **emit**(`event`, ...`args`): `Promise`\<`boolean`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/events.d.ts:25

Triggers each listener for %%event%% with the %%args%%.

#### Parameters

##### event

`T`

##### args

...`any`[]

#### Returns

`Promise`\<`boolean`\>

***

### listenerCount()

> **listenerCount**(`event?`): `Promise`\<`number`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/events.d.ts:29

Resolves to the number of listeners for %%event%%.

#### Parameters

##### event?

`T`

#### Returns

`Promise`\<`number`\>

***

### listeners()

> **listeners**(`event?`): `Promise`\<[`Listener`](../type-aliases/Listener-1.md)[]\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/events.d.ts:33

Resolves to the listeners for %%event%%.

#### Parameters

##### event?

`T`

#### Returns

`Promise`\<[`Listener`](../type-aliases/Listener-1.md)[]\>

***

### off()

> **off**(`event`, `listener?`): `Promise`\<`EventEmitterable`\<`T`\>\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/events.d.ts:38

Unregister the %%listener%% for %%event%%. If %%listener%%
 is unspecified, all listeners are unregistered.

#### Parameters

##### event

`T`

##### listener?

[`Listener`](../type-aliases/Listener-1.md)

#### Returns

`Promise`\<`EventEmitterable`\<`T`\>\>

***

### on()

> **on**(`event`, `listener`): `Promise`\<`EventEmitterable`\<`T`\>\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/events.d.ts:16

Registers a %%listener%% that is called whenever the
 %%event%% occurs until unregistered.

#### Parameters

##### event

`T`

##### listener

[`Listener`](../type-aliases/Listener-1.md)

#### Returns

`Promise`\<`EventEmitterable`\<`T`\>\>

***

### once()

> **once**(`event`, `listener`): `Promise`\<`EventEmitterable`\<`T`\>\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/events.d.ts:21

Registers a %%listener%% that is called the next time
 %%event%% occurs.

#### Parameters

##### event

`T`

##### listener

[`Listener`](../type-aliases/Listener-1.md)

#### Returns

`Promise`\<`EventEmitterable`\<`T`\>\>

***

### removeAllListeners()

> **removeAllListeners**(`event?`): `Promise`\<`EventEmitterable`\<`T`\>\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/events.d.ts:42

Unregister all listeners for %%event%%.

#### Parameters

##### event?

`T`

#### Returns

`Promise`\<`EventEmitterable`\<`T`\>\>

***

### removeListener()

> **removeListener**(`event`, `listener`): `Promise`\<`EventEmitterable`\<`T`\>\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/utils/events.d.ts:50

Alias for [[off]].

#### Parameters

##### event

`T`

##### listener

[`Listener`](../type-aliases/Listener-1.md)

#### Returns

`Promise`\<`EventEmitterable`\<`T`\>\>
