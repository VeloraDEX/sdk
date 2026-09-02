[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Assign\_

# Type Alias: Assign\_\<T, U\>

> **Assign\_**\<`T`, `U`\> = `{ [K in keyof T as K extends keyof U ? U[K] extends void ? never : K : K]: K extends keyof U ? U[K] : T[K] }`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/utils.d.ts:93

## Type Parameters

### T

`T`

### U

`U`
