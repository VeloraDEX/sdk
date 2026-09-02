[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / MessageDefinition

# Type Alias: MessageDefinition\<typedData, primaryType, messageKey, primaryTypes, schema, message\>

> **MessageDefinition**\<`typedData`, `primaryType`, `messageKey`, `primaryTypes`, `schema`, `message`\> = `object` & `object` & `{ [k in messageKey]: { [_: string]: any } extends message ? Record<string, unknown> : message }`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/typedData.d.ts:4

## Type Declaration

### types

> **types**: `typedData`

## Type Declaration

### domain?

> `optional` **domain?**: `schema` *extends* `object` ? `domain` : [`Prettify`](Prettify-1.md)\<[`TypedDataDomain`](TypedDataDomain-1.md)\>

### primaryType

> **primaryType**: `primaryTypes` \| `primaryType` *extends* `primaryTypes` ? `primaryType` : `never`

## Type Parameters

### typedData

`typedData` *extends* [`TypedData`](TypedData.md) \| [`Record`](Record.md)\<`string`, `unknown`\> = [`TypedData`](TypedData.md)

### primaryType

`primaryType` *extends* keyof `typedData` = keyof `typedData`

### messageKey

`messageKey` *extends* `string` = `"message"`

### primaryTypes

`primaryTypes` = `typedData` *extends* [`TypedData`](TypedData.md) ? keyof `typedData` : `string`

### schema

`schema` *extends* [`Record`](Record.md)\<`string`, `unknown`\> = `typedData` *extends* [`TypedData`](TypedData.md) ? [`TypedDataToPrimitiveTypes`](TypedDataToPrimitiveTypes.md)\<`typedData`\> : [`Record`](Record.md)\<`string`, `unknown`\>

### message

`message` = `schema`\[`primaryType` *extends* keyof `schema` ? `primaryType` : keyof `schema`\]
