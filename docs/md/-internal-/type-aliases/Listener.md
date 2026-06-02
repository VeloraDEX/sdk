[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Listener

# Type Alias: Listener\<K, T, F\>

> **Listener**\<`K`, `T`, `F`\>: `T` *extends* [`DefaultEventMap`](DefaultEventMap.md) ? `F` : `K` *extends* keyof `T` ? `T`\[`K`\] *extends* `unknown`[] ? (...`args`) => `void` : `never` : `never`

## Type Parameters

• **K**

• **T**

• **F**

## Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/events.d.ts:111
