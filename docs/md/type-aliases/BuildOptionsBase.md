[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / BuildOptionsBase

# Type Alias: BuildOptionsBase

> **BuildOptionsBase** = `object`

Defined in: [src/methods/swap/transaction.ts:155](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L155)

## Properties

### degenMode?

> `optional` **degenMode?**: `boolean`

Defined in: [src/methods/swap/transaction.ts:164](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L164)

***

### ignoreAllowance?

> `optional` **ignoreAllowance?**: `boolean`

Defined in: [src/methods/swap/transaction.ts:161](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L161)

#### Description

Allows the API to skip performing onchain allowance checks.

***

### ignoreChecks?

> `optional` **ignoreChecks?**: `boolean`

Defined in: [src/methods/swap/transaction.ts:157](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L157)

#### Description

Allows the API to skip performing onchain checks such as balances, allowances, as well as transaction simulations. The response does not contain `gas` parameter when set to `true`

***

### ignoreGasEstimate?

> `optional` **ignoreGasEstimate?**: `boolean`

Defined in: [src/methods/swap/transaction.ts:159](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L159)

#### Description

Allows the API to skip gas checks. The response does not contain `gas` parameter when set to `true`

***

### onlyParams?

> `optional` **onlyParams?**: `boolean`

Defined in: [src/methods/swap/transaction.ts:163](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L163)

#### Description

Allows the API to return the contract parameters only.
