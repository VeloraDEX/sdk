[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ChainConfig

# Type Alias: ChainConfig\<formatters, extendSchema\>

> **ChainConfig**\<`formatters`, `extendSchema`\> = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/chain.d.ts:60

## Type Parameters

### formatters

`formatters` *extends* [`ChainFormatters`](ChainFormatters.md) \| `undefined` = [`ChainFormatters`](ChainFormatters.md) \| `undefined`

### extendSchema

`extendSchema` *extends* [`Record`](Record.md)\<`string`, `unknown`\> \| `undefined` = [`Record`](Record.md)\<`string`, `unknown`\> \| `undefined`

## Properties

### ~~custom?~~

> `optional` **custom?**: `extendSchema`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/chain.d.ts:62

Custom chain data.

#### Deprecated

use `.extend` instead.

***

### extendSchema?

> `optional` **extendSchema?**: `extendSchema`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/chain.d.ts:64

Extend schema.

***

### fees?

> `optional` **fees?**: [`ChainFees`](ChainFees.md)\<`formatters` \| `undefined`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/chain.d.ts:66

Modifies how fees are derived.

***

### formatters?

> `optional` **formatters?**: `formatters`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/chain.d.ts:68

Modifies how data is formatted and typed (e.g. blocks and transactions)

***

### prepareTransactionRequest?

> `optional` **prepareTransactionRequest?**: [`PrepareTransactionRequestFn`](PrepareTransactionRequestFn.md) \| \[[`PrepareTransactionRequestFn`](PrepareTransactionRequestFn.md) \| `undefined`, `object`\]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/chain.d.ts:70

Function to prepare a transaction request. Runs before the transaction is filled.

***

### serializers?

> `optional` **serializers?**: [`ChainSerializers`](ChainSerializers.md)\<`formatters`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/chain.d.ts:84

Modifies how data is serialized (e.g. transactions).

***

### verifyHash?

> `optional` **verifyHash?**: [`ChainVerifyHashFn`](ChainVerifyHashFn.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/chain.d.ts:86

Chain-specific signature verification.
