[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionReceipt

# Class: TransactionReceipt

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:538

A **TransactionReceipt** includes additional information about a
 transaction that is only available after it has been mined.

## Extended by

- [`ContractTransactionReceipt`](ContractTransactionReceipt.md)

## Implements

- [`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md)
- [`Iterable`](../interfaces/Iterable.md)\<[`Log`](Log.md)\>

## Constructors

### Constructor

> **new TransactionReceipt**(`tx`, `provider`): `TransactionReceipt`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:637

@_ignore:

#### Parameters

##### tx

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md)

##### provider

[`Provider`](../interfaces/Provider.md)

#### Returns

`TransactionReceipt`

## Properties

### blobGasPrice

> `readonly` **blobGasPrice**: `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:614

The price paid per BLOB in gas. See [[link-eip-4844]].

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`blobGasPrice`](../interfaces/TransactionReceiptParams.md#blobgasprice)

***

### blobGasUsed

> `readonly` **blobGasUsed**: `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:594

The gas used for BLObs. See [[link-eip-4844]].

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`blobGasUsed`](../interfaces/TransactionReceiptParams.md#blobgasused)

***

### blockHash

> `readonly` **blockHash**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:572

The block hash of the [[Block]] this transaction was included in.

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`blockHash`](../interfaces/TransactionReceiptParams.md#blockhash)

***

### blockNumber

> `readonly` **blockNumber**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:576

The block number of the [[Block]] this transaction was included in.

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`blockNumber`](../interfaces/TransactionReceiptParams.md#blocknumber)

***

### contractAddress

> `readonly` **contractAddress**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:560

The address of the contract if the transaction was directly
 responsible for deploying one.

 This is non-null **only** if the ``to`` is empty and the ``data``
 was successfully executed as initcode.

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`contractAddress`](../interfaces/TransactionReceiptParams.md#contractaddress)

***

### cumulativeGasUsed

> `readonly` **cumulativeGasUsed**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:602

The amount of gas used by all transactions within the block for this
 and all transactions with a lower ``index``.

 This is generally not useful for developers but can be used to
 validate certain aspects of execution.

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`cumulativeGasUsed`](../interfaces/TransactionReceiptParams.md#cumulativegasused)

***

### from

> `readonly` **from**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:552

The sender of the transaction.

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`from`](../interfaces/TransactionReceiptParams.md#from)

***

### gasPrice

> `readonly` **gasPrice**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:610

The actual gas price used during execution.

 Due to the complexity of [[link-eip-1559]] this value can only
 be caluclated after the transaction has been mined, snce the base
 fee is protocol-enforced.

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`gasPrice`](../interfaces/TransactionReceiptParams.md#gasprice)

***

### gasUsed

> `readonly` **gasUsed**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:590

The actual amount of gas used by this transaction.

 When creating a transaction, the amount of gas that will be used can
 only be approximated, but the sender must pay the gas fee for the
 entire gas limit. After the transaction, the difference is refunded.

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`gasUsed`](../interfaces/TransactionReceiptParams.md#gasused)

***

### hash

> `readonly` **hash**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:564

The transaction hash.

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`hash`](../interfaces/TransactionReceiptParams.md#hash)

***

### index

> `readonly` **index**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:568

The index of this transaction within the block transactions.

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`index`](../interfaces/TransactionReceiptParams.md#index)

***

### logsBloom

> `readonly` **logsBloom**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:582

The bloom filter bytes that represent all logs that occurred within
 this transaction. This is generally not useful for most developers,
 but can be used to validate the included logs.

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`logsBloom`](../interfaces/TransactionReceiptParams.md#logsbloom)

***

### provider

> `readonly` **provider**: [`Provider`](../interfaces/Provider.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:544

The provider connected to the log used to fetch additional details
 if necessary.

***

### root

> `readonly` **root**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:633

The root hash of this transaction.

 This is no present and was only included in pre-byzantium blocks, but
 could be used to validate certain parts of the receipt.

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`root`](../interfaces/TransactionReceiptParams.md#root)

***

### status

> `readonly` **status**: `number` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:626

The status of this transaction, indicating success (i.e. ``1``) or
 a revert (i.e. ``0``).

 This is available in post-byzantium blocks, but some backends may
 backfill this value.

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`status`](../interfaces/TransactionReceiptParams.md#status)

***

### to

> `readonly` **to**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:548

The address the transaction was sent to.

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`to`](../interfaces/TransactionReceiptParams.md#to)

***

### type

> `readonly` **type**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:618

The [[link-eip-2718]] transaction type.

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`type`](../interfaces/TransactionReceiptParams.md#type)

## Accessors

### fee

#### Get Signature

> **get** **fee**(): `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:654

The total fee for this transaction, in wei.

##### Returns

`bigint`

***

### length

#### Get Signature

> **get** **length**(): `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:649

@_ignore:

##### Returns

`number`

***

### logs

#### Get Signature

> **get** **logs**(): readonly [`Log`](Log.md)[]

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:641

The logs for this transaction.

##### Returns

readonly [`Log`](Log.md)[]

The logs emitted during the execution of this transaction.

#### Implementation of

[`TransactionReceiptParams`](../interfaces/TransactionReceiptParams.md).[`logs`](../interfaces/TransactionReceiptParams.md#logs)

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`Iterator`](../interfaces/Iterator.md)\<[`Log`](Log.md)\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:650

#### Returns

[`Iterator`](../interfaces/Iterator.md)\<[`Log`](Log.md)\>

#### Implementation of

[`Iterable`](../interfaces/Iterable.md).[`[iterator]`](../interfaces/Iterable.md#iterator)

***

### confirmations()

> **confirmations**(): `Promise`\<`number`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:673

Resolves to the number of confirmations this transaction has.

#### Returns

`Promise`\<`number`\>

***

### getBlock()

> **getBlock**(): `Promise`\<[`Block`](Block.md)\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:658

Resolves to the block this transaction occurred in.

#### Returns

`Promise`\<[`Block`](Block.md)\>

***

### getResult()

> **getResult**(): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:669

Resolves to the return value of the execution of this transaction.

 Support for this feature is limited, as it requires an archive node
 with the ``debug_`` or ``trace_`` API enabled.

#### Returns

`Promise`\<`string`\>

***

### getTransaction()

> **getTransaction**(): `Promise`\<[`TransactionResponse`](TransactionResponse.md)\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:662

Resolves to the transaction this transaction occurred in.

#### Returns

`Promise`\<[`TransactionResponse`](TransactionResponse.md)\>

***

### removedEvent()

> **removedEvent**(): [`OrphanFilter`](../type-aliases/OrphanFilter.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:677

@_ignore:

#### Returns

[`OrphanFilter`](../type-aliases/OrphanFilter.md)

***

### reorderedEvent()

> **reorderedEvent**(`other?`): [`OrphanFilter`](../type-aliases/OrphanFilter.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:681

@_ignore:

#### Parameters

##### other?

[`TransactionResponse`](TransactionResponse.md)

#### Returns

[`OrphanFilter`](../type-aliases/OrphanFilter.md)

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:645

Returns a JSON-compatible representation.

#### Returns

`any`
