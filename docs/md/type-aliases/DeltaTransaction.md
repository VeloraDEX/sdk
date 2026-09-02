[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / DeltaTransaction

# Type Alias: DeltaTransaction

> **DeltaTransaction** = `object`

Defined in: [src/methods/delta/types.ts:184](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L184)

## Description

A single transaction entry on a v2 order.

## Properties

### destinationReceivedAmount

> **destinationReceivedAmount**: `string` \| `null`

Defined in: [src/methods/delta/types.ts:214](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L214)

#### Description

`bridge.outputToken` delivered on `bridge.destinationChainId`,
already scaled by `bridge.scalingFactor`. `null` on same-chain fills, which
have no destination leg, and on bridge fills whose destination leg is still
in flight.

***

### destinationTx

> **destinationTx**: `string` \| `null`

Defined in: [src/methods/delta/types.ts:186](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L186)

***

### filledPercent

> **filledPercent**: `number`

Defined in: [src/methods/delta/types.ts:188](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L188)

#### Description

Filled percent of the slice (0–100).

***

### originReceivedAmount

> **originReceivedAmount**: `string` \| `null`

Defined in: [src/methods/delta/types.ts:207](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L207)

#### Description

`order.destToken` delivered on the origin chain by `originTx` —
the same leg, chain and token decimals as `spentAmount`.

***

### originTx

> **originTx**: `string`

Defined in: [src/methods/delta/types.ts:185](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L185)

***

### receivedAmount

> **receivedAmount**: `string` \| `null`

Defined in: [src/methods/delta/types.ts:202](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L202)

#### Description

Which leg this reports depends on the order: the destination leg
for bridge fills, the origin leg otherwise. Unlike `destinationReceivedAmount`
it is not gated on the bridge having filled, so on a bridge order it can carry
a destination amount the provider recorded while the leg was still in flight.
Kept as-is for existing integrators — prefer the explicit
`originReceivedAmount` / `destinationReceivedAmount` pair.

***

### spentAmount

> **spentAmount**: `string` \| `null`

Defined in: [src/methods/delta/types.ts:193](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L193)

#### Description

`order.srcToken` taken from the owner on the origin chain by
`originTx` — the same leg, chain and token decimals as `originReceivedAmount`.

***

### timestamp

> **timestamp**: `string` \| `null`

Defined in: [src/methods/delta/types.ts:216](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L216)

#### Description

ISO datetime string of origin Tx.
