[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / BuildTWAPSellDeltaOrderParams

# Type Alias: BuildTWAPSellDeltaOrderParams

> **BuildTWAPSellDeltaOrderParams**: [`BuildTWAPDeltaOrderBase`](../-internal-/type-aliases/BuildTWAPDeltaOrderBase.md) & `object`

## Type declaration

### onChainOrderType

> **onChainOrderType**: `"TWAPOrder"`

### totalSrcAmount

> **totalSrcAmount**: `string`

#### Description

Total source token amount across all slices. route.origin.input.amount must equal floor(totalSrcAmount / numSlices).

## Defined in

[src/methods/delta/buildTWAPDeltaOrder.ts:44](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildTWAPDeltaOrder.ts#L44)
