[**@velora-dex/sdk**](../../../../README.md)

***

[@velora-dex/sdk](../../../../globals.md) / [\<internal\>](../../../README.md) / [internal](../README.md) / pipeline

# Function: pipeline()

## Call Signature

> **pipeline**\<`A`, `B`\>(`source`, `destination`, `callback`): `B` *extends* [`WritableStream`](../../../interfaces/WritableStream-1.md) ? `B` : [`WritableStream`](../../../interfaces/WritableStream-1.md)

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1564

A module method to pipe between streams and generators forwarding errors and
properly cleaning up and provide a callback when the pipeline is complete.

```js
import { pipeline } from 'node:stream';
import fs from 'node:fs';
import zlib from 'node:zlib';

// Use the pipeline API to easily pipe a series of streams
// together and get notified when the pipeline is fully done.

// A pipeline to gzip a potentially huge tar file efficiently:

pipeline(
  fs.createReadStream('archive.tar'),
  zlib.createGzip(),
  fs.createWriteStream('archive.tar.gz'),
  (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  },
);
```

The `pipeline` API provides a [`promise version`](https://nodejs.org/docs/latest-v22.x/api/stream.html#streampipelinesource-transforms-destination-options).

`stream.pipeline()` will call `stream.destroy(err)` on all streams except:

* `Readable` streams which have emitted `'end'` or `'close'`.
* `Writable` streams which have emitted `'finish'` or `'close'`.

`stream.pipeline()` leaves dangling event listeners on the streams
after the `callback` has been invoked. In the case of reuse of streams after
failure, this can cause event listener leaks and swallowed errors. If the last
stream is readable, dangling event listeners will be removed so that the last
stream can be consumed later.

`stream.pipeline()` closes all the streams when an error is raised.
The `IncomingRequest` usage with `pipeline` could lead to an unexpected behavior
once it would destroy the socket without sending the expected response.
See the example below:

```js
import fs from 'node:fs';
import http from 'node:http';
import { pipeline } from 'node:stream';

const server = http.createServer((req, res) => {
  const fileStream = fs.createReadStream('./fileNotExist.txt');
  pipeline(fileStream, res, (err) => {
    if (err) {
      console.log(err); // No such file
      // this message can't be sent once `pipeline` already destroyed the socket
      return res.end('error!!!');
    }
  });
});
```

### Type Parameters

#### A

`A` *extends* [`PipelineSource`](../type-aliases/PipelineSource.md)\<`any`\>

#### B

`B` *extends* [`WritableStream`](../../../interfaces/WritableStream-1.md) \| [`PipelineDestinationIterableFunction`](../type-aliases/PipelineDestinationIterableFunction.md)\<`string` \| `Buffer`\<[`ArrayBufferLike`](../../../type-aliases/ArrayBufferLike.md)\>\> \| [`PipelineDestinationPromiseFunction`](../type-aliases/PipelineDestinationPromiseFunction.md)\<`string` \| `Buffer`\<[`ArrayBufferLike`](../../../type-aliases/ArrayBufferLike.md)\>, `any`\> \| [`PipelineDestinationIterableFunction`](../type-aliases/PipelineDestinationIterableFunction.md)\<`any`\> \| [`PipelineDestinationPromiseFunction`](../type-aliases/PipelineDestinationPromiseFunction.md)\<`any`, `any`\>

### Parameters

#### source

`A`

#### destination

`B`

#### callback

[`PipelineCallback`](../type-aliases/PipelineCallback.md)\<`B`\>

Called when the pipeline is fully done.

### Returns

`B` *extends* [`WritableStream`](../../../interfaces/WritableStream-1.md) ? `B` : [`WritableStream`](../../../interfaces/WritableStream-1.md)

### Since

v10.0.0

## Call Signature

> **pipeline**\<`A`, `T1`, `B`\>(`source`, `transform1`, `destination`, `callback`): `B` *extends* [`WritableStream`](../../../interfaces/WritableStream-1.md) ? `B` : [`WritableStream`](../../../interfaces/WritableStream-1.md)

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1569

A module method to pipe between streams and generators forwarding errors and
properly cleaning up and provide a callback when the pipeline is complete.

```js
import { pipeline } from 'node:stream';
import fs from 'node:fs';
import zlib from 'node:zlib';

// Use the pipeline API to easily pipe a series of streams
// together and get notified when the pipeline is fully done.

// A pipeline to gzip a potentially huge tar file efficiently:

pipeline(
  fs.createReadStream('archive.tar'),
  zlib.createGzip(),
  fs.createWriteStream('archive.tar.gz'),
  (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  },
);
```

The `pipeline` API provides a [`promise version`](https://nodejs.org/docs/latest-v22.x/api/stream.html#streampipelinesource-transforms-destination-options).

`stream.pipeline()` will call `stream.destroy(err)` on all streams except:

* `Readable` streams which have emitted `'end'` or `'close'`.
* `Writable` streams which have emitted `'finish'` or `'close'`.

`stream.pipeline()` leaves dangling event listeners on the streams
after the `callback` has been invoked. In the case of reuse of streams after
failure, this can cause event listener leaks and swallowed errors. If the last
stream is readable, dangling event listeners will be removed so that the last
stream can be consumed later.

`stream.pipeline()` closes all the streams when an error is raised.
The `IncomingRequest` usage with `pipeline` could lead to an unexpected behavior
once it would destroy the socket without sending the expected response.
See the example below:

```js
import fs from 'node:fs';
import http from 'node:http';
import { pipeline } from 'node:stream';

const server = http.createServer((req, res) => {
  const fileStream = fs.createReadStream('./fileNotExist.txt');
  pipeline(fileStream, res, (err) => {
    if (err) {
      console.log(err); // No such file
      // this message can't be sent once `pipeline` already destroyed the socket
      return res.end('error!!!');
    }
  });
});
```

### Type Parameters

#### A

`A` *extends* [`PipelineSource`](../type-aliases/PipelineSource.md)\<`any`\>

#### T1

`T1` *extends* [`PipelineTransform`](../type-aliases/PipelineTransform.md)\<`A`, `any`\>

#### B

`B` *extends* [`WritableStream`](../../../interfaces/WritableStream-1.md) \| [`PipelineDestinationIterableFunction`](../type-aliases/PipelineDestinationIterableFunction.md)\<`string` \| `Buffer`\<[`ArrayBufferLike`](../../../type-aliases/ArrayBufferLike.md)\>\> \| [`PipelineDestinationPromiseFunction`](../type-aliases/PipelineDestinationPromiseFunction.md)\<`string` \| `Buffer`\<[`ArrayBufferLike`](../../../type-aliases/ArrayBufferLike.md)\>, `any`\> \| [`PipelineDestinationIterableFunction`](../type-aliases/PipelineDestinationIterableFunction.md)\<`any`\> \| [`PipelineDestinationPromiseFunction`](../type-aliases/PipelineDestinationPromiseFunction.md)\<`any`, `any`\>

### Parameters

#### source

`A`

#### transform1

`T1`

#### destination

`B`

#### callback

[`PipelineCallback`](../type-aliases/PipelineCallback.md)\<`B`\>

Called when the pipeline is fully done.

### Returns

`B` *extends* [`WritableStream`](../../../interfaces/WritableStream-1.md) ? `B` : [`WritableStream`](../../../interfaces/WritableStream-1.md)

### Since

v10.0.0

## Call Signature

> **pipeline**\<`A`, `T1`, `T2`, `B`\>(`source`, `transform1`, `transform2`, `destination`, `callback`): `B` *extends* [`WritableStream`](../../../interfaces/WritableStream-1.md) ? `B` : [`WritableStream`](../../../interfaces/WritableStream-1.md)

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1579

A module method to pipe between streams and generators forwarding errors and
properly cleaning up and provide a callback when the pipeline is complete.

```js
import { pipeline } from 'node:stream';
import fs from 'node:fs';
import zlib from 'node:zlib';

// Use the pipeline API to easily pipe a series of streams
// together and get notified when the pipeline is fully done.

// A pipeline to gzip a potentially huge tar file efficiently:

pipeline(
  fs.createReadStream('archive.tar'),
  zlib.createGzip(),
  fs.createWriteStream('archive.tar.gz'),
  (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  },
);
```

The `pipeline` API provides a [`promise version`](https://nodejs.org/docs/latest-v22.x/api/stream.html#streampipelinesource-transforms-destination-options).

`stream.pipeline()` will call `stream.destroy(err)` on all streams except:

* `Readable` streams which have emitted `'end'` or `'close'`.
* `Writable` streams which have emitted `'finish'` or `'close'`.

`stream.pipeline()` leaves dangling event listeners on the streams
after the `callback` has been invoked. In the case of reuse of streams after
failure, this can cause event listener leaks and swallowed errors. If the last
stream is readable, dangling event listeners will be removed so that the last
stream can be consumed later.

`stream.pipeline()` closes all the streams when an error is raised.
The `IncomingRequest` usage with `pipeline` could lead to an unexpected behavior
once it would destroy the socket without sending the expected response.
See the example below:

```js
import fs from 'node:fs';
import http from 'node:http';
import { pipeline } from 'node:stream';

const server = http.createServer((req, res) => {
  const fileStream = fs.createReadStream('./fileNotExist.txt');
  pipeline(fileStream, res, (err) => {
    if (err) {
      console.log(err); // No such file
      // this message can't be sent once `pipeline` already destroyed the socket
      return res.end('error!!!');
    }
  });
});
```

### Type Parameters

#### A

`A` *extends* [`PipelineSource`](../type-aliases/PipelineSource.md)\<`any`\>

#### T1

`T1` *extends* [`PipelineTransform`](../type-aliases/PipelineTransform.md)\<`A`, `any`\>

#### T2

`T2` *extends* [`PipelineTransform`](../type-aliases/PipelineTransform.md)\<`T1`, `any`\>

#### B

`B` *extends* [`WritableStream`](../../../interfaces/WritableStream-1.md) \| [`PipelineDestinationIterableFunction`](../type-aliases/PipelineDestinationIterableFunction.md)\<`string` \| `Buffer`\<[`ArrayBufferLike`](../../../type-aliases/ArrayBufferLike.md)\>\> \| [`PipelineDestinationPromiseFunction`](../type-aliases/PipelineDestinationPromiseFunction.md)\<`string` \| `Buffer`\<[`ArrayBufferLike`](../../../type-aliases/ArrayBufferLike.md)\>, `any`\> \| [`PipelineDestinationIterableFunction`](../type-aliases/PipelineDestinationIterableFunction.md)\<`any`\> \| [`PipelineDestinationPromiseFunction`](../type-aliases/PipelineDestinationPromiseFunction.md)\<`any`, `any`\>

### Parameters

#### source

`A`

#### transform1

`T1`

#### transform2

`T2`

#### destination

`B`

#### callback

[`PipelineCallback`](../type-aliases/PipelineCallback.md)\<`B`\>

Called when the pipeline is fully done.

### Returns

`B` *extends* [`WritableStream`](../../../interfaces/WritableStream-1.md) ? `B` : [`WritableStream`](../../../interfaces/WritableStream-1.md)

### Since

v10.0.0

## Call Signature

> **pipeline**\<`A`, `T1`, `T2`, `T3`, `B`\>(`source`, `transform1`, `transform2`, `transform3`, `destination`, `callback`): `B` *extends* [`WritableStream`](../../../interfaces/WritableStream-1.md) ? `B` : [`WritableStream`](../../../interfaces/WritableStream-1.md)

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1591

A module method to pipe between streams and generators forwarding errors and
properly cleaning up and provide a callback when the pipeline is complete.

```js
import { pipeline } from 'node:stream';
import fs from 'node:fs';
import zlib from 'node:zlib';

// Use the pipeline API to easily pipe a series of streams
// together and get notified when the pipeline is fully done.

// A pipeline to gzip a potentially huge tar file efficiently:

pipeline(
  fs.createReadStream('archive.tar'),
  zlib.createGzip(),
  fs.createWriteStream('archive.tar.gz'),
  (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  },
);
```

The `pipeline` API provides a [`promise version`](https://nodejs.org/docs/latest-v22.x/api/stream.html#streampipelinesource-transforms-destination-options).

`stream.pipeline()` will call `stream.destroy(err)` on all streams except:

* `Readable` streams which have emitted `'end'` or `'close'`.
* `Writable` streams which have emitted `'finish'` or `'close'`.

`stream.pipeline()` leaves dangling event listeners on the streams
after the `callback` has been invoked. In the case of reuse of streams after
failure, this can cause event listener leaks and swallowed errors. If the last
stream is readable, dangling event listeners will be removed so that the last
stream can be consumed later.

`stream.pipeline()` closes all the streams when an error is raised.
The `IncomingRequest` usage with `pipeline` could lead to an unexpected behavior
once it would destroy the socket without sending the expected response.
See the example below:

```js
import fs from 'node:fs';
import http from 'node:http';
import { pipeline } from 'node:stream';

const server = http.createServer((req, res) => {
  const fileStream = fs.createReadStream('./fileNotExist.txt');
  pipeline(fileStream, res, (err) => {
    if (err) {
      console.log(err); // No such file
      // this message can't be sent once `pipeline` already destroyed the socket
      return res.end('error!!!');
    }
  });
});
```

### Type Parameters

#### A

`A` *extends* [`PipelineSource`](../type-aliases/PipelineSource.md)\<`any`\>

#### T1

`T1` *extends* [`PipelineTransform`](../type-aliases/PipelineTransform.md)\<`A`, `any`\>

#### T2

`T2` *extends* [`PipelineTransform`](../type-aliases/PipelineTransform.md)\<`T1`, `any`\>

#### T3

`T3` *extends* [`PipelineTransform`](../type-aliases/PipelineTransform.md)\<`T2`, `any`\>

#### B

`B` *extends* [`WritableStream`](../../../interfaces/WritableStream-1.md) \| [`PipelineDestinationIterableFunction`](../type-aliases/PipelineDestinationIterableFunction.md)\<`string` \| `Buffer`\<[`ArrayBufferLike`](../../../type-aliases/ArrayBufferLike.md)\>\> \| [`PipelineDestinationPromiseFunction`](../type-aliases/PipelineDestinationPromiseFunction.md)\<`string` \| `Buffer`\<[`ArrayBufferLike`](../../../type-aliases/ArrayBufferLike.md)\>, `any`\> \| [`PipelineDestinationIterableFunction`](../type-aliases/PipelineDestinationIterableFunction.md)\<`any`\> \| [`PipelineDestinationPromiseFunction`](../type-aliases/PipelineDestinationPromiseFunction.md)\<`any`, `any`\>

### Parameters

#### source

`A`

#### transform1

`T1`

#### transform2

`T2`

#### transform3

`T3`

#### destination

`B`

#### callback

[`PipelineCallback`](../type-aliases/PipelineCallback.md)\<`B`\>

Called when the pipeline is fully done.

### Returns

`B` *extends* [`WritableStream`](../../../interfaces/WritableStream-1.md) ? `B` : [`WritableStream`](../../../interfaces/WritableStream-1.md)

### Since

v10.0.0

## Call Signature

> **pipeline**\<`A`, `T1`, `T2`, `T3`, `T4`, `B`\>(`source`, `transform1`, `transform2`, `transform3`, `transform4`, `destination`, `callback`): `B` *extends* [`WritableStream`](../../../interfaces/WritableStream-1.md) ? `B` : [`WritableStream`](../../../interfaces/WritableStream-1.md)

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1605

A module method to pipe between streams and generators forwarding errors and
properly cleaning up and provide a callback when the pipeline is complete.

```js
import { pipeline } from 'node:stream';
import fs from 'node:fs';
import zlib from 'node:zlib';

// Use the pipeline API to easily pipe a series of streams
// together and get notified when the pipeline is fully done.

// A pipeline to gzip a potentially huge tar file efficiently:

pipeline(
  fs.createReadStream('archive.tar'),
  zlib.createGzip(),
  fs.createWriteStream('archive.tar.gz'),
  (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  },
);
```

The `pipeline` API provides a [`promise version`](https://nodejs.org/docs/latest-v22.x/api/stream.html#streampipelinesource-transforms-destination-options).

`stream.pipeline()` will call `stream.destroy(err)` on all streams except:

* `Readable` streams which have emitted `'end'` or `'close'`.
* `Writable` streams which have emitted `'finish'` or `'close'`.

`stream.pipeline()` leaves dangling event listeners on the streams
after the `callback` has been invoked. In the case of reuse of streams after
failure, this can cause event listener leaks and swallowed errors. If the last
stream is readable, dangling event listeners will be removed so that the last
stream can be consumed later.

`stream.pipeline()` closes all the streams when an error is raised.
The `IncomingRequest` usage with `pipeline` could lead to an unexpected behavior
once it would destroy the socket without sending the expected response.
See the example below:

```js
import fs from 'node:fs';
import http from 'node:http';
import { pipeline } from 'node:stream';

const server = http.createServer((req, res) => {
  const fileStream = fs.createReadStream('./fileNotExist.txt');
  pipeline(fileStream, res, (err) => {
    if (err) {
      console.log(err); // No such file
      // this message can't be sent once `pipeline` already destroyed the socket
      return res.end('error!!!');
    }
  });
});
```

### Type Parameters

#### A

`A` *extends* [`PipelineSource`](../type-aliases/PipelineSource.md)\<`any`\>

#### T1

`T1` *extends* [`PipelineTransform`](../type-aliases/PipelineTransform.md)\<`A`, `any`\>

#### T2

`T2` *extends* [`PipelineTransform`](../type-aliases/PipelineTransform.md)\<`T1`, `any`\>

#### T3

`T3` *extends* [`PipelineTransform`](../type-aliases/PipelineTransform.md)\<`T2`, `any`\>

#### T4

`T4` *extends* [`PipelineTransform`](../type-aliases/PipelineTransform.md)\<`T3`, `any`\>

#### B

`B` *extends* [`WritableStream`](../../../interfaces/WritableStream-1.md) \| [`PipelineDestinationIterableFunction`](../type-aliases/PipelineDestinationIterableFunction.md)\<`string` \| `Buffer`\<[`ArrayBufferLike`](../../../type-aliases/ArrayBufferLike.md)\>\> \| [`PipelineDestinationPromiseFunction`](../type-aliases/PipelineDestinationPromiseFunction.md)\<`string` \| `Buffer`\<[`ArrayBufferLike`](../../../type-aliases/ArrayBufferLike.md)\>, `any`\> \| [`PipelineDestinationIterableFunction`](../type-aliases/PipelineDestinationIterableFunction.md)\<`any`\> \| [`PipelineDestinationPromiseFunction`](../type-aliases/PipelineDestinationPromiseFunction.md)\<`any`, `any`\>

### Parameters

#### source

`A`

#### transform1

`T1`

#### transform2

`T2`

#### transform3

`T3`

#### transform4

`T4`

#### destination

`B`

#### callback

[`PipelineCallback`](../type-aliases/PipelineCallback.md)\<`B`\>

Called when the pipeline is fully done.

### Returns

`B` *extends* [`WritableStream`](../../../interfaces/WritableStream-1.md) ? `B` : [`WritableStream`](../../../interfaces/WritableStream-1.md)

### Since

v10.0.0

## Call Signature

> **pipeline**(`streams`, `callback`): [`WritableStream`](../../../interfaces/WritableStream-1.md)

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1621

A module method to pipe between streams and generators forwarding errors and
properly cleaning up and provide a callback when the pipeline is complete.

```js
import { pipeline } from 'node:stream';
import fs from 'node:fs';
import zlib from 'node:zlib';

// Use the pipeline API to easily pipe a series of streams
// together and get notified when the pipeline is fully done.

// A pipeline to gzip a potentially huge tar file efficiently:

pipeline(
  fs.createReadStream('archive.tar'),
  zlib.createGzip(),
  fs.createWriteStream('archive.tar.gz'),
  (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  },
);
```

The `pipeline` API provides a [`promise version`](https://nodejs.org/docs/latest-v22.x/api/stream.html#streampipelinesource-transforms-destination-options).

`stream.pipeline()` will call `stream.destroy(err)` on all streams except:

* `Readable` streams which have emitted `'end'` or `'close'`.
* `Writable` streams which have emitted `'finish'` or `'close'`.

`stream.pipeline()` leaves dangling event listeners on the streams
after the `callback` has been invoked. In the case of reuse of streams after
failure, this can cause event listener leaks and swallowed errors. If the last
stream is readable, dangling event listeners will be removed so that the last
stream can be consumed later.

`stream.pipeline()` closes all the streams when an error is raised.
The `IncomingRequest` usage with `pipeline` could lead to an unexpected behavior
once it would destroy the socket without sending the expected response.
See the example below:

```js
import fs from 'node:fs';
import http from 'node:http';
import { pipeline } from 'node:stream';

const server = http.createServer((req, res) => {
  const fileStream = fs.createReadStream('./fileNotExist.txt');
  pipeline(fileStream, res, (err) => {
    if (err) {
      console.log(err); // No such file
      // this message can't be sent once `pipeline` already destroyed the socket
      return res.end('error!!!');
    }
  });
});
```

### Parameters

#### streams

readonly ([`ReadableStream`](../../../interfaces/ReadableStream-1.md) \| [`WritableStream`](../../../interfaces/WritableStream-1.md) \| [`ReadWriteStream`](../../../interfaces/ReadWriteStream.md))[]

#### callback

(`err`) => `void`

Called when the pipeline is fully done.

### Returns

[`WritableStream`](../../../interfaces/WritableStream-1.md)

### Since

v10.0.0

## Call Signature

> **pipeline**(`stream1`, `stream2`, ...`streams`): [`WritableStream`](../../../interfaces/WritableStream-1.md)

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream.d.ts:1625

A module method to pipe between streams and generators forwarding errors and
properly cleaning up and provide a callback when the pipeline is complete.

```js
import { pipeline } from 'node:stream';
import fs from 'node:fs';
import zlib from 'node:zlib';

// Use the pipeline API to easily pipe a series of streams
// together and get notified when the pipeline is fully done.

// A pipeline to gzip a potentially huge tar file efficiently:

pipeline(
  fs.createReadStream('archive.tar'),
  zlib.createGzip(),
  fs.createWriteStream('archive.tar.gz'),
  (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
    } else {
      console.log('Pipeline succeeded.');
    }
  },
);
```

The `pipeline` API provides a [`promise version`](https://nodejs.org/docs/latest-v22.x/api/stream.html#streampipelinesource-transforms-destination-options).

`stream.pipeline()` will call `stream.destroy(err)` on all streams except:

* `Readable` streams which have emitted `'end'` or `'close'`.
* `Writable` streams which have emitted `'finish'` or `'close'`.

`stream.pipeline()` leaves dangling event listeners on the streams
after the `callback` has been invoked. In the case of reuse of streams after
failure, this can cause event listener leaks and swallowed errors. If the last
stream is readable, dangling event listeners will be removed so that the last
stream can be consumed later.

`stream.pipeline()` closes all the streams when an error is raised.
The `IncomingRequest` usage with `pipeline` could lead to an unexpected behavior
once it would destroy the socket without sending the expected response.
See the example below:

```js
import fs from 'node:fs';
import http from 'node:http';
import { pipeline } from 'node:stream';

const server = http.createServer((req, res) => {
  const fileStream = fs.createReadStream('./fileNotExist.txt');
  pipeline(fileStream, res, (err) => {
    if (err) {
      console.log(err); // No such file
      // this message can't be sent once `pipeline` already destroyed the socket
      return res.end('error!!!');
    }
  });
});
```

### Parameters

#### stream1

[`ReadableStream`](../../../interfaces/ReadableStream-1.md)

#### stream2

[`WritableStream`](../../../interfaces/WritableStream-1.md) \| [`ReadWriteStream`](../../../interfaces/ReadWriteStream.md)

#### streams

...([`WritableStream`](../../../interfaces/WritableStream-1.md) \| [`ReadWriteStream`](../../../interfaces/ReadWriteStream.md) \| ((`err`) => `void`))[]

### Returns

[`WritableStream`](../../../interfaces/WritableStream-1.md)

### Since

v10.0.0
