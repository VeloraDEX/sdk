[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / MarkOptional

# Type Alias: MarkOptional\<Type, Keys\>

> **MarkOptional**\<`Type`, `Keys`\> = `Type` *extends* `Type` ? [`Omit`](Omit.md)\<`Type`, `Keys`\> & [`Partial`](Partial.md)\<[`Pick`](Pick.md)\<`Type`, `Keys`\>\> : `never`

Defined in: node\_modules/.pnpm/ts-essentials@10.0.3\_typescript@5.9.3/node\_modules/ts-essentials/dist/mark-optional/index.d.ts:1

## Type Parameters

### Type

`Type`

### Keys

`Keys` *extends* keyof `Type`
