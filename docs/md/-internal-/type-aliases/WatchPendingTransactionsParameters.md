[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WatchPendingTransactionsParameters

# Type Alias: WatchPendingTransactionsParameters\<transport\>

> **WatchPendingTransactionsParameters**\<`transport`\> = `object` & [`GetPollOptions`](GetPollOptions.md)\<`transport`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/watchPendingTransactions.d.ts:11

## Type Declaration

### onError?

> `optional` **onError?**: (`error`) => `void`

The callback to call when an error occurred when trying to get for a new block.

#### Parameters

##### error

`Error`

#### Returns

`void`

### onTransactions

> **onTransactions**: [`OnTransactionsFn`](OnTransactionsFn.md)

The callback to call when new transactions are received.

## Type Parameters

### transport

`transport` *extends* [`Transport`](Transport.md) = [`Transport`](Transport.md)
