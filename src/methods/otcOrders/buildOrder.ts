import { DEFAULT_VERSION } from '../../constants';
import type { ConstructFetchInput, RequestParameters } from '../../types';
import { constructGetSpender } from '../swap/spender';
import {
  buildOrderData,
  BuildOrderDataInput,
  SignableOrderData,
} from './helpers/buildOrderData';
export * from './helpers/buildOrderData';

/** @deprecated Limit Orders are deprecated and will be removed in a future version. */
export type BuildLimitOrderInput = Omit<
  BuildOrderDataInput,
  'chainId' | 'verifyingContract' | 'AugustusAddress' | 'AppVersion'
>;

type BuildLimitOrder = (
  buildLimitOrderParams: BuildLimitOrderInput,
  requestParams?: RequestParameters
) => Promise<SignableOrderData>;

/** @deprecated Limit Orders are deprecated and will be removed in a future version. */
export type BuildLimitOrderFunctions = {
  /** @description Build Orders that will be excuted through AugustusSwapper */
  buildLimitOrder: BuildLimitOrder;
};

/** @deprecated Limit Orders are deprecated and will be removed in a future version. */
export const constructBuildLimitOrder = (
  options: ConstructFetchInput
): BuildLimitOrderFunctions => {
  const { chainId } = options;

  // getContracts is cached internally for the same instance of SDK
  // so should persist across same apiUrl & network
  const { getContracts } = constructGetSpender(options);

  const buildLimitOrder: BuildLimitOrder = async (
    buildLimitOrderParams,
    requestParams
  ) => {
    const { AugustusSwapper: AugustusAddress, AugustusRFQ: verifyingContract } =
      await getContracts(requestParams);

    const AppVersion = options.version ?? DEFAULT_VERSION;

    return buildOrderData({
      ...buildLimitOrderParams,
      chainId,
      verifyingContract,
      AugustusAddress,
      AppVersion,
    });
  };

  return {
    buildLimitOrder,
  };
};
