[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / DeltaPrice

# Type Alias: DeltaPrice

> **DeltaPrice**: `object`

## Type declaration

### alternatives

> **alternatives**: [`DeltaRoute`](DeltaRoute.md)[]

#### Description

Alternative routes (other bridges). Each is a full DeltaRoute.

### id

> **id**: `string`

#### Description

Unique request ID for tracing.

### inputToken

> **inputToken**: [`DeltaPriceToken`](DeltaPriceToken.md)

#### Description

Token the user trades (identity only — amounts live in route.origin.input).

### outputToken

> **outputToken**: [`DeltaPriceToken`](DeltaPriceToken.md)

#### Description

Token the user receives (identity only — amounts live in route.destination.output).

### partner

> **partner**: `object`

#### Description

Partner info attached to this price.

### partner.feePercent

> **feePercent**: `number`

#### Description

Partner fee in percent (e.g. 0.12 = 0.12%).

### partner.name

> **name**: `string`

### route

> **route**: [`DeltaRoute`](DeltaRoute.md)

#### Description

Recommended route with full amounts and bridge details.

### side

> **side**: `"SELL"` \| `"BUY"`

#### Description

Order side.

### spender

> **spender**: [`Address`](Address.md)

#### Description

Address to approve for spending the input token.

## Description

v2 price response: route-based, cross-chain first.

## Defined in

[src/methods/delta/types.ts:90](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L90)
