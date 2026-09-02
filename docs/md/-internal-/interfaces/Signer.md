[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Signer

# Interface: Signer

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/signer.d.ts:14

A Signer represents an account on the Ethereum Blockchain, and is most often
 backed by a private key represented by a mnemonic or residing on a Hardware Wallet.

 The API remains abstract though, so that it can deal with more advanced exotic
 Signing entities, such as Smart Contract Wallets or Virtual Wallets (where the
 private key may not be known).

## Extends

- [`Addressable`](Addressable.md).[`ContractRunner`](ContractRunner.md).[`NameResolver`](NameResolver.md)

## Properties

### provider

> **provider**: [`Provider`](Provider.md) \| `null`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/signer.d.ts:18

The [[Provider]] attached to this Signer (if any).

#### Overrides

[`ContractRunner`](ContractRunner.md).[`provider`](ContractRunner.md#provider)

## Methods

### call()

> **call**(`tx`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/signer.d.ts:86

Evaluates the //tx// by running it against the current Blockchain state. This
 cannot change state and has no cost in ether, as it is effectively simulating
 execution.

 This can be used to have the Blockchain perform computations based on its state
 (e.g. running a Contract's getters) or to simulate the effect of a transaction
 before actually performing an operation.

#### Parameters

##### tx

[`TransactionRequest`](TransactionRequest.md)

#### Returns

`Promise`\<`string`\>

#### Overrides

`ContractRunner.call`

***

### connect()

> **connect**(`provider`): `Signer`

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/signer.d.ts:23

Returns a new instance of this Signer connected to //provider// or detached
 from any Provider if null.

#### Parameters

##### provider

[`Provider`](Provider.md) \| `null`

#### Returns

`Signer`

***

### estimateGas()

> **estimateGas**(`tx`): `Promise`\<`bigint`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/signer.d.ts:76

Estimates the required gas required to execute //tx// on the Blockchain. This
 will be the expected amount a transaction will require as its ``gasLimit``
 to successfully run all the necessary computations and store the needed state
 that the transaction intends.

 Keep in mind that this is **best efforts**, since the state of the Blockchain
 is in flux, which could affect transaction gas requirements.

#### Parameters

##### tx

[`TransactionRequest`](TransactionRequest.md)

#### Returns

`Promise`\<`bigint`\>

#### Throws

UNPREDICTABLE_GAS_LIMIT A transaction that is believed by the node to likely
         fail will throw an error during gas estimation. This could indicate that it
         will actually fail or that the circumstances are simply too complex for the
         node to take into account. In these cases, a manually determined ``gasLimit``
         will need to be made.

#### Overrides

`ContractRunner.estimateGas`

***

### getAddress()

> **getAddress**(): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/signer.d.ts:27

Get the address of the Signer.

#### Returns

`Promise`\<`string`\>

#### Overrides

[`Addressable`](Addressable.md).[`getAddress`](Addressable.md#getaddress)

***

### getNonce()

> **getNonce**(`blockTag?`): `Promise`\<`number`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/signer.d.ts:34

Gets the next nonce required for this Signer to send a transaction.

#### Parameters

##### blockTag?

[`BlockTag`](../type-aliases/BlockTag-1.md)

The blocktag to base the transaction count on, keep in mind
        many nodes do not honour this value and silently ignore it [default: ``"latest"``]

#### Returns

`Promise`\<`number`\>

***

### populateCall()

> **populateCall**(`tx`): `Promise`\<[`TransactionLike`](TransactionLike.md)\<`string`\>\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/signer.d.ts:42

Prepares a [TransactionRequest](TransactionRequest.md) for calling:
 - resolves ``to`` and ``from`` addresses
 - if ``from`` is specified , check that it matches this Signer

#### Parameters

##### tx

[`TransactionRequest`](TransactionRequest.md)

The call to prepare

#### Returns

`Promise`\<[`TransactionLike`](TransactionLike.md)\<`string`\>\>

***

### populateTransaction()

> **populateTransaction**(`tx`): `Promise`\<[`TransactionLike`](TransactionLike.md)\<`string`\>\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/signer.d.ts:60

Prepares a [TransactionRequest](TransactionRequest.md) for sending to the network by
 populating any missing properties:
 - resolves ``to`` and ``from`` addresses
 - if ``from`` is specified , check that it matches this Signer
 - populates ``nonce`` via ``signer.getNonce("pending")``
 - populates ``gasLimit`` via ``signer.estimateGas(tx)``
 - populates ``chainId`` via ``signer.provider.getNetwork()``
 - populates ``type`` and relevant fee data for that type (``gasPrice``
   for legacy transactions, ``maxFeePerGas`` for EIP-1559, etc)

#### Parameters

##### tx

[`TransactionRequest`](TransactionRequest.md)

The call to prepare

#### Returns

`Promise`\<[`TransactionLike`](TransactionLike.md)\<`string`\>\>

#### Note

Some Signer implementations may skip populating properties that
       are populated downstream; for example JsonRpcSigner defers to the
       node to populate the nonce and fee data.

***

### resolveName()

> **resolveName**(`name`): `Promise`\<`string` \| `null`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/signer.d.ts:90

Resolves an ENS Name to an address.

#### Parameters

##### name

`string`

#### Returns

`Promise`\<`string` \| `null`\>

#### Overrides

[`NameResolver`](NameResolver.md).[`resolveName`](NameResolver.md#resolvename)

***

### sendTransaction()

> **sendTransaction**(`tx`): `Promise`\<[`TransactionResponse`](../classes/TransactionResponse.md)\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/signer.d.ts:101

Sends %%tx%% to the Network. The ``signer.populateTransaction(tx)``
 is called first to ensure all necessary properties for the
 transaction to be valid have been popualted first.

#### Parameters

##### tx

[`TransactionRequest`](TransactionRequest.md)

#### Returns

`Promise`\<[`TransactionResponse`](../classes/TransactionResponse.md)\>

#### Overrides

`ContractRunner.sendTransaction`

***

### signMessage()

> **signMessage**(`message`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/signer.d.ts:112

Signs an [[link-eip-191]] prefixed personal message.

 If the %%message%% is a string, it is signed as UTF-8 encoded bytes. It is **not**
 interpretted as a [[BytesLike]]; so the string ``"0x1234"`` is signed as six
 characters, **not** two bytes.

 To sign that example as two bytes, the Uint8Array should be used
 (i.e. ``new Uint8Array([ 0x12, 0x34 ])``).

#### Parameters

##### message

`string` \| `Uint8Array`\<[`ArrayBufferLike`](../type-aliases/ArrayBufferLike.md)\>

#### Returns

`Promise`\<`string`\>

***

### signTransaction()

> **signTransaction**(`tx`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/signer.d.ts:95

Signs %%tx%%, returning the fully signed transaction. This does not
 populate any additional properties within the transaction.

#### Parameters

##### tx

[`TransactionRequest`](TransactionRequest.md)

#### Returns

`Promise`\<`string`\>

***

### signTypedData()

> **signTypedData**(`domain`, `types`, `value`): `Promise`\<`string`\>

Defined in: node\_modules/.pnpm/ethers@6.13.4/node\_modules/ethers/lib.commonjs/providers/signer.d.ts:116

Signs the [[link-eip-712]] typed data.

#### Parameters

##### domain

[`TypedDataDomain`](TypedDataDomain.md)

##### types

[`Record`](../type-aliases/Record.md)\<`string`, [`TypedDataField`](TypedDataField.md)[]\>

##### value

[`Record`](../type-aliases/Record.md)\<`string`, `any`\>

#### Returns

`Promise`\<`string`\>
