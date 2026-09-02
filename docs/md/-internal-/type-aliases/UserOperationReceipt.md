[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / UserOperationReceipt

# Type Alias: UserOperationReceipt\<_entryPointVersion, uint256, int32, status\>

> **UserOperationReceipt**\<`_entryPointVersion`, `uint256`, `int32`, `status`\> = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/account-abstraction/types/userOperation.d.ts:191

## Link

https://eips.ethereum.org/EIPS/eip-4337#-eth_getuseroperationreceipt

## Type Parameters

### _entryPointVersion

`_entryPointVersion` *extends* [`EntryPointVersion`](EntryPointVersion.md) = [`EntryPointVersion`](EntryPointVersion.md)

### uint256

`uint256` = `bigint`

### int32

`int32` = `number`

### status

`status` = `"success"` \| `"reverted"`

## Properties

### actualGasCost

> **actualGasCost**: `uint256`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/account-abstraction/types/userOperation.d.ts:193

Actual gas cost.

***

### actualGasUsed

> **actualGasUsed**: `uint256`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/account-abstraction/types/userOperation.d.ts:195

Actual gas used.

***

### entryPoint

> **entryPoint**: [`Address`](Address-1.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/account-abstraction/types/userOperation.d.ts:197

Entrypoint address.

***

### logs

> **logs**: [`Log`](Log.md)\<`uint256`, `int32`, `false`\>[]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/account-abstraction/types/userOperation.d.ts:199

Logs emitted during execution.

***

### nonce

> **nonce**: `uint256`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/account-abstraction/types/userOperation.d.ts:201

Anti-replay parameter.

***

### paymaster?

> `optional` **paymaster?**: [`Address`](Address-1.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/account-abstraction/types/userOperation.d.ts:203

Paymaster for the user operation.

***

### reason?

> `optional` **reason?**: `string`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/account-abstraction/types/userOperation.d.ts:205

Revert reason, if unsuccessful.

***

### receipt

> **receipt**: [`TransactionReceipt`](TransactionReceipt-1.md)\<`uint256`, `int32`, `status`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/account-abstraction/types/userOperation.d.ts:207

Transaction receipt of the user operation execution.

***

### sender

> **sender**: [`Address`](Address-1.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/account-abstraction/types/userOperation.d.ts:208

***

### success

> **success**: `boolean`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/account-abstraction/types/userOperation.d.ts:210

If the user operation execution was successful.

***

### userOpHash

> **userOpHash**: [`Hash`](Hash.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/account-abstraction/types/userOperation.d.ts:212

Hash of the user operation.
