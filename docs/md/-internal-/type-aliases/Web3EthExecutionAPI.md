[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3EthExecutionAPI

# Type Alias: Web3EthExecutionAPI

> **Web3EthExecutionAPI** = [`EthExecutionAPI`](EthExecutionAPI.md) & `object`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/apis/web3\_eth\_execution\_api.d.ts:3

## Type Declaration

### eth\_chainId

> **eth\_chainId**: () => [`Uint`](Uint.md)

#### Returns

[`Uint`](Uint.md)

### eth\_getProof

> **eth\_getProof**: (`address`, `storageKeys`, `blockNumber`) => [`AccountObject`](../interfaces/AccountObject.md)

#### Parameters

##### address

[`Address`](Address-2.md)

##### storageKeys

[`HexString32Bytes`](HexString32Bytes.md)[]

##### blockNumber

[`BlockNumberOrTag`](BlockNumberOrTag.md)

#### Returns

[`AccountObject`](../interfaces/AccountObject.md)

### eth\_pendingTransactions

> **eth\_pendingTransactions**: () => [`TransactionInfo`](../interfaces/TransactionInfo.md)[]

#### Returns

[`TransactionInfo`](../interfaces/TransactionInfo.md)[]

### eth\_requestAccounts

> **eth\_requestAccounts**: () => [`Address`](Address-2.md)[]

#### Returns

[`Address`](Address-2.md)[]

### eth\_signTypedData

> **eth\_signTypedData**: (`address`, `typedData`, `useLegacy`) => [`HexString256Bytes`](HexString256Bytes.md)

#### Parameters

##### address

[`Address`](Address-2.md)

##### typedData

[`Eip712TypedData`](../interfaces/Eip712TypedData.md)

##### useLegacy

`true`

#### Returns

[`HexString256Bytes`](HexString256Bytes.md)

### eth\_signTypedData\_v4

> **eth\_signTypedData\_v4**: (`address`, `typedData`, `useLegacy`) => [`HexString256Bytes`](HexString256Bytes.md)

#### Parameters

##### address

[`Address`](Address-2.md)

##### typedData

[`Eip712TypedData`](../interfaces/Eip712TypedData.md)

##### useLegacy

`false` \| `undefined`

#### Returns

[`HexString256Bytes`](HexString256Bytes.md)

### web3\_clientVersion

> **web3\_clientVersion**: () => `string`

#### Returns

`string`
