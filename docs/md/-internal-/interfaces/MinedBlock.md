[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / MinedBlock

# Interface: MinedBlock

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:261

An Interface to indicate a [[Block]] has been included in the
 blockchain. This asserts a Type Guard that necessary properties
 are non-null.

 Before a block is included, it is a //pending// block.

## Extends

- [`Block`](../classes/Block.md)

## Properties

### baseFeePerGas

> `readonly` **baseFeePerGas**: `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:386

The base fee per gas that all transactions in this block were
 charged.

 This adjusts after each block, depending on how congested the network
 is.

#### Inherited from

`MinedBlock`.[`baseFeePerGas`](#basefeepergas)

***

### blobGasUsed

> `readonly` **blobGasUsed**: `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:359

The total amount of blob gas consumed by the transactions
 within the block. See [[link-eip-4844]].

#### Inherited from

`MinedBlock`.[`blobGasUsed`](#blobgasused)

***

### date

> `readonly` **date**: `Date`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:277

The block date, created from the [[timestamp]].

#### Overrides

`Block.date`

***

### difficulty

> `readonly` **difficulty**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:337

The difficulty target.

 On legacy networks, this is the proof-of-work target required
 for a block to meet the protocol rules to be included.

 On modern networks, this is a random number arrived at using
 randao.  @TODO: Find links?

#### Inherited from

[`Block`](../classes/Block.md).[`difficulty`](../classes/Block.md#difficulty)

***

### excessBlobGas

> `readonly` **excessBlobGas**: `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:364

The running total of blob gas consumed in excess of the
 target, prior to the block. See [[link-eip-4844]].

#### Inherited from

`MinedBlock`.[`excessBlobGas`](#excessblobgas)

***

### extraData

> `readonly` **extraData**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:378

Any extra data the validator wished to include.

#### Inherited from

[`Block`](../classes/Block.md).[`extraData`](../classes/Block.md#extradata)

***

### gasLimit

> `readonly` **gasLimit**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:341

The total gas limit for this block.

#### Inherited from

[`Block`](../classes/Block.md).[`gasLimit`](../classes/Block.md#gaslimit)

***

### gasUsed

> `readonly` **gasUsed**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:345

The total gas used in this block.

#### Inherited from

[`Block`](../classes/Block.md).[`gasUsed`](../classes/Block.md#gasused)

***

### hash

> `readonly` **hash**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:269

The block hash.

#### Overrides

[`Block`](../classes/Block.md).[`hash`](../classes/Block.md#hash)

***

### miner

> `readonly` **miner**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:282

The miner of the block, also known as the ``author`` or
 block ``producer``.

#### Overrides

[`Block`](../classes/Block.md).[`miner`](../classes/Block.md#miner)

***

### nonce

> `readonly` **nonce**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:327

The nonce.

 On legacy networks, this is the random number inserted which
 permitted the difficulty target to be reached.

#### Inherited from

[`Block`](../classes/Block.md).[`nonce`](../classes/Block.md#nonce)

***

### number

> `readonly` **number**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:265

The block number also known as the block height.

#### Overrides

[`Block`](../classes/Block.md).[`number`](../classes/Block.md#number)

***

### parentBeaconBlockRoot

> **parentBeaconBlockRoot**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:320

The hash tree root of the parent beacon block for the given
 execution block. See [[link-eip-4788]].

#### Inherited from

`MinedBlock`.[`parentBeaconBlockRoot`](#parentbeaconblockroot)

***

### parentHash

> `readonly` **parentHash**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:315

The block hash of the parent block.

#### Inherited from

[`Block`](../classes/Block.md).[`parentHash`](../classes/Block.md#parenthash)

***

### prevRandao

> `readonly` **prevRandao**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:374

The latest RANDAO mix of the post beacon state of
 the previous block.

#### Inherited from

`MinedBlock`.[`prevRandao`](#prevrandao)

***

### provider

> `readonly` **provider**: [`Provider`](Provider.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:294

The provider connected to the block used to fetch additional details
 if necessary.

#### Inherited from

[`Block`](../classes/Block.md).[`provider`](../classes/Block.md#provider)

***

### receiptsRoot

> `readonly` **receiptsRoot**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:354

The hash of the transaction receipts trie.

#### Inherited from

`MinedBlock`.[`receiptsRoot`](#receiptsroot)

***

### stateRoot

> `readonly` **stateRoot**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:350

The root hash for the global state after applying changes
 in this block.

#### Inherited from

`MinedBlock`.[`stateRoot`](#stateroot)

***

### timestamp

> `readonly` **timestamp**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:273

The block timestamp, in seconds from epoch.

#### Overrides

[`Block`](../classes/Block.md).[`timestamp`](../classes/Block.md#timestamp)

## Accessors

### length

#### Get Signature

> **get** **length**(): `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:416

The number of transactions in this block.

##### Returns

`number`

#### Inherited from

[`Block`](../classes/Block.md).[`length`](../classes/Block.md#length)

***

### prefetchedTransactions

#### Get Signature

> **get** **prefetchedTransactions**(): [`TransactionResponse`](../classes/TransactionResponse.md)[]

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:407

Returns the complete transactions, in the order they
 were executed within the block.

 This is only available for blocks which prefetched
 transactions, by passing ``true`` to %%prefetchTxs%%
 into [[Provider-getBlock]].

##### Returns

[`TransactionResponse`](../classes/TransactionResponse.md)[]

#### Inherited from

[`Block`](../classes/Block.md).[`prefetchedTransactions`](../classes/Block.md#prefetchedtransactions)

***

### transactions

#### Get Signature

> **get** **transactions**(): readonly `string`[]

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:398

Returns the list of transaction hashes, in the order
 they were executed within the block.

##### Returns

readonly `string`[]

The list of transactions in the block.

#### Inherited from

[`Block`](../classes/Block.md).[`transactions`](../classes/Block.md#transactions)

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`Iterator`](Iterator.md)\<`string`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:412

#### Returns

[`Iterator`](Iterator.md)\<`string`\>

#### Inherited from

[`Block`](../classes/Block.md).[`[iterator]`](../classes/Block.md#iterator)

***

### getPrefetchedTransaction()

> **getPrefetchedTransaction**(`indexOrHash`): [`TransactionResponse`](../classes/TransactionResponse.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:431

If a **Block** was fetched with a request to include the transactions
 this will allow synchronous access to those transactions.

 If the transactions were not prefetched, this will throw.

#### Parameters

##### indexOrHash

`string` \| `number`

#### Returns

[`TransactionResponse`](../classes/TransactionResponse.md)

#### Inherited from

[`Block`](../classes/Block.md).[`getPrefetchedTransaction`](../classes/Block.md#getprefetchedtransaction)

***

### getTransaction()

> **getTransaction**(`indexOrHash`): `Promise`\<[`TransactionResponse`](../classes/TransactionResponse.md)\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:424

Get the transaction at %%indexe%% within this block.

#### Parameters

##### indexOrHash

`string` \| `number`

#### Returns

`Promise`\<[`TransactionResponse`](../classes/TransactionResponse.md)\>

#### Inherited from

[`Block`](../classes/Block.md).[`getTransaction`](../classes/Block.md#gettransaction)

***

### isLondon()

> **isLondon**(): `this is Block & { baseFeePerGas: bigint }`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:440

Returns true if this block is an [[link-eip-2930]] block.

#### Returns

`this is Block & { baseFeePerGas: bigint }`

#### Inherited from

[`Block`](../classes/Block.md).[`isLondon`](../classes/Block.md#islondon)

***

### isMined()

> **isMined**(): `this is MinedBlock`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:436

Returns true if this block been mined. This provides a type guard
 for all properties on a [[MinedBlock]].

#### Returns

`this is MinedBlock`

#### Inherited from

[`Block`](../classes/Block.md).[`isMined`](../classes/Block.md#ismined)

***

### orphanedEvent()

> **orphanedEvent**(): [`OrphanFilter`](../type-aliases/OrphanFilter.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:446

@_ignore:

#### Returns

[`OrphanFilter`](../type-aliases/OrphanFilter.md)

#### Inherited from

[`Block`](../classes/Block.md).[`orphanedEvent`](../classes/Block.md#orphanedevent)

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:411

Returns a JSON-friendly value.

#### Returns

`any`

#### Inherited from

[`Block`](../classes/Block.md).[`toJSON`](../classes/Block.md#tojson)
