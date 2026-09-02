[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / BlockIdentifier

# Type Alias: BlockIdentifier\<quantity\>

> **BlockIdentifier**\<`quantity`\> = \{ `blockNumber`: [`BlockNumber`](BlockNumber.md)\<`quantity`\>; \} \| \{ `blockHash`: [`Hash`](Hash.md); `requireCanonical?`: `boolean`; \}

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/block.d.ts:60

## Type Parameters

### quantity

`quantity` = `bigint`

## Union Members

### Type Literal

\{ `blockNumber`: [`BlockNumber`](BlockNumber.md)\<`quantity`\>; \}

#### blockNumber

> **blockNumber**: [`BlockNumber`](BlockNumber.md)\<`quantity`\>

The block in the canonical chain with this number

***

### Type Literal

\{ `blockHash`: [`Hash`](Hash.md); `requireCanonical?`: `boolean`; \}

#### blockHash

> **blockHash**: [`Hash`](Hash.md)

The block uniquely identified by this hash. The `blockNumber` and `blockHash` properties are mutually exclusive; exactly one of them must be set.

#### requireCanonical?

> `optional` **requireCanonical?**: `boolean`

Whether or not to throw an error if the block is not in the canonical chain as described below. Only allowed in conjunction with the blockHash tag. Defaults to false.
