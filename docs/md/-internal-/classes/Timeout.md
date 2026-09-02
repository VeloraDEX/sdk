[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Timeout

# Class: Timeout

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/timers.d.ts:90

This object is created internally and is returned from `setTimeout()` and `setInterval()`. It can be passed to either `clearTimeout()` or `clearInterval()` in order to cancel the
scheduled actions.

By default, when a timer is scheduled using either `setTimeout()` or `setInterval()`, the Node.js event loop will continue running as long as the
timer is active. Each of the `Timeout` objects returned by these functions
export both `timeout.ref()` and `timeout.unref()` functions that can be used to
control this default behavior.

## Implements

- [`Timer`](../interfaces/Timer.md)

## Constructors

### Constructor

> **new Timeout**(): `Timeout`

#### Returns

`Timeout`

## Methods

### \[dispose\]()

> **\[dispose\]**(): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/timers.d.ts:130

Cancels the timeout.

#### Returns

`void`

#### Since

v20.5.0

***

### \[toPrimitive\]()

> **\[toPrimitive\]**(): `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/timers.d.ts:125

#### Returns

`number`

#### Implementation of

[`Timer`](../interfaces/Timer.md).[`[toPrimitive]`](../interfaces/Timer.md#toprimitive)

***

### hasRef()

> **hasRef**(): `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/timers.d.ts:112

If true, the `Timeout` object will keep the Node.js event loop active.

#### Returns

`boolean`

#### Since

v11.0.0

#### Implementation of

[`Timer`](../interfaces/Timer.md).[`hasRef`](../interfaces/Timer.md#hasref)

***

### ref()

> **ref**(): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/timers.d.ts:99

When called, requests that the Node.js event loop _not_ exit so long as the`Timeout` is active. Calling `timeout.ref()` multiple times will have no effect.

By default, all `Timeout` objects are "ref'ed", making it normally unnecessary
to call `timeout.ref()` unless `timeout.unref()` had been called previously.

#### Returns

`this`

a reference to `timeout`

#### Since

v0.9.1

#### Implementation of

[`Timer`](../interfaces/Timer.md).[`ref`](../interfaces/Timer.md#ref)

***

### refresh()

> **refresh**(): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/timers.d.ts:124

Sets the timer's start time to the current time, and reschedules the timer to
call its callback at the previously specified duration adjusted to the current
time. This is useful for refreshing a timer without allocating a new
JavaScript object.

Using this on a timer that has already called its callback will reactivate the
timer.

#### Returns

`this`

a reference to `timeout`

#### Since

v10.2.0

#### Implementation of

[`Timer`](../interfaces/Timer.md).[`refresh`](../interfaces/Timer.md#refresh)

***

### unref()

> **unref**(): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/timers.d.ts:107

When called, the active `Timeout` object will not require the Node.js event loop
to remain active. If there is no other activity keeping the event loop running,
the process may exit before the `Timeout` object's callback is invoked. Calling `timeout.unref()` multiple times will have no effect.

#### Returns

`this`

a reference to `timeout`

#### Since

v0.9.1

#### Implementation of

[`Timer`](../interfaces/Timer.md).[`unref`](../interfaces/Timer.md#unref)
