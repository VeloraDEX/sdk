[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / PrimitiveAddressType

# Type Alias: PrimitiveAddressType\<Type\>

> **PrimitiveAddressType**\<`Type`\> = `Type` *extends* `` `address[${infer Size}]` `` ? [`_TypedArray`](TypedArray.md)\<[`Address`](Address-2.md), `Size`\> : `Type` *extends* `"address"` ? [`Address`](Address-2.md) : `never`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_abi\_types.d.ts:105

## Type Parameters

### Type

`Type` *extends* `string`
