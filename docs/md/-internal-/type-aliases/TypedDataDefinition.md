[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TypedDataDefinition

# Type Alias: TypedDataDefinition\<typedData, primaryType, primaryTypes\>

> **TypedDataDefinition**\<`typedData`, `primaryType`, `primaryTypes`\> = `primaryType` *extends* `"EIP712Domain"` ? [`EIP712DomainDefinition`](EIP712DomainDefinition.md)\<`typedData`, `primaryType`\> : [`MessageDefinition`](MessageDefinition.md)\<`typedData`, `primaryType`, `"message"`, `primaryTypes`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/typedData.d.ts:3

## Type Parameters

### typedData

`typedData` *extends* [`TypedData`](TypedData.md) \| [`Record`](Record.md)\<`string`, `unknown`\> = [`TypedData`](TypedData.md)

### primaryType

`primaryType` *extends* keyof `typedData` \| `"EIP712Domain"` = keyof `typedData`

### primaryTypes

`primaryTypes` = `typedData` *extends* [`TypedData`](TypedData.md) ? keyof `typedData` : `string`
