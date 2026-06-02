[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / EstimateGasParameters

# Type Alias: EstimateGasParameters\<chain\>

> **EstimateGasParameters**\<`chain`\>: [`UnionOmit`](UnionOmit.md)\<[`FormattedEstimateGas`](FormattedEstimateGas.md)\<`chain`\>, `"from"`\> & `object` & `object` \| `object`

## Type declaration

### account?

> `optional` **account**: [`Account`](Account.md) \| [`Address`](Address.md)

### prepare?

> `optional` **prepare**: `boolean` \| readonly [`PrepareTransactionRequestParameterType`](PrepareTransactionRequestParameterType.md)[]

### stateOverride?

> `optional` **stateOverride**: [`StateOverride`](StateOverride.md)

## Type Parameters

• **chain** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

## Defined in

node\_modules/.pnpm/viem@2.39.0\_typescript@5.6.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/estimateGas.d.ts:17
