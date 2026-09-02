[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Listener

# Type Alias: Listener\<Events, EventName\>

> **Listener**\<`Events`, `EventName`\> = `EventName` *extends* keyof `Events` ? ((...`args`) => `void`) \| `EventName` *extends* keyof [`EventEmitterBuiltInEventMap`](../namespaces/EventEmitter/interfaces/EventEmitterBuiltInEventMap.md) ? (...`args`) => `void` : `never` : `EventName` *extends* keyof [`EventEmitterBuiltInEventMap`](../namespaces/EventEmitter/interfaces/EventEmitterBuiltInEventMap.md) ? (...`args`) => `void` : (...`args`) => `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:116

## Type Parameters

### Events

`Events` *extends* [`EventMap`](EventMap.md)\<`Events`\>

### EventName

`EventName`
