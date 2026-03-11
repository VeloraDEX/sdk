import { MarkOptional } from 'ts-essentials';
import { Domain } from '../../common/orders/buildOrderData';
import { Bridge, DeltaAuctionOrder } from './types';
import { DELTA_DEFAULT_EXPIRY, producePartnerAndFee } from './misc';

// Order(address owner,address beneficiary,address srcToken,address destToken,uint256 srcAmount,uint256 destAmount,uint256 deadline,uint256 nonce,bytes permit, bridge Bridge)";
const SWAP_ORDER_EIP_712_TYPES = {
  Order: [
    { name: 'owner', type: 'address' },
    { name: 'beneficiary', type: 'address' },
    { name: 'srcToken', type: 'address' },
    { name: 'destToken', type: 'address' },
    { name: 'srcAmount', type: 'uint256' },
    { name: 'destAmount', type: 'uint256' },
    { name: 'expectedAmount', type: 'uint256' },
    { name: 'deadline', type: 'uint256' },
    { name: 'kind', type: 'uint8' },
    { name: 'nonce', type: 'uint256' },
    { name: 'partnerAndFee', type: 'uint256' },
    { name: 'permit', type: 'bytes' },
    { name: 'metadata', type: 'bytes' },
    { name: 'bridge', type: 'Bridge' },
  ],
  Bridge: [
    {
      name: 'protocolSelector',
      type: 'bytes4',
    },
    {
      name: 'destinationChainId',
      type: 'uint256',
    },
    {
      name: 'outputToken',
      type: 'address',
    },
    {
      name: 'scalingFactor',
      type: 'int8',
    },
    {
      name: 'protocolData',
      type: 'bytes',
    },
  ],
};

export type SignableDeltaOrderData = {
  types: {
    Order: typeof SWAP_ORDER_EIP_712_TYPES.Order;
    Bridge: typeof SWAP_ORDER_EIP_712_TYPES.Bridge;
  };
  domain: Domain;
  data: DeltaAuctionOrder;
};

type SignDeltaOrderInput = {
  orderInput: DeltaAuctionOrder;
  paraswapDeltaAddress: string;
  chainId: number;
};

export function produceDeltaOrderTypedData({
  orderInput,
  chainId,
  paraswapDeltaAddress,
}: SignDeltaOrderInput): SignableDeltaOrderData {
  return {
    types: {
      Order: SWAP_ORDER_EIP_712_TYPES.Order,
      Bridge: SWAP_ORDER_EIP_712_TYPES.Bridge,
    },
    domain: {
      name: 'Portikus',
      version: '2.0.0',
      chainId,
      verifyingContract: paraswapDeltaAddress,
    },
    data: orderInput,
  };
}

export type DeltaOrderDataInput = MarkOptional<
  Omit<DeltaAuctionOrder, 'partnerAndFee'>,
  'beneficiary' | 'deadline' | 'nonce' | 'permit'
>;

export type BuildDeltaOrderDataInput = MarkOptional<
  DeltaOrderDataInput,
  'metadata'
> & {
  partnerAddress: string;
  paraswapDeltaAddress: string;
  partnerFeeBps: number;
  partnerTakesSurplus?: boolean;
  capSurplus?: boolean;
  chainId: number;
  bridge: Bridge;
};

export function buildDeltaSignableOrderData({
  owner,
  beneficiary = owner,

  srcToken,
  destToken,
  srcAmount,
  destAmount,
  expectedAmount,

  deadline = Math.floor(Date.now() / 1000 + DELTA_DEFAULT_EXPIRY),
  nonce = Date.now().toString(10), // random enough to not cause collisions

  permit = '0x',

  kind,
  metadata = '0x',

  partnerAddress,
  partnerFeeBps,
  partnerTakesSurplus = false,
  capSurplus = true,

  chainId,
  paraswapDeltaAddress,
  bridge,
}: BuildDeltaOrderDataInput): SignableDeltaOrderData {
  const orderInput: DeltaAuctionOrder = {
    owner,
    beneficiary,
    srcToken,
    destToken,
    srcAmount,
    destAmount,
    expectedAmount,
    deadline,
    nonce,
    permit,
    partnerAndFee: producePartnerAndFee({
      partnerFeeBps,
      partnerAddress,
      partnerTakesSurplus,
      capSurplus,
    }),
    bridge,
    kind,
    metadata,
  };

  return produceDeltaOrderTypedData({
    orderInput,
    chainId,
    paraswapDeltaAddress,
  });
}
