[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3SubscriptionManager

# Class: Web3SubscriptionManager\<API, RegisteredSubs\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscription\_manager.d.ts:8

## Type Parameters

### API

`API` *extends* [`Web3APISpec`](../type-aliases/Web3APISpec.md) = [`Web3APISpec`](../type-aliases/Web3APISpec.md)

### RegisteredSubs

`RegisteredSubs` *extends* `object` = \{\[`key`: `string`\]: [`Web3SubscriptionConstructor`](../type-aliases/Web3SubscriptionConstructor.md)\<`API`\>; \}

## Constructors

### Constructor

> **new Web3SubscriptionManager**\<`API`, `RegisteredSubs`\>(`requestManager`, `registeredSubscriptions`): `Web3SubscriptionManager`\<`API`, `RegisteredSubs`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscription\_manager.d.ts:28

#### Parameters

##### requestManager

[`Web3RequestManager`](Web3RequestManager.md)\<`API`\>

##### registeredSubscriptions

`RegisteredSubs`

#### Returns

`Web3SubscriptionManager`\<`API`, `RegisteredSubs`\>

#### Example

```ts
const requestManager = new Web3RequestManager("ws://localhost:8545");
const subscriptionManager = new Web3SubscriptionManager(requestManager, {});
```

### Constructor

> **new Web3SubscriptionManager**\<`API`, `RegisteredSubs`\>(`requestManager`, `registeredSubscriptions`, `tolerateUnlinkedSubscription`): `Web3SubscriptionManager`\<`API`, `RegisteredSubs`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscription\_manager.d.ts:32

#### Parameters

##### requestManager

[`Web3RequestManager`](Web3RequestManager.md)\<`API`\>

##### registeredSubscriptions

`RegisteredSubs`

##### tolerateUnlinkedSubscription

`boolean`

#### Returns

`Web3SubscriptionManager`\<`API`, `RegisteredSubs`\>

#### Deprecated

This constructor overloading should not be used

## Properties

### registeredSubscriptions

> `readonly` **registeredSubscriptions**: `RegisteredSubs`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscription\_manager.d.ts:14

***

### requestManager

> `readonly` **requestManager**: [`Web3RequestManager`](Web3RequestManager.md)\<`API`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscription\_manager.d.ts:13

## Accessors

### subscriptions

#### Get Signature

> **get** **subscriptions**(): `Map`\<`string`, [`InstanceType`](../type-aliases/InstanceType.md)\<`RegisteredSubs`\[keyof `RegisteredSubs`\]\>\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscription\_manager.d.ts:49

Will returns all subscriptions.

##### Returns

`Map`\<`string`, [`InstanceType`](../type-aliases/InstanceType.md)\<`RegisteredSubs`\[keyof `RegisteredSubs`\]\>\>

## Methods

### addSubscription()

> **addSubscription**(`sub`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscription\_manager.d.ts:56

Adds an instance of [Web3Subscription](Web3Subscription.md) and subscribes to it

#### Parameters

##### sub

[`InstanceType`](../type-aliases/InstanceType.md)\<`RegisteredSubs`\[keyof `RegisteredSubs`\]\>

A [Web3Subscription](Web3Subscription.md) object

#### Returns

`Promise`\<`string`\>

***

### clear()

> **clear**(): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscription\_manager.d.ts:73

Clears all subscriptions

#### Returns

`void`

***

### messageListener()

> `protected` **messageListener**(`data?`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscription\_manager.d.ts:34

#### Parameters

##### data?

[`JsonRpcSubscriptionResult`](../interfaces/JsonRpcSubscriptionResult.md) \| [`JsonRpcSubscriptionResultOld`](../interfaces/JsonRpcSubscriptionResultOld.md)\<[`Log`](../interfaces/Log-1.md)\> \| [`JsonRpcNotification`](../interfaces/JsonRpcNotification.md)\<[`Log`](../interfaces/Log-1.md)\>

#### Returns

`void`

***

### removeSubscription()

> **removeSubscription**(`sub`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscription\_manager.d.ts:62

Will clear a subscription

#### Parameters

##### sub

[`InstanceType`](../type-aliases/InstanceType.md)\<`RegisteredSubs`\[keyof `RegisteredSubs`\]\>

#### Returns

`Promise`\<`string`\>

***

### subscribe()

> **subscribe**\<`T`\>(`name`, `args?`, `returnFormat?`): `Promise`\<[`InstanceType`](../type-aliases/InstanceType.md)\<`RegisteredSubs`\[`T`\]\>\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscription\_manager.d.ts:45

Will create a new subscription

#### Type Parameters

##### T

`T` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### name

`T`

The subscription you want to subscribe to

##### args?

[`ConstructorParameters`](../type-aliases/ConstructorParameters.md)\<`RegisteredSubs`\[`T`\]\>\[`0`\]

Optional additional parameters, depending on the subscription type

##### returnFormat?

[`DataFormat`](../type-aliases/DataFormat.md)

#### Returns

`Promise`\<[`InstanceType`](../type-aliases/InstanceType.md)\<`RegisteredSubs`\[`T`\]\>\>

The subscription object

***

### supportsSubscriptions()

> **supportsSubscriptions**(): `boolean`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscription\_manager.d.ts:79

Check whether the current provider supports subscriptions.

#### Returns

`boolean`

`true` or `false` depending on if the current provider supports subscriptions

***

### unsubscribe()

> **unsubscribe**(`condition?`): `Promise`\<`string`[]\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_subscription\_manager.d.ts:69

Will unsubscribe all subscriptions that fulfill the condition

#### Parameters

##### condition?

[`ShouldUnsubscribeCondition`](../type-aliases/ShouldUnsubscribeCondition.md)

A function that access and `id` and a `subscription` and return `true` or `false`

#### Returns

`Promise`\<`string`[]\>

An array of all the un-subscribed subscriptions
