[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / NewPendingTransactionsSubscription

# Class: NewPendingTransactionsSubscription

Defined in: node\_modules/.pnpm/web3-eth@4.10.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth/lib/commonjs/web3\_subscriptions.d.ts:48

## subscribe('pendingTransactions')
Subscribes to incoming pending transactions.

You can subscribe to pending transactions by calling web3.eth.subscribe('pendingTransactions').

## Example

```ts
(await web3.eth.subscribe('pendingTransactions')).on('data', console.log);
```

## Extends

- [`Web3Subscription`](Web3Subscription.md)\<\{ `data`: [`HexString`](../type-aliases/HexString.md); \}\>

## Constructors

### Constructor

> **new NewPendingTransactionsSubscription**(`args`, `options`): `NewPendingTransactionsSubscription`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:16

#### Parameters

##### args

`any`

##### options

###### returnFormat?

[`DataFormat`](../type-aliases/DataFormat.md)

###### subscriptionManager

[`Web3SubscriptionManager`](Web3SubscriptionManager.md)

#### Returns

`NewPendingTransactionsSubscription`

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`constructor`](Web3Subscription.md#constructor)

### Constructor

> **new NewPendingTransactionsSubscription**(`args`, `options`): `NewPendingTransactionsSubscription`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:23

#### Parameters

##### args

`any`

##### options

###### requestManager

[`Web3RequestManager`](Web3RequestManager.md)\<[`EthExecutionAPI`](../type-aliases/EthExecutionAPI.md)\>

###### returnFormat?

[`DataFormat`](../type-aliases/DataFormat.md)

#### Returns

`NewPendingTransactionsSubscription`

#### Deprecated

This constructor overloading should not be used

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`constructor`](Web3Subscription.md#constructor)

## Properties

### \_id?

> `protected` `optional` **\_id?**: `string`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:15

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`_id`](Web3Subscription.md#_id)

***

### args

> `readonly` **args**: `any`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:11

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`args`](Web3Subscription.md#args)

## Accessors

### id

#### Get Signature

> **get** **id**(): `string` \| `undefined`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:27

##### Returns

`string` \| `undefined`

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`id`](Web3Subscription.md#id)

***

### lastBlock

#### Get Signature

> **get** **lastBlock**(): [`BlockOutput`](../interfaces/BlockOutput.md) \| `undefined`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:28

##### Returns

[`BlockOutput`](../interfaces/BlockOutput.md) \| `undefined`

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`lastBlock`](Web3Subscription.md#lastblock)

***

### returnFormat

#### Get Signature

> **get** `protected` **returnFormat**(): [`DataFormat`](../type-aliases/DataFormat.md)

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:32

##### Returns

[`DataFormat`](../type-aliases/DataFormat.md)

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`returnFormat`](Web3Subscription.md#returnformat)

***

### subscriptionManager

#### Get Signature

> **get** `protected` **subscriptionManager**(): [`Web3SubscriptionManager`](Web3SubscriptionManager.md)\<`API`, \{\[`key`: `string`\]: [`Web3SubscriptionConstructor`](../type-aliases/Web3SubscriptionConstructor.md)\<`API`, [`Web3Subscription`](Web3Subscription.md)\<`any`, `any`, `API`, `any`\>\>; \}\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:33

##### Returns

[`Web3SubscriptionManager`](Web3SubscriptionManager.md)\<`API`, \{\[`key`: `string`\]: [`Web3SubscriptionConstructor`](../type-aliases/Web3SubscriptionConstructor.md)\<`API`, [`Web3Subscription`](Web3Subscription.md)\<`any`, `any`, `API`, `any`\>\>; \}\>

#### Inherited from

`Web3Subscription.subscriptionManager`

## Methods

### \_buildSubscriptionParams()

> `protected` **\_buildSubscriptionParams**(): `string`[]

Defined in: node\_modules/.pnpm/web3-eth@4.10.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth/lib/commonjs/web3\_subscriptions.d.ts:51

#### Returns

`string`[]

#### Overrides

[`Web3Subscription`](Web3Subscription.md).[`_buildSubscriptionParams`](Web3Subscription.md#_buildsubscriptionparams)

***

### \_processSubscriptionError()

> **\_processSubscriptionError**(`error`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:41

#### Parameters

##### error

`Error`

#### Returns

`void`

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`_processSubscriptionError`](Web3Subscription.md#_processsubscriptionerror)

***

### \_processSubscriptionResult()

> **\_processSubscriptionResult**(`data`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:40

#### Parameters

##### data

`unknown`

#### Returns

`void`

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`_processSubscriptionResult`](Web3Subscription.md#_processsubscriptionresult)

***

### emit()

> **emit**\<`K`\>(`eventName`, `params`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:16

#### Type Parameters

##### K

`K` *extends* [`Web3EventKey`](../type-aliases/Web3EventKey.md)\<`object` & [`CommonSubscriptionEvents`](../type-aliases/CommonSubscriptionEvents.md)\>

#### Parameters

##### eventName

`K`

##### params

`object` & [`CommonSubscriptionEvents`](../type-aliases/CommonSubscriptionEvents.md)\[`K`\]

#### Returns

`void`

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`emit`](Web3Subscription.md#emit)

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:19

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`eventNames`](Web3Subscription.md#eventnames)

***

### formatSubscriptionResult()

> `protected` **formatSubscriptionResult**(`data`): `string`

Defined in: node\_modules/.pnpm/web3-eth@4.10.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth/lib/commonjs/web3\_subscriptions.d.ts:52

#### Parameters

##### data

`string`

#### Returns

`string`

#### Overrides

[`Web3Subscription`](Web3Subscription.md).[`formatSubscriptionResult`](Web3Subscription.md#formatsubscriptionresult)

***

### getMaxListeners()

> **getMaxListeners**(): `number`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:22

#### Returns

`number`

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`getMaxListeners`](Web3Subscription.md#getmaxlisteners)

***

### listenerCount()

> **listenerCount**\<`K`\>(`eventName`): `number`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:17

#### Type Parameters

##### K

`K` *extends* [`Web3EventKey`](../type-aliases/Web3EventKey.md)\<`object` & [`CommonSubscriptionEvents`](../type-aliases/CommonSubscriptionEvents.md)\>

#### Parameters

##### eventName

`K`

#### Returns

`number`

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`listenerCount`](Web3Subscription.md#listenercount)

***

### listeners()

> **listeners**\<`K`\>(`eventName`): (...`args`) => `void`[]

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:18

#### Type Parameters

##### K

`K` *extends* [`Web3EventKey`](../type-aliases/Web3EventKey.md)\<`object` & [`CommonSubscriptionEvents`](../type-aliases/CommonSubscriptionEvents.md)\>

#### Parameters

##### eventName

`K`

#### Returns

(...`args`) => `void`[]

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`listeners`](Web3Subscription.md#listeners)

***

### off()

> **off**\<`K`\>(`eventName`, `fn`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:15

#### Type Parameters

##### K

`K` *extends* [`Web3EventKey`](../type-aliases/Web3EventKey.md)\<`object` & [`CommonSubscriptionEvents`](../type-aliases/CommonSubscriptionEvents.md)\>

#### Parameters

##### eventName

`K`

##### fn

[`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`object` & [`CommonSubscriptionEvents`](../type-aliases/CommonSubscriptionEvents.md)\[`K`\]\>

#### Returns

`void`

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`off`](Web3Subscription.md#off)

***

### on()

> **on**\<`K`\>(`eventName`, `fn`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:13

#### Type Parameters

##### K

`K` *extends* [`Web3EventKey`](../type-aliases/Web3EventKey.md)\<`object` & [`CommonSubscriptionEvents`](../type-aliases/CommonSubscriptionEvents.md)\>

#### Parameters

##### eventName

`K`

##### fn

[`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`object` & [`CommonSubscriptionEvents`](../type-aliases/CommonSubscriptionEvents.md)\[`K`\]\>

#### Returns

`void`

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`on`](Web3Subscription.md#on)

***

### once()

> **once**\<`K`\>(`eventName`, `fn`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:14

#### Type Parameters

##### K

`K` *extends* [`Web3EventKey`](../type-aliases/Web3EventKey.md)\<`object` & [`CommonSubscriptionEvents`](../type-aliases/CommonSubscriptionEvents.md)\>

#### Parameters

##### eventName

`K`

##### fn

[`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`object` & [`CommonSubscriptionEvents`](../type-aliases/CommonSubscriptionEvents.md)\[`K`\]\>

#### Returns

`void`

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`once`](Web3Subscription.md#once)

***

### processSubscriptionData()

> **processSubscriptionData**(`data`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:30

#### Parameters

##### data

[`JsonRpcSubscriptionResult`](../interfaces/JsonRpcSubscriptionResult.md) \| [`JsonRpcSubscriptionResultOld`](../interfaces/JsonRpcSubscriptionResultOld.md)\<[`Log`](../interfaces/Log-1.md)\> \| [`JsonRpcNotification`](../interfaces/JsonRpcNotification.md)\<[`Log`](../interfaces/Log-1.md)\>

#### Returns

`void`

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`processSubscriptionData`](Web3Subscription.md#processsubscriptiondata)

***

### removeAllListeners()

> **removeAllListeners**(): [`EventEmitter`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md)

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:20

#### Returns

[`EventEmitter`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/EventEmitter.md)

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`removeAllListeners`](Web3Subscription.md#removealllisteners)

***

### resubscribe()

> **resubscribe**(): `Promise`\<`void`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:36

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`resubscribe`](Web3Subscription.md#resubscribe)

***

### sendSubscriptionRequest()

> **sendSubscriptionRequest**(): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:31

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`sendSubscriptionRequest`](Web3Subscription.md#sendsubscriptionrequest)

***

### sendUnsubscribeRequest()

> **sendUnsubscribeRequest**(): `Promise`\<`void`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:38

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`sendUnsubscribeRequest`](Web3Subscription.md#sendunsubscriberequest)

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

[`Web3Subscription`](Web3Subscription.md).[`setMaxListenerWarningThreshold`](Web3Subscription.md#setmaxlistenerwarningthreshold)

***

### subscribe()

> **subscribe**(): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:29

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`subscribe`](Web3Subscription.md#subscribe)

***

### unsubscribe()

> **unsubscribe**(): `Promise`\<`void`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:37

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`unsubscribe`](Web3Subscription.md#unsubscribe)
