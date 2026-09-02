[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractTransactionResponse

# Class: ContractTransactionResponse

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/wrappers.d.ts:70

A **ContractTransactionResponse** will return a
 [[ContractTransactionReceipt]] when waited on.

## Extends

- [`TransactionResponse`](TransactionResponse.md)

## Constructors

### Constructor

> **new ContractTransactionResponse**(`iface`, `provider`, `tx`): `ContractTransactionResponse`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/wrappers.d.ts:75

@_ignore:

#### Parameters

##### iface

[`Interface`](Interface.md)

##### provider

[`Provider`](../interfaces/Provider.md)

##### tx

[`TransactionResponse`](TransactionResponse.md)

#### Returns

`ContractTransactionResponse`

#### Overrides

[`TransactionResponse`](TransactionResponse.md).[`constructor`](TransactionResponse.md#constructor)

## Properties

### accessList

> `readonly` **accessList**: [`AccessList`](../type-aliases/AccessList-1.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:822

The [[link-eip-2930]] access list for transaction types that
 support it, otherwise ``null``.

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`accessList`](TransactionResponse.md#accesslist)

***

### blobVersionedHashes

> `readonly` **blobVersionedHashes**: `string`[] \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:826

The [[link-eip-4844]] BLOb versioned hashes.

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`blobVersionedHashes`](TransactionResponse.md#blobversionedhashes)

***

### blockHash

> `readonly` **blockHash**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:729

The blockHash of the block that this transaction was included in.

 This is ``null`` for pending transactions.

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`blockHash`](TransactionResponse.md#blockhash)

***

### blockNumber

> `readonly` **blockNumber**: `number` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:723

The block number of the block that this transaction was included in.

 This is ``null`` for pending transactions.

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`blockNumber`](TransactionResponse.md#blocknumber)

***

### chainId

> `readonly` **chainId**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:813

The chain ID.

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`chainId`](TransactionResponse.md#chainid)

***

### data

> `readonly` **data**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:804

The data.

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`data`](TransactionResponse.md#data)

***

### from

> `readonly` **from**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:757

The sender of this transaction. It is implicitly computed
 from the transaction pre-image hash (as the digest) and the
 [[signature]] using ecrecover.

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`from`](TransactionResponse.md#from)

***

### gasLimit

> `readonly` **gasLimit**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:772

The maximum units of gas this transaction can consume. If execution
 exceeds this, the entries transaction is reverted and the sender
 is charged for the full amount, despite not state changes being made.

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`gasLimit`](TransactionResponse.md#gaslimit)

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

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`gasPrice`](TransactionResponse.md#gasprice)

***

### hash

> `readonly` **hash**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:737

The transaction hash.

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`hash`](TransactionResponse.md#hash)

***

### index

> `readonly` **index**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:733

The index within the block that this transaction resides at.

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`index`](TransactionResponse.md#index)

***

### maxFeePerBlobGas

> `readonly` **maxFeePerBlobGas**: `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:800

The [[link-eip-4844]] max fee per BLOb gas.

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`maxFeePerBlobGas`](TransactionResponse.md#maxfeeperblobgas)

***

### maxFeePerGas

> `readonly` **maxFeePerGas**: `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:796

The maximum fee (per unit of gas) to allow this transaction
 to charge the sender.

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`maxFeePerGas`](TransactionResponse.md#maxfeepergas)

***

### maxPriorityFeePerGas

> `readonly` **maxPriorityFeePerGas**: `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:791

The maximum priority fee (per unit of gas) to allow a
 validator to charge the sender. This is inclusive of the
 [[maxFeeFeePerGas]].

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`maxPriorityFeePerGas`](TransactionResponse.md#maxpriorityfeepergas)

***

### nonce

> `readonly` **nonce**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:766

The nonce, which is used to prevent replay attacks and offer
 a method to ensure transactions from a given sender are explicitly
 ordered.

 When sending a transaction, this must be equal to the number of
 transactions ever sent by [[from]].

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`nonce`](TransactionResponse.md#nonce)

***

### provider

> `readonly` **provider**: [`Provider`](../interfaces/Provider.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:717

The provider this is connected to, which will influence how its
 methods will resolve its async inspection methods.

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`provider`](TransactionResponse.md#provider)

***

### signature

> `readonly` **signature**: [`Signature`](Signature.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:817

The signature.

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`signature`](TransactionResponse.md#signature)

***

### to

> `readonly` **to**: `string` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:751

The receiver of this transaction.

 If ``null``, then the transaction is an initcode transaction.
 This means the result of executing the [[data]] will be deployed
 as a new contract on chain (assuming it does not revert) and the
 address may be computed using [[getCreateAddress]].

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`to`](TransactionResponse.md#to)

***

### type

> `readonly` **type**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:742

The [[link-eip-2718]] transaction envelope type. This is
 ``0`` for legacy transactions types.

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`type`](TransactionResponse.md#type)

***

### value

> `readonly` **value**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:809

The value, in wei. Use [[formatEther]] to format this value
 as ether.

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`value`](TransactionResponse.md#value)

## Methods

### confirmations()

> **confirmations**(): `Promise`\<`number`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:850

Resolve to the number of confirmations this transaction has.

#### Returns

`Promise`\<`number`\>

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`confirmations`](TransactionResponse.md#confirmations)

***

### getBlock()

> **getBlock**(): `Promise`\<[`Block`](Block.md) \| `null`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:840

Resolves to the Block that this transaction was included in.

 This will return null if the transaction has not been included yet.

#### Returns

`Promise`\<[`Block`](Block.md) \| `null`\>

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`getBlock`](TransactionResponse.md#getblock)

***

### getTransaction()

> **getTransaction**(): `Promise`\<[`TransactionResponse`](TransactionResponse.md) \| `null`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:846

Resolves to this transaction being re-requested from the
 provider. This can be used if you have an unmined transaction
 and wish to get an up-to-date populated instance.

#### Returns

`Promise`\<[`TransactionResponse`](TransactionResponse.md) \| `null`\>

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`getTransaction`](TransactionResponse.md#gettransaction)

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

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`isBerlin`](TransactionResponse.md#isberlin)

***

### isCancun()

> **isCancun**(): `this is TransactionResponse & { accessList: AccessList; blobVersionedHashes: string[]; maxFeePerBlobGas: bigint; maxFeePerGas: bigint; maxPriorityFeePerGas: bigint }`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:913

Returns true if hte transaction is a Cancun (i.e. ``type == 3``)
 transaction. See [[link-eip-4844]].

#### Returns

`this is TransactionResponse & { accessList: AccessList; blobVersionedHashes: string[]; maxFeePerBlobGas: bigint; maxFeePerGas: bigint; maxPriorityFeePerGas: bigint }`

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`isCancun`](TransactionResponse.md#iscancun)

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

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`isLegacy`](TransactionResponse.md#islegacy)

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

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`isLondon`](TransactionResponse.md#islondon)

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

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`isMined`](TransactionResponse.md#ismined)

***

### removedEvent()

> **removedEvent**(): [`OrphanFilter`](../type-aliases/OrphanFilter.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:924

Returns a filter which can be used to listen for orphan events
 that evict this transaction.

#### Returns

[`OrphanFilter`](../type-aliases/OrphanFilter.md)

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`removedEvent`](TransactionResponse.md#removedevent)

***

### reorderedEvent()

> **reorderedEvent**(`other?`): [`OrphanFilter`](../type-aliases/OrphanFilter.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:929

Returns a filter which can be used to listen for orphan events
 that re-order this event against %%other%%.

#### Parameters

##### other?

[`TransactionResponse`](TransactionResponse.md)

#### Returns

[`OrphanFilter`](../type-aliases/OrphanFilter.md)

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`reorderedEvent`](TransactionResponse.md#reorderedevent)

***

### replaceableTransaction()

> **replaceableTransaction**(`startBlock`): [`TransactionResponse`](TransactionResponse.md)

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

[`TransactionResponse`](TransactionResponse.md)

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`replaceableTransaction`](TransactionResponse.md#replaceabletransaction)

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:834

Returns a JSON-compatible representation of this transaction.

#### Returns

`any`

#### Inherited from

[`TransactionResponse`](TransactionResponse.md).[`toJSON`](TransactionResponse.md#tojson)

***

### wait()

> **wait**(`confirms?`, `timeout?`): `Promise`\<[`ContractTransactionReceipt`](ContractTransactionReceipt.md) \| `null`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/wrappers.d.ts:85

Resolves once this transaction has been mined and has
 %%confirms%% blocks including it (default: ``1``) with an
 optional %%timeout%%.

 This can resolve to ``null`` only if %%confirms%% is ``0``
 and the transaction has not been mined, otherwise this will
 wait until enough confirmations have completed.

#### Parameters

##### confirms?

`number`

##### timeout?

`number`

#### Returns

`Promise`\<[`ContractTransactionReceipt`](ContractTransactionReceipt.md) \| `null`\>

#### Overrides

[`TransactionResponse`](TransactionResponse.md).[`wait`](TransactionResponse.md#wait)
