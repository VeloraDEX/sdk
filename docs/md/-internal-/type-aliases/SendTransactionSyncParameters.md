[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SendTransactionSyncParameters

# Type Alias: SendTransactionSyncParameters\<chain, account, chainOverride, request\>

> **SendTransactionSyncParameters**\<`chain`, `account`, `chainOverride`, `request`\>: `request` & [`GetAccountParameter`](GetAccountParameter.md)\<`account`, [`Account`](Account.md) \| [`Address`](Address.md), `true`, `true`\> & [`GetChainParameter`](GetChainParameter.md)\<`chain`, `chainOverride`\> & [`GetTransactionRequestKzgParameter`](GetTransactionRequestKzgParameter.md)\<`request`\> & `object`

## Type declaration

### pollingInterval?

> `optional` **pollingInterval**: `number`

Polling interval (ms) to poll for the transaction receipt.

#### Default

```ts
client.pollingInterval
```

### throwOnReceiptRevert?

> `optional` **throwOnReceiptRevert**: `boolean`

Whether to throw an error if the transaction was detected as reverted.

#### Default

```ts
true
```

### timeout?

> `optional` **timeout**: `number`

Timeout (ms) to wait for a response.

#### Default

```ts
Math.max(chain.blockTime * 3, 5_000)
```

## Type Parameters

• **chain** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **account** *extends* [`Account`](Account.md) \| `undefined` = [`Account`](Account.md) \| `undefined`

• **chainOverride** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **request** *extends* [`SendTransactionSyncRequest`](SendTransactionSyncRequest.md)\<`chain`, `chainOverride`\> = [`SendTransactionSyncRequest`](SendTransactionSyncRequest.md)\<`chain`, `chainOverride`\>

## Defined in

node\_modules/viem/\_types/actions/wallet/sendTransactionSync.d.ts:25
