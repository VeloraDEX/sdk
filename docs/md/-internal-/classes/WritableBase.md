[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WritableBase

# Class: WritableBase

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:662

The `EventEmitter` class is defined and exposed by the `node:events` module:

```js
import { EventEmitter } from 'node:events';
```

All `EventEmitter`s emit the event `'newListener'` when new listeners are
added and `'removeListener'` when existing listeners are removed.

It supports the following option:

## Since

v0.1.26

## Extends

- [`Stream`](Stream.md)

## Extended by

- [`Writable`](../namespaces/internal/classes/Writable.md)

## Implements

- [`WritableStream`](../interfaces/WritableStream-1.md)

## Constructors

### Constructor

> **new WritableBase**(`opts?`): `WritableBase`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:723

#### Parameters

##### opts?

[`WritableOptions`](../namespaces/internal/interfaces/WritableOptions.md)

#### Returns

`WritableBase`

#### Overrides

[`Stream`](Stream.md).[`constructor`](Stream.md#constructor)

## Properties

### closed

> `readonly` **closed**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:712

Is `true` after `'close'` has been emitted.

#### Since

v18.0.0

***

### destroyed

> **destroyed**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:707

Is `true` after `writable.destroy()` has been called.

#### Since

v8.0.0

***

### errored

> `readonly` **errored**: `Error` \| `null`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:717

Returns error if the stream has been destroyed with an error.

#### Since

v18.0.0

***

### writable

> `readonly` **writable**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:668

Is `true` if it is safe to call `writable.write()`, which means
the stream has not been destroyed, errored, or ended.

#### Since

v11.4.0

#### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`writable`](../interfaces/WritableStream-1.md#writable)

***

### writableCorked

> `readonly` **writableCorked**: `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:702

Number of times `writable.uncork()` needs to be
called in order to fully uncork the stream.

#### Since

v13.2.0, v12.16.0

***

### writableEnded

> `readonly` **writableEnded**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:674

Is `true` after `writable.end()` has been called. This property
does not indicate whether the data has been flushed, for this use `writable.writableFinished` instead.

#### Since

v12.9.0

***

### writableFinished

> `readonly` **writableFinished**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:679

Is set to `true` immediately before the `'finish'` event is emitted.

#### Since

v12.6.0

***

### writableHighWaterMark

> `readonly` **writableHighWaterMark**: `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:684

Return the value of `highWaterMark` passed when creating this `Writable`.

#### Since

v9.3.0

***

### writableLength

> `readonly` **writableLength**: `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:691

This property contains the number of bytes (or objects) in the queue
ready to be written. The value provides introspection data regarding
the status of the `highWaterMark`.

#### Since

v9.4.0

***

### writableNeedDrain

> `readonly` **writableNeedDrain**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:722

Is `true` if the stream's buffer has been full and stream will emit `'drain'`.

#### Since

v15.2.0, v14.17.0

***

### writableObjectMode

> `readonly` **writableObjectMode**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:696

Getter for the property `objectMode` of a given `Writable` stream.

#### Since

v12.3.0

***

### captureRejections

> `static` **captureRejections**: `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:512

Value: [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)

Change the default `captureRejections` option on all new `EventEmitter` objects.

#### Since

v13.4.0, v12.16.0

#### Inherited from

[`Stream`](Stream.md).[`captureRejections`](Stream.md#capturerejections)

***

### captureRejectionSymbol

> `readonly` `static` **captureRejectionSymbol**: *typeof* [`captureRejectionSymbol`](EventEmitter-1.md#capturerejectionsymbol)

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:505

Value: `Symbol.for('nodejs.rejection')`

See how to write a custom `rejection handler`.

#### Since

v13.4.0, v12.16.0

#### Inherited from

[`Stream`](Stream.md).[`captureRejectionSymbol`](Stream.md#capturerejectionsymbol)

***

### defaultMaxListeners

> `static` **defaultMaxListeners**: `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:551

By default, a maximum of `10` listeners can be registered for any single
event. This limit can be changed for individual `EventEmitter` instances
using the `emitter.setMaxListeners(n)` method. To change the default
for _all_`EventEmitter` instances, the `events.defaultMaxListeners` property
can be used. If this value is not a positive number, a `RangeError` is thrown.

Take caution when setting the `events.defaultMaxListeners` because the
change affects _all_ `EventEmitter` instances, including those created before
the change is made. However, calling `emitter.setMaxListeners(n)` still has
precedence over `events.defaultMaxListeners`.

This is not a hard limit. The `EventEmitter` instance will allow
more listeners to be added but will output a trace warning to stderr indicating
that a "possible EventEmitter memory leak" has been detected. For any single
`EventEmitter`, the `emitter.getMaxListeners()` and `emitter.setMaxListeners()` methods can be used to
temporarily avoid this warning:

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.setMaxListeners(emitter.getMaxListeners() + 1);
emitter.once('event', () => {
  // do stuff
  emitter.setMaxListeners(Math.max(emitter.getMaxListeners() - 1, 0));
});
```

The `--trace-warnings` command-line flag can be used to display the
stack trace for such warnings.

The emitted warning can be inspected with `process.on('warning')` and will
have the additional `emitter`, `type`, and `count` properties, referring to
the event emitter instance, the event's name and the number of attached
listeners, respectively.
Its `name` property is set to `'MaxListenersExceededWarning'`.

#### Since

v0.11.2

#### Inherited from

[`Stream`](Stream.md).[`defaultMaxListeners`](Stream.md#defaultmaxlisteners)

***

### errorMonitor

> `readonly` `static` **errorMonitor**: *typeof* [`errorMonitor`](EventEmitter-1.md#errormonitor)

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:498

This symbol shall be used to install a listener for only monitoring `'error'` events. Listeners installed using this symbol are called before the regular `'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an `'error'` event is emitted. Therefore, the process will still crash if no
regular `'error'` listener is installed.

#### Since

v13.6.0, v12.17.0

#### Inherited from

[`Stream`](Stream.md).[`errorMonitor`](Stream.md#errormonitor)

## Methods

### \_construct()?

> `optional` **\_construct**(`callback`): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:732

#### Parameters

##### callback

(`error?`) => `void`

#### Returns

`void`

***

### \_destroy()

> **\_destroy**(`error`, `callback`): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:733

#### Parameters

##### error

`Error` \| `null`

##### callback

(`error?`) => `void`

#### Returns

`void`

***

### \_final()

> **\_final**(`callback`): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:734

#### Parameters

##### callback

(`error?`) => `void`

#### Returns

`void`

***

### \_write()

> **\_write**(`chunk`, `encoding`, `callback`): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:724

#### Parameters

##### chunk

`any`

##### encoding

[`BufferEncoding`](../type-aliases/BufferEncoding.md)

##### callback

(`error?`) => `void`

#### Returns

`void`

***

### \_writev()?

> `optional` **\_writev**(`chunks`, `callback`): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:725

#### Parameters

##### chunks

`object`[]

##### callback

(`error?`) => `void`

#### Returns

`void`

***

### \[captureRejectionSymbol\]()?

#### Call Signature

> `optional` **\[captureRejectionSymbol\]**\<`EventName`\>(`error`, `event`, ...`args`): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:146

##### Type Parameters

###### EventName

`EventName` *extends* `string` \| `symbol`

##### Parameters

###### error

`Error`

###### event

`EventName`

###### args

...[`Args`](../type-aliases/Args-6.md)\<\{ \}, `EventName`\>

##### Returns

`void`

##### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`[captureRejectionSymbol]`](../interfaces/WritableStream-1.md#capturerejectionsymbol)

##### Inherited from

[`Stream`](Stream.md).[`[captureRejectionSymbol]`](Stream.md#capturerejectionsymbol-1)

#### Call Signature

> `optional` **\[captureRejectionSymbol\]**(`error`, `event`, ...`args`): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:151

##### Parameters

###### error

`Error`

###### event

`string` \| `symbol`

###### args

...`any`[]

##### Returns

`void`

##### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`[captureRejectionSymbol]`](../interfaces/WritableStream-1.md#capturerejectionsymbol)

##### Inherited from

[`Stream`](Stream.md).[`[captureRejectionSymbol]`](Stream.md#capturerejectionsymbol-1)

***

### addListener()

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:900

Event emitter
The defined events on documents including:
1. close
2. drain
3. error
4. finish
5. pipe
6. unpipe

##### Parameters

###### event

`"close"`

###### listener

() => `void`

##### Returns

`this`

##### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`addListener`](../interfaces/WritableStream-1.md#addlistener)

##### Overrides

[`Stream`](Stream.md).[`addListener`](Stream.md#addlistener)

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:901

Event emitter
The defined events on documents including:
1. close
2. drain
3. error
4. finish
5. pipe
6. unpipe

##### Parameters

###### event

`"drain"`

###### listener

() => `void`

##### Returns

`this`

##### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`addListener`](../interfaces/WritableStream-1.md#addlistener)

##### Overrides

[`Stream`](Stream.md).[`addListener`](Stream.md#addlistener)

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:902

Event emitter
The defined events on documents including:
1. close
2. drain
3. error
4. finish
5. pipe
6. unpipe

##### Parameters

###### event

`"error"`

###### listener

(`err`) => `void`

##### Returns

`this`

##### Implementation of

`NodeJS.WritableStream.addListener`

##### Overrides

`Stream.addListener`

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:903

Event emitter
The defined events on documents including:
1. close
2. drain
3. error
4. finish
5. pipe
6. unpipe

##### Parameters

###### event

`"finish"`

###### listener

() => `void`

##### Returns

`this`

##### Implementation of

`NodeJS.WritableStream.addListener`

##### Overrides

`Stream.addListener`

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:904

Event emitter
The defined events on documents including:
1. close
2. drain
3. error
4. finish
5. pipe
6. unpipe

##### Parameters

###### event

`"pipe"`

###### listener

(`src`) => `void`

##### Returns

`this`

##### Implementation of

`NodeJS.WritableStream.addListener`

##### Overrides

`Stream.addListener`

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:905

Event emitter
The defined events on documents including:
1. close
2. drain
3. error
4. finish
5. pipe
6. unpipe

##### Parameters

###### event

`"unpipe"`

###### listener

(`src`) => `void`

##### Returns

`this`

##### Implementation of

`NodeJS.WritableStream.addListener`

##### Overrides

`Stream.addListener`

#### Call Signature

> **addListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:906

Event emitter
The defined events on documents including:
1. close
2. drain
3. error
4. finish
5. pipe
6. unpipe

##### Parameters

###### event

`string` \| `symbol`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Implementation of

`NodeJS.WritableStream.addListener`

##### Overrides

`Stream.addListener`

***

### compose()

> **compose**\<`T`\>(`stream`, `options?`): `T`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:36

#### Type Parameters

##### T

`T` *extends* [`ReadableStream`](../interfaces/ReadableStream-1.md)

#### Parameters

##### stream

[`ComposeFnParam`](../type-aliases/ComposeFnParam.md) \| `T` \| [`Iterable`](../interfaces/Iterable.md)\<`T`, `any`, `any`\> \| [`AsyncIterable`](../interfaces/AsyncIterable.md)\<`T`, `any`, `any`\>

##### options?

###### signal

`AbortSignal`

#### Returns

`T`

#### Inherited from

[`Stream`](Stream.md).[`compose`](Stream.md#compose)

***

### cork()

> **cork**(): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:838

The `writable.cork()` method forces all written data to be buffered in memory.
The buffered data will be flushed when either the [uncork](#uncork) or [end](#end) methods are called.

The primary intent of `writable.cork()` is to accommodate a situation in which
several small chunks are written to the stream in rapid succession. Instead of
immediately forwarding them to the underlying destination, `writable.cork()` buffers all the chunks until `writable.uncork()` is called, which will pass them
all to `writable._writev()`, if present. This prevents a head-of-line blocking
situation where data is being buffered while waiting for the first small chunk
to be processed. However, use of `writable.cork()` without implementing `writable._writev()` may have an adverse effect on throughput.

See also: `writable.uncork()`, `writable._writev()`.

#### Returns

`void`

#### Since

v0.11.2

***

### destroy()

> **destroy**(`error?`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:889

Destroy the stream. Optionally emit an `'error'` event, and emit a `'close'` event (unless `emitClose` is set to `false`). After this call, the writable
stream has ended and subsequent calls to `write()` or `end()` will result in
an `ERR_STREAM_DESTROYED` error.
This is a destructive and immediate way to destroy a stream. Previous calls to `write()` may not have drained, and may trigger an `ERR_STREAM_DESTROYED` error.
Use `end()` instead of destroy if data should flush before close, or wait for
the `'drain'` event before destroying the stream.

Once `destroy()` has been called any further calls will be a no-op and no
further errors except from `_destroy()` may be emitted as `'error'`.

Implementors should not override this method,
but instead implement `writable._destroy()`.

#### Parameters

##### error?

`Error`

Optional, an error to emit with `'error'` event.

#### Returns

`this`

#### Since

v8.0.0

***

### emit()

#### Call Signature

> **emit**(`event`): `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:907

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

##### Parameters

###### event

`"close"`

##### Returns

`boolean`

##### Since

v0.1.26

##### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`emit`](../interfaces/WritableStream-1.md#emit)

##### Overrides

[`Stream`](Stream.md).[`emit`](Stream.md#emit)

#### Call Signature

> **emit**(`event`): `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:908

##### Parameters

###### event

`"drain"`

##### Returns

`boolean`

##### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`emit`](../interfaces/WritableStream-1.md#emit)

##### Overrides

[`Stream`](Stream.md).[`emit`](Stream.md#emit)

#### Call Signature

> **emit**(`event`, `err`): `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:909

##### Parameters

###### event

`"error"`

###### err

`Error`

##### Returns

`boolean`

##### Implementation of

`NodeJS.WritableStream.emit`

##### Overrides

`Stream.emit`

#### Call Signature

> **emit**(`event`): `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:910

##### Parameters

###### event

`"finish"`

##### Returns

`boolean`

##### Implementation of

`NodeJS.WritableStream.emit`

##### Overrides

`Stream.emit`

#### Call Signature

> **emit**(`event`, `src`): `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:911

##### Parameters

###### event

`"pipe"`

###### src

[`Readable`](Readable.md)

##### Returns

`boolean`

##### Implementation of

`NodeJS.WritableStream.emit`

##### Overrides

`Stream.emit`

#### Call Signature

> **emit**(`event`, `src`): `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:912

##### Parameters

###### event

`"unpipe"`

###### src

[`Readable`](Readable.md)

##### Returns

`boolean`

##### Implementation of

`NodeJS.WritableStream.emit`

##### Overrides

`Stream.emit`

#### Call Signature

> **emit**(`event`, ...`args`): `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:913

##### Parameters

###### event

`string` \| `symbol`

###### args

...`any`[]

##### Returns

`boolean`

##### Implementation of

`NodeJS.WritableStream.emit`

##### Overrides

`Stream.emit`

***

### end()

#### Call Signature

> **end**(`cb?`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:821

Calling the `writable.end()` method signals that no more data will be written
to the `Writable`. The optional `chunk` and `encoding` arguments allow one
final additional chunk of data to be written immediately before closing the
stream.

Calling the [write](#write) method after calling [end](#end) will raise an error.

```js
// Write 'hello, ' and then end with 'world!'.
import fs from 'node:fs';
const file = fs.createWriteStream('example.txt');
file.write('hello, ');
file.end('world!');
// Writing more now is not allowed!
```

##### Parameters

###### cb?

() => `void`

##### Returns

`this`

##### Since

v0.9.4

##### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`end`](../interfaces/WritableStream-1.md#end)

#### Call Signature

> **end**(`chunk`, `cb?`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:822

Calling the `writable.end()` method signals that no more data will be written
to the `Writable`. The optional `chunk` and `encoding` arguments allow one
final additional chunk of data to be written immediately before closing the
stream.

Calling the [write](#write) method after calling [end](#end) will raise an error.

```js
// Write 'hello, ' and then end with 'world!'.
import fs from 'node:fs';
const file = fs.createWriteStream('example.txt');
file.write('hello, ');
file.end('world!');
// Writing more now is not allowed!
```

##### Parameters

###### chunk

`any`

Optional data to write. For streams not operating in object mode, `chunk` must be a {string}, {Buffer},
{TypedArray} or {DataView}. For object mode streams, `chunk` may be any JavaScript value other than `null`.

###### cb?

() => `void`

##### Returns

`this`

##### Since

v0.9.4

##### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`end`](../interfaces/WritableStream-1.md#end)

#### Call Signature

> **end**(`chunk`, `encoding`, `cb?`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:823

Calling the `writable.end()` method signals that no more data will be written
to the `Writable`. The optional `chunk` and `encoding` arguments allow one
final additional chunk of data to be written immediately before closing the
stream.

Calling the [write](#write) method after calling [end](#end) will raise an error.

```js
// Write 'hello, ' and then end with 'world!'.
import fs from 'node:fs';
const file = fs.createWriteStream('example.txt');
file.write('hello, ');
file.end('world!');
// Writing more now is not allowed!
```

##### Parameters

###### chunk

`any`

Optional data to write. For streams not operating in object mode, `chunk` must be a {string}, {Buffer},
{TypedArray} or {DataView}. For object mode streams, `chunk` may be any JavaScript value other than `null`.

###### encoding

[`BufferEncoding`](../type-aliases/BufferEncoding.md)

The encoding if `chunk` is a string

###### cb?

() => `void`

##### Returns

`this`

##### Since

v0.9.4

##### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`end`](../interfaces/WritableStream-1.md#end)

***

### eventNames()

> **eventNames**(): (`string` \| `symbol`)[]

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:1065

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

#### Returns

(`string` \| `symbol`)[]

#### Since

v6.0.0

#### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`eventNames`](../interfaces/WritableStream-1.md#eventnames)

#### Inherited from

[`Stream`](Stream.md).[`eventNames`](Stream.md#eventnames)

***

### getMaxListeners()

> **getMaxListeners**(): `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:879

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](#defaultmaxlisteners).

#### Returns

`number`

#### Since

v1.0.0

#### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`getMaxListeners`](../interfaces/WritableStream-1.md#getmaxlisteners)

#### Inherited from

[`Stream`](Stream.md).[`getMaxListeners`](Stream.md#getmaxlisteners)

***

### listenerCount()

#### Call Signature

> **listenerCount**\<`EventName`\>(`eventName`, `listener?`): `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:990

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

##### Type Parameters

###### EventName

`EventName` *extends* `string` \| `symbol`

##### Parameters

###### eventName

`EventName`

The name of the event being listened for

###### listener?

[`Listener`](../type-aliases/Listener-2.md)\<\{ \}, `EventName`\>

The event handler function

##### Returns

`number`

##### Since

v3.2.0

##### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`listenerCount`](../interfaces/WritableStream-1.md#listenercount)

##### Inherited from

[`Stream`](Stream.md).[`listenerCount`](Stream.md#listenercount)

#### Call Signature

> **listenerCount**\<`EventName`\>(`eventName`, `listener?`): `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:994

##### Type Parameters

###### EventName

`EventName` *extends* `string` \| `symbol`

##### Parameters

###### eventName

`EventName`

###### listener?

[`Listener`](../type-aliases/Listener-2.md)\<\{ \}, `EventName`\>

##### Returns

`number`

##### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`listenerCount`](../interfaces/WritableStream-1.md#listenercount)

##### Inherited from

[`Stream`](Stream.md).[`listenerCount`](Stream.md#listenercount)

***

### listeners()

#### Call Signature

> **listeners**\<`EventName`\>(`eventName`): [`Listener`](../type-aliases/Listener-2.md)\<\{ \}, `EventName`\>[]

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:892

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

##### Type Parameters

###### EventName

`EventName` *extends* `string` \| `symbol`

##### Parameters

###### eventName

`EventName`

##### Returns

[`Listener`](../type-aliases/Listener-2.md)\<\{ \}, `EventName`\>[]

##### Since

v0.1.26

##### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`listeners`](../interfaces/WritableStream-1.md#listeners)

##### Inherited from

[`Stream`](Stream.md).[`listeners`](Stream.md#listeners)

#### Call Signature

> **listeners**\<`EventName`\>(`eventName`): [`Listener`](../type-aliases/Listener-2.md)\<\{ \}, `EventName`\>[]

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:895

##### Type Parameters

###### EventName

`EventName` *extends* `string` \| `symbol`

##### Parameters

###### eventName

`EventName`

##### Returns

[`Listener`](../type-aliases/Listener-2.md)\<\{ \}, `EventName`\>[]

##### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`listeners`](../interfaces/WritableStream-1.md#listeners)

##### Inherited from

[`Stream`](Stream.md).[`listeners`](Stream.md#listeners)

***

### off()

#### Call Signature

> **off**\<`EventName`\>(`eventName`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:842

Alias for `emitter.removeListener()`.

##### Type Parameters

###### EventName

`EventName` *extends* `string` \| `symbol`

##### Parameters

###### eventName

`EventName`

###### listener

[`Listener`](../type-aliases/Listener-2.md)\<\{ \}, `EventName`\>

##### Returns

`this`

##### Since

v10.0.0

##### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`off`](../interfaces/WritableStream-1.md#off)

##### Inherited from

[`Stream`](Stream.md).[`off`](Stream.md#off)

#### Call Signature

> **off**\<`EventName`\>(`eventName`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:846

##### Type Parameters

###### EventName

`EventName` *extends* `string` \| `symbol`

##### Parameters

###### eventName

`EventName`

###### listener

[`Listener`](../type-aliases/Listener-2.md)\<\{ \}, `EventName`\>

##### Returns

`this`

##### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`off`](../interfaces/WritableStream-1.md#off)

##### Inherited from

[`Stream`](Stream.md).[`off`](Stream.md#off)

***

### on()

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:914

Adds the `listener` function to the end of the listeners array for the event
named `eventName`. No checks are made to see if the `listener` has already
been added. Multiple calls passing the same combination of `eventName` and
`listener` will result in the `listener` being added, and called, multiple times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Parameters

###### event

`"close"`

###### listener

() => `void`

The callback function

##### Returns

`this`

##### Since

v0.1.101

##### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`on`](../interfaces/WritableStream-1.md#on)

##### Overrides

[`Stream`](Stream.md).[`on`](Stream.md#on)

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:915

##### Parameters

###### event

`"drain"`

###### listener

() => `void`

##### Returns

`this`

##### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`on`](../interfaces/WritableStream-1.md#on)

##### Overrides

[`Stream`](Stream.md).[`on`](Stream.md#on)

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:916

##### Parameters

###### event

`"error"`

###### listener

(`err`) => `void`

##### Returns

`this`

##### Implementation of

`NodeJS.WritableStream.on`

##### Overrides

`Stream.on`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:917

##### Parameters

###### event

`"finish"`

###### listener

() => `void`

##### Returns

`this`

##### Implementation of

`NodeJS.WritableStream.on`

##### Overrides

`Stream.on`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:918

##### Parameters

###### event

`"pipe"`

###### listener

(`src`) => `void`

##### Returns

`this`

##### Implementation of

`NodeJS.WritableStream.on`

##### Overrides

`Stream.on`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:919

##### Parameters

###### event

`"unpipe"`

###### listener

(`src`) => `void`

##### Returns

`this`

##### Implementation of

`NodeJS.WritableStream.on`

##### Overrides

`Stream.on`

#### Call Signature

> **on**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:920

##### Parameters

###### event

`string` \| `symbol`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Implementation of

`NodeJS.WritableStream.on`

##### Overrides

`Stream.on`

***

### once()

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:921

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

##### Parameters

###### event

`"close"`

###### listener

() => `void`

The callback function

##### Returns

`this`

##### Since

v0.3.0

##### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`once`](../interfaces/WritableStream-1.md#once)

##### Overrides

[`Stream`](Stream.md).[`once`](Stream.md#once)

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:922

##### Parameters

###### event

`"drain"`

###### listener

() => `void`

##### Returns

`this`

##### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`once`](../interfaces/WritableStream-1.md#once)

##### Overrides

[`Stream`](Stream.md).[`once`](Stream.md#once)

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:923

##### Parameters

###### event

`"error"`

###### listener

(`err`) => `void`

##### Returns

`this`

##### Implementation of

`NodeJS.WritableStream.once`

##### Overrides

`Stream.once`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:924

##### Parameters

###### event

`"finish"`

###### listener

() => `void`

##### Returns

`this`

##### Implementation of

`NodeJS.WritableStream.once`

##### Overrides

`Stream.once`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:925

##### Parameters

###### event

`"pipe"`

###### listener

(`src`) => `void`

##### Returns

`this`

##### Implementation of

`NodeJS.WritableStream.once`

##### Overrides

`Stream.once`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:926

##### Parameters

###### event

`"unpipe"`

###### listener

(`src`) => `void`

##### Returns

`this`

##### Implementation of

`NodeJS.WritableStream.once`

##### Overrides

`Stream.once`

#### Call Signature

> **once**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:927

##### Parameters

###### event

`string` \| `symbol`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Implementation of

`NodeJS.WritableStream.once`

##### Overrides

`Stream.once`

***

### pipe()

> **pipe**\<`T`\>(`destination`, `options?`): `T`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:30

#### Type Parameters

##### T

`T` *extends* [`WritableStream`](../interfaces/WritableStream-1.md)

#### Parameters

##### destination

`T`

##### options?

###### end?

`boolean`

#### Returns

`T`

#### Inherited from

[`Stream`](Stream.md).[`pipe`](Stream.md#pipe)

***

### prependListener()

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:928

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

###### event

`"close"`

###### listener

() => `void`

The callback function

##### Returns

`this`

##### Since

v6.0.0

##### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`prependListener`](../interfaces/WritableStream-1.md#prependlistener)

##### Overrides

[`Stream`](Stream.md).[`prependListener`](Stream.md#prependlistener)

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:929

##### Parameters

###### event

`"drain"`

###### listener

() => `void`

##### Returns

`this`

##### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`prependListener`](../interfaces/WritableStream-1.md#prependlistener)

##### Overrides

[`Stream`](Stream.md).[`prependListener`](Stream.md#prependlistener)

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:930

##### Parameters

###### event

`"error"`

###### listener

(`err`) => `void`

##### Returns

`this`

##### Implementation of

`NodeJS.WritableStream.prependListener`

##### Overrides

`Stream.prependListener`

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:931

##### Parameters

###### event

`"finish"`

###### listener

() => `void`

##### Returns

`this`

##### Implementation of

`NodeJS.WritableStream.prependListener`

##### Overrides

`Stream.prependListener`

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:932

##### Parameters

###### event

`"pipe"`

###### listener

(`src`) => `void`

##### Returns

`this`

##### Implementation of

`NodeJS.WritableStream.prependListener`

##### Overrides

`Stream.prependListener`

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:933

##### Parameters

###### event

`"unpipe"`

###### listener

(`src`) => `void`

##### Returns

`this`

##### Implementation of

`NodeJS.WritableStream.prependListener`

##### Overrides

`Stream.prependListener`

#### Call Signature

> **prependListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:934

##### Parameters

###### event

`string` \| `symbol`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Implementation of

`NodeJS.WritableStream.prependListener`

##### Overrides

`Stream.prependListener`

***

### prependOnceListener()

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:935

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

###### event

`"close"`

###### listener

() => `void`

The callback function

##### Returns

`this`

##### Since

v6.0.0

##### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`prependOnceListener`](../interfaces/WritableStream-1.md#prependoncelistener)

##### Overrides

[`Stream`](Stream.md).[`prependOnceListener`](Stream.md#prependoncelistener)

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:936

##### Parameters

###### event

`"drain"`

###### listener

() => `void`

##### Returns

`this`

##### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`prependOnceListener`](../interfaces/WritableStream-1.md#prependoncelistener)

##### Overrides

[`Stream`](Stream.md).[`prependOnceListener`](Stream.md#prependoncelistener)

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:937

##### Parameters

###### event

`"error"`

###### listener

(`err`) => `void`

##### Returns

`this`

##### Implementation of

`NodeJS.WritableStream.prependOnceListener`

##### Overrides

`Stream.prependOnceListener`

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:938

##### Parameters

###### event

`"finish"`

###### listener

() => `void`

##### Returns

`this`

##### Implementation of

`NodeJS.WritableStream.prependOnceListener`

##### Overrides

`Stream.prependOnceListener`

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:939

##### Parameters

###### event

`"pipe"`

###### listener

(`src`) => `void`

##### Returns

`this`

##### Implementation of

`NodeJS.WritableStream.prependOnceListener`

##### Overrides

`Stream.prependOnceListener`

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:940

##### Parameters

###### event

`"unpipe"`

###### listener

(`src`) => `void`

##### Returns

`this`

##### Implementation of

`NodeJS.WritableStream.prependOnceListener`

##### Overrides

`Stream.prependOnceListener`

#### Call Signature

> **prependOnceListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:941

##### Parameters

###### event

`string` \| `symbol`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Implementation of

`NodeJS.WritableStream.prependOnceListener`

##### Overrides

`Stream.prependOnceListener`

***

### rawListeners()

#### Call Signature

> **rawListeners**\<`EventName`\>(`eventName`): [`Listener`](../type-aliases/Listener-2.md)\<\{ \}, `EventName`\>[]

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:928

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

##### Type Parameters

###### EventName

`EventName` *extends* `string` \| `symbol`

##### Parameters

###### eventName

`EventName`

##### Returns

[`Listener`](../type-aliases/Listener-2.md)\<\{ \}, `EventName`\>[]

##### Since

v9.4.0

##### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`rawListeners`](../interfaces/WritableStream-1.md#rawlisteners)

##### Inherited from

[`Stream`](Stream.md).[`rawListeners`](Stream.md#rawlisteners)

#### Call Signature

> **rawListeners**\<`EventName`\>(`eventName`): [`Listener`](../type-aliases/Listener-2.md)\<\{ \}, `EventName`\>[]

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:931

##### Type Parameters

###### EventName

`EventName` *extends* `string` \| `symbol`

##### Parameters

###### eventName

`EventName`

##### Returns

[`Listener`](../type-aliases/Listener-2.md)\<\{ \}, `EventName`\>[]

##### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`rawListeners`](../interfaces/WritableStream-1.md#rawlisteners)

##### Inherited from

[`Stream`](Stream.md).[`rawListeners`](Stream.md#rawlisteners)

***

### removeAllListeners()

#### Call Signature

> **removeAllListeners**\<`EventName`\>(`eventName`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:861

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Type Parameters

###### EventName

`EventName` *extends* `string` \| `symbol`

##### Parameters

###### eventName

`EventName`

##### Returns

`this`

##### Since

v0.1.26

##### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`removeAllListeners`](../interfaces/WritableStream-1.md#removealllisteners)

##### Inherited from

[`Stream`](Stream.md).[`removeAllListeners`](Stream.md#removealllisteners)

#### Call Signature

> **removeAllListeners**\<`EventName`\>(`eventName?`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:862

##### Type Parameters

###### EventName

`EventName` *extends* `string` \| `symbol`

##### Parameters

###### eventName?

`EventName`

##### Returns

`this`

##### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`removeAllListeners`](../interfaces/WritableStream-1.md#removealllisteners)

##### Inherited from

[`Stream`](Stream.md).[`removeAllListeners`](Stream.md#removealllisteners)

***

### removeListener()

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:942

Removes the specified `listener` from the listener array for the event named `eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any `removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')` listener is removed:

```js
import { EventEmitter } from 'node:events';
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

##### Parameters

###### event

`"close"`

###### listener

() => `void`

##### Returns

`this`

##### Since

v0.1.26

##### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`removeListener`](../interfaces/WritableStream-1.md#removelistener)

##### Overrides

[`Stream`](Stream.md).[`removeListener`](Stream.md#removelistener)

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:943

##### Parameters

###### event

`"drain"`

###### listener

() => `void`

##### Returns

`this`

##### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`removeListener`](../interfaces/WritableStream-1.md#removelistener)

##### Overrides

[`Stream`](Stream.md).[`removeListener`](Stream.md#removelistener)

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:944

##### Parameters

###### event

`"error"`

###### listener

(`err`) => `void`

##### Returns

`this`

##### Implementation of

`NodeJS.WritableStream.removeListener`

##### Overrides

`Stream.removeListener`

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:945

##### Parameters

###### event

`"finish"`

###### listener

() => `void`

##### Returns

`this`

##### Implementation of

`NodeJS.WritableStream.removeListener`

##### Overrides

`Stream.removeListener`

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:946

##### Parameters

###### event

`"pipe"`

###### listener

(`src`) => `void`

##### Returns

`this`

##### Implementation of

`NodeJS.WritableStream.removeListener`

##### Overrides

`Stream.removeListener`

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:947

##### Parameters

###### event

`"unpipe"`

###### listener

(`src`) => `void`

##### Returns

`this`

##### Implementation of

`NodeJS.WritableStream.removeListener`

##### Overrides

`Stream.removeListener`

#### Call Signature

> **removeListener**(`event`, `listener`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:948

##### Parameters

###### event

`string` \| `symbol`

###### listener

(...`args`) => `void`

##### Returns

`this`

##### Implementation of

`NodeJS.WritableStream.removeListener`

##### Overrides

`Stream.removeListener`

***

### setDefaultEncoding()

> **setDefaultEncoding**(`encoding`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:798

The `writable.setDefaultEncoding()` method sets the default `encoding` for a `Writable` stream.

#### Parameters

##### encoding

[`BufferEncoding`](../type-aliases/BufferEncoding.md)

The new default encoding

#### Returns

`this`

#### Since

v0.11.15

***

### setMaxListeners()

> **setMaxListeners**(`n`): `this`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:873

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to `Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

##### n

`number`

#### Returns

`this`

#### Since

v0.3.5

#### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`setMaxListeners`](../interfaces/WritableStream-1.md#setmaxlisteners)

#### Inherited from

[`Stream`](Stream.md).[`setMaxListeners`](Stream.md#setmaxlisteners)

***

### uncork()

> **uncork**(): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:872

The `writable.uncork()` method flushes all data buffered since [cork](#cork) was called.

When using `writable.cork()` and `writable.uncork()` to manage the buffering
of writes to a stream, defer calls to `writable.uncork()` using `process.nextTick()`. Doing so allows batching of all `writable.write()` calls that occur within a given Node.js event
loop phase.

```js
stream.cork();
stream.write('some ');
stream.write('data ');
process.nextTick(() => stream.uncork());
```

If the `writable.cork()` method is called multiple times on a stream, the
same number of calls to `writable.uncork()` must be called to flush the buffered
data.

```js
stream.cork();
stream.write('some ');
stream.cork();
stream.write('data ');
process.nextTick(() => {
  stream.uncork();
  // The data will not be flushed until uncork() is called a second time.
  stream.uncork();
});
```

See also: `writable.cork()`.

#### Returns

`void`

#### Since

v0.11.2

***

### write()

#### Call Signature

> **write**(`chunk`, `callback?`): `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:791

The `writable.write()` method writes some data to the stream, and calls the
supplied `callback` once the data has been fully handled. If an error
occurs, the `callback` will be called with the error as its
first argument. The `callback` is called asynchronously and before `'error'` is
emitted.

The return value is `true` if the internal buffer is less than the `highWaterMark` configured when the stream was created after admitting `chunk`.
If `false` is returned, further attempts to write data to the stream should
stop until the `'drain'` event is emitted.

While a stream is not draining, calls to `write()` will buffer `chunk`, and
return false. Once all currently buffered chunks are drained (accepted for
delivery by the operating system), the `'drain'` event will be emitted.
Once `write()` returns false, do not write more chunks
until the `'drain'` event is emitted. While calling `write()` on a stream that
is not draining is allowed, Node.js will buffer all written chunks until
maximum memory usage occurs, at which point it will abort unconditionally.
Even before it aborts, high memory usage will cause poor garbage collector
performance and high RSS (which is not typically released back to the system,
even after the memory is no longer required). Since TCP sockets may never
drain if the remote peer does not read the data, writing a socket that is
not draining may lead to a remotely exploitable vulnerability.

Writing data while the stream is not draining is particularly
problematic for a `Transform`, because the `Transform` streams are paused
by default until they are piped or a `'data'` or `'readable'` event handler
is added.

If the data to be written can be generated or fetched on demand, it is
recommended to encapsulate the logic into a `Readable` and use [pipe](#pipe). However, if calling `write()` is preferred, it is
possible to respect backpressure and avoid memory issues using the `'drain'` event:

```js
function write(data, cb) {
  if (!stream.write(data)) {
    stream.once('drain', cb);
  } else {
    process.nextTick(cb);
  }
}

// Wait for cb to be called before doing any other write.
write('hello', () => {
  console.log('Write completed, do more writes now.');
});
```

A `Writable` stream in object mode will always ignore the `encoding` argument.

##### Parameters

###### chunk

`any`

Optional data to write. For streams not operating in object mode, `chunk` must be a {string}, {Buffer},
{TypedArray} or {DataView}. For object mode streams, `chunk` may be any JavaScript value other than `null`.

###### callback?

(`error`) => `void`

Callback for when this chunk of data is flushed.

##### Returns

`boolean`

`false` if the stream wishes for the calling code to wait for the `'drain'` event to be emitted before continuing to write additional data; otherwise `true`.

##### Since

v0.9.4

##### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`write`](../interfaces/WritableStream-1.md#write)

#### Call Signature

> **write**(`chunk`, `encoding`, `callback?`): `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:792

The `writable.write()` method writes some data to the stream, and calls the
supplied `callback` once the data has been fully handled. If an error
occurs, the `callback` will be called with the error as its
first argument. The `callback` is called asynchronously and before `'error'` is
emitted.

The return value is `true` if the internal buffer is less than the `highWaterMark` configured when the stream was created after admitting `chunk`.
If `false` is returned, further attempts to write data to the stream should
stop until the `'drain'` event is emitted.

While a stream is not draining, calls to `write()` will buffer `chunk`, and
return false. Once all currently buffered chunks are drained (accepted for
delivery by the operating system), the `'drain'` event will be emitted.
Once `write()` returns false, do not write more chunks
until the `'drain'` event is emitted. While calling `write()` on a stream that
is not draining is allowed, Node.js will buffer all written chunks until
maximum memory usage occurs, at which point it will abort unconditionally.
Even before it aborts, high memory usage will cause poor garbage collector
performance and high RSS (which is not typically released back to the system,
even after the memory is no longer required). Since TCP sockets may never
drain if the remote peer does not read the data, writing a socket that is
not draining may lead to a remotely exploitable vulnerability.

Writing data while the stream is not draining is particularly
problematic for a `Transform`, because the `Transform` streams are paused
by default until they are piped or a `'data'` or `'readable'` event handler
is added.

If the data to be written can be generated or fetched on demand, it is
recommended to encapsulate the logic into a `Readable` and use [pipe](#pipe). However, if calling `write()` is preferred, it is
possible to respect backpressure and avoid memory issues using the `'drain'` event:

```js
function write(data, cb) {
  if (!stream.write(data)) {
    stream.once('drain', cb);
  } else {
    process.nextTick(cb);
  }
}

// Wait for cb to be called before doing any other write.
write('hello', () => {
  console.log('Write completed, do more writes now.');
});
```

A `Writable` stream in object mode will always ignore the `encoding` argument.

##### Parameters

###### chunk

`any`

Optional data to write. For streams not operating in object mode, `chunk` must be a {string}, {Buffer},
{TypedArray} or {DataView}. For object mode streams, `chunk` may be any JavaScript value other than `null`.

###### encoding

[`BufferEncoding`](../type-aliases/BufferEncoding.md)

The encoding, if `chunk` is a string.

###### callback?

(`error`) => `void`

Callback for when this chunk of data is flushed.

##### Returns

`boolean`

`false` if the stream wishes for the calling code to wait for the `'drain'` event to be emitted before continuing to write additional data; otherwise `true`.

##### Since

v0.9.4

##### Implementation of

[`WritableStream`](../interfaces/WritableStream-1.md).[`write`](../interfaces/WritableStream-1.md#write)

***

### addAbortListener()

> `static` **addAbortListener**(`signal`, `resource`): `Disposable`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:490

**`Experimental`**

Listens once to the `abort` event on the provided `signal`.

Listening to the `abort` event on abort signals is unsafe and may
lead to resource leaks since another third party with the signal can
call `e.stopImmediatePropagation()`. Unfortunately Node.js cannot change
this since it would violate the web standard. Additionally, the original
API makes it easy to forget to remove listeners.

This API allows safely using `AbortSignal`s in Node.js APIs by solving these
two issues by listening to the event such that `stopImmediatePropagation` does
not prevent the listener from running.

Returns a disposable so that it may be unsubscribed from more easily.

```js
import { addAbortListener } from 'node:events';

function example(signal) {
  let disposable;
  try {
    signal.addEventListener('abort', (e) => e.stopImmediatePropagation());
    disposable = addAbortListener(signal, (e) => {
      // Do something when signal is aborted.
    });
  } finally {
    disposable?.[Symbol.dispose]();
  }
}
```

#### Parameters

##### signal

`AbortSignal`

##### resource

(`event`) => `void`

#### Returns

`Disposable`

Disposable that removes the `abort` listener.

#### Since

v20.5.0

#### Inherited from

[`Stream`](Stream.md).[`addAbortListener`](Stream.md#addabortlistener)

***

### getEventListeners()

#### Call Signature

> `static` **getEventListeners**\<`Events`, `EventName`\>(`emitter`, `name`): [`Listener`](../type-aliases/Listener-2.md)\<`Events`, `EventName`\>[]

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:404

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
import { getEventListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  console.log(getEventListeners(ee, 'foo')); // [ [Function: listener] ]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  console.log(getEventListeners(et, 'foo')); // [ [Function: listener] ]
}
```

##### Type Parameters

###### Events

`Events` *extends* [`EventMap`](../type-aliases/EventMap.md)\<`Events`\>

###### EventName

`EventName` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### emitter

[`EventEmitter`](EventEmitter-1.md)\<`Events`\>

###### name

`EventName`

##### Returns

[`Listener`](../type-aliases/Listener-2.md)\<`Events`, `EventName`\>[]

##### Since

v15.2.0, v14.17.0

##### Inherited from

[`Stream`](Stream.md).[`getEventListeners`](Stream.md#geteventlisteners)

#### Call Signature

> `static` **getEventListeners**(`emitter`, `name`): `Function`[]

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:408

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
import { getEventListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  console.log(getEventListeners(ee, 'foo')); // [ [Function: listener] ]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  console.log(getEventListeners(et, 'foo')); // [ [Function: listener] ]
}
```

##### Parameters

###### emitter

`EventTarget` \| [`EventEmitter`](../interfaces/EventEmitter.md)\<\{ \}\>

###### name

`string` \| `symbol`

##### Returns

`Function`[]

##### Since

v15.2.0, v14.17.0

##### Inherited from

[`Stream`](Stream.md).[`getEventListeners`](Stream.md#geteventlisteners)

***

### getMaxListeners()

> `static` **getMaxListeners**(`emitter`): `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:440

Returns the currently set max amount of listeners.

For `EventEmitter`s this behaves exactly the same as calling `.getMaxListeners` on
the emitter.

For `EventTarget`s this is the only way to get the max event listeners for the
event target. If the number of event handlers on a single EventTarget exceeds
the max set, the EventTarget will print a warning.

```js
import { getMaxListeners, setMaxListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  console.log(getMaxListeners(ee)); // 10
  setMaxListeners(11, ee);
  console.log(getMaxListeners(ee)); // 11
}
{
  const et = new EventTarget();
  console.log(getMaxListeners(et)); // 10
  setMaxListeners(11, et);
  console.log(getMaxListeners(et)); // 11
}
```

#### Parameters

##### emitter

`EventTarget` \| [`EventEmitter`](../interfaces/EventEmitter.md)\<\{ \}\>

#### Returns

`number`

#### Since

v19.9.0

#### Inherited from

[`Stream`](Stream.md).[`getMaxListeners`](Stream.md#getmaxlisteners-1)

***

### ~~listenerCount()~~

#### Call Signature

> `static` **listenerCount**\<`Events`, `EventName`\>(`emitter`, `eventName`): `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:355

A class method that returns the number of listeners for the given `eventName` registered on the given `emitter`.

```js
import { EventEmitter, listenerCount } from 'node:events';

const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

##### Type Parameters

###### Events

`Events` *extends* [`EventMap`](../type-aliases/EventMap.md)\<`Events`\>

###### EventName

`EventName` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### emitter

[`EventEmitter`](EventEmitter-1.md)\<`Events`\>

The emitter to query

###### eventName

`EventName`

The event name

##### Returns

`number`

##### Since

v0.9.12

##### Deprecated

Since v3.2.0 - Use `listenerCount` instead.

##### Inherited from

[`Stream`](Stream.md).[`listenerCount`](Stream.md#listenercount-1)

#### Call Signature

> `static` **listenerCount**(`emitter`, `eventName`): `number`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:376

A class method that returns the number of listeners for the given `eventName` registered on the given `emitter`.

```js
import { EventEmitter, listenerCount } from 'node:events';

const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

##### Parameters

###### emitter

[`EventEmitter`](../interfaces/EventEmitter.md)

The emitter to query

###### eventName

`string` \| `symbol`

The event name

##### Returns

`number`

##### Since

v0.9.12

##### Deprecated

Since v3.2.0 - Use `listenerCount` instead.

##### Inherited from

[`Stream`](Stream.md).[`listenerCount`](Stream.md#listenercount-1)

***

### on()

#### Call Signature

> `static` **on**\<`Events`, `EventName`\>(`emitter`, `eventName`, `options?`): `AsyncIterator`\<[`Args`](../type-aliases/Args-6.md)\<`Events`, `EventName`\>\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:323

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar');
  ee.emit('foo', 42);
});

for await (const event of on(ee, 'foo')) {
  // The execution of this inner block is synchronous and it
  // processes one event at a time (even with await). Do not use
  // if concurrent execution is required.
  console.log(event); // prints ['bar'] [42]
}
// Unreachable here
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

Use the `close` option to specify an array of event names that will end the iteration:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar');
  ee.emit('foo', 42);
  ee.emit('close');
});

for await (const event of on(ee, 'foo', { close: ['close'] })) {
  console.log(event); // prints ['bar'] [42]
}
// the loop will exit after 'close' is emitted
console.log('done'); // prints 'done'
```

##### Type Parameters

###### Events

`Events` *extends* [`EventMap`](../type-aliases/EventMap.md)\<`Events`\>

###### EventName

`EventName` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### emitter

[`EventEmitter`](EventEmitter-1.md)\<`Events`\>

###### eventName

`EventName`

###### options?

[`StaticEventEmitterIteratorOptions`](../interfaces/StaticEventEmitterIteratorOptions.md)

##### Returns

`AsyncIterator`\<[`Args`](../type-aliases/Args-6.md)\<`Events`, `EventName`\>\>

An `AsyncIterator` that iterates `eventName` events emitted by the `emitter`

##### Since

v13.6.0, v12.16.0

##### Inherited from

[`Stream`](Stream.md).[`on`](Stream.md#on-1)

#### Call Signature

> `static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterator`\<`any`[]\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:328

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar');
  ee.emit('foo', 42);
});

for await (const event of on(ee, 'foo')) {
  // The execution of this inner block is synchronous and it
  // processes one event at a time (even with await). Do not use
  // if concurrent execution is required.
  console.log(event); // prints ['bar'] [42]
}
// Unreachable here
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

Use the `close` option to specify an array of event names that will end the iteration:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar');
  ee.emit('foo', 42);
  ee.emit('close');
});

for await (const event of on(ee, 'foo', { close: ['close'] })) {
  console.log(event); // prints ['bar'] [42]
}
// the loop will exit after 'close' is emitted
console.log('done'); // prints 'done'
```

##### Parameters

###### emitter

[`EventEmitter`](../interfaces/EventEmitter.md)

###### eventName

`string` \| `symbol`

###### options?

[`StaticEventEmitterIteratorOptions`](../interfaces/StaticEventEmitterIteratorOptions.md)

##### Returns

`AsyncIterator`\<`any`[]\>

An `AsyncIterator` that iterates `eventName` events emitted by the `emitter`

##### Since

v13.6.0, v12.16.0

##### Inherited from

[`Stream`](Stream.md).[`on`](Stream.md#on-1)

#### Call Signature

> `static` **on**(`emitter`, `eventName`, `options?`): `AsyncIterator`\<`any`[]\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:333

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar');
  ee.emit('foo', 42);
});

for await (const event of on(ee, 'foo')) {
  // The execution of this inner block is synchronous and it
  // processes one event at a time (even with await). Do not use
  // if concurrent execution is required.
  console.log(event); // prints ['bar'] [42]
}
// Unreachable here
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

Use the `close` option to specify an array of event names that will end the iteration:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar');
  ee.emit('foo', 42);
  ee.emit('close');
});

for await (const event of on(ee, 'foo', { close: ['close'] })) {
  console.log(event); // prints ['bar'] [42]
}
// the loop will exit after 'close' is emitted
console.log('done'); // prints 'done'
```

##### Parameters

###### emitter

`EventTarget`

###### eventName

`string`

###### options?

[`StaticEventEmitterIteratorOptions`](../interfaces/StaticEventEmitterIteratorOptions.md)

##### Returns

`AsyncIterator`\<`any`[]\>

An `AsyncIterator` that iterates `eventName` events emitted by the `emitter`

##### Since

v13.6.0, v12.16.0

##### Inherited from

[`Stream`](Stream.md).[`on`](Stream.md#on-1)

***

### once()

#### Call Signature

> `static` **once**\<`Events`, `EventName`\>(`emitter`, `eventName`, `options?`): `Promise`\<[`Args`](../type-aliases/Args-6.md)\<`Events`, `EventName`\>\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:232

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
import { once, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

process.nextTick(() => {
  ee.emit('myevent', 42);
});

const [value] = await once(ee, 'myevent');
console.log(value);

const err = new Error('kaboom');
process.nextTick(() => {
  ee.emit('error', err);
});

try {
  await once(ee, 'myevent');
} catch (err) {
  console.error('error happened', err);
}
```

The special handling of the `'error'` event is only used when `events.once()` is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.error('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

##### Type Parameters

###### Events

`Events` *extends* [`EventMap`](../type-aliases/EventMap.md)\<`Events`\>

###### EventName

`EventName` *extends* `string` \| `number` \| `symbol`

##### Parameters

###### emitter

[`EventEmitter`](EventEmitter-1.md)\<`Events`\>

###### eventName

`EventName`

###### options?

[`StaticEventEmitterOptions`](../interfaces/StaticEventEmitterOptions.md)

##### Returns

`Promise`\<[`Args`](../type-aliases/Args-6.md)\<`Events`, `EventName`\>\>

##### Since

v11.13.0, v10.16.0

##### Inherited from

[`Stream`](Stream.md).[`once`](Stream.md#once-1)

#### Call Signature

> `static` **once**(`emitter`, `eventName`, `options?`): `Promise`\<`any`[]\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:237

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
import { once, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

process.nextTick(() => {
  ee.emit('myevent', 42);
});

const [value] = await once(ee, 'myevent');
console.log(value);

const err = new Error('kaboom');
process.nextTick(() => {
  ee.emit('error', err);
});

try {
  await once(ee, 'myevent');
} catch (err) {
  console.error('error happened', err);
}
```

The special handling of the `'error'` event is only used when `events.once()` is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.error('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

##### Parameters

###### emitter

[`EventEmitter`](../interfaces/EventEmitter.md)

###### eventName

`string` \| `symbol`

###### options?

[`StaticEventEmitterOptions`](../interfaces/StaticEventEmitterOptions.md)

##### Returns

`Promise`\<`any`[]\>

##### Since

v11.13.0, v10.16.0

##### Inherited from

[`Stream`](Stream.md).[`once`](Stream.md#once-1)

#### Call Signature

> `static` **once**(`emitter`, `eventName`, `options?`): `Promise`\<`any`[]\>

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:242

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
import { once, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

process.nextTick(() => {
  ee.emit('myevent', 42);
});

const [value] = await once(ee, 'myevent');
console.log(value);

const err = new Error('kaboom');
process.nextTick(() => {
  ee.emit('error', err);
});

try {
  await once(ee, 'myevent');
} catch (err) {
  console.error('error happened', err);
}
```

The special handling of the `'error'` event is only used when `events.once()` is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.error('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

##### Parameters

###### emitter

`EventTarget`

###### eventName

`string`

###### options?

[`StaticEventEmitterOptions`](../interfaces/StaticEventEmitterOptions.md)

##### Returns

`Promise`\<`any`[]\>

##### Since

v11.13.0, v10.16.0

##### Inherited from

[`Stream`](Stream.md).[`once`](Stream.md#once-1)

***

### setMaxListeners()

> `static` **setMaxListeners**(`n?`, ...`eventTargets`): `void`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/events.d.ts:455

```js
import { setMaxListeners, EventEmitter } from 'node:events';

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

#### Parameters

##### n?

`number`

A non-negative number. The maximum number of listeners per `EventTarget` event.

##### eventTargets

...(`EventTarget` \| [`EventEmitter`](../interfaces/EventEmitter.md)\<\{ \}\>)[]

Zero or more {EventTarget} or {EventEmitter} instances. If none are specified, `n` is set as the default max for all newly created {EventTarget} and {EventEmitter}
objects.

#### Returns

`void`

#### Since

v15.4.0

#### Inherited from

[`Stream`](Stream.md).[`setMaxListeners`](Stream.md#setmaxlisteners-1)
