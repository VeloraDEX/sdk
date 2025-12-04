[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / MulticallParameters

# Type Alias: MulticallParameters\<contracts, allowFailure, options\>

> **MulticallParameters**\<`contracts`, `allowFailure`, `options`\>: [`Pick`](Pick.md)\<[`CallParameters`](CallParameters.md), `"authorizationList"` \| `"blockNumber"` \| `"blockOverrides"` \| `"blockTag"` \| `"stateOverride"`\> & `object`

## Type declaration

### account?

> `optional` **account**: [`Address`](Address.md)

The account to use for the multicall.

### allowFailure?

> `optional` **allowFailure**: `allowFailure` \| `boolean`

Whether to allow failures.

### batchSize?

> `optional` **batchSize**: `number`

The size of each batch of calls.

### contracts

> **contracts**: [`MulticallContracts`](MulticallContracts.md)\<[`Narrow`](Narrow.md)\<`contracts`\>, `object` & `options`\>

The contracts to call.

### deployless?

> `optional` **deployless**: `boolean`

Enable deployless multicall.

### multicallAddress?

> `optional` **multicallAddress**: [`Address`](Address.md)

The address of the multicall3 contract to use.

## Type Parameters

• **contracts** *extends* readonly `unknown`[] = readonly [`ContractFunctionParameters`](ContractFunctionParameters.md)[]

• **allowFailure** *extends* `boolean` = `true`

• **options** *extends* `object` = `object`

## Defined in

node\_modules/viem/\_types/actions/public/multicall.d.ts:14
