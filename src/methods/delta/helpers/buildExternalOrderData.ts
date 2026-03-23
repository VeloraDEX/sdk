import { MarkOptional } from 'ts-essentials';
import { Domain } from '../../common/orders/buildOrderData';
import { ExternalDeltaOrder } from './types';
import { DELTA_DEFAULT_EXPIRY, producePartnerAndFee } from './misc';

const EXTERNAL_ORDER_EIP_712_TYPES = {
  ExternalOrder: [
    { name: 'owner', type: 'address' },
    { name: 'handler', type: 'address' },
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
    { name: 'data', type: 'bytes' },
  ],
};

export type SignableExternalOrderData = {
  types: {
    ExternalOrder: typeof EXTERNAL_ORDER_EIP_712_TYPES.ExternalOrder;
  };
  domain: Domain;
  data: ExternalDeltaOrder;
};

type SignExternalOrderInput = {
  orderInput: ExternalDeltaOrder;
  paraswapDeltaAddress: string;
  chainId: number;
};

export function produceExternalOrderTypedData({
  orderInput,
  chainId,
  paraswapDeltaAddress,
}: SignExternalOrderInput): SignableExternalOrderData {
  return {
    types: {
      ExternalOrder: EXTERNAL_ORDER_EIP_712_TYPES.ExternalOrder,
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

export type ExternalOrderDataInput = MarkOptional<
  Omit<ExternalDeltaOrder, 'partnerAndFee'>,
  'deadline' | 'nonce' | 'permit'
>;

export type BuildExternalOrderDataInput = MarkOptional<
  ExternalOrderDataInput,
  'metadata'
> & {
  partnerAddress: string;
  paraswapDeltaAddress: string;
  partnerFeeBps: number;
  partnerTakesSurplus?: boolean;
  capSurplus?: boolean;
  chainId: number;
};

export function buildExternalOrderSignableData({
  owner,
  handler,

  srcToken,
  destToken,
  srcAmount,
  destAmount,
  expectedAmount,

  deadline = Math.floor(Date.now() / 1000 + DELTA_DEFAULT_EXPIRY),
  nonce = Date.now().toString(10),

  permit = '0x',

  kind,
  metadata = '0x',
  data,

  partnerAddress,
  partnerFeeBps,
  partnerTakesSurplus = false,
  capSurplus = true,

  chainId,
  paraswapDeltaAddress,
}: BuildExternalOrderDataInput): SignableExternalOrderData {
  const orderInput: ExternalDeltaOrder = {
    owner,
    handler,
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
    kind,
    metadata,
    data,
  };

  return produceExternalOrderTypedData({
    orderInput,
    chainId,
    paraswapDeltaAddress,
  });
}
