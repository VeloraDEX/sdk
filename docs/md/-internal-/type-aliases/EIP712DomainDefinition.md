[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / EIP712DomainDefinition

# Type Alias: EIP712DomainDefinition\<typedData, primaryType, schema\>

> **EIP712DomainDefinition**\<`typedData`, `primaryType`, `schema`\> = `object` & `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/typedData.d.ts:16

## Type Declaration

### types?

> `optional` **types?**: `typedData`

## Type Declaration

### domain

> **domain**: `schema` *extends* `object` ? `domain` : [`Prettify`](Prettify-1.md)\<[`TypedDataDomain`](TypedDataDomain-1.md)\>

### message?

> `optional` **message?**: `undefined`

### primaryType

> **primaryType**: `"EIP712Domain"` \| `primaryType`

## Type Parameters

### typedData

`typedData` *extends* [`TypedData`](TypedData.md) \| [`Record`](Record.md)\<`string`, `unknown`\> = [`TypedData`](TypedData.md)

### primaryType

`primaryType` *extends* `"EIP712Domain"` = `"EIP712Domain"`

### schema

`schema` *extends* [`Record`](Record.md)\<`string`, `unknown`\> = `typedData` *extends* [`TypedData`](TypedData.md) ? [`TypedDataToPrimitiveTypes`](TypedDataToPrimitiveTypes.md)\<`typedData`\> : [`Record`](Record.md)\<`string`, `unknown`\>
