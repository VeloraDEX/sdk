[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WaitForCallsStatusParameters

# Type Alias: WaitForCallsStatusParameters

> **WaitForCallsStatusParameters** = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/wallet/waitForCallsStatus.d.ts:10

## Properties

### id

> **id**: `string`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/wallet/waitForCallsStatus.d.ts:14

The id of the call batch to wait for.

***

### pollingInterval?

> `optional` **pollingInterval?**: `number`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/wallet/waitForCallsStatus.d.ts:20

Polling frequency (in ms). Defaults to the client's pollingInterval config.

#### Default

```ts
client.pollingInterval
```

***

### retryCount?

> `optional` **retryCount?**: [`WithRetryParameters`](WithRetryParameters.md)\[`"retryCount"`\]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/wallet/waitForCallsStatus.d.ts:25

Number of times to retry if the call bundle failed.

#### Default

```ts
4 (exponential backoff)
```

***

### retryDelay?

> `optional` **retryDelay?**: [`WithRetryParameters`](WithRetryParameters.md)\[`"delay"`\]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/wallet/waitForCallsStatus.d.ts:30

Time to wait (in ms) between retries.

#### Default

`({ count }) => ~~(1 << count) * 200` (exponential backoff)

***

### status?

> `optional` **status?**: (`parameters`) => `boolean`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/wallet/waitForCallsStatus.d.ts:36

The status range to wait for.

#### Parameters

##### parameters

[`GetCallsStatusReturnType`](GetCallsStatusReturnType.md)

#### Returns

`boolean`

#### Default

```ts
(status) => status >= 200
```

***

### throwOnFailure?

> `optional` **throwOnFailure?**: `boolean`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/wallet/waitForCallsStatus.d.ts:42

Whether to throw an error if the call bundle fails.

#### Default

```ts
false
```

***

### timeout?

> `optional` **timeout?**: `number`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/wallet/waitForCallsStatus.d.ts:48

Optional timeout (in milliseconds) to wait before stopping polling.

#### Default

```ts
60_000
```
