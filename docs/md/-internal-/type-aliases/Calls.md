[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Calls

# Type Alias: Calls\<calls, extraProperties, result\>

> **Calls**\<`calls`, `extraProperties`, `result`\>: `calls` *extends* readonly [] ? readonly [] : `calls` *extends* readonly [infer call] ? readonly [`...result`, [`Prettify`](Prettify.md)\<[`Call`](Call.md)\<`call`, `extraProperties`\>\>] : `calls` *extends* readonly [infer call, `...(infer rest)`] ? [`Calls`](Calls.md)\<[`...rest`], `extraProperties`, [`...result`, [`Prettify`](Prettify.md)\<[`Call`](Call.md)\<`call`, `extraProperties`\>\>]\> : readonly `unknown`[] *extends* `calls` ? `calls` : `calls` *extends* readonly infer call[] ? readonly [`Prettify`](Prettify.md)\<`call`\>[] : readonly [`OneOf`](OneOf.md)\<[`Call`](Call.md)\>[]

## Type Parameters

• **calls** *extends* readonly `unknown`[]

• **extraProperties** *extends* [`Record`](Record.md)\<`string`, `unknown`\> = `object`

• **result** *extends* readonly `any`[] = []

## Defined in

node\_modules/viem/\_types/types/calls.d.ts:16
