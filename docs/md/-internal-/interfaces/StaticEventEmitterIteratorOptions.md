[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / StaticEventEmitterIteratorOptions

# Interface: StaticEventEmitterIteratorOptions

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:85

## Extends

- [`StaticEventEmitterOptions`](StaticEventEmitterOptions.md)

## Properties

### close?

> `optional` **close?**: `string`[]

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:89

Names of events that will end the iteration.

***

### highWaterMark?

> `optional` **highWaterMark?**: `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:95

The high watermark. The emitter is paused every time the size of events being buffered is higher than it.
Supported only on emitters implementing `pause()` and `resume()` methods.

#### Default

```ts
Number.MAX_SAFE_INTEGER
```

***

### lowWaterMark?

> `optional` **lowWaterMark?**: `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:101

The low watermark. The emitter is resumed every time the size of events being buffered is lower than it.
Supported only on emitters implementing `pause()` and `resume()` methods.

#### Default

```ts
1
```

***

### signal?

> `optional` **signal?**: `AbortSignal`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:83

Can be used to cancel awaiting events.

#### Inherited from

[`StaticEventEmitterOptions`](StaticEventEmitterOptions.md).[`signal`](StaticEventEmitterOptions.md#signal)
