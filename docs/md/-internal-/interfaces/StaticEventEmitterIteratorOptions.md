[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / StaticEventEmitterIteratorOptions

# Interface: StaticEventEmitterIteratorOptions

## Extends

- [`StaticEventEmitterOptions`](StaticEventEmitterOptions.md)

## Properties

### close?

> `optional` **close**: `string`[]

Names of events that will end the iteration.

#### Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/events.d.ts:88

***

### highWaterMark?

> `optional` **highWaterMark**: `number`

The high watermark. The emitter is paused every time the size of events being buffered is higher than it.
Supported only on emitters implementing `pause()` and `resume()` methods.

#### Default

```ts
Number.MAX_SAFE_INTEGER
```

#### Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/events.d.ts:94

***

### lowWaterMark?

> `optional` **lowWaterMark**: `number`

The low watermark. The emitter is resumed every time the size of events being buffered is lower than it.
Supported only on emitters implementing `pause()` and `resume()` methods.

#### Default

```ts
1
```

#### Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/events.d.ts:100

***

### signal?

> `optional` **signal**: `AbortSignal`

Can be used to cancel awaiting events.

#### Inherited from

[`StaticEventEmitterOptions`](StaticEventEmitterOptions.md).[`signal`](StaticEventEmitterOptions.md#signal)

#### Defined in

node\_modules/.pnpm/@types+node@22.7.5/node\_modules/@types/node/events.d.ts:82
