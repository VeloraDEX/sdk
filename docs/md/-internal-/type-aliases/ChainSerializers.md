[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ChainSerializers

# Type Alias: ChainSerializers\<formatters, transaction\>

> **ChainSerializers**\<`formatters`, `transaction`\> = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/chain.d.ts:149

## Type Parameters

### formatters

`formatters` *extends* [`ChainFormatters`](ChainFormatters.md) \| `undefined` = `undefined`

### transaction

`transaction` *extends* [`TransactionSerializableGeneric`](TransactionSerializableGeneric.md) = `formatters` *extends* [`ChainFormatters`](ChainFormatters.md) ? `formatters`\[`"transactionRequest"`\] *extends* [`ChainFormatter`](ChainFormatter.md) ? [`TransactionSerializableGeneric`](TransactionSerializableGeneric.md) & [`Parameters`](Parameters-8.md)\<`formatters`\[`"transactionRequest"`\]\[`"format"`\]\>\[`0`\] : [`TransactionSerializable`](TransactionSerializable.md) : [`TransactionSerializable`](TransactionSerializable.md)

## Properties

### transaction?

> `optional` **transaction?**: [`SerializeTransactionFn`](SerializeTransactionFn.md)\<`transaction`, [`TransactionSerializedGeneric`](TransactionSerializedGeneric.md)\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/chain.d.ts:151

Modifies how Transactions are serialized.
