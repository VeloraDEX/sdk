[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / UnifiedDeltaOrderData

# Type Alias: UnifiedDeltaOrderData

> **UnifiedDeltaOrderData** = `object`

Defined in: [src/methods/delta/helpers/types.ts:215](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L215)

## Properties

### amounts

> **amounts**: `object`

Defined in: [src/methods/delta/helpers/types.ts:217](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L217)

#### expected

> **expected**: `object`

##### Description

expected amounts at the start of Order execution

##### expected.destAmount

> **destAmount**: `string`

##### expected.srcAmount

> **srcAmount**: `string`

#### final?

> `optional` **final?**: `object`

##### Description

final amounts after Order execution. May be less than expected if there is slippage or only partial execution was achieved

##### final.destAmount

> **destAmount**: `string`

##### final.srcAmount

> **srcAmount**: `string`

#### minimal

> **minimal**: `object`

##### Description

minimal amounts that user should receive if the order is filled, known at the start of Order execution

##### minimal.destAmount

> **destAmount**: `string`

##### minimal.srcAmount

> **srcAmount**: `string`

#### Description

amounts at the start of Order execution and after Order execution. May differ from each other

***

### destAmount

> **destAmount**: `string`

Defined in: [src/methods/delta/helpers/types.ts:241](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L241)

#### Description

output token amount (expected amount for pending orders, actual received amount for executed orders)

***

### destChainId

> **destChainId**: `number`

Defined in: [src/methods/delta/helpers/types.ts:237](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L237)

#### Description

destination chain id (same as source chain id for single chain orders)

***

### destToken

> **destToken**: `string`

Defined in: [src/methods/delta/helpers/types.ts:245](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L245)

#### Description

output token address

***

### filledPercent

> **filledPercent**: `number`

Defined in: [src/methods/delta/helpers/types.ts:249](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L249)

#### Description

filled percent of the order (based on transactions[].filledPercent)

***

### srcAmount

> **srcAmount**: `string`

Defined in: [src/methods/delta/helpers/types.ts:239](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L239)

#### Description

input token amount

***

### srcChainId

> **srcChainId**: `number`

Defined in: [src/methods/delta/helpers/types.ts:235](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L235)

#### Description

source chain id

***

### srcToken

> **srcToken**: `string`

Defined in: [src/methods/delta/helpers/types.ts:243](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L243)

#### Description

input token address

***

### swapSide

> **swapSide**: [`SwapSideUnion`](SwapSideUnion.md)

Defined in: [src/methods/delta/helpers/types.ts:247](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/helpers/types.ts#L247)

#### Description

swap side of the order
