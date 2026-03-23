[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AmountsExplicit

# Type Alias: AmountsExplicit

> **AmountsExplicit**: `object`

## Type declaration

### destAmount

> **destAmount**: `string`

#### Description

The minimum amount of dest token to receive

### side?

> `optional` **side**: [`SwapSideUnion`](../../type-aliases/SwapSideUnion.md)

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

[src/methods/delta/helpers/types.ts:27](https://github.com/VeloraDEX/sdk/blob/master/src/methods/delta/helpers/types.ts#L27)
