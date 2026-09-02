[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WatchBlockNumberParameters

# Type Alias: WatchBlockNumberParameters\<transport\>

> **WatchBlockNumberParameters**\<`transport`\> = `object` & [`HasTransportType`](HasTransportType.md)\<`transport`, `"webSocket"` \| `"ipc"`\> *extends* `true` ? `object` : `never` \| \{ `emitMissed?`: `boolean`; `emitOnBegin?`: `boolean`; `poll?`: `true`; `pollingInterval?`: `number`; \}

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/watchBlockNumber.d.ts:10

## Type Declaration

### onBlockNumber

> **onBlockNumber**: [`OnBlockNumberFn`](OnBlockNumberFn.md)

The callback to call when a new block number is received.

### onError?

> `optional` **onError?**: (`error`) => `void`

The callback to call when an error occurred when trying to get for a new block.

#### Parameters

##### error

`Error`

#### Returns

`void`

## Type Parameters

### transport

`transport` *extends* [`Transport`](Transport.md) = [`Transport`](Transport.md)
