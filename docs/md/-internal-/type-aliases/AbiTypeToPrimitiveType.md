[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AbiTypeToPrimitiveType

# Type Alias: AbiTypeToPrimitiveType\<abiType, abiParameterKind\>

> **AbiTypeToPrimitiveType**\<`abiType`, `abiParameterKind`\> = `abiType` *extends* [`SolidityBytes`](SolidityBytes.md) ? [`PrimitiveTypeLookup`](../interfaces/PrimitiveTypeLookup.md)\[`abiType`\]\[`abiParameterKind`\] : [`PrimitiveTypeLookup`](../interfaces/PrimitiveTypeLookup.md)\[`abiType`\]

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/utils.d.ts:14

Converts [AbiType](AbiType.md) to corresponding TypeScript primitive type.

Does not include full array or tuple conversion. Use [AbiParameterToPrimitiveType](AbiParameterToPrimitiveType.md) to fully convert arrays and tuples.

## Type Parameters

### abiType

`abiType` *extends* [`AbiType`](AbiType.md)

[AbiType](AbiType.md) to convert to TypeScript representation

### abiParameterKind

`abiParameterKind` *extends* [`AbiParameterKind`](AbiParameterKind.md) = [`AbiParameterKind`](AbiParameterKind.md)

Optional [AbiParameterKind](AbiParameterKind.md) to narrow by parameter type

## Returns

TypeScript primitive type
