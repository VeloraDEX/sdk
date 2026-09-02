[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WatchContractEventOnLogsFn

# Type Alias: WatchContractEventOnLogsFn\<abi, eventName, strict\>

> **WatchContractEventOnLogsFn**\<`abi`, `eventName`, `strict`\> = (`logs`) => `void`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/watchContractEvent.d.ts:13

## Type Parameters

### abi

`abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

### eventName

`eventName` *extends* [`ContractEventName`](ContractEventName-1.md)\<`abi`\> = [`ContractEventName`](ContractEventName-1.md)\<`abi`\>

### strict

`strict` *extends* `boolean` \| `undefined` = `undefined`

## Parameters

### logs

[`WatchContractEventOnLogsParameter`](WatchContractEventOnLogsParameter.md)\<`abi`, `eventName`, `strict`\>

## Returns

`void`
