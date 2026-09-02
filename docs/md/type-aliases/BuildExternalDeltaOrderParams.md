[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / BuildExternalDeltaOrderParams

# Type Alias: BuildExternalDeltaOrderParams

> **BuildExternalDeltaOrderParams** = `object`

Defined in: [src/methods/delta/buildExternalDeltaOrder.ts:7](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildExternalDeltaOrder.ts#L7)

## Properties

### beneficiary?

> `optional` **beneficiary?**: `string`

Defined in: [src/methods/delta/buildExternalDeltaOrder.ts:15](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildExternalDeltaOrder.ts#L15)

#### Description

The address of the order beneficiary. Defaults to owner.

***

### capSurplus?

> `optional` **capSurplus?**: `boolean`

Defined in: [src/methods/delta/buildExternalDeltaOrder.ts:31](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildExternalDeltaOrder.ts#L31)

#### Description

Whether the surplus should be capped. True by default.

***

### data

> **data**: `string`

Defined in: [src/methods/delta/buildExternalDeltaOrder.ts:13](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildExternalDeltaOrder.ts#L13)

#### Description

Protocol-specific encoded bytes for the external handler

***

### deadline?

> `optional` **deadline?**: `number`

Defined in: [src/methods/delta/buildExternalDeltaOrder.ts:17](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildExternalDeltaOrder.ts#L17)

#### Description

The deadline for the order (unix seconds)

***

### handler

> **handler**: `string`

Defined in: [src/methods/delta/buildExternalDeltaOrder.ts:11](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildExternalDeltaOrder.ts#L11)

#### Description

The address of the external handler contract

***

### metadata?

> `optional` **metadata?**: `string`

Defined in: [src/methods/delta/buildExternalDeltaOrder.ts:33](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildExternalDeltaOrder.ts#L33)

#### Description

Metadata for the order, hex string

***

### nonce?

> `optional` **nonce?**: `string`

Defined in: [src/methods/delta/buildExternalDeltaOrder.ts:19](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildExternalDeltaOrder.ts#L19)

#### Description

The nonce of the order. Random if omitted.

***

### owner

> **owner**: `string`

Defined in: [src/methods/delta/buildExternalDeltaOrder.ts:9](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildExternalDeltaOrder.ts#L9)

#### Description

The address of the order owner

***

### partiallyFillable?

> `optional` **partiallyFillable?**: `boolean`

Defined in: [src/methods/delta/buildExternalDeltaOrder.ts:35](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildExternalDeltaOrder.ts#L35)

#### Description

Designates the Order as partially fillable. Default false.

***

### partner?

> `optional` **partner?**: `string`

Defined in: [src/methods/delta/buildExternalDeltaOrder.ts:23](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildExternalDeltaOrder.ts#L23)

#### Description

Partner string. Passed to the server to resolve partner fee details.

***

### partnerAddress?

> `optional` **partnerAddress?**: `string`

Defined in: [src/methods/delta/buildExternalDeltaOrder.ts:27](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildExternalDeltaOrder.ts#L27)

#### Description

Partner address

***

### partnerFeeBps?

> `optional` **partnerFeeBps?**: `number`

Defined in: [src/methods/delta/buildExternalDeltaOrder.ts:25](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildExternalDeltaOrder.ts#L25)

#### Description

Partner fee in basis points (bps), 50bps=0.5%

***

### partnerTakesSurplus?

> `optional` **partnerTakesSurplus?**: `boolean`

Defined in: [src/methods/delta/buildExternalDeltaOrder.ts:29](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildExternalDeltaOrder.ts#L29)

#### Description

Take surplus flag

***

### permit?

> `optional` **permit?**: `string`

Defined in: [src/methods/delta/buildExternalDeltaOrder.ts:21](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildExternalDeltaOrder.ts#L21)

#### Description

Optional permit signature for the src token. Defaults to "0x".

***

### route

> **route**: [`DeltaRoute`](DeltaRoute.md)

Defined in: [src/methods/delta/buildExternalDeltaOrder.ts:38](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildExternalDeltaOrder.ts#L38)

#### Description

DeltaRoute from getDeltaPrice

***

### side

> **side**: `"SELL"` \| `"BUY"`

Defined in: [src/methods/delta/buildExternalDeltaOrder.ts:40](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildExternalDeltaOrder.ts#L40)

#### Description

Order side. SELL or BUY.

***

### slippage?

> `optional` **slippage?**: `number`

Defined in: [src/methods/delta/buildExternalDeltaOrder.ts:42](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildExternalDeltaOrder.ts#L42)

#### Description

Slippage in basis points (bps). Default 0.
