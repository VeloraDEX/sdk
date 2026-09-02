[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetTransactionConfirmationsParameters

# Type Alias: GetTransactionConfirmationsParameters\<chain\>

> **GetTransactionConfirmationsParameters**\<`chain`\> = \{ `hash`: [`Hash`](Hash.md); `transactionReceipt?`: `undefined`; \} \| \{ `hash?`: `undefined`; `transactionReceipt`: [`FormattedTransactionReceipt`](FormattedTransactionReceipt.md)\<`chain`\>; \}

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/getTransactionConfirmations.d.ts:9

## Type Parameters

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md)

## Union Members

### Type Literal

\{ `hash`: [`Hash`](Hash.md); `transactionReceipt?`: `undefined`; \}

#### hash

> **hash**: [`Hash`](Hash.md)

The transaction hash.

#### transactionReceipt?

> `optional` **transactionReceipt?**: `undefined`

***

### Type Literal

\{ `hash?`: `undefined`; `transactionReceipt`: [`FormattedTransactionReceipt`](FormattedTransactionReceipt.md)\<`chain`\>; \}

#### hash?

> `optional` **hash?**: `undefined`

#### transactionReceipt

> **transactionReceipt**: [`FormattedTransactionReceipt`](FormattedTransactionReceipt.md)\<`chain`\>

The transaction receipt.
