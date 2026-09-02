[**@velora-dex/sdk**](../../../../README.md)

***

[@velora-dex/sdk](../../../../globals.md) / [\<internal\>](../../../README.md) / [EventEmitter](../README.md) / ArgumentMap

# Type Alias: ArgumentMap\<T\>

> **ArgumentMap**\<`T`\> = `{ [K in keyof T]: T[K] extends (args: any[]) => void ? Parameters<T[K]> : T[K] extends any[] ? T[K] : any[] }`

Defined in: node\_modules/.pnpm/eventemitter3@5.0.4/node\_modules/eventemitter3/index.d.ts:109

## Type Parameters

### T

`T` *extends* `object`
