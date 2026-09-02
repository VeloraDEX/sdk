[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractTransactionReceipt

# Class: ContractTransactionReceipt

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/wrappers.d.ts:54

A **ContractTransactionReceipt** includes the parsed logs from a
 [[TransactionReceipt]].

## Extends

- [`TransactionReceipt`](TransactionReceipt.md)

## Constructors

### Constructor

> **new ContractTransactionReceipt**(`iface`, `provider`, `tx`): `ContractTransactionReceipt`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/wrappers.d.ts:59

@_ignore:

#### Parameters

##### iface

[`Interface`](Interface.md)

##### provider

[`Provider`](../interfaces/Provider.md)

##### tx

[`TransactionReceipt`](TransactionReceipt.md)

#### Returns

`ContractTransactionReceipt`

#### Overrides

[`TransactionReceipt`](TransactionReceipt.md).[`constructor`](TransactionReceipt.md#constructor)

## Properties

### blobGasPrice

> `readonly` **blobGasPrice**: `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:614

The price paid per BLOB in gas. See [[link-eip-4844]].

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`blobGasPrice`](TransactionReceipt.md#blobgasprice)

***

### blobGasUsed

> `readonly` **blobGasUsed**: `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:594

The gas used for BLObs. See [[link-eip-4844]].

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`blobGasUsed`](TransactionReceipt.md#blobgasused)

***

### blockHash

> `readonly` **blockHash**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:572

The block hash of the [[Block]] this transaction was included in.

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`blockHash`](TransactionReceipt.md#blockhash)

***

### blockNumber

> `readonly` **blockNumber**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:576

The block number of the [[Block]] this transaction was included in.

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`blockNumber`](TransactionReceipt.md#blocknumber)

***

### contractAddress

> `readonly` **contractAddress**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:560

The address of the contract if the transaction was directly
 responsible for deploying one.

 This is non-null **only** if the ``to`` is empty and the ``data``
 was successfully executed as initcode.

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`contractAddress`](TransactionReceipt.md#contractaddress)

***

### cumulativeGasUsed

> `readonly` **cumulativeGasUsed**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:602

The amount of gas used by all transactions within the block for this
 and all transactions with a lower ``index``.

 This is generally not useful for developers but can be used to
 validate certain aspects of execution.

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`cumulativeGasUsed`](TransactionReceipt.md#cumulativegasused)

***

### from

> `readonly` **from**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:552

The sender of the transaction.

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`from`](TransactionReceipt.md#from)

***

### gasPrice

> `readonly` **gasPrice**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:610

The actual gas price used during execution.

 Due to the complexity of [[link-eip-1559]] this value can only
 be caluclated after the transaction has been mined, snce the base
 fee is protocol-enforced.

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`gasPrice`](TransactionReceipt.md#gasprice)

***

### gasUsed

> `readonly` **gasUsed**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:590

The actual amount of gas used by this transaction.

 When creating a transaction, the amount of gas that will be used can
 only be approximated, but the sender must pay the gas fee for the
 entire gas limit. After the transaction, the difference is refunded.

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`gasUsed`](TransactionReceipt.md#gasused)

***

### hash

> `readonly` **hash**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:564

The transaction hash.

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`hash`](TransactionReceipt.md#hash)

***

### index

> `readonly` **index**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:568

The index of this transaction within the block transactions.

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`index`](TransactionReceipt.md#index)

***

### logsBloom

> `readonly` **logsBloom**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:582

The bloom filter bytes that represent all logs that occurred within
 this transaction. This is generally not useful for most developers,
 but can be used to validate the included logs.

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`logsBloom`](TransactionReceipt.md#logsbloom)

***

### provider

> `readonly` **provider**: [`Provider`](../interfaces/Provider.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:544

The provider connected to the log used to fetch additional details
 if necessary.

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`provider`](TransactionReceipt.md#provider)

***

### root

> `readonly` **root**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:633

The root hash of this transaction.

 This is no present and was only included in pre-byzantium blocks, but
 could be used to validate certain parts of the receipt.

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`root`](TransactionReceipt.md#root)

***

### status

> `readonly` **status**: `number` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:626

The status of this transaction, indicating success (i.e. ``1``) or
 a revert (i.e. ``0``).

 This is available in post-byzantium blocks, but some backends may
 backfill this value.

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`status`](TransactionReceipt.md#status)

***

### to

> `readonly` **to**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:548

The address the transaction was sent to.

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`to`](TransactionReceipt.md#to)

***

### type

> `readonly` **type**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:618

The [[link-eip-2718]] transaction type.

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`type`](TransactionReceipt.md#type)

## Accessors

### fee

#### Get Signature

> **get** **fee**(): `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:654

The total fee for this transaction, in wei.

##### Returns

`bigint`

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`fee`](TransactionReceipt.md#fee)

***

### length

#### Get Signature

> **get** **length**(): `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:649

@_ignore:

##### Returns

`number`

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`length`](TransactionReceipt.md#length)

***

### logs

#### Get Signature

> **get** **logs**(): ([`Log`](Log.md) \| [`EventLog`](EventLog.md))[]

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/wrappers.d.ts:64

The parsed logs for any [[Log]] which has a matching event in the
 Contract ABI.

##### Returns

([`Log`](Log.md) \| [`EventLog`](EventLog.md))[]

The logs emitted during the execution of this transaction.

#### Overrides

[`TransactionReceipt`](TransactionReceipt.md).[`logs`](TransactionReceipt.md#logs)

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`Iterator`](../interfaces/Iterator.md)\<[`Log`](Log.md)\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:650

#### Returns

[`Iterator`](../interfaces/Iterator.md)\<[`Log`](Log.md)\>

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`[iterator]`](TransactionReceipt.md#iterator)

***

### confirmations()

> **confirmations**(): `Promise`\<`number`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:673

Resolves to the number of confirmations this transaction has.

#### Returns

`Promise`\<`number`\>

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`confirmations`](TransactionReceipt.md#confirmations)

***

### getBlock()

> **getBlock**(): `Promise`\<[`Block`](Block.md)\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:658

Resolves to the block this transaction occurred in.

#### Returns

`Promise`\<[`Block`](Block.md)\>

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`getBlock`](TransactionReceipt.md#getblock)

***

### getResult()

> **getResult**(): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:669

Resolves to the return value of the execution of this transaction.

 Support for this feature is limited, as it requires an archive node
 with the ``debug_`` or ``trace_`` API enabled.

#### Returns

`Promise`\<`string`\>

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`getResult`](TransactionReceipt.md#getresult)

***

### getTransaction()

> **getTransaction**(): `Promise`\<[`TransactionResponse`](TransactionResponse.md)\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:662

Resolves to the transaction this transaction occurred in.

#### Returns

`Promise`\<[`TransactionResponse`](TransactionResponse.md)\>

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`getTransaction`](TransactionReceipt.md#gettransaction)

***

### removedEvent()

> **removedEvent**(): [`OrphanFilter`](../type-aliases/OrphanFilter.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:677

@_ignore:

#### Returns

[`OrphanFilter`](../type-aliases/OrphanFilter.md)

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`removedEvent`](TransactionReceipt.md#removedevent)

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

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`reorderedEvent`](TransactionReceipt.md#reorderedevent)

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:645

Returns a JSON-compatible representation.

#### Returns

`any`

#### Inherited from

[`TransactionReceipt`](TransactionReceipt.md).[`toJSON`](TransactionReceipt.md#tojson)
