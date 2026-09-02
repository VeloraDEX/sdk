[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / ReadableStreamGetReaderOptions

# Interface: ReadableStreamGetReaderOptions

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:192

## Properties

### mode?

> `optional` **mode?**: `"byob"`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/stream/web.d.ts:198

Creates a ReadableStreamBYOBReader and locks the stream to the new reader.

This call behaves the same way as the no-argument variant, except that it only works on readable byte streams, i.e. streams which were constructed specifically with the ability to handle "bring your own buffer" reading. The returned BYOB reader provides the ability to directly read individual chunks from the stream via its read() method, into developer-supplied buffers, allowing more precise control over allocation.
