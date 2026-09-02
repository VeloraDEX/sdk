[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WrappedFallback

# Interface: WrappedFallback()

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/types.d.ts:165

A Fallback or Receive function on a Contract.

> **WrappedFallback**(`overrides?`): `Promise`\<[`ContractTransactionResponse`](../classes/ContractTransactionResponse.md)\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/types.d.ts:166

A Fallback or Receive function on a Contract.

## Parameters

### overrides?

[`Omit`](../type-aliases/Omit.md)\<[`TransactionRequest`](TransactionRequest.md), `"to"`\>

## Returns

`Promise`\<[`ContractTransactionResponse`](../classes/ContractTransactionResponse.md)\>

## Methods

### estimateGas()

> **estimateGas**(`overrides?`): `Promise`\<`bigint`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/types.d.ts:191

Estimate the gas to send a transaction to the contract fallback.

 For non-receive fallback, ``data`` may be overridden.

#### Parameters

##### overrides?

[`Omit`](../type-aliases/Omit.md)\<[`TransactionRequest`](TransactionRequest.md), `"to"`\>

#### Returns

`Promise`\<`bigint`\>

***

### populateTransaction()

> **populateTransaction**(`overrides?`): `Promise`\<[`ContractTransaction`](ContractTransaction-1.md)\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/types.d.ts:173

Returns a populated transaction that can be used to perform the
 fallback method.

 For non-receive fallback, ``data`` may be overridden.

#### Parameters

##### overrides?

[`Omit`](../type-aliases/Omit.md)\<[`TransactionRequest`](TransactionRequest.md), `"to"`\>

#### Returns

`Promise`\<[`ContractTransaction`](ContractTransaction-1.md)\>

***

### send()

> **send**(`overrides?`): `Promise`\<[`ContractTransactionResponse`](../classes/ContractTransactionResponse.md)\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/types.d.ts:185

Send a transaction to the contract fallback.

 For non-receive fallback, ``data`` may be overridden.

#### Parameters

##### overrides?

[`Omit`](../type-aliases/Omit.md)\<[`TransactionRequest`](TransactionRequest.md), `"to"`\>

#### Returns

`Promise`\<[`ContractTransactionResponse`](../classes/ContractTransactionResponse.md)\>

***

### staticCall()

> **staticCall**(`overrides?`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/contract/types.d.ts:179

Call the contract fallback and return the result.

 For non-receive fallback, ``data`` may be overridden.

#### Parameters

##### overrides?

[`Omit`](../type-aliases/Omit.md)\<[`TransactionRequest`](TransactionRequest.md), `"to"`\>

#### Returns

`Promise`\<`string`\>
