[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / WalletActions

# Type Alias: WalletActions\<chain, account\>

> **WalletActions**\<`chain`, `account`\>: `object`

## Type Parameters

• **chain** *extends* [`Chain`](Chain.md) \| `undefined` = [`Chain`](Chain.md) \| `undefined`

• **account** *extends* [`Account`](Account.md) \| `undefined` = [`Account`](Account.md) \| `undefined`

## Type declaration

### addChain()

> **addChain**: (`args`) => `Promise`\<`void`\>

Adds an EVM chain to the wallet.

- Docs: https://viem.sh/docs/actions/wallet/addChain
- JSON-RPC Methods: [`eth_addEthereumChain`](https://eips.ethereum.org/EIPS/eip-3085)

#### Parameters

• **args**: [`AddChainParameters`](AddChainParameters.md)

[AddChainParameters](AddChainParameters.md)

#### Returns

`Promise`\<`void`\>

#### Example

```ts
import { createWalletClient, custom } from 'viem'
import { optimism } from 'viem/chains'

const client = createWalletClient({
  transport: custom(window.ethereum),
})
await client.addChain({ chain: optimism })
```

### deployContract()

> **deployContract**: \<`abi`, `chainOverride`\>(`args`) => `Promise`\<[`DeployContractReturnType`](DeployContractReturnType.md)\>

Deploys a contract to the network, given bytecode and constructor arguments.

- Docs: https://viem.sh/docs/contract/deployContract
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/contracts_deploying-contracts

#### Type Parameters

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[]

• **chainOverride** *extends* [`Chain`](Chain.md) \| `undefined`

#### Parameters

• **args**: [`DeployContractParameters`](DeployContractParameters.md)\<`abi`, `chain`, `account`, `chainOverride`\>

[DeployContractParameters](DeployContractParameters.md)

#### Returns

`Promise`\<[`DeployContractReturnType`](DeployContractReturnType.md)\>

The [Transaction](https://viem.sh/docs/glossary/terms#transaction) hash. [DeployContractReturnType](DeployContractReturnType.md)

#### Example

```ts
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  account: privateKeyToAccount('0x…'),
  chain: mainnet,
  transport: http(),
})
const hash = await client.deployContract({
  abi: [],
  account: '0x…,
  bytecode: '0x608060405260405161083e38038061083e833981016040819052610...',
})
```

### getAddresses()

> **getAddresses**: () => `Promise`\<[`GetAddressesReturnType`](GetAddressesReturnType.md)\>

Returns a list of account addresses owned by the wallet or client.

- Docs: https://viem.sh/docs/actions/wallet/getAddresses
- JSON-RPC Methods: [`eth_accounts`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_accounts)

#### Returns

`Promise`\<[`GetAddressesReturnType`](GetAddressesReturnType.md)\>

List of account addresses owned by the wallet or client. [GetAddressesReturnType](GetAddressesReturnType.md)

#### Example

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})
const accounts = await client.getAddresses()
```

### getCallsStatus()

> **getCallsStatus**: (`parameters`) => `Promise`\<[`GetCallsStatusReturnType`](GetCallsStatusReturnType.md)\>

Returns the status of a call batch that was sent via `sendCalls`.

- Docs: https://viem.sh/docs/actions/wallet/getCallsStatus
- JSON-RPC Methods: [`wallet_getCallsStatus`](https://eips.ethereum.org/EIPS/eip-5792)

#### Parameters

• **parameters**: [`GetCallsStatusParameters`](GetCallsStatusParameters.md)

#### Returns

`Promise`\<[`GetCallsStatusReturnType`](GetCallsStatusReturnType.md)\>

Status of the calls. [GetCallsStatusReturnType](GetCallsStatusReturnType.md)

#### Example

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})

const { receipts, status } = await client.getCallsStatus({ id: '0xdeadbeef' })
```

### getCapabilities()

> **getCapabilities**: \<`chainId`\>(`parameters`?) => `Promise`\<[`GetCapabilitiesReturnType`](GetCapabilitiesReturnType.md)\<`chainId`\>\>

Extract capabilities that a connected wallet supports (e.g. paymasters, session keys, etc).

- Docs: https://viem.sh/docs/actions/wallet/getCapabilities
- JSON-RPC Methods: [`wallet_getCapabilities`](https://eips.ethereum.org/EIPS/eip-5792)

#### Type Parameters

• **chainId** *extends* `number` \| `undefined`

#### Parameters

• **parameters?**: [`GetCapabilitiesParameters`](GetCapabilitiesParameters.md)\<`chainId`\>

#### Returns

`Promise`\<[`GetCapabilitiesReturnType`](GetCapabilitiesReturnType.md)\<`chainId`\>\>

The wallet's capabilities. [GetCapabilitiesReturnType](GetCapabilitiesReturnType.md)

#### Example

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})

const capabilities = await client.getCapabilities({
  account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
})
```

### getChainId()

> **getChainId**: () => `Promise`\<[`GetChainIdReturnType`](GetChainIdReturnType.md)\>

Returns the chain ID associated with the current network.

- Docs: https://viem.sh/docs/actions/public/getChainId
- JSON-RPC Methods: [`eth_chainId`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_chainid)

#### Returns

`Promise`\<[`GetChainIdReturnType`](GetChainIdReturnType.md)\>

The current chain ID. [GetChainIdReturnType](GetChainIdReturnType.md)

#### Example

```ts
import { createWalletClient, http } from 'viem'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})
const chainId = await client.getChainId()
// 1
```

### getPermissions()

> **getPermissions**: () => `Promise`\<[`GetPermissionsReturnType`](GetPermissionsReturnType.md)\>

Gets the wallets current permissions.

- Docs: https://viem.sh/docs/actions/wallet/getPermissions
- JSON-RPC Methods: [`wallet_getPermissions`](https://eips.ethereum.org/EIPS/eip-2255)

#### Returns

`Promise`\<[`GetPermissionsReturnType`](GetPermissionsReturnType.md)\>

The wallet permissions. [GetPermissionsReturnType](GetPermissionsReturnType.md)

#### Example

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})
const permissions = await client.getPermissions()
```

### prepareAuthorization()

> **prepareAuthorization**: (`parameters`) => `Promise`\<[`PrepareAuthorizationReturnType`](PrepareAuthorizationReturnType.md)\>

Prepares an [EIP-7702 Authorization](https://eips.ethereum.org/EIPS/eip-7702) object for signing.
This Action will fill the required fields of the Authorization object if they are not provided (e.g. `nonce` and `chainId`).

With the prepared Authorization object, you can use [`signAuthorization`](https://viem.sh/docs/eip7702/signAuthorization) to sign over the Authorization object.

#### Parameters

• **parameters**: [`PrepareAuthorizationParameters`](PrepareAuthorizationParameters.md)\<`account`\>

[PrepareAuthorizationParameters](PrepareAuthorizationParameters.md)

#### Returns

`Promise`\<[`PrepareAuthorizationReturnType`](PrepareAuthorizationReturnType.md)\>

The prepared Authorization object. [PrepareAuthorizationReturnType](PrepareAuthorizationReturnType.md)

#### Examples

```ts
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: http(),
})

const authorization = await client.prepareAuthorization({
  account: privateKeyToAccount('0x..'),
  contractAddress: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
})
```

```ts
// Account Hoisting
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  account: privateKeyToAccount('0x…'),
  chain: mainnet,
  transport: http(),
})

const authorization = await client.prepareAuthorization({
  contractAddress: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
})
```

### prepareTransactionRequest()

> **prepareTransactionRequest**: \<`request`, `chainOverride`, `accountOverride`\>(`args`) => `Promise`\<[`PrepareTransactionRequestReturnType`](PrepareTransactionRequestReturnType.md)\<`chain`, `account`, `chainOverride`, `accountOverride`, `request`\>\>

Prepares a transaction request for signing.

- Docs: https://viem.sh/docs/actions/wallet/prepareTransactionRequest

#### Type Parameters

• **request** *extends* [`PrepareTransactionRequestRequest`](PrepareTransactionRequestRequest.md)\<`chain`, `chainOverride`\>

• **chainOverride** *extends* [`Chain`](Chain.md) \| `undefined` = `undefined`

• **accountOverride** *extends* [`Account`](Account.md) \| [`Address`](Address.md) \| `undefined` = `undefined`

#### Parameters

• **args**: [`PrepareTransactionRequestParameters`](PrepareTransactionRequestParameters.md)\<`chain`, `account`, `chainOverride`, `accountOverride`, `request`\>

[PrepareTransactionRequestParameters](PrepareTransactionRequestParameters.md)

#### Returns

`Promise`\<[`PrepareTransactionRequestReturnType`](PrepareTransactionRequestReturnType.md)\<`chain`, `account`, `chainOverride`, `accountOverride`, `request`\>\>

The transaction request. [PrepareTransactionRequestReturnType](PrepareTransactionRequestReturnType.md)

#### Examples

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})
const request = await client.prepareTransactionRequest({
  account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  to: '0x0000000000000000000000000000000000000000',
  value: 1n,
})
```

```ts
// Account Hoisting
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  account: privateKeyToAccount('0x…'),
  chain: mainnet,
  transport: custom(window.ethereum),
})
const request = await client.prepareTransactionRequest({
  to: '0x0000000000000000000000000000000000000000',
  value: 1n,
})
```

### requestAddresses()

> **requestAddresses**: () => `Promise`\<[`RequestAddressesReturnType`](RequestAddressesReturnType.md)\>

Requests a list of accounts managed by a wallet.

- Docs: https://viem.sh/docs/actions/wallet/requestAddresses
- JSON-RPC Methods: [`eth_requestAccounts`](https://eips.ethereum.org/EIPS/eip-1102)

Sends a request to the wallet, asking for permission to access the user's accounts. After the user accepts the request, it will return a list of accounts (addresses).

This API can be useful for dapps that need to access the user's accounts in order to execute transactions or interact with smart contracts.

#### Returns

`Promise`\<[`RequestAddressesReturnType`](RequestAddressesReturnType.md)\>

List of accounts managed by a wallet [RequestAddressesReturnType](RequestAddressesReturnType.md)

#### Example

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})
const accounts = await client.requestAddresses()
```

### requestPermissions()

> **requestPermissions**: (`args`) => `Promise`\<[`RequestPermissionsReturnType`](RequestPermissionsReturnType.md)\>

Requests permissions for a wallet.

- Docs: https://viem.sh/docs/actions/wallet/requestPermissions
- JSON-RPC Methods: [`wallet_requestPermissions`](https://eips.ethereum.org/EIPS/eip-2255)

#### Parameters

• **args**: [`RequestPermissionsParameters`](RequestPermissionsParameters.md)

[RequestPermissionsParameters](RequestPermissionsParameters.md)

#### Returns

`Promise`\<[`RequestPermissionsReturnType`](RequestPermissionsReturnType.md)\>

The wallet permissions. [RequestPermissionsReturnType](RequestPermissionsReturnType.md)

#### Example

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})
const permissions = await client.requestPermissions({
  eth_accounts: {}
})
```

### sendCalls()

> **sendCalls**: \<`calls`, `chainOverride`\>(`parameters`) => `Promise`\<[`SendCallsReturnType`](SendCallsReturnType.md)\>

Requests the connected wallet to send a batch of calls.

- Docs: https://viem.sh/docs/actions/wallet/sendCalls
- JSON-RPC Methods: [`wallet_sendCalls`](https://eips.ethereum.org/EIPS/eip-5792)

#### Type Parameters

• **calls** *extends* readonly `unknown`[]

• **chainOverride** *extends* [`Chain`](Chain.md) \| `undefined` = `undefined`

#### Parameters

• **parameters**: [`SendCallsParameters`](SendCallsParameters.md)\<`chain`, `account`, `chainOverride`, `calls`\>

#### Returns

`Promise`\<[`SendCallsReturnType`](SendCallsReturnType.md)\>

Transaction identifier. [SendCallsReturnType](SendCallsReturnType.md)

#### Example

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})

const id = await client.sendCalls({
  account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  calls: [
    {
      data: '0xdeadbeef',
      to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
    },
    {
      to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
      value: 69420n,
    },
  ],
})
```

### sendCallsSync()

> **sendCallsSync**: \<`calls`, `chainOverride`\>(`parameters`) => `Promise`\<[`SendCallsSyncReturnType`](SendCallsSyncReturnType.md)\>

Requests the connected wallet to send a batch of calls, and waits for the calls to be included in a block.

- Docs: https://viem.sh/docs/actions/wallet/sendCallsSync
- JSON-RPC Methods: [`wallet_sendCalls`](https://eips.ethereum.org/EIPS/eip-5792)

#### Type Parameters

• **calls** *extends* readonly `unknown`[]

• **chainOverride** *extends* [`Chain`](Chain.md) \| `undefined` = `undefined`

#### Parameters

• **parameters**: [`SendCallsSyncParameters`](SendCallsSyncParameters.md)\<`chain`, `account`, `chainOverride`, `calls`\>

#### Returns

`Promise`\<[`SendCallsSyncReturnType`](SendCallsSyncReturnType.md)\>

Calls status. [SendCallsSyncReturnType](SendCallsSyncReturnType.md)

#### Example

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})

const status = await client.sendCallsSync({
  account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  calls: [
    {
      data: '0xdeadbeef',
      to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
    },
    {
      to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
      value: 69420n,
    },
  ],
})
```

### sendRawTransaction()

> **sendRawTransaction**: (`args`) => `Promise`\<[`SendRawTransactionReturnType`](SendRawTransactionReturnType.md)\>

Sends a **signed** transaction to the network

- Docs: https://viem.sh/docs/actions/wallet/sendRawTransaction
- JSON-RPC Method: [`eth_sendRawTransaction`](https://ethereum.github.io/execution-apis/api-documentation/)

#### Parameters

• **args**: [`SendRawTransactionParameters`](SendRawTransactionParameters.md)

#### Returns

`Promise`\<[`SendRawTransactionReturnType`](SendRawTransactionReturnType.md)\>

The transaction hash. [SendRawTransactionReturnType](SendRawTransactionReturnType.md)

#### Example

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'
import { sendRawTransaction } from 'viem/wallet'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})

const hash = await client.sendRawTransaction({
  serializedTransaction: '0x02f850018203118080825208808080c080a04012522854168b27e5dc3d5839bab5e6b39e1a0ffd343901ce1622e3d64b48f1a04e00902ae0502c4728cbf12156290df99c3ed7de85b1dbfe20b5c36931733a33'
})
```

### sendRawTransactionSync()

> **sendRawTransactionSync**: (`args`) => `Promise`\<[`SendRawTransactionSyncReturnType`](SendRawTransactionSyncReturnType.md)\<`chain`\>\>

Sends a **signed** transaction to the network synchronously,
and waits for the transaction to be included in a block.

- Docs: https://viem.sh/docs/actions/wallet/sendRawTransactionSync
- JSON-RPC Method: [`eth_sendRawTransactionSync`](https://eips.ethereum.org/EIPS/eip-7966)

#### Parameters

• **args**: [`SendRawTransactionSyncParameters`](SendRawTransactionSyncParameters.md)

#### Returns

`Promise`\<[`SendRawTransactionSyncReturnType`](SendRawTransactionSyncReturnType.md)\<`chain`\>\>

The transaction receipt. [SendRawTransactionSyncReturnType](SendRawTransactionSyncReturnType.md)

#### Example

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'
import { sendRawTransactionSync } from 'viem/wallet'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})

const receipt = await client.sendRawTransactionSync({
  serializedTransaction: '0x02f850018203118080825208808080c080a04012522854168b27e5dc3d5839bab5e6b39e1a0ffd343901ce1622e3d64b48f1a04e00902ae0502c4728cbf12156290df99c3ed7de85b1dbfe20b5c36931733a33'
})
```

### sendTransaction()

> **sendTransaction**: \<`request`, `chainOverride`\>(`args`) => `Promise`\<[`SendTransactionReturnType`](SendTransactionReturnType.md)\>

Creates, signs, and sends a new transaction to the network.

- Docs: https://viem.sh/docs/actions/wallet/sendTransaction
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/transactions_sending-transactions
- JSON-RPC Methods:
  - JSON-RPC Accounts: [`eth_sendTransaction`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sendtransaction)
  - Local Accounts: [`eth_sendRawTransaction`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sendrawtransaction)

#### Type Parameters

• **request** *extends* [`SendTransactionRequest`](SendTransactionRequest.md)\<`chain`, `chainOverride`\>

• **chainOverride** *extends* [`Chain`](Chain.md) \| `undefined` = `undefined`

#### Parameters

• **args**: [`SendTransactionParameters`](SendTransactionParameters.md)\<`chain`, `account`, `chainOverride`, `request`\>

[SendTransactionParameters](SendTransactionParameters.md)

#### Returns

`Promise`\<[`SendTransactionReturnType`](SendTransactionReturnType.md)\>

The [Transaction](https://viem.sh/docs/glossary/terms#transaction) hash. [SendTransactionReturnType](SendTransactionReturnType.md)

#### Examples

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})
const hash = await client.sendTransaction({
  account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
  value: 1000000000000000000n,
})
```

```ts
// Account Hoisting
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  account: privateKeyToAccount('0x…'),
  chain: mainnet,
  transport: http(),
})
const hash = await client.sendTransaction({
  to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
  value: 1000000000000000000n,
})
```

### sendTransactionSync()

> **sendTransactionSync**: \<`request`, `chainOverride`\>(`args`) => `Promise`\<[`SendTransactionSyncReturnType`](SendTransactionSyncReturnType.md)\>

Creates, signs, and sends a new transaction to the network synchronously.
Returns the transaction receipt.

- Docs: https://viem.sh/docs/actions/wallet/sendTransactionSync
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/transactions_sending-transactions
- JSON-RPC Methods:
  - JSON-RPC Accounts: [`eth_sendTransaction`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sendtransaction)
  - Local Accounts: [`eth_sendRawTransaction`](https://ethereum.org/en/developers/docs/apis/json-rpc/#eth_sendrawtransaction)

#### Type Parameters

• **request** *extends* [`SendTransactionSyncRequest`](SendTransactionSyncRequest.md)\<`chain`, `chainOverride`\>

• **chainOverride** *extends* [`Chain`](Chain.md) \| `undefined` = `undefined`

#### Parameters

• **args**: [`SendTransactionSyncParameters`](SendTransactionSyncParameters.md)\<`chain`, `account`, `chainOverride`, `request`\>

[SendTransactionParameters](SendTransactionParameters.md)

#### Returns

`Promise`\<[`SendTransactionSyncReturnType`](SendTransactionSyncReturnType.md)\>

The transaction receipt. [SendTransactionReturnType](SendTransactionReturnType.md)

#### Examples

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})
const receipt = await client.sendTransactionSync({
  account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
  value: 1000000000000000000n,
})
```

```ts
// Account Hoisting
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  account: privateKeyToAccount('0x…'),
  chain: mainnet,
  transport: http(),
})
const receipt = await client.sendTransactionSync({
  to: '0x70997970c51812dc3a010c7d01b50e0d17dc79c8',
  value: 1000000000000000000n,
})
```

### showCallsStatus()

> **showCallsStatus**: (`parameters`) => `Promise`\<[`ShowCallsStatusReturnType`](ShowCallsStatusReturnType.md)\>

Requests for the wallet to show information about a call batch
that was sent via `sendCalls`.

- Docs: https://viem.sh/docs/actions/wallet/showCallsStatus
- JSON-RPC Methods: [`wallet_showCallsStatus`](https://eips.ethereum.org/EIPS/eip-5792)

#### Parameters

• **parameters**: [`ShowCallsStatusParameters`](ShowCallsStatusParameters.md)

#### Returns

`Promise`\<[`ShowCallsStatusReturnType`](ShowCallsStatusReturnType.md)\>

Displays status of the calls in wallet. [ShowCallsStatusReturnType](ShowCallsStatusReturnType.md)

#### Example

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})

await client.showCallsStatus({ id: '0xdeadbeef' })
```

### signAuthorization()

> **signAuthorization**: (`parameters`) => `Promise`\<[`SignAuthorizationReturnType`](SignAuthorizationReturnType.md)\>

Signs an [EIP-7702 Authorization](https://eips.ethereum.org/EIPS/eip-7702) object.

With the calculated signature, you can:
- use [`verifyAuthorization`](https://viem.sh/docs/eip7702/verifyAuthorization) to verify the signed Authorization object,
- use [`recoverAuthorizationAddress`](https://viem.sh/docs/eip7702/recoverAuthorizationAddress) to recover the signing address from the signed Authorization object.

#### Parameters

• **parameters**: [`SignAuthorizationParameters`](SignAuthorizationParameters.md)\<`account`\>

[SignAuthorizationParameters](SignAuthorizationParameters.md)

#### Returns

`Promise`\<[`SignAuthorizationReturnType`](SignAuthorizationReturnType.md)\>

The signed Authorization object. [SignAuthorizationReturnType](SignAuthorizationReturnType.md)

#### Examples

```ts
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: http(),
})

const signature = await client.signAuthorization({
  account: privateKeyToAccount('0x..'),
  contractAddress: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
})
```

```ts
// Account Hoisting
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  account: privateKeyToAccount('0x…'),
  chain: mainnet,
  transport: http(),
})

const signature = await client.signAuthorization({
  contractAddress: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
})
```

### signMessage()

> **signMessage**: (`args`) => `Promise`\<[`SignMessageReturnType`](SignMessageReturnType.md)\>

Calculates an Ethereum-specific signature in [EIP-191 format](https://eips.ethereum.org/EIPS/eip-191): `keccak256("\x19Ethereum Signed Message:\n" + len(message) + message))`.

- Docs: https://viem.sh/docs/actions/wallet/signMessage
- JSON-RPC Methods:
  - JSON-RPC Accounts: [`personal_sign`](https://docs.metamask.io/guide/signing-data#personal-sign)
  - Local Accounts: Signs locally. No JSON-RPC request.

With the calculated signature, you can:
- use [`verifyMessage`](https://viem.sh/docs/utilities/verifyMessage) to verify the signature,
- use [`recoverMessageAddress`](https://viem.sh/docs/utilities/recoverMessageAddress) to recover the signing address from a signature.

#### Parameters

• **args**: [`SignMessageParameters`](SignMessageParameters.md)\<`account`\>

[SignMessageParameters](SignMessageParameters.md)

#### Returns

`Promise`\<[`SignMessageReturnType`](SignMessageReturnType.md)\>

The signed message. [SignMessageReturnType](SignMessageReturnType.md)

#### Examples

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})
const signature = await client.signMessage({
  account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  message: 'hello world',
})
```

```ts
// Account Hoisting
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  account: privateKeyToAccount('0x…'),
  chain: mainnet,
  transport: http(),
})
const signature = await client.signMessage({
  message: 'hello world',
})
```

### signTransaction()

> **signTransaction**: \<`chainOverride`, `request`\>(`args`) => `Promise`\<[`SignTransactionReturnType`](SignTransactionReturnType.md)\<`request`\>\>

Signs a transaction.

- Docs: https://viem.sh/docs/actions/wallet/signTransaction
- JSON-RPC Methods:
  - JSON-RPC Accounts: [`eth_signTransaction`](https://ethereum.github.io/execution-apis/api-documentation/)
  - Local Accounts: Signs locally. No JSON-RPC request.

#### Type Parameters

• **chainOverride** *extends* [`Chain`](Chain.md) \| `undefined`

• **request** *extends* [`SignTransactionRequest`](SignTransactionRequest.md)\<`chain`, `chainOverride`\> = [`SignTransactionRequest`](SignTransactionRequest.md)\<`chain`, `chainOverride`\>

#### Parameters

• **args**: [`SignTransactionParameters`](SignTransactionParameters.md)\<`chain`, `account`, `chainOverride`, `request`\>

[SignTransactionParameters](SignTransactionParameters.md)

#### Returns

`Promise`\<[`SignTransactionReturnType`](SignTransactionReturnType.md)\<`request`\>\>

The signed message. [SignTransactionReturnType](SignTransactionReturnType.md)

#### Examples

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})
const request = await client.prepareTransactionRequest({
  account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  to: '0x0000000000000000000000000000000000000000',
  value: 1n,
})
const signature = await client.signTransaction(request)
```

```ts
// Account Hoisting
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  account: privateKeyToAccount('0x…'),
  chain: mainnet,
  transport: custom(window.ethereum),
})
const request = await client.prepareTransactionRequest({
  to: '0x0000000000000000000000000000000000000000',
  value: 1n,
})
const signature = await client.signTransaction(request)
```

### signTypedData()

> **signTypedData**: \<`typedData`, `primaryType`\>(`args`) => `Promise`\<[`SignTypedDataReturnType`](SignTypedDataReturnType.md)\>

Signs typed data and calculates an Ethereum-specific signature in [EIP-191 format](https://eips.ethereum.org/EIPS/eip-191): `keccak256("\x19Ethereum Signed Message:\n" + len(message) + message))`.

- Docs: https://viem.sh/docs/actions/wallet/signTypedData
- JSON-RPC Methods:
  - JSON-RPC Accounts: [`eth_signTypedData_v4`](https://docs.metamask.io/guide/signing-data#signtypeddata-v4)
  - Local Accounts: Signs locally. No JSON-RPC request.

#### Type Parameters

• **typedData** *extends* [`TypedData`](TypedData.md) \| `object`

• **primaryType** *extends* `string`

#### Parameters

• **args**: [`SignTypedDataParameters`](SignTypedDataParameters.md)\<`typedData`, `primaryType`, `account`\>

[SignTypedDataParameters](SignTypedDataParameters.md)

#### Returns

`Promise`\<[`SignTypedDataReturnType`](SignTypedDataReturnType.md)\>

The signed data. [SignTypedDataReturnType](SignTypedDataReturnType.md)

#### Examples

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})
const signature = await client.signTypedData({
  account: '0xA0Cf798816D4b9b9866b5330EEa46a18382f251e',
  domain: {
    name: 'Ether Mail',
    version: '1',
    chainId: 1,
    verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
  },
  types: {
    Person: [
      { name: 'name', type: 'string' },
      { name: 'wallet', type: 'address' },
    ],
    Mail: [
      { name: 'from', type: 'Person' },
      { name: 'to', type: 'Person' },
      { name: 'contents', type: 'string' },
    ],
  },
  primaryType: 'Mail',
  message: {
    from: {
      name: 'Cow',
      wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
    },
    to: {
      name: 'Bob',
      wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
    },
    contents: 'Hello, Bob!',
  },
})
```

```ts
// Account Hoisting
import { createWalletClient, http } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  account: privateKeyToAccount('0x…'),
  chain: mainnet,
  transport: http(),
})
const signature = await client.signTypedData({
  domain: {
    name: 'Ether Mail',
    version: '1',
    chainId: 1,
    verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
  },
  types: {
    Person: [
      { name: 'name', type: 'string' },
      { name: 'wallet', type: 'address' },
    ],
    Mail: [
      { name: 'from', type: 'Person' },
      { name: 'to', type: 'Person' },
      { name: 'contents', type: 'string' },
    ],
  },
  primaryType: 'Mail',
  message: {
    from: {
      name: 'Cow',
      wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
    },
    to: {
      name: 'Bob',
      wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
    },
    contents: 'Hello, Bob!',
  },
})
```

### switchChain()

> **switchChain**: (`args`) => `Promise`\<`void`\>

Switch the target chain in a wallet.

- Docs: https://viem.sh/docs/actions/wallet/switchChain
- JSON-RPC Methods: [`eth_switchEthereumChain`](https://eips.ethereum.org/EIPS/eip-3326)

#### Parameters

• **args**: [`SwitchChainParameters`](SwitchChainParameters.md)

[SwitchChainParameters](SwitchChainParameters.md)

#### Returns

`Promise`\<`void`\>

#### Example

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet, optimism } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})
await client.switchChain({ id: optimism.id })
```

### waitForCallsStatus()

> **waitForCallsStatus**: (`parameters`) => `Promise`\<[`WaitForCallsStatusReturnType`](WaitForCallsStatusReturnType.md)\>

Waits for the status & receipts of a call bundle that was sent via `sendCalls`.

- Docs: https://viem.sh/docs/actions/wallet/waitForCallsStatus
- JSON-RPC Methods: [`wallet_getCallsStatus`](https://eips.ethereum.org/EIPS/eip-5792)

#### Parameters

• **parameters**: [`WaitForCallsStatusParameters`](WaitForCallsStatusParameters.md)

[WaitForCallsStatusParameters](WaitForCallsStatusParameters.md)

#### Returns

`Promise`\<[`WaitForCallsStatusReturnType`](WaitForCallsStatusReturnType.md)\>

Status & receipts of the call bundle. [WaitForCallsStatusReturnType](WaitForCallsStatusReturnType.md)

#### Example

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})

const { receipts, status } = await waitForCallsStatus(client, { id: '0xdeadbeef' })
```

### watchAsset()

> **watchAsset**: (`args`) => `Promise`\<[`WatchAssetReturnType`](WatchAssetReturnType.md)\>

Adds an EVM chain to the wallet.

- Docs: https://viem.sh/docs/actions/wallet/watchAsset
- JSON-RPC Methods: [`eth_switchEthereumChain`](https://eips.ethereum.org/EIPS/eip-747)

#### Parameters

• **args**: [`WatchAssetParameters`](WatchAssetParameters.md)

[WatchAssetParameters](WatchAssetParameters.md)

#### Returns

`Promise`\<[`WatchAssetReturnType`](WatchAssetReturnType.md)\>

Boolean indicating if the token was successfully added. [WatchAssetReturnType](WatchAssetReturnType.md)

#### Example

```ts
import { createWalletClient, custom } from 'viem'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})
const success = await client.watchAsset({
  type: 'ERC20',
  options: {
    address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    decimals: 18,
    symbol: 'WETH',
  },
})
```

### writeContract()

> **writeContract**: \<`abi`, `functionName`, `args`, `chainOverride`\>(`args`) => `Promise`\<[`WriteContractReturnType`](WriteContractReturnType.md)\>

Executes a write function on a contract.

- Docs: https://viem.sh/docs/contract/writeContract
- Examples: https://stackblitz.com/github/wevm/viem/tree/main/examples/contracts_writing-to-contracts

A "write" function on a Solidity contract modifies the state of the blockchain. These types of functions require gas to be executed, and hence a [Transaction](https://viem.sh/docs/glossary/terms) is needed to be broadcast in order to change the state.

Internally, uses a [Wallet Client](https://viem.sh/docs/clients/wallet) to call the [`sendTransaction` action](https://viem.sh/docs/actions/wallet/sendTransaction) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData).

__Warning: The `write` internally sends a transaction – it does not validate if the contract write will succeed (the contract may throw an error). It is highly recommended to [simulate the contract write with `contract.simulate`](https://viem.sh/docs/contract/writeContract#usage) before you execute it.__

#### Type Parameters

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[]

• **functionName** *extends* [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `"payable"` \| `"nonpayable"`\>

• **args** *extends* [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `"payable"` \| `"nonpayable"`, `functionName`\>

• **chainOverride** *extends* [`Chain`](Chain.md) \| `undefined` = `undefined`

#### Parameters

• **args**: [`WriteContractParameters`](WriteContractParameters.md)\<`abi`, `functionName`, `args`, `chain`, `account`, `chainOverride`\>

[WriteContractParameters](WriteContractParameters.md)

#### Returns

`Promise`\<[`WriteContractReturnType`](WriteContractReturnType.md)\>

A [Transaction Hash](https://viem.sh/docs/glossary/terms#hash). [WriteContractReturnType](WriteContractReturnType.md)

#### Examples

```ts
import { createWalletClient, custom, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})
const hash = await client.writeContract({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['function mint(uint32 tokenId) nonpayable']),
  functionName: 'mint',
  args: [69420],
})
```

```ts
// With Validation
import { createWalletClient, custom, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})
const { request } = await client.simulateContract({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['function mint(uint32 tokenId) nonpayable']),
  functionName: 'mint',
  args: [69420],
}
const hash = await client.writeContract(request)
```

### writeContractSync()

> **writeContractSync**: \<`abi`, `functionName`, `args`, `chainOverride`\>(`args`) => `Promise`\<[`WriteContractSyncReturnType`](WriteContractSyncReturnType.md)\>

Executes a write function on a contract synchronously.
Returns the transaction receipt.

- Docs: https://viem.sh/docs/contract/writeContract

A "write" function on a Solidity contract modifies the state of the blockchain. These types of functions require gas to be executed, and hence a [Transaction](https://viem.sh/docs/glossary/terms) is needed to be broadcast in order to change the state.

Internally, uses a [Wallet Client](https://viem.sh/docs/clients/wallet) to call the [`sendTransaction` action](https://viem.sh/docs/actions/wallet/sendTransaction) with [ABI-encoded `data`](https://viem.sh/docs/contract/encodeFunctionData).

__Warning: The `write` internally sends a transaction – it does not validate if the contract write will succeed (the contract may throw an error). It is highly recommended to [simulate the contract write with `contract.simulate`](https://viem.sh/docs/contract/writeContract#usage) before you execute it.__

#### Type Parameters

• **abi** *extends* [`Abi`](Abi.md) \| readonly `unknown`[]

• **functionName** *extends* [`ContractFunctionName`](ContractFunctionName.md)\<`abi`, `"payable"` \| `"nonpayable"`\>

• **args** *extends* [`ContractFunctionArgs`](ContractFunctionArgs.md)\<`abi`, `"payable"` \| `"nonpayable"`, `functionName`\>

• **chainOverride** *extends* [`Chain`](Chain.md) \| `undefined` = `undefined`

#### Parameters

• **args**: [`WriteContractSyncParameters`](WriteContractSyncParameters.md)\<`abi`, `functionName`, `args`, `chain`, `account`, `chainOverride`\>

[WriteContractSyncParameters](WriteContractSyncParameters.md)

#### Returns

`Promise`\<[`WriteContractSyncReturnType`](WriteContractSyncReturnType.md)\>

A [Transaction Receipt](https://viem.sh/docs/glossary/terms#receipt). [WriteContractSyncReturnType](WriteContractSyncReturnType.md)

#### Example

```ts
import { createWalletClient, custom, parseAbi } from 'viem'
import { mainnet } from 'viem/chains'

const client = createWalletClient({
  chain: mainnet,
  transport: custom(window.ethereum),
})
const receipt = await client.writeContractSync({
  address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
  abi: parseAbi(['function mint(uint32 tokenId) nonpayable']),
  functionName: 'mint',
  args: [69420],
})
```

## Defined in

node\_modules/viem/\_types/clients/decorators/wallet.d.ts:34
