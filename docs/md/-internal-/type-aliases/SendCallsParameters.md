[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SendCallsParameters

# Type Alias: SendCallsParameters\<chain, account, chainOverride, calls, _chain\>

> **SendCallsParameters**\<`chain`, `account`, `chainOverride`, `calls`, `_chain`\> = `object` & [`GetAccountParameter`](GetAccountParameter.md)\<`account`, [`Account`](Account.md) \| [`Address`](Address-1.md), `false`, `true`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/wallet/sendCalls.d.ts:14

## Type Declaration

### calls

> **calls**: [`Calls`](Calls.md)\<[`Narrow`](Narrow.md)\<`calls`\>\>

### capabilities?

> `optional` **capabilities?**: [`ExtractCapabilities`](ExtractCapabilities.md)\<`"sendCalls"`, `"Request"`\>

### chain?

> `optional` **chain?**: `chainOverride` \| [`Chain`](Chain.md)

### experimental\_fallback?

> `optional` **experimental\_fallback?**: `boolean`

### experimental\_fallbackDelay?

> `optional` **experimental\_fallbackDelay?**: `number`

### forceAtomic?

> `optional` **forceAtomic?**: `boolean`

### id?

> `optional` **id?**: `string`

### version?

> `optional` **version?**: [`WalletSendCallsParameters`](WalletSendCallsParameters.md)\[`number`\]\[`"version"`\]

## Type Parameters

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

### account

`account` *extends* [`Account`](Account.md) \| `undefined` = [`Account`](Account.md) \| `undefined`

### chainOverride

`chainOverride` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

### calls

`calls` *extends* readonly `unknown`[] = readonly `unknown`[]

### _chain

`_chain` *extends* [`Chain`](Chain.md) \| `undefined` = [`DeriveChain`](DeriveChain.md)\<`chain`, `chainOverride`\>
