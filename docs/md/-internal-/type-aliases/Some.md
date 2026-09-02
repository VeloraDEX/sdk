[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Some

# Type Alias: Some\<array, value\>

> **Some**\<`array`, `value`\> = `array` *extends* readonly \[`value`, `...unknown[]`\] ? `true` : `array` *extends* readonly \[`unknown`, `...(infer rest)`\] ? `Some`\<`rest`, `value`\> : `false`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/utils.d.ts:148

## Type Parameters

### array

`array` *extends* readonly `unknown`[]

### value

`value`

## Description

Returns truthy if `array` contains `value`.

## Example

```ts
Some<[1, 2, 3], 2>
=> true
```
