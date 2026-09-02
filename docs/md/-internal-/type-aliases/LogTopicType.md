[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / LogTopicType

# Type Alias: LogTopicType\<primitiveType, topic\>

> **LogTopicType**\<`primitiveType`, `topic`\> = `topic` *extends* [`Hex`](Hex.md) ? `primitiveType` : `topic` *extends* readonly [`Hex`](Hex.md)[] ? readonly `primitiveType`[] : `topic` *extends* `null` ? `null` : `never`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/contract.d.ts:113

**`Internal`**

## Type Parameters

### primitiveType

`primitiveType` = [`Hex`](Hex.md)

### topic

`topic` *extends* [`LogTopic`](LogTopic.md) = [`LogTopic`](LogTopic.md)
