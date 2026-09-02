[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / DeltaPrice

# Type Alias: DeltaPrice

> **DeltaPrice** = `object`

Defined in: [src/methods/delta/types.ts:90](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L90)

## Description

v2 price response: route-based, cross-chain first.

## Properties

### alternatives

> **alternatives**: [`DeltaRoute`](DeltaRoute.md)[]

Defined in: [src/methods/delta/types.ts:110](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L110)

#### Description

Alternative routes (other bridges). Each is a full DeltaRoute.

***

### id

> **id**: `string`

Defined in: [src/methods/delta/types.ts:92](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L92)

#### Description

Unique request ID for tracing.

***

### inputToken

> **inputToken**: [`DeltaPriceToken`](DeltaPriceToken.md)

Defined in: [src/methods/delta/types.ts:96](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L96)

#### Description

Token the user trades (identity only — amounts live in route.origin.input).

***

### outputToken

> **outputToken**: [`DeltaPriceToken`](DeltaPriceToken.md)

Defined in: [src/methods/delta/types.ts:98](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L98)

#### Description

Token the user receives (identity only — amounts live in route.destination.output).

***

### partner

> **partner**: `object`

Defined in: [src/methods/delta/types.ts:102](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L102)

#### feePercent

> **feePercent**: `number`

##### Description

Partner fee in percent (e.g. 0.12 = 0.12%).

#### name

> **name**: `string`

#### Description

Partner info attached to this price.

***

### route

> **route**: [`DeltaRoute`](DeltaRoute.md)

Defined in: [src/methods/delta/types.ts:100](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L100)

#### Description

Recommended route with full amounts and bridge details.

***

### side

> **side**: `"SELL"` \| `"BUY"`

Defined in: [src/methods/delta/types.ts:94](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L94)

#### Description

Order side.

***

### spender

> **spender**: [`Address`](Address.md)

Defined in: [src/methods/delta/types.ts:108](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L108)

#### Description

Address to approve for spending the input token.
