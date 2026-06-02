[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / BuildTWAPBuyOrderParams

# Type Alias: BuildTWAPBuyOrderParams

> **BuildTWAPBuyOrderParams**: [`BuildTWAPDeltaOrderParamsBase`](../-internal-/type-aliases/BuildTWAPDeltaOrderParamsBase.md) & `object`

## Type declaration

### maxSrcAmount

> **maxSrcAmount**: `string`

#### Description

Maximum source token amount willing to spend

### onChainOrderType

> **onChainOrderType**: `"TWAPBuyOrder"`

#### Description

Must be "TWAPBuyOrder" for buy orders

### totalDestAmount

> **totalDestAmount**: `string`

#### Description

Total destination token amount to buy across all slices

## Defined in

[src/methods/delta/buildTWAPDeltaOrder.ts:75](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildTWAPDeltaOrder.ts#L75)
