[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / MulticallResults

# Type Alias: MulticallResults\<contracts, allowFailure, options, result\>

> **MulticallResults**\<`contracts`, `allowFailure`, `options`, `result`\> = `contracts` *extends* readonly \[\] ? readonly \[\] : `contracts` *extends* readonly \[infer contract\] ? \[`...result`, [`MulticallResponse`](MulticallResponse.md)\<[`GetMulticallContractReturnType`](GetMulticallContractReturnType.md)\<`contract`, `options`\[`"mutability"`\]\>, `options`\[`"error"`\], `allowFailure`, `options`\[`"extraProperties"`\]\>\] : `contracts` *extends* readonly \[infer contract, `...(infer rest)`\] ? `MulticallResults`\<\[`...rest`\], `allowFailure`, `options`, \[`...result`, [`MulticallResponse`](MulticallResponse.md)\<[`GetMulticallContractReturnType`](GetMulticallContractReturnType.md)\<`contract`, `options`\[`"mutability"`\]\>, `options`\[`"error"`\], `allowFailure`, `options`\[`"extraProperties"`\]\>\]\> : readonly `unknown`[] *extends* `contracts` ? [`MulticallResponse`](MulticallResponse.md)\<`unknown`, `options`\[`"error"`\], `allowFailure`, `options`\[`"extraProperties"`\]\>[] : `contracts` *extends* readonly infer contract[] ? [`MulticallResponse`](MulticallResponse.md)\<[`GetMulticallContractReturnType`](GetMulticallContractReturnType.md)\<`contract`, `options`\[`"mutability"`\]\>, `options`\[`"error"`\], `allowFailure`, `options`\[`"extraProperties"`\]\>[] : [`MulticallResponse`](MulticallResponse.md)\<`unknown`, `options`\[`"error"`\], `allowFailure`, `options`\[`"extraProperties"`\]\>[]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/multicall.d.ts:19

## Type Parameters

### contracts

`contracts` *extends* readonly `unknown`[] = readonly [`ContractFunctionParameters`](ContractFunctionParameters.md)[]

### allowFailure

`allowFailure` *extends* `boolean` = `true`

### options

`options` *extends* `object` = \{ `error`: `Error`; `extraProperties`: \{ \}; `mutability`: [`AbiStateMutability`](AbiStateMutability.md); \}

### result

`result` *extends* `any`[] = \[\]
