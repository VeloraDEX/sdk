[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / BuildTWAPBuyDeltaOrderParams

# Type Alias: BuildTWAPBuyDeltaOrderParams

> **BuildTWAPBuyDeltaOrderParams** = [`BuildTWAPDeltaOrderBase`](../-internal-/type-aliases/BuildTWAPDeltaOrderBase.md) & `object`

Defined in: [src/methods/delta/buildTWAPDeltaOrder.ts:51](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildTWAPDeltaOrder.ts#L51)

## Type Declaration

### maxSrcAmount

> **maxSrcAmount**: `string`

#### Description

Maximum source token amount willing to spend across all slices.

### onChainOrderType

> **onChainOrderType**: `"TWAPBuyOrder"`

### totalDestAmount

> **totalDestAmount**: `string`

#### Description

Total destination token amount to buy across all slices. route.origin.output.amount must equal floor(totalDestAmount / numSlices).
