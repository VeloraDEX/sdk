[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SimulateCallsParameters

# Type Alias: SimulateCallsParameters\<calls, account\>

> **SimulateCallsParameters**\<`calls`, `account`\>: [`Omit`](Omit.md)\<[`SimulateBlocksParameters`](SimulateBlocksParameters.md), `"blocks"` \| `"returnFullTransactions"`\> & `object`

## Type declaration

### account?

> `optional` **account**: `account`

Account attached to the calls (msg.sender).

### calls

> **calls**: [`Calls`](Calls.md)\<[`Narrow`](Narrow.md)\<`calls`\>\>

Calls to simulate.

### stateOverrides?

> `optional` **stateOverrides**: [`StateOverride`](StateOverride.md)

State overrides.

### traceAssetChanges?

> `optional` **traceAssetChanges**: `boolean`

Whether to trace asset changes.

## Type Parameters

• **calls** *extends* readonly `unknown`[] = readonly `unknown`[]

• **account** *extends* [`Account`](Account.md) \| [`Address`](Address.md) \| `undefined` = [`Account`](Account.md) \| [`Address`](Address.md) \| `undefined`

## Defined in

node\_modules/viem/\_types/actions/public/simulateCalls.d.ts:17
