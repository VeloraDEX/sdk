[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WaitForCallsStatusParameters

# Type Alias: WaitForCallsStatusParameters

> **WaitForCallsStatusParameters**: `object`

## Type declaration

### id

> **id**: `string`

The id of the call batch to wait for.

### pollingInterval?

> `optional` **pollingInterval**: `number`

Polling frequency (in ms). Defaults to the client's pollingInterval config.

#### Default

```ts
client.pollingInterval
```

### retryCount?

> `optional` **retryCount**: [`WithRetryParameters`](WithRetryParameters.md)\[`"retryCount"`\]

Number of times to retry if the call bundle failed.

#### Default

```ts
4 (exponential backoff)
```

### retryDelay?

> `optional` **retryDelay**: [`WithRetryParameters`](WithRetryParameters.md)\[`"delay"`\]

Time to wait (in ms) between retries.

#### Default

`({ count }) => ~~(1 << count) * 200` (exponential backoff)

### status()?

> `optional` **status**: (`parameters`) => `boolean`

The status range to wait for.

#### Parameters

• **parameters**: [`GetCallsStatusReturnType`](GetCallsStatusReturnType.md)

#### Returns

`boolean`

#### Default

```ts
(status) => status >= 200
```

### throwOnFailure?

> `optional` **throwOnFailure**: `boolean`

Whether to throw an error if the call bundle fails.

#### Default

```ts
false
```

### timeout?

> `optional` **timeout**: `number`

Optional timeout (in milliseconds) to wait before stopping polling.

#### Default

```ts
60_000
```

## Defined in

node\_modules/viem/\_types/actions/wallet/waitForCallsStatus.d.ts:10
