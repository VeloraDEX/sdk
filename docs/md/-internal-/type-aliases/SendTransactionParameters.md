[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SendTransactionParameters

# Type Alias: SendTransactionParameters\<chain, account, chainOverride, request\>

> **SendTransactionParameters**\<`chain`, `account`, `chainOverride`, `request`\> = `request` & [`GetAccountParameter`](GetAccountParameter.md)\<`account`, [`Account`](Account.md) \| [`Address`](Address-1.md), `true`, `true`\> & [`GetChainParameter`](GetChainParameter.md)\<`chain`, `chainOverride`\> & [`GetTransactionRequestKzgParameter`](GetTransactionRequestKzgParameter.md)\<`request`\> & `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/wallet/sendTransaction.d.ts:24

## Type Declaration

### assertChainId?

> `optional` **assertChainId?**: `boolean`

Whether to assert that the client chain is on the correct chain.

#### Default

```ts
true
```

### dataSuffix?

> `optional` **dataSuffix?**: [`Hex`](Hex.md)

Data to append to the end of the calldata. Takes precedence over `client.dataSuffix`.

## Type Parameters

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

### account

`account` *extends* [`Account`](Account.md) \| `undefined` = [`Account`](Account.md) \| `undefined`

### chainOverride

`chainOverride` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

### request

`request` *extends* [`SendTransactionRequest`](SendTransactionRequest.md)\<`chain`, `chainOverride`\> = [`SendTransactionRequest`](SendTransactionRequest.md)\<`chain`, `chainOverride`\>
