[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Block

# Class: Block

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:288

A **Block** represents the data associated with a full block on
 Ethereum.

## Extended by

- [`MinedBlock`](../interfaces/MinedBlock.md)

## Implements

- [`BlockParams`](../interfaces/BlockParams.md)
- [`Iterable`](../interfaces/Iterable.md)\<`string`\>

## Constructors

### Constructor

> **new Block**(`block`, `provider`): `Block`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:393

Create a new **Block** object.

 This should generally not be necessary as the unless implementing a
 low-level library.

#### Parameters

##### block

[`BlockParams`](../interfaces/BlockParams.md)

##### provider

[`Provider`](../interfaces/Provider.md)

#### Returns

`Block`

## Properties

### baseFeePerGas

> `readonly` **baseFeePerGas**: `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:386

The base fee per gas that all transactions in this block were
 charged.

 This adjusts after each block, depending on how congested the network
 is.

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`baseFeePerGas`](../interfaces/BlockParams.md#basefeepergas)

***

### blobGasUsed

> `readonly` **blobGasUsed**: `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:359

The total amount of blob gas consumed by the transactions
 within the block. See [[link-eip-4844]].

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`blobGasUsed`](../interfaces/BlockParams.md#blobgasused)

***

### difficulty

> `readonly` **difficulty**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:337

The difficulty target.

 On legacy networks, this is the proof-of-work target required
 for a block to meet the protocol rules to be included.

 On modern networks, this is a random number arrived at using
 randao.  @TODO: Find links?

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`difficulty`](../interfaces/BlockParams.md#difficulty)

***

### excessBlobGas

> `readonly` **excessBlobGas**: `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:364

The running total of blob gas consumed in excess of the
 target, prior to the block. See [[link-eip-4844]].

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`excessBlobGas`](../interfaces/BlockParams.md#excessblobgas)

***

### extraData

> `readonly` **extraData**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:378

Any extra data the validator wished to include.

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`extraData`](../interfaces/BlockParams.md#extradata)

***

### gasLimit

> `readonly` **gasLimit**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:341

The total gas limit for this block.

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`gasLimit`](../interfaces/BlockParams.md#gaslimit)

***

### gasUsed

> `readonly` **gasUsed**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:345

The total gas used in this block.

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`gasUsed`](../interfaces/BlockParams.md#gasused)

***

### hash

> `readonly` **hash**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:306

The block hash.

 This hash includes all properties, so can be safely used to identify
 an exact set of block properties.

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`hash`](../interfaces/BlockParams.md#hash)

***

### miner

> `readonly` **miner**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:369

The miner coinbase address, wihch receives any subsidies for
 including this block.

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`miner`](../interfaces/BlockParams.md#miner)

***

### nonce

> `readonly` **nonce**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:327

The nonce.

 On legacy networks, this is the random number inserted which
 permitted the difficulty target to be reached.

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`nonce`](../interfaces/BlockParams.md#nonce)

***

### number

> `readonly` **number**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:299

The block number, sometimes called the block height. This is a
 sequential number that is one higher than the parent block.

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`number`](../interfaces/BlockParams.md#number)

***

### parentBeaconBlockRoot

> **parentBeaconBlockRoot**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:320

The hash tree root of the parent beacon block for the given
 execution block. See [[link-eip-4788]].

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`parentBeaconBlockRoot`](../interfaces/BlockParams.md#parentbeaconblockroot)

***

### parentHash

> `readonly` **parentHash**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:315

The block hash of the parent block.

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`parentHash`](../interfaces/BlockParams.md#parenthash)

***

### prevRandao

> `readonly` **prevRandao**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:374

The latest RANDAO mix of the post beacon state of
 the previous block.

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`prevRandao`](../interfaces/BlockParams.md#prevrandao)

***

### provider

> `readonly` **provider**: [`Provider`](../interfaces/Provider.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:294

The provider connected to the block used to fetch additional details
 if necessary.

***

### receiptsRoot

> `readonly` **receiptsRoot**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:354

The hash of the transaction receipts trie.

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`receiptsRoot`](../interfaces/BlockParams.md#receiptsroot)

***

### stateRoot

> `readonly` **stateRoot**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:350

The root hash for the global state after applying changes
 in this block.

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`stateRoot`](../interfaces/BlockParams.md#stateroot)

***

### timestamp

> `readonly` **timestamp**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:311

The timestamp for this block, which is the number of seconds since
 epoch that this block was included.

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`timestamp`](../interfaces/BlockParams.md#timestamp)

## Accessors

### date

#### Get Signature

> **get** **date**(): `Date` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:420

The [[link-js-date]] this block was included at.

##### Returns

`Date` \| `null`

***

### length

#### Get Signature

> **get** **length**(): `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:416

The number of transactions in this block.

##### Returns

`number`

***

### prefetchedTransactions

#### Get Signature

> **get** **prefetchedTransactions**(): [`TransactionResponse`](TransactionResponse.md)[]

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:407

Returns the complete transactions, in the order they
 were executed within the block.

 This is only available for blocks which prefetched
 transactions, by passing ``true`` to %%prefetchTxs%%
 into [[Provider-getBlock]].

##### Returns

[`TransactionResponse`](TransactionResponse.md)[]

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

#### Implementation of

[`BlockParams`](../interfaces/BlockParams.md).[`transactions`](../interfaces/BlockParams.md#transactions)

## Methods

### \[iterator\]()

> **\[iterator\]**(): [`Iterator`](../interfaces/Iterator.md)\<`string`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:412

#### Returns

[`Iterator`](../interfaces/Iterator.md)\<`string`\>

#### Implementation of

[`Iterable`](../interfaces/Iterable.md).[`[iterator]`](../interfaces/Iterable.md#iterator)

***

### getPrefetchedTransaction()

> **getPrefetchedTransaction**(`indexOrHash`): [`TransactionResponse`](TransactionResponse.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:431

If a **Block** was fetched with a request to include the transactions
 this will allow synchronous access to those transactions.

 If the transactions were not prefetched, this will throw.

#### Parameters

##### indexOrHash

`string` \| `number`

#### Returns

[`TransactionResponse`](TransactionResponse.md)

***

### getTransaction()

> **getTransaction**(`indexOrHash`): `Promise`\<[`TransactionResponse`](TransactionResponse.md)\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:424

Get the transaction at %%indexe%% within this block.

#### Parameters

##### indexOrHash

`string` \| `number`

#### Returns

`Promise`\<[`TransactionResponse`](TransactionResponse.md)\>

***

### isLondon()

> **isLondon**(): `this is Block & { baseFeePerGas: bigint }`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:440

Returns true if this block is an [[link-eip-2930]] block.

#### Returns

`this is Block & { baseFeePerGas: bigint }`

***

### isMined()

> **isMined**(): `this is MinedBlock`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:436

Returns true if this block been mined. This provides a type guard
 for all properties on a [[MinedBlock]].

#### Returns

`this is MinedBlock`

***

### orphanedEvent()

> **orphanedEvent**(): [`OrphanFilter`](../type-aliases/OrphanFilter.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:446

@_ignore:

#### Returns

[`OrphanFilter`](../type-aliases/OrphanFilter.md)

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:411

Returns a JSON-friendly value.

#### Returns

`any`
