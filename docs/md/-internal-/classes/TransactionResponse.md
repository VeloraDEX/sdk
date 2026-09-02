[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionResponse

# Class: TransactionResponse

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:711

A **TransactionResponse** includes all properties about a transaction
 that was sent to the network, which may or may not be included in a
 block.

 The [[TransactionResponse-isMined]] can be used to check if the
 transaction has been mined as well as type guard that the otherwise
 possibly ``null`` properties are defined.

## Extended by

- [`ContractTransactionResponse`](ContractTransactionResponse.md)
- [`MinedTransactionResponse`](../interfaces/MinedTransactionResponse.md)

## Implements

- [`TransactionLike`](../interfaces/TransactionLike.md)\<`string`\>
- [`TransactionResponseParams`](../interfaces/TransactionResponseParams.md)

## Constructors

### Constructor

> **new TransactionResponse**(`tx`, `provider`): `TransactionResponse`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:830

@_ignore:

#### Parameters

##### tx

[`TransactionResponseParams`](../interfaces/TransactionResponseParams.md)

##### provider

[`Provider`](../interfaces/Provider.md)

#### Returns

`TransactionResponse`

## Properties

### accessList

> `readonly` **accessList**: [`AccessList`](../type-aliases/AccessList-1.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:822

The [[link-eip-2930]] access list for transaction types that
 support it, otherwise ``null``.

#### Implementation of

[`TransactionResponseParams`](../interfaces/TransactionResponseParams.md).[`accessList`](../interfaces/TransactionResponseParams.md#accesslist)

***

### blobVersionedHashes

> `readonly` **blobVersionedHashes**: `string`[] \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:826

The [[link-eip-4844]] BLOb versioned hashes.

#### Implementation of

[`TransactionResponseParams`](../interfaces/TransactionResponseParams.md).[`blobVersionedHashes`](../interfaces/TransactionResponseParams.md#blobversionedhashes)

***

### blockHash

> `readonly` **blockHash**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:729

The blockHash of the block that this transaction was included in.

 This is ``null`` for pending transactions.

#### Implementation of

[`TransactionResponseParams`](../interfaces/TransactionResponseParams.md).[`blockHash`](../interfaces/TransactionResponseParams.md#blockhash)

***

### blockNumber

> `readonly` **blockNumber**: `number` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:723

The block number of the block that this transaction was included in.

 This is ``null`` for pending transactions.

#### Implementation of

[`TransactionResponseParams`](../interfaces/TransactionResponseParams.md).[`blockNumber`](../interfaces/TransactionResponseParams.md#blocknumber)

***

### chainId

> `readonly` **chainId**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:813

The chain ID.

#### Implementation of

[`TransactionResponseParams`](../interfaces/TransactionResponseParams.md).[`chainId`](../interfaces/TransactionResponseParams.md#chainid)

***

### data

> `readonly` **data**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:804

The data.

#### Implementation of

[`TransactionResponseParams`](../interfaces/TransactionResponseParams.md).[`data`](../interfaces/TransactionResponseParams.md#data)

***

### from

> `readonly` **from**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:757

The sender of this transaction. It is implicitly computed
 from the transaction pre-image hash (as the digest) and the
 [[signature]] using ecrecover.

#### Implementation of

[`TransactionResponseParams`](../interfaces/TransactionResponseParams.md).[`from`](../interfaces/TransactionResponseParams.md#from)

***

### gasLimit

> `readonly` **gasLimit**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:772

The maximum units of gas this transaction can consume. If execution
 exceeds this, the entries transaction is reverted and the sender
 is charged for the full amount, despite not state changes being made.

#### Implementation of

[`TransactionResponseParams`](../interfaces/TransactionResponseParams.md).[`gasLimit`](../interfaces/TransactionResponseParams.md#gaslimit)

***

### gasPrice

> `readonly` **gasPrice**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:785

The gas price can have various values, depending on the network.

 In modern networks, for transactions that are included this is
 the //effective gas price// (the fee per gas that was actually
 charged), while for transactions that have not been included yet
 is the [[maxFeePerGas]].

 For legacy transactions, or transactions on legacy networks, this
 is the fee that will be charged per unit of gas the transaction
 consumes.

#### Implementation of

[`TransactionResponseParams`](../interfaces/TransactionResponseParams.md).[`gasPrice`](../interfaces/TransactionResponseParams.md#gasprice)

***

### hash

> `readonly` **hash**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:737

The transaction hash.

#### Implementation of

[`TransactionResponseParams`](../interfaces/TransactionResponseParams.md).[`hash`](../interfaces/TransactionResponseParams.md#hash)

***

### index

> `readonly` **index**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:733

The index within the block that this transaction resides at.

#### Implementation of

[`TransactionResponseParams`](../interfaces/TransactionResponseParams.md).[`index`](../interfaces/TransactionResponseParams.md#index)

***

### maxFeePerBlobGas

> `readonly` **maxFeePerBlobGas**: `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:800

The [[link-eip-4844]] max fee per BLOb gas.

#### Implementation of

[`TransactionResponseParams`](../interfaces/TransactionResponseParams.md).[`maxFeePerBlobGas`](../interfaces/TransactionResponseParams.md#maxfeeperblobgas)

***

### maxFeePerGas

> `readonly` **maxFeePerGas**: `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:796

The maximum fee (per unit of gas) to allow this transaction
 to charge the sender.

#### Implementation of

[`TransactionResponseParams`](../interfaces/TransactionResponseParams.md).[`maxFeePerGas`](../interfaces/TransactionResponseParams.md#maxfeepergas)

***

### maxPriorityFeePerGas

> `readonly` **maxPriorityFeePerGas**: `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:791

The maximum priority fee (per unit of gas) to allow a
 validator to charge the sender. This is inclusive of the
 [[maxFeeFeePerGas]].

#### Implementation of

[`TransactionResponseParams`](../interfaces/TransactionResponseParams.md).[`maxPriorityFeePerGas`](../interfaces/TransactionResponseParams.md#maxpriorityfeepergas)

***

### nonce

> `readonly` **nonce**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:766

The nonce, which is used to prevent replay attacks and offer
 a method to ensure transactions from a given sender are explicitly
 ordered.

 When sending a transaction, this must be equal to the number of
 transactions ever sent by [[from]].

#### Implementation of

[`TransactionResponseParams`](../interfaces/TransactionResponseParams.md).[`nonce`](../interfaces/TransactionResponseParams.md#nonce)

***

### provider

> `readonly` **provider**: [`Provider`](../interfaces/Provider.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:717

The provider this is connected to, which will influence how its
 methods will resolve its async inspection methods.

***

### signature

> `readonly` **signature**: [`Signature`](Signature.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:817

The signature.

#### Implementation of

[`TransactionResponseParams`](../interfaces/TransactionResponseParams.md).[`signature`](../interfaces/TransactionResponseParams.md#signature)

***

### to

> `readonly` **to**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:751

The receiver of this transaction.

 If ``null``, then the transaction is an initcode transaction.
 This means the result of executing the [[data]] will be deployed
 as a new contract on chain (assuming it does not revert) and the
 address may be computed using [[getCreateAddress]].

#### Implementation of

[`TransactionResponseParams`](../interfaces/TransactionResponseParams.md).[`to`](../interfaces/TransactionResponseParams.md#to)

***

### type

> `readonly` **type**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:742

The [[link-eip-2718]] transaction envelope type. This is
 ``0`` for legacy transactions types.

#### Implementation of

[`TransactionResponseParams`](../interfaces/TransactionResponseParams.md).[`type`](../interfaces/TransactionResponseParams.md#type)

***

### value

> `readonly` **value**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:809

The value, in wei. Use [[formatEther]] to format this value
 as ether.

#### Implementation of

[`TransactionResponseParams`](../interfaces/TransactionResponseParams.md).[`value`](../interfaces/TransactionResponseParams.md#value)

## Methods

### confirmations()

> **confirmations**(): `Promise`\<`number`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:850

Resolve to the number of confirmations this transaction has.

#### Returns

`Promise`\<`number`\>

***

### getBlock()

> **getBlock**(): `Promise`\<[`Block`](Block.md) \| `null`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:840

Resolves to the Block that this transaction was included in.

 This will return null if the transaction has not been included yet.

#### Returns

`Promise`\<[`Block`](Block.md) \| `null`\>

***

### getTransaction()

> **getTransaction**(): `Promise`\<`TransactionResponse` \| `null`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:846

Resolves to this transaction being re-requested from the
 provider. This can be used if you have an unmined transaction
 and wish to get an up-to-date populated instance.

#### Returns

`Promise`\<`TransactionResponse` \| `null`\>

***

### isBerlin()

> **isBerlin**(): `this is TransactionResponse & { accessList: AccessList; maxFeePerGas: null; maxPriorityFeePerGas: null }`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:892

Returns true if the transaction is a Berlin (i.e. ``type == 1``)
 transaction. See [[link-eip-2070]].

 This provides a Type Guard that this transaction will have
 the ``null``-ness for hardfork-specific properties set correctly.

#### Returns

`this is TransactionResponse & { accessList: AccessList; maxFeePerGas: null; maxPriorityFeePerGas: null }`

***

### isCancun()

> **isCancun**(): `this is TransactionResponse & { accessList: AccessList; blobVersionedHashes: string[]; maxFeePerBlobGas: bigint; maxFeePerGas: bigint; maxPriorityFeePerGas: bigint }`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:913

Returns true if hte transaction is a Cancun (i.e. ``type == 3``)
 transaction. See [[link-eip-4844]].

#### Returns

`this is TransactionResponse & { accessList: AccessList; blobVersionedHashes: string[]; maxFeePerBlobGas: bigint; maxFeePerGas: bigint; maxPriorityFeePerGas: bigint }`

***

### isLegacy()

> **isLegacy**(): `this is TransactionResponse & { accessList: null; maxFeePerGas: null; maxPriorityFeePerGas: null }`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:880

Returns true if the transaction is a legacy (i.e. ``type == 0``)
 transaction.

 This provides a Type Guard that this transaction will have
 the ``null``-ness for hardfork-specific properties set correctly.

#### Returns

`this is TransactionResponse & { accessList: null; maxFeePerGas: null; maxPriorityFeePerGas: null }`

***

### isLondon()

> **isLondon**(): `this is TransactionResponse & { accessList: AccessList; maxFeePerGas: bigint; maxPriorityFeePerGas: bigint }`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:904

Returns true if the transaction is a London (i.e. ``type == 2``)
 transaction. See [[link-eip-1559]].

 This provides a Type Guard that this transaction will have
 the ``null``-ness for hardfork-specific properties set correctly.

#### Returns

`this is TransactionResponse & { accessList: AccessList; maxFeePerGas: bigint; maxPriorityFeePerGas: bigint }`

***

### isMined()

> **isMined**(): `this is MinedTransactionResponse`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:872

Returns ``true`` if this transaction has been included.

 This is effective only as of the time the TransactionResponse
 was instantiated. To get up-to-date information, use
 [[getTransaction]].

 This provides a Type Guard that this transaction will have
 non-null property values for properties that are null for
 unmined transactions.

#### Returns

`this is MinedTransactionResponse`

***

### removedEvent()

> **removedEvent**(): [`OrphanFilter`](../type-aliases/OrphanFilter.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:924

Returns a filter which can be used to listen for orphan events
 that evict this transaction.

#### Returns

[`OrphanFilter`](../type-aliases/OrphanFilter.md)

***

### reorderedEvent()

> **reorderedEvent**(`other?`): [`OrphanFilter`](../type-aliases/OrphanFilter.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:929

Returns a filter which can be used to listen for orphan events
 that re-order this event against %%other%%.

#### Parameters

##### other?

`TransactionResponse`

#### Returns

[`OrphanFilter`](../type-aliases/OrphanFilter.md)

***

### replaceableTransaction()

> **replaceableTransaction**(`startBlock`): `TransactionResponse`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:939

Returns a new TransactionResponse instance which has the ability to
 detect (and throw an error) if the transaction is replaced, which
 will begin scanning at %%startBlock%%.

 This should generally not be used by developers and is intended
 primarily for internal use. Setting an incorrect %%startBlock%% can
 have devastating performance consequences if used incorrectly.

#### Parameters

##### startBlock

`number`

#### Returns

`TransactionResponse`

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:834

Returns a JSON-compatible representation of this transaction.

#### Returns

`any`

***

### wait()

> **wait**(`_confirms?`, `_timeout?`): `Promise`\<[`TransactionReceipt`](TransactionReceipt.md) \| `null`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:860

Resolves once this transaction has been mined and has
 %%confirms%% blocks including it (default: ``1``) with an
 optional %%timeout%%.

 This can resolve to ``null`` only if %%confirms%% is ``0``
 and the transaction has not been mined, otherwise this will
 wait until enough confirmations have completed.

#### Parameters

##### \_confirms?

`number`

##### \_timeout?

`number`

#### Returns

`Promise`\<[`TransactionReceipt`](TransactionReceipt.md) \| `null`\>
