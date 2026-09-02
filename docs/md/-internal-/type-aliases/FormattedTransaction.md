[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / FormattedTransaction

# Type Alias: FormattedTransaction\<chain, blockTag, _FormatterReturnType, _ExcludedPendingDependencies\>

> **FormattedTransaction**\<`chain`, `blockTag`, `_FormatterReturnType`, `_ExcludedPendingDependencies`\> = [`UnionLooseOmit`](UnionLooseOmit.md)\<`_FormatterReturnType`, [`TransactionPendingDependencies`](TransactionPendingDependencies.md)\> & `{ [_K in _ExcludedPendingDependencies]: never }` & [`Pick`](Pick.md)\<[`Transaction`](Transaction.md)\<`bigint`, `number`, `blockTag` *extends* `"pending"` ? `true` : `false`\>, [`TransactionPendingDependencies`](TransactionPendingDependencies.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/utils/formatters/transaction.d.ts:9

## Type Parameters

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined` = `undefined`

### blockTag

`blockTag` *extends* [`BlockTag`](BlockTag-2.md) = [`BlockTag`](BlockTag-2.md)

### _FormatterReturnType

`_FormatterReturnType` = [`ExtractChainFormatterReturnType`](ExtractChainFormatterReturnType.md)\<`chain`, `"transaction"`, [`Transaction`](Transaction.md)\>

### _ExcludedPendingDependencies

`_ExcludedPendingDependencies` *extends* `string` = [`TransactionPendingDependencies`](TransactionPendingDependencies.md) & [`ExtractChainFormatterExclude`](ExtractChainFormatterExclude.md)\<`chain`, `"transaction"`\>
