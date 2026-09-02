[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / MarkRequired

# Type Alias: MarkRequired\<Type, Keys\>

> **MarkRequired**\<`Type`, `Keys`\> = `Type` *extends* `Type` ? `Type` & [`Required`](Required.md)\<[`Pick`](Pick.md)\<`Type`, `Keys`\>\> : `never`

Defined in: node\_modules/.pnpm/ts-essentials@10.0.3\_typescript@5.9.3/node\_modules/ts-essentials/dist/mark-required/index.d.ts:1

## Type Parameters

### Type

`Type`

### Keys

`Keys` *extends* keyof `Type`
