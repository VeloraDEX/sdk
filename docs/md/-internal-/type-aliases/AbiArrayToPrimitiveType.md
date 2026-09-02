[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AbiArrayToPrimitiveType

# Type Alias: AbiArrayToPrimitiveType\<abiParameter, abiParameterKind, head, size\>

> **AbiArrayToPrimitiveType**\<`abiParameter`, `abiParameterKind`, `head`, `size`\> = `size` *extends* keyof [`SolidityFixedArraySizeLookup`](SolidityFixedArraySizeLookup.md) ? [`Tuple`](Tuple.md)\<[`AbiParameterToPrimitiveType`](AbiParameterToPrimitiveType.md)\<[`Merge`](Merge-1.md)\<`abiParameter`, \{ `type`: `head`; \}\>, `abiParameterKind`\>, [`SolidityFixedArraySizeLookup`](SolidityFixedArraySizeLookup.md)\[`size`\]\> : readonly [`AbiParameterToPrimitiveType`](AbiParameterToPrimitiveType.md)\<[`Merge`](Merge-1.md)\<`abiParameter`, \{ `type`: `head`; \}\>, `abiParameterKind`\>[]

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/utils.d.ts:72

## Type Parameters

### abiParameter

`abiParameter` *extends* [`AbiParameter`](AbiParameter-1.md) \| \{ `name`: `string`; `type`: `unknown`; \}

### abiParameterKind

`abiParameterKind` *extends* [`AbiParameterKind`](AbiParameterKind.md)

### head

`head` *extends* `string`

### size

`size`
