[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / ExternalDeltaOrder

# Type Alias: ExternalDeltaOrder

> **ExternalDeltaOrder** = `object`

Defined in: [src/methods/delta/helpers/types.ts:89](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L89)

## Properties

### data

> **data**: `string`

Defined in: [src/methods/delta/helpers/types.ts:117](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L117)

#### Description

Protocol-specific encoded bytes for the external handler

***

### deadline

> **deadline**: `number`

Defined in: [src/methods/delta/helpers/types.ts:109](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L109)

#### Description

The deadline for the order

***

### destAmount

> **destAmount**: `string`

Defined in: [src/methods/delta/helpers/types.ts:101](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L101)

#### Description

The minimum amount of dest token to receive

***

### destToken

> **destToken**: `string`

Defined in: [src/methods/delta/helpers/types.ts:97](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L97)

#### Description

The address of the dest token

***

### expectedAmount

> **expectedAmount**: `string`

Defined in: [src/methods/delta/helpers/types.ts:103](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L103)

#### Description

The expected amount of token to receive

***

### handler

> **handler**: `string`

Defined in: [src/methods/delta/helpers/types.ts:93](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L93)

#### Description

The address of the external handler contract

***

### kind

> **kind**: [`OrderKind`](../-internal-/enumerations/OrderKind.md)

Defined in: [src/methods/delta/helpers/types.ts:105](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L105)

#### Description

The kind of the order

***

### metadata

> **metadata**: `string`

Defined in: [src/methods/delta/helpers/types.ts:107](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L107)

#### Description

Metadata for the order, hex string

***

### nonce

> **nonce**: `string`

Defined in: [src/methods/delta/helpers/types.ts:111](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L111)

#### Description

The nonce of the order

***

### owner

> **owner**: `string`

Defined in: [src/methods/delta/helpers/types.ts:91](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L91)

#### Description

The address of the order owner

***

### partnerAndFee

> **partnerAndFee**: `string`

Defined in: [src/methods/delta/helpers/types.ts:115](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L115)

#### Description

Encoded partner address, fee bps, and flags for the order

***

### permit

> **permit**: `string`

Defined in: [src/methods/delta/helpers/types.ts:113](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L113)

#### Description

Optional permit signature for the src token

***

### srcAmount

> **srcAmount**: `string`

Defined in: [src/methods/delta/helpers/types.ts:99](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L99)

#### Description

The amount of src token to swap

***

### srcToken

> **srcToken**: `string`

Defined in: [src/methods/delta/helpers/types.ts:95](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L95)

#### Description

The address of the src token
