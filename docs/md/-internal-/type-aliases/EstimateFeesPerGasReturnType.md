[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / EstimateFeesPerGasReturnType

# Type Alias: EstimateFeesPerGasReturnType\<type\>

> **EstimateFeesPerGasReturnType**\<`type`\> = `type` *extends* `"legacy"` ? [`FeeValuesLegacy`](FeeValuesLegacy.md) : `never` \| `type` *extends* `"eip1559"` ? [`FeeValuesEIP1559`](FeeValuesEIP1559.md) : `never`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/estimateFeesPerGas.d.ts:23

## Type Parameters

### type

`type` *extends* [`FeeValuesType`](FeeValuesType.md) = [`FeeValuesType`](FeeValuesType.md)
