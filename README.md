<p align="center">
  <a href="https://www.velora.xyz/">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://cdn.paraswap.io/brand/velora_banner_dark.svg">
    <img width=350 src="https://cdn.paraswap.io/brand/velora_banner_light.svg">
  </picture>
  </a>
</p>

# SDK for the Velora API

Refer to the documentation of the Velora API: https://developers.velora.xyz/

## Features
**Versatility**: works with [web3](https://www.npmjs.com/package/web3), [ethers](https://www.npmjs.com/package/ethers) or [viem](https://viem.sh/) without direct dependency

**Canonical**: bring only the functions you actually need

**Lightweight**: 10KB Gzipped for the minimal variant

## Installing Velora SDK

```bash
pnpm add @velora-dex/sdk
```

## Using Velora SDK

There are multiple ways to use Velora SDK, ranging from a simple construct-and-use approach to a fully composable _bring what you need_ approach which allows for advanced tree-shaking and minimizes bundle size.

You can see some examples in [/src/examples](src/examples) directory.

### Simple SDK

Can be created by providing `chainId` and either `axios` or `window.fetch` (or alternative `fetch` implementation), and an optional `version` (`'5'` or `'6.2'`) parameter that corresponds to the API version SDK will be making requests to. The resulting SDK will be able to use all methods that query the API.

```ts
  import { constructSimpleSDK } from '@velora-dex/sdk';
  import axios from 'axios';

  // construct minimal SDK with fetcher only
  const minSDK = constructSimpleSDK({chainId: 1, axios});
  // or
  const minSDK = constructSimpleSDK({chainId: 1, fetch: window.fetch, version: '5'});

  const ETH = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
  const DAI = '0x6B175474E89094C44Da98b954EedeAC495271d0F';

  async function swapExample() {
    //                                     or any other signer/provider
    const signer: JsonRpcSigner = ethers.Wallet.fromMnemonic('__your_mnemonic__');
    const senderAddress = signer.address;

    const priceRoute = await minSDK.swap.getRate({
      srcToken: ETH,
      destToken: DAI,
      amount: srcAmount,
      userAddress: senderAddress,
      side: SwapSide.SELL,
    });

    const txParams = await minSDK.swap.buildTx(
      {
        srcToken,
        destToken,
        srcAmount,
        destAmount,
        priceRoute,
        userAddress: senderAddress,
        partner: referrer,
      }
    );

    const transaction = {
      ...txParams,
      gasPrice: '0x' + new BigNumber(txParams.gasPrice).toString(16),
      gasLimit: '0x' + new BigNumber(5000000).toString(16),
      value: '0x' + new BigNumber(txParams.value).toString(16),
    };

    const txr = await signer.sendTransaction(transaction);
  }
```

If optional `providerOptions` is provided as the second parameter, then the resulting SDK will also be able to approve Tokens for swap, sign Orders, etc.

```ts
  // with ethers@5
  const providerOptionsEtherV5 = {
    ethersProviderOrSigner: provider, // JsonRpcProvider
    EthersContract: ethers.Contract,
    account: senderAddress,
  };

  // with ethers@6
  const providerOptionsEtherV6 = {
    ethersV6ProviderOrSigner: provider, // JsonRpcProvider
    EthersV6Contract: ethers.Contract,
    account: senderAddress,
  };

  // or with viem (from wagmi or standalone)
    const providerOptionsViem = {
    viemClient, // made with createWalletClient()
    account: senderAddress,
  };

  // or with web3.js
  const providerOptionsWeb3 = {
    web3, // new Web3(...) instance
    account: senderAddress,
  };

  const sdk = constructSimpleSDK({chainId: 1, axios}, providerOptionsEtherV5);

  // approve token through sdk
  const txHash = await sdk.approveToken(amountInWei, DAI);

  // await tx somehow
  await provider.waitForTransaction(txHash);
```

### Full SDK
```typescript
import { constructFullSDK, constructAxiosFetcher, constructEthersContractCaller } from '@velora-dex/sdk';

const signer = ethers.Wallet.fromMnmemonic('__your_mnemonic__'); // or any other signer/provider
const account = '__signer_address__';

const contractCaller = constructEthersContractCaller({
  ethersProviderOrSigner: signer,
  EthersContract: ethers.Contract,
}, account); // alternatively constructViemContractCaller or constructWeb3ContractCaller
const fetcher = constructAxiosFetcher(axios); // alternatively constructFetchFetcher

const sdk = constructFullSDK({
  chainId: 1,
  fetcher,
  contractCaller,
});
```

### Partial SDK
For bundle-size savvy developers, you can construct a lightweight version of the SDK and bring only the functions you need.

e.g. for only getting rates and allowances:

```typescript
import { constructPartialSDK, constructFetchFetcher, constructGetRate, constructGetBalances } from '@velora-dex/sdk';

const fetcher = constructFetchFetcher(window.fetch);

const sdk = constructPartialSDK({
  chainId: 1,
  fetcher,
}, constructGetRate, constructGetBalances);

const priceRoute = await sdk.getRate(params);
const allowance = await sdk.getAllowance(userAddress, tokenAddress);
```
--------------

### Basic usage

The easiest way to make a trade is to rely on Quote method that communicates with [/quote API endpoint](https://developers.velora.xyz/api/velora-api/velora-delta-api/retrieve-delta-price-with-fallback-to-market)

```typescript
import axios from 'axios';
import { ethers } from 'ethersV5';
import { constructSimpleSDK } from '@velora-dex/sdk';

const ethersProvider = new ethers.providers.Web3Provider(window.ethereum);

const accounts = await ethersProvider.listAccounts();
const account = accounts[0]!;
const signer = ethersProvider.getSigner(account);

const simpleSDK = constructSimpleSDK(
  { chainId: 1, axios },
  {
    ethersProviderOrSigner: signer,
    EthersContract: ethers.Contract,
    account,
  }
);

const amount = '1000000000000'; // wei
const Token1 = '0x1234...'
const Token2 = '0xabcde...'

const quote = await simpleSDK.quote.getQuote({
  srcToken: Token1, // Native token (ETH) is only supported in mode: 'market'
  destToken: Token2,
  amount,
  userAddress: account,
  srcDecimals: 18,
  destDecimals: 18,
  mode: 'all', // Delta quote if possible, with fallback to Market price
  side: 'SELL', // Delta mode only supports side: SELL currenly
  // partner: "..." // if available
});

if ('delta' in quote) {
  const deltaPrice = quote.delta;

  const DeltaContract = await simpleSDK.delta.getDeltaContract();

  // or sign a Permit1 or Permit2 TransferFrom for DeltaContract
  await simpleSDK.delta.approveTokenForDelta(amount, Token1);

  const slippagePercent = 0.5;
  const destAmountAfterSlippage = BigInt(
    // get rid of exponential notation

    +(+deltaPrice.destAmount * (1 - slippagePercent / 100)).toFixed(0)
    // get rid of decimals
  ).toString(10);

  const deltaAuction = await simpleSDK.delta.submitDeltaOrder({
    deltaPrice,
    owner: account,
    // beneficiary: anotherAccount, // if need to send the output destToken to another account
    // permit: "0x1234...", // if signed a Permit1 or Permit2 TransferFrom for DeltaContract
    srcToken: Token1,
    destToken: Token2,
    srcAmount: amount,
    destAmount: destAmountAfterSlippage, // minimum acceptable destAmount
  });

  // poll if necessary
  function isExecutedDeltaAuction(
      auction: Omit<DeltaAuction, 'signature'>,
      waitForCrosschain = true // only consider executed when destChain work is done
    ) {
      if (auction.status !== 'EXECUTED') return false;

      // crosschain Order is executed on destChain if bridgeStatus is filled
      if (waitForCrosschain && auction.order.bridge.destinationChainId !== 0) {
        return auction.bridgeStatus === 'filled';
      }

      return true;
    }

  function fetchOrderPeriodically(auctionId: string) {
    const intervalId = setInterval(async () => {
      const auction = await simpleSDK.delta.getDeltaOrderById(auctionId);
      console.log('checks: ', auction); // Handle or log the fetched auction as needed

      if (isExecutedDeltaAuction(auction)) {
        clearInterval(intervalId); // Stop interval if completed
        console.log('Order completed');
      }
    }, 3000);
    console.log('Order Pending');
    // Return intervalId to enable clearing the interval if needed externally
    return intervalId;
  }

  function startStatusCheck(auctionId: string) {
    const intervalId = fetchOrderPeriodically(auctionId);
    setTimeout(() => clearInterval(intervalId), 60000 * 5); // Stop after 5 minutes
  }

  startStatusCheck(deltaAuction.id);
} else {
  console.log(
    `Delta Quote failed: ${quote.fallbackReason.errorType} - ${quote.fallbackReason.details}`
  );
  const priceRoute = quote.market;

  const TokenTransferProxy = await simpleSDK.swap.getSpender();

  // or sign a Permit1 or Permit2 TransferFrom for TokenTransferProxy
  const approveTxHash = simpleSDK.swap.approveToken(amount, Token1);

  const txParams = await simpleSDK.swap.buildTx({
    srcToken: Token1,
    destToken: Token2,
    srcAmount: amount,
    slippage: 250, // 2.5%
    priceRoute,
    userAddress: account,
    // partner: '...' // if available
  });

  const swapTx = await signer.sendTransaction(txParams);
}
```

### Delta Order handling

#### A more detailed overview of the Trade Flow, Delta Order variant.

**Velora Delta** is an intent-based protocol that enables a Velora user to make gasless swaps where multiple agents compete to execute the trade at the best price possible.
This way the user doesn't need to make a transaction themselve but only to sign a Delta Order.

(For **Crosschain Delta Orders** refer to a separate documentation page [DELTA.md](./docs/DELTA.md#crosschain-delta-orders) )

After getting **deltaPrice** from **/quote** endpoint, there are additional steps to sign the Order and wait for its execution.

### 1. Get deltaPrice from /quote

```ts
const amount = '1000000000000'; // wei
const Token1 = '0x1234...'
const Token2 = '0xabcde...'

const quote = await simpleSDK.quote.getQuote({
  srcToken: Token1, // Native token (ETH) is only supported in mode: 'market'
  destToken: Token2,
  amount,
  userAddress: account,
  srcDecimals: 18,
  destDecimals: 18,
  mode: 'delta' // or mode: 'all'
  // partner: "..." // if available
})

// if used mode: 'all'
if ('delta' in quote) {
  const deltaPrice = quote.delta;
}

// if used mode: 'delta'
const deltaPrice = quote.delta;
```


### 2. Approve srcToken for DeltaContract

```ts
const approveTxHash = await simpleSDK.delta.approveTokenForDelta(amount, Token1);
```

Alternatively sign Permit (DAI or Permit1) or Permit2 TransferFrom with DeltaContract as the verifyingContract

```ts
const DeltaContract = await simpleSDK.delta.getDeltaContract();

// values depend on the Permit type and the srcToken
const signature = await signer._signTypedData(domain, types, message);
```

See more on accepted Permit variants in [Velora documentation](https://developers.velora.xyz/api/velora-api/velora-delta-api/build-a-delta-order-to-sign#supported-permits)


### 3. Sign and submit a Delta Order

```ts
// calculate acceptable destAmount
const slippagePercent = 0.5;
  const destAmountAfterSlippage = (
    +deltaPrice.destAmount *
    (1 - slippagePercent / 100)
  ).toString(10);

const signableOrderData = await simpleSDK.delta.buildDeltaOrder({
  deltaPrice,
  owner: account,
  // beneficiary: anotherAccount, // if need to send the output destToken to another account
  // permit: "0x1234...", // if signed a Permit1 or Permit2 TransferFrom for DeltaContract
  srcToken: Token1,
  destToken: Token2,
  srcAmount: amount,
  destAmount: destAmountAfterSlippage, // minimum acceptable destAmount
  // partner: "..." // if available
});

const signature = await simpleSDK.delta.signDeltaOrder(signableOrderData);

const deltaAuction = await simpleSDK.delta.postDeltaOrder({
  // partner: "..." // if available
  // partiallyFillabel: true, // allow the Order to be partially filled as opposed to fill-or-kill
  order: signableOrderData.data,
  signature,
});
```

#### 3.a.

As an option the `buildDeltaOrder + signDeltaOrder + postDeltaOrder` can be combined into one SDK call with the following code

```ts
const deltaAuction = await simpleSDK.delta.submitDeltaOrder({
  deltaPrice,
  owner: account,
  // beneficiary: anotherAccount, // if need to send output destToken to another account
  // permit: "0x1234...", // if signed a Permit1 or Permit2 TransferFrom for DeltaContract
  // partiallyFillabel: true, // allow the Order to be partially filled as opposed to fill-or-kill
  srcToken: Token1,
  destToken: Token2,
  srcAmount: amount,
  destAmount: destAmountAfterSlippage, // minimum acceptable destAmount
});
```

This allows to simplify the flow at the expense of control over the Order signing.

#### 3.b adding partner fee

A portion of destToken will be collected as a partner fee if `partner` parameter is provided to `buildDeltaOrder` (and `submitDeltaOrder`). The `partnerFee` itself is `deltaPrice.partnerFee`

To examine the default partnerFee parameters (`{partnerAddress: Address, partnerFee: number, takeSurplus: boolean}`), you can call `getPartnerFee` method. These parameters are then encoded in Order.partnerAndFee field.

```ts
const partnerFeeResponse = await simpleSDK.delta.getPartnerFee({ partner });
```

Alternatively, you can supply your own partnerFee parameters that will be encoded in Order.partnerAndFee field

```ts
const signableOrderData = await simpleSDK.delta.buildDeltaOrder({
  deltaPrice,
  owner: account,
  // beneficiary: anotherAccount, // if need to send the output destToken to another account
  // permit: "0x1234...", // if signed a Permit1 or Permit2 TransferFrom for DeltaContract
  // partiallyFillabel: true, // allow the Order to be partially filled as opposed to fill-or-kill
  srcToken: Token1,
  destToken: Token2,
  srcAmount: amount,
  destAmount: destAmountAfterSlippage, // minimum acceptable destAmount
  partnerAddress: '0x1234...',
  partnerFee: 0.12,
  takeSurplus: true,
});
```

### 4. Wait for Delta Order execution

```ts
// poll if necessary
function isExecutedDeltaAuction(
  auction: Omit<DeltaAuction, 'signature'>,
  waitForCrosschain = true // only consider executed when destChain work is done
) {
  if (auction.status !== 'EXECUTED') return false;

  // crosschain Order is executed on destChain if bridgeStatus is filled
  if (waitForCrosschain && auction.order.bridge.destinationChainId !== 0) {
    return auction.bridgeStatus === 'filled';
  }

  return true;
}

function fetchOrderPeriodically(auctionId: string) {
  const intervalId = setInterval(async () => {
    const auction = await simpleSDK.delta.getDeltaOrderById(auctionId);
    console.log('checks: ', auction); // Handle or log the fetched auction as needed

    if (isExecutedDeltaAuction(auction)) {
      clearInterval(intervalId); // Stop interval if completed
      console.log('Order completed');
    }
  }, 3000);
  console.log('Order Pending');
  // Return intervalId to enable clearing the interval if needed externally
  return intervalId;
}

function startStatusCheck(auctionId: string) {
  const intervalId = fetchOrderPeriodically(auctionId);
  setTimeout(() => clearInterval(intervalId), 60000 * 5); // Stop after 5 minutes
}

startStatusCheck(deltaAuction.id);
```

#### A more detailed example of Delta Order usage can be found in [examples/delta](./src/examples/delta.ts)

For more Delta protocol usage, and **Crosschain Delta Orders**, refer to [DELTA.md](./docs/DELTA.md)

For **External Delta Orders** (orders that delegate token handling to an external handler contract, enabling complex DeFi strategies like Aave collateral/debt swaps), refer to [EXTERNAL_ORDERS.md](./docs/EXTERNAL_ORDERS.md)

------------

### Delta V2 (server-built orders)

Delta V2 ships alongside v1. It moves order construction to the server (`POST /delta/v2/orders/build`), returns route-based prices with same-chain and cross-chain alternatives in one response, and uses a single signer for every order family (standard, external, TWAP). The pre-bound bag is available as `simpleSDK.deltaV2.*`. The raw constructors and types live under the `DeltaV2` namespace at the package root.

```ts
import { constructSimpleSDK, DeltaV2 } from '@velora-dex/sdk';

// types: DeltaV2.DeltaPrice, DeltaV2.DeltaRoute, DeltaV2.BuiltDeltaOrder,
//        DeltaV2.DeltaAuction, DeltaV2.BridgeRoute, ...
// values: DeltaV2.constructBuildDeltaOrder, DeltaV2.constructPostDeltaOrder,
//         DeltaV2.constructAllDeltaOrdersHandlers, ...
```

#### Quick flow (simple SDK)

```ts
const simpleSDK = constructSimpleSDK({ chainId: 1, axios }, {
  ethersProviderOrSigner: signer,
  EthersContract: ethers.Contract,
  account,
});

const deltaPrice = await simpleSDK.deltaV2.getDeltaPrice({
  srcToken: Token1,
  destToken: Token2,
  amount,
  srcDecimals: 18,
  destDecimals: 18,
  userAddress: account,
  // destChainId: 42161, // for cross-chain — bridge details land in deltaPrice.route.bridge
});

// approve once (Permit1 / Permit2 also supported — see v1 flow above)
await simpleSDK.deltaV2.approveTokenForDelta(amount, Token1);

// build → sign → post in one call
const deltaAuction = await simpleSDK.deltaV2.submitDeltaOrder({
  route: deltaPrice.route, // or any deltaPrice.alternatives[i]
  side: deltaPrice.side,
  owner: account,
  slippage: 50, // 50 bps = 0.5%
  // partner, partnerAddress, partnerFeeBps — passed through to the server
});

// status polling — v2 status COMPLETED already accounts for the dest-chain bridge
const isDone = (o: DeltaV2.DeltaAuction) => o.status === 'COMPLETED';
```

#### Manual flow (full control over signing)

```ts
const built = await simpleSDK.deltaV2.buildDeltaOrder({
  route: deltaPrice.route,
  side: deltaPrice.side,
  owner: account,
  slippage: 50,
});

// one signer for every v2 family (Order / ExternalOrder / TWAPOrder / TWAPBuyOrder)
const signature = await simpleSDK.deltaV2.signDeltaOrder(built);

const deltaAuction = await simpleSDK.deltaV2.postDeltaOrder({
  order: built.toSign.value as Parameters<
    typeof simpleSDK.deltaV2.postDeltaOrder
  >[0]['order'],
  signature,
});
```

#### TWAP order

A TWAP sell splits `totalSrcAmount` into `numSlices` equal slices executed `interval` seconds apart. Price is quoted for a single slice — the server multiplies amounts internally.

```ts
const perSliceAmount = (BigInt(totalSrcAmount) / BigInt(numSlices)).toString();

const slicePrice = await simpleSDK.deltaV2.getDeltaPrice({
  srcToken: Token1,
  destToken: Token2,
  amount: perSliceAmount,
  srcDecimals: 18,
  destDecimals: 18,
  userAddress: account,
});

await simpleSDK.deltaV2.approveTokenForDelta(totalSrcAmount, Token1);

const twapAuction = await simpleSDK.deltaV2.submitTWAPDeltaOrder({
  onChainOrderType: 'TWAPOrder', // or 'TWAPBuyOrder'
  route: slicePrice.route,
  owner: account,
  totalSrcAmount,
  numSlices,
  interval: 300, // seconds (min 60)
  slippage: 50,
});
```

#### Partial SDK with v2

For bundle-savvy code, pull only the v2 constructors you need. The `DeltaV2` namespace doubles as a runtime object, so it tree-shakes cleanly.

```ts
import {
  constructPartialSDK,
  constructFetchFetcher,
  DeltaV2,
} from '@velora-dex/sdk';

const sdk = constructPartialSDK(
  { chainId: 1, fetcher: constructFetchFetcher(fetch) },
  DeltaV2.constructGetDeltaPrice,
  DeltaV2.constructGetDeltaOrders,
  DeltaV2.constructGetBridgeRoutes,
);

const price = await sdk.getDeltaPrice({ /* ... */ });
const orders = await sdk.getDeltaOrders({ userAddress: account, page: 1, limit: 50 });
```

A complete v2 example (standard, external handler, TWAP, and order listing) is in [examples/deltaV2](./src/examples/deltaV2.ts).

#### Productive Orders (read-only)

Alongside the four buildable families (`Order`, `ExternalOrder`, `TWAPOrder`, `TWAPBuyOrder`), the SDK surfaces a fifth `onChainOrderType` — **`ProductiveOrder`** — through the read endpoints (`sdk.delta.getDeltaOrderById`, `sdk.deltaV2.getDeltaOrders`, etc.). Productive orders are produced and managed entirely by the server: there are deliberately **no `buildProductiveOrder`, `signProductiveOrder`, or `submitProductiveOrder` helpers**. The shape is wired through `OnChainOrderType`, `OnChainOrderMap`, and `DeltaAuctionUnion` (also exported individually as `DeltaAuctionProductive`) so that consumers iterating over an order list can type-narrow on `onChainOrderType === 'ProductiveOrder'` and read the order safely — productive orders carry no `OrderKind`, so the side is always `SELL`.

`OnChainOrderType` additionally includes **`'FillableOrder'`**, which maps to the same shape as a Standard `'Order'` (`DeltaAuctionOrder`, also exported as `DeltaAuctionFillable` and part of `DeltaAuctionUnion`). It is not a separate buildable family — it's the `onChainOrderType` the server reports for a `partiallyFillable` Standard order, so treat it the same as `'Order'` when narrowing.

```ts
import { OrderHelpers, type DeltaAuctionUnion } from '@velora-dex/sdk';

function describe(order: DeltaAuctionUnion) {
  if (order.onChainOrderType === 'ProductiveOrder') {
    // order: DeltaAuctionProductive — read-only, no SDK builder
    return `productive: ${order.order.srcToken}`;
  }
  // ... handle Order / ExternalOrder / TWAPOrder / TWAPBuyOrder
}
```

------------

### Market Swap handling

#### A more detailed overview of the Trade Flow, Market variant.

Unlike the Delta Order, a Market swap  requires the user themselves to submit a Swap transaction

### 1. Get Market priceRoute from /quote

```ts
const amount = '1000000000000'; // wei
const Token1 = '0x1234...'
const Token2 = '0xabcde...'

const quote = await simpleSDK.quote.getQuote({
  srcToken: Token1, // Native token (ETH) is only supported in mode: 'market'
  destToken: Token2,
  amount,
  userAddress: account,
  srcDecimals: 18,
  destDecimals: 18,
  mode: 'market'
  // partner: "..." // if available
})

// if used mode: 'all'
if ('market' in quote) {
  const priceRoute = quote.market;
}

// if used mode: 'market'
const priceRoute = quote.market;
```


### 2. Approve srcToken for TokenTransferProxy

```ts
const approveTxHash = simpleSDK.swap.approveToken(amount, DAI_TOKEN);
```

Alternatively sign Permit (DAI or Permit1) or Permit2 TransferFrom with TokenTransferProxy as the verifyingContract

```ts
const TokenTransferProxy = await simpleSDK.swap.getSpender();

// values depend on the Permit type and the srcToken
const signature = await signer._signTypedData(domain, types, message);
```

See more on accepted Permit variants in [Velora documentation](https://developers.velora.xyz/api/velora-api/velora-market-api/build-parameters-for-transaction)


### 3. Send Swap transaction

```ts
const txParams = await simpleSDK.swap.buildTx({
  srcToken: Token1,
  destToken: Token2,
  srcAmount: amount,
  slippage: 250, // 2.5%
  // can pass `destAmount` (adjusted for slippage) instead of `slippage`
  priceRoute,
  userAddress: account,
  // partner: '...' // if available
  // receiver: '0x123ae...' // if need to send the output destToken to another account
});

const swapTxHash = await signer.sendTransaction(txParams);
```

#### See more details on `buildTx` parameters in [Velora documentation](https://developers.velora.xyz/api/velora-api/velora-market-api/build-parameters-for-transaction)

------------------------


Refer to [SDK API documentation](docs/md/modules.md) for detailed documentation on the methods provided in this SDK.

## Tests

To run `pnpm test` it is necessary to provide `PROVIDER_URL=<mainnet_rpc_url>` environment variable.
If it is necessary to run tests against a different API endpoint, provide `API_URL=url_to_API` environment variable.
