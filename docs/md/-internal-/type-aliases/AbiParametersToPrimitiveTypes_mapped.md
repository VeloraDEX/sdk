[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AbiParametersToPrimitiveTypes\_mapped

# Type Alias: AbiParametersToPrimitiveTypes\_mapped\<abiParameters, abiParameterKind\>

> **AbiParametersToPrimitiveTypes\_mapped**\<`abiParameters`, `abiParameterKind`\> = [`Pretty`](Pretty.md)\<`{ [key in keyof abiParameters]: AbiParameterToPrimitiveType<abiParameters[key], abiParameterKind> }`\>

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/utils.d.ts:88

## Type Parameters

### abiParameters

`abiParameters` *extends* readonly [`AbiParameter`](AbiParameter-1.md)[]

### abiParameterKind

`abiParameterKind` *extends* [`AbiParameterKind`](AbiParameterKind.md) = [`AbiParameterKind`](AbiParameterKind.md)
