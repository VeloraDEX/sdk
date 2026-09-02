[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / DeltaAmountsBuySlippage

# Type Alias: DeltaAmountsBuySlippage

> **DeltaAmountsBuySlippage** = `object`

Defined in: [src/methods/delta/helpers/types.ts:17](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L17)

## Description

BUY with slippage: destAmount provided, srcAmount auto-computed from deltaPrice.srcAmount

## Properties

### destAmount

> **destAmount**: `string`

Defined in: [src/methods/delta/helpers/types.ts:21](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L21)

#### Description

The minimum amount of dest token to receive

***

### side?

> `optional` **side?**: `"BUY"`

Defined in: [src/methods/delta/helpers/types.ts:24](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L24)

#### Description

The side of the order

***

### slippage

> **slippage**: `number`

Defined in: [src/methods/delta/helpers/types.ts:19](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L19)

#### Description

Slippage in basis points (bps). 10000 = 100%, 50 = 0.5%

***

### srcAmount?

> `optional` **srcAmount?**: `never`

Defined in: [src/methods/delta/helpers/types.ts:22](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L22)
