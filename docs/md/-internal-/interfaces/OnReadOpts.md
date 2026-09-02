[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / OnReadOpts

# Interface: OnReadOpts

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/net.d.ts:37

## Properties

### buffer

> **buffer**: `Uint8Array`\<[`ArrayBufferLike`](../type-aliases/ArrayBufferLike.md)\> \| (() => `Uint8Array`)

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/net.d.ts:38

## Methods

### callback()

> **callback**(`bytesWritten`, `buffer`): `boolean`

Defined in: node\_modules/.pnpm/@types+node@22.8.5/node\_modules/@types/node/net.d.ts:44

This function is called for every chunk of incoming data.
Two arguments are passed to it: the number of bytes written to `buffer` and a reference to `buffer`.
Return `false` from this function to implicitly `pause()` the socket.

#### Parameters

##### bytesWritten

`number`

##### buffer

`Uint8Array`

#### Returns

`boolean`
