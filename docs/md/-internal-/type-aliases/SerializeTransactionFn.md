[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SerializeTransactionFn

# Type Alias: SerializeTransactionFn()\<transaction, _transactionType\>

> **SerializeTransactionFn**\<`transaction`, `_transactionType`\>: (`transaction`, `signature`?) => [`MaybePromise`](MaybePromise.md)\<[`SerializedTransactionReturnType`](SerializedTransactionReturnType.md)\<[`OneOf`](OneOf.md)\<[`TransactionSerializable`](TransactionSerializable.md) \| `transaction`\>, `_transactionType`\>\>

## Type Parameters

• **transaction** *extends* [`TransactionSerializableGeneric`](TransactionSerializableGeneric.md) = [`TransactionSerializable`](TransactionSerializable.md)

• **_transactionType** *extends* [`TransactionType`](TransactionType.md) = `never`

## Parameters

• **transaction**: [`OneOf`](OneOf.md)\<[`TransactionSerializable`](TransactionSerializable.md) \| `transaction`\>

• **signature?**: [`Signature`](Signature.md)

## Returns

[`MaybePromise`](MaybePromise.md)\<[`SerializedTransactionReturnType`](SerializedTransactionReturnType.md)\<[`OneOf`](OneOf.md)\<[`TransactionSerializable`](TransactionSerializable.md) \| `transaction`\>, `_transactionType`\>\>

## Defined in

node\_modules/viem/\_types/utils/transaction/serializeTransaction.d.ts:18
