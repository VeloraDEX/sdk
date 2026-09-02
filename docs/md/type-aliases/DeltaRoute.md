[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / DeltaRoute

# Type Alias: DeltaRoute

> **DeltaRoute** = `object`

Defined in: [src/methods/delta/types.ts:73](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L73)

## Description

A route describes how the swap flows from origin chain to destination chain.

## Properties

### bridge

> **bridge**: [`DeltaRouteBridge`](DeltaRouteBridge.md) \| `null`

Defined in: [src/methods/delta/types.ts:79](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L79)

#### Description

Bridge details. `null` for same-chain routes.

***

### destination

> **destination**: [`DeltaRouteStep`](DeltaRouteStep.md)

Defined in: [src/methods/delta/types.ts:77](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L77)

#### Description

Destination-chain step. For same-chain routes this mirrors `origin`.

***

### fees

> **fees**: `object`

Defined in: [src/methods/delta/types.ts:81](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L81)

#### bridge

> **bridge**: [`DeltaTokenAmount`](DeltaTokenAmount.md)[]

##### Description

Bridge fees (empty array for same-chain).

#### gas

> **gas**: [`DeltaTokenAmount`](DeltaTokenAmount.md)

##### Description

Gas fee (single DeltaTokenAmount on the source chain).

#### Description

Fee breakdown for this route.

***

### origin

> **origin**: [`DeltaRouteStep`](DeltaRouteStep.md)

Defined in: [src/methods/delta/types.ts:75](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L75)

#### Description

Source-chain step. The on-chain Delta order's amounts come from `origin.input` and `origin.output`.
