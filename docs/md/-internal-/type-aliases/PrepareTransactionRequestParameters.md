[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / PrepareTransactionRequestParameters

# Type Alias: PrepareTransactionRequestParameters\<chain, account, chainOverride, accountOverride, request\>

> **PrepareTransactionRequestParameters**\<`chain`, `account`, `chainOverride`, `accountOverride`, `request`\> = `request` & [`GetAccountParameter`](GetAccountParameter.md)\<`account`, `accountOverride`, `false`, `true`\> & [`GetChainParameter`](GetChainParameter.md)\<`chain`, `chainOverride`\> & [`GetTransactionRequestKzgParameter`](GetTransactionRequestKzgParameter.md)\<`request`\> & `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/wallet/prepareTransactionRequest.d.ts:41

## Type Declaration

### chainId?

> `optional` **chainId?**: `number`

## Type Parameters

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

### account

`account` *extends* [`Account`](Account.md) \| `undefined` = [`Account`](Account.md) \| `undefined`

### chainOverride

`chainOverride` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

### accountOverride

`accountOverride` *extends* [`Account`](Account.md) \| [`Address`](Address-1.md) \| `undefined` = [`Account`](Account.md) \| [`Address`](Address-1.md) \| `undefined`

### request

`request` *extends* [`PrepareTransactionRequestRequest`](PrepareTransactionRequestRequest.md)\<`chain`, `chainOverride`\> = [`PrepareTransactionRequestRequest`](PrepareTransactionRequestRequest.md)\<`chain`, `chainOverride`\>
