[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionBase

# Type Alias: TransactionBase\<quantity, index, isPending\>

> **TransactionBase**\<`quantity`, `index`, `isPending`\> = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:52

## Type Parameters

### quantity

`quantity` = `bigint`

### index

`index` = `number`

### isPending

`isPending` *extends* `boolean` = `boolean`

## Properties

### blockHash

> **blockHash**: `isPending` *extends* `true` ? `null` : [`Hash`](Hash.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:54

Hash of block containing this transaction or `null` if pending

***

### blockNumber

> **blockNumber**: `isPending` *extends* `true` ? `null` : `quantity`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:56

Number of block containing this transaction or `null` if pending

***

### blockTimestamp?

> `optional` **blockTimestamp?**: `quantity`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:58

Unix timestamp of when this block was included

***

### from

> **from**: [`Address`](Address-1.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:60

Transaction sender

***

### gas

> **gas**: `quantity`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:62

Gas provided for transaction execution

***

### hash

> **hash**: [`Hash`](Hash.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:64

Hash of this transaction

***

### input

> **input**: [`Hex`](Hex.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:66

Contract code or a hashed method call

***

### nonce

> **nonce**: `index`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:68

Unique number identifying this transaction

***

### r

> **r**: [`Hex`](Hex.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:70

ECDSA signature r

***

### s

> **s**: [`Hex`](Hex.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:72

ECDSA signature s

***

### to

> **to**: [`Address`](Address-1.md) \| `null`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:74

Transaction recipient or `null` if deploying a contract

***

### transactionIndex

> **transactionIndex**: `isPending` *extends* `true` ? `null` : `index`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:76

Index of this transaction in the block or `null` if pending

***

### typeHex

> **typeHex**: [`Hex`](Hex.md) \| `null`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:78

The type represented as hex.

***

### v

> **v**: `quantity`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:80

ECDSA recovery ID

***

### value

> **value**: `quantity`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:82

Value in wei sent with this transaction

***

### yParity

> **yParity**: `index`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/transaction.d.ts:84

The parity of the y-value of the secp256k1 signature.
