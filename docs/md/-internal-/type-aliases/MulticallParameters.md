[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / MulticallParameters

# Type Alias: MulticallParameters\<contracts, allowFailure, options\>

> **MulticallParameters**\<`contracts`, `allowFailure`, `options`\> = [`Pick`](Pick.md)\<[`CallParameters`](CallParameters.md), `"authorizationList"` \| `"blockHash"` \| `"blockNumber"` \| `"blockOverrides"` \| `"blockTag"` \| `"requireCanonical"` \| `"stateOverride"`\> & `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/multicall.d.ts:15

## Type Declaration

### account?

> `optional` **account?**: [`Address`](Address-1.md)

The account to use for the multicall.

### allowFailure?

> `optional` **allowFailure?**: `allowFailure` \| `boolean`

Whether to allow failures.

### batchSize?

> `optional` **batchSize?**: `number`

The size of each batch of calls.

### contracts

> **contracts**: [`MulticallContracts`](MulticallContracts.md)\<[`Narrow`](Narrow.md)\<`contracts`\>, `object` & `options`\>

The contracts to call.

### deployless?

> `optional` **deployless?**: `boolean`

Enable deployless multicall.

### multicallAddress?

> `optional` **multicallAddress?**: [`Address`](Address-1.md)

The address of the multicall3 contract to use.

## Type Parameters

### contracts

`contracts` *extends* readonly `unknown`[] = readonly [`ContractFunctionParameters`](ContractFunctionParameters.md)[]

### allowFailure

`allowFailure` *extends* `boolean` = `true`

### options

`options` *extends* `object` = \{ \}
