[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / MinedTransactionResponse

# Interface: MinedTransactionResponse

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:688

A **MinedTransactionResponse** is an interface representing a
 transaction which has been mined and allows for a type guard for its
 property values being defined.

## Extends

- [`TransactionResponse`](../classes/TransactionResponse.md)

## Properties

### accessList

> `readonly` **accessList**: [`AccessList`](../type-aliases/AccessList-1.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:822

The [[link-eip-2930]] access list for transaction types that
 support it, otherwise ``null``.

#### Inherited from

[`TransactionResponse`](../classes/TransactionResponse.md).[`accessList`](../classes/TransactionResponse.md#accesslist)

***

### blobVersionedHashes

> `readonly` **blobVersionedHashes**: `string`[] \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:826

The [[link-eip-4844]] BLOb versioned hashes.

#### Inherited from

[`TransactionResponse`](../classes/TransactionResponse.md).[`blobVersionedHashes`](../classes/TransactionResponse.md#blobversionedhashes)

***

### blockHash

> **blockHash**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:696

The block hash this transaction occurred in.

#### Overrides

[`TransactionResponse`](../classes/TransactionResponse.md).[`blockHash`](../classes/TransactionResponse.md#blockhash)

***

### blockNumber

> **blockNumber**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:692

The block number this transaction occurred in.

#### Overrides

[`TransactionResponse`](../classes/TransactionResponse.md).[`blockNumber`](../classes/TransactionResponse.md#blocknumber)

***

### chainId

> `readonly` **chainId**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:813

The chain ID.

#### Inherited from

[`TransactionResponse`](../classes/TransactionResponse.md).[`chainId`](../classes/TransactionResponse.md#chainid)

***

### data

> `readonly` **data**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:804

The data.

#### Inherited from

[`TransactionResponse`](../classes/TransactionResponse.md).[`data`](../classes/TransactionResponse.md#data)

***

### date

> **date**: `Date`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:700

The date this transaction occurred on.

***

### from

> `readonly` **from**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:757

The sender of this transaction. It is implicitly computed
 from the transaction pre-image hash (as the digest) and the
 [[signature]] using ecrecover.

#### Inherited from

[`TransactionResponse`](../classes/TransactionResponse.md).[`from`](../classes/TransactionResponse.md#from)

***

### gasLimit

> `readonly` **gasLimit**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:772

The maximum units of gas this transaction can consume. If execution
 exceeds this, the entries transaction is reverted and the sender
 is charged for the full amount, despite not state changes being made.

#### Inherited from

[`TransactionResponse`](../classes/TransactionResponse.md).[`gasLimit`](../classes/TransactionResponse.md#gaslimit)

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

[`TransactionResponse`](../classes/TransactionResponse.md).[`gasPrice`](../classes/TransactionResponse.md#gasprice)

***

### hash

> `readonly` **hash**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:737

The transaction hash.

#### Inherited from

[`TransactionResponse`](../classes/TransactionResponse.md).[`hash`](../classes/TransactionResponse.md#hash)

***

### index

> `readonly` **index**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:733

The index within the block that this transaction resides at.

#### Inherited from

[`TransactionResponse`](../classes/TransactionResponse.md).[`index`](../classes/TransactionResponse.md#index)

***

### maxFeePerBlobGas

> `readonly` **maxFeePerBlobGas**: `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:800

The [[link-eip-4844]] max fee per BLOb gas.

#### Inherited from

[`TransactionResponse`](../classes/TransactionResponse.md).[`maxFeePerBlobGas`](../classes/TransactionResponse.md#maxfeeperblobgas)

***

### maxFeePerGas

> `readonly` **maxFeePerGas**: `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:796

The maximum fee (per unit of gas) to allow this transaction
 to charge the sender.

#### Inherited from

[`TransactionResponse`](../classes/TransactionResponse.md).[`maxFeePerGas`](../classes/TransactionResponse.md#maxfeepergas)

***

### maxPriorityFeePerGas

> `readonly` **maxPriorityFeePerGas**: `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:791

The maximum priority fee (per unit of gas) to allow a
 validator to charge the sender. This is inclusive of the
 [[maxFeeFeePerGas]].

#### Inherited from

[`TransactionResponse`](../classes/TransactionResponse.md).[`maxPriorityFeePerGas`](../classes/TransactionResponse.md#maxpriorityfeepergas)

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

[`TransactionResponse`](../classes/TransactionResponse.md).[`nonce`](../classes/TransactionResponse.md#nonce)

***

### provider

> `readonly` **provider**: [`Provider`](Provider.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:717

The provider this is connected to, which will influence how its
 methods will resolve its async inspection methods.

#### Inherited from

[`TransactionResponse`](../classes/TransactionResponse.md).[`provider`](../classes/TransactionResponse.md#provider)

***

### signature

> `readonly` **signature**: [`Signature`](../classes/Signature.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:817

The signature.

#### Inherited from

[`TransactionResponse`](../classes/TransactionResponse.md).[`signature`](../classes/TransactionResponse.md#signature)

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

[`TransactionResponse`](../classes/TransactionResponse.md).[`to`](../classes/TransactionResponse.md#to)

***

### type

> `readonly` **type**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:742

The [[link-eip-2718]] transaction envelope type. This is
 ``0`` for legacy transactions types.

#### Inherited from

[`TransactionResponse`](../classes/TransactionResponse.md).[`type`](../classes/TransactionResponse.md#type)

***

### value

> `readonly` **value**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:809

The value, in wei. Use [[formatEther]] to format this value
 as ether.

#### Inherited from

[`TransactionResponse`](../classes/TransactionResponse.md).[`value`](../classes/TransactionResponse.md#value)

## Methods

### confirmations()

> **confirmations**(): `Promise`\<`number`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:850

Resolve to the number of confirmations this transaction has.

#### Returns

`Promise`\<`number`\>

#### Inherited from

[`TransactionResponse`](../classes/TransactionResponse.md).[`confirmations`](../classes/TransactionResponse.md#confirmations)

***

### getBlock()

> **getBlock**(): `Promise`\<[`Block`](../classes/Block.md) \| `null`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:840

Resolves to the Block that this transaction was included in.

 This will return null if the transaction has not been included yet.

#### Returns

`Promise`\<[`Block`](../classes/Block.md) \| `null`\>

#### Inherited from

[`TransactionResponse`](../classes/TransactionResponse.md).[`getBlock`](../classes/TransactionResponse.md#getblock)

***

### getTransaction()

> **getTransaction**(): `Promise`\<[`TransactionResponse`](../classes/TransactionResponse.md) \| `null`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:846

Resolves to this transaction being re-requested from the
 provider. This can be used if you have an unmined transaction
 and wish to get an up-to-date populated instance.

#### Returns

`Promise`\<[`TransactionResponse`](../classes/TransactionResponse.md) \| `null`\>

#### Inherited from

[`TransactionResponse`](../classes/TransactionResponse.md).[`getTransaction`](../classes/TransactionResponse.md#gettransaction)

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

[`TransactionResponse`](../classes/TransactionResponse.md).[`isBerlin`](../classes/TransactionResponse.md#isberlin)

***

### isCancun()

> **isCancun**(): `this is TransactionResponse & { accessList: AccessList; blobVersionedHashes: string[]; maxFeePerBlobGas: bigint; maxFeePerGas: bigint; maxPriorityFeePerGas: bigint }`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:913

Returns true if hte transaction is a Cancun (i.e. ``type == 3``)
 transaction. See [[link-eip-4844]].

#### Returns

`this is TransactionResponse & { accessList: AccessList; blobVersionedHashes: string[]; maxFeePerBlobGas: bigint; maxFeePerGas: bigint; maxPriorityFeePerGas: bigint }`

#### Inherited from

[`TransactionResponse`](../classes/TransactionResponse.md).[`isCancun`](../classes/TransactionResponse.md#iscancun)

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

[`TransactionResponse`](../classes/TransactionResponse.md).[`isLegacy`](../classes/TransactionResponse.md#islegacy)

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

[`TransactionResponse`](../classes/TransactionResponse.md).[`isLondon`](../classes/TransactionResponse.md#islondon)

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

[`TransactionResponse`](../classes/TransactionResponse.md).[`isMined`](../classes/TransactionResponse.md#ismined)

***

### removedEvent()

> **removedEvent**(): [`OrphanFilter`](../type-aliases/OrphanFilter.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:924

Returns a filter which can be used to listen for orphan events
 that evict this transaction.

#### Returns

[`OrphanFilter`](../type-aliases/OrphanFilter.md)

#### Inherited from

[`TransactionResponse`](../classes/TransactionResponse.md).[`removedEvent`](../classes/TransactionResponse.md#removedevent)

***

### reorderedEvent()

> **reorderedEvent**(`other?`): [`OrphanFilter`](../type-aliases/OrphanFilter.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:929

Returns a filter which can be used to listen for orphan events
 that re-order this event against %%other%%.

#### Parameters

##### other?

[`TransactionResponse`](../classes/TransactionResponse.md)

#### Returns

[`OrphanFilter`](../type-aliases/OrphanFilter.md)

#### Inherited from

[`TransactionResponse`](../classes/TransactionResponse.md).[`reorderedEvent`](../classes/TransactionResponse.md#reorderedevent)

***

### replaceableTransaction()

> **replaceableTransaction**(`startBlock`): [`TransactionResponse`](../classes/TransactionResponse.md)

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

[`TransactionResponse`](../classes/TransactionResponse.md)

#### Inherited from

[`TransactionResponse`](../classes/TransactionResponse.md).[`replaceableTransaction`](../classes/TransactionResponse.md#replaceabletransaction)

***

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:834

Returns a JSON-compatible representation of this transaction.

#### Returns

`any`

#### Inherited from

[`TransactionResponse`](../classes/TransactionResponse.md).[`toJSON`](../classes/TransactionResponse.md#tojson)

***

### wait()

> **wait**(`_confirms?`, `_timeout?`): `Promise`\<[`TransactionReceipt`](../classes/TransactionReceipt.md) \| `null`\>

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

`Promise`\<[`TransactionReceipt`](../classes/TransactionReceipt.md) \| `null`\>

#### Inherited from

[`TransactionResponse`](../classes/TransactionResponse.md).[`wait`](../classes/TransactionResponse.md#wait)
