[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / EIP1193RequestFn

# Type Alias: EIP1193RequestFn\<rpcSchema, raw\>

> **EIP1193RequestFn**\<`rpcSchema`, `raw`\> = \<`rpcSchemaOverride`, `_parameters`, `_returnType`\>(`args`, `options?`) => `Promise`\<`_returnType`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/eip1193.d.ts:1972

## Type Parameters

### rpcSchema

`rpcSchema` *extends* [`RpcSchema`](RpcSchema.md) \| `undefined` = `undefined`

### raw

`raw` *extends* `boolean` = `false`

## Type Parameters

### rpcSchemaOverride

`rpcSchemaOverride` *extends* [`RpcSchemaOverride`](RpcSchemaOverride.md) \| `undefined` = `undefined`

### _parameters

`_parameters` *extends* [`EIP1193Parameters`](EIP1193Parameters.md)\<[`DerivedRpcSchema`](DerivedRpcSchema.md)\<`rpcSchema`, `rpcSchemaOverride`\>\> = [`EIP1193Parameters`](EIP1193Parameters.md)\<[`DerivedRpcSchema`](DerivedRpcSchema.md)\<`rpcSchema`, `rpcSchemaOverride`\>\>

### _returnType

`_returnType` = [`DerivedRpcSchema`](DerivedRpcSchema.md)\<`rpcSchema`, `rpcSchemaOverride`\> *extends* [`RpcSchema`](RpcSchema.md) ? `raw` *extends* `true` ? [`OneOf`](OneOf.md)\<\{ `result`: [`Extract`](Extract.md)\<[`DerivedRpcSchema`](DerivedRpcSchema.md)\<`rpcSchema`, `rpcSchemaOverride`\>\[`number`\], \{ `Method`: `_parameters`\[`"method"`\]; \}\>\[`"ReturnType"`\]; \} \| \{ `error`: [`ErrorObject`](ErrorObject.md); \}\> : [`Extract`](Extract.md)\<[`DerivedRpcSchema`](DerivedRpcSchema.md)\<`rpcSchema`, `rpcSchemaOverride`\>\[`number`\], \{ `Method`: `_parameters`\[`"method"`\]; \}\>\[`"ReturnType"`\] : `raw` *extends* `true` ? [`OneOf`](OneOf.md)\<\{ `result`: `unknown`; \} \| \{ `error`: [`ErrorObject`](ErrorObject.md); \}\> : `unknown`

## Parameters

### args

`_parameters`

### options?

[`EIP1193RequestOptions`](EIP1193RequestOptions.md)

## Returns

`Promise`\<`_returnType`\>
