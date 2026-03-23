[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AmountsBuySlippage

# Type Alias: AmountsBuySlippage

> **AmountsBuySlippage**: `object`

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

[src/methods/delta/helpers/types.ts:17](https://github.com/VeloraDEX/sdk/blob/master/src/methods/delta/helpers/types.ts#L17)
