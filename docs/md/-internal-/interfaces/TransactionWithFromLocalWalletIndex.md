[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionWithFromLocalWalletIndex

# Interface: TransactionWithFromLocalWalletIndex

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:359

Construct a type with the properties of T except for those in type K.

## Extends

- [`Omit`](../type-aliases/Omit.md)\<[`Transaction`](Transaction-1.md), `"from"`\>

## Properties

### accessList?

> `optional` **accessList?**: [`AccessList`](../type-aliases/AccessList-3.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:329

#### Inherited from

[`TransactionBase`](TransactionBase.md).[`accessList`](TransactionBase.md#accesslist)

***

### chain?

> `optional` **chain?**: [`ValidChains`](../type-aliases/ValidChains.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:339

#### Inherited from

[`TransactionBase`](TransactionBase.md).[`chain`](TransactionBase.md#chain)

***

### chainId?

> `optional` **chainId?**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:341

#### Inherited from

[`TransactionBase`](TransactionBase.md).[`chainId`](TransactionBase.md#chainid)

***

### common?

> `optional` **common?**: [`Common`](Common.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:330

#### Inherited from

[`TransactionBase`](TransactionBase.md).[`common`](TransactionBase.md#common)

***

### data?

> `optional` **data?**: [`Bytes`](../type-aliases/Bytes-1.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:336

#### Inherited from

[`TransactionBase`](TransactionBase.md).[`data`](TransactionBase.md#data)

***

### from

> **from**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:360

***

### gas?

> `optional` **gas?**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:331

#### Inherited from

[`TransactionBase`](TransactionBase.md).[`gas`](TransactionBase.md#gas)

***

### gasLimit?

> `optional` **gasLimit?**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:343

#### Inherited from

[`TransactionBase`](TransactionBase.md).[`gasLimit`](TransactionBase.md#gaslimit)

***

### gasPrice?

> `optional` **gasPrice?**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:332

#### Inherited from

[`TransactionBase`](TransactionBase.md).[`gasPrice`](TransactionBase.md#gasprice)

***

### hardfork?

> `optional` **hardfork?**: `"chainstart"` \| `"frontier"` \| `"homestead"` \| `"dao"` \| `"tangerineWhistle"` \| `"spuriousDragon"` \| `"byzantium"` \| `"constantinople"` \| `"petersburg"` \| `"istanbul"` \| `"muirGlacier"` \| `"berlin"` \| `"london"` \| `"altair"` \| `"arrowGlacier"` \| `"grayGlacier"` \| `"bellatrix"` \| `"merge"` \| `"capella"` \| `"shanghai"`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:340

#### Inherited from

[`TransactionBase`](TransactionBase.md).[`hardfork`](TransactionBase.md#hardfork)

***

### input?

> `optional` **input?**: [`Bytes`](../type-aliases/Bytes-1.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:337

#### Inherited from

[`TransactionBase`](TransactionBase.md).[`input`](TransactionBase.md#input)

***

### maxFeePerGas?

> `optional` **maxFeePerGas?**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:334

#### Inherited from

[`TransactionBase`](TransactionBase.md).[`maxFeePerGas`](TransactionBase.md#maxfeepergas)

***

### maxPriorityFeePerGas?

> `optional` **maxPriorityFeePerGas?**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:335

#### Inherited from

[`TransactionBase`](TransactionBase.md).[`maxPriorityFeePerGas`](TransactionBase.md#maxpriorityfeepergas)

***

### networkId?

> `optional` **networkId?**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:342

#### Inherited from

[`TransactionBase`](TransactionBase.md).[`networkId`](TransactionBase.md#networkid)

***

### nonce?

> `optional` **nonce?**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:338

#### Inherited from

[`TransactionBase`](TransactionBase.md).[`nonce`](TransactionBase.md#nonce)

***

### r?

> `optional` **r?**: [`Bytes`](../type-aliases/Bytes-1.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:346

#### Inherited from

[`TransactionBase`](TransactionBase.md).[`r`](TransactionBase.md#r)

***

### s?

> `optional` **s?**: [`Bytes`](../type-aliases/Bytes-1.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:347

#### Inherited from

[`TransactionBase`](TransactionBase.md).[`s`](TransactionBase.md#s)

***

### to?

> `optional` **to?**: `string` \| `null`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:351

#### Inherited from

[`Transaction`](Transaction-1.md).[`to`](Transaction-1.md#to)

***

### type?

> `optional` **type?**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:333

#### Inherited from

[`TransactionBase`](TransactionBase.md).[`type`](TransactionBase.md#type)

***

### v?

> `optional` **v?**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:345

#### Inherited from

[`TransactionBase`](TransactionBase.md).[`v`](TransactionBase.md#v)

***

### value?

> `optional` **value?**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:328

#### Inherited from

[`TransactionBase`](TransactionBase.md).[`value`](TransactionBase.md#value)

***

### yParity?

> `optional` **yParity?**: `string`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:344

#### Inherited from

[`TransactionBase`](TransactionBase.md).[`yParity`](TransactionBase.md#yparity)
