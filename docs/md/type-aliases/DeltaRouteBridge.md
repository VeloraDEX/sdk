[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / DeltaRouteBridge

# Type Alias: DeltaRouteBridge

> **DeltaRouteBridge** = `object`

Defined in: [src/methods/delta/types.ts:53](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L53)

## Description

Bridge details on a route. Same-chain routes carry `null` for `route.bridge`.

## Properties

### contractParams

> **contractParams**: [`DeltaRouteBridgeContractParams`](DeltaRouteBridgeContractParams.md)

Defined in: [src/methods/delta/types.ts:61](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L61)

#### Description

Bridge contract parameters as returned by the server.

***

### estimatedTimeMs

> **estimatedTimeMs**: `number`

Defined in: [src/methods/delta/types.ts:57](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L57)

#### Description

Estimated bridging time in milliseconds.

***

### protocol

> **protocol**: `string`

Defined in: [src/methods/delta/types.ts:55](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L55)

#### Description

Bridge protocol identifier (e.g. "Across", "Relay", "Mayan").

***

### tags

> **tags**: [`BridgeTag`](BridgeTag.md)[]

Defined in: [src/methods/delta/types.ts:59](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L59)

#### Description

Tags for this route ("recommended", "fastest", "best-return"). May be empty.
