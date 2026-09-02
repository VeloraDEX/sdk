[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransportConfig

# Type Alias: TransportConfig\<type, eip1193RequestFn\>

> **TransportConfig**\<`type`, `eip1193RequestFn`\> = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/transports/createTransport.d.ts:7

## Type Parameters

### type

`type` *extends* `string` = `string`

### eip1193RequestFn

`eip1193RequestFn` *extends* [`EIP1193RequestFn`](EIP1193RequestFn.md) = [`EIP1193RequestFn`](EIP1193RequestFn.md)

## Properties

### key

> **key**: `string`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/transports/createTransport.d.ts:11

The key of the transport.

***

### methods?

> `optional` **methods?**: [`OneOf`](OneOf.md)\<\{ `include?`: `string`[]; \} \| \{ `exclude?`: `string`[]; \}\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/transports/createTransport.d.ts:13

Methods to include or exclude from executing RPC requests.

***

### name

> **name**: `string`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/transports/createTransport.d.ts:9

The name of the transport.

***

### request

> **request**: `eip1193RequestFn`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/transports/createTransport.d.ts:19

The JSON-RPC request function that matches the EIP-1193 request spec.

***

### retryCount?

> `optional` **retryCount?**: `number`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/transports/createTransport.d.ts:23

The max number of times to retry.

***

### retryDelay?

> `optional` **retryDelay?**: `number`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/transports/createTransport.d.ts:21

The base delay (in ms) between retries.

***

### timeout?

> `optional` **timeout?**: `number`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/transports/createTransport.d.ts:25

The timeout (in ms) for requests.

***

### type

> **type**: `type`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/clients/transports/createTransport.d.ts:27

The type of the transport.
