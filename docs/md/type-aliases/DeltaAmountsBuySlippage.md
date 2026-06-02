[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / DeltaAmountsBuySlippage

# Type Alias: DeltaAmountsBuySlippage

> **DeltaAmountsBuySlippage**: `object`

## Type declaration

### destAmount

> **destAmount**: `string`

#### Description

The minimum amount of dest token to receive

### side?

> `optional` **side**: `"BUY"`

#### Description

The side of the order

### slippage

> **slippage**: `number`

#### Description

Slippage in basis points (bps). 10000 = 100%, 50 = 0.5%

### srcAmount?

> `optional` **srcAmount**: `never`

## Description

BUY with slippage: destAmount provided, srcAmount auto-computed from deltaPrice.srcAmount

## Defined in

[src/methods/delta/helpers/types.ts:18](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L18)
