[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / MergeExtendableRecursively

# Type Alias: MergeExtendableRecursively\<Accum, Replacements\>

> **MergeExtendableRecursively**\<`Accum`, `Replacements`\> = `Replacements` *extends* \[infer Head, infer Tail\] ? `Tail` *extends* [`Record`](Record.md)\<`string`, `any`\>[] ? `MergeExtendableRecursively`\<[`MergeExtendableOnce`](MergeExtendableOnce.md)\<`Accum`, `Head`\>, `Tail`\> : [`MergeExtendableOnce`](MergeExtendableOnce.md)\<`Accum`, `Head`\> : `Accum`

Defined in: [src/sdk/partial.ts:75](https://github.com/paraswap/paraswap-sdk/blob/master/src/sdk/partial.ts#L75)

## Type Parameters

### Accum

`Accum` *extends* [`Record`](Record.md)\<`string`, `any`\>

### Replacements

`Replacements` *extends* [`Record`](Record.md)\<`string`, `any`\>[]
