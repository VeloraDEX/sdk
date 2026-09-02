[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TWAPDeltaOrderBase

# Type Alias: TWAPDeltaOrderBase

> **TWAPDeltaOrderBase** = `object`

Defined in: [src/methods/delta/helpers/types.ts:155](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L155)

## Properties

### beneficiary

> **beneficiary**: `string`

Defined in: [src/methods/delta/helpers/types.ts:159](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L159)

#### Description

The address of the order beneficiary

***

### bridge

> **bridge**: [`Bridge`](../../type-aliases/Bridge.md)

Defined in: [src/methods/delta/helpers/types.ts:179](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L179)

#### Description

The bridge input

***

### deadline

> **deadline**: `number`

Defined in: [src/methods/delta/helpers/types.ts:169](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L169)

#### Description

The deadline for the order

***

### destToken

> **destToken**: `string`

Defined in: [src/methods/delta/helpers/types.ts:163](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L163)

#### Description

The address of the dest token

***

### interval

> **interval**: `number`

Defined in: [src/methods/delta/helpers/types.ts:171](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L171)

#### Description

The interval between each slice execution

***

### metadata

> **metadata**: `string`

Defined in: [src/methods/delta/helpers/types.ts:177](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L177)

#### Description

Metadata for the order, hex string

***

### nonce

> **nonce**: `string`

Defined in: [src/methods/delta/helpers/types.ts:165](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L165)

#### Description

The nonce of the order

***

### numSlices

> **numSlices**: `number`

Defined in: [src/methods/delta/helpers/types.ts:173](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L173)

#### Description

The number of slices to execute

***

### owner

> **owner**: `string`

Defined in: [src/methods/delta/helpers/types.ts:157](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L157)

#### Description

The address of the order owner

***

### partnerAndFee

> **partnerAndFee**: `string`

Defined in: [src/methods/delta/helpers/types.ts:167](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L167)

#### Description

Encoded partner address, fee bps, and flags for the order. partnerAndFee = (partner << 96) | (partnerTakesSurplus << 8) | fee in bps (max fee is 2%)

***

### permit

> **permit**: `string`

Defined in: [src/methods/delta/helpers/types.ts:175](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L175)

#### Description

Optional permit signature for the src token

***

### srcToken

> **srcToken**: `string`

Defined in: [src/methods/delta/helpers/types.ts:161](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L161)

#### Description

The address of the src token
