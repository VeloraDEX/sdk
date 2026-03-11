import { hashTypedData } from 'viem/utils';
import type {
  ConstructProviderFetchInput,
  RequestParameters,
  TxSendOverrides,
} from '../../types';
import {
  produceExternalOrderTypedData,
  SignableExternalOrderData,
} from './helpers/buildExternalOrderData';
import { sanitizeExternalOrderData } from './helpers/misc';
import type { ExtractAbiMethodNames } from '../../helpers/misc';
import { findPrimaryType } from '../../helpers/providers/helpers';
import { constructGetDeltaContract } from './getDeltaContract';
import type { ExternalDeltaOrder } from './helpers/types';

type HashExternalDeltaOrderTypedData = (
  signableOrderData: SignableExternalOrderData
) => string;

type HashExternalDeltaOrder = (
  orderData: ExternalDeltaOrder,
  requestParams?: RequestParameters
) => Promise<string>;

export type SetExternalDeltaOrderPreSignature<T> = (
  orderHash: string,
  overrides?: TxSendOverrides,
  requestParams?: RequestParameters
) => Promise<T>;

export type PreSignExternalDeltaOrder<T> = (
  signableOrderData: SignableExternalOrderData,
  overrides?: TxSendOverrides,
  requestParams?: RequestParameters
) => Promise<T>;

export type PreSignExternalDeltaOrderFunctions<T> = {
  hashExternalDeltaOrderTypedData: HashExternalDeltaOrderTypedData;
  hashExternalDeltaOrder: HashExternalDeltaOrder;
  setExternalDeltaOrderPreSignature: SetExternalDeltaOrderPreSignature<T>;
  preSignExternalDeltaOrder: PreSignExternalDeltaOrder<T>;
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
] as const;

type AvailableMethods = ExtractAbiMethodNames<typeof PreSignatureModuleAbi>;

// returns whatever `contractCaller` returns
// to allow for better versatility
export const constructPreSignExternalDeltaOrder = <T>(
  options: ConstructProviderFetchInput<T, 'transactCall'>
): PreSignExternalDeltaOrderFunctions<T> => {
  const hashExternalDeltaOrderTypedData: HashExternalDeltaOrderTypedData = (typedData) => {
    // types allow to pass OrderData & extra_stuff, but tx will break like that
    const typedDataOnly: SignableExternalOrderData = {
      ...typedData,
      data: sanitizeExternalOrderData(typedData.data),
    };

    const orderHash = produceExternalOrderHash(typedDataOnly);

    return orderHash;
  };
  // cached internally
  const { getDeltaContract } = constructGetDeltaContract(options);

  const hashExternalDeltaOrder: HashExternalDeltaOrder = async (orderData, requestParams) => {
    const ParaswapDelta = await getDeltaContract(requestParams);
    if (!ParaswapDelta) {
      throw new Error(`Delta is not available on chain ${options.chainId}`);
    }

    const typedData = produceExternalOrderTypedData({
      orderInput: orderData,
      chainId: options.chainId,
      paraswapDeltaAddress: ParaswapDelta,
    });
    return hashExternalDeltaOrderTypedData(typedData);
  };

  const setExternalDeltaOrderPreSignature: SetExternalDeltaOrderPreSignature<T> = async (
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

  const preSignExternalDeltaOrder: PreSignExternalDeltaOrder<T> = async (
    signableOrderData,
    overrides = {},
    requestParams
  ) => {
    const orderHash = hashExternalDeltaOrderTypedData(signableOrderData);
    const res = await setExternalDeltaOrderPreSignature(
      orderHash,
      overrides,
      requestParams
    );
    return res;
  };

  return {
    hashExternalDeltaOrderTypedData,
    hashExternalDeltaOrder,
    setExternalDeltaOrderPreSignature,
    preSignExternalDeltaOrder,
  };
};

export function produceExternalOrderHash(
  typedData: SignableExternalOrderData
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
