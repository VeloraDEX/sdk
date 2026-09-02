[**@velora-dex/sdk**](../../../../README.md)

***

[@velora-dex/sdk](../../../../globals.md) / [\<internal\>](../../../README.md) / [EventEmitter](../README-1.md) / EventEmitterAsyncResourceOptions

# Interface: EventEmitterAsyncResourceOptions

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:568

## Extends

- [`AsyncResourceOptions`](../../../interfaces/AsyncResourceOptions.md).[`EventEmitterOptions`](../../../interfaces/EventEmitterOptions.md)

## Properties

### captureRejections?

> `optional` **captureRejections?**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:77

Enables automatic capturing of promise rejection.

#### Inherited from

[`EventEmitterOptions`](../../../interfaces/EventEmitterOptions.md).[`captureRejections`](../../../interfaces/EventEmitterOptions.md#capturerejections)

***

### name?

> `optional` **name?**: `string`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:574

The type of async event, this is required when instantiating `EventEmitterAsyncResource`
directly rather than as a child class.

#### Default

```ts
new.target.name if instantiated as a child class.
```

***

### requireManualDestroy?

> `optional` **requireManualDestroy?**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/async\_hooks.d.ts:224

Disables automatic `emitDestroy` when the object is garbage collected.
This usually does not need to be set (even if `emitDestroy` is called
manually), unless the resource's `asyncId` is retrieved and the
sensitive API's `emitDestroy` is called with it.

#### Default

```ts
false
```

#### Inherited from

[`AsyncResourceOptions`](../../../interfaces/AsyncResourceOptions.md).[`requireManualDestroy`](../../../interfaces/AsyncResourceOptions.md#requiremanualdestroy)

***

### triggerAsyncId?

> `optional` **triggerAsyncId?**: `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/async\_hooks.d.ts:216

The ID of the execution context that created this async event.

#### Default

```ts
executionAsyncId()
```

#### Inherited from

[`AsyncResourceOptions`](../../../interfaces/AsyncResourceOptions.md).[`triggerAsyncId`](../../../interfaces/AsyncResourceOptions.md#triggerasyncid)
