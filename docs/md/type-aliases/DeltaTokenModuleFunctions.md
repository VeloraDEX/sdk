[**@velora-dex/sdk**](../README.md)

***

[@velora-dex/sdk](../globals.md) / DeltaTokenModuleFunctions

# Type Alias: DeltaTokenModuleFunctions\<T\>

> **DeltaTokenModuleFunctions**\<`T`\> = `object`

Defined in: [src/methods/delta/deltaTokenModule.ts:71](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/deltaTokenModule.ts#L71)

## Type Parameters

### T

`T`

## Properties

### cancelAndWithdrawDeltaOrder

> **cancelAndWithdrawDeltaOrder**: [`CancelAndWithdrawDeltaOrder`](../-internal-/type-aliases/CancelAndWithdrawDeltaOrder.md)\<`T`\>

Defined in: [src/methods/delta/deltaTokenModule.ts:73](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/deltaTokenModule.ts#L73)

#### Description

Cancel an order on-chain and withdraw native ETH back to the owner

***

### cancelTWAPAndWithdrawDeltaOrder

> **cancelTWAPAndWithdrawDeltaOrder**: [`CancelTWAPAndWithdrawDeltaOrder`](../-internal-/type-aliases/CancelTWAPAndWithdrawDeltaOrder.md)\<`T`\>

Defined in: [src/methods/delta/deltaTokenModule.ts:81](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/deltaTokenModule.ts#L81)

#### Description

Cancel a TWAP sell order on-chain and withdraw native ETH back to the owner

***

### cancelTWAPBuyAndWithdrawDeltaOrder

> **cancelTWAPBuyAndWithdrawDeltaOrder**: [`CancelTWAPBuyAndWithdrawDeltaOrder`](../-internal-/type-aliases/CancelTWAPBuyAndWithdrawDeltaOrder.md)\<`T`\>

Defined in: [src/methods/delta/deltaTokenModule.ts:83](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/deltaTokenModule.ts#L83)

#### Description

Cancel a TWAP buy order on-chain and withdraw native ETH back to the owner

***

### depositNativeAndPreSign

> **depositNativeAndPreSign**: [`DepositNativeAndPreSign`](../-internal-/type-aliases/DepositNativeAndPreSign.md)\<`T`\>

Defined in: [src/methods/delta/deltaTokenModule.ts:77](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/deltaTokenModule.ts#L77)

#### Description

Deposit native ETH and pre-sign a Delta order

***

### depositNativeAndPreSignDeltaOrder

> **depositNativeAndPreSignDeltaOrder**: [`DepositNativeAndPreSignDeltaOrder`](../-internal-/type-aliases/DepositNativeAndPreSignDeltaOrder.md)\<`T`\>

Defined in: [src/methods/delta/deltaTokenModule.ts:79](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/deltaTokenModule.ts#L79)

#### Description

Deposit native ETH and pre-sign a Delta order from signable order data

***

### withdrawDeltaNative

> **withdrawDeltaNative**: [`WithdrawDeltaNative`](../-internal-/type-aliases/WithdrawDeltaNative.md)\<`T`\>

Defined in: [src/methods/delta/deltaTokenModule.ts:75](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/delta/deltaTokenModule.ts#L75)

#### Description

Withdraw Delta Wrapped Native tokens as native ETH
