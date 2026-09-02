[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WatchContractEventOnLogsParameter

# Type Alias: WatchContractEventOnLogsParameter\<abi, eventName, strict\>

> **WatchContractEventOnLogsParameter**\<`abi`, `eventName`, `strict`\> = `abi` *extends* [`Abi`](Abi.md) ? [`Abi`](Abi.md) *extends* `abi` ? [`Log`](Log.md)[] : [`Log`](Log.md)\<`bigint`, `number`, `false`, [`ExtractAbiEvent`](ExtractAbiEvent.md)\<`abi`, `eventName`\>, `strict`\>[] : [`Log`](Log.md)[]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/actions/public/watchContractEvent.d.ts:12

## Type Parameters

### abi

`abi` *extends* [`Abi`](Abi.md) \| readonly `unknown`[] = [`Abi`](Abi.md)

### eventName

`eventName` *extends* [`ContractEventName`](ContractEventName-1.md)\<`abi`\> = [`ContractEventName`](ContractEventName-1.md)\<`abi`\>

### strict

`strict` *extends* `boolean` \| `undefined` = `undefined`
