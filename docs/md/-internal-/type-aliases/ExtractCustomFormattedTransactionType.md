[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ExtractCustomFormattedTransactionType

# Type Alias: ExtractCustomFormattedTransactionType\<chain, request, _candidates, _matched, _builtin\>

> **ExtractCustomFormattedTransactionType**\<`chain`, `request`, `_candidates`, `_matched`, `_builtin`\> = [`IsNever`](IsNever.md)\<[`Extract`](Extract.md)\<`_matched`, `_builtin`\>\> *extends* `true` ? [`Exclude`](Exclude.md)\<`_matched`, `_builtin`\> : `never`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/wallet/prepareTransactionRequest.d.ts:51

Infers a chain-specific (non-built-in) transaction type from the request
shape. Returns the custom `type` (e.g. `'tempo'`) only when the request
uniquely matches a custom member of the chain's formatted request union (i.e.
it does not also match any built-in member). Built-in chains have no custom
members, so this resolves to `never` and leaves their inference unchanged.

## Type Parameters

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined`

### request

`request`

### _candidates

`_candidates` = [`UnionOmit`](UnionOmit.md)\<[`FormattedTransactionRequest`](FormattedTransactionRequest.md)\<`chain`\>, `"from"`\>

### _matched

`_matched` *extends* `string` = `_candidates` *extends* `object` ? `request` *extends* [`ExactPartial`](ExactPartial.md)\<`_candidates`\> ? `_candidates` *extends* `object` ? [`Extract`](Extract.md)\<`type`, `string`\> : `never` : `never` : `never`

### _builtin

`_builtin` = [`NonNullable`](NonNullable.md)\<[`TransactionRequest`](TransactionRequest-1.md)\[`"type"`\]\>
