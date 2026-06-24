[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / BuildDeltaOrderParams

# Type Alias: BuildDeltaOrderParams

> **BuildDeltaOrderParams**: `object`

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

### limitAmount?

> `optional` **limitAmount**: `string`

#### Description

If passed, the server will use this as SELL destAmount (as BUY srcAmount) and expectedAmount

### metadata?

> `optional` **metadata**: `string`

#### Description

Metadata for the order, hex string

### nonce?

> `optional` **nonce**: `string`

#### Description

The nonce of the order. Random if omitted.

### owner

> **owner**: `string`

#### Description

The address of the order owner

### partiallyFillable?

> `optional` **partiallyFillable**: `boolean`

#### Description

Designates the Order as partially fillable instead of fill-or-kill. Default false.

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

Partner fee in basis points (bps), 50bps=0.5%

### partnerTakesSurplus?

> `optional` **partnerTakesSurplus**: `boolean`

#### Description

Take surplus flag

### permit?

> `optional` **permit**: `string`

#### Description

Optional permit signature for the src token. Defaults to "0x".

### route

> **route**: [`DeltaRoute`](DeltaRoute.md)

#### Description

DeltaRoute from getDeltaPrice — either price.route or any price.alternatives[i]

### side

> **side**: `"SELL"` \| `"BUY"`

#### Description

Order side. SELL or BUY.

### slippage?

> `optional` **slippage**: `number`

#### Description

Slippage in basis points (bps). 10000 = 100%, 50 = 0.5%. Default 0.

## Defined in

[src/methods/delta/buildDeltaOrder.ts:7](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildDeltaOrder.ts#L7)
