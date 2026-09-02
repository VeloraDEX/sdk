[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / AbiCoder

# Class: AbiCoder

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/abi-coder.d.ts:20

The **AbiCoder** is a low-level class responsible for encoding JavaScript
 values into binary data and decoding binary data into JavaScript values.

## Constructors

### Constructor

> **new AbiCoder**(): `AbiCoder`

#### Returns

`AbiCoder`

## Methods

### decode()

> **decode**(`types`, `data`, `loose?`): [`Result`](Result.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/abi-coder.d.ts:42

Decode the ABI %%data%% as the %%types%% into values.

 If %%loose%% decoding is enabled, then strict padding is
 not enforced. Some older versions of Solidity incorrectly
 padded event data emitted from ``external`` functions.

#### Parameters

##### types

readonly (`string` \| [`ParamType`](ParamType.md))[]

##### data

[`BytesLike`](../type-aliases/BytesLike.md)

##### loose?

`boolean`

#### Returns

[`Result`](Result.md)

***

### encode()

> **encode**(`types`, `values`): `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/abi-coder.d.ts:34

Encode the %%values%% as the %%types%% into ABI data.

#### Parameters

##### types

readonly (`string` \| [`ParamType`](ParamType.md))[]

##### values

readonly `any`[]

#### Returns

`string`

DataHexstring

***

### getDefaultValue()

> **getDefaultValue**(`types`): [`Result`](Result.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/abi-coder.d.ts:28

Get the default values for the given %%types%%.

 For example, a ``uint`` is by default ``0`` and ``bool``
 is by default ``false``.

#### Parameters

##### types

readonly (`string` \| [`ParamType`](ParamType.md))[]

#### Returns

[`Result`](Result.md)

***

### \_setDefaultMaxInflation()

> `static` **\_setDefaultMaxInflation**(`value`): `void`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/abi-coder.d.ts:43

#### Parameters

##### value

`number`

#### Returns

`void`

***

### defaultAbiCoder()

> `static` **defaultAbiCoder**(): `AbiCoder`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/abi-coder.d.ts:49

Returns the shared singleton instance of a default [[AbiCoder]].

 On the first call, the instance is created internally.

#### Returns

`AbiCoder`

***

### getBuiltinCallException()

> `static` **getBuiltinCallException**(`action`, `tx`, `data`): [`CallExceptionError`](../interfaces/CallExceptionError.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/abi-coder.d.ts:55

Returns an ethers-compatible [[CallExceptionError]] Error for the given
 result %%data%% for the [[CallExceptionAction]] %%action%% against
 the Transaction %%tx%%.

#### Parameters

##### action

[`CallExceptionAction`](../type-aliases/CallExceptionAction.md)

##### tx

###### data?

`string`

###### from?

`string` \| `null`

###### to?

`string` \| `null`

##### data

[`BytesLike`](../type-aliases/BytesLike.md) \| `null`

#### Returns

[`CallExceptionError`](../interfaces/CallExceptionError.md)
