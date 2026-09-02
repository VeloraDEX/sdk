[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / LogsSubscription

# Class: LogsSubscription

Defined in: node\_modules/.pnpm/web3-eth-contract@4.7.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-contract/lib/commonjs/log\_subscription.d.ts:57

LogSubscription to be used to subscribe to events logs.

Following events are supported and can be accessed with either [LogsSubscription.once](#once) or $[LogsSubscription.on](#on) methods.

- **connected**: Emitted when the subscription is connected.
- **data**: Fires on each incoming event with the event object as argument.
- **changed**: Fires on each event which was removed from the blockchain. The event will have the additional property `removed: true`.
- **error**: Fires on each error.

```ts
const subscription = await myContract.events.MyEvent({
  filter: {myIndexedParam: [20,23], myOtherIndexedParam: '0x123456789...'}, // Using an array means OR: e.g. 20 or 23
  fromBlock: 0
});

subscription.on("connected", function(subscriptionId){
  console.log(subscriptionId);
});

subscription.on('data', function(event){
  console.log(event); // same results as the optional callback above
});

subscription.on('changed', function(event){
  // remove event from local database
})

subscription.on('error', function(error, receipt) { // If the transaction was rejected by the network with a receipt, the second parameter will be the receipt.
  ...
});

// event output example
> {
  returnValues: {
      myIndexedParam: 20,
      myOtherIndexedParam: '0x123456789...',
      myNonIndexParam: 'My String'
  },
  raw: {
      data: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
      topics: ['0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7', '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385']
  },
  event: 'MyEvent',
  signature: '0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7',
  logIndex: 0,
  transactionIndex: 0,
  transactionHash: '0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385',
  blockHash: '0xfd43ade1c09fade1c0d57a7af66ab4ead7c2c2eb7b11a91ffdd57a7af66ab4ead7',
  blockNumber: 1234,
  address: '0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe'
}
```

## Extends

- [`Web3Subscription`](Web3Subscription.md)\<\{ `changed`: [`EventLog`](../interfaces/EventLog.md) & `object`; `data`: [`EventLog`](../interfaces/EventLog.md); \}, \{ `abi`: [`AbiEventFragment`](../type-aliases/AbiEventFragment.md); `address?`: [`HexString`](../type-aliases/HexString.md); `topics?`: ([`Topic`](../type-aliases/Topic.md) \| [`Topic`](../type-aliases/Topic.md)[] \| `null`)[]; \}\>

## Constructors

### Constructor

> **new LogsSubscription**(`args`, `options`): `LogsSubscription`

Defined in: node\_modules/.pnpm/web3-eth-contract@4.7.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-contract/lib/commonjs/log\_subscription.d.ts:82

#### Parameters

##### args

###### abi

[`AbiBaseFragment`](../type-aliases/AbiBaseFragment.md) & `object` & `object`

###### address?

`string`

###### jsonInterface

[`ContractAbiWithSignature`](../type-aliases/ContractAbiWithSignature.md)

###### topics?

(`string` \| `string`[] \| `null`)[]

##### options

###### returnFormat?

[`DataFormat`](../type-aliases/DataFormat.md)

###### subscriptionManager

[`Web3SubscriptionManager`](Web3SubscriptionManager.md)

#### Returns

`LogsSubscription`

#### Overrides

[`Web3Subscription`](Web3Subscription.md).[`constructor`](Web3Subscription.md#constructor)

### Constructor

> **new LogsSubscription**(`args`, `options`): `LogsSubscription`

Defined in: node\_modules/.pnpm/web3-eth-contract@4.7.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-contract/lib/commonjs/log\_subscription.d.ts:96

#### Parameters

##### args

###### abi

[`AbiBaseFragment`](../type-aliases/AbiBaseFragment.md) & `object` & `object`

###### address?

`string`

###### jsonInterface

[`ContractAbiWithSignature`](../type-aliases/ContractAbiWithSignature.md)

###### topics?

(`string` \| `string`[] \| `null`)[]

##### options

###### requestManager

[`Web3RequestManager`](Web3RequestManager.md)

###### returnFormat?

[`DataFormat`](../type-aliases/DataFormat.md)

#### Returns

`LogsSubscription`

#### Deprecated

This constructor overloading should not be used

#### Overrides

[`Web3Subscription`](Web3Subscription.md).[`constructor`](Web3Subscription.md#constructor)

## Properties

### \_id?

> `protected` `optional` **\_id?**: `string`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:15

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`_id`](Web3Subscription.md#_id)

***

### abi

> `readonly` **abi**: [`AbiBaseFragment`](../type-aliases/AbiBaseFragment.md) & `object` & `object`

Defined in: node\_modules/.pnpm/web3-eth-contract@4.7.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-contract/lib/commonjs/log\_subscription.d.ts:78

The glossary#json-interface-abi \| JSON Interface of the event.

#### Type Declaration

##### anonymous?

> `readonly` `optional` **anonymous?**: `boolean`

##### inputs?

> `readonly` `optional` **inputs?**: readonly [`AbiParameter`](../type-aliases/AbiParameter.md)[]

##### name

> `readonly` **name**: `string`

##### type

> `readonly` **type**: `string`

#### Type Declaration

##### signature

> **signature**: `string`

***

### address?

> `readonly` `optional` **address?**: `string`

Defined in: node\_modules/.pnpm/web3-eth-contract@4.7.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-contract/lib/commonjs/log\_subscription.d.ts:70

Address of tye contract

***

### args

> `readonly` **args**: `object`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscriptions.d.ts:11

#### abi

> **abi**: [`AbiEventFragment`](../type-aliases/AbiEventFragment.md)

#### address?

> `optional` **address?**: `string`

#### topics?

> `optional` **topics?**: (`string` \| `string`[] \| `null`)[]

#### Inherited from

[`Web3Subscription`](Web3Subscription.md).[`args`](Web3Subscription.md#args)

***

### jsonInterface

> `readonly` **jsonInterface**: [`ContractAbiWithSignature`](../type-aliases/ContractAbiWithSignature.md)

Defined in: node\_modules/.pnpm/web3-eth-contract@4.7.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-contract/lib/commonjs/log\_subscription.d.ts:81

***

### topics?

> `readonly` `optional` **topics?**: (`string` \| `string`[] \| `null`)[]

Defined in: node\_modules/.pnpm/web3-eth-contract@4.7.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-contract/lib/commonjs/log\_subscription.d.ts:74

The list of topics subscribed

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

> `protected` **\_buildSubscriptionParams**(): (`string` \| \{ `address`: `string` \| `undefined`; `topics`: (`string` \| `string`[] \| `null`)[] \| `undefined`; \})[]

Defined in: node\_modules/.pnpm/web3-eth-contract@4.7.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-contract/lib/commonjs/log\_subscription.d.ts:107

#### Returns

(`string` \| \{ `address`: `string` \| `undefined`; `topics`: (`string` \| `string`[] \| `null`)[] \| `undefined`; \})[]

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

> `protected` **formatSubscriptionResult**(`data`): [`EventLog`](../interfaces/EventLog.md)

Defined in: node\_modules/.pnpm/web3-eth-contract@4.7.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-contract/lib/commonjs/log\_subscription.d.ts:111

#### Parameters

##### data

[`EventLog`](../interfaces/EventLog.md)

#### Returns

[`EventLog`](../interfaces/EventLog.md)

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
