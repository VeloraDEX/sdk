[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / FormattedBlock

# Type Alias: FormattedBlock\<chain, includeTransactions, blockTag, _FormatterReturnType, _ExcludedPendingDependencies, _Formatted, _Transactions\>

> **FormattedBlock**\<`chain`, `includeTransactions`, `blockTag`, `_FormatterReturnType`, `_ExcludedPendingDependencies`, `_Formatted`, `_Transactions`\> = [`Omit`](Omit.md)\<`_Formatted`, `"transactions"`\> & `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/utils/formatters/block.d.ts:10

## Type Declaration

### transactions

> **transactions**: `_Transactions`

## Type Parameters

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined` = `undefined`

### includeTransactions

`includeTransactions` *extends* `boolean` = `boolean`

### blockTag

`blockTag` *extends* [`BlockTag`](BlockTag-2.md) = [`BlockTag`](BlockTag-2.md)

### _FormatterReturnType

`_FormatterReturnType` = [`ExtractChainFormatterReturnType`](ExtractChainFormatterReturnType.md)\<`chain`, `"block"`, [`Block`](Block.md)\<`bigint`, `includeTransactions`\>\>

### _ExcludedPendingDependencies

`_ExcludedPendingDependencies` *extends* `string` = [`BlockPendingDependencies`](BlockPendingDependencies.md) & [`ExtractChainFormatterExclude`](ExtractChainFormatterExclude.md)\<`chain`, `"block"`\>

### _Formatted

`_Formatted` = [`Omit`](Omit.md)\<`_FormatterReturnType`, [`BlockPendingDependencies`](BlockPendingDependencies.md)\> & `{ [_key in _ExcludedPendingDependencies]: never }` & [`Pick`](Pick.md)\<[`Block`](Block.md)\<`bigint`, `includeTransactions`, `blockTag`\>, [`BlockPendingDependencies`](BlockPendingDependencies.md)\>

### _Transactions

`_Transactions` = `includeTransactions` *extends* `true` ? [`Prettify`](Prettify-1.md)\<[`FormattedTransaction`](FormattedTransaction.md)\<`chain`, `blockTag`\>\>[] : [`Hash`](Hash.md)[]
