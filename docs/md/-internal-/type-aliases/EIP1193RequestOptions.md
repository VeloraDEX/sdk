[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / EIP1193RequestOptions

# Type Alias: EIP1193RequestOptions

> **EIP1193RequestOptions** = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/eip1193.d.ts:1951

## Properties

### dedupe?

> `optional` **dedupe?**: `boolean`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/eip1193.d.ts:1953

Deduplicate in-flight requests.

***

### methods?

> `optional` **methods?**: [`OneOf`](OneOf.md)\<\{ `include?`: `string`[]; \} \| \{ `exclude?`: `string`[]; \}\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/eip1193.d.ts:1955

Methods to include or exclude from executing RPC requests.

***

### retryCount?

> `optional` **retryCount?**: `number`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/eip1193.d.ts:1963

The max number of times to retry.

***

### retryDelay?

> `optional` **retryDelay?**: `number`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/eip1193.d.ts:1961

The base delay (in ms) between retries.

***

### signal?

> `optional` **signal?**: `AbortSignal`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/eip1193.d.ts:1965

Abort signal to cancel the request.

***

### uid?

> `optional` **uid?**: `string`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/eip1193.d.ts:1967

Unique identifier for the request.
