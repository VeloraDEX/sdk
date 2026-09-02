[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Overrides

# Interface: Overrides

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/types.d.ts:63

The overrides for a contract transaction.

## Extends

- [`Omit`](../type-aliases/Omit.md)\<[`TransactionRequest`](TransactionRequest.md), `"to"` \| `"data"`\>

## Properties

### accessList?

> `optional` **accessList?**: [`AccessListish`](../type-aliases/AccessListish-1.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:125

The [[link-eip-2930]] access list. Storage slots included in the access
 list are //warmed// by pre-loading them, so their initial cost to
 fetch is guaranteed, but then each additional access is cheaper.

#### Inherited from

[`TransactionRequest`](TransactionRequest.md).[`accessList`](TransactionRequest.md#accesslist)

***

### blobs?

> `optional` **blobs?**: [`BlobLike`](../type-aliases/BlobLike.md)[] \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:158

Any blobs to include in the transaction (see [[link-eip-4844]]).

#### Inherited from

[`TransactionRequest`](TransactionRequest.md).[`blobs`](TransactionRequest.md#blobs)

***

### blobVersionedHashes?

> `optional` **blobVersionedHashes?**: `string`[] \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:150

The blob versioned hashes (see [[link-eip-4844]]).

#### Inherited from

[`TransactionRequest`](TransactionRequest.md).[`blobVersionedHashes`](TransactionRequest.md#blobversionedhashes)

***

### blockTag?

> `optional` **blockTag?**: [`BlockTag`](../type-aliases/BlockTag-1.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:136

When using ``call`` or ``estimateGas``, this allows a specific
 block to be queried. Many backends do not support this and when
 unsupported errors are silently squelched and ``"latest"`` is used.

#### Inherited from

[`TransactionRequest`](TransactionRequest.md).[`blockTag`](TransactionRequest.md#blocktag)

***

### chainId?

> `optional` **chainId?**: [`BigNumberish`](../type-aliases/BigNumberish-1.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:119

The chain ID for the network this transaction is valid on.

#### Inherited from

[`TransactionRequest`](TransactionRequest.md).[`chainId`](TransactionRequest.md#chainid)

***

### customData?

> `optional` **customData?**: `any`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:130

A custom object, which can be passed along for network-specific
 values.

#### Inherited from

[`TransactionRequest`](TransactionRequest.md).[`customData`](TransactionRequest.md#customdata)

***

### enableCcipRead?

> `optional` **enableCcipRead?**: `boolean`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:146

When using ``call``, this enables CCIP-read, which permits the
 provider to be redirected to web-based content during execution,
 which is then further validated by the contract.

 There are potential security implications allowing CCIP-read, as
 it could be used to expose the IP address or user activity during
 the fetch to unexpected parties.

#### Inherited from

[`TransactionRequest`](TransactionRequest.md).[`enableCcipRead`](TransactionRequest.md#enableccipread)

***

### from?

> `optional` **from?**: [`AddressLike`](../type-aliases/AddressLike.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:83

The sender of the transaction.

#### Inherited from

[`TransactionRequest`](TransactionRequest.md).[`from`](TransactionRequest.md#from)

***

### gasLimit?

> `optional` **gasLimit?**: [`BigNumberish`](../type-aliases/BigNumberish-1.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:91

The maximum amount of gas to allow this transaction to consume.

#### Inherited from

[`TransactionRequest`](TransactionRequest.md).[`gasLimit`](TransactionRequest.md#gaslimit)

***

### gasPrice?

> `optional` **gasPrice?**: [`BigNumberish`](../type-aliases/BigNumberish-1.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:98

The gas price to use for legacy transactions or transactions on
 legacy networks.

 Most of the time the ``max*FeePerGas`` is preferred.

#### Inherited from

[`TransactionRequest`](TransactionRequest.md).[`gasPrice`](TransactionRequest.md#gasprice)

***

### kzg?

> `optional` **kzg?**: [`KzgLibrary`](KzgLibrary.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:166

An external library for computing the KZG commitments and
 proofs necessary for EIP-4844 transactions (see [[link-eip-4844]]).

 This is generally ``null``, unless you are creating BLOb
 transactions.

#### Inherited from

[`TransactionRequest`](TransactionRequest.md).[`kzg`](TransactionRequest.md#kzg)

***

### maxFeePerBlobGas?

> `optional` **maxFeePerBlobGas?**: [`BigNumberish`](../type-aliases/BigNumberish-1.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:154

The maximum fee per blob gas (see [[link-eip-4844]]).

#### Inherited from

[`TransactionRequest`](TransactionRequest.md).[`maxFeePerBlobGas`](TransactionRequest.md#maxfeeperblobgas)

***

### maxFeePerGas?

> `optional` **maxFeePerGas?**: [`BigNumberish`](../type-aliases/BigNumberish-1.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:107

The [[link-eip-1559]] maximum total fee to pay per gas. The actual
 value used is protocol enforced to be the block's base fee.

#### Inherited from

[`TransactionRequest`](TransactionRequest.md).[`maxFeePerGas`](TransactionRequest.md#maxfeepergas)

***

### maxPriorityFeePerGas?

> `optional` **maxPriorityFeePerGas?**: [`BigNumberish`](../type-aliases/BigNumberish-1.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:102

The [[link-eip-1559]] maximum priority fee to pay per gas.

#### Inherited from

[`TransactionRequest`](TransactionRequest.md).[`maxPriorityFeePerGas`](TransactionRequest.md#maxpriorityfeepergas)

***

### nonce?

> `optional` **nonce?**: `number` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:87

The nonce of the transaction, used to prevent replay attacks.

#### Inherited from

[`TransactionRequest`](TransactionRequest.md).[`nonce`](TransactionRequest.md#nonce)

***

### type?

> `optional` **type?**: `number` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:75

The transaction type.

#### Inherited from

[`TransactionRequest`](TransactionRequest.md).[`type`](TransactionRequest.md#type)

***

### value?

> `optional` **value?**: [`BigNumberish`](../type-aliases/BigNumberish-1.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:115

The transaction value (in wei).

#### Inherited from

[`TransactionRequest`](TransactionRequest.md).[`value`](TransactionRequest.md#value)
