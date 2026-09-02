[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / BaseContractMethod

# Interface: BaseContractMethod()\<A, R, D\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/types.d.ts:85

A Contract method can be called directly, or used in various ways.

## Extended by

- [`ContractMethod`](ContractMethod.md)

## Type Parameters

### A

`A` *extends* `any`[] = `any`[]

### R

`R` = `any`

### D

`D` *extends* `R` \| [`ContractTransactionResponse`](../classes/ContractTransactionResponse.md) = `R` \| [`ContractTransactionResponse`](../classes/ContractTransactionResponse.md)

> **BaseContractMethod**(...`args`): `Promise`\<`D`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/types.d.ts:86

A Contract method can be called directly, or used in various ways.

## Parameters

### args

...[`ContractMethodArgs`](../type-aliases/ContractMethodArgs.md)\<`A`\>

## Returns

`Promise`\<`D`\>

## Properties

### fragment

> **fragment**: [`FunctionFragment`](../classes/FunctionFragment.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/types.d.ts:95

The fragment of the Contract method. This will throw on ambiguous
 method names.

***

### name

> **name**: `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/types.d.ts:90

The name of the Contract method.

## Methods

### estimateGas()

> **estimateGas**(...`args`): `Promise`\<`bigint`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/types.d.ts:120

Estimate the gas to send the contract method with %%args%%.

#### Parameters

##### args

...[`ContractMethodArgs`](../type-aliases/ContractMethodArgs.md)\<`A`\>

#### Returns

`Promise`\<`bigint`\>

***

### getFragment()

> **getFragment**(...`args`): [`FunctionFragment`](../classes/FunctionFragment.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/types.d.ts:100

Returns the fragment constrained by %%args%%. This can be used to
 resolve ambiguous method names.

#### Parameters

##### args

...[`ContractMethodArgs`](../type-aliases/ContractMethodArgs.md)\<`A`\>

#### Returns

[`FunctionFragment`](../classes/FunctionFragment.md)

***

### populateTransaction()

> **populateTransaction**(...`args`): `Promise`\<[`ContractTransaction`](ContractTransaction-1.md)\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/types.d.ts:105

Returns a populated transaction that can be used to perform the
 contract method with %%args%%.

#### Parameters

##### args

...[`ContractMethodArgs`](../type-aliases/ContractMethodArgs.md)\<`A`\>

#### Returns

`Promise`\<[`ContractTransaction`](ContractTransaction-1.md)\>

***

### send()

> **send**(...`args`): `Promise`\<[`ContractTransactionResponse`](../classes/ContractTransactionResponse.md)\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/types.d.ts:116

Send a transaction for the contract method with %%args%%.

#### Parameters

##### args

...[`ContractMethodArgs`](../type-aliases/ContractMethodArgs.md)\<`A`\>

#### Returns

`Promise`\<[`ContractTransactionResponse`](../classes/ContractTransactionResponse.md)\>

***

### staticCall()

> **staticCall**(...`args`): `Promise`\<`R`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/types.d.ts:112

Call the contract method with %%args%% and return the value.

 If the return value is a single type, it will be dereferenced and
 returned directly, otherwise the full Result will be returned.

#### Parameters

##### args

...[`ContractMethodArgs`](../type-aliases/ContractMethodArgs.md)\<`A`\>

#### Returns

`Promise`\<`R`\>

***

### staticCallResult()

> **staticCallResult**(...`args`): `Promise`\<[`Result`](../classes/Result.md)\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/types.d.ts:125

Call the contract method with %%args%% and return the Result
 without any dereferencing.

#### Parameters

##### args

...[`ContractMethodArgs`](../type-aliases/ContractMethodArgs.md)\<`A`\>

#### Returns

`Promise`\<[`Result`](../classes/Result.md)\>
