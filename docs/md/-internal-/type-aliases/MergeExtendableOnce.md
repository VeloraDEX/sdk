[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / MergeExtendableOnce

# Type Alias: MergeExtendableOnce\<Accum, Replacement\>

> **MergeExtendableOnce**\<`Accum`, `Replacement`\> = `Accum` *extends* [`Record`](Record.md)\<keyof `Replacement`, `any`\> ? [`Merge`](Merge.md)\<`Accum`, `Replacement`\> : `Accum`

Defined in: [src/sdk/partial.ts:66](https://github.com/paraswap/paraswap-sdk/blob/master/src/sdk/partial.ts#L66)

## Type Parameters

### Accum

`Accum` *extends* [`Record`](Record.md)\<`string`, `any`\>

### Replacement

`Replacement` *extends* [`Record`](Record.md)\<`string`, `any`\>
