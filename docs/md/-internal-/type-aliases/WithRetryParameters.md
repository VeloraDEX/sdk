[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WithRetryParameters

# Type Alias: WithRetryParameters

> **WithRetryParameters** = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/utils/promise/withRetry.d.ts:2

## Properties

### delay?

> `optional` **delay?**: ((`config`) => `number`) \| `number`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/utils/promise/withRetry.d.ts:3

***

### retryCount?

> `optional` **retryCount?**: `number`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/utils/promise/withRetry.d.ts:7

***

### shouldRetry?

> `optional` **shouldRetry?**: (`{ count, error, }`) => `Promise`\<`boolean`\> \| `boolean`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/utils/promise/withRetry.d.ts:8

#### Parameters

##### \{ count, error, \}

###### count

`number`

###### error

`Error`

#### Returns

`Promise`\<`boolean`\> \| `boolean`

***

### signal?

> `optional` **signal?**: `AbortSignal`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/utils/promise/withRetry.d.ts:12
