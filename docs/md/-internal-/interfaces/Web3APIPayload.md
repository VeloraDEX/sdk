[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3APIPayload

# Interface: Web3APIPayload\<API, Method\>

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_api\_types.d.ts:27

## Extends

- [`Web3APIRequest`](Web3APIRequest.md)\<`API`, `Method`\>

## Type Parameters

### API

`API` *extends* [`Web3APISpec`](../type-aliases/Web3APISpec.md)

### Method

`Method` *extends* [`Web3APIMethod`](../type-aliases/Web3APIMethod.md)\<`API`\>

## Properties

### id?

> `readonly` `optional` **id?**: [`JsonRpcId`](../type-aliases/JsonRpcId.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_api\_types.d.ts:29

***

### jsonrpc?

> `readonly` `optional` **jsonrpc?**: [`JsonRpcIdentifier`](../type-aliases/JsonRpcIdentifier.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_api\_types.d.ts:28

***

### method

> **method**: `string` \| `Method`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_api\_types.d.ts:24

#### Inherited from

[`Web3APIRequest`](Web3APIRequest.md).[`method`](Web3APIRequest.md#method-1)

***

### params?

> `optional` **params?**: `object` \| readonly `unknown`[] \| [`Web3APIParams`](../type-aliases/Web3APIParams.md)\<`API`, `Method`\>

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_api\_types.d.ts:25

#### Inherited from

[`Web3APIRequest`](Web3APIRequest.md).[`params`](Web3APIRequest.md#params)

***

### requestOptions?

> `readonly` `optional` **requestOptions?**: `unknown`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_api\_types.d.ts:30
