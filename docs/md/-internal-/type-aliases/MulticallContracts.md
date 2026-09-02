[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / MulticallContracts

# Type Alias: MulticallContracts\<contracts, options, result\>

> **MulticallContracts**\<`contracts`, `options`, `result`\> = `contracts` *extends* readonly \[\] ? readonly \[\] : `contracts` *extends* readonly \[infer contract\] ? readonly \[`...result`, [`MaybePartial`](MaybePartial.md)\<[`Prettify`](Prettify-1.md)\<[`GetMulticallContractParameters`](GetMulticallContractParameters.md)\<`contract`, `options`\[`"mutability"`\]\> & `options`\[`"properties"`\]\>, `options`\[`"optional"`\]\>\] : `contracts` *extends* readonly \[infer contract, `...(infer rest)`\] ? `MulticallContracts`\<\[`...rest`\], `options`, \[`...result`, [`MaybePartial`](MaybePartial.md)\<[`Prettify`](Prettify-1.md)\<[`GetMulticallContractParameters`](GetMulticallContractParameters.md)\<`contract`, `options`\[`"mutability"`\]\> & `options`\[`"properties"`\]\>, `options`\[`"optional"`\]\>\]\> : readonly `unknown`[] *extends* `contracts` ? `contracts` : `contracts` *extends* readonly infer contract[] ? readonly [`MaybePartial`](MaybePartial.md)\<[`Prettify`](Prettify-1.md)\<`contract` & ...\[...\]\>, `options`\[`"optional"`\]\>[] : readonly [`MaybePartial`](MaybePartial.md)\<[`Prettify`](Prettify-1.md)\<[`ContractFunctionParameters`](ContractFunctionParameters.md) & ...\[...\]\>, `options`\[`"optional"`\]\>[]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/multicall.d.ts:4

## Type Parameters

### contracts

`contracts` *extends* readonly `unknown`[]

### options

`options` *extends* `object` = \{ `mutability`: [`AbiStateMutability`](AbiStateMutability.md); \}

### result

`result` *extends* readonly `any`[] = \[\]
