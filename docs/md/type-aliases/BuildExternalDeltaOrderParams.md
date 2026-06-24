[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / BuildExternalDeltaOrderParams

# Type Alias: BuildExternalDeltaOrderParams

> **BuildExternalDeltaOrderParams**: `object`

## Type declaration

### beneficiary?

> `optional` **beneficiary**: `string`

#### Description

The address of the order beneficiary. Defaults to owner.

### capSurplus?

> `optional` **capSurplus**: `boolean`

#### Description

Whether the surplus should be capped. True by default.

### data

> **data**: `string`

#### Description

Protocol-specific encoded bytes for the external handler

### deadline?

> `optional` **deadline**: `number`

#### Description

The deadline for the order (unix seconds)

### handler

> **handler**: `string`

#### Description

The address of the external handler contract

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

DeltaRoute from getDeltaPrice

### side

> **side**: `"SELL"` \| `"BUY"`

#### Description

Order side. SELL or BUY.

### slippage?

> `optional` **slippage**: `number`

#### Description

Slippage in basis points (bps). Default 0.

## Defined in

[src/methods/delta/buildExternalDeltaOrder.ts:7](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildExternalDeltaOrder.ts#L7)
