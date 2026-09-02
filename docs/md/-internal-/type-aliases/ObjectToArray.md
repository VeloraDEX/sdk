[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ObjectToArray

# Type Alias: ObjectToArray\<T\>

> **ObjectToArray**\<`T`\> = `T` *extends* \[`...(infer R)`, infer A\] ? [`Record`](Record.md)\<`R`\[`"length"`\], `A`\> & `ObjectToArray`\<`R`\> : `T`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_abi\_types.d.ts:115

## Type Parameters

### T

`T` *extends* `unknown`[]
