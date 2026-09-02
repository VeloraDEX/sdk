[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Range

# Type Alias: Range\<start, stop, result, padding, current\>

> **Range**\<`start`, `stop`, `result`, `padding`, `current`\> = `current` *extends* `stop` ? `current` *extends* `start` ? \[`current`\] : `result` *extends* \[\] ? \[\] : \[`...result`, `current`\] : `current` *extends* `start` ? `Range`\<`start`, `stop`, \[`current`\], `padding`\> : `result` *extends* \[\] ? `Range`\<`start`, `stop`, \[\], \[`...padding`, `0`\]\> : `Range`\<`start`, `stop`, \[`...result`, `current`\], `padding`\>

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/types.d.ts:122

Creates range between two positive numbers using [tail recursion](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html#tail-recursion-elimination-on-conditional-types).

## Type Parameters

### start

`start` *extends* `number`

Number to start range

### stop

`stop` *extends* `number`

Number to end range

### result

`result` *extends* `number`[] = \[\]

### padding

`padding` *extends* `0`[] = \[\]

### current

`current` *extends* `number` = \[`...padding`, `...result`\]\[`"length"`\] & `number`

## Returns

Array with inclusive range from [start](#start) to [stop](#stop)

## Example

```ts
type Result = Range<1, 3>
//   ^? type Result = [1, 2, 3]
```
