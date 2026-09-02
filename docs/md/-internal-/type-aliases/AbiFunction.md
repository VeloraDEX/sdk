[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AbiFunction

# Type Alias: AbiFunction

> **AbiFunction** = `object`

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/abi.d.ts:54

ABI ["function"](https://docs.soliditylang.org/en/latest/abi-spec.html#json) type

## Properties

### ~~constant?~~

> `optional` **constant?**: `boolean`

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/abi.d.ts:60

#### Deprecated

use `pure` or `view` from [AbiStateMutability](AbiStateMutability.md) instead

#### See

https://github.com/ethereum/solidity/issues/992

***

### ~~gas?~~

> `optional` **gas?**: `number`

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/abi.d.ts:65

#### Deprecated

Vyper used to provide gas estimates

#### See

https://github.com/vyperlang/vyper/issues/2151

***

### inputs

> **inputs**: readonly [`AbiParameter`](AbiParameter-1.md)[]

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/abi.d.ts:66

***

### name

> **name**: `string`

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/abi.d.ts:67

***

### outputs

> **outputs**: readonly [`AbiParameter`](AbiParameter-1.md)[]

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/abi.d.ts:68

***

### ~~payable?~~

> `optional` **payable?**: `boolean`

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/abi.d.ts:73

#### Deprecated

use `payable` or `nonpayable` from [AbiStateMutability](AbiStateMutability.md) instead

#### See

https://github.com/ethereum/solidity/issues/992

***

### stateMutability

> **stateMutability**: [`AbiStateMutability`](AbiStateMutability.md)

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/abi.d.ts:74

***

### type

> **type**: `"function"`

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/abi.d.ts:55
