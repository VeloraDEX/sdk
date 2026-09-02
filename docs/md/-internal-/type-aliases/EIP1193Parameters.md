[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / EIP1193Parameters

# Type Alias: EIP1193Parameters\<rpcSchema\>

> **EIP1193Parameters**\<`rpcSchema`\> = `rpcSchema` *extends* [`RpcSchema`](RpcSchema.md) ? `{ [K in keyof rpcSchema]: Prettify<{ method: rpcSchema[K] extends rpcSchema[number] ? rpcSchema[K]["Method"] : never } & (rpcSchema[K] extends rpcSchema[number] ? rpcSchema[K]["Parameters"] extends undefined ? { params?: undefined } : { params: (...)[(...)]["Parameters"] } : never)> }`\[`number`\] : `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/eip1193.d.ts:1939

## Type Parameters

### rpcSchema

`rpcSchema` *extends* [`RpcSchema`](RpcSchema.md) \| `undefined` = `undefined`
