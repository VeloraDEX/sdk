[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / PrimitiveBytesType

# Type Alias: PrimitiveBytesType\<Type\>

> **PrimitiveBytesType**\<`Type`\> = `Type` *extends* `` `bytes${string}[${infer Size}]` `` ? [`_TypedArray`](TypedArray.md)\<[`Bytes`](Bytes-1.md), `Size`\> : `Type` *extends* `"bytes"` \| `` `bytes${string}` `` ? [`Bytes`](Bytes-1.md) : `never`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_abi\_types.d.ts:109

## Type Parameters

### Type

`Type` *extends* `string`
