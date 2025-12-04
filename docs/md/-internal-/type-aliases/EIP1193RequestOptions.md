[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / EIP1193RequestOptions

# Type Alias: EIP1193RequestOptions

> **EIP1193RequestOptions**: `object`

## Type declaration

### dedupe?

> `optional` **dedupe**: `boolean`

Deduplicate in-flight requests.

### methods?

> `optional` **methods**: [`OneOf`](OneOf.md)\<`object` \| `object`\>

Methods to include or exclude from executing RPC requests.

### retryCount?

> `optional` **retryCount**: `number`

The max number of times to retry.

### retryDelay?

> `optional` **retryDelay**: `number`

The base delay (in ms) between retries.

### uid?

> `optional` **uid**: `string`

Unique identifier for the request.

## Defined in

node\_modules/viem/\_types/types/eip1193.d.ts:1895
