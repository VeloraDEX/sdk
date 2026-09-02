[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SiweMessage

# Type Alias: SiweMessage

> **SiweMessage** = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/utils/siwe/types.d.ts:7

## Description

EIP-4361 message fields

## See

https://eips.ethereum.org/EIPS/eip-4361

## Properties

### address

> **address**: [`Address`](Address-1.md)

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/utils/siwe/types.d.ts:11

The Ethereum address performing the signing.

***

### chainId

> **chainId**: `number`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/utils/siwe/types.d.ts:15

The [EIP-155](https://eips.ethereum.org/EIPS/eip-155) Chain ID to which the session is bound,

***

### domain

> **domain**: `string`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/utils/siwe/types.d.ts:19

[RFC 3986](https://www.rfc-editor.org/rfc/rfc3986) authority that is requesting the signing.

***

### expirationTime?

> `optional` **expirationTime?**: `Date`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/utils/siwe/types.d.ts:23

Time when the signed authentication message is no longer valid.

***

### issuedAt?

> `optional` **issuedAt?**: `Date`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/utils/siwe/types.d.ts:27

Time when the message was generated, typically the current time.

***

### nonce

> **nonce**: `string`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/utils/siwe/types.d.ts:31

A random string typically chosen by the relying party and used to prevent replay attacks.

***

### notBefore?

> `optional` **notBefore?**: `Date`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/utils/siwe/types.d.ts:35

Time when the signed authentication message will become valid.

***

### requestId?

> `optional` **requestId?**: `string`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/utils/siwe/types.d.ts:39

A system-specific identifier that may be used to uniquely refer to the sign-in request.

***

### resources?

> `optional` **resources?**: `string`[]

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/utils/siwe/types.d.ts:43

A list of information or references to information the user wishes to have resolved as part of authentication by the relying party.

***

### scheme?

> `optional` **scheme?**: `string`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/utils/siwe/types.d.ts:47

[RFC 3986](https://www.rfc-editor.org/rfc/rfc3986#section-3.1) URI scheme of the origin of the request.

***

### statement?

> `optional` **statement?**: `string`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/utils/siwe/types.d.ts:51

A human-readable ASCII assertion that the user will sign.

***

### uri

> **uri**: `string`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/utils/siwe/types.d.ts:55

[RFC 3986](https://www.rfc-editor.org/rfc/rfc3986) URI referring to the resource that is the subject of the signing (as in the subject of a claim).

***

### version

> **version**: `"1"`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/utils/siwe/types.d.ts:59

The current version of the SIWE Message.
