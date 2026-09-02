[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ExtractAbiFunctions

# Type Alias: ExtractAbiFunctions\<abi, abiStateMutability\>

> **ExtractAbiFunctions**\<`abi`, `abiStateMutability`\> = [`Extract`](Extract.md)\<`abi`\[`number`\], \{ `stateMutability`: `abiStateMutability`; `type`: `"function"`; \}\>

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/utils.d.ts:167

Extracts all [AbiFunction](AbiFunction.md) types from [Abi](Abi.md).

## Type Parameters

### abi

`abi` *extends* [`Abi`](Abi.md)

[Abi](Abi.md) to extract functions from

### abiStateMutability

`abiStateMutability` *extends* [`AbiStateMutability`](AbiStateMutability.md) = [`AbiStateMutability`](AbiStateMutability.md)

[AbiStateMutability](AbiStateMutability.md) to filter by

## Returns

All [AbiFunction](AbiFunction.md) types from [Abi](Abi.md)
