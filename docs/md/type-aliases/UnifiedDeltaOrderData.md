[**@velora-dex/sdk**](../README.md) • **Docs**

***

[@velora-dex/sdk](../globals.md) / UnifiedDeltaOrderData

# Type Alias: UnifiedDeltaOrderData

> **UnifiedDeltaOrderData**: `object`

## Type declaration

### amounts

> **amounts**: `object`

#### Description

amounts at the start of Order execution and after Order execution. May differ from each other

### amounts.expected

> **expected**: `object`

#### Description

expected amounts at the start of Order execution

### amounts.expected.destAmount

> **destAmount**: `string`

### amounts.expected.srcAmount

> **srcAmount**: `string`

### amounts.final?

> `optional` **final**: `object`

#### Description

final amounts after Order execution. May be less than expected if there is slippage or only partial execution was achieved

### amounts.final.destAmount

> **destAmount**: `string`

### amounts.final.srcAmount

> **srcAmount**: `string`

### amounts.minimal

> **minimal**: `object`

#### Description

minimal amounts that user should receive if the order is filled, known at the start of Order execution

### amounts.minimal.destAmount

> **destAmount**: `string`

### amounts.minimal.srcAmount

> **srcAmount**: `string`

### destAmount

> **destAmount**: `string`

#### Description

output token amount (expected amount for pending orders, actual received amount for executed orders)

### destChainId

> **destChainId**: `number`

#### Description

destination chain id (same as source chain id for single chain orders)

### destToken

> **destToken**: `string`

#### Description

output token address

### filledPercent

> **filledPercent**: `number`

#### Description

filled percent of the order (based on transactions[].filledPercent)

### srcAmount

> **srcAmount**: `string`

#### Description

input token amount

### srcChainId

> **srcChainId**: `number`

#### Description

source chain id

### srcToken

> **srcToken**: `string`

#### Description

input token address

### swapSide

> **swapSide**: [`SwapSideUnion`](SwapSideUnion.md)

#### Description

swap side of the order

## Defined in

[src/methods/delta/helpers/types.ts:325](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L325)
