[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / BuildDeltaOrderParams

# Type Alias: BuildDeltaOrderParams

> **BuildDeltaOrderParams** = `object`

Defined in: [src/methods/delta/buildDeltaOrder.ts:8](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildDeltaOrder.ts#L8)

## Properties

### beneficiary?

> `optional` **beneficiary?**: `string`

Defined in: [src/methods/delta/buildDeltaOrder.ts:12](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildDeltaOrder.ts#L12)

#### Description

The address of the order beneficiary. Defaults to owner.

***

### capSurplus?

> `optional` **capSurplus?**: `boolean`

Defined in: [src/methods/delta/buildDeltaOrder.ts:28](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildDeltaOrder.ts#L28)

#### Description

Whether the surplus should be capped. True by default.

***

### deadline?

> `optional` **deadline?**: `number`

Defined in: [src/methods/delta/buildDeltaOrder.ts:14](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildDeltaOrder.ts#L14)

#### Description

The deadline for the order (unix seconds)

***

### limitAmount?

> `optional` **limitAmount?**: `string`

Defined in: [src/methods/delta/buildDeltaOrder.ts:51](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildDeltaOrder.ts#L51)

#### Description

If passed, the server will use this as SELL destAmount (as BUY srcAmount) and expectedAmount.

Units depend on `side`:
- **SELL** — destination-token wei, the same units as `route.destination.output.amount`.
  Over a bridge route the on-chain Order carries destAmount scaled by
  `route.bridge.contractParams.scalingFactor`, and the SDK applies that scaling for you
  (rounding up, so the minimum you receive never lands below what you asked for).
- **BUY** — origin src-token wei, the same units as `route.origin.input.amount`. It caps
  what you spend, is always an origin-chain amount, and is never bridge-scaled.

***

### metadata?

> `optional` **metadata?**: `string`

Defined in: [src/methods/delta/buildDeltaOrder.ts:30](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildDeltaOrder.ts#L30)

#### Description

Metadata for the order, hex string

***

### nonce?

> `optional` **nonce?**: `string`

Defined in: [src/methods/delta/buildDeltaOrder.ts:16](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildDeltaOrder.ts#L16)

#### Description

The nonce of the order. Random if omitted.

***

### owner

> **owner**: `string`

Defined in: [src/methods/delta/buildDeltaOrder.ts:10](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildDeltaOrder.ts#L10)

#### Description

The address of the order owner

***

### partiallyFillable?

> `optional` **partiallyFillable?**: `boolean`

Defined in: [src/methods/delta/buildDeltaOrder.ts:32](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildDeltaOrder.ts#L32)

#### Description

Designates the Order as partially fillable instead of fill-or-kill. Default false.

***

### partner?

> `optional` **partner?**: `string`

Defined in: [src/methods/delta/buildDeltaOrder.ts:20](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildDeltaOrder.ts#L20)

#### Description

Partner string. Passed to the server to resolve partner fee details.

***

### partnerAddress?

> `optional` **partnerAddress?**: `string`

Defined in: [src/methods/delta/buildDeltaOrder.ts:24](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildDeltaOrder.ts#L24)

#### Description

Partner address

***

### partnerFeeBps?

> `optional` **partnerFeeBps?**: `number`

Defined in: [src/methods/delta/buildDeltaOrder.ts:22](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildDeltaOrder.ts#L22)

#### Description

Partner fee in basis points (bps), 50bps=0.5%

***

### partnerTakesSurplus?

> `optional` **partnerTakesSurplus?**: `boolean`

Defined in: [src/methods/delta/buildDeltaOrder.ts:26](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildDeltaOrder.ts#L26)

#### Description

Take surplus flag

***

### permit?

> `optional` **permit?**: `string`

Defined in: [src/methods/delta/buildDeltaOrder.ts:18](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildDeltaOrder.ts#L18)

#### Description

Optional permit signature for the src token. Defaults to "0x".

***

### route

> **route**: [`DeltaRoute`](DeltaRoute.md)

Defined in: [src/methods/delta/buildDeltaOrder.ts:35](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildDeltaOrder.ts#L35)

#### Description

DeltaRoute from getDeltaPrice — either price.route or any price.alternatives[i]

***

### side

> **side**: `"SELL"` \| `"BUY"`

Defined in: [src/methods/delta/buildDeltaOrder.ts:37](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildDeltaOrder.ts#L37)

#### Description

Order side. SELL or BUY.

***

### slippage?

> `optional` **slippage?**: `number`

Defined in: [src/methods/delta/buildDeltaOrder.ts:39](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildDeltaOrder.ts#L39)

#### Description

Slippage in basis points (bps). 10000 = 100%, 50 = 0.5%. Default 0.
