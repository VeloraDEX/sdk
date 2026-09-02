[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / RateOptions

# Type Alias: RateOptions

> **RateOptions** = `object`

Defined in: [src/methods/swap/rates.ts:146](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/rates.ts#L146)

## Properties

### degenMode?

> `optional` **degenMode?**: `boolean`

Defined in: [src/methods/swap/rates.ts:173](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/rates.ts#L173)

***

### destTokenDexTransferFee?

> `optional` **destTokenDexTransferFee?**: `string`

Defined in: [src/methods/swap/rates.ts:172](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/rates.ts#L172)

#### Description

Some tokens only charge tax when swapped in/out DEXs and not on ordinary transfers.

***

### destTokenTransferFee?

> `optional` **destTokenTransferFee?**: `string`

Defined in: [src/methods/swap/rates.ts:168](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/rates.ts#L168)

#### Description

If the destination token is a tax token, you should specify the tax amount in BPS.

***

### excludeContractMethods?

> `optional` **excludeContractMethods?**: [`ContractMethodByName`](../../type-aliases/ContractMethodByName.md)[]

Defined in: [src/methods/swap/rates.ts:150](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/rates.ts#L150)

***

### excludeContractMethodsWithoutFeeModel?

> `optional` **excludeContractMethodsWithoutFeeModel?**: `boolean`

Defined in: [src/methods/swap/rates.ts:164](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/rates.ts#L164)

#### Description

Specify that methods without fee support should be excluded from the price route. Default: false

***

### excludeDEXS?

> `optional` **excludeDEXS?**: `string`[]

Defined in: [src/methods/swap/rates.ts:147](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/rates.ts#L147)

***

### excludePools?

> `optional` **excludePools?**: `string`[]

Defined in: [src/methods/swap/rates.ts:149](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/rates.ts#L149)

***

### excludeRFQ?

> `optional` **excludeRFQ?**: `boolean`

Defined in: [src/methods/swap/rates.ts:162](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/rates.ts#L162)

#### Description

Exclude all RFQs from pricing, e.g.: AugustusRFQ, Hashflow. Default: false

***

### ignoreBadUsdPrice?

> `optional` **ignoreBadUsdPrice?**: `boolean`

Defined in: [src/methods/swap/rates.ts:160](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/rates.ts#L160)

#### Description

proceed with priceRoute building even when tokens don't have USD price. Default: false

***

### includeContractMethods?

> `optional` **includeContractMethods?**: [`ContractMethodByName`](../../type-aliases/ContractMethodByName.md)[]

Defined in: [src/methods/swap/rates.ts:151](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/rates.ts#L151)

***

### includeDEXS?

> `optional` **includeDEXS?**: `string`[]

Defined in: [src/methods/swap/rates.ts:148](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/rates.ts#L148)

***

### maxImpact?

> `optional` **maxImpact?**: `number`

Defined in: [src/methods/swap/rates.ts:156](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/rates.ts#L156)

#### Description

In %. It's a way to bypass the API price impact check (default = 15%)

***

### maxUSDImpact?

> `optional` **maxUSDImpact?**: `number`

Defined in: [src/methods/swap/rates.ts:157](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/rates.ts#L157)

***

### otherExchangePrices?

> `optional` **otherExchangePrices?**: `boolean`

Defined in: [src/methods/swap/rates.ts:158](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/rates.ts#L158)

***

### partner?

> `optional` **partner?**: `string`

Defined in: [src/methods/swap/rates.ts:152](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/rates.ts#L152)

***

### partnerFeeBps?

> `optional` **partnerFeeBps?**: `number`

Defined in: [src/methods/swap/rates.ts:154](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/rates.ts#L154)

#### Description

Used together with `partner` if provided. Represented in basis points, 50bps=0.5%

***

### srcTokenDexTransferFee?

> `optional` **srcTokenDexTransferFee?**: `string`

Defined in: [src/methods/swap/rates.ts:170](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/rates.ts#L170)

#### Description

Some tokens only charge tax when swapped in/out DEXs and not on ordinary transfers.

***

### srcTokenTransferFee?

> `optional` **srcTokenTransferFee?**: `string`

Defined in: [src/methods/swap/rates.ts:166](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/rates.ts#L166)

#### Description

If the source token is a tax token, you should specify the tax amount in BPS.
