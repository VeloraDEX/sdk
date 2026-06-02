[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / CheckArgs

# Type Alias: CheckArgs\<abiFunction, args, targetArgs\>

> **CheckArgs**\<`abiFunction`, `args`, `targetArgs`\>: readonly [] *extends* `args` ? readonly [] : `args` *extends* `targetArgs` ? `abiFunction` : `never`

## Type Parameters

• **abiFunction** *extends* [`AbiFunction`](AbiFunction.md)

• **args**

• **targetArgs** *extends* [`AbiParametersToPrimitiveTypes`](AbiParametersToPrimitiveTypes.md)\<`abiFunction`\[`"inputs"`\], `"inputs"`\> = [`AbiParametersToPrimitiveTypes`](AbiParametersToPrimitiveTypes.md)\<`abiFunction`\[`"inputs"`\], `"inputs"`\>

## Defined in

node\_modules/.pnpm/viem@2.39.0\_typescript@5.6.3\_zod@3.25.76/node\_modules/viem/\_types/types/contract.d.ts:30
