[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / DeltaRoute

# Type Alias: DeltaRoute

> **DeltaRoute**: `object`

## Type declaration

### bridge

> **bridge**: [`DeltaRouteBridge`](DeltaRouteBridge.md) \| `null`

#### Description

Bridge details. `null` for same-chain routes.

### destination

> **destination**: [`DeltaRouteStep`](DeltaRouteStep.md)

#### Description

Destination-chain step. For same-chain routes this mirrors `origin`.

### fees

> **fees**: `object`

#### Description

Fee breakdown for this route.

### fees.bridge

> **bridge**: [`DeltaTokenAmount`](DeltaTokenAmount.md)[]

#### Description

Bridge fees (empty array for same-chain).

### fees.gas

> **gas**: [`DeltaTokenAmount`](DeltaTokenAmount.md)

#### Description

Gas fee (single DeltaTokenAmount on the source chain).

### origin

> **origin**: [`DeltaRouteStep`](DeltaRouteStep.md)

#### Description

Source-chain step. The on-chain Delta order's amounts come from `origin.input` and `origin.output`.

## Description

A route describes how the swap flows from origin chain to destination chain.

## Defined in

[src/methods/delta/types.ts:73](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L73)
