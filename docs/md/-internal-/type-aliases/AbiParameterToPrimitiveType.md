[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AbiParameterToPrimitiveType

# Type Alias: AbiParameterToPrimitiveType\<abiParameter, abiParameterKind\>

> **AbiParameterToPrimitiveType**\<`abiParameter`, `abiParameterKind`\> = `abiParameter`\[`"type"`\] *extends* [`AbiBasicType`](AbiBasicType.md) ? [`AbiTypeToPrimitiveType`](AbiTypeToPrimitiveType.md)\<`abiParameter`\[`"type"`\], `abiParameterKind`\> : `abiParameter` *extends* `object` ? [`AbiComponentsToPrimitiveType`](AbiComponentsToPrimitiveType.md)\<`components`, `abiParameterKind`\> : [`MaybeExtractArrayParameterType`](MaybeExtractArrayParameterType.md)\<`abiParameter`\[`"type"`\]\> *extends* \[infer head, infer size\] ? [`AbiArrayToPrimitiveType`](AbiArrayToPrimitiveType.md)\<`abiParameter`, `abiParameterKind`, `head`, `size`\> : [`ResolvedRegister`](ResolvedRegister.md)\[`"strictAbiType"`\] *extends* `true` ? [`Error`](Error.md)\<`` `Unknown type '${abiParameter["type"] & string}'.` ``\> : `abiParameter` *extends* `object` ? `abiParameter`\[`"components"`\] : `unknown`

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/utils.d.ts:44

Converts [AbiParameter](AbiParameter-1.md) to corresponding TypeScript primitive type.

## Type Parameters

### abiParameter

`abiParameter` *extends* [`AbiParameter`](AbiParameter-1.md) \| \{ `name`: `string`; `type`: `unknown`; \}

[AbiParameter](AbiParameter-1.md) to convert to TypeScript representation

### abiParameterKind

`abiParameterKind` *extends* [`AbiParameterKind`](AbiParameterKind.md) = [`AbiParameterKind`](AbiParameterKind.md)

Optional [AbiParameterKind](AbiParameterKind.md) to narrow by parameter type

## Returns

TypeScript primitive type
