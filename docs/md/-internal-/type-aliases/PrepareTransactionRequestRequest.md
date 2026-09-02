[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / PrepareTransactionRequestRequest

# Type Alias: PrepareTransactionRequestRequest\<chain, chainOverride, _derivedChain\>

> **PrepareTransactionRequestRequest**\<`chain`, `chainOverride`, `_derivedChain`\> = [`UnionOmit`](UnionOmit.md)\<[`FormattedTransactionRequest`](FormattedTransactionRequest.md)\<`_derivedChain`\>, `"from"`\> & [`GetTransactionRequestKzgParameter`](GetTransactionRequestKzgParameter.md) & `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/wallet/prepareTransactionRequest.d.ts:29

## Type Declaration

### nonceManager?

> `optional` **nonceManager?**: [`NonceManager`](NonceManager.md)

Nonce manager to use for the transaction request.

### parameters?

> `optional` **parameters?**: readonly [`PrepareTransactionRequestParameterType`](PrepareTransactionRequestParameterType.md)[]

Parameters to prepare for the transaction request.

#### Default

```ts
['blobVersionedHashes', 'chainId', 'fees', 'gas', 'nonce', 'type']
```

## Type Parameters

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

### chainOverride

`chainOverride` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

### _derivedChain

`_derivedChain` *extends* [`Chain`](Chain.md) \| `undefined` = [`DeriveChain`](DeriveChain.md)\<`chain`, `chainOverride`\>
