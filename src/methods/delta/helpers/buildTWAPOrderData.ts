import { Domain } from '../../common/orders/buildOrderData';
import {
  Bridge,
  TWAPDeltaOrder,
  TWAPBuyDeltaOrder,
  TWAPOnChainOrderType,
  OnChainOrderMap,
} from './types';
import { DELTA_DEFAULT_EXPIRY, producePartnerAndFee } from './misc';

const BRIDGE_EIP_712_TYPE = [
  { name: 'protocolSelector', type: 'bytes4' },
  { name: 'destinationChainId', type: 'uint256' },
  { name: 'outputToken', type: 'address' },
  { name: 'scalingFactor', type: 'int8' },
  { name: 'protocolData', type: 'bytes' },
];

const TWAP_ORDER_EIP_712_TYPES = {
  TWAPOrder: [
    { name: 'owner', type: 'address' },
    { name: 'beneficiary', type: 'address' },
    { name: 'srcToken', type: 'address' },
    { name: 'destToken', type: 'address' },
    { name: 'nonce', type: 'uint256' },
    { name: 'partnerAndFee', type: 'uint256' },
    { name: 'deadline', type: 'uint64' },
    { name: 'interval', type: 'uint64' },
    { name: 'numSlices', type: 'uint32' },
    { name: 'destAmountPerSlice', type: 'uint256' },
    { name: 'totalSrcAmount', type: 'uint256' },
    { name: 'permit', type: 'bytes' },
    { name: 'metadata', type: 'bytes' },
    { name: 'bridge', type: 'Bridge' },
  ],
  Bridge: BRIDGE_EIP_712_TYPE,
};

const TWAP_BUY_ORDER_EIP_712_TYPES = {
  TWAPBuyOrder: [
    { name: 'owner', type: 'address' },
    { name: 'beneficiary', type: 'address' },
    { name: 'srcToken', type: 'address' },
    { name: 'destToken', type: 'address' },
    { name: 'nonce', type: 'uint256' },
    { name: 'partnerAndFee', type: 'uint256' },
    { name: 'deadline', type: 'uint64' },
    { name: 'interval', type: 'uint64' },
    { name: 'numSlices', type: 'uint32' },
    { name: 'totalDestAmount', type: 'uint256' },
    { name: 'maxSrcAmount', type: 'uint256' },
    { name: 'permit', type: 'bytes' },
    { name: 'metadata', type: 'bytes' },
    { name: 'bridge', type: 'Bridge' },
  ],
  Bridge: BRIDGE_EIP_712_TYPE,
};

export type SignableTWAPSellOrderData = {
  types: typeof TWAP_ORDER_EIP_712_TYPES;
  domain: Domain;
  data: TWAPDeltaOrder;
};

export type SignableTWAPBuyOrderData = {
  types: typeof TWAP_BUY_ORDER_EIP_712_TYPES;
  domain: Domain;
  data: TWAPBuyDeltaOrder;
};

export type SignableTWAPOrderData =
  | SignableTWAPSellOrderData
  | SignableTWAPBuyOrderData;

type ProduceTWAPOrderTypedDataInput<T extends TWAPOnChainOrderType> = {
  orderInput: OnChainOrderMap[T];
  paraswapDeltaAddress: string;
  chainId: number;
  onChainOrderType: T;
};

export function produceTWAPOrderTypedData(
  params: ProduceTWAPOrderTypedDataInput<'TWAPOrder'>
): SignableTWAPSellOrderData;
export function produceTWAPOrderTypedData(
  params: ProduceTWAPOrderTypedDataInput<'TWAPBuyOrder'>
): SignableTWAPBuyOrderData;
export function produceTWAPOrderTypedData({
  orderInput,
  chainId,
  paraswapDeltaAddress,
  onChainOrderType,
}: ProduceTWAPOrderTypedDataInput<TWAPOnChainOrderType>) {
  const domain: Domain = {
    name: 'Portikus',
    version: '2.0.0',
    chainId,
    verifyingContract: paraswapDeltaAddress,
  };

  if (onChainOrderType === 'TWAPOrder') {
    return {
      types: TWAP_ORDER_EIP_712_TYPES,
      domain,
      data: orderInput,
    };
  }

  return {
    types: TWAP_BUY_ORDER_EIP_712_TYPES,
    domain,
    data: orderInput,
  };
}

export type TWAPOrderCommonInput = {
  owner: string;
  beneficiary?: string;
  srcToken: string;
  destToken: string;
  nonce?: string;
  deadline?: number;
  permit?: string;
  metadata?: string;
  interval: number;
  numSlices: number;
  bridge: Bridge;

  partnerAddress: string;
  paraswapDeltaAddress: string;
  partnerFeeBps: number;
  partnerTakesSurplus?: boolean;
  capSurplus?: boolean;
  chainId: number;
};

export type BuildTWAPSellOrderDataInput = TWAPOrderCommonInput & {
  onChainOrderType: 'TWAPOrder';
  destAmountPerSlice: string;
  totalSrcAmount: string;
};

export type BuildTWAPBuyOrderDataInput = TWAPOrderCommonInput & {
  onChainOrderType: 'TWAPBuyOrder';
  totalDestAmount: string;
  maxSrcAmount: string;
};

export type BuildTWAPOrderDataInput =
  | BuildTWAPSellOrderDataInput
  | BuildTWAPBuyOrderDataInput;

export function buildTWAPSignableOrderData(
  input: BuildTWAPOrderDataInput
): SignableTWAPOrderData {
  const {
    owner,
    beneficiary = owner,
    srcToken,
    destToken,
    nonce = Date.now().toString(10),
    deadline = Math.floor(Date.now() / 1000 + DELTA_DEFAULT_EXPIRY),
    permit = '0x',
    metadata = '0x',
    interval,
    numSlices,
    bridge,

    partnerAddress,
    partnerFeeBps,
    partnerTakesSurplus = false,
    capSurplus = true,
    chainId,
    paraswapDeltaAddress,
    onChainOrderType,
  } = input;

  const partnerAndFee = producePartnerAndFee({
    partnerFeeBps,
    partnerAddress,
    partnerTakesSurplus,
    capSurplus,
  });

  const commonFields = {
    owner,
    beneficiary,
    srcToken,
    destToken,
    nonce,
    partnerAndFee,
    deadline,
    interval,
    numSlices,
    permit,
    metadata,
    bridge,
  };

  if (onChainOrderType === 'TWAPOrder') {
    const orderInput: TWAPDeltaOrder = {
      ...commonFields,
      destAmountPerSlice: input.destAmountPerSlice,
      totalSrcAmount: input.totalSrcAmount,
    };

    return produceTWAPOrderTypedData({
      orderInput,
      chainId,
      paraswapDeltaAddress,
      onChainOrderType: 'TWAPOrder',
    });
  }

  const orderInput: TWAPBuyDeltaOrder = {
    ...commonFields,
    totalDestAmount: input.totalDestAmount,
    maxSrcAmount: input.maxSrcAmount,
  };

  return produceTWAPOrderTypedData({
    orderInput,
    chainId,
    paraswapDeltaAddress,
    onChainOrderType: 'TWAPBuyOrder',
  });
}
