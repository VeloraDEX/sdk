[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ContractRunner

# Interface: ContractRunner

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/contracts.d.ts:11

A **ContractRunner** is a generic interface which defines an object
 capable of interacting with a Contract on the network.

 The more operations supported, the more utility it is capable of.

 The most common ContractRunners are [Providers](Provider) which enable
 read-only access and [Signers](Signer) which enable write-access.

## Extended by

- [`Signer`](Signer.md)
- [`Provider`](Provider.md)

## Properties

### call?

> `optional` **call?**: (`tx`) => `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/contracts.d.ts:26

Required for pure, view or static calls to contracts.

#### Parameters

##### tx

[`TransactionRequest`](TransactionRequest.md)

#### Returns

`Promise`\<`string`\>

***

### estimateGas?

> `optional` **estimateGas?**: (`tx`) => `Promise`\<`bigint`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/contracts.d.ts:22

Required to estimate gas.

#### Parameters

##### tx

[`TransactionRequest`](TransactionRequest.md)

#### Returns

`Promise`\<`bigint`\>

***

### provider

> **provider**: [`Provider`](Provider.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/contracts.d.ts:18

The provider used for necessary state querying operations.

 This can also point to the **ContractRunner** itself, in the
 case of an [[AbstractProvider]].

***

### resolveName?

> `optional` **resolveName?**: (`name`) => `Promise`\<`string` \| `null`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/contracts.d.ts:30

Required to support ENS names

#### Parameters

##### name

`string`

#### Returns

`Promise`\<`string` \| `null`\>

***

### sendTransaction?

> `optional` **sendTransaction?**: (`tx`) => `Promise`\<[`TransactionResponse`](../classes/TransactionResponse.md)\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/contracts.d.ts:34

Required for state mutating calls

#### Parameters

##### tx

[`TransactionRequest`](TransactionRequest.md)

#### Returns

`Promise`\<[`TransactionResponse`](../classes/TransactionResponse.md)\>
