[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3BaseProvider

# Abstract Class: Web3BaseProvider\<API\>

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:65

## Extended by

- [`Eip1193Provider`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/Eip1193Provider.md)

## Type Parameters

### API

`API` *extends* [`Web3APISpec`](../type-aliases/Web3APISpec.md) = [`EthExecutionAPI`](../type-aliases/EthExecutionAPI.md)

## Implements

- [`LegacySendProvider`](../interfaces/LegacySendProvider.md)
- [`LegacySendAsyncProvider`](../interfaces/LegacySendAsyncProvider.md)
- [`EIP1193Provider`](../interfaces/EIP1193Provider.md)\<`API`\>

## Constructors

### Constructor

> **new Web3BaseProvider**\<`API`\>(): `Web3BaseProvider`\<`API`\>

#### Returns

`Web3BaseProvider`\<`API`\>

## Accessors

### \[symbol\]

#### Get Signature

> **get** **\[symbol\]**(): `boolean`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:67

##### Returns

`boolean`

## Methods

### asEIP1193Provider()

> **asEIP1193Provider**(): [`Eip1193Compatible`](../type-aliases/Eip1193Compatible.md)\<`API`\>

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:97

Modify the return type of the request method to be fully compatible with EIP-1193

[deprecated] In the future major releases (\>= v5) all providers are supposed to be fully compatible with EIP-1193.
So this method will not be needed and would not be available in the future.

#### Returns

[`Eip1193Compatible`](../type-aliases/Eip1193Compatible.md)\<`API`\>

A new instance of the provider with the request method fully compatible with EIP-1193

#### Example

```ts
const provider = new Web3HttpProvider('http://localhost:8545');
const fullyCompatibleProvider = provider.asEIP1193Provider();
const result = await fullyCompatibleProvider.request({ method: 'eth_getBalance' });
console.log(result); // '0x0234c8a3397aab58' or something like that
```

***

### connect()

> `abstract` **connect**(): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:116

#### Returns

`void`

***

### disconnect()

> `abstract` **disconnect**(`code?`, `data?`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:117

#### Parameters

##### code?

`number`

##### data?

`string`

#### Returns

`void`

***

### getStatus()

> `abstract` **getStatus**(): [`Web3ProviderStatus`](../type-aliases/Web3ProviderStatus.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:68

#### Returns

[`Web3ProviderStatus`](../type-aliases/Web3ProviderStatus.md)

***

### on()

#### Call Signature

> `abstract` **on**(`type`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:99

##### Parameters

###### type

`"disconnect"`

###### listener

[`Web3Eip1193ProviderEventCallback`](../type-aliases/Web3Eip1193ProviderEventCallback.md)\<[`ProviderRpcError`](../interfaces/ProviderRpcError.md)\>

##### Returns

`void`

##### Implementation of

[`EIP1193Provider`](../interfaces/EIP1193Provider.md).[`on`](../interfaces/EIP1193Provider.md#on)

#### Call Signature

> `abstract` **on**\<`T`\>(`type`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:100

##### Type Parameters

###### T

`T` = [`JsonRpcResult`](../type-aliases/JsonRpcResult.md)

##### Parameters

###### type

`string`

###### listener

[`Web3Eip1193ProviderEventCallback`](../type-aliases/Web3Eip1193ProviderEventCallback.md)\<[`ProviderMessage`](../interfaces/ProviderMessage.md)\> \| [`Web3ProviderMessageEventCallback`](../type-aliases/Web3ProviderMessageEventCallback.md)\<`T`\>

##### Returns

`void`

##### Implementation of

[`EIP1193Provider`](../interfaces/EIP1193Provider.md).[`on`](../interfaces/EIP1193Provider.md#on)

#### Call Signature

> `abstract` **on**\<`T`\>(`type`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:101

##### Type Parameters

###### T

`T` = [`JsonRpcResult`](../type-aliases/JsonRpcResult.md)

##### Parameters

###### type

`string`

###### listener

[`Web3Eip1193ProviderEventCallback`](../type-aliases/Web3Eip1193ProviderEventCallback.md)\<[`ProviderMessage`](../interfaces/ProviderMessage.md)\> \| [`Web3ProviderMessageEventCallback`](../type-aliases/Web3ProviderMessageEventCallback.md)\<`T`\>

##### Returns

`void`

##### Implementation of

[`EIP1193Provider`](../interfaces/EIP1193Provider.md).[`on`](../interfaces/EIP1193Provider.md#on)

#### Call Signature

> `abstract` **on**(`type`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:102

##### Parameters

###### type

`"connect"`

###### listener

[`Web3Eip1193ProviderEventCallback`](../type-aliases/Web3Eip1193ProviderEventCallback.md)\<[`ProviderConnectInfo`](../interfaces/ProviderConnectInfo.md)\>

##### Returns

`void`

##### Implementation of

[`EIP1193Provider`](../interfaces/EIP1193Provider.md).[`on`](../interfaces/EIP1193Provider.md#on)

#### Call Signature

> `abstract` **on**(`type`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:103

##### Parameters

###### type

`"chainChanged"`

###### listener

[`Web3Eip1193ProviderEventCallback`](../type-aliases/Web3Eip1193ProviderEventCallback.md)\<`string`\>

##### Returns

`void`

##### Implementation of

[`EIP1193Provider`](../interfaces/EIP1193Provider.md).[`on`](../interfaces/EIP1193Provider.md#on)

#### Call Signature

> `abstract` **on**(`type`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:104

##### Parameters

###### type

`"accountsChanged"`

###### listener

[`Web3Eip1193ProviderEventCallback`](../type-aliases/Web3Eip1193ProviderEventCallback.md)\<`string`[]\>

##### Returns

`void`

##### Implementation of

`EIP1193Provider.on`

***

### once()

#### Call Signature

> `abstract` **once**(`type`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:110

##### Parameters

###### type

`"disconnect"`

###### listener

[`Web3Eip1193ProviderEventCallback`](../type-aliases/Web3Eip1193ProviderEventCallback.md)\<[`ProviderRpcError`](../interfaces/ProviderRpcError.md)\>

##### Returns

`void`

#### Call Signature

> `abstract` **once**\<`T`\>(`type`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:111

##### Type Parameters

###### T

`T` = [`JsonRpcResult`](../type-aliases/JsonRpcResult.md)

##### Parameters

###### type

`string`

###### listener

[`Web3Eip1193ProviderEventCallback`](../type-aliases/Web3Eip1193ProviderEventCallback.md)\<[`ProviderMessage`](../interfaces/ProviderMessage.md)\> \| [`Web3ProviderEventCallback`](../type-aliases/Web3ProviderEventCallback.md)\<`T`\>

##### Returns

`void`

#### Call Signature

> `abstract` **once**(`type`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:112

##### Parameters

###### type

`"connect"`

###### listener

[`Web3Eip1193ProviderEventCallback`](../type-aliases/Web3Eip1193ProviderEventCallback.md)\<[`ProviderConnectInfo`](../interfaces/ProviderConnectInfo.md)\>

##### Returns

`void`

#### Call Signature

> `abstract` **once**(`type`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:113

##### Parameters

###### type

`"chainChanged"`

###### listener

[`Web3Eip1193ProviderEventCallback`](../type-aliases/Web3Eip1193ProviderEventCallback.md)\<`string`\>

##### Returns

`void`

#### Call Signature

> `abstract` **once**(`type`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:114

##### Parameters

###### type

`"accountsChanged"`

###### listener

[`Web3Eip1193ProviderEventCallback`](../type-aliases/Web3Eip1193ProviderEventCallback.md)\<`string`[]\>

##### Returns

`void`

***

### removeAllListeners()?

> `abstract` `optional` **removeAllListeners**(`type`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:115

#### Parameters

##### type

`string`

#### Returns

`void`

***

### removeListener()

#### Call Signature

> `abstract` **removeListener**(`type`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:105

##### Parameters

###### type

`"disconnect"`

###### listener

[`Web3Eip1193ProviderEventCallback`](../type-aliases/Web3Eip1193ProviderEventCallback.md)\<[`ProviderRpcError`](../interfaces/ProviderRpcError.md)\>

##### Returns

`void`

##### Implementation of

[`EIP1193Provider`](../interfaces/EIP1193Provider.md).[`removeListener`](../interfaces/EIP1193Provider.md#removelistener)

#### Call Signature

> `abstract` **removeListener**\<`T`\>(`type`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:106

##### Type Parameters

###### T

`T` = [`JsonRpcResult`](../type-aliases/JsonRpcResult.md)

##### Parameters

###### type

`string`

###### listener

[`Web3Eip1193ProviderEventCallback`](../type-aliases/Web3Eip1193ProviderEventCallback.md)\<[`ProviderMessage`](../interfaces/ProviderMessage.md)\> \| [`Web3ProviderEventCallback`](../type-aliases/Web3ProviderEventCallback.md)\<`T`\>

##### Returns

`void`

##### Implementation of

[`EIP1193Provider`](../interfaces/EIP1193Provider.md).[`removeListener`](../interfaces/EIP1193Provider.md#removelistener)

#### Call Signature

> `abstract` **removeListener**(`type`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:107

##### Parameters

###### type

`"connect"`

###### listener

[`Web3Eip1193ProviderEventCallback`](../type-aliases/Web3Eip1193ProviderEventCallback.md)\<[`ProviderConnectInfo`](../interfaces/ProviderConnectInfo.md)\>

##### Returns

`void`

##### Implementation of

[`EIP1193Provider`](../interfaces/EIP1193Provider.md).[`removeListener`](../interfaces/EIP1193Provider.md#removelistener)

#### Call Signature

> `abstract` **removeListener**(`type`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:108

##### Parameters

###### type

`"chainChanged"`

###### listener

[`Web3Eip1193ProviderEventCallback`](../type-aliases/Web3Eip1193ProviderEventCallback.md)\<`string`\>

##### Returns

`void`

##### Implementation of

[`EIP1193Provider`](../interfaces/EIP1193Provider.md).[`removeListener`](../interfaces/EIP1193Provider.md#removelistener)

#### Call Signature

> `abstract` **removeListener**(`type`, `listener`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:109

##### Parameters

###### type

`"accountsChanged"`

###### listener

[`Web3Eip1193ProviderEventCallback`](../type-aliases/Web3Eip1193ProviderEventCallback.md)\<`string`[]\>

##### Returns

`void`

##### Implementation of

[`EIP1193Provider`](../interfaces/EIP1193Provider.md).[`removeListener`](../interfaces/EIP1193Provider.md#removelistener)

***

### request()

> `abstract` **request**\<`Method`, `ResultType`\>(`args`): `Promise`\<[`JsonRpcResponseWithResult`](../interfaces/JsonRpcResponseWithResult.md)\<`ResultType`\>\>

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:98

#### Type Parameters

##### Method

`Method` *extends* `string`

##### ResultType

`ResultType` = `unknown`

#### Parameters

##### args

[`Web3APIPayload`](../interfaces/Web3APIPayload.md)\<`API`, `Method`\>

#### Returns

`Promise`\<[`JsonRpcResponseWithResult`](../interfaces/JsonRpcResponseWithResult.md)\<`ResultType`\>\>

#### Implementation of

[`EIP1193Provider`](../interfaces/EIP1193Provider.md).[`request`](../interfaces/EIP1193Provider.md#request)

***

### reset()

> `abstract` **reset**(): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:118

#### Returns

`void`

***

### ~~send()~~

> **send**\<`ResultType`, `P`\>(`payload`, `callback`): `void`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:75

#### Type Parameters

##### ResultType

`ResultType` = [`JsonRpcResult`](../type-aliases/JsonRpcResult.md)

##### P

`P` = `unknown`

#### Parameters

##### payload

[`JsonRpcPayload`](../type-aliases/JsonRpcPayload.md)\<`P`\>

Request Payload

##### callback

(`err`, `response?`) => `void`

Callback

#### Returns

`void`

#### Deprecated

Please use `.request` instead.

#### Implementation of

[`LegacySendProvider`](../interfaces/LegacySendProvider.md).[`send`](../interfaces/LegacySendProvider.md#send)

***

### ~~sendAsync()~~

> **sendAsync**\<`R`, `P`\>(`payload`): `Promise`\<[`JsonRpcResponse`](../type-aliases/JsonRpcResponse.md)\<`R`, [`JsonRpcResult`](../type-aliases/JsonRpcResult.md)\>\>

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:80

#### Type Parameters

##### R

`R` = [`JsonRpcResult`](../type-aliases/JsonRpcResult.md)

##### P

`P` = `unknown`

#### Parameters

##### payload

[`JsonRpcPayload`](../type-aliases/JsonRpcPayload.md)\<`P`\>

Request Payload

#### Returns

`Promise`\<[`JsonRpcResponse`](../type-aliases/JsonRpcResponse.md)\<`R`, [`JsonRpcResult`](../type-aliases/JsonRpcResult.md)\>\>

#### Deprecated

Please use `.request` instead.

#### Implementation of

[`LegacySendAsyncProvider`](../interfaces/LegacySendAsyncProvider.md).[`sendAsync`](../interfaces/LegacySendAsyncProvider.md#sendasync)

***

### supportsSubscriptions()

> `abstract` **supportsSubscriptions**(): `boolean`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:69

#### Returns

`boolean`

***

### isWeb3Provider()

> `static` **isWeb3Provider**(`provider`): `boolean`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_base\_provider.d.ts:66

#### Parameters

##### provider

`unknown`

#### Returns

`boolean`
