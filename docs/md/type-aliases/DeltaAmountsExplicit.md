[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / DeltaAmountsExplicit

# Type Alias: DeltaAmountsExplicit

> **DeltaAmountsExplicit**: `object`

## Type declaration

### destAmount

> **destAmount**: `string`

#### Description

The minimum amount of dest token to receive

### side?

> `optional` **side**: [`SwapSideUnion`](SwapSideUnion.md)

#### Description

The side of the order. Default is SELL

### slippage?

> `optional` **slippage**: `never`

### srcAmount

> **srcAmount**: `string`

#### Description

The amount of src token to swap

## Description

Explicit amounts, no slippage (backward-compatible)

## Defined in

[src/methods/delta/helpers/types.ts:28](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L28)
