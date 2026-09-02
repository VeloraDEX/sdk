[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / CancelToken

# Interface: CancelToken

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:599

## Properties

### promise

> **promise**: `Promise`\<[`Cancel`](Cancel.md)\>

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:600

***

### reason?

> `optional` **reason?**: [`Cancel`](Cancel.md)

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:601

## Methods

### subscribe()

> **subscribe**(`listener`): `void`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:603

#### Parameters

##### listener

(`cancel`) => `void`

#### Returns

`void`

***

### throwIfRequested()

> **throwIfRequested**(): `void`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:602

#### Returns

`void`

***

### toAbortSignal()

> **toAbortSignal**(): `AbortSignal`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:605

#### Returns

`AbortSignal`

***

### unsubscribe()

> **unsubscribe**(`listener`): `void`

Defined in: node\_modules/.pnpm/axios@1.20.0/node\_modules/axios/index.d.ts:604

#### Parameters

##### listener

(`cancel`) => `void`

#### Returns

`void`
