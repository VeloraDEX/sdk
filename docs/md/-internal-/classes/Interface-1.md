[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Interface

# Class: Interface

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:35

## Constructors

### Constructor

> **new Interface**(`fragments`): `Interface`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:52

#### Parameters

##### fragments

`string` \| readonly (`string` \| [`Fragment`](Fragment-1.md) \| [`JsonFragment`](../interfaces/JsonFragment.md))[]

#### Returns

`Interface`

## Properties

### \_abiCoder

> `readonly` **\_abiCoder**: [`AbiCoder`](AbiCoder-1.md)

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:50

***

### \_isInterface

> `readonly` **\_isInterface**: `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:51

***

### deploy

> `readonly` **deploy**: [`ConstructorFragment`](ConstructorFragment-1.md)

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:49

***

### errors

> `readonly` **errors**: `object`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:37

#### Index Signature

\[`name`: `string`\]: [`ErrorFragment`](ErrorFragment-1.md)

***

### events

> `readonly` **events**: `object`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:40

#### Index Signature

\[`name`: `string`\]: [`EventFragment`](EventFragment-1.md)

***

### fragments

> `readonly` **fragments**: readonly [`Fragment`](Fragment-1.md)[]

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:36

***

### functions

> `readonly` **functions**: `object`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:43

#### Index Signature

\[`name`: `string`\]: [`FunctionFragment`](FunctionFragment-1.md)

***

### structs

> `readonly` **structs**: `object`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:46

#### Index Signature

\[`name`: `string`\]: `any`

## Methods

### \_decodeParams()

> **\_decodeParams**(`params`, `data`): [`Result`](../interfaces/Result.md)

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:63

#### Parameters

##### params

readonly [`ParamType`](ParamType-1.md)[]

##### data

[`BytesLike`](../type-aliases/BytesLike-1.md)

#### Returns

[`Result`](../interfaces/Result.md)

***

### \_encodeParams()

> **\_encodeParams**(`params`, `values`): `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:64

#### Parameters

##### params

readonly [`ParamType`](ParamType-1.md)[]

##### values

readonly `any`[]

#### Returns

`string`

***

### decodeErrorResult()

> **decodeErrorResult**(`fragment`, `data`): [`Result`](../interfaces/Result.md)

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:66

#### Parameters

##### fragment

`string` \| [`ErrorFragment`](ErrorFragment-1.md)

##### data

[`BytesLike`](../type-aliases/BytesLike-1.md)

#### Returns

[`Result`](../interfaces/Result.md)

***

### decodeEventLog()

> **decodeEventLog**(`eventFragment`, `data`, `topics?`): [`Result`](../interfaces/Result.md)

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:77

#### Parameters

##### eventFragment

`string` \| [`EventFragment`](EventFragment-1.md)

##### data

[`BytesLike`](../type-aliases/BytesLike-1.md)

##### topics?

readonly `string`[]

#### Returns

[`Result`](../interfaces/Result.md)

***

### decodeFunctionData()

> **decodeFunctionData**(`functionFragment`, `data`): [`Result`](../interfaces/Result.md)

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:68

#### Parameters

##### functionFragment

`string` \| [`FunctionFragment`](FunctionFragment-1.md)

##### data

[`BytesLike`](../type-aliases/BytesLike-1.md)

#### Returns

[`Result`](../interfaces/Result.md)

***

### decodeFunctionResult()

> **decodeFunctionResult**(`functionFragment`, `data`): [`Result`](../interfaces/Result.md)

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:70

#### Parameters

##### functionFragment

`string` \| [`FunctionFragment`](FunctionFragment-1.md)

##### data

[`BytesLike`](../type-aliases/BytesLike-1.md)

#### Returns

[`Result`](../interfaces/Result.md)

***

### encodeDeploy()

> **encodeDeploy**(`values?`): `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:65

#### Parameters

##### values?

readonly `any`[]

#### Returns

`string`

***

### encodeErrorResult()

> **encodeErrorResult**(`fragment`, `values?`): `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:67

#### Parameters

##### fragment

`string` \| [`ErrorFragment`](ErrorFragment-1.md)

##### values?

readonly `any`[]

#### Returns

`string`

***

### encodeEventLog()

> **encodeEventLog**(`eventFragment`, `values`): `object`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:73

#### Parameters

##### eventFragment

`string` \| [`EventFragment`](EventFragment-1.md)

##### values

readonly `any`[]

#### Returns

`object`

##### data

> **data**: `string`

##### topics

> **topics**: `string`[]

***

### encodeFilterTopics()

> **encodeFilterTopics**(`eventFragment`, `values`): (`string` \| `string`[])[]

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:72

#### Parameters

##### eventFragment

`string` \| [`EventFragment`](EventFragment-1.md)

##### values

readonly `any`[]

#### Returns

(`string` \| `string`[])[]

***

### encodeFunctionData()

> **encodeFunctionData**(`functionFragment`, `values?`): `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:69

#### Parameters

##### functionFragment

`string` \| [`FunctionFragment`](FunctionFragment-1.md)

##### values?

readonly `any`[]

#### Returns

`string`

***

### encodeFunctionResult()

> **encodeFunctionResult**(`functionFragment`, `values?`): `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:71

#### Parameters

##### functionFragment

`string` \| [`FunctionFragment`](FunctionFragment-1.md)

##### values?

readonly `any`[]

#### Returns

`string`

***

### format()

> **format**(`format?`): `string` \| `string`[]

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:53

#### Parameters

##### format?

`string`

#### Returns

`string` \| `string`[]

***

### getError()

> **getError**(`nameOrSignatureOrSighash`): [`ErrorFragment`](ErrorFragment-1.md)

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:60

#### Parameters

##### nameOrSignatureOrSighash

`string`

#### Returns

[`ErrorFragment`](ErrorFragment-1.md)

***

### getEvent()

> **getEvent**(`nameOrSignatureOrTopic`): [`EventFragment`](EventFragment-1.md)

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:59

#### Parameters

##### nameOrSignatureOrTopic

`string`

#### Returns

[`EventFragment`](EventFragment-1.md)

***

### getEventTopic()

> **getEventTopic**(`eventFragment`): `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:62

#### Parameters

##### eventFragment

`string` \| [`EventFragment`](EventFragment-1.md)

#### Returns

`string`

***

### getFunction()

> **getFunction**(`nameOrSignatureOrSighash`): [`FunctionFragment`](FunctionFragment-1.md)

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:58

#### Parameters

##### nameOrSignatureOrSighash

`string`

#### Returns

[`FunctionFragment`](FunctionFragment-1.md)

***

### getSighash()

> **getSighash**(`fragment`): `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:61

#### Parameters

##### fragment

`string` \| [`ErrorFragment`](ErrorFragment-1.md) \| [`FunctionFragment`](FunctionFragment-1.md)

#### Returns

`string`

***

### parseError()

> **parseError**(`data`): [`ErrorDescription`](ErrorDescription-1.md)

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:86

#### Parameters

##### data

[`BytesLike`](../type-aliases/BytesLike-1.md)

#### Returns

[`ErrorDescription`](ErrorDescription-1.md)

***

### parseLog()

> **parseLog**(`log`): [`LogDescription`](LogDescription-1.md)

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:82

#### Parameters

##### log

###### data

`string`

###### topics

`string`[]

#### Returns

[`LogDescription`](LogDescription-1.md)

***

### parseTransaction()

> **parseTransaction**(`tx`): [`TransactionDescription`](TransactionDescription-1.md)

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:78

#### Parameters

##### tx

###### data

`string`

###### value?

[`BigNumberish`](../type-aliases/BigNumberish.md)

#### Returns

[`TransactionDescription`](TransactionDescription-1.md)

***

### getAbiCoder()

> `static` **getAbiCoder**(): [`AbiCoder`](AbiCoder-1.md)

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:54

#### Returns

[`AbiCoder`](AbiCoder-1.md)

***

### getAddress()

> `static` **getAddress**(`address`): `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:55

#### Parameters

##### address

`string`

#### Returns

`string`

***

### getEventTopic()

> `static` **getEventTopic**(`eventFragment`): `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:57

#### Parameters

##### eventFragment

[`EventFragment`](EventFragment-1.md)

#### Returns

`string`

***

### getSighash()

> `static` **getSighash**(`fragment`): `string`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:56

#### Parameters

##### fragment

[`ErrorFragment`](ErrorFragment-1.md) \| [`FunctionFragment`](FunctionFragment-1.md)

#### Returns

`string`

***

### isInterface()

> `static` **isInterface**(`value`): `value is Interface`

Defined in: node\_modules/.pnpm/@ethersproject+abi@5.8.0/node\_modules/@ethersproject/abi/lib/interface.d.ts:87

#### Parameters

##### value

`any`

#### Returns

`value is Interface`
