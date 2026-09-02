[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AbiConstructor

# Type Alias: AbiConstructor

> **AbiConstructor** = `object`

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/abi.d.ts:77

ABI ["constructor"](https://docs.soliditylang.org/en/latest/abi-spec.html#json) type

## Properties

### inputs

> **inputs**: readonly [`AbiParameter`](AbiParameter-1.md)[]

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/abi.d.ts:79

***

### ~~payable?~~

> `optional` **payable?**: `boolean`

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/abi.d.ts:84

#### Deprecated

use `payable` or `nonpayable` from [AbiStateMutability](AbiStateMutability.md) instead

#### See

https://github.com/ethereum/solidity/issues/992

***

### stateMutability

> **stateMutability**: [`Extract`](Extract.md)\<[`AbiStateMutability`](AbiStateMutability.md), `"payable"` \| `"nonpayable"`\>

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/abi.d.ts:85

***

### type

> **type**: `"constructor"`

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/abi.d.ts:78
