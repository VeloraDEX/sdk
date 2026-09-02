[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / VerifyTypedDataParameters

# Type Alias: VerifyTypedDataParameters\<typedData, primaryType\>

> **VerifyTypedDataParameters**\<`typedData`, `primaryType`\> = [`Omit`](Omit.md)\<[`VerifyHashParameters`](VerifyHashParameters.md), `"blockHash"` \| `"blockNumber"` \| `"blockTag"` \| `"hash"` \| `"requireCanonical"`\> & [`BlockParameters`](BlockParameters.md) & [`TypedDataDefinition`](TypedDataDefinition.md)\<`typedData`, `primaryType`\> & `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/verifyTypedData.d.ts:10

## Type Declaration

### address

> **address**: [`Address`](Address-1.md)

The address to verify the typed data for.

### signature

> **signature**: [`Hex`](Hex.md) \| [`ByteArray`](ByteArray.md) \| [`Signature`](Signature.md)

The signature to verify

## Type Parameters

### typedData

`typedData` *extends* [`TypedData`](TypedData.md) \| [`Record`](Record.md)\<`string`, `unknown`\> = [`TypedData`](TypedData.md)

### primaryType

`primaryType` *extends* keyof `typedData` \| `"EIP712Domain"` = keyof `typedData`
