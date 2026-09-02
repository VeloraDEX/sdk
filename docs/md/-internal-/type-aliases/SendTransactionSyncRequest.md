[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SendTransactionSyncRequest

# Type Alias: SendTransactionSyncRequest\<chain, chainOverride, _derivedChain\>

> **SendTransactionSyncRequest**\<`chain`, `chainOverride`, `_derivedChain`\> = [`UnionOmit`](UnionOmit.md)\<[`FormattedTransactionRequest`](FormattedTransactionRequest.md)\<`_derivedChain`\>, `"from"`\> & [`GetTransactionRequestKzgParameter`](GetTransactionRequestKzgParameter.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/wallet/sendTransactionSync.d.ts:25

## Type Parameters

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

### chainOverride

`chainOverride` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

### _derivedChain

`_derivedChain` *extends* [`Chain`](Chain.md) \| `undefined` = [`DeriveChain`](DeriveChain.md)\<`chain`, `chainOverride`\>
