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
import { PreSignatureModuleAbi } from './helpers/abi';
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
  /** @description Compute the EIP-712 order hash from already-built signable External order data. Strips any extra fields off `data` before hashing; synchronous, no network call. */
  hashExternalDeltaOrderTypedData: HashExternalDeltaOrderTypedData;
  /** @description Resolve the Delta contract, build the EIP-712 typed data for the External order, and return its order hash. */
  hashExternalDeltaOrder: HashExternalDeltaOrder;
  /** @description On-chain `setPreSignature(orderHash, true)` on the Delta contract — pre-approves an External order hash so it can be filled without an EIP-712 signature. Returns whatever the `contractCaller` returns. */
  setExternalDeltaOrderPreSignature: SetExternalDeltaOrderPreSignature<T>;
  /** @description Hash the signable External order data and pre-sign it on-chain in one call (`hashExternalDeltaOrderTypedData` → `setExternalDeltaOrderPreSignature`). */
  preSignExternalDeltaOrder: PreSignExternalDeltaOrder<T>;
};

type AvailableMethods = ExtractAbiMethodNames<typeof PreSignatureModuleAbi>;

/**
 * @description Construct on-chain pre-signing helpers for External Delta orders:
 * order hashing (`hashExternalDeltaOrder` / `hashExternalDeltaOrderTypedData`) and
 * `setPreSignature` transactions (`setExternalDeltaOrderPreSignature` /
 * `preSignExternalDeltaOrder`). The transact methods return whatever the configured
 * `contractCaller` returns, for versatility.
 */
export const constructPreSignExternalDeltaOrder = <T>(
  options: ConstructProviderFetchInput<T, 'transactCall'>
): PreSignExternalDeltaOrderFunctions<T> => {
  const hashExternalDeltaOrderTypedData: HashExternalDeltaOrderTypedData = (
    typedData
  ) => {
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

  const hashExternalDeltaOrder: HashExternalDeltaOrder = async (
    orderData,
    requestParams
  ) => {
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

  const setExternalDeltaOrderPreSignature: SetExternalDeltaOrderPreSignature<
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
