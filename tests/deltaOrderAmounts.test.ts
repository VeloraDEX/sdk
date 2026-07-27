import { OrderHelpers } from '../src';
import type { Bridge, DeltaAuctionOrder } from '../src';

const { getAuctionAmounts } = OrderHelpers.getters;

const NO_BRIDGE: Bridge = {
  protocolSelector: '0x00000000',
  destinationChainId: 0,
  outputToken: '0x0000000000000000000000000000000000000000',
  scalingFactor: 0,
  protocolData: '0x',
};

const baseOrder: DeltaAuctionOrder = {
  owner: '0x4fbb11b908dfaaeddf30454436314801f8d91a83',
  beneficiary: '0x4fbb11b908dfaaeddf30454436314801f8d91a83',
  srcToken: '0x0b2c639c533813f4aa9d7837caf62653d097ff85',
  destToken: '0x0b2c639c533813f4aa9d7837caf62653d097ff85',
  srcAmount: '1597481',
  destAmount: '1588804',
  expectedAmount: '1596788',
  kind: 0,
  metadata: '0x',
  deadline: 1785141849,
  nonce: '1',
  permit: '0x',
  partnerAndFee: '512',
  bridge: NO_BRIDGE,
};

type AuctionInput = Parameters<typeof getAuctionAmounts>[0];

function makeAuction({
  order,
  destChainId,
  destToken,
  expectedDestAmount,
}: {
  order: DeltaAuctionOrder;
  destChainId: number;
  destToken: string;
  expectedDestAmount: string | null;
}): AuctionInput {
  return {
    status: 'PENDING',
    order,
    input: {
      chainId: 10,
      token: order.srcToken,
      amount: order.srcAmount,
    },
    output: {
      chainId: destChainId,
      token: destToken,
      expectedAmount: expectedDestAmount,
      executedAmount: null,
    },
    transactions: [],
  } as AuctionInput;
}

describe('getAuctionAmounts — minimal.destAmount', () => {
  it('leaves the minimum unscaled for same-chain orders', () => {
    const auction = makeAuction({
      order: baseOrder,
      destChainId: 10,
      destToken: baseOrder.destToken,
      expectedDestAmount: '1596788',
    });

    expect(getAuctionAmounts(auction).minimal.destAmount).toBe('1588804');
  });

  it('scales the minimum into dest-chain decimals for a same-asset bridge route', () => {
    // USDC 6 decimals on Optimism -> USDC 18 decimals on BSC: scalingFactor +12.
    const auction = makeAuction({
      order: {
        ...baseOrder,
        bridge: {
          ...NO_BRIDGE,
          protocolSelector: '0x12345678',
          destinationChainId: 56,
          outputToken: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
          scalingFactor: 12,
        },
      },
      destChainId: 56,
      destToken: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
      expectedDestAmount: '1596788000000000000',
    });

    expect(getAuctionAmounts(auction).minimal.destAmount).toBe(
      '1588804000000000000'
    );
  });

  it('keeps the minimum when a same-asset bridge route needs no scaling', () => {
    // USDC 6 decimals on both sides: scalingFactor 0 is correct here.
    const auction = makeAuction({
      order: {
        ...baseOrder,
        bridge: {
          ...NO_BRIDGE,
          protocolSelector: '0x12345678',
          destinationChainId: 8453,
          outputToken: '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913',
          scalingFactor: 0,
        },
      },
      destChainId: 8453,
      destToken: '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913',
      expectedDestAmount: '1594000',
    });

    expect(getAuctionAmounts(auction).minimal.destAmount).toBe('1588804');
  });

  it('reports no minimum for a bridge-and-swap route', () => {
    // Real order 97264d36-382a-4965-b205-54eefdf7fccb: USDC on Optimism (6 dec)
    // swapped to native BNB on BSC (18 dec) via Mayan. `destAmount` is USDC and
    // `scalingFactor` is 0 by design, so the scaled value (1588804 wei of BNB,
    // ~0 BNB) is meaningless as a minimum. The real floor is `minAmountOut`
    // inside `bridge.protocolData`.
    const auction = makeAuction({
      order: {
        ...baseOrder,
        bridge: {
          ...NO_BRIDGE,
          protocolSelector: '0x66ad5736',
          destinationChainId: 56,
          outputToken: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
          scalingFactor: 0,
        },
      },
      destChainId: 56,
      destToken: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
      expectedDestAmount: '2751220017546070',
    });

    const { minimal, expected } = getAuctionAmounts(auction);

    expect(minimal.destAmount).toBeUndefined();
    // the expected amount stays intact and usable as a fallback
    expect(expected.destAmount).toBe('2751220017546070');
  });

  it('reports no minimum when scaling overshoots the expected output', () => {
    // Inverse denomination mismatch: an 18 decimal source token swapped into an
    // 8 decimal output token would put the "minimum" far above the real output.
    const auction = makeAuction({
      order: {
        ...baseOrder,
        destAmount: '7376781108121617553',
        bridge: {
          ...NO_BRIDGE,
          protocolSelector: '0x66ad5736',
          destinationChainId: 8453,
          outputToken: '0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf',
          scalingFactor: 0,
        },
      },
      destChainId: 8453,
      destToken: '0xcbb7c0000ab88b473b1f5afd9ef808440eed33bf',
      expectedDestAmount: '6800',
    });

    expect(getAuctionAmounts(auction).minimal.destAmount).toBeUndefined();
  });

  it('falls back to the scaled value when the auction carries no expected output', () => {
    const auction = makeAuction({
      order: {
        ...baseOrder,
        bridge: {
          ...NO_BRIDGE,
          protocolSelector: '0x12345678',
          destinationChainId: 56,
          outputToken: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
          scalingFactor: 12,
        },
      },
      destChainId: 56,
      destToken: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
      expectedDestAmount: null,
    });

    expect(getAuctionAmounts(auction).minimal.destAmount).toBe(
      '1588804000000000000'
    );
  });
});
