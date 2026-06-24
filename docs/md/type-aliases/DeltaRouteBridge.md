[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / DeltaRouteBridge

# Type Alias: DeltaRouteBridge

> **DeltaRouteBridge**: `object`

## Type declaration

### contractParams

> **contractParams**: [`DeltaRouteBridgeContractParams`](DeltaRouteBridgeContractParams.md)

#### Description

Bridge contract parameters as returned by the server.

### estimatedTimeMs

> **estimatedTimeMs**: `number`

#### Description

Estimated bridging time in milliseconds.

### protocol

> **protocol**: `string`

#### Description

Bridge protocol identifier (e.g. "Across", "Relay", "Mayan").

### tags

> **tags**: [`BridgeTag`](BridgeTag.md)[]

#### Description

Tags for this route ("recommended", "fastest", "best-return"). May be empty.

## Description

Bridge details on a route. Same-chain routes carry `null` for `route.bridge`.

## Defined in

[src/methods/delta/types.ts:53](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/types.ts#L53)
