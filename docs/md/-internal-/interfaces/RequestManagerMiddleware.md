[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / RequestManagerMiddleware

# Interface: RequestManagerMiddleware\<API\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/types.d.ts:12

## Type Parameters

### API

`API`

## Methods

### processRequest()

> **processRequest**\<`ParamType`\>(`request`, `options?`): `Promise`\<[`JsonRpcPayload`](../type-aliases/JsonRpcPayload.md)\<`ParamType`\>\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/types.d.ts:13

#### Type Parameters

##### ParamType

`ParamType` = `unknown`[]

#### Parameters

##### request

[`JsonRpcPayload`](../type-aliases/JsonRpcPayload.md)\<`ParamType`\>

##### options?

#### Returns

`Promise`\<[`JsonRpcPayload`](../type-aliases/JsonRpcPayload.md)\<`ParamType`\>\>

***

### processResponse()

> **processResponse**\<`AnotherMethod`, `ResponseType`\>(`response`, `options?`): `Promise`\<[`JsonRpcResponse`](../type-aliases/JsonRpcResponse.md)\<`ResponseType`\>\>

Defined in: node\_modules/.pnpm/web3-core@4.7.0/node\_modules/web3-core/lib/commonjs/types.d.ts:16

#### Type Parameters

##### AnotherMethod

`AnotherMethod` *extends* `string`

##### ResponseType

`ResponseType` = [`Web3APIReturnType`](../type-aliases/Web3APIReturnType.md)\<`API`, `AnotherMethod`\>

#### Parameters

##### response

[`JsonRpcResponse`](../type-aliases/JsonRpcResponse.md)\<`ResponseType`\>

##### options?

#### Returns

`Promise`\<[`JsonRpcResponse`](../type-aliases/JsonRpcResponse.md)\<`ResponseType`\>\>
