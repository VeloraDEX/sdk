[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / PrimitiveIntegerType

# Type Alias: PrimitiveIntegerType\<Type\>

> **PrimitiveIntegerType**\<`Type`\> = `Type` *extends* `` `uint${string}[${infer Size}]` `` \| `` `int${string}[${infer Size}]` `` ? [`_TypedArray`](TypedArray.md)\<[`Numbers`](Numbers.md), `Size`\> : `Type` *extends* `"uint"` \| `"int"` \| `` `int${string}` `` \| `` `uint${string}` `` ? [`Numbers`](Numbers.md) : `never`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_abi\_types.d.ts:108

## Type Parameters

### Type

`Type` *extends* `string`
