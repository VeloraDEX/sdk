[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / MergeExtendableRecursively

# Type Alias: MergeExtendableRecursively\<Accum, Replacements\>

> **MergeExtendableRecursively**\<`Accum`, `Replacements`\>: `Replacements` *extends* [infer Head, infer Tail] ? `Tail` *extends* [`Record`](Record.md)\<`string`, `any`\>[] ? [`MergeExtendableRecursively`](MergeExtendableRecursively.md)\<[`MergeExtendableOnce`](MergeExtendableOnce.md)\<`Accum`, `Head`\>, `Tail`\> : [`MergeExtendableOnce`](MergeExtendableOnce.md)\<`Accum`, `Head`\> : `Accum`

## Type Parameters

• **Accum** *extends* [`Record`](Record.md)\<`string`, `any`\>

• **Replacements** *extends* [`Record`](Record.md)\<`string`, `any`\>[]

## Defined in

[src/sdk/partial.ts:71](https://github.com/VeloraDEX/sdk/blob/feat/extend_delta_orders_filtering/src/sdk/partial.ts#L71)
