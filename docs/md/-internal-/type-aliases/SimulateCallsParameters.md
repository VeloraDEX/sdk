[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SimulateCallsParameters

# Type Alias: SimulateCallsParameters\<calls, account\>

> **SimulateCallsParameters**\<`calls`, `account`\> = [`Omit`](Omit.md)\<[`SimulateBlocksParameters`](SimulateBlocksParameters.md), `"blocks"` \| `"returnFullTransactions"`\> & `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/simulateCalls.d.ts:19

## Type Declaration

### account?

> `optional` **account?**: `account`

Account attached to the calls (msg.sender).

### calls

> **calls**: [`Calls`](Calls.md)\<[`Narrow`](Narrow.md)\<`calls`\>\>

Calls to simulate.

### stateOverrides?

> `optional` **stateOverrides?**: [`StateOverride`](StateOverride.md)

State overrides.

### traceAssetChanges?

> `optional` **traceAssetChanges?**: `boolean`

Whether to trace asset changes.

## Type Parameters

### calls

`calls` *extends* readonly `unknown`[] = readonly `unknown`[]

### account

`account` *extends* [`Account`](Account.md) \| [`Address`](Address-1.md) \| `undefined` = [`Account`](Account.md) \| [`Address`](Address-1.md) \| `undefined`
