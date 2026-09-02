[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WaitForTransactionReceiptParameters

# Type Alias: WaitForTransactionReceiptParameters\<chain\>

> **WaitForTransactionReceiptParameters**\<`chain`\> = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/waitForTransactionReceipt.d.ts:22

## Type Parameters

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

## Properties

### checkReplacement?

> `optional` **checkReplacement?**: `boolean`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/waitForTransactionReceipt.d.ts:27

Whether to check for transaction replacements.

#### Default

`client.chain?.supportsTransactionReplacementDetection ?? true`

***

### confirmations?

> `optional` **confirmations?**: `number`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/waitForTransactionReceipt.d.ts:32

The number of confirmations (blocks that have passed) to wait before resolving.

#### Default

```ts
1
```

***

### hash

> **hash**: [`Hash`](Hash.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/waitForTransactionReceipt.d.ts:34

The hash of the transaction.

***

### onReplaced?

> `optional` **onReplaced?**: (`response`) => `void`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/waitForTransactionReceipt.d.ts:36

Optional callback to emit if the transaction has been replaced.

#### Parameters

##### response

[`ReplacementReturnType`](ReplacementReturnType.md)\<`chain`\>

#### Returns

`void`

***

### pollingInterval?

> `optional` **pollingInterval?**: `number`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/waitForTransactionReceipt.d.ts:41

Polling frequency (in ms). Defaults to the client's pollingInterval config.

#### Default

```ts
client.pollingInterval
```

***

### retryCount?

> `optional` **retryCount?**: [`WithRetryParameters`](WithRetryParameters.md)\[`"retryCount"`\]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/waitForTransactionReceipt.d.ts:46

Number of times to retry if the transaction or block is not found.

#### Default

```ts
6 (exponential backoff)
```

***

### retryDelay?

> `optional` **retryDelay?**: [`WithRetryParameters`](WithRetryParameters.md)\[`"delay"`\]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/waitForTransactionReceipt.d.ts:51

Time to wait (in ms) between retries.

#### Default

`({ count }) => ~~(1 << count) * 200` (exponential backoff)

***

### timeout?

> `optional` **timeout?**: `number`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/waitForTransactionReceipt.d.ts:56

Optional timeout (in milliseconds) to wait before stopping polling.

#### Default

```ts
180_000
```
