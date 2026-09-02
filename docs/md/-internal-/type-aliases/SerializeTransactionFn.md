[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SerializeTransactionFn

# Type Alias: SerializeTransactionFn\<transaction, _transactionType\>

> **SerializeTransactionFn**\<`transaction`, `_transactionType`\> = (`transaction`, `signature?`) => [`MaybePromise`](MaybePromise.md)\<[`SerializedTransactionReturnType`](SerializedTransactionReturnType.md)\<[`OneOf`](OneOf.md)\<[`TransactionSerializable`](TransactionSerializable.md) \| `transaction`\>, `_transactionType`\>\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/utils/transaction/serializeTransaction.d.ts:18

## Type Parameters

### transaction

`transaction` *extends* [`TransactionSerializableGeneric`](TransactionSerializableGeneric.md) = [`TransactionSerializable`](TransactionSerializable.md)

### _transactionType

`_transactionType` *extends* [`TransactionType`](TransactionType.md) = `never`

## Parameters

### transaction

[`OneOf`](OneOf.md)\<[`TransactionSerializable`](TransactionSerializable.md) \| `transaction`\>

### signature?

[`Signature`](Signature.md)

## Returns

[`MaybePromise`](MaybePromise.md)\<[`SerializedTransactionReturnType`](SerializedTransactionReturnType.md)\<[`OneOf`](OneOf.md)\<[`TransactionSerializable`](TransactionSerializable.md) \| `transaction`\>, `_transactionType`\>\>
