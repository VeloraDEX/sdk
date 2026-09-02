[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / GetBlockTransactionCountParameters

# Type Alias: GetBlockTransactionCountParameters

> **GetBlockTransactionCountParameters** = \{ `blockHash?`: [`Hash`](Hash.md); `blockNumber?`: `undefined`; `blockTag?`: `undefined`; \} \| \{ `blockHash?`: `undefined`; `blockNumber?`: `bigint`; `blockTag?`: `undefined`; \} \| \{ `blockHash?`: `undefined`; `blockNumber?`: `undefined`; `blockTag?`: [`BlockTag`](BlockTag-2.md); \}

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/getBlockTransactionCount.d.ts:10

## Union Members

### Type Literal

\{ `blockHash?`: [`Hash`](Hash.md); `blockNumber?`: `undefined`; `blockTag?`: `undefined`; \}

#### blockHash?

> `optional` **blockHash?**: [`Hash`](Hash.md)

Hash of the block.

#### blockNumber?

> `optional` **blockNumber?**: `undefined`

#### blockTag?

> `optional` **blockTag?**: `undefined`

***

### Type Literal

\{ `blockHash?`: `undefined`; `blockNumber?`: `bigint`; `blockTag?`: `undefined`; \}

#### blockHash?

> `optional` **blockHash?**: `undefined`

#### blockNumber?

> `optional` **blockNumber?**: `bigint`

The block number.

#### blockTag?

> `optional` **blockTag?**: `undefined`

***

### Type Literal

\{ `blockHash?`: `undefined`; `blockNumber?`: `undefined`; `blockTag?`: [`BlockTag`](BlockTag-2.md); \}

#### blockHash?

> `optional` **blockHash?**: `undefined`

#### blockNumber?

> `optional` **blockNumber?**: `undefined`

#### blockTag?

> `optional` **blockTag?**: [`BlockTag`](BlockTag-2.md)

The block tag. Defaults to 'latest'.
