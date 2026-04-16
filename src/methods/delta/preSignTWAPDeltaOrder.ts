import { hashTypedData } from 'viem/utils';
import type {
  ConstructProviderFetchInput,
  RequestParameters,
  TxSendOverrides,
} from '../../types';
import {
  produceTWAPOrderTypedData,
  SignableTWAPOrderData,
} from './helpers/buildTWAPOrderData';
import { sanitizeTWAPOrderData } from './helpers/misc';
import { PreSignatureModuleAbi } from './helpers/abi';
import type { ExtractAbiMethodNames } from '../../helpers/misc';
import { findPrimaryType } from '../../helpers/providers/helpers';
import { constructGetDeltaContract } from './getDeltaContract';
import type { TWAPDeltaOrder, TWAPBuyDeltaOrder } from './helpers/types';
import { TypedDataField } from '../common/orders/buildOrderData';

type HashTWAPDeltaOrderTypedData = (
  signableOrderData: SignableTWAPOrderData
) => string;

type HashTWAPDeltaOrder = {
  (
    orderData: TWAPDeltaOrder,
    onChainOrderType: 'TWAPOrder',
    requestParams?: RequestParameters
  ): Promise<string>;

  (
    orderData: TWAPBuyDeltaOrder,
    onChainOrderType: 'TWAPBuyOrder',
    requestParams?: RequestParameters
  ): Promise<string>;
};

export type SetTWAPDeltaOrderPreSignature<T> = (
  orderHash: string,
  overrides?: TxSendOverrides,
  requestParams?: RequestParameters
) => Promise<T>;

export type PreSignTWAPDeltaOrder<T> = (
  signableOrderData: SignableTWAPOrderData,
  overrides?: TxSendOverrides,
  requestParams?: RequestParameters
) => Promise<T>;

export type PreSignTWAPDeltaOrderFunctions<T> = {
  hashTWAPDeltaOrderTypedData: HashTWAPDeltaOrderTypedData;
  hashTWAPDeltaOrder: HashTWAPDeltaOrder;
  setTWAPDeltaOrderPreSignature: SetTWAPDeltaOrderPreSignature<T>;
  preSignTWAPDeltaOrder: PreSignTWAPDeltaOrder<T>;
};

type AvailableMethods = ExtractAbiMethodNames<typeof PreSignatureModuleAbi>;

export const constructPreSignTWAPDeltaOrder = <T>(
  options: ConstructProviderFetchInput<T, 'transactCall'>
): PreSignTWAPDeltaOrderFunctions<T> => {
  const hashTWAPDeltaOrderTypedData: HashTWAPDeltaOrderTypedData = (
    typedData
  ) => {
    const typedDataOnly = {
      ...typedData,
      data: sanitizeTWAPOrderData(typedData.data),
    } as SignableTWAPOrderData;

    const orderHash = produceTWAPOrderHash(typedDataOnly);

    return orderHash;
  };

  const { getDeltaContract } = constructGetDeltaContract(options);

  const hashTWAPDeltaOrder: HashTWAPDeltaOrder = async (
    orderData,
    onChainOrderType,
    requestParams
  ) => {
    const ParaswapDelta = await getDeltaContract(requestParams);
    if (!ParaswapDelta) {
      throw new Error(`Delta is not available on chain ${options.chainId}`);
    }

    // TwapOrder (SELL)
    if (onChainOrderType === 'TWAPOrder' && 'totalSrcAmount' in orderData) {
      const typedData = produceTWAPOrderTypedData({
        orderInput: orderData,
        chainId: options.chainId,
        paraswapDeltaAddress: ParaswapDelta,
        onChainOrderType,
      });
      return hashTWAPDeltaOrderTypedData(typedData);
    }

    // TWAPBuyOrder (BUY)
    if (onChainOrderType === 'TWAPBuyOrder' && 'maxSrcAmount' in orderData) {
      const typedData = produceTWAPOrderTypedData({
        orderInput: orderData,
        chainId: options.chainId,
        paraswapDeltaAddress: ParaswapDelta,
        onChainOrderType,
      });
      return hashTWAPDeltaOrderTypedData(typedData);
    }

    throw new Error(
      `Invalid order data for onChainOrderType ${onChainOrderType}`
    );
  };

  const setTWAPDeltaOrderPreSignature: SetTWAPDeltaOrderPreSignature<
    T
  > = async (orderHash, overrides = {}, requestParams) => {
    const ParaswapDelta = await getDeltaContract(requestParams);
    if (!ParaswapDelta) {
      throw new Error(`Delta is not available on chain ${options.chainId}`);
    }

    const res = await options.contractCaller.transactCall<AvailableMethods>({
      address: ParaswapDelta,
      abi: PreSignatureModuleAbi,
      contractMethod: 'setPreSignature',
      args: [orderHash, true],
      overrides,
    });

    return res;
  };

  const preSignTWAPDeltaOrder: PreSignTWAPDeltaOrder<T> = async (
    signableOrderData,
    overrides = {},
    requestParams
  ) => {
    const orderHash = hashTWAPDeltaOrderTypedData(signableOrderData);
    const res = await setTWAPDeltaOrderPreSignature(
      orderHash,
      overrides,
      requestParams
    );
    return res;
  };

  return {
    hashTWAPDeltaOrderTypedData,
    hashTWAPDeltaOrder,
    setTWAPDeltaOrderPreSignature,
    preSignTWAPDeltaOrder,
  };
};

export function produceTWAPOrderHash(typedData: SignableTWAPOrderData): string {
  const types = typedData.types as Record<
    'TWAPOrder' | 'TWAPBuyOrder' | 'Bridge',
    TypedDataField[]
  >;
  return hashTypedData({
    domain: {
      name: typedData.domain.name,
      version: typedData.domain.version,
      chainId: typedData.domain.chainId,
      verifyingContract: typedData.domain.verifyingContract as `0x${string}`,
    },
    types,
    primaryType: findPrimaryType(types),
    message: typedData.data,
  });
}
