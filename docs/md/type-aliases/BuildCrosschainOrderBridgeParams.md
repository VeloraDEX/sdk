[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / BuildCrosschainOrderBridgeParams

# Type Alias: BuildCrosschainOrderBridgeParams

> **BuildCrosschainOrderBridgeParams**: `object`

## Type declaration

### beneficiaryType

> **beneficiaryType**: [`BeneficiaryType`](../-internal-/type-aliases/BeneficiaryType.md)

#### Description

Whether the beneficiary is a contract. Needed to automatically fill in crosschain Bridge

### deltaPrice

> **deltaPrice**: [`BridgePrice`](BridgePrice.md)

#### Description

price response received from /delta/prices (getDeltaPrice method)

### destChainId

> **destChainId**: `number`

#### Description

Destination Chain ID for Crosschain Orders

### destToken

> **destToken**: `string`

#### Description

The address of the destination token on the destination chain

## Defined in

[src/methods/delta/buildCrosschainOrderBridge.ts:12](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/buildCrosschainOrderBridge.ts#L12)
