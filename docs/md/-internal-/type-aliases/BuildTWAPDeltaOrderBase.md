[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / BuildTWAPDeltaOrderBase

# Type Alias: BuildTWAPDeltaOrderBase

> **BuildTWAPDeltaOrderBase**: `object`

## Type declaration

### beneficiary?

> `optional` **beneficiary**: `string`

#### Description

The address of the order beneficiary. Defaults to owner.

### capSurplus?

> `optional` **capSurplus**: `boolean`

#### Description

Whether the surplus should be capped. True by default.

### deadline?

> `optional` **deadline**: `number`

#### Description

The deadline for the order (unix seconds)

### interval

> **interval**: `number`

#### Description

Seconds between slice executions (min 60)

### limitAmount?

> `optional` **limitAmount**: `string`

#### Description

If passed, the server will use this as SELL destAmount (as BUY srcAmount) and expectedAmount for each slice

### metadata?

> `optional` **metadata**: `string`

#### Description

Metadata for the order, hex string

### nonce?

> `optional` **nonce**: `string`

#### Description

The nonce of the order. Random if omitted.

### numSlices

> **numSlices**: `number`

#### Description

Number of slices (min 2)

### owner

> **owner**: `string`

#### Description

The address of the order owner

### partiallyFillable?

> `optional` **partiallyFillable**: `boolean`

#### Description

Designates the Order as partially fillable. Default false.

### partner?

> `optional` **partner**: `string`

#### Description

Partner string. Passed to the server to resolve partner fee details.

### partnerAddress?

> `optional` **partnerAddress**: `string`

#### Description

Partner address

### partnerFeeBps?

> `optional` **partnerFeeBps**: `number`

#### Description

Partner fee in basis points (bps)

### partnerTakesSurplus?

> `optional` **partnerTakesSurplus**: `boolean`

#### Description

Take surplus flag

### permit?

> `optional` **permit**: `string`

#### Description

Optional permit signature for the src token. Defaults to "0x".

### route

> **route**: [`DeltaRoute`](../../type-aliases/DeltaRoute.md)

#### Description

DeltaRoute from getDeltaPrice for a single slice

### slippage?

> `optional` **slippage**: `number`

#### Description

Slippage in basis points (bps). 10000 = 100%, 50 = 0.5%. Default 0.

## Defined in

[src/methods/delta/buildTWAPDeltaOrder.ts:7](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildTWAPDeltaOrder.ts#L7)
