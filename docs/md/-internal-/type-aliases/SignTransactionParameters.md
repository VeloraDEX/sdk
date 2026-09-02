[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SignTransactionParameters

# Type Alias: SignTransactionParameters\<chain, account, chainOverride, request\>

> **SignTransactionParameters**\<`chain`, `account`, `chainOverride`, `request`\> = `request` & [`GetAccountParameter`](GetAccountParameter.md)\<`account`\> & [`GetChainParameter`](GetChainParameter.md)\<`chain`, `chainOverride`\> & [`GetTransactionRequestKzgParameter`](GetTransactionRequestKzgParameter.md)\<`request`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/wallet/signTransaction.d.ts:20

## Type Parameters

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined`

### account

`account` *extends* [`Account`](Account.md) \| `undefined`

### chainOverride

`chainOverride` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

### request

`request` *extends* [`SignTransactionRequest`](SignTransactionRequest.md)\<`chain`, `chainOverride`\> = [`SignTransactionRequest`](SignTransactionRequest.md)\<`chain`, `chainOverride`\>
