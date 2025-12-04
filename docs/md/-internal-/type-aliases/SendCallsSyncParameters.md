[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SendCallsSyncParameters

# Type Alias: SendCallsSyncParameters\<chain, account, chainOverride, calls\>

> **SendCallsSyncParameters**\<`chain`, `account`, `chainOverride`, `calls`\>: [`SendCallsParameters`](SendCallsParameters.md)\<`chain`, `account`, `chainOverride`, `calls`\> & [`Pick`](Pick.md)\<[`WaitForCallsStatusParameters`](WaitForCallsStatusParameters.md), `"pollingInterval"` \| `"status"` \| `"throwOnFailure"`\> & `object`

## Type declaration

### timeout?

> `optional` **timeout**: `number`

Timeout (ms) to wait for calls to be included in a block.

#### Default

```ts
chain.blockTime * 3
```

## Type Parameters

• **chain** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **account** *extends* [`Account`](Account.md) \| `undefined` = [`Account`](Account.md) \| `undefined`

• **chainOverride** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **calls** *extends* readonly `unknown`[] = readonly `unknown`[]

## Defined in

node\_modules/viem/\_types/actions/wallet/sendCallsSync.d.ts:8
