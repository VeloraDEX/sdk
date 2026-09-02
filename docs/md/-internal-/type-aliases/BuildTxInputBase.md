[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / BuildTxInputBase

# Type Alias: BuildTxInputBase

> **BuildTxInputBase** = `object`

Defined in: [src/methods/swap/transaction.ts:64](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L64)

## Properties

### deadline?

> `optional` **deadline?**: `string`

Defined in: [src/methods/swap/transaction.ts:89](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L89)

***

### destDecimals?

> `optional` **destDecimals?**: `number`

Defined in: [src/methods/swap/transaction.ts:87](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L87)

***

### destToken

> **destToken**: [`Address`](../../type-aliases/Address.md)

Defined in: [src/methods/swap/transaction.ts:66](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L66)

***

### isCapSurplus?

> `optional` **isCapSurplus?**: `boolean`

Defined in: [src/methods/swap/transaction.ts:84](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L84)

#### Description

Cap the surplus at 1% maximum. Default: true

***

### isDirectFeeTransfer?

> `optional` **isDirectFeeTransfer?**: `boolean`

Defined in: [src/methods/swap/transaction.ts:78](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L78)

#### Description

If fees should be sent directly to the partner instead of registering them on FeeClaimer. v6 only. Default: false

***

### isSurplusToUser?

> `optional` **isSurplusToUser?**: `boolean`

Defined in: [src/methods/swap/transaction.ts:76](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L76)

#### Description

If user should receive surplus instead of partner. Default: false

***

### partner?

> `optional` **partner?**: `string`

Defined in: [src/methods/swap/transaction.ts:72](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L72)

***

### partnerAddress?

> `optional` **partnerAddress?**: `string`

Defined in: [src/methods/swap/transaction.ts:73](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L73)

***

### partnerFeeBps?

> `optional` **partnerFeeBps?**: `number`

Defined in: [src/methods/swap/transaction.ts:74](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L74)

***

### permit?

> `optional` **permit?**: `string`

Defined in: [src/methods/swap/transaction.ts:88](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L88)

***

### ~~positiveSlippageToUser?~~

> `optional` **positiveSlippageToUser?**: `boolean`

Defined in: [src/methods/swap/transaction.ts:80](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L80)

#### Deprecated

Use "takeSurplus" instead. Positive slippage goes to user, true by default

***

### receiver?

> `optional` **receiver?**: [`Address`](../../type-aliases/Address.md)

Defined in: [src/methods/swap/transaction.ts:85](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L85)

***

### referrer?

> `optional` **referrer?**: `string`

Defined in: [src/methods/swap/transaction.ts:71](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L71)

#### Description

used with referral link

***

### srcDecimals?

> `optional` **srcDecimals?**: `number`

Defined in: [src/methods/swap/transaction.ts:86](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L86)

***

### srcToken

> **srcToken**: [`Address`](../../type-aliases/Address.md)

Defined in: [src/methods/swap/transaction.ts:65](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L65)

***

### takeSurplus?

> `optional` **takeSurplus?**: `boolean`

Defined in: [src/methods/swap/transaction.ts:82](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L82)

#### Description

Set to true to take positive slippage. Works with partnerAddress. Default: false

***

### txOrigin?

> `optional` **txOrigin?**: `string`

Defined in: [src/methods/swap/transaction.ts:69](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L69)

#### Description

Whenever msg.sender (`userAddress`) i.e. address calling the Velora contract is different than the address sending the transaction, `txOrigin` must be passed along with `userAddress`

***

### userAddress

> **userAddress**: [`Address`](../../type-aliases/Address.md)

Defined in: [src/methods/swap/transaction.ts:67](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/transaction.ts#L67)
