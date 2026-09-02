[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ExtractFormattedTransactionRequest

# Type Alias: ExtractFormattedTransactionRequest\<chain, request, _transactionRequest, _transactionType\>

> **ExtractFormattedTransactionRequest**\<`chain`, `request`, `_transactionRequest`, `_transactionType`\> = `_transactionRequest` *extends* `object` ? [`Extract`](Extract.md)\<`_transactionType`, `type`\> *extends* `never` ? `never` : `_transactionRequest` : `never`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/utils/formatters/transactionRequest.d.ts:9

## Type Parameters

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined`

### request

`request` *extends* `object`

### _transactionRequest

`_transactionRequest` = [`UnionOmit`](UnionOmit.md)\<[`FormattedTransactionRequest`](FormattedTransactionRequest.md)\<`chain`\>, `"from"`\>

### _transactionType

`_transactionType` = `request`\[`"type"`\]
