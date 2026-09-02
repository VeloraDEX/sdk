[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3BatchRequest

# Class: Web3BatchRequest

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_batch\_request.d.ts:5

## Constructors

### Constructor

> **new Web3BatchRequest**(`requestManager`): `Web3BatchRequest`

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_batch\_request.d.ts:8

#### Parameters

##### requestManager

[`Web3RequestManager`](Web3RequestManager.md)

#### Returns

`Web3BatchRequest`

## Accessors

### requests

#### Get Signature

> **get** **requests**(): [`JsonRpcRequest`](../interfaces/JsonRpcRequest.md)\<`unknown`[]\>[]

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_batch\_request.d.ts:9

##### Returns

[`JsonRpcRequest`](../interfaces/JsonRpcRequest.md)\<`unknown`[]\>[]

## Methods

### add()

> **add**\<`ResponseType`\>(`request`): [`Web3DeferredPromise`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/Web3DeferredPromise.md)\<`ResponseType`\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_batch\_request.d.ts:10

#### Type Parameters

##### ResponseType

`ResponseType` = `unknown`

#### Parameters

##### request

[`JsonRpcOptionalRequest`](../interfaces/JsonRpcOptionalRequest.md)\<`unknown`\>

#### Returns

[`Web3DeferredPromise`](../namespaces/node_modules/.pnpm/web3-utils@4.3.2/node_modules/web3-utils/lib/commonjs/classes/Web3DeferredPromise.md)\<`ResponseType`\>

***

### execute()

> **execute**(`options?`): `Promise`\<[`JsonRpcBatchResponse`](../type-aliases/JsonRpcBatchResponse.md)\<`unknown`, `unknown`\>\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/web3\_batch\_request.d.ts:11

#### Parameters

##### options?

###### timeout?

`number`

#### Returns

`Promise`\<[`JsonRpcBatchResponse`](../type-aliases/JsonRpcBatchResponse.md)\<`unknown`, `unknown`\>\>
