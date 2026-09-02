[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3Subscription

# Abstract Class: Web3Subscription\<EventMap, ArgsType, API, CombinedEventMap\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:10

## Extends

- [`Web3EventEmitter`](Web3EventEmitter.md)\<`CombinedEventMap`\>

## Extended by

- [`LogsSubscription`](LogsSubscription.md)
- [`NewPendingTransactionsSubscription`](NewPendingTransactionsSubscription.md)
- [`NewHeadsSubscription`](NewHeadsSubscription.md)
- [`SyncingSubscription`](SyncingSubscription.md)
- [`LogsSubscription`](LogsSubscription-1.md)

## Type Parameters

### EventMap

`EventMap` *extends* [`Web3EventMap`](../type-aliases/Web3EventMap.md)

### ArgsType

`ArgsType` = `any`

### API

`API` *extends* [`Web3APISpec`](../type-aliases/Web3APISpec.md) = [`EthExecutionAPI`](../type-aliases/EthExecutionAPI.md)

### CombinedEventMap

`CombinedEventMap` *extends* [`CommonSubscriptionEvents`](../type-aliases/CommonSubscriptionEvents.md) = `EventMap` & [`CommonSubscriptionEvents`](../type-aliases/CommonSubscriptionEvents.md)

## Constructors

### Constructor

> **new Web3Subscription**\<`EventMap`, `ArgsType`, `API`, `CombinedEventMap`\>(`args`, `options`): `Web3Subscription`\<`EventMap`, `ArgsType`, `API`, `CombinedEventMap`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:16

#### Parameters

##### args

`ArgsType`

##### options

###### returnFormat?

[`DataFormat`](../type-aliases/DataFormat.md)

###### subscriptionManager

[`Web3SubscriptionManager`](Web3SubscriptionManager.md)

#### Returns

`Web3Subscription`\<`EventMap`, `ArgsType`, `API`, `CombinedEventMap`\>

#### Overrides

[`Web3EventEmitter`](Web3EventEmitter.md).[`constructor`](Web3EventEmitter.md#constructor)

### Constructor

> **new Web3Subscription**\<`EventMap`, `ArgsType`, `API`, `CombinedEventMap`\>(`args`, `options`): `Web3Subscription`\<`EventMap`, `ArgsType`, `API`, `CombinedEventMap`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:23

#### Parameters

##### args

`ArgsType`

##### options

###### requestManager

[`Web3RequestManager`](Web3RequestManager.md)\<`API`\>

###### returnFormat?

[`DataFormat`](../type-aliases/DataFormat.md)

#### Returns

`Web3Subscription`\<`EventMap`, `ArgsType`, `API`, `CombinedEventMap`\>

#### Deprecated

This constructor overloading should not be used

#### Overrides

`Web3EventEmitter<CombinedEventMap>.constructor`

## Properties

### \_id?

> `protected` `optional` **\_id?**: `string`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:15

***

### args

> `readonly` **args**: `ArgsType`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:11

## Accessors

### id

#### Get Signature

> **get** **id**(): `string` \| `undefined`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:27

##### Returns

`string` \| `undefined`

***

### lastBlock

#### Get Signature

> **get** **lastBlock**(): [`BlockOutput`](../interfaces/BlockOutput.md) \| `undefined`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:28

##### Returns

[`BlockOutput`](../interfaces/BlockOutput.md) \| `undefined`

***

### returnFormat

#### Get Signature

> **get** `protected` **returnFormat**(): [`DataFormat`](../type-aliases/DataFormat.md)

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:32

##### Returns

[`DataFormat`](../type-aliases/DataFormat.md)

***

### subscriptionManager

#### Get Signature

> **get** `protected` **subscriptionManager**(): [`Web3SubscriptionManager`](Web3SubscriptionManager.md)\<`API`, \{\[`key`: `string`\]: [`Web3SubscriptionConstructor`](../type-aliases/Web3SubscriptionConstructor.md)\<`API`, `Web3Subscription`\<`any`, `any`, `API`, `any`\>\>; \}\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:33

##### Returns

[`Web3SubscriptionManager`](Web3SubscriptionManager.md)\<`API`, \{\[`key`: `string`\]: [`Web3SubscriptionConstructor`](../type-aliases/Web3SubscriptionConstructor.md)\<`API`, `Web3Subscription`\<`any`, `any`, `API`, `any`\>\>; \}\>

## Methods

### \_buildSubscriptionParams()

> `protected` **\_buildSubscriptionParams**(): [`Web3APIParams`](../type-aliases/Web3APIParams.md)\<`API`, `"eth_subscribe"`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:42

#### Returns

[`Web3APIParams`](../type-aliases/Web3APIParams.md)\<`API`, `"eth_subscribe"`\>

***

### \_processSubscriptionError()

> **\_processSubscriptionError**(`error`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:41

#### Parameters

##### error

`Error`

#### Returns

`void`

***

### \_processSubscriptionResult()

> **\_processSubscriptionResult**(`data`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:40

#### Parameters

##### data

`unknown`

#### Returns

`void`

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

`CombinedEventMap`\[`K`\]

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

### formatSubscriptionResult()

> `protected` **formatSubscriptionResult**(`data`): `CombinedEventMap`\[`"data"`\]

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:39

#### Parameters

##### data

`CombinedEventMap`\[`"data"`\]

#### Returns

`CombinedEventMap`\[`"data"`\]

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

[`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`CombinedEventMap`\[`K`\]\>

#### Returns

`void`

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`off`](Web3EventEmitter.md#off)

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

[`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`CombinedEventMap`\[`K`\]\>

#### Returns

`void`

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`on`](Web3EventEmitter.md#on)

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

[`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`CombinedEventMap`\[`K`\]\>

#### Returns

`void`

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`once`](Web3EventEmitter.md#once)

***

### processSubscriptionData()

> **processSubscriptionData**(`data`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:30

#### Parameters

##### data

[`JsonRpcSubscriptionResult`](../interfaces/JsonRpcSubscriptionResult.md) \| [`JsonRpcSubscriptionResultOld`](../interfaces/JsonRpcSubscriptionResultOld.md)\<[`Log`](../interfaces/Log-1.md)\> \| [`JsonRpcNotification`](../interfaces/JsonRpcNotification.md)\<[`Log`](../interfaces/Log-1.md)\>

#### Returns

`void`

***

### removeAllListeners()

> **removeAllListeners**(): [`EventEmitter`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md)

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:20

#### Returns

[`EventEmitter`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md)

#### Inherited from

[`Web3EventEmitter`](Web3EventEmitter.md).[`removeAllListeners`](Web3EventEmitter.md#removealllisteners)

***

### resubscribe()

> **resubscribe**(): `Promise`\<`void`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:36

#### Returns

`Promise`\<`void`\>

***

### sendSubscriptionRequest()

> **sendSubscriptionRequest**(): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:31

#### Returns

`Promise`\<`string`\>

***

### sendUnsubscribeRequest()

> **sendUnsubscribeRequest**(): `Promise`\<`void`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:38

#### Returns

`Promise`\<`void`\>

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

### subscribe()

> **subscribe**(): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:29

#### Returns

`Promise`\<`string`\>

***

### unsubscribe()

> **unsubscribe**(): `Promise`\<`void`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:37

#### Returns

`Promise`\<`void`\>
