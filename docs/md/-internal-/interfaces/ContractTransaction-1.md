[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractTransaction

# Interface: ContractTransaction

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/types.d.ts:41

When populating a transaction this type is returned.

## Extends

- [`PreparedTransactionRequest`](PreparedTransactionRequest.md)

## Properties

### accessList?

> `optional` **accessList?**: [`AccessList`](../type-aliases/AccessList-1.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:226

The [[link-eip-2930]] access list. Storage slots included in the access
 list are //warmed// by pre-loading them, so their initial cost to
 fetch is guaranteed, but then each additional access is cheaper.

#### Inherited from

[`PreparedTransactionRequest`](PreparedTransactionRequest.md).[`accessList`](PreparedTransactionRequest.md#accesslist)

***

### blockTag?

> `optional` **blockTag?**: [`BlockTag`](../type-aliases/BlockTag-1.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:237

When using ``call`` or ``estimateGas``, this allows a specific
 block to be queried. Many backends do not support this and when
 unsupported errors are silently squelched and ``"latest"`` is used.

#### Inherited from

[`PreparedTransactionRequest`](PreparedTransactionRequest.md).[`blockTag`](PreparedTransactionRequest.md#blocktag)

***

### chainId?

> `optional` **chainId?**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:220

The chain ID for the network this transaction is valid on.

#### Inherited from

[`PreparedTransactionRequest`](PreparedTransactionRequest.md).[`chainId`](PreparedTransactionRequest.md#chainid)

***

### customData?

> `optional` **customData?**: `any`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:231

A custom object, which can be passed along for network-specific
 values.

#### Inherited from

[`PreparedTransactionRequest`](PreparedTransactionRequest.md).[`customData`](PreparedTransactionRequest.md#customdata)

***

### data

> **data**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/types.d.ts:49

The transaction data.

#### Overrides

[`PreparedTransactionRequest`](PreparedTransactionRequest.md).[`data`](PreparedTransactionRequest.md#data)

***

### enableCcipRead?

> `optional` **enableCcipRead?**: `boolean`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:247

When using ``call``, this enables CCIP-read, which permits the
 provider to be redirected to web-based content during execution,
 which is then further validated by the contract.

 There are potential security implications allowing CCIP-read, as
 it could be used to expose the IP address or user activity during
 the fetch to unexpected parties.

#### Inherited from

[`PreparedTransactionRequest`](PreparedTransactionRequest.md).[`enableCcipRead`](PreparedTransactionRequest.md#enableccipread)

***

### from?

> `optional` **from?**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/types.d.ts:53

The from address, if any.

#### Overrides

[`PreparedTransactionRequest`](PreparedTransactionRequest.md).[`from`](PreparedTransactionRequest.md#from)

***

### gasLimit?

> `optional` **gasLimit?**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:192

The maximum amount of gas to allow this transaction to consime.

#### Inherited from

[`PreparedTransactionRequest`](PreparedTransactionRequest.md).[`gasLimit`](PreparedTransactionRequest.md#gaslimit)

***

### gasPrice?

> `optional` **gasPrice?**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:199

The gas price to use for legacy transactions or transactions on
 legacy networks.

 Most of the time the ``max*FeePerGas`` is preferred.

#### Inherited from

[`PreparedTransactionRequest`](PreparedTransactionRequest.md).[`gasPrice`](PreparedTransactionRequest.md#gasprice)

***

### maxFeePerGas?

> `optional` **maxFeePerGas?**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:208

The [[link-eip-1559]] maximum total fee to pay per gas. The actual
 value used is protocol enforced to be the block's base fee.

#### Inherited from

[`PreparedTransactionRequest`](PreparedTransactionRequest.md).[`maxFeePerGas`](PreparedTransactionRequest.md#maxfeepergas)

***

### maxPriorityFeePerGas?

> `optional` **maxPriorityFeePerGas?**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:203

The [[link-eip-1559]] maximum priority fee to pay per gas.

#### Inherited from

[`PreparedTransactionRequest`](PreparedTransactionRequest.md).[`maxPriorityFeePerGas`](PreparedTransactionRequest.md#maxpriorityfeepergas)

***

### nonce?

> `optional` **nonce?**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:188

The nonce of the transaction, used to prevent replay attacks.

#### Inherited from

[`PreparedTransactionRequest`](PreparedTransactionRequest.md).[`nonce`](PreparedTransactionRequest.md#nonce)

***

### to

> **to**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/types.d.ts:45

The target address.

#### Overrides

[`PreparedTransactionRequest`](PreparedTransactionRequest.md).[`to`](PreparedTransactionRequest.md#to)

***

### type?

> `optional` **type?**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:176

The transaction type.

#### Inherited from

[`PreparedTransactionRequest`](PreparedTransactionRequest.md).[`type`](PreparedTransactionRequest.md#type)

***

### value?

> `optional` **value?**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:216

The transaction value (in wei).

#### Inherited from

[`PreparedTransactionRequest`](PreparedTransactionRequest.md).[`value`](PreparedTransactionRequest.md#value)
