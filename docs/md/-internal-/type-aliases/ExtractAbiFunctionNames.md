[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ExtractAbiFunctionNames

# Type Alias: ExtractAbiFunctionNames\<abi, abiStateMutability\>

> **ExtractAbiFunctionNames**\<`abi`, `abiStateMutability`\> = [`ExtractAbiFunctions`](ExtractAbiFunctions.md)\<`abi`, `abiStateMutability`\>\[`"name"`\]

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/utils.d.ts:178

Extracts all [AbiFunction](AbiFunction.md) names from [Abi](Abi.md).

## Type Parameters

### abi

`abi` *extends* [`Abi`](Abi.md)

[Abi](Abi.md) to extract function names from

### abiStateMutability

`abiStateMutability` *extends* [`AbiStateMutability`](AbiStateMutability.md) = [`AbiStateMutability`](AbiStateMutability.md)

[AbiStateMutability](AbiStateMutability.md) to filter by

## Returns

Union of function names
