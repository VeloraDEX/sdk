[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SendTransactionSyncParameters

# Type Alias: SendTransactionSyncParameters\<chain, account, chainOverride, request\>

> **SendTransactionSyncParameters**\<`chain`, `account`, `chainOverride`, `request`\> = `request` & [`GetAccountParameter`](GetAccountParameter.md)\<`account`, [`Account`](Account.md) \| [`Address`](Address-1.md), `true`, `true`\> & [`GetChainParameter`](GetChainParameter.md)\<`chain`, `chainOverride`\> & [`GetTransactionRequestKzgParameter`](GetTransactionRequestKzgParameter.md)\<`request`\> & `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/wallet/sendTransactionSync.d.ts:26

## Type Declaration

### assertChainId?

> `optional` **assertChainId?**: `boolean`

Whether to assert that the client chain is on the correct chain.

#### Default

```ts
true
```

### dataSuffix?

> `optional` **dataSuffix?**: [`Hex`](Hex.md)

Data to append to the end of the calldata. Takes precedence over `client.dataSuffix`.

### pollingInterval?

> `optional` **pollingInterval?**: `number`

Polling interval (ms) to poll for the transaction receipt.

#### Default

```ts
client.pollingInterval
```

### throwOnReceiptRevert?

> `optional` **throwOnReceiptRevert?**: `boolean`

Whether to throw an error if the transaction was detected as reverted.

#### Default

```ts
true
```

### timeout?

> `optional` **timeout?**: `number`

Timeout (ms) to wait for a response.

#### Default

```ts
Math.max(chain.blockTime * 3, 5_000)
```

## Type Parameters

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

### account

`account` *extends* [`Account`](Account.md) \| `undefined` = [`Account`](Account.md) \| `undefined`

### chainOverride

`chainOverride` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

### request

`request` *extends* [`SendTransactionSyncRequest`](SendTransactionSyncRequest.md)\<`chain`, `chainOverride`\> = [`SendTransactionSyncRequest`](SendTransactionSyncRequest.md)\<`chain`, `chainOverride`\>
