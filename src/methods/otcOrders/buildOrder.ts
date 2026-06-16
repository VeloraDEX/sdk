import { DEFAULT_VERSION } from '../../constants';
import type { ConstructFetchInput, RequestParameters } from '../../types';
import { constructGetSpender } from '../swap/spender';
import {
  buildOrderData,
  BuildOrderDataInput,
  SignableOrderData,
} from './helpers/buildOrderData';
export * from './helpers/buildOrderData';

export type BuildOTCOrderInput = Omit<
  BuildOrderDataInput,
  'chainId' | 'verifyingContract' | 'AugustusAddress' | 'AppVersion'
>;

type BuildOTCOrder = (
  buildOTCOrderParams: BuildOTCOrderInput,
  requestParams?: RequestParameters
) => Promise<SignableOrderData>;

export type BuildOTCOrderFunctions = {
  /** @description Build Orders that will be excuted through AugustusSwapper */
  buildOTCOrder: BuildOTCOrder;
};

export const constructBuildOTCOrder = (
  options: ConstructFetchInput
): BuildOTCOrderFunctions => {
  const { chainId } = options;

  // getContracts is cached internally for the same instance of SDK
  // so should persist across same apiUrl & network
  const { getContracts } = constructGetSpender(options);

  const buildOTCOrder: BuildOTCOrder = async (
    buildOTCOrderParams,
    requestParams
  ) => {
    const { AugustusSwapper: AugustusAddress, AugustusRFQ: verifyingContract } =
      await getContracts(requestParams);

    const AppVersion = options.version ?? DEFAULT_VERSION;

    return buildOrderData({
      ...buildOTCOrderParams,
      chainId,
      verifyingContract,
      AugustusAddress,
      AppVersion,
    });
  };

  return {
    buildOTCOrder,
  };
};
