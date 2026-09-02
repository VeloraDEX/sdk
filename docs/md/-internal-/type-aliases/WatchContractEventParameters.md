[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WatchContractEventParameters

# Type Alias: WatchContractEventParameters\<abi, eventName, strict, transport\>

> **WatchContractEventParameters**\<`abi`, `eventName`, `strict`, `transport`\> = `object` & [`GetPollOptions`](GetPollOptions.md)\<`transport`\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/watchContractEvent.d.ts:14

## Type Declaration

### abi

> **abi**: `abi`

Contract ABI.

### address?

> `optional` **address?**: [`Address`](Address-1.md) \| [`Address`](Address-1.md)[]

The address of the contract.

### args?

> `optional` **args?**: [`ContractEventArgs`](ContractEventArgs-1.md)\<`abi`, `eventName` *extends* [`ContractEventName`](ContractEventName-1.md)\<`abi`\> ? `eventName` : [`ContractEventName`](ContractEventName-1.md)\<`abi`\>\>

### eventName?

> `optional` **eventName?**: `eventName` \| [`ContractEventName`](ContractEventName-1.md)\<`abi`\>

Contract event.

### fromBlock?

> `optional` **fromBlock?**: [`BlockNumber`](BlockNumber.md)\<`bigint`\>

Block to start listening from.

### onError?

> `optional` **onError?**: (`error`) => `void`

The callback to call when an error occurred when trying to get for a new block.

#### Parameters

##### error

`Error`

#### Returns

`void`

### onLogs

> **onLogs**: [`WatchContractEventOnLogsFn`](WatchContractEventOnLogsFn.md)\<`abi`, `eventName` *extends* [`ContractEventName`](ContractEventName-1.md)\<`abi`\> ? `eventName` : [`ContractEventName`](ContractEventName-1.md)\<`abi`\>, `strict`\>

The callback to call when new event logs are received.

### strict?

> `optional` **strict?**: `strict` \| `boolean`

Whether or not the logs must match the indexed/non-indexed arguments on `event`.

#### Default

```ts
false
```

## Type Parameters

### abi

`abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

### eventName

`eventName` *extends* [`ContractEventName`](ContractEventName-1.md)\<`abi`\> \| `undefined` = [`ContractEventName`](ContractEventName-1.md)\<`abi`\>

### strict

`strict` *extends* `boolean` \| `undefined` = `undefined`

### transport

`transport` *extends* [`Transport`](Transport.md) = [`Transport`](Transport.md)
