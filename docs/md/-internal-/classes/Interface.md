[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Interface

# Class: Interface

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:170

An Interface abstracts many of the low-level details for
 encoding and decoding the data on the blockchain.

 An ABI provides information on how to encode data to send to
 a Contract, how to decode the results and events and how to
 interpret revert errors.

 The ABI can be specified by [any supported format](InterfaceAbi).

## Constructors

### Constructor

> **new Interface**(`fragments`): `Interface`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:191

Create a new Interface for the %%fragments%%.

#### Parameters

##### fragments

[`InterfaceAbi`](../type-aliases/InterfaceAbi.md)

#### Returns

`Interface`

## Properties

### deploy

> `readonly` **deploy**: [`ConstructorFragment`](ConstructorFragment.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:179

The Contract constructor.

***

### fallback

> `readonly` **fallback**: [`FallbackFragment`](FallbackFragment.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:183

The Fallback method, if any.

***

### fragments

> `readonly` **fragments**: readonly [`Fragment`](Fragment.md)[]

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:175

All the Contract ABI members (i.e. methods, events, errors, etc).

***

### receive

> `readonly` **receive**: `boolean`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:187

If receiving ether is supported.

## Methods

### \_decodeParams()

> **\_decodeParams**(`params`, `data`): [`Result`](Result.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:279

#### Parameters

##### params

readonly [`ParamType`](ParamType.md)[]

##### data

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Result`](Result.md)

***

### \_encodeParams()

> **\_encodeParams**(`params`, `values`): `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:280

#### Parameters

##### params

readonly [`ParamType`](ParamType.md)[]

##### values

readonly `any`[]

#### Returns

`string`

***

### decodeErrorResult()

> **decodeErrorResult**(`fragment`, `data`): [`Result`](Result.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:295

Decodes the result %%data%% (e.g. from an ``eth_call``) for the
 specified error (see [[getError]] for valid values for
 %%key%%).

 Most developers should prefer the [[parseCallResult]] method instead,
 which will automatically detect a ``CALL_EXCEPTION`` and throw the
 corresponding error.

#### Parameters

##### fragment

`string` \| [`ErrorFragment`](ErrorFragment.md)

##### data

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Result`](Result.md)

***

### decodeEventLog()

> **decodeEventLog**(`fragment`, `data`, `topics?`): [`Result`](Result.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:345

#### Parameters

##### fragment

`string` \| [`EventFragment`](EventFragment.md)

##### data

[`BytesLike`](../type-aliases/BytesLike.md)

##### topics?

readonly `string`[]

#### Returns

[`Result`](Result.md)

***

### decodeFunctionData()

> **decodeFunctionData**(`fragment`, `data`): [`Result`](Result.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:313

Decodes the %%data%% from a transaction ``tx.data`` for
 the function specified (see [[getFunction]] for valid values
 for %%fragment%%).

 Most developers should prefer the [[parseTransaction]] method
 instead, which will automatically detect the fragment.

#### Parameters

##### fragment

`string` \| [`FunctionFragment`](FunctionFragment.md)

##### data

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Result`](Result.md)

***

### decodeFunctionResult()

> **decodeFunctionResult**(`fragment`, `data`): [`Result`](Result.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:329

Decodes the result %%data%% (e.g. from an ``eth_call``) for the
 specified function (see [[getFunction]] for valid values for
 %%key%%).

 Most developers should prefer the [[parseCallResult]] method instead,
 which will automatically detect a ``CALL_EXCEPTION`` and throw the
 corresponding error.

#### Parameters

##### fragment

`string` \| [`FunctionFragment`](FunctionFragment.md)

##### data

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Result`](Result.md)

***

### encodeDeploy()

> **encodeDeploy**(`values?`): `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:285

Encodes a ``tx.data`` object for deploying the Contract with
 the %%values%% as the constructor arguments.

#### Parameters

##### values?

readonly `any`[]

#### Returns

`string`

***

### encodeErrorResult()

> **encodeErrorResult**(`fragment`, `values?`): `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:304

Encodes the transaction revert data for a call result that
 reverted from the the Contract with the sepcified %%error%%
 (see [[getError]] for valid values for %%fragment%%) with the %%values%%.

 This is generally not used by most developers, unless trying to mock
 a result from a Contract.

#### Parameters

##### fragment

`string` \| [`ErrorFragment`](ErrorFragment.md)

##### values?

readonly `any`[]

#### Returns

`string`

***

### encodeEventLog()

> **encodeEventLog**(`fragment`, `values`): `object`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:341

#### Parameters

##### fragment

`string` \| [`EventFragment`](EventFragment.md)

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

> **encodeFilterTopics**(`fragment`, `values`): (`string` \| `string`[] \| `null`)[]

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:340

#### Parameters

##### fragment

`string` \| [`EventFragment`](EventFragment.md)

##### values

readonly `any`[]

#### Returns

(`string` \| `string`[] \| `null`)[]

***

### encodeFunctionData()

> **encodeFunctionData**(`fragment`, `values?`): `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:319

Encodes the ``tx.data`` for a transaction that calls the function
 specified (see [[getFunction]] for valid values for %%fragment%%) with
 the %%values%%.

#### Parameters

##### fragment

`string` \| [`FunctionFragment`](FunctionFragment.md)

##### values?

readonly `any`[]

#### Returns

`string`

***

### encodeFunctionResult()

> **encodeFunctionResult**(`fragment`, `values?`): `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:339

Encodes the result data (e.g. from an ``eth_call``) for the
 specified function (see [[getFunction]] for valid values
 for %%fragment%%) with %%values%%.

 This is generally not used by most developers, unless trying to mock
 a result from a Contract.

#### Parameters

##### fragment

`string` \| [`FunctionFragment`](FunctionFragment.md)

##### values?

readonly `any`[]

#### Returns

`string`

***

### forEachError()

> **forEachError**(`callback`): `void`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:278

Iterate over all errors, calling %%callback%%, sorted by their name.

#### Parameters

##### callback

(`func`, `index`) => `void`

#### Returns

`void`

***

### forEachEvent()

> **forEachEvent**(`callback`): `void`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:263

Iterate over all events, calling %%callback%%, sorted by their name.

#### Parameters

##### callback

(`func`, `index`) => `void`

#### Returns

`void`

***

### forEachFunction()

> **forEachFunction**(`callback`): `void`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:235

Iterate over all functions, calling %%callback%%, sorted by their name.

#### Parameters

##### callback

(`func`, `index`) => `void`

#### Returns

`void`

***

### format()

> **format**(`minimal?`): `string`[]

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:197

Returns the entire Human-Readable ABI, as an array of
 signatures, optionally as %%minimal%% strings, which
 removes parameter names and unneceesary spaces.

#### Parameters

##### minimal?

`boolean`

#### Returns

`string`[]

***

### formatJson()

> **formatJson**(): `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:202

Return the JSON-encoded ABI. This is the format Solidiy
 returns.

#### Returns

`string`

***

### getAbiCoder()

> **getAbiCoder**(): [`AbiCoder`](AbiCoder.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:207

The ABI coder that will be used to encode and decode binary
 data.

#### Returns

[`AbiCoder`](AbiCoder.md)

***

### getError()

> **getError**(`key`, `values?`): [`ErrorFragment`](ErrorFragment.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:274

Get the [[ErrorFragment]] for %%key%%, which may be an error
 selector, error name or error signature that belongs to the ABI.

 If %%values%% is provided, it will use the Typed API to handle
 ambiguous cases where multiple errors match by name.

 If the %%key%% and %%values%% do not refine to a single error in
 the ABI, this will throw.

#### Parameters

##### key

`string`

##### values?

`any`[]

#### Returns

[`ErrorFragment`](ErrorFragment.md) \| `null`

***

### getEvent()

> **getEvent**(`key`, `values?`): [`EventFragment`](EventFragment.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:259

Get the [[EventFragment]] for %%key%%, which may be a topic hash,
 event name or event signature that belongs to the ABI.

 If %%values%% is provided, it will use the Typed API to handle
 ambiguous cases where multiple events match by name.

 If the %%key%% and %%values%% do not refine to a single event in
 the ABI, this will throw.

#### Parameters

##### key

`string`

##### values?

`any`[]

#### Returns

[`EventFragment`](EventFragment.md) \| `null`

***

### getEventName()

> **getEventName**(`key`): `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:240

Get the event name for %%key%%, which may be a topic hash,
 event name or event signature that belongs to the ABI.

#### Parameters

##### key

`string`

#### Returns

`string`

***

### getFunction()

> **getFunction**(`key`, `values?`): [`FunctionFragment`](FunctionFragment.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:231

Get the [[FunctionFragment]] for %%key%%, which may be a function
 selector, function name or function signature that belongs to the ABI.

 If %%values%% is provided, it will use the Typed API to handle
 ambiguous cases where multiple functions match by name.

 If the %%key%% and %%values%% do not refine to a single function in
 the ABI, this will throw.

#### Parameters

##### key

`string`

##### values?

`any`[]

#### Returns

[`FunctionFragment`](FunctionFragment.md) \| `null`

***

### getFunctionName()

> **getFunctionName**(`key`): `string`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:212

Get the function name for %%key%%, which may be a function selector,
 function name or function signature that belongs to the ABI.

#### Parameters

##### key

`string`

#### Returns

`string`

***

### hasEvent()

> **hasEvent**(`key`): `boolean`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:248

Returns true if %%key%% (an event topic hash, event name or
 event signature) is present in the ABI.

 In the case of an event name, the name may be ambiguous, so
 accessing the [[EventFragment]] may require refinement.

#### Parameters

##### key

`string`

#### Returns

`boolean`

***

### hasFunction()

> **hasFunction**(`key`): `boolean`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:220

Returns true if %%key%% (a function selector, function name or
 function signature) is present in the ABI.

 In the case of a function name, the name may be ambiguous, so
 accessing the [[FunctionFragment]] may require refinement.

#### Parameters

##### key

`string`

#### Returns

`boolean`

***

### makeError()

> **makeError**(`_data`, `tx`): [`CallExceptionError`](../interfaces/CallExceptionError.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:330

#### Parameters

##### \_data

[`BytesLike`](../type-aliases/BytesLike.md)

##### tx

[`CallExceptionTransaction`](../type-aliases/CallExceptionTransaction.md)

#### Returns

[`CallExceptionError`](../interfaces/CallExceptionError.md)

***

### parseCallResult()

> **parseCallResult**(`data`): [`Result`](Result.md)

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:356

#### Parameters

##### data

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`Result`](Result.md)

***

### parseError()

> **parseError**(`data`): [`ErrorDescription`](ErrorDescription.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:373

Parses a revert data, finding the matching error and extracts
 the parameter values along with other useful error details.

 If the matching error cannot be found, returns null.

#### Parameters

##### data

[`BytesLike`](../type-aliases/BytesLike.md)

#### Returns

[`ErrorDescription`](ErrorDescription.md) \| `null`

***

### parseLog()

> **parseLog**(`log`): [`LogDescription`](LogDescription.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:363

Parses a receipt log, finding the matching event and extracts
 the parameter values along with other useful event details.

 If the matching event cannot be found, returns null.

#### Parameters

##### log

###### data

`string`

###### topics

readonly `string`[]

#### Returns

[`LogDescription`](LogDescription.md) \| `null`

***

### parseTransaction()

> **parseTransaction**(`tx`): [`TransactionDescription`](TransactionDescription.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:352

Parses a transaction, finding the matching function and extracts
 the parameter values along with other useful function details.

 If the matching function cannot be found, return null.

#### Parameters

##### tx

###### data

`string`

###### value?

[`BigNumberish`](../type-aliases/BigNumberish-1.md)

#### Returns

[`TransactionDescription`](TransactionDescription.md) \| `null`

***

### from()

> `static` **from**(`value`): `Interface`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/abi/interface.d.ts:380

Creates a new [[Interface]] from the ABI %%value%%.

 The %%value%% may be provided as an existing [[Interface]] object,
 a JSON-encoded ABI or any Human-Readable ABI format.

#### Parameters

##### value

`Interface` \| [`InterfaceAbi`](../type-aliases/InterfaceAbi.md)

#### Returns

`Interface`
