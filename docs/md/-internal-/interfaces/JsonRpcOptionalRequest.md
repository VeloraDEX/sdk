[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / JsonRpcOptionalRequest

# Interface: JsonRpcOptionalRequest\<ParamType\>

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/json\_rpc\_types.d.ts:54

Construct a type with the properties of T except for those in type K.

## Extends

- [`Omit`](../type-aliases/Omit.md)\<[`JsonRpcRequest`](JsonRpcRequest.md)\<`ParamType`\>, `"id"` \| `"jsonrpc"`\>

## Type Parameters

### ParamType

`ParamType` = `unknown`[]

## Properties

### id?

> `readonly` `optional` **id?**: [`JsonRpcId`](../type-aliases/JsonRpcId.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/json\_rpc\_types.d.ts:55

***

### jsonrpc?

> `readonly` `optional` **jsonrpc?**: [`JsonRpcIdentifier`](../type-aliases/JsonRpcIdentifier.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/json\_rpc\_types.d.ts:56

***

### method

> `readonly` **method**: `string`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/json\_rpc\_types.d.ts:51

#### Inherited from

[`JsonRpcRequest`](JsonRpcRequest.md).[`method`](JsonRpcRequest.md#method)

***

### params?

> `readonly` `optional` **params?**: `ParamType`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/json\_rpc\_types.d.ts:52

#### Inherited from

`Omit.params`
