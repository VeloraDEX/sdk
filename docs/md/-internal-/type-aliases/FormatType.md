[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / FormatType

# Type Alias: FormatType\<T, F\>

> **FormatType**\<`T`, `F`\> = `number` *extends* [`Extract`](Extract.md)\<`T`, [`Numbers`](Numbers.md)\> ? [`NumberTypes`](NumberTypes.md)\[`F`\[`"number"`\]\] \| [`Exclude`](Exclude.md)\<`T`, [`Numbers`](Numbers.md)\> : `Uint8Array` *extends* [`Extract`](Extract.md)\<`T`, [`Bytes`](Bytes-1.md)\> ? [`ByteTypes`](ByteTypes.md)\[`F`\[`"bytes"`\]\] \| [`Exclude`](Exclude.md)\<`T`, [`Bytes`](Bytes-1.md)\> : `T` *extends* `object` \| `undefined` ? `{ [P in keyof T]: FormatType<T[P], F> }` : `T`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/data\_format\_types.d.ts:39

## Type Parameters

### T

`T`

### F

`F` *extends* [`DataFormat`](DataFormat.md)
