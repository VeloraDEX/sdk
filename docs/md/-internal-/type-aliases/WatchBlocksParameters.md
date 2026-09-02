[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WatchBlocksParameters

# Type Alias: WatchBlocksParameters\<transport, chain, includeTransactions, blockTag\>

> **WatchBlocksParameters**\<`transport`, `chain`, `includeTransactions`, `blockTag`\> = `object` & [`HasTransportType`](HasTransportType.md)\<`transport`, `"webSocket"` \| `"ipc"`\> *extends* `true` ? `object` : `never` \| \{ `blockTag?`: `blockTag` \| [`BlockTag`](BlockTag-2.md); `emitMissed?`: `boolean`; `emitOnBegin?`: `boolean`; `includeTransactions?`: `includeTransactions`; `poll?`: `true`; `pollingInterval?`: `number`; \}

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/watchBlocks.d.ts:12

## Type Declaration

### onBlock

> **onBlock**: [`OnBlock`](OnBlock.md)\<`chain`, `includeTransactions`, `blockTag`\>

The callback to call when a new block is received.

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

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md)

### includeTransactions

`includeTransactions` *extends* `boolean` = `false`

### blockTag

`blockTag` *extends* [`BlockTag`](BlockTag-2.md) = `"latest"`
