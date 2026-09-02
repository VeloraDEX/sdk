[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Error

# Type Alias: Error\<messages\>

> **Error**\<`messages`\> = `messages` *extends* `string` ? \[`` `Error: ${messages}` ``\] : `` { [key in keyof messages]: messages[key] extends infer message extends string ? `Error: ${message}` : never } ``

Defined in: node\_modules/.pnpm/abitype@1.2.3\_typescript@5.9.3\_zod@3.25.76/node\_modules/abitype/dist/types/types.d.ts:11

Prints custom error message

## Type Parameters

### messages

`messages` *extends* `string` \| `string`[]

Error message

## Returns

Custom error message

## Example

```ts
type Result = Error<'Custom error message'>
//   ^? type Result = ['Error: Custom error message']
```
