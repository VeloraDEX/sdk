[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Authorization

# Type Alias: Authorization\<uint32, signed\>

> **Authorization**\<`uint32`, `signed`\>: `object` & `signed` *extends* `true` ? [`Signature`](Signature.md)\<`uint32`\> : [`ExactPartial`](ExactPartial.md)\<[`Signature`](Signature.md)\<`uint32`\>\>

## Type declaration

### address

> **address**: [`Address`](Address.md)

Address of the contract to delegate to.

### chainId

> **chainId**: `uint32`

Chain ID.

### nonce

> **nonce**: `uint32`

Nonce of the EOA to delegate to.

## Type Parameters

• **uint32** = `number`

• **signed** *extends* `boolean` = `false`

## Defined in

node\_modules/viem/\_types/types/authorization.d.ts:4
