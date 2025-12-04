[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SendCallsParameters

# Type Alias: SendCallsParameters\<chain, account, chainOverride, calls, _chain\>

> **SendCallsParameters**\<`chain`, `account`, `chainOverride`, `calls`, `_chain`\>: `object` & [`GetAccountParameter`](GetAccountParameter.md)\<`account`, [`Account`](Account.md) \| [`Address`](Address.md), `false`, `true`\>

## Type declaration

### calls

> **calls**: [`Calls`](Calls.md)\<[`Narrow`](Narrow.md)\<`calls`\>\>

### capabilities?

> `optional` **capabilities**: [`ExtractCapabilities`](ExtractCapabilities.md)\<`"sendCalls"`, `"Request"`\>

### chain?

> `optional` **chain**: `chainOverride` \| [`Chain`](Chain.md)

### experimental\_fallback?

> `optional` **experimental\_fallback**: `boolean`

### experimental\_fallbackDelay?

> `optional` **experimental\_fallbackDelay**: `number`

### forceAtomic?

> `optional` **forceAtomic**: `boolean`

### id?

> `optional` **id**: `string`

### version?

> `optional` **version**: [`WalletSendCallsParameters`](WalletSendCallsParameters.md)\[`number`\]\[`"version"`\]

## Type Parameters

• **chain** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **account** *extends* [`Account`](Account.md) \| `undefined` = [`Account`](Account.md) \| `undefined`

• **chainOverride** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **calls** *extends* readonly `unknown`[] = readonly `unknown`[]

• **_chain** *extends* [`Chain`](Chain.md) \| `undefined` = [`DeriveChain`](DeriveChain.md)\<`chain`, `chainOverride`\>

## Defined in

node\_modules/viem/\_types/actions/wallet/sendCalls.d.ts:14
