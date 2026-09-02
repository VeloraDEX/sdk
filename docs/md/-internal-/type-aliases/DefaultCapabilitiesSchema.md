[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / DefaultCapabilitiesSchema

# Type Alias: DefaultCapabilitiesSchema

> **DefaultCapabilitiesSchema** = `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/capabilities.d.ts:7

## Properties

### connect

> **connect**: `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/capabilities.d.ts:8

#### Request

> **Request**: `object`

##### Request.unstable\_addSubAccount?

> `optional` **unstable\_addSubAccount?**: `object`

##### Request.unstable\_addSubAccount.account

> **account**: [`AddSubAccountParameters`](AddSubAccountParameters.md)

##### Request.unstable\_signInWithEthereum?

> `optional` **unstable\_signInWithEthereum?**: [`RequiredBy`](RequiredBy.md)\<[`Partial`](Partial.md)\<[`SiweMessage`](SiweMessage.md)\>, `"chainId"` \| `"nonce"`\>

#### ReturnType

> **ReturnType**: `object`

##### ReturnType.unstable\_signInWithEthereum?

> `optional` **unstable\_signInWithEthereum?**: `object`

##### ReturnType.unstable\_signInWithEthereum.message

> **message**: `string`

##### ReturnType.unstable\_signInWithEthereum.signature

> **signature**: [`Hex`](Hex.md)

##### ReturnType.unstable\_subAccounts?

> `optional` **unstable\_subAccounts?**: readonly [`AddSubAccountReturnType`](AddSubAccountReturnType.md)[]

***

### getCapabilities

> **getCapabilities**: `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/capabilities.d.ts:23

#### ReturnType

> **ReturnType**: `object`

##### ReturnType.atomic?

> `optional` **atomic?**: `object`

##### ReturnType.atomic.status

> **status**: `"supported"` \| `"ready"` \| `"unsupported"`

##### ReturnType.paymasterService?

> `optional` **paymasterService?**: `object`

##### ReturnType.paymasterService.supported

> **supported**: `boolean`

##### ReturnType.unstable\_addSubAccount?

> `optional` **unstable\_addSubAccount?**: `object`

##### ReturnType.unstable\_addSubAccount.keyTypes

> **keyTypes**: (`"address"` \| `"p256"` \| `"webcrypto-p256"` \| `"webauthn-p256"`)[]

##### ReturnType.unstable\_addSubAccount.supported

> **supported**: `boolean`

***

### sendCalls

> **sendCalls**: `object`

Defined in: node\_modules/.pnpm/viem@2.56.1\_typescript@5.9.3\_zod@3.25.76/node\_modules/viem/\_types/types/capabilities.d.ts:37

#### Request

> **Request**: `object`

##### Request.paymasterService?

> `optional` **paymasterService?**: `object`

##### Request.paymasterService.context?

> `optional` **context?**: [`Record`](Record.md)\<`string`, `any`\>

##### Request.paymasterService.optional?

> `optional` **optional?**: `boolean`

##### Request.paymasterService.url

> **url**: `string`
