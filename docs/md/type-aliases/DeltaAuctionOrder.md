[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / DeltaAuctionOrder

# Type Alias: DeltaAuctionOrder

> **DeltaAuctionOrder** = `object`

Defined in: [src/methods/delta/helpers/types.ts:47](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L47)

## Properties

### beneficiary

> **beneficiary**: `string`

Defined in: [src/methods/delta/helpers/types.ts:51](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L51)

#### Description

The address of the order beneficiary

***

### bridge

> **bridge**: [`Bridge`](Bridge.md)

Defined in: [src/methods/delta/helpers/types.ts:75](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L75)

#### Description

The bridge input

***

### deadline

> **deadline**: `number`

Defined in: [src/methods/delta/helpers/types.ts:67](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L67)

#### Description

The deadline for the order

***

### destAmount

> **destAmount**: `string`

Defined in: [src/methods/delta/helpers/types.ts:59](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L59)

#### Description

The minimum amount of dest token to receive

***

### destToken

> **destToken**: `string`

Defined in: [src/methods/delta/helpers/types.ts:55](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L55)

#### Description

The address of the dest token

***

### expectedAmount

> **expectedAmount**: `string`

Defined in: [src/methods/delta/helpers/types.ts:61](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L61)

#### Description

The expected amount of token to receive

***

### kind

> **kind**: [`OrderKind`](../-internal-/enumerations/OrderKind.md)

Defined in: [src/methods/delta/helpers/types.ts:63](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L63)

#### Description

The kind of the order

***

### metadata

> **metadata**: `string`

Defined in: [src/methods/delta/helpers/types.ts:65](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L65)

#### Description

Metadata for the order, hex string

***

### nonce

> **nonce**: `string`

Defined in: [src/methods/delta/helpers/types.ts:69](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L69)

#### Description

The nonce of the order

***

### owner

> **owner**: `string`

Defined in: [src/methods/delta/helpers/types.ts:49](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L49)

#### Description

The address of the order owner

***

### partnerAndFee

> **partnerAndFee**: `string`

Defined in: [src/methods/delta/helpers/types.ts:73](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L73)

#### Description

Encoded partner address, fee bps, and flags for the order. partnerAndFee = (partner << 96) | (partnerTakesSurplus << 8) | fee in bps (max fee is 2%)

***

### permit

> **permit**: `string`

Defined in: [src/methods/delta/helpers/types.ts:71](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L71)

#### Description

Optional permit signature for the src token

***

### srcAmount

> **srcAmount**: `string`

Defined in: [src/methods/delta/helpers/types.ts:57](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L57)

#### Description

The amount of src token to swap

***

### srcToken

> **srcToken**: `string`

Defined in: [src/methods/delta/helpers/types.ts:53](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L53)

#### Description

The address of the src token
