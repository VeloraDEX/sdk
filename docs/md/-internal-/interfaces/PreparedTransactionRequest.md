[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / PreparedTransactionRequest

# Interface: PreparedTransactionRequest

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:172

A **PreparedTransactionRequest** is identical to a [[TransactionRequest]]
 except all the property types are strictly enforced.

## Extended by

- [`ContractTransaction`](ContractTransaction-1.md)

## Properties

### accessList?

> `optional` **accessList?**: [`AccessList`](../type-aliases/AccessList-1.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:226

The [[link-eip-2930]] access list. Storage slots included in the access
 list are //warmed// by pre-loading them, so their initial cost to
 fetch is guaranteed, but then each additional access is cheaper.

***

### blockTag?

> `optional` **blockTag?**: [`BlockTag`](../type-aliases/BlockTag-1.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:237

When using ``call`` or ``estimateGas``, this allows a specific
 block to be queried. Many backends do not support this and when
 unsupported errors are silently squelched and ``"latest"`` is used.

***

### chainId?

> `optional` **chainId?**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:220

The chain ID for the network this transaction is valid on.

***

### customData?

> `optional` **customData?**: `any`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:231

A custom object, which can be passed along for network-specific
 values.

***

### data?

> `optional` **data?**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:212

The transaction data.

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

***

### from?

> `optional` **from?**: [`AddressLike`](../type-aliases/AddressLike.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:184

The sender of the transaction.

***

### gasLimit?

> `optional` **gasLimit?**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:192

The maximum amount of gas to allow this transaction to consime.

***

### gasPrice?

> `optional` **gasPrice?**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:199

The gas price to use for legacy transactions or transactions on
 legacy networks.

 Most of the time the ``max*FeePerGas`` is preferred.

***

### maxFeePerGas?

> `optional` **maxFeePerGas?**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:208

The [[link-eip-1559]] maximum total fee to pay per gas. The actual
 value used is protocol enforced to be the block's base fee.

***

### maxPriorityFeePerGas?

> `optional` **maxPriorityFeePerGas?**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:203

The [[link-eip-1559]] maximum priority fee to pay per gas.

***

### nonce?

> `optional` **nonce?**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:188

The nonce of the transaction, used to prevent replay attacks.

***

### to?

> `optional` **to?**: [`AddressLike`](../type-aliases/AddressLike.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:180

The target of the transaction.

***

### type?

> `optional` **type?**: `number`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:176

The transaction type.

***

### value?

> `optional` **value?**: `bigint`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:216

The transaction value (in wei).
