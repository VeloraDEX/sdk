[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / ProductiveDeltaOrder

# Type Alias: ProductiveDeltaOrder

> **ProductiveDeltaOrder** = `object`

Defined in: [src/methods/delta/helpers/types.ts:120](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L120)

## Properties

### beneficiary

> **beneficiary**: `string`

Defined in: [src/methods/delta/helpers/types.ts:124](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L124)

#### Description

The address of the order beneficiary

***

### bridge

> **bridge**: [`Bridge`](Bridge.md)

Defined in: [src/methods/delta/helpers/types.ts:152](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L152)

#### Description

The bridge input

***

### deadline

> **deadline**: `number`

Defined in: [src/methods/delta/helpers/types.ts:136](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L136)

#### Description

The deadline for the order

***

### destAmount

> **destAmount**: `string`

Defined in: [src/methods/delta/helpers/types.ts:132](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L132)

#### Description

The minimum amount of dest token to receive

***

### destToken

> **destToken**: `string`

Defined in: [src/methods/delta/helpers/types.ts:128](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L128)

#### Description

The address of the dest token

***

### expectedAmount

> **expectedAmount**: `string`

Defined in: [src/methods/delta/helpers/types.ts:134](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L134)

#### Description

The expected amount of token to receive

***

### metadata

> **metadata**: `string`

Defined in: [src/methods/delta/helpers/types.ts:140](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L140)

#### Description

Metadata for the order, hex string

***

### nonce

> **nonce**: `string`

Defined in: [src/methods/delta/helpers/types.ts:138](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L138)

#### Description

The nonce of the order

***

### owner

> **owner**: `string`

Defined in: [src/methods/delta/helpers/types.ts:122](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L122)

#### Description

The address of the order owner

***

### partnerAndFee

> **partnerAndFee**: `string`

Defined in: [src/methods/delta/helpers/types.ts:142](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L142)

#### Description

Encoded partner address, fee bps, and flags for the order. partnerAndFee = (partner << 96) | (partnerTakesSurplus << 8) | fee in bps (max fee is 2%)

***

### permit

> **permit**: `string`

Defined in: [src/methods/delta/helpers/types.ts:144](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L144)

#### Description

Optional permit signature for the src token

***

### shares

> **shares**: `string`

Defined in: [src/methods/delta/helpers/types.ts:148](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L148)

#### Description

The number of shares to execute for this order.

***

### srcAmount

> **srcAmount**: `string`

Defined in: [src/methods/delta/helpers/types.ts:130](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L130)

#### Description

The amount of src token to swap

***

### srcToken

> **srcToken**: `string`

Defined in: [src/methods/delta/helpers/types.ts:126](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L126)

#### Description

The address of the src token

***

### strategy

> **strategy**: `string`

Defined in: [src/methods/delta/helpers/types.ts:146](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L146)

#### Description

The strategy address.

***

### useShares

> **useShares**: `boolean`

Defined in: [src/methods/delta/helpers/types.ts:150](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L150)

#### Description

Whether the order uses shares or raw amounts.
