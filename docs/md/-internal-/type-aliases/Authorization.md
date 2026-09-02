[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Authorization

# Type Alias: Authorization\<uint32, signed\>

> **Authorization**\<`uint32`, `signed`\> = `object` & `signed` *extends* `true` ? [`Signature`](Signature.md)\<`uint32`\> : [`ExactPartial`](ExactPartial.md)\<[`Signature`](Signature.md)\<`uint32`\>\>

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/authorization.d.ts:4

## Type Declaration

### address

> **address**: [`Address`](Address-1.md)

Address of the contract to delegate to.

### chainId

> **chainId**: `uint32`

Chain ID.

### nonce

> **nonce**: `uint32`

Nonce of the EOA to delegate to.

## Type Parameters

### uint32

`uint32` = `number`

### signed

`signed` *extends* `boolean` = `false`
