[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / EIP1193RequestFn

# Type Alias: EIP1193RequestFn()\<rpcSchema, raw\>

> **EIP1193RequestFn**\<`rpcSchema`, `raw`\>: \<`rpcSchemaOverride`, `_parameters`, `_returnType`\>(`args`, `options`?) => `Promise`\<`_returnType`\>

## Type Parameters

• **rpcSchema** *extends* [`RpcSchema`](RpcSchema.md) \| `undefined` = `undefined`

• **raw** *extends* `boolean` = `false`

## Type Parameters

• **rpcSchemaOverride** *extends* [`RpcSchemaOverride`](RpcSchemaOverride.md) \| `undefined` = `undefined`

• **_parameters** *extends* [`EIP1193Parameters`](EIP1193Parameters.md)\<[`DerivedRpcSchema`](DerivedRpcSchema.md)\<`rpcSchema`, `rpcSchemaOverride`\>\> = [`EIP1193Parameters`](EIP1193Parameters.md)\<[`DerivedRpcSchema`](DerivedRpcSchema.md)\<`rpcSchema`, `rpcSchemaOverride`\>\>

• **_returnType** = [`DerivedRpcSchema`](DerivedRpcSchema.md)\<`rpcSchema`, `rpcSchemaOverride`\> *extends* [`RpcSchema`](RpcSchema.md) ? `raw` *extends* `true` ? [`OneOf`](OneOf.md)\<`object` \| `object`\> : [`Extract`](Extract.md)\<[`DerivedRpcSchema`](DerivedRpcSchema.md)\<`rpcSchema`, `rpcSchemaOverride`\>\[`number`\], `object`\>\[`"ReturnType"`\] : `raw` *extends* `true` ? [`OneOf`](OneOf.md)\<`object` \| `object`\> : `unknown`

## Parameters

• **args**: `_parameters`

• **options?**: [`EIP1193RequestOptions`](EIP1193RequestOptions.md)

## Returns

`Promise`\<`_returnType`\>

## Defined in

node\_modules/viem/\_types/types/eip1193.d.ts:1914
