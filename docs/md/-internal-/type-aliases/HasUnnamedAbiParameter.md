[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / \_HasUnnamedAbiParameter

# Type Alias: \_HasUnnamedAbiParameter\<abiParameters\>

> **\_HasUnnamedAbiParameter**\<`abiParameters`\>: `abiParameters` *extends* readonly [infer Head, `...(infer Tail extends readonly AbiParameter[])`] ? `Head` *extends* `object` ? `Head`\[`"name"`\] *extends* `""` ? `true` : [`_HasUnnamedAbiParameter`](HasUnnamedAbiParameter.md)\<`Tail`\> : `true` : `false`

## Type Parameters

• **abiParameters** *extends* readonly [`AbiParameter`](AbiParameter.md)[]

## Defined in

node\_modules/.pnpm/viem@2.39.0\_typescript@5.6.3\_zod@3.25.76/node\_modules/viem/\_types/types/contract.d.ts:103
