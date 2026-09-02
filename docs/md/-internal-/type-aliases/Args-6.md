[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Args

# Type Alias: Args\<Events, EventName\>

> **Args**\<`Events`, `EventName`\> = `EventName` *extends* keyof `Events` ? `Events`\[`EventName`\] \| `EventName` *extends* keyof [`EventEmitterBuiltInEventMap`](../namespaces/EventEmitter/interfaces/EventEmitterBuiltInEventMap.md) ? [`EventEmitterBuiltInEventMap`](../namespaces/EventEmitter/interfaces/EventEmitterBuiltInEventMap.md)\[`EventName`\] : `never` : `EventName` *extends* keyof [`EventEmitterBuiltInEventMap`](../namespaces/EventEmitter/interfaces/EventEmitterBuiltInEventMap.md) ? [`EventEmitterBuiltInEventMap`](../namespaces/EventEmitter/interfaces/EventEmitterBuiltInEventMap.md)\[`EventName`\] : `any`[]

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:105

## Type Parameters

### Events

`Events` *extends* [`EventMap`](EventMap.md)\<`Events`\>

### EventName

`EventName`
