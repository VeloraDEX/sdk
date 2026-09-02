[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3APIRequest

# Interface: Web3APIRequest\<API, Method\>

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_api\_types.d.ts:23

## Extended by

- [`Web3APIPayload`](Web3APIPayload.md)

## Type Parameters

### API

`API` *extends* [`Web3APISpec`](../type-aliases/Web3APISpec.md)

### Method

`Method` *extends* [`Web3APIMethod`](../type-aliases/Web3APIMethod.md)\<`API`\>

## Properties

### method

> **method**: `string` \| `Method`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_api\_types.d.ts:24

***

### params?

> `optional` **params?**: `object` \| readonly `unknown`[] \| [`Web3APIParams`](../type-aliases/Web3APIParams.md)\<`API`, `Method`\>

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/web3\_api\_types.d.ts:25
