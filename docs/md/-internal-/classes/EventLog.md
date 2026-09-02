[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / EventLog

# Class: EventLog

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/wrappers.d.ts:11

An **EventLog** contains additional properties parsed from the [[Log]].

## Extends

- [`Log`](Log.md)

## Constructors

### Constructor

> **new EventLog**(`log`, `iface`, `fragment`): `EventLog`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/wrappers.d.ts:27

@_ignore:

#### Parameters

##### log

[`Log`](Log.md)

##### iface

[`Interface`](Interface.md)

##### fragment

[`EventFragment`](EventFragment.md)

#### Returns

`EventLog`

#### Overrides

[`Log`](Log.md).[`constructor`](Log.md#constructor)

## Properties

### address

> `readonly` **address**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:486

The address of the contract that emitted this log.

#### Inherited from

[`Log`](Log.md).[`address`](Log.md#address)

***

### args

> `readonly` **args**: [`Result`](Result.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/wrappers.d.ts:23

The parsed arguments passed to the event by ``emit``.

***

### blockHash

> `readonly` **blockHash**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:468

The block hash of the block this log occurred in. Use the
 [[Log-getBlock]] to get the [[Block]].

#### Inherited from

[`Log`](Log.md).[`blockHash`](Log.md#blockhash)

***

### blockNumber

> `readonly` **blockNumber**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:475

The block number of the block this log occurred in. It is preferred
 to use the [[Block-hash]] when fetching the related [[Block]],
 since in the case of an orphaned block, the block at that height may
 have changed.

#### Inherited from

[`Log`](Log.md).[`blockNumber`](Log.md#blocknumber)

***

### data

> `readonly` **data**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:490

The data included in this log when it was emitted.

#### Inherited from

[`Log`](Log.md).[`data`](Log.md#data)

***

### fragment

> `readonly` **fragment**: [`EventFragment`](EventFragment.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/wrappers.d.ts:19

The matching event.

***

### index

> `readonly` **index**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:503

The index within the block this log occurred at. This is generally
 not useful to developers, but can be used with the various roots
 to proof inclusion within a block.

#### Inherited from

[`Log`](Log.md).[`index`](Log.md#index)

***

### interface

> `readonly` **interface**: [`Interface`](Interface.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/wrappers.d.ts:15

The Contract Interface.

***

### provider

> `readonly` **provider**: [`Provider`](../interfaces/Provider.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:458

The provider connected to the log used to fetch additional details
 if necessary.

#### Inherited from

[`Log`](Log.md).[`provider`](Log.md#provider)

***

### removed

> `readonly` **removed**: `boolean`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:482

If the **Log** represents a block that was removed due to an orphaned
 block, this will be true.

 This can only happen within an orphan event listener.

#### Inherited from

[`Log`](Log.md).[`removed`](Log.md#removed)

***

### topics

> `readonly` **topics**: readonly `string`[]

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:497

The indexed topics included in this log when it was emitted.

 All topics are included in the bloom filters, so they can be
 efficiently filtered using the [[Provider-getLogs]] method.

#### Inherited from

[`Log`](Log.md).[`topics`](Log.md#topics)

***

### transactionHash

> `readonly` **transactionHash**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:463

The transaction hash of the transaction this log occurred in. Use the
 [[Log-getTransaction]] to get the [[TransactionResponse]].

#### Inherited from

[`Log`](Log.md).[`transactionHash`](Log.md#transactionhash)

***

### transactionIndex

> `readonly` **transactionIndex**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:507

The index within the transaction of this log.

#### Inherited from

[`Log`](Log.md).[`transactionIndex`](Log.md#transactionindex)

## Accessors

### eventName

#### Get Signature

> **get** **eventName**(): `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/wrappers.d.ts:31

The name of the event.

##### Returns

`string`

***

### eventSignature

#### Get Signature

> **get** **eventSignature**(): `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/wrappers.d.ts:35

The signature of the event.

##### Returns

`string`

## Methods

### getBlock()

> **getBlock**(): `Promise`\<[`Block`](Block.md)\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:519

Returns the block that this log occurred in.

#### Returns

`Promise`\<[`Block`](Block.md)\>

#### Inherited from

[`Log`](Log.md).[`getBlock`](Log.md#getblock)

***

### getTransaction()

> **getTransaction**(): `Promise`\<[`TransactionResponse`](TransactionResponse.md)\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:523

Returns the transaction that this log occurred in.

#### Returns

`Promise`\<[`TransactionResponse`](TransactionResponse.md)\>

#### Inherited from

[`Log`](Log.md).[`getTransaction`](Log.md#gettransaction)

***

### getTransactionReceipt()

> **getTransactionReceipt**(): `Promise`\<[`TransactionReceipt`](TransactionReceipt.md)\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:528

Returns the transaction receipt fot the transaction that this
 log occurred in.

#### Returns

`Promise`\<[`TransactionReceipt`](TransactionReceipt.md)\>

#### Inherited from

[`Log`](Log.md).[`getTransactionReceipt`](Log.md#gettransactionreceipt)

***

### removedEvent()

> **removedEvent**(): [`OrphanFilter`](../type-aliases/OrphanFilter.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:532

@_ignore:

#### Returns

[`OrphanFilter`](../type-aliases/OrphanFilter.md)

#### Inherited from

[`Log`](Log.md).[`removedEvent`](Log.md#removedevent)

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:515

Returns a JSON-compatible object.

#### Returns

`any`

#### Inherited from

[`Log`](Log.md).[`toJSON`](Log.md#tojson)
