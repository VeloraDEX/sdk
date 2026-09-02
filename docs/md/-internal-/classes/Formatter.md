[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / Formatter

# Class: Formatter

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:18

## Constructors

### Constructor

> **new Formatter**(): `Formatter`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:20

#### Returns

`Formatter`

## Properties

### formats

> `readonly` **formats**: [`Formats`](../type-aliases/Formats.md)

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:19

## Methods

### \_block()

> **\_block**(`value`, `format`): [`Block`](../interfaces/Block-1.md)

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:36

#### Parameters

##### value

`any`

##### format

`any`

#### Returns

[`Block`](../interfaces/Block-1.md)

***

### accessList()

> **accessList**(`accessList`): [`AccessList`](../type-aliases/AccessList.md)

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:22

#### Parameters

##### accessList

`any`[]

#### Returns

[`AccessList`](../type-aliases/AccessList.md)

***

### address()

> **address**(`value`): `string`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:29

#### Parameters

##### value

`any`

#### Returns

`string`

***

### bigNumber()

> **bigNumber**(`value`): [`BigNumber`](BigNumber.md)

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:25

#### Parameters

##### value

`any`

#### Returns

[`BigNumber`](BigNumber.md)

***

### block()

> **block**(`value`): [`Block`](../interfaces/Block-1.md)

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:37

#### Parameters

##### value

`any`

#### Returns

[`Block`](../interfaces/Block-1.md)

***

### blockTag()

> **blockTag**(`blockTag`): `string`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:32

#### Parameters

##### blockTag

`any`

#### Returns

`string`

***

### blockWithTransactions()

> **blockWithTransactions**(`value`): [`Block`](../interfaces/Block-1.md)

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:38

#### Parameters

##### value

`any`

#### Returns

[`Block`](../interfaces/Block-1.md)

***

### boolean()

> **boolean**(`value`): `boolean`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:26

#### Parameters

##### value

`any`

#### Returns

`boolean`

***

### callAddress()

> **callAddress**(`value`): `string`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:30

#### Parameters

##### value

`any`

#### Returns

`string`

***

### contractAddress()

> **contractAddress**(`value`): `string`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:31

#### Parameters

##### value

`any`

#### Returns

`string`

***

### data()

> **data**(`value`, `strict?`): `string`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:28

#### Parameters

##### value

`any`

##### strict?

`boolean`

#### Returns

`string`

***

### difficulty()

> **difficulty**(`value`): `number`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:34

#### Parameters

##### value

`any`

#### Returns

`number`

***

### filter()

> **filter**(`value`): `any`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:45

#### Parameters

##### value

`any`

#### Returns

`any`

***

### filterLog()

> **filterLog**(`value`): `any`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:46

#### Parameters

##### value

`any`

#### Returns

`any`

***

### getDefaultFormats()

> **getDefaultFormats**(): [`Formats`](../type-aliases/Formats.md)

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:21

#### Returns

[`Formats`](../type-aliases/Formats.md)

***

### hash()

> **hash**(`value`, `strict?`): `string`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:33

#### Parameters

##### value

`any`

##### strict?

`boolean`

#### Returns

`string`

***

### hex()

> **hex**(`value`, `strict?`): `string`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:27

#### Parameters

##### value

`any`

##### strict?

`boolean`

#### Returns

`string`

***

### number()

> **number**(`number`): `number`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:23

#### Parameters

##### number

`any`

#### Returns

`number`

***

### receipt()

> **receipt**(`value`): [`TransactionReceipt`](../interfaces/TransactionReceipt.md)

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:43

#### Parameters

##### value

`any`

#### Returns

[`TransactionReceipt`](../interfaces/TransactionReceipt.md)

***

### receiptLog()

> **receiptLog**(`value`): `any`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:42

#### Parameters

##### value

`any`

#### Returns

`any`

***

### topics()

> **topics**(`value`): `any`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:44

#### Parameters

##### value

`any`

#### Returns

`any`

***

### transaction()

> **transaction**(`value`): `any`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:41

#### Parameters

##### value

`any`

#### Returns

`any`

***

### transactionRequest()

> **transactionRequest**(`value`): `any`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:39

#### Parameters

##### value

`any`

#### Returns

`any`

***

### transactionResponse()

> **transactionResponse**(`transaction`): [`TransactionResponse`](../interfaces/TransactionResponse.md)

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:40

#### Parameters

##### transaction

`any`

#### Returns

[`TransactionResponse`](../interfaces/TransactionResponse.md)

***

### type()

> **type**(`number`): `number`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:24

#### Parameters

##### number

`any`

#### Returns

`number`

***

### uint256()

> **uint256**(`value`): `string`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:35

#### Parameters

##### value

`any`

#### Returns

`string`

***

### allowFalsish()

> `static` **allowFalsish**(`format`, `replaceValue`): [`FormatFunc`](../type-aliases/FormatFunc.md)

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:51

#### Parameters

##### format

[`FormatFunc`](../type-aliases/FormatFunc.md)

##### replaceValue

`any`

#### Returns

[`FormatFunc`](../type-aliases/FormatFunc.md)

***

### allowNull()

> `static` **allowNull**(`format`, `nullValue?`): [`FormatFunc`](../type-aliases/FormatFunc.md)

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:50

#### Parameters

##### format

[`FormatFunc`](../type-aliases/FormatFunc.md)

##### nullValue?

`any`

#### Returns

[`FormatFunc`](../type-aliases/FormatFunc.md)

***

### arrayOf()

> `static` **arrayOf**(`format`): [`FormatFunc`](../type-aliases/FormatFunc.md)

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:52

#### Parameters

##### format

[`FormatFunc`](../type-aliases/FormatFunc.md)

#### Returns

[`FormatFunc`](../type-aliases/FormatFunc.md)

***

### check()

> `static` **check**(`format`, `object`): `any`

Defined in: node\_modules/.pnpm/@ethersproject+providers@5.8.0/node\_modules/@ethersproject/providers/lib/formatter.d.ts:47

#### Parameters

##### format

##### object

`any`

#### Returns

`any`
