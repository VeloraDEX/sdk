[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AbiFallback

# Type Alias: AbiFallback

> **AbiFallback**: `object`

ABI ["fallback"](https://docs.soliditylang.org/en/latest/abi-spec.html#json) type

## Type declaration

### ~~payable?~~

> `optional` **payable**: `boolean`

#### Deprecated

use `payable` or `nonpayable` from [AbiStateMutability](AbiStateMutability.md) instead

#### See

https://github.com/ethereum/solidity/issues/992

### stateMutability

> **stateMutability**: [`Extract`](Extract.md)\<[`AbiStateMutability`](AbiStateMutability.md), `"payable"` \| `"nonpayable"`\>

### type

> **type**: `"fallback"`

## Defined in

node\_modules/.pnpm/abitype@1.1.0\_typescript@5.6.3\_zod@3.25.76/node\_modules/abitype/dist/types/abi.d.ts:88
