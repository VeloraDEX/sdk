[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Log

# Type Alias: Log\<quantity, index, pending, abiEvent, strict, abi, eventName\>

> **Log**\<`quantity`, `index`, `pending`, `abiEvent`, `strict`, `abi`, `eventName`\> = `object` & [`GetInferredLogValues`](GetInferredLogValues.md)\<`abiEvent`, `abi`, `eventName`, `strict`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/log.d.ts:4

## Type Declaration

### address

> **address**: [`Address`](Address-1.md)

The address from which this log originated

### blockHash

> **blockHash**: `pending` *extends* `true` ? `null` : [`Hash`](Hash.md)

Hash of block containing this log or `null` if pending

### blockNumber

> **blockNumber**: `pending` *extends* `true` ? `null` : `quantity`

Number of block containing this log or `null` if pending

### blockTimestamp?

> `optional` **blockTimestamp?**: `pending` *extends* `true` ? `null` : `quantity`

Timestamp of block containing this log or `null` if pending

### data

> **data**: [`Hex`](Hex.md)

Contains the non-indexed arguments of the log

### logIndex

> **logIndex**: `pending` *extends* `true` ? `null` : `index`

Index of this log within its block or `null` if pending

### removed

> **removed**: `boolean`

`true` if this filter has been destroyed and is invalid

### transactionHash

> **transactionHash**: `pending` *extends* `true` ? `null` : [`Hash`](Hash.md)

Hash of the transaction that created this log or `null` if pending

### transactionIndex

> **transactionIndex**: `pending` *extends* `true` ? `null` : `index`

Index of the transaction that created this log or `null` if pending

## Type Parameters

### quantity

`quantity` = `bigint`

### index

`index` = `number`

### pending

`pending` *extends* `boolean` = `boolean`

### abiEvent

`abiEvent` *extends* [`AbiEvent`](AbiEvent.md) \| `undefined` = `undefined`

### strict

`strict` *extends* `boolean` \| `undefined` = `undefined`

### abi

`abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[] \| `undefined` = `abiEvent` *extends* [`AbiEvent`](AbiEvent.md) ? \[`abiEvent`\] : `undefined`

### eventName

`eventName` *extends* `string` \| `undefined` = `abiEvent` *extends* [`AbiEvent`](AbiEvent.md) ? `abiEvent`\[`"name"`\] : `undefined`
