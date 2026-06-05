**Velora Delta** is an intent-based protocol that enables a Velora user to make gasless swaps where multiple agents compete to execute the trade at the best price possible.
This way the user doesn't need to make a transaction themselves but only to sign a Delta Order.

In Delta v2 the Order is **built by the server** from the route returned in the price response — you sign the returned typed data and post it. The easiest way to make use of the Delta Order is to use the SDK following these steps:

### 1. Construct an SDK object

```ts
const account = userAddress;
const deltaSDK = constructSimpleSDK(
  {chainId: 1, axios},
  {
    ethersProviderOrSigner: provider, // JsonRpcProvider
    EthersContract: ethers.Contract,
    account,
  });
  // for usage with different web3 provider libraries refer to the main [README](./README.md)
```

### 2. Request prices for a Token pair

```ts
const DAI_TOKEN = '0x6b175474e89094c44da98b954eedeac495271d0f';
const USDC_TOKEN = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
const amount = '1000000000000'; // in wei

const deltaPrice = await deltaSDK.getDeltaPrice({
  srcToken: DAI_TOKEN,
  destToken: USDC_TOKEN,
  amount,
  userAddress: account,
  srcDecimals: 18,
  destDecimals: 6,
  // partner: "..." // if available
});

// deltaPrice.route is the recommended route; deltaPrice.alternatives holds the rest
```


### 3. Approve srcToken for DeltaContract

```ts
const tx = await deltaSDK.approveTokenForDelta(amount, DAI_TOKEN);
await tx.wait();
```

Alternatively sign Permit (DAI or Permit1) or Permit2 TransferFrom with DeltaContract as the verifyingContract

```ts
const DeltaContract = await deltaSDK.getDeltaContract();

// values depend on the Permit type and the srcToken
const signature = await signer._signTypedData(domain, types, message);
```

See more on accepted Permit variants in [Velora documentation](https://developers.velora.xyz/api/velora-api/velora-delta-api/build-a-delta-order-to-sign#supported-permits)


### 4. Sign and submit a Delta Order

Order building is server-side: pass the quoted `route` + `side` and your acceptable `slippage` — the server computes the amounts. `submitDeltaOrder` bundles build → sign → post.

```ts
const deltaAuction = await deltaSDK.submitDeltaOrder({
  route: deltaPrice.route, // or any deltaPrice.alternatives[i]
  side: deltaPrice.side,
  owner: account,
  // beneficiary: anotherAccount, // if need to send destToken to another account
  // permit: "0x1234...", // if signed a Permit1 or Permit2 TransferFrom for DeltaContract
  slippage: 50, // 50 bps = 0.5%
  // partner, partnerFeeBps — forwarded to the server
});
```

For full control over signing, use `buildDeltaOrder` → `signDeltaOrder` → `postDeltaOrder` separately (see the main [README](../README.md)).

### 5. Wait for Delta Order execution

```ts
// poll if necessary — v2 status COMPLETED already accounts for any dest-chain bridge
function startStatusCheck(auctionId: string) {
  const intervalId = setInterval(async () => {
    const auction = await deltaSDK.getDeltaOrderById(auctionId);
    if (auction.status === 'COMPLETED') {
      clearInterval(intervalId); // stop interval once completed
      console.log('Order completed');
    }
  }, 3000);
  // stop polling after 5 minutes
  setTimeout(() => clearInterval(intervalId), 60000 * 5);
}

startStatusCheck(deltaAuction.id);
```

#### A more detailed example of Delta Order usage can be found in [examples/delta](../src/examples/delta.ts)




---------------------------------------------------

## Crosschain Delta Orders

In case you want to perform a crosschain swap, the process is a little more involved.

### 1. Construct an SDK object

```ts
const SRC_CHAIN_ID = 1 // Ethereum
const DEST_CHAIN_ID = 10; // Optimism

const account = userAddress;
const deltaSDK = constructSimpleSDK(
  {chainId: SRC_CHAIN_ID, axios},
  {
    ethersProviderOrSigner: provider, // JsonRpcProvider
    EthersContract: ethers.Contract,
    account,
  });
  // for usage with different web3 provider libraries refer to the main [README](./README.md)
```

### 2. Check which tokens are available on the destination chain.

A limited list of tokens are available in Across, the service facilitating crosschain bridging.

```ts
const bridgeRoutes = await deltaSDK.getBridgeRoutes();

const tokensAvailableForBridging = bridgeRoutes.find(
  (route) =>
    route.srcChainId === SRC_CHAIN_ID && route.destChainId === DEST_CHAIN_ID
)?.tokens;
```


### 3. Request prices for a Token pair

```ts
const DAI_TOKEN = '0x6b175474e89094c44da98b954eedeac495271d0f';

const USDC_TOKEN_ON_DEST_CHAIN = '0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85'; // available for bridging on Optimism
const amount = '1000000000000'; // in wei

const deltaPrice = await deltaSDK.getDeltaPrice({
  srcToken: DAI_TOKEN,
  destToken: USDC_TOKEN_ON_DEST_CHAIN,
  destChainId: DEST_CHAIN_ID, // required to get deltaPrice for a Crosschain Order
  amount,
  userAddress: account,
  srcDecimals: 18,
  destDecimals: 6,
  // partner: "..." // if available
});

// the returned deltaPrice.route already encodes the bridge step for the crosschain swap
```


### 4. Approve srcToken for DeltaContract

```ts
const tx = await deltaSDK.approveTokenForDelta(amount, DAI_TOKEN);
await tx.wait();
```

Alternatively sign Permit (DAI or Permit1) or Permit2 TransferFrom with DeltaContract as the verifyingContract

```ts
const DeltaContract = await deltaSDK.getDeltaContract();

// values depend on the Permit type and the srcToken
const signature = await signer._signTypedData(domain, types, message);
```

See more on accepted Permit variants in [Velora documentation](https://developers.velora.xyz/api/velora-api/velora-delta-api/build-a-delta-order-to-sign#supported-permits)


### 5. Sign and submit a Delta Order

The crosschain `route` (from a `getDeltaPrice` call with `destChainId`) already carries the bridge details, so submitting is the same as a same-chain order — the server builds the cross-chain Order from the route.

```ts
const deltaAuction = await deltaSDK.submitDeltaOrder({
  route: deltaPrice.route, // crosschain route, includes the bridge step
  side: deltaPrice.side,
  owner: account,
  // beneficiary: anotherAccount, // if need to send destToken to another account on destChain
  // permit: "0x1234...", // if signed a Permit1 or Permit2 TransferFrom for DeltaContract
  slippage: 50, // 50 bps = 0.5%
});
```

Across, the service facilitating crosschain bridging, has [special logic when it comes to transferring ETH and WETH](https://docs.across.to/introduction/technical-faq#what-is-the-behavior-of-eth-weth-in-transfers). Refer to the [Velora documentation](https://developers.velora.xyz/api/velora-api/velora-delta-api/build-a-delta-order-to-sign#sign-an-order-cross-chain) for more on cross-chain orders.

### 6. Wait for Delta Order execution

```ts
// poll if necessary — v2 status COMPLETED already accounts for the dest-chain bridge
function startStatusCheck(auctionId: string) {
  const intervalId = setInterval(async () => {
    const auction = await deltaSDK.getDeltaOrderById(auctionId);
    if (auction.status === 'COMPLETED') {
      clearInterval(intervalId); // stop interval once completed
      console.log('Order completed');
    }
  }, 3000);
  // stop polling after 5 minutes
  setTimeout(() => clearInterval(intervalId), 60000 * 5);
}

startStatusCheck(deltaAuction.id);
```
