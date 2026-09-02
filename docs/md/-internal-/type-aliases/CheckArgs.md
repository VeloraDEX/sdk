[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / CheckArgs

# Type Alias: CheckArgs\<abiFunction, args, targetArgs\>

> **CheckArgs**\<`abiFunction`, `args`, `targetArgs`\> = readonly \[\] *extends* `args` ? readonly \[\] : `args` *extends* `targetArgs` ? `abiFunction` : `never`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/contract.d.ts:30

## Type Parameters

### abiFunction

`abiFunction` *extends* [`AbiFunction`](AbiFunction.md)

### args

`args`

### targetArgs

`targetArgs` *extends* [`AbiParametersToPrimitiveTypes`](AbiParametersToPrimitiveTypes.md)\<`abiFunction`\[`"inputs"`\], `"inputs"`, `true`\> = [`AbiParametersToPrimitiveTypes`](AbiParametersToPrimitiveTypes.md)\<`abiFunction`\[`"inputs"`\], `"inputs"`, `true`\>
