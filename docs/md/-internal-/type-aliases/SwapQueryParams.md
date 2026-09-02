[**@velora-dex/sdk**](../../README.md)

***

[@velora-dex/sdk](../../globals.md) / [\<internal\>](../README.md) / SwapQueryParams

# Type Alias: SwapQueryParams

> **SwapQueryParams** = `object`

Defined in: [src/methods/swap/swapTx.ts:17](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L17)

Types for transaction parameters.

## Properties

### amount

> **amount**: `string`

Defined in: [src/methods/swap/swapTx.ts:36](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L36)

#### Description

srcToken amount (in case of SELL) or destToken amount (in case of BUY). The amount should be in **WEI/Raw units** (eg. 1WBTC -> 100000000).

***

### chainId?

> `optional` **chainId?**: `number`

Defined in: [src/methods/swap/swapTx.ts:46](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L46)

#### Description

Chain ID. (Mainnet - 1, Optimism - 10, BSC - 56, Polygon - 137, Base - 8453, Arbitrum - 42161, Avalanche - 43114, Gnosis - 100, Unichain - 130, Sonic - 146). Default: `1`.

***

### destDecimals?

> `optional` **destDecimals?**: `number`

Defined in: [src/methods/swap/swapTx.ts:101](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L101)

#### Description

Destination Token Decimals. (Can be omitted if Token Symbol is used in `destToken`).

***

### destToken

> **destToken**: `string`

Defined in: [src/methods/swap/swapTx.ts:31](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L31)

#### Description

Destination Token Address. Instead, **Token Symbol** could be used for tokens listed in the `/tokens` endpoint.

***

### destTokenDexTransferFee?

> `optional` **destTokenDexTransferFee?**: `string`

Defined in: [src/methods/swap/swapTx.ts:131](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L131)

#### Description

If the destination token is a tax token, you should specify the tax amount in BPS. Some tokens only charge tax when swapped in/out DEXs, not on ordinary transfers.

***

### destTokenTransferFee?

> `optional` **destTokenTransferFee?**: `string`

Defined in: [src/methods/swap/swapTx.ts:121](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L121)

#### Description

If the destination token is a tax token, you should specify the tax amount in BPS. For example: for a token with a 5% tax, you should set it to 500 as `[(500/10000)*100=5%]`. Note: not all DEXs and contract methods support trading tax tokens, so we will filter those that don't.

***

### excludeContractMethods?

> `optional` **excludeContractMethods?**: `string`

Defined in: [src/methods/swap/swapTx.ts:66](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L66)

#### Description

Comma Separated List of Contract Methods to exclude without spaces. (from the list of contract methods mentioned above).

***

### excludeDEXS?

> `optional` **excludeDEXS?**: `string`

Defined in: [src/methods/swap/swapTx.ts:56](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L56)

#### Description

Comma Separated List of DEXs to exclude. (from the list of DEXs mentioned above).

***

### ignoreBadUsdPrice?

> `optional` **ignoreBadUsdPrice?**: `boolean`

Defined in: [src/methods/swap/swapTx.ts:141](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L141)

#### Description

If tokens USD prices are not available, `Bad USD Price` error will be thrown. Use this param to skip this check. Default: `false`.

***

### includeContractMethods?

> `optional` **includeContractMethods?**: `string`

Defined in: [src/methods/swap/swapTx.ts:61](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L61)

#### Description

Comma Separated List of Contract Methods to include without spaces. **Available values:** swapOnUniswap, buyOnUniswap, swapOnUniswapFork, buyOnUniswapFork, swapOnUniswapV2Fork, buyOnUniswapV2Fork, simpleBuy, simpleSwap, multiSwap, megaSwap, protectedMultiSwap, protectedMegaSwap, protectedSimpleSwap, protectedSimpleBuy, swapOnZeroXv2, swapOnZeroXv4, buy. eg: `simpleSwap,multiSwap`.

***

### includeDEXS?

> `optional` **includeDEXS?**: `string`

Defined in: [src/methods/swap/swapTx.ts:51](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L51)

#### Description

Comma Separated List of DEXs to include. **Supported DEXs:** Uniswap, Kyber, Bancor, AugustusRFQ, Oasis, Compound, Fulcrum, 0x, MakerDAO, Chai, Aave, Aave2, MultiPath, MegaPath, Curve, Curve3, Saddle, IronV2, BDai, idle, Weth, Beth, UniswapV2, Balancer, 0xRFQt, SushiSwap, LINKSWAP, Synthetix, DefiSwap, Swerve, CoFiX, Shell, DODOV1, DODOV2, OnChainPricing, PancakeSwap, PancakeSwapV2, ApeSwap, Wbnb, acryptos, streetswap, bakeryswap, julswap, vswap, vpegswap, beltfi, ellipsis, QuickSwap, COMETH, Wmatic, Nerve, Dfyn, UniswapV3, Smoothy, PantherSwap, OMM1, OneInchLP, CurveV2, mStable, WaultFinance, MDEX, ShibaSwap, CoinSwap, SakeSwap, JetSwap, Biswap, BProtocol eg: `UniswapV3,0x`.

***

### isCapSurplus?

> `optional` **isCapSurplus?**: `boolean`

Defined in: [src/methods/swap/swapTx.ts:156](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L156)

#### Description

Allows for capping the surplus at 1% maximum. Default: `true`.

***

### isDirectFeeTransfer?

> `optional` **isDirectFeeTransfer?**: `boolean`

Defined in: [src/methods/swap/swapTx.ts:151](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L151)

#### Description

Specify if fees should be sent directly to the partner instead of registering them on FeeClaimer. Default: `false`.

***

### isSurplusToUser?

> `optional` **isSurplusToUser?**: `boolean`

Defined in: [src/methods/swap/swapTx.ts:146](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L146)

#### Description

Specify if user should receive surplus instead of partner. Default: `false`.

***

### maxImpact?

> `optional` **maxImpact?**: `number`

Defined in: [src/methods/swap/swapTx.ts:106](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L106)

#### Description

In %. It's a way to bypass the API price impact check (default = 15%).

***

### partner?

> `optional` **partner?**: `string`

Defined in: [src/methods/swap/swapTx.ts:81](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L81)

#### Description

Partner string.

***

### partnerAddress?

> `optional` **partnerAddress?**: `string`

Defined in: [src/methods/swap/swapTx.ts:91](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L91)

#### Description

Address that will be entitled to claim fees or surplus. Fees have to be claimed from the Fee Claimer contract unless `_isSurplusToUser_` or `_isDirectFeeTransfer_` are used.

***

### partnerFeeBps?

> `optional` **partnerFeeBps?**: `string`

Defined in: [src/methods/swap/swapTx.ts:86](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L86)

#### Description

If provided it is used together with `partnerAddress`. Should be in basis points percentage. Look at `slippage` parameter description for understanding better. Eg: `200` (for 2% fee percent). Fees have to be claimed from the Fee Claimer contract unless `_isSurplusToUser_` or `_isDirectFeeTransfer_` are used.

***

### receiver?

> `optional` **receiver?**: `string`

Defined in: [src/methods/swap/swapTx.ts:111](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L111)

#### Description

Receiver's Wallet address. (Can be omitted if swapping tokens from and to same account).

***

### route?

> `optional` **route?**: `string`

Defined in: [src/methods/swap/swapTx.ts:76](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L76)

#### Description

Dash (-) separated list of tokens (addresses or symbols from `/tokens`) to comprise the price route. _Max 4 tokens._ _**\*Note:**_ _If_ `_route_` _is specified, the response will only comprise of the route specified which might not be the optimal route._

***

### side

> **side**: `"SELL"` \| `"BUY"`

Defined in: [src/methods/swap/swapTx.ts:41](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L41)

#### Description

**SELL** or **BUY**. Default: `SELL`.

***

### slippage

> **slippage**: `number`

Defined in: [src/methods/swap/swapTx.ts:96](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L96)

#### Description

Allowed slippage percentage represented in basis points. _Eg:_ for **2.5%** slippage, set the value to **2.5 \* 100 = 250**; for 10% = 1000.

***

### srcDecimals?

> `optional` **srcDecimals?**: `number`

Defined in: [src/methods/swap/swapTx.ts:26](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L26)

#### Description

Source Token Decimals. (Can be omitted if Token Symbol is used in `srcToken`).

***

### srcToken

> **srcToken**: `string`

Defined in: [src/methods/swap/swapTx.ts:21](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L21)

#### Description

Source Token Address. Instead, **Token Symbol** could be used for tokens listed in the `/tokens` endpoint.

***

### srcTokenDexTransferFee?

> `optional` **srcTokenDexTransferFee?**: `string`

Defined in: [src/methods/swap/swapTx.ts:126](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L126)

#### Description

If the source token is a tax token, you should specify the tax amount in BPS. Some tokens only charge tax when swapped in/out DEXs and not on ordinary transfers.

***

### srcTokenTransferFee?

> `optional` **srcTokenTransferFee?**: `string`

Defined in: [src/methods/swap/swapTx.ts:116](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L116)

#### Description

If the source token is a tax token, you should specify the tax amount in BPS. For example: for a token with a 5% tax, you should set it to 500 as `[(500/10000)*100=5%]`. Note: not all DEXs and contract methods support trading tax tokens, so we will filter those that don't.

***

### takeSurplus?

> `optional` **takeSurplus?**: `boolean`

Defined in: [src/methods/swap/swapTx.ts:161](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L161)

#### Description

Allows to collect surplus. Works with `partnerAddress`. Default: `false`.

***

### userAddress

> **userAddress**: `string`

Defined in: [src/methods/swap/swapTx.ts:71](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L71)

#### Description

User's Wallet Address.

***

### version?

> `optional` **version?**: `number` \| `string`

Defined in: [src/methods/swap/swapTx.ts:136](https://github.com/paraswap/paraswap-sdk/blob/master/src/methods/swap/swapTx.ts#L136)

#### Description

To specify the protocol version. **Values:** 5 or 6.2 **Default**: 5.
