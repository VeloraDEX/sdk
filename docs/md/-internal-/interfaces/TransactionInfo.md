[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / TransactionInfo

# Interface: TransactionInfo

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:369

## Extends

- [`Transaction`](Transaction-1.md)

## Properties

### accessList?

> `optional` **accessList?**: [`AccessList`](../type-aliases/AccessList-3.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:329

#### Inherited from

[`Transaction`](Transaction-1.md).[`accessList`](Transaction-1.md#accesslist)

***

### blockHash?

> `readonly` `optional` **blockHash?**: [`Bytes`](../type-aliases/Bytes-1.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:370

***

### blockNumber?

> `readonly` `optional` **blockNumber?**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:371

***

### chain?

> `optional` **chain?**: [`ValidChains`](../type-aliases/ValidChains.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:339

#### Inherited from

[`Transaction`](Transaction-1.md).[`chain`](Transaction-1.md#chain)

***

### chainId?

> `optional` **chainId?**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:341

#### Inherited from

[`Transaction`](Transaction-1.md).[`chainId`](Transaction-1.md#chainid)

***

### common?

> `optional` **common?**: [`Common`](Common.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:330

#### Inherited from

[`Transaction`](Transaction-1.md).[`common`](Transaction-1.md#common)

***

### data?

> `optional` **data?**: [`Bytes`](../type-aliases/Bytes-1.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:336

#### Inherited from

[`Transaction`](Transaction-1.md).[`data`](Transaction-1.md#data)

***

### from

> `readonly` **from**: `string`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:372

#### Overrides

[`Transaction`](Transaction-1.md).[`from`](Transaction-1.md#from)

***

### gas?

> `optional` **gas?**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:331

#### Inherited from

[`Transaction`](Transaction-1.md).[`gas`](Transaction-1.md#gas)

***

### gasLimit?

> `optional` **gasLimit?**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:343

#### Inherited from

[`Transaction`](Transaction-1.md).[`gasLimit`](Transaction-1.md#gaslimit)

***

### gasPrice?

> `optional` **gasPrice?**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:332

#### Inherited from

[`Transaction`](Transaction-1.md).[`gasPrice`](Transaction-1.md#gasprice)

***

### hardfork?

> `optional` **hardfork?**: `"chainstart"` \| `"frontier"` \| `"homestead"` \| `"dao"` \| `"tangerineWhistle"` \| `"spuriousDragon"` \| `"byzantium"` \| `"constantinople"` \| `"petersburg"` \| `"istanbul"` \| `"muirGlacier"` \| `"berlin"` \| `"london"` \| `"altair"` \| `"arrowGlacier"` \| `"grayGlacier"` \| `"bellatrix"` \| `"merge"` \| `"capella"` \| `"shanghai"`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:340

#### Inherited from

[`Transaction`](Transaction-1.md).[`hardfork`](Transaction-1.md#hardfork)

***

### hash

> `readonly` **hash**: [`Bytes`](../type-aliases/Bytes-1.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:373

***

### input?

> `optional` **input?**: [`Bytes`](../type-aliases/Bytes-1.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:337

#### Inherited from

[`Transaction`](Transaction-1.md).[`input`](Transaction-1.md#input)

***

### maxFeePerGas?

> `optional` **maxFeePerGas?**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:334

#### Inherited from

[`Transaction`](Transaction-1.md).[`maxFeePerGas`](Transaction-1.md#maxfeepergas)

***

### maxPriorityFeePerGas?

> `optional` **maxPriorityFeePerGas?**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:335

#### Inherited from

[`Transaction`](Transaction-1.md).[`maxPriorityFeePerGas`](Transaction-1.md#maxpriorityfeepergas)

***

### networkId?

> `optional` **networkId?**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:342

#### Inherited from

[`Transaction`](Transaction-1.md).[`networkId`](Transaction-1.md#networkid)

***

### nonce?

> `optional` **nonce?**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:338

#### Inherited from

[`Transaction`](Transaction-1.md).[`nonce`](Transaction-1.md#nonce)

***

### r?

> `optional` **r?**: [`Bytes`](../type-aliases/Bytes-1.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:346

#### Inherited from

[`Transaction`](Transaction-1.md).[`r`](Transaction-1.md#r)

***

### s?

> `optional` **s?**: [`Bytes`](../type-aliases/Bytes-1.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:347

#### Inherited from

[`Transaction`](Transaction-1.md).[`s`](Transaction-1.md#s)

***

### to?

> `optional` **to?**: `string` \| `null`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:351

#### Inherited from

[`Transaction`](Transaction-1.md).[`to`](Transaction-1.md#to)

***

### transactionIndex?

> `readonly` `optional` **transactionIndex?**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:374

***

### type?

> `optional` **type?**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:333

#### Inherited from

[`Transaction`](Transaction-1.md).[`type`](Transaction-1.md#type)

***

### v?

> `optional` **v?**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:345

#### Inherited from

[`Transaction`](Transaction-1.md).[`v`](Transaction-1.md#v)

***

### value?

> `optional` **value?**: [`Numbers`](../type-aliases/Numbers.md)

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:328

#### Inherited from

[`Transaction`](Transaction-1.md).[`value`](Transaction-1.md#value)

***

### yParity?

> `optional` **yParity?**: `string`

Defined in: node\_modules/.pnpm/web3-types@1.8.1/node\_modules/web3-types/lib/commonjs/eth\_types.d.ts:344

#### Inherited from

[`Transaction`](Transaction-1.md).[`yParity`](Transaction-1.md#yparity)
