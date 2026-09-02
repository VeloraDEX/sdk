[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / \_HasUnnamedAbiParameter

# Type Alias: \_HasUnnamedAbiParameter\<abiParameters\>

> **\_HasUnnamedAbiParameter**\<`abiParameters`\> = `abiParameters` *extends* readonly \[infer Head, `...(infer Tail extends readonly AbiParameter[])`\] ? `Head` *extends* `object` ? `Head`\[`"name"`\] *extends* `""` ? `true` : `_HasUnnamedAbiParameter`\<`Tail`\> : `true` : `false`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/contract.d.ts:104

## Type Parameters

### abiParameters

`abiParameters` *extends* readonly [`AbiParameter`](AbiParameter-1.md)[]
