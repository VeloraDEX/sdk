[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetPollOptions

# Type Alias: GetPollOptions\<transport\>

> **GetPollOptions**\<`transport`\> = [`HasTransportType`](HasTransportType.md)\<`transport`, `"webSocket"` \| `"ipc"`\> *extends* `true` ? `object` : `never` \| \{ `batch?`: `boolean`; `poll?`: `true`; `pollingInterval?`: `number`; \}

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transport.d.ts:5

## Type Parameters

### transport

`transport` *extends* [`Transport`](Transport.md)

## Union Members

[`HasTransportType`](HasTransportType.md)\<`transport`, `"webSocket"` \| `"ipc"`\> *extends* `true` ? `object` : `never`

***

### Type Literal

\{ `batch?`: `boolean`; `poll?`: `true`; `pollingInterval?`: `number`; \}

#### batch?

> `optional` **batch?**: `boolean`

Whether or not the transaction hashes should be batched on each invocation.

##### Default

```ts
true
```

#### poll?

> `optional` **poll?**: `true`

#### pollingInterval?

> `optional` **pollingInterval?**: `number`

Polling frequency (in ms). Defaults to Client's pollingInterval config.

##### Default

```ts
client.pollingInterval
```
