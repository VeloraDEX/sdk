[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / EIP1193Parameters

# Type Alias: EIP1193Parameters\<rpcSchema\>

> **EIP1193Parameters**\<`rpcSchema`\>: `rpcSchema` *extends* [`RpcSchema`](RpcSchema.md) ? `{ [K in keyof rpcSchema]: Prettify<Object & (rpcSchema[K] extends rpcSchema[number] ? rpcSchema[K]["Parameters"] extends undefined ? Object : Object : never)> }`\[`number`\] : `object`

## Type Parameters

• **rpcSchema** *extends* [`RpcSchema`](RpcSchema.md) \| `undefined` = `undefined`

## Defined in

node\_modules/.pnpm/viem@2.39.0\_typescript@5.6.3\_zod@3.25.76/node\_modules/viem/\_types/types/eip1193.d.ts:1883
