[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / BuildTWAPSellDeltaOrderParams

# Type Alias: BuildTWAPSellDeltaOrderParams

> **BuildTWAPSellDeltaOrderParams** = [`BuildTWAPDeltaOrderBase`](../-internal-/type-aliases/BuildTWAPDeltaOrderBase.md) & `object`

Defined in: [src/methods/delta/buildTWAPDeltaOrder.ts:45](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildTWAPDeltaOrder.ts#L45)

## Type Declaration

### onChainOrderType

> **onChainOrderType**: `"TWAPOrder"`

### totalSrcAmount

> **totalSrcAmount**: `string`

#### Description

Total source token amount across all slices. route.origin.input.amount must equal floor(totalSrcAmount / numSlices).
