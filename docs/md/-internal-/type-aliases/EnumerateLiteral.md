[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / EnumerateLiteral

# Type Alias: EnumerateLiteral\<T\>

> **EnumerateLiteral**\<`T`\> = `` { [K in keyof T]: T[K] extends `${infer n}` ? n : never } ``\[keyof `T`\]

Defined in: [src/types.ts:27](https://github.com/paraswap/paraswap-sdk/blob/master/src/types.ts#L27)

## Type Parameters

### T

`T` *extends* [`Record`](Record.md)\<`string`, `any`\>
