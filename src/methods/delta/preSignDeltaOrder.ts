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
import { PreSignatureModuleAbi } from './helpers/abi';
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

export type PreSignDeltaOrder<T> = (
  signableOrderData: SignableDeltaOrderData,
  overrides?: TxSendOverrides,
  requestParams?: RequestParameters
) => Promise<T>;

export type PreSignDeltaOrderFunctions<T> = {
  /** @description Compute the EIP-712 order hash from already-built signable order data. Strips any extra fields off `data` before hashing; synchronous, no network call. */
  hashDeltaOrderTypedData: HashDeltaOrderTypedData;
  /** @description Resolve the Delta contract, build the EIP-712 typed data for the order, and return its order hash. */
  hashDeltaOrder: HashDeltaOrder;
  /** @description On-chain `setPreSignature(orderHash, true)` on the Delta contract — pre-approves an order hash so it can be filled without an EIP-712 signature. Returns whatever the `contractCaller` returns. */
  setDeltaOrderPreSignature: SetDeltaOrderPreSignature<T>;
  /** @description Hash the signable order data and pre-sign it on-chain in one call (`hashDeltaOrderTypedData` → `setDeltaOrderPreSignature`). */
  preSignDeltaOrder: PreSignDeltaOrder<T>;
};

type AvailableMethods = ExtractAbiMethodNames<typeof PreSignatureModuleAbi>;

/**
 * @description Construct on-chain pre-signing helpers for standard Delta orders:
 * order hashing (`hashDeltaOrder` / `hashDeltaOrderTypedData`) and `setPreSignature`
 * transactions (`setDeltaOrderPreSignature` / `preSignDeltaOrder`). The transact
 * methods return whatever the configured `contractCaller` returns, for versatility.
 */
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

  return {
    hashDeltaOrderTypedData,
    hashDeltaOrder,
    setDeltaOrderPreSignature,
    preSignDeltaOrder,
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
