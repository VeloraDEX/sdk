[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / FeeData

# Class: FeeData

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:26

A **FeeData** wraps all the fee-related values associated with
 the network.

## Constructors

### Constructor

> **new FeeData**(`gasPrice?`, `maxFeePerGas?`, `maxPriorityFeePerGas?`): `FeeData`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:58

Creates a new FeeData for %%gasPrice%%, %%maxFeePerGas%% and
 %%maxPriorityFeePerGas%%.

#### Parameters

##### gasPrice?

`bigint` \| `null`

##### maxFeePerGas?

`bigint` \| `null`

##### maxPriorityFeePerGas?

`bigint` \| `null`

#### Returns

`FeeData`

## Properties

### gasPrice

> `readonly` **gasPrice**: `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:30

The gas price for legacy networks.

***

### maxFeePerGas

> `readonly` **maxFeePerGas**: `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:43

The maximum fee to pay per gas.

 The base fee per gas is defined by the network and based on
 congestion, increasing the cost during times of heavy load
 and lowering when less busy.

 The actual fee per gas will be the base fee for the block
 and the priority fee, up to the max fee per gas.

 This will be ``null`` on legacy networks (i.e. [pre-EIP-1559](link-eip-1559))

***

### maxPriorityFeePerGas

> `readonly` **maxPriorityFeePerGas**: `bigint` \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:53

The additional amout to pay per gas to encourage a validator
 to include the transaction.

 The purpose of this is to compensate the validator for the
 adjusted risk for including a given transaction.

 This will be ``null`` on legacy networks (i.e. [pre-EIP-1559](link-eip-1559))

## Methods

### toJSON()

> **toJSON**(): `any`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/provider.d.ts:62

Returns a JSON-friendly value.

#### Returns

`any`
