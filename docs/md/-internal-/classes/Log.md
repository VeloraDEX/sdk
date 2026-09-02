[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Log

# Class: Log

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:453

A **Log** in Ethereum represents an event that has been included in a
 transaction using the ``LOG*`` opcodes, which are most commonly used by
 Solidity's emit for announcing events.

## Extended by

- [`EventLog`](EventLog.md)

## Implements

- [`LogParams`](../interfaces/LogParams.md)

## Constructors

### Constructor

> **new Log**(`log`, `provider`): `Log`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:511

@_ignore:

#### Parameters

##### log

[`LogParams`](../interfaces/LogParams.md)

##### provider

[`Provider`](../interfaces/Provider.md)

#### Returns

`Log`

## Properties

### address

> `readonly` **address**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:486

The address of the contract that emitted this log.

#### Implementation of

[`LogParams`](../interfaces/LogParams.md).[`address`](../interfaces/LogParams.md#address)

***

### blockHash

> `readonly` **blockHash**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:468

The block hash of the block this log occurred in. Use the
 [[Log-getBlock]] to get the [[Block]].

#### Implementation of

[`LogParams`](../interfaces/LogParams.md).[`blockHash`](../interfaces/LogParams.md#blockhash)

***

### blockNumber

> `readonly` **blockNumber**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:475

The block number of the block this log occurred in. It is preferred
 to use the [[Block-hash]] when fetching the related [[Block]],
 since in the case of an orphaned block, the block at that height may
 have changed.

#### Implementation of

[`LogParams`](../interfaces/LogParams.md).[`blockNumber`](../interfaces/LogParams.md#blocknumber)

***

### data

> `readonly` **data**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:490

The data included in this log when it was emitted.

#### Implementation of

[`LogParams`](../interfaces/LogParams.md).[`data`](../interfaces/LogParams.md#data)

***

### index

> `readonly` **index**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:503

The index within the block this log occurred at. This is generally
 not useful to developers, but can be used with the various roots
 to proof inclusion within a block.

#### Implementation of

[`LogParams`](../interfaces/LogParams.md).[`index`](../interfaces/LogParams.md#index)

***

### provider

> `readonly` **provider**: [`Provider`](../interfaces/Provider.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:458

The provider connected to the log used to fetch additional details
 if necessary.

***

### removed

> `readonly` **removed**: `boolean`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:482

If the **Log** represents a block that was removed due to an orphaned
 block, this will be true.

 This can only happen within an orphan event listener.

#### Implementation of

[`LogParams`](../interfaces/LogParams.md).[`removed`](../interfaces/LogParams.md#removed)

***

### topics

> `readonly` **topics**: readonly `string`[]

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:497

The indexed topics included in this log when it was emitted.

 All topics are included in the bloom filters, so they can be
 efficiently filtered using the [[Provider-getLogs]] method.

#### Implementation of

[`LogParams`](../interfaces/LogParams.md).[`topics`](../interfaces/LogParams.md#topics)

***

### transactionHash

> `readonly` **transactionHash**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:463

The transaction hash of the transaction this log occurred in. Use the
 [[Log-getTransaction]] to get the [[TransactionResponse]].

#### Implementation of

[`LogParams`](../interfaces/LogParams.md).[`transactionHash`](../interfaces/LogParams.md#transactionhash)

***

### transactionIndex

> `readonly` **transactionIndex**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:507

The index within the transaction of this log.

#### Implementation of

[`LogParams`](../interfaces/LogParams.md).[`transactionIndex`](../interfaces/LogParams.md#transactionindex)

## Methods

### getBlock()

> **getBlock**(): `Promise`\<[`Block`](Block.md)\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:519

Returns the block that this log occurred in.

#### Returns

`Promise`\<[`Block`](Block.md)\>

***

### getTransaction()

> **getTransaction**(): `Promise`\<[`TransactionResponse`](TransactionResponse.md)\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:523

Returns the transaction that this log occurred in.

#### Returns

`Promise`\<[`TransactionResponse`](TransactionResponse.md)\>

***

### getTransactionReceipt()

> **getTransactionReceipt**(): `Promise`\<[`TransactionReceipt`](TransactionReceipt.md)\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:528

Returns the transaction receipt fot the transaction that this
 log occurred in.

#### Returns

`Promise`\<[`TransactionReceipt`](TransactionReceipt.md)\>

***

### removedEvent()

> **removedEvent**(): [`OrphanFilter`](../type-aliases/OrphanFilter.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:532

@_ignore:

#### Returns

[`OrphanFilter`](../type-aliases/OrphanFilter.md)

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:515

Returns a JSON-compatible object.

#### Returns

`any`
