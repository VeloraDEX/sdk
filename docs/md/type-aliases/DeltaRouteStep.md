[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / DeltaRouteStep

# Type Alias: DeltaRouteStep

> **DeltaRouteStep** = `object`

Defined in: [src/methods/delta/types.ts:65](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L65)

## Description

A single step of a route (origin chain or destination chain).

## Properties

### input

> **input**: [`DeltaTokenAmount`](DeltaTokenAmount.md)

Defined in: [src/methods/delta/types.ts:67](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L67)

#### Description

The token amount entering this step (before any per-step swap).

***

### output

> **output**: [`DeltaTokenAmount`](DeltaTokenAmount.md)

Defined in: [src/methods/delta/types.ts:69](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L69)

#### Description

The token amount exiting this step (after any per-step swap).
