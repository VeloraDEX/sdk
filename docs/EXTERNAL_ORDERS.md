## External Delta Orders

External orders delegate token handling to an external **handler** contract, enabling complex DeFi strategies that go beyond simple token swaps. The handler manages the actual token logic (e.g. Aave flash loan + collateral/debt swap), while the Delta protocol handles the auction, settlement, and signature verification.

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
| `beneficiary` field | yes | no (output goes to owner) |
| `bridge` field | yes | no |
| `handler` field | no | yes (required) |
| `data` field | no | yes (required) |
| Cross-chain support | yes | no |


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
  side: SwapSide.SELL,
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

The simplest approach — builds, signs, and posts the order in one call:

```ts
const deltaAuction = await deltaSDK.submitExternalDeltaOrder({
  deltaPrice,
  owner: account,
  handler: AAVE_HANDLER, // your deployed handler contract
  data: '0x0000000000000000000000000000000000000000000000000000000000000000', // protocol-specific bytes
  srcToken: USDC,
  destToken: WETH,
  srcAmount: amount,
  slippage: 50, // 0.5% in bps
});
```

#### Using individual steps

For more control, you can build, sign, and post separately:

```ts
const signableOrderData = await deltaSDK.buildExternalDeltaOrder({
  deltaPrice,
  owner: account,
  handler: AAVE_HANDLER,
  data: '0x0000000000000000000000000000000000000000000000000000000000000000',
  srcToken: USDC,
  destToken: WETH,
  srcAmount: amount,
  slippage: 50, // 0.5% in bps
});

const signature = await deltaSDK.signExternalDeltaOrder(signableOrderData);

const deltaAuction = await deltaSDK.postExternalDeltaOrder({
  order: signableOrderData.data,
  signature,
});
```

### 5. Wait for execution

```ts
const intervalId = setInterval(async () => {
  const auction = await deltaSDK.getDeltaOrderById(deltaAuction.id);
  console.log('Status:', auction.status);

  if (auction.status === 'EXECUTED' || auction.status === 'FAILED') {
    clearInterval(intervalId);
  }
}, 3000);
```

### 6. Query External Orders

```ts
// fetch a specific external order
const order = await deltaSDK.getDeltaOrderById(orderId);

// list external orders only
const orders = await deltaSDK.getDeltaOrders({
  owner: account,
  onChainOrderType: 'ExternalOrder',
});
```

---

## Specifying Amounts

There are two ways to specify amounts:

**With `slippage` (recommended)** — the SDK computes the slippage-adjusted amount from `deltaPrice` automatically:

```ts
// SELL: provide srcAmount + slippage → destAmount auto-computed
await deltaSDK.buildExternalDeltaOrder({
  // ...
  srcAmount: amount,
  slippage: 50, // 0.5% in bps
});

// BUY: provide destAmount + slippage → srcAmount auto-computed
await deltaSDK.buildExternalDeltaOrder({
  // ...
  destAmount: amount,
  slippage: 50,
});
```

**With explicit amounts** — you compute both amounts yourself:

```ts
await deltaSDK.buildExternalDeltaOrder({
  // ...
  srcAmount: amount,
  destAmount: destAmountAfterSlippage,
  side: SwapSide.SELL, // or SwapSide.BUY
});
```

---

## Pre-signing External Orders

For smart contract wallets or other cases where EIP-712 signatures are not available, you can pre-sign an external order on-chain:

```ts
const signableOrderData = await deltaSDK.buildExternalDeltaOrder({
  deltaPrice,
  owner: account,
  handler: AAVE_HANDLER,
  data: '0x0000000000000000000000000000000000000000000000000000000000000000',
  srcToken: USDC,
  destToken: WETH,
  srcAmount: amount,
  slippage: 50,
});

// on-chain pre-sign transaction
const tx = await deltaSDK.preSignExternalDeltaOrder(signableOrderData);
await tx.wait();

// post with empty signature
const deltaAuction = await deltaSDK.postExternalDeltaOrder({
  order: signableOrderData.data,
  signature: '0x',
});
```

---

#### A more detailed example can be found in [examples/externalDelta](../src/examples/externalDelta.ts)
