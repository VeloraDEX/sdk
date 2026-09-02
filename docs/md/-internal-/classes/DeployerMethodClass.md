[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / DeployerMethodClass

# Class: DeployerMethodClass\<FullContractAbi\>

Defined in: node\_modules/.pnpm/web3-eth-contract@4.7.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-contract/lib/commonjs/contract-deployer-method-class.d.ts:7

## Type Parameters

### FullContractAbi

`FullContractAbi` *extends* [`ContractAbi`](../type-aliases/ContractAbi.md)

## Constructors

### Constructor

> **new DeployerMethodClass**\<`FullContractAbi`\>(`parent`, `deployOptions`): `DeployerMethodClass`\<`FullContractAbi`\>

Defined in: node\_modules/.pnpm/web3-eth-contract@4.7.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-contract/lib/commonjs/contract-deployer-method-class.d.ts:25

#### Parameters

##### parent

[`Contract`](Contract-2.md)\<`FullContractAbi`\>

##### deployOptions

\{ `arguments?`: [`ContractConstructorArgs`](../type-aliases/ContractConstructorArgs-1.md)\<`FullContractAbi`\>; `data?`: `string`; `input?`: `string`; \} \| `undefined`

###### Type Literal

\{ `arguments?`: [`ContractConstructorArgs`](../type-aliases/ContractConstructorArgs-1.md)\<`FullContractAbi`\>; `data?`: `string`; `input?`: `string`; \}

###### arguments?

[`ContractConstructorArgs`](../type-aliases/ContractConstructorArgs-1.md)\<`FullContractAbi`\>

The arguments which get passed to the constructor on deployment.

###### data?

`string`

The byte code of the contract.

###### input?

`string`

***

`undefined`

#### Returns

`DeployerMethodClass`\<`FullContractAbi`\>

## Properties

### args

> `protected` `readonly` **args**: `never`[] \| [`ContractConstructorArgs`](../type-aliases/ContractConstructorArgs-1.md)\<`FullContractAbi`\>

Defined in: node\_modules/.pnpm/web3-eth-contract@4.7.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-contract/lib/commonjs/contract-deployer-method-class.d.ts:20

***

### constructorAbi

> `protected` `readonly` **constructorAbi**: [`AbiConstructorFragment`](../type-aliases/AbiConstructorFragment.md)

Defined in: node\_modules/.pnpm/web3-eth-contract@4.7.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-contract/lib/commonjs/contract-deployer-method-class.d.ts:21

***

### contractOptions

> `protected` `readonly` **contractOptions**: [`ContractOptions`](../interfaces/ContractOptions.md)

Defined in: node\_modules/.pnpm/web3-eth-contract@4.7.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-contract/lib/commonjs/contract-deployer-method-class.d.ts:22

***

### deployData?

> `protected` `readonly` `optional` **deployData?**: `string`

Defined in: node\_modules/.pnpm/web3-eth-contract@4.7.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-contract/lib/commonjs/contract-deployer-method-class.d.ts:23

***

### deployOptions

> **deployOptions**: \{ `arguments?`: [`ContractConstructorArgs`](../type-aliases/ContractConstructorArgs-1.md)\<`FullContractAbi`\>; `data?`: `string`; `input?`: `string`; \} \| `undefined`

Defined in: node\_modules/.pnpm/web3-eth-contract@4.7.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-contract/lib/commonjs/contract-deployer-method-class.d.ts:9

#### Union Members

##### Type Literal

\{ `arguments?`: [`ContractConstructorArgs`](../type-aliases/ContractConstructorArgs-1.md)\<`FullContractAbi`\>; `data?`: `string`; `input?`: `string`; \}

##### arguments?

> `optional` **arguments?**: [`ContractConstructorArgs`](../type-aliases/ContractConstructorArgs-1.md)\<`FullContractAbi`\>

The arguments which get passed to the constructor on deployment.

##### data?

> `optional` **data?**: `string`

The byte code of the contract.

##### input?

> `optional` **input?**: `string`

***

`undefined`

***

### parent

> **parent**: [`Contract`](Contract-2.md)\<`FullContractAbi`\>

Defined in: node\_modules/.pnpm/web3-eth-contract@4.7.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-contract/lib/commonjs/contract-deployer-method-class.d.ts:8

## Methods

### \_contractMethodDeploySend()

> `protected` **\_contractMethodDeploySend**(`tx`): [`Web3PromiEvent`](Web3PromiEvent.md)\<[`Contract`](Contract-2.md)\<`FullContractAbi`\>, [`SendTransactionEvents`](../type-aliases/SendTransactionEvents.md)\<[`DataFormat`](../type-aliases/DataFormat.md)\>\>

Defined in: node\_modules/.pnpm/web3-eth-contract@4.7.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-contract/lib/commonjs/contract-deployer-method-class.d.ts:24

#### Parameters

##### tx

[`TransactionCall`](../interfaces/TransactionCall.md)

#### Returns

[`Web3PromiEvent`](Web3PromiEvent.md)\<[`Contract`](Contract-2.md)\<`FullContractAbi`\>, [`SendTransactionEvents`](../type-aliases/SendTransactionEvents.md)\<[`DataFormat`](../type-aliases/DataFormat.md)\>\>

***

### calculateDeployParams()

> `protected` **calculateDeployParams**(): `object`

Defined in: node\_modules/.pnpm/web3-eth-contract@4.7.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-contract/lib/commonjs/contract-deployer-method-class.d.ts:38

#### Returns

`object`

##### abi

> **abi**: [`AbiConstructorFragment`](../type-aliases/AbiConstructorFragment.md)

##### args

> **args**: `never`[] \| [`NonNullable`](../type-aliases/NonNullable.md)\<[`ContractConstructorArgs`](../type-aliases/ContractConstructorArgs-1.md)\<`FullContractAbi`\>\>

##### contractOptions

> **contractOptions**: [`ContractOptions`](../interfaces/ContractOptions.md)

##### deployData

> **deployData**: `string` \| `undefined`

***

### decodeData()

> **decodeData**(`data`): `object`

Defined in: node\_modules/.pnpm/web3-eth-contract@4.7.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-contract/lib/commonjs/contract-deployer-method-class.d.ts:46

#### Parameters

##### data

`string`

#### Returns

`object`

##### \_\_length\_\_

> **\_\_length\_\_**: `number`

##### \_\_method\_\_

> **\_\_method\_\_**: `string`

***

### encodeABI()

> **encodeABI**(): `string`

Defined in: node\_modules/.pnpm/web3-eth-contract@4.7.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-contract/lib/commonjs/contract-deployer-method-class.d.ts:45

#### Returns

`string`

***

### estimateGas()

> **estimateGas**\<`ReturnFormat`\>(`options?`, `returnFormat?`): `Promise`\<[`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]\>

Defined in: node\_modules/.pnpm/web3-eth-contract@4.7.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-contract/lib/commonjs/contract-deployer-method-class.d.ts:44

#### Type Parameters

##### ReturnFormat

`ReturnFormat` *extends* [`DataFormat`](../type-aliases/DataFormat.md) = \{ `bytes`: [`HEX`](../README.md#hex); `number`: [`BIGINT`](../README.md#bigint); \}

#### Parameters

##### options?

[`PayableCallOptions`](../interfaces/PayableCallOptions.md)

##### returnFormat?

`ReturnFormat`

#### Returns

`Promise`\<[`NumberTypes`](../type-aliases/NumberTypes.md)\[`ReturnFormat`\[`"number"`\]\]\>

***

### populateTransaction()

> **populateTransaction**(`txOptions?`): [`TransactionCall`](../interfaces/TransactionCall.md)

Defined in: node\_modules/.pnpm/web3-eth-contract@4.7.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-contract/lib/commonjs/contract-deployer-method-class.d.ts:37

#### Parameters

##### txOptions?

[`PayableCallOptions`](../interfaces/PayableCallOptions.md) \| [`NonPayableCallOptions`](../interfaces/NonPayableCallOptions.md)

#### Returns

[`TransactionCall`](../interfaces/TransactionCall.md)

***

### send()

> **send**(`options?`): [`ContractDeploySend`](../type-aliases/ContractDeploySend.md)\<`FullContractAbi`\>

Defined in: node\_modules/.pnpm/web3-eth-contract@4.7.0\_typescript@5.9.3\_zod@3.25.76/node\_modules/web3-eth-contract/lib/commonjs/contract-deployer-method-class.d.ts:36

#### Parameters

##### options?

[`PayableCallOptions`](../interfaces/PayableCallOptions.md)

#### Returns

[`ContractDeploySend`](../type-aliases/ContractDeploySend.md)\<`FullContractAbi`\>
