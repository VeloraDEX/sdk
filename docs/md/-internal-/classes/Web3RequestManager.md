[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3RequestManager

# Class: Web3RequestManager\<API\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_request\_manager.d.ts:8

## Extends

- [`Web3EventEmitter`](Web3EventEmitter.md)\<\{ \[key in Web3RequestManagerEvent\]: SupportedProviders\<API\> \| undefined \}\>

## Type Parameters

### API

`API` *extends* [`Web3APISpec`](../type-aliases/Web3APISpec.md) = [`EthExecutionAPI`](../type-aliases/EthExecutionAPI.md)

## Constructors

### Constructor

> **new Web3RequestManager**\<`API`\>(`provider?`, `useRpcCallSpecification?`, `requestManagerMiddleware?`): `Web3RequestManager`\<`API`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_request\_manager.d.ts:14

#### Parameters

##### provider?

`string` \| [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`API`\>

##### useRpcCallSpecification?

`boolean`

##### requestManagerMiddleware?

[`RequestManagerMiddleware`](../interfaces/RequestManagerMiddleware.md)\<`API`\>

#### Returns

`Web3RequestManager`\<`API`\>

#### Overrides

[`Web3EventEmitter`](Web3EventEmitter.md).[`constructor`](Web3EventEmitter.md#constructor)

## Properties

### middleware?

> `optional` **middleware?**: [`RequestManagerMiddleware`](../interfaces/RequestManagerMiddleware.md)\<`API`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_request\_manager.d.ts:13

## Accessors

### provider

#### Get Signature

> **get** **provider**(): [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`API`\> \| `undefined`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_request\_manager.d.ts:27

Will return the current provider.

##### Returns

[`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`API`\> \| `undefined`

Returns the current provider

***

### providers

#### Get Signature

> **get** **providers**(): `object`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_request\_manager.d.ts:31

Will return all available providers

##### Returns

`object`

###### HttpProvider

> **HttpProvider**: [`Web3BaseProviderConstructor`](../type-aliases/Web3BaseProviderConstructor.md)

###### WebsocketProvider

> **WebsocketProvider**: [`Web3BaseProviderConstructor`](../type-aliases/Web3BaseProviderConstructor.md)

***

### providers

#### Get Signature

> **get** `static` **providers**(): `object`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_request\_manager.d.ts:18

Will return all available providers

##### Returns

`object`

###### HttpProvider

> **HttpProvider**: [`Web3BaseProviderConstructor`](../type-aliases/Web3BaseProviderConstructor.md)

###### WebsocketProvider

> **WebsocketProvider**: [`Web3BaseProviderConstructor`](../type-aliases/Web3BaseProviderConstructor.md)

## Methods

### emit()

> **emit**\<`K`\>(`eventName`, `params`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_event\_emitter.d.ts:16

#### Type Parameters

##### K

`K` *extends* [`Web3EventKey`](../type-aliases/Web3EventKey.md)\<\{ `BEFORE_PROVIDER_CHANGE`: [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`API`\> \| `undefined`; `PROVIDER_CHANGED`: [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`API`\> \| `undefined`; \}\>

#### Parameters

##### eventName

`K`

##### params

`object`\[`K`\]

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

`K` *extends* [`Web3EventKey`](../type-aliases/Web3EventKey.md)\<\{ `BEFORE_PROVIDER_CHANGE`: [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`API`\> \| `undefined`; `PROVIDER_CHANGED`: [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`API`\> \| `undefined`; \}\>

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

`K` *extends* [`Web3EventKey`](../type-aliases/Web3EventKey.md)\<\{ `BEFORE_PROVIDER_CHANGE`: [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`API`\> \| `undefined`; `PROVIDER_CHANGED`: [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`API`\> \| `undefined`; \}\>

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

`K` *extends* [`Web3EventKey`](../type-aliases/Web3EventKey.md)\<\{ `BEFORE_PROVIDER_CHANGE`: [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`API`\> \| `undefined`; `PROVIDER_CHANGED`: [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`API`\> \| `undefined`; \}\>

#### Parameters

##### eventName

`K`

##### fn

[`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`object`\[`K`\]\>

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

`K` *extends* [`Web3EventKey`](../type-aliases/Web3EventKey.md)\<\{ `BEFORE_PROVIDER_CHANGE`: [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`API`\> \| `undefined`; `PROVIDER_CHANGED`: [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`API`\> \| `undefined`; \}\>

#### Parameters

##### eventName

`K`

##### fn

[`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`object`\[`K`\]\>

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

`K` *extends* [`Web3EventKey`](../type-aliases/Web3EventKey.md)\<\{ `BEFORE_PROVIDER_CHANGE`: [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`API`\> \| `undefined`; `PROVIDER_CHANGED`: [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`API`\> \| `undefined`; \}\>

#### Parameters

##### eventName

`K`

##### fn

[`Web3EventCallback`](../type-aliases/Web3EventCallback.md)\<`object`\[`K`\]\>

#### Returns

`void`

#### Inherited from

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

### send()

> **send**\<`Method`, `ResponseType`\>(`request`): `Promise`\<`ResponseType`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_request\_manager.d.ts:51

Will execute a request

#### Type Parameters

##### Method

`Method` *extends* `string`

##### ResponseType

`ResponseType` = [`Web3APIReturnType`](../type-aliases/Web3APIReturnType.md)\<`API`, `Method`\>

#### Parameters

##### request

[`Web3APIRequest`](../interfaces/Web3APIRequest.md)\<`API`, `Method`\>

[Web3APIRequest](../interfaces/Web3APIRequest.md) The request to send

#### Returns

`Promise`\<`ResponseType`\>

The response of the request ResponseType. If there is error
in the response, will throw an error

***

### sendBatch()

> **sendBatch**(`request`): `Promise`\<[`JsonRpcBatchResponse`](../type-aliases/JsonRpcBatchResponse.md)\<`unknown`\>\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_request\_manager.d.ts:57

Same as send, but, will execute a batch of requests

#### Parameters

##### request

[`JsonRpcBatchRequest`](../type-aliases/JsonRpcBatchRequest.md)

[JsonRpcBatchRequest](../type-aliases/JsonRpcBatchRequest.md) The batch request to send

#### Returns

`Promise`\<[`JsonRpcBatchResponse`](../type-aliases/JsonRpcBatchResponse.md)\<`unknown`\>\>

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

### setMiddleware()

> **setMiddleware**(`requestManagerMiddleware`): `void`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_request\_manager.d.ts:41

#### Parameters

##### requestManagerMiddleware

[`RequestManagerMiddleware`](../interfaces/RequestManagerMiddleware.md)\<`API`\>

#### Returns

`void`

***

### setProvider()

> **setProvider**(`provider?`): `boolean`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_request\_manager.d.ts:40

Use to set provider. Provider can be a provider instance or a string.

#### Parameters

##### provider?

`string` \| [`SupportedProviders`](../type-aliases/SupportedProviders.md)\<`API`\>

The provider to set

#### Returns

`boolean`
