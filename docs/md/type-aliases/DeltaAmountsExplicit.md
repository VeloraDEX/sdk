[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / DeltaAmountsExplicit

# Type Alias: DeltaAmountsExplicit

> **DeltaAmountsExplicit** = `object`

Defined in: [src/methods/delta/helpers/types.ts:27](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L27)

## Description

Explicit amounts, no slippage (backward-compatible)

## Properties

### destAmount

> **destAmount**: `string`

Defined in: [src/methods/delta/helpers/types.ts:32](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L32)

#### Description

The minimum amount of dest token to receive

***

### side?

> `optional` **side?**: [`SwapSideUnion`](SwapSideUnion.md)

Defined in: [src/methods/delta/helpers/types.ts:34](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L34)

#### Description

The side of the order. Default is SELL

***

### slippage?

> `optional` **slippage?**: `never`

Defined in: [src/methods/delta/helpers/types.ts:28](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L28)

***

### srcAmount

> **srcAmount**: `string`

Defined in: [src/methods/delta/helpers/types.ts:30](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L30)

#### Description

The amount of src token to swap
