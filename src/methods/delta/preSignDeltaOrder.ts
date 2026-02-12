import { hashTypedData } from 'viem/utils';
import type {
  ConstructProviderFetchInput,
  RequestParameters,
  TxSendOverrides,
} from '../../types';
import {
  produceDeltaOrderTypedData,
  SignableDeltaOrderData,
} from './helpers/buildDeltaOrderData';
import { sanitizeDeltaOrderData } from './helpers/misc';
import type { ExtractAbiMethodNames } from '../../helpers/misc';
import { findPrimaryType } from '../../helpers/providers/helpers';
import { constructGetDeltaContract } from './getDeltaContract';
import type { DeltaAuctionOrder } from './helpers/types';

type HashDeltaOrderTypedData = (
  signableOrderData: SignableDeltaOrderData
) => string;

type HashDeltaOrder = (
  orderData: DeltaAuctionOrder,
  requestParams?: RequestParameters
) => Promise<string>;

export type SetDeltaOrderPreSignature<T> = (
  orderHash: string,
  overrides?: TxSendOverrides,
  requestParams?: RequestParameters
) => Promise<T>;

export type SetDeltaOrderDepositAndPreSignature<T> = (
  orderHash: string,
  overrides?: TxSendOverrides,
  requestParams?: RequestParameters
) => Promise<T>;

export type PreSignDeltaOrder<T> = (
  signableOrderData: SignableDeltaOrderData,
  overrides?: TxSendOverrides,
  requestParams?: RequestParameters
) => Promise<T>;

export type DepositNativeAndPreSignDeltaOrder<T> = (
  signableOrderData: SignableDeltaOrderData,
  overrides?: TxSendOverrides,
  requestParams?: RequestParameters
) => Promise<T>;

export type PreSignDeltaOrderFunctions<T> = {
  hashDeltaOrderTypedData: HashDeltaOrderTypedData;
  hashDeltaOrder: HashDeltaOrder;
  setDeltaOrderPreSignature: SetDeltaOrderPreSignature<T>;
  preSignDeltaOrder: PreSignDeltaOrder<T>;
  setDeltaOrderDepositAndPreSignature: SetDeltaOrderDepositAndPreSignature<T>;
  depositNativeAndPreSignDeltaOrder: DepositNativeAndPreSignDeltaOrder<T>;
};

const PreSignatureModuleAbi = [
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'orderHash',
        type: 'bytes32',
      },
      {
        internalType: 'bool',
        name: 'preSigned',
        type: 'bool',
      },
    ],
    name: 'setPreSignature',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'orderHash',
        type: 'bytes32',
      },
    ],
    name: 'depositNativeAndPreSign',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;

type AvailableMethods = ExtractAbiMethodNames<typeof PreSignatureModuleAbi>;

// returns whatever `contractCaller` returns
// to allow for better versatility
export const constructPreSignDeltaOrder = <T>(
  options: ConstructProviderFetchInput<T, 'transactCall'>
): PreSignDeltaOrderFunctions<T> => {
  const hashDeltaOrderTypedData: HashDeltaOrderTypedData = (typedData) => {
    // types allow to pass OrderData & extra_stuff, but tx will break like that
    const typedDataOnly: SignableDeltaOrderData = {
      ...typedData,
      data: sanitizeDeltaOrderData(typedData.data),
    };

    const orderHash = produceDeltaOrderHash(typedDataOnly);

    return orderHash;
  };
  // cached internally
  const { getDeltaContract } = constructGetDeltaContract(options);

  const hashDeltaOrder: HashDeltaOrder = async (orderData, requestParams) => {
    const ParaswapDelta = await getDeltaContract(requestParams);
    if (!ParaswapDelta) {
      throw new Error(`Delta is not available on chain ${options.chainId}`);
    }

    const typedData = produceDeltaOrderTypedData({
      orderInput: orderData,
      chainId: options.chainId,
      paraswapDeltaAddress: ParaswapDelta,
    });
    return hashDeltaOrderTypedData(typedData);
  };

  const setDeltaOrderPreSignature: SetDeltaOrderPreSignature<T> = async (
    orderHash,
    overrides = {},
    requestParams
  ) => {
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

  const setDeltaOrderDepositAndPreSignature: SetDeltaOrderDepositAndPreSignature<
    T
  > = async (orderHash, overrides = {}, requestParams) => {
    const ParaswapDelta = await getDeltaContract(requestParams);
    if (!ParaswapDelta) {
      throw new Error(`Delta is not available on chain ${options.chainId}`);
    }

    const res = await options.contractCaller.transactCall<AvailableMethods>({
      address: ParaswapDelta,
      abi: PreSignatureModuleAbi,
      contractMethod: 'depositNativeAndPreSign',
      args: [orderHash],
      overrides,
    });

    return res;
  };

  const preSignDeltaOrder: PreSignDeltaOrder<T> = async (
    signableOrderData,
    overrides = {},
    requestParams
  ) => {
    const orderHash = hashDeltaOrderTypedData(signableOrderData);
    const res = await setDeltaOrderPreSignature(
      orderHash,
      overrides,
      requestParams
    );
    return res;
  };

  const depositNativeAndPreSignDeltaOrder: DepositNativeAndPreSignDeltaOrder<
    T
  > = async (signableOrderData, overrides = {}, requestParams) => {
    const orderHash = hashDeltaOrderTypedData(signableOrderData);
    const res = await setDeltaOrderDepositAndPreSignature(
      orderHash,
      overrides,
      requestParams
    );
    return res;
  };

  return {
    hashDeltaOrderTypedData,
    hashDeltaOrder,
    setDeltaOrderPreSignature,
    preSignDeltaOrder,
    setDeltaOrderDepositAndPreSignature,
    depositNativeAndPreSignDeltaOrder,
  };
};

export function produceDeltaOrderHash(
  typedData: SignableDeltaOrderData
): string {
  return hashTypedData({
    domain: {
      name: typedData.domain.name,
      version: typedData.domain.version,
      chainId: typedData.domain.chainId,
      verifyingContract: typedData.domain.verifyingContract as `0x${string}`,
    },
    types: typedData.types,
    primaryType: findPrimaryType(typedData.types),
    message: typedData.data,
  });
}
