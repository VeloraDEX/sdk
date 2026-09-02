[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Calls

# Type Alias: Calls\<calls, extraProperties, result\>

> **Calls**\<`calls`, `extraProperties`, `result`\> = `calls` *extends* readonly \[\] ? readonly \[\] : `calls` *extends* readonly \[infer call\] ? readonly \[`...result`, [`Prettify`](Prettify-1.md)\<[`Call`](Call.md)\<`call`, `extraProperties`\>\>\] : `calls` *extends* readonly \[infer call, `...(infer rest)`\] ? `Calls`\<\[`...rest`\], `extraProperties`, \[`...result`, [`Prettify`](Prettify-1.md)\<[`Call`](Call.md)\<`call`, `extraProperties`\>\>\]\> : readonly `unknown`[] *extends* `calls` ? `calls` : `calls` *extends* readonly infer call[] ? readonly [`Prettify`](Prettify-1.md)\<`call`\>[] : readonly [`OneOf`](OneOf.md)\<[`Call`](Call.md)\>[]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/calls.d.ts:16

## Type Parameters

### calls

`calls` *extends* readonly `unknown`[]

### extraProperties

`extraProperties` *extends* [`Record`](Record.md)\<`string`, `unknown`\> = \{ \}

### result

`result` *extends* readonly `any`[] = \[\]
