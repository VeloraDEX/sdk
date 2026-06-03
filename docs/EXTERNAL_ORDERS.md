## External Delta Orders

External orders delegate token handling to an external **handler** contract, enabling complex DeFi strategies that go beyond simple token swaps. The handler manages the actual token logic (e.g. Aave flash loan + collateral/debt swap), while the Delta protocol handles the auction, settlement, and signature verification.

As with all Delta v2 orders, the Order is **built by the server** from the route returned by `getDeltaPrice` — you sign the returned typed data and post it.

### Handler Contract

The handler contract must be deployed by the integrator and implement the `IExternalProtocolHandler` interface:

```solidity
interface IExternalProtocolHandler {
    function execute(
        address user,
        address tokenIn,
        uint256 amountIn,
        address tokenOut,
        uint256 amountOut,
        bytes calldata data
    ) external;
}
```

The `data` field carries protocol-specific parameters (e.g. an Aave operation type). A reference implementation is the [Aave handler deployed on Ethereum](https://etherscan.io/address/0xb4a2c36668cf8b19fe08f263e3685a5e16e82912#code).

### Key Differences from Standard Delta Orders

| Feature | Standard Order | External Order |
|---|---|---|
| `handler` field | no | yes (required) |
| `data` field | no | yes (required) |
| `bridge` field | yes | no |
| Cross-chain support | yes | no |

`beneficiary` is supported by both (defaults to `owner`).


---

### 1. Construct an SDK object

```ts
const account = userAddress;
const deltaSDK = constructSimpleSDK(
  { chainId: 1, axios }, // Ethereum
  {
    ethersProviderOrSigner: signer,
    EthersContract: ethers.Contract,
    account,
  }
);
// for usage with different web3 provider libraries refer to the main README
```

### 2. Request prices for a Token pair

```ts
const USDC = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48';
const WETH = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
const AAVE_HANDLER = '0xb4a2c36668cf8b19fe08f263e3685a5e16e82912';
const amount = ethers.utils.parseUnits('1', 6).toString(); // 1 USDC

const deltaPrice = await deltaSDK.getDeltaPrice({
  srcToken: USDC,
  destToken: WETH,
  amount,
  userAddress: account,
  srcDecimals: 6,
  destDecimals: 18,
  side: 'SELL',
});
```

### 3. Perform any prerequisites required by the handler

Each handler may have its own prerequisites (token approvals, delegation, position setup, etc.). Refer to your handler's documentation for details.

For example, the [Aave handler](https://etherscan.io/address/0xb4a2c36668cf8b19fe08f263e3685a5e16e82912#code) requires aToken approval before a collateral swap:

```ts
const aUSDC = new ethers.Contract(USDC, ['function approve(address,uint256)'], signer);
await aUSDC.approve(AAVE_HANDLER, amount);
```

### 4. Build, sign, and submit the External Order

#### Using `submitExternalDeltaOrder` (recommended)

The simplest approach — builds, signs, and posts the order in one call. Pass the quoted `route` + `side` and your `slippage`; the server computes the amounts.

```ts
const deltaAuction = await deltaSDK.submitExternalDeltaOrder({
  route: deltaPrice.route, // or any deltaPrice.alternatives[i]
  side: deltaPrice.side,
  owner: account,
  handler: AAVE_HANDLER, // your deployed handler contract
  data: '0x0000000000000000000000000000000000000000000000000000000000000000', // protocol-specific bytes
  slippage: 50, // 0.5% in bps
});
```

#### Using individual steps

For more control, you can build, sign, and post separately. A single `signDeltaOrder` signs every order family.

```ts
const built = await deltaSDK.buildExternalDeltaOrder({
  route: deltaPrice.route,
  side: deltaPrice.side,
  owner: account,
  handler: AAVE_HANDLER,
  data: '0x0000000000000000000000000000000000000000000000000000000000000000',
  slippage: 50, // 0.5% in bps
});

const signature = await deltaSDK.signDeltaOrder(built);

const deltaAuction = await deltaSDK.postExternalDeltaOrder({
  order: built.toSign.value,
  signature,
});
```

### 5. Wait for execution

```ts
const intervalId = setInterval(async () => {
  const auction = await deltaSDK.getDeltaOrderById(deltaAuction.id);
  console.log('Status:', auction.status);

  if (auction.status === 'COMPLETED' || auction.status === 'FAILED') {
    clearInterval(intervalId);
  }
}, 3000);
```

### 6. Query External Orders

```ts
// fetch a specific external order
const order = await deltaSDK.getDeltaOrderById(orderId);

// list external orders only (paginated — `data` holds the orders)
const { data: externalOrders } = await deltaSDK.getDeltaOrders({
  userAddress: account,
  onChainOrderType: 'ExternalOrder',
});
```

---

## Specifying Amounts

Amounts are derived server-side from the quoted `route`. Two ways to control them:

**With `slippage` (recommended)** — the server computes the slippage-adjusted amount from the route:

```ts
await deltaSDK.buildExternalDeltaOrder({
  route: deltaPrice.route,
  side: deltaPrice.side, // 'SELL' or 'BUY'
  // ...
  slippage: 50, // 0.5% in bps
});
```

**With an explicit `limitAmount`** — pin the limit yourself; the server uses it as the SELL `destAmount` (or BUY `srcAmount`) and `expectedAmount`:

```ts
await deltaSDK.buildExternalDeltaOrder({
  route: deltaPrice.route,
  side: deltaPrice.side,
  // ...
  limitAmount: destAmountLimit,
});
```

---

## Pre-signing External Orders

For smart contract wallets or other cases where EIP-712 signatures are not available, you can pre-sign an external order on-chain using the `orderHash` returned by the server build:

```ts
const built = await deltaSDK.buildExternalDeltaOrder({
  route: deltaPrice.route,
  side: deltaPrice.side,
  owner: account,
  handler: AAVE_HANDLER,
  data: '0x0000000000000000000000000000000000000000000000000000000000000000',
  slippage: 50,
});

// on-chain pre-sign transaction (setPreSignature for the built order hash)
const tx = await deltaSDK.setExternalDeltaOrderPreSignature(built.orderHash);
await tx.wait();

// post with empty signature
const deltaAuction = await deltaSDK.postExternalDeltaOrder({
  order: built.toSign.value,
  signature: '0x',
});
```

---

#### A more detailed example can be found in [examples/delta](../src/examples/delta.ts)
