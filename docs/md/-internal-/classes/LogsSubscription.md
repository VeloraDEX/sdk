[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / LogsSubscription

# Class: LogsSubscription

Defined in: node\_modules/.pnpm/web3-eth@4.10.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth/lib/commonjs/web3\_subscriptions.d.ts:13

## subscribe('logs')
Subscribes to incoming logs, filtered by the given options. If a valid numerical fromBlock options property is set, web3.js will retrieve logs beginning from this point, backfilling the response as necessary.

You can subscribe to logs matching a given filter object, which can take the following parameters:
- `fromBlock`: (optional, default: 'latest') Integer block number, or `'latest'` for the last mined block or `'pending'`, `'earliest'` for not yet mined transactions.
- `address`: (optional) Contract address or a list of addresses from which logs should originate.
- `topics`: (optional) Array of 32 Bytes DATA topics. Topics are order-dependent. Each topic can also be an array of DATA with `or` options.

## Extends

- [`Web3Subscription`](Web3Subscription.md)\<\{ `data`: [`LogsOutput`](../interfaces/LogsOutput.md); \}, \{ `address?`: [`Address`](../type-aliases/Address-2.md) \| [`Address`](../type-aliases/Address-2.md)[]; `fromBlock?`: [`BlockNumberOrTag`](../type-aliases/BlockNumberOrTag.md); `topics?`: [`Topic`](../type-aliases/Topic.md)[]; \}\>

## Constructors

### Constructor

> **new LogsSubscription**(`args`, `options`): `LogsSubscription`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:16

#### Parameters

##### args

###### address?

`string` \| `string`[]

###### fromBlock?

[`BlockNumberOrTag`](../type-aliases/BlockNumberOrTag.md)

###### topics?

`string`[]

##### options

###### returnFormat?

[`DataFormat`](../type-aliases/DataFormat.md)

###### subscriptionManager

[`Web3SubscriptionManager`](Web3SubscriptionManager.md)

#### Returns

`LogsSubscription`

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`constructor`](Web3Subscription.md#constructor)

### Constructor

> **new LogsSubscription**(`args`, `options`): `LogsSubscription`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:23

#### Parameters

##### args

###### address?

`string` \| `string`[]

###### fromBlock?

[`BlockNumberOrTag`](../type-aliases/BlockNumberOrTag.md)

###### topics?

`string`[]

##### options

###### requestManager

[`Web3RequestManager`](Web3RequestManager.md)\<[`EthExecutionAPI`](../type-aliases/EthExecutionAPI.md)\>

###### returnFormat?

[`DataFormat`](../type-aliases/DataFormat.md)

#### Returns

`LogsSubscription`

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

> `readonly` **args**: `object`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:11

#### address?

> `readonly` `optional` **address?**: `string` \| `string`[]

#### fromBlock?

> `readonly` `optional` **fromBlock?**: [`BlockNumberOrTag`](../type-aliases/BlockNumberOrTag.md)

#### topics?

> `readonly` `optional` **topics?**: `string`[]

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

> `protected` **\_buildSubscriptionParams**(): (`string` \| \{ `address?`: `string` \| `string`[]; `fromBlock?`: [`BlockNumberOrTag`](../type-aliases/BlockNumberOrTag.md); `topics?`: `string`[]; \})[]

Defined in: node\_modules/.pnpm/web3-eth@4.10.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth/lib/commonjs/web3\_subscriptions.d.ts:20

#### Returns

(`string` \| \{ `address?`: `string` \| `string`[]; `fromBlock?`: [`BlockNumberOrTag`](../type-aliases/BlockNumberOrTag.md); `topics?`: `string`[]; \})[]

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

> `protected` **formatSubscriptionResult**(`data`): `object`

Defined in: node\_modules/.pnpm/web3-eth@4.10.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth/lib/commonjs/web3\_subscriptions.d.ts:25

#### Parameters

##### data

[`LogsOutput`](../interfaces/LogsOutput.md)

#### Returns

`object`

##### address

> `readonly` **address**: `string`

##### blockHash?

> `readonly` `optional` **blockHash?**: `string`

##### blockNumber?

> `readonly` `optional` **blockNumber?**: `string` \| `number` \| `bigint`

##### data

> `readonly` **data**: `string`

##### id?

> `readonly` `optional` **id?**: `string`

##### logIndex?

> `readonly` `optional` **logIndex?**: `string` \| `number` \| `bigint`

##### removed

> `readonly` **removed**: `boolean`

##### topics

> `readonly` **topics**: `string`[]

##### transactionHash?

> `readonly` `optional` **transactionHash?**: `string`

##### transactionIndex?

> `readonly` `optional` **transactionIndex?**: `string` \| `number` \| `bigint`

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
