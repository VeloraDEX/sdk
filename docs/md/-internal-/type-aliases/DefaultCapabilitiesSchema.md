[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / DefaultCapabilitiesSchema

# Type Alias: DefaultCapabilitiesSchema

> **DefaultCapabilitiesSchema**: `object`

## Type declaration

### connect

> **connect**: `object`

### connect.Request

> **Request**: `object`

### connect.Request.unstable\_addSubAccount?

> `optional` **unstable\_addSubAccount**: `object`

### connect.Request.unstable\_addSubAccount.account

> **account**: [`AddSubAccountParameters`](AddSubAccountParameters.md)

### connect.Request.unstable\_signInWithEthereum?

> `optional` **unstable\_signInWithEthereum**: [`RequiredBy`](RequiredBy.md)\<[`Partial`](Partial.md)\<[`SiweMessage`](SiweMessage.md)\>, `"chainId"` \| `"nonce"`\>

### connect.ReturnType

> **ReturnType**: `object`

### connect.ReturnType.unstable\_signInWithEthereum?

> `optional` **unstable\_signInWithEthereum**: `object`

### connect.ReturnType.unstable\_signInWithEthereum.message

> **message**: `string`

### connect.ReturnType.unstable\_signInWithEthereum.signature

> **signature**: [`Hex`](Hex.md)

### connect.ReturnType.unstable\_subAccounts?

> `optional` **unstable\_subAccounts**: readonly [`AddSubAccountReturnType`](AddSubAccountReturnType.md)[]

### getCapabilities

> **getCapabilities**: `object`

### getCapabilities.ReturnType

> **ReturnType**: `object`

### getCapabilities.ReturnType.atomic?

> `optional` **atomic**: `object`

### getCapabilities.ReturnType.atomic.status

> **status**: `"supported"` \| `"ready"` \| `"unsupported"`

### getCapabilities.ReturnType.paymasterService?

> `optional` **paymasterService**: `object`

### getCapabilities.ReturnType.paymasterService.supported

> **supported**: `boolean`

### getCapabilities.ReturnType.unstable\_addSubAccount?

> `optional` **unstable\_addSubAccount**: `object`

### getCapabilities.ReturnType.unstable\_addSubAccount.keyTypes

> **keyTypes**: (`"address"` \| `"p256"` \| `"webcrypto-p256"` \| `"webauthn-p256"`)[]

### getCapabilities.ReturnType.unstable\_addSubAccount.supported

> **supported**: `boolean`

### sendCalls

> **sendCalls**: `object`

### sendCalls.Request

> **Request**: `object`

### sendCalls.Request.paymasterService?

> `optional` **paymasterService**: `object`

### sendCalls.Request.paymasterService.context?

> `optional` **context**: [`Record`](Record.md)\<`string`, `any`\>

### sendCalls.Request.paymasterService.optional?

> `optional` **optional**: `boolean`

### sendCalls.Request.paymasterService.url

> **url**: `string`

## Defined in

node\_modules/viem/\_types/types/capabilities.d.ts:7
