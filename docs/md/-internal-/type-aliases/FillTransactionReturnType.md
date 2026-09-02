[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / FillTransactionReturnType

# Type Alias: FillTransactionReturnType\<chain, chainOverride, _derivedChain\>

> **FillTransactionReturnType**\<`chain`, `chainOverride`, `_derivedChain`\> = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/fillTransaction.d.ts:20

## Type Parameters

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

### chainOverride

`chainOverride` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

### _derivedChain

`_derivedChain` *extends* [`Chain`](Chain.md) \| `undefined` = [`DeriveChain`](DeriveChain.md)\<`chain`, `chainOverride`\>

## Properties

### capabilities?

> `optional` **capabilities?**: [`ExtractCapabilities`](ExtractCapabilities.md)\<`"fillTransaction"`, `"ReturnType"`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/fillTransaction.d.ts:21

***

### raw

> **raw**: [`Hex`](Hex.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/fillTransaction.d.ts:22

***

### transaction

> **transaction**: [`FormattedTransaction`](FormattedTransaction.md)\<`_derivedChain`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/fillTransaction.d.ts:23
