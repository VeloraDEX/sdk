[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / BuildTWAPDeltaOrderBase

# Type Alias: BuildTWAPDeltaOrderBase

> **BuildTWAPDeltaOrderBase** = `object`

Defined in: [src/methods/delta/buildTWAPDeltaOrder.ts:7](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildTWAPDeltaOrder.ts#L7)

## Properties

### beneficiary?

> `optional` **beneficiary?**: `string`

Defined in: [src/methods/delta/buildTWAPDeltaOrder.ts:11](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildTWAPDeltaOrder.ts#L11)

#### Description

The address of the order beneficiary. Defaults to owner.

***

### capSurplus?

> `optional` **capSurplus?**: `boolean`

Defined in: [src/methods/delta/buildTWAPDeltaOrder.ts:35](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildTWAPDeltaOrder.ts#L35)

#### Description

Whether the surplus should be capped. True by default.

***

### deadline?

> `optional` **deadline?**: `number`

Defined in: [src/methods/delta/buildTWAPDeltaOrder.ts:13](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildTWAPDeltaOrder.ts#L13)

#### Description

The deadline for the order (unix seconds)

***

### interval

> **interval**: `number`

Defined in: [src/methods/delta/buildTWAPDeltaOrder.ts:21](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildTWAPDeltaOrder.ts#L21)

#### Description

Seconds between slice executions (min 60)

***

### metadata?

> `optional` **metadata?**: `string`

Defined in: [src/methods/delta/buildTWAPDeltaOrder.ts:37](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildTWAPDeltaOrder.ts#L37)

#### Description

Metadata for the order, hex string

***

### nonce?

> `optional` **nonce?**: `string`

Defined in: [src/methods/delta/buildTWAPDeltaOrder.ts:15](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildTWAPDeltaOrder.ts#L15)

#### Description

The nonce of the order. Random if omitted.

***

### numSlices

> **numSlices**: `number`

Defined in: [src/methods/delta/buildTWAPDeltaOrder.ts:23](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildTWAPDeltaOrder.ts#L23)

#### Description

Number of slices (min 2)

***

### owner

> **owner**: `string`

Defined in: [src/methods/delta/buildTWAPDeltaOrder.ts:9](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildTWAPDeltaOrder.ts#L9)

#### Description

The address of the order owner

***

### partiallyFillable?

> `optional` **partiallyFillable?**: `boolean`

Defined in: [src/methods/delta/buildTWAPDeltaOrder.ts:39](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildTWAPDeltaOrder.ts#L39)

#### Description

Designates the Order as partially fillable. Default false.

***

### partner?

> `optional` **partner?**: `string`

Defined in: [src/methods/delta/buildTWAPDeltaOrder.ts:19](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildTWAPDeltaOrder.ts#L19)

#### Description

Partner string. Passed to the server to resolve partner fee details.

***

### partnerAddress?

> `optional` **partnerAddress?**: `string`

Defined in: [src/methods/delta/buildTWAPDeltaOrder.ts:31](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildTWAPDeltaOrder.ts#L31)

#### Description

Partner address

***

### partnerFeeBps?

> `optional` **partnerFeeBps?**: `number`

Defined in: [src/methods/delta/buildTWAPDeltaOrder.ts:29](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildTWAPDeltaOrder.ts#L29)

#### Description

Partner fee in basis points (bps)

***

### partnerTakesSurplus?

> `optional` **partnerTakesSurplus?**: `boolean`

Defined in: [src/methods/delta/buildTWAPDeltaOrder.ts:33](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildTWAPDeltaOrder.ts#L33)

#### Description

Take surplus flag

***

### permit?

> `optional` **permit?**: `string`

Defined in: [src/methods/delta/buildTWAPDeltaOrder.ts:17](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildTWAPDeltaOrder.ts#L17)

#### Description

Optional permit signature for the src token. Defaults to "0x".

***

### route

> **route**: [`DeltaRoute`](../../type-aliases/DeltaRoute.md)

Defined in: [src/methods/delta/buildTWAPDeltaOrder.ts:27](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildTWAPDeltaOrder.ts#L27)

#### Description

DeltaRoute from getDeltaPrice for a single slice

***

### slippage?

> `optional` **slippage?**: `number`

Defined in: [src/methods/delta/buildTWAPDeltaOrder.ts:25](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildTWAPDeltaOrder.ts#L25)

#### Description

Slippage in basis points (bps). 10000 = 100%, 50 = 0.5%. Default 0.
