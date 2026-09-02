[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / DeltaAmountsSellSlippage

# Type Alias: DeltaAmountsSellSlippage

> **DeltaAmountsSellSlippage** = `object`

Defined in: [src/methods/delta/helpers/types.ts:7](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L7)

## Description

SELL with slippage: srcAmount provided, destAmount auto-computed from deltaPrice.destAmount

## Properties

### destAmount?

> `optional` **destAmount?**: `never`

Defined in: [src/methods/delta/helpers/types.ts:12](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L12)

***

### side?

> `optional` **side?**: `"SELL"`

Defined in: [src/methods/delta/helpers/types.ts:14](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L14)

#### Description

The side of the order

***

### slippage

> **slippage**: `number`

Defined in: [src/methods/delta/helpers/types.ts:9](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L9)

#### Description

Slippage in basis points (bps). 10000 = 100%, 50 = 0.5%

***

### srcAmount

> **srcAmount**: `string`

Defined in: [src/methods/delta/helpers/types.ts:11](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L11)

#### Description

The amount of src token to swap
