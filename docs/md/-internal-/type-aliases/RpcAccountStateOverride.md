[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / RpcAccountStateOverride

# Type Alias: RpcAccountStateOverride

> **RpcAccountStateOverride** = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/rpc.d.ts:81

## Properties

### balance?

> `optional` **balance?**: [`Hex`](Hex.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/rpc.d.ts:83

Fake balance to set for the account before executing the call. <32 bytes

***

### code?

> `optional` **code?**: [`Hex`](Hex.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/rpc.d.ts:87

Fake EVM bytecode to inject into the account before executing the call.

***

### nonce?

> `optional` **nonce?**: [`Hex`](Hex.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/rpc.d.ts:85

Fake nonce to set for the account before executing the call. <8 bytes

***

### state?

> `optional` **state?**: [`RpcStateMapping`](RpcStateMapping.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/rpc.d.ts:89

Fake key-value mapping to override all slots in the account storage before executing the call.

***

### stateDiff?

> `optional` **stateDiff?**: [`RpcStateMapping`](RpcStateMapping.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/rpc.d.ts:91

Fake key-value mapping to override individual slots in the account storage before executing the call.
