[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AmountsSellSlippage

# Type Alias: AmountsSellSlippage

> **AmountsSellSlippage**: `object`

## Type declaration

### destAmount?

> `optional` **destAmount**: `never`

### side?

> `optional` **side**: `"SELL"`

#### Description

The side of the order

### slippage

> **slippage**: `number`

#### Description

Slippage in basis points (bps). 10000 = 100%, 50 = 0.5%

### srcAmount

> **srcAmount**: `string`

#### Description

The amount of src token to swap

## Description

SELL with slippage: srcAmount provided, destAmount auto-computed from deltaPrice.destAmount

## Defined in

[src/methods/delta/helpers/types.ts:7](https://github.com/VeloraDEX/sdk/blob/master/src/methods/delta/helpers/types.ts#L7)
