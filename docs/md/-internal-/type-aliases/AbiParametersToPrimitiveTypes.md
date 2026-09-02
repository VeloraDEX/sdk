[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AbiParametersToPrimitiveTypes

# Type Alias: AbiParametersToPrimitiveTypes\<abiParameters, abiParameterKind, experimental_namedTuples\>

> **AbiParametersToPrimitiveTypes**\<`abiParameters`, `abiParameterKind`, `experimental_namedTuples`\> = `experimental_namedTuples` *extends* `true` ? [`AbiParametersToPrimitiveTypes_named`](AbiParametersToPrimitiveTypes_named.md)\<`abiParameters`, `abiParameterKind`\> : [`AbiParametersToPrimitiveTypes_mapped`](AbiParametersToPrimitiveTypes_mapped.md)\<`abiParameters`, `abiParameterKind`\>

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/utils.d.ts:87

Converts array of [AbiParameter](AbiParameter-1.md) to corresponding TypeScript primitive types.

## Type Parameters

### abiParameters

`abiParameters` *extends* readonly [`AbiParameter`](AbiParameter-1.md)[]

Array of [AbiParameter](AbiParameter-1.md) to convert to TypeScript representations

### abiParameterKind

`abiParameterKind` *extends* [`AbiParameterKind`](AbiParameterKind.md) = [`AbiParameterKind`](AbiParameterKind.md)

Optional [AbiParameterKind](AbiParameterKind.md) to narrow by parameter type

### experimental_namedTuples

`experimental_namedTuples` *extends* `boolean` = [`ResolvedRegister`](ResolvedRegister.md)\[`"experimental_namedTuples"`\]

## Returns

Array of TypeScript primitive types
