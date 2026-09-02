[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / EstimateGasParameters

# Type Alias: EstimateGasParameters\<chain\>

> **EstimateGasParameters**\<`chain`\> = [`UnionOmit`](UnionOmit.md)\<[`FormattedEstimateGas`](FormattedEstimateGas.md)\<`chain`\>, `"from"`\> & `object` & \{ `blockNumber?`: `bigint`; `blockTag?`: `undefined`; \} \| \{ `blockNumber?`: `undefined`; `blockTag?`: [`BlockTag`](BlockTag-2.md); \}

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/estimateGas.d.ts:17

## Type Declaration

### account?

> `optional` **account?**: [`Account`](Account.md) \| [`Address`](Address-1.md)

### prepare?

> `optional` **prepare?**: `boolean` \| readonly [`PrepareTransactionRequestParameterType`](PrepareTransactionRequestParameterType.md)[]

### stateOverride?

> `optional` **stateOverride?**: [`StateOverride`](StateOverride.md)

## Type Parameters

### chain

`chain` *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`
