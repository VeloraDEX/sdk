[**@velora-dex/sdk**](../../README.md) • **Docs**

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Web3Account

# Interface: Web3Account

## Extends

- [`Web3BaseWalletAccount`](Web3BaseWalletAccount.md)

## Properties

### address

> **address**: `string`

#### Overrides

[`Web3BaseWalletAccount`](Web3BaseWalletAccount.md).[`address`](Web3BaseWalletAccount.md#address)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/types.d.ts:21

***

### encrypt()

> `readonly` **encrypt**: (`password`, `options`?) => `Promise`\<[`KeyStore`](../namespaces/Users_andriishymkiv_work_velora_sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/KeyStore.md)\>

#### Parameters

• **password**: `string`

• **options?**: [`Record`](../type-aliases/Record.md)\<`string`, `unknown`\>

#### Returns

`Promise`\<[`KeyStore`](../namespaces/Users_andriishymkiv_work_velora_sdk_node_modules_web3-types_lib_commonjs_index/type-aliases/KeyStore.md)\>

#### Inherited from

[`Web3BaseWalletAccount`](Web3BaseWalletAccount.md).[`encrypt`](Web3BaseWalletAccount.md#encrypt)

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_wallet.d.ts:62

***

### privateKey

> **privateKey**: `string`

#### Overrides

[`Web3BaseWalletAccount`](Web3BaseWalletAccount.md).[`privateKey`](Web3BaseWalletAccount.md#privatekey)

#### Defined in

node\_modules/web3-eth-accounts/lib/commonjs/types.d.ts:22

***

### sign()

> `readonly` **sign**: (`data`) => `object`

#### Parameters

• **data**: `string` \| [`Record`](../type-aliases/Record.md)\<`string`, `unknown`\>

#### Returns

`object`

##### message?

> `readonly` `optional` **message**: `string`

##### messageHash

> `readonly` **messageHash**: `string`

##### r

> `readonly` **r**: `string`

##### s

> `readonly` **s**: `string`

##### signature

> `readonly` **signature**: `string`

##### v

> `readonly` **v**: `string`

#### Inherited from

[`Web3BaseWalletAccount`](Web3BaseWalletAccount.md).[`sign`](Web3BaseWalletAccount.md#sign)

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_wallet.d.ts:54

***

### signTransaction()

> `readonly` **signTransaction**: (`tx`) => `Promise`\<`object`\>

#### Parameters

• **tx**: [`Transaction`](../namespaces/Users_andriishymkiv_work_velora_sdk_node_modules_web3-types_lib_commonjs_index/interfaces/Transaction.md)

#### Returns

`Promise`\<`object`\>

##### messageHash

> `readonly` **messageHash**: `string`

##### r

> `readonly` **r**: `string`

##### rawTransaction

> `readonly` **rawTransaction**: `string`

##### s

> `readonly` **s**: `string`

##### transactionHash

> `readonly` **transactionHash**: `string`

##### v

> `readonly` **v**: `string`

#### Inherited from

[`Web3BaseWalletAccount`](Web3BaseWalletAccount.md).[`signTransaction`](Web3BaseWalletAccount.md#signtransaction)

#### Defined in

node\_modules/web3-types/lib/commonjs/web3\_base\_wallet.d.ts:46
