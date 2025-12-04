[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / MulticallResults

# Type Alias: MulticallResults\<contracts, allowFailure, options, result\>

> **MulticallResults**\<`contracts`, `allowFailure`, `options`, `result`\>: `contracts` *extends* readonly [] ? readonly [] : `contracts` *extends* readonly [infer contract] ? [`...result`, [`MulticallResponse`](MulticallResponse.md)\<[`GetMulticallContractReturnType`](GetMulticallContractReturnType.md)\<`contract`, `options`\[`"mutability"`\]\>, `options`\[`"error"`\], `allowFailure`, `options`\[`"extraProperties"`\]\>] : `contracts` *extends* readonly [infer contract, `...(infer rest)`] ? [`MulticallResults`](MulticallResults.md)\<[`...rest`], `allowFailure`, `options`, [`...result`, [`MulticallResponse`](MulticallResponse.md)\<[`GetMulticallContractReturnType`](GetMulticallContractReturnType.md)\<`contract`, `options`\[`"mutability"`\]\>, `options`\[`"error"`\], `allowFailure`, `options`\[`"extraProperties"`\]\>]\> : readonly `unknown`[] *extends* `contracts` ? [`MulticallResponse`](MulticallResponse.md)\<`unknown`, `options`\[`"error"`\], `allowFailure`, `options`\[`"extraProperties"`\]\>[] : `contracts` *extends* readonly infer contract[] ? [`MulticallResponse`](MulticallResponse.md)\<[`GetMulticallContractReturnType`](GetMulticallContractReturnType.md)\<`contract`, `options`\[`"mutability"`\]\>, `options`\[`"error"`\], `allowFailure`, `options`\[`"extraProperties"`\]\>[] : [`MulticallResponse`](MulticallResponse.md)\<`unknown`, `options`\[`"error"`\], `allowFailure`, `options`\[`"extraProperties"`\]\>[]

## Type Parameters

• **contracts** *extends* readonly `unknown`[] = readonly [`ContractFunctionParameters`](ContractFunctionParameters.md)[]

• **allowFailure** *extends* `boolean` = `true`

• **options** *extends* `object` = `object`

• **result** *extends* `any`[] = []

## Defined in

node\_modules/viem/\_types/types/multicall.d.ts:19
