[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SendTransactionOptions

# Interface: SendTransactionOptions\<ResolveType\>

Defined in: node\_modules/.pnpm/web3-eth@4.10.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth/lib/commonjs/types.d.ts:19

## Type Parameters

### ResolveType

`ResolveType` = [`TransactionReceipt`](../type-aliases/TransactionReceipt.md)

## Properties

### checkRevertBeforeSending?

> `optional` **checkRevertBeforeSending?**: `boolean`

Defined in: node\_modules/.pnpm/web3-eth@4.10.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth/lib/commonjs/types.d.ts:23

***

### contractAbi?

> `optional` **contractAbi?**: [`ContractAbi`](../type-aliases/ContractAbi.md)

Defined in: node\_modules/.pnpm/web3-eth@4.10.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth/lib/commonjs/types.d.ts:22

***

### ignoreFillingGasLimit?

> `optional` **ignoreFillingGasLimit?**: `boolean`

Defined in: node\_modules/.pnpm/web3-eth@4.10.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth/lib/commonjs/types.d.ts:24

***

### ignoreGasPricing?

> `optional` **ignoreGasPricing?**: `boolean`

Defined in: node\_modules/.pnpm/web3-eth@4.10.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth/lib/commonjs/types.d.ts:20

***

### transactionResolver?

> `optional` **transactionResolver?**: (`receipt`) => `ResolveType`

Defined in: node\_modules/.pnpm/web3-eth@4.10.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth/lib/commonjs/types.d.ts:21

#### Parameters

##### receipt

[`TransactionReceipt`](../type-aliases/TransactionReceipt.md)

#### Returns

`ResolveType`
