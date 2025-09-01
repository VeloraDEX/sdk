import { assert } from 'ts-essentials';
import type { ConstructFetchInput, RequestParameters } from '../../types';
import { BridgePrice } from './getDeltaPrice';
// import { constructGetMulticallHandlers } from './getMulticallHandlers';
import {
  // getDeltaBridge,
  GetDeltaBridgeAndDestTokenOutput,
} from './helpers/across';
import { BeneficiaryType } from '../common/orders/types';
export type { SignableDeltaOrderData } from './helpers/buildDeltaOrderData';

export type BuildCrosschainOrderBridgeParams = {
  /** @description The address of the destination token on the destination chain */
  destToken: string; // lowercase
  /** @description Destination Chain ID for Crosschain Orders */
  destChainId: number;
  /** @description Whether the beneficiary is a contract. Needed to automatically fill in crosschain Bridge */
  beneficiaryType: BeneficiaryType;

  /** @description price response received from /delta/prices (getDeltaPrice method) */
  deltaPrice: BridgePrice;
};

type BuildCrosschainOrderBridge = (
  buildOrderParams: BuildCrosschainOrderBridgeParams,
  requestParams?: RequestParameters
) => Promise<GetDeltaBridgeAndDestTokenOutput>;

export { GetDeltaBridgeAndDestTokenOutput as CrosschainOrderBridgeAndChanges };

export type BuildCrosschainOrderBridgeFunctions = {
  /** @description Build Orders to be posted to Delta API for execution */
  buildCrosschainOrderBridge: BuildCrosschainOrderBridge;
};

export const constructBuildCrosschainOrderBridge = (
  options: ConstructFetchInput
): BuildCrosschainOrderBridgeFunctions => {
  const { chainId } = options;

  // cached internally for `multicall` contracts
  // const { getMulticallHandlers } = constructGetMulticallHandlers(options);

  const buildCrosschainOrderBridge: BuildCrosschainOrderBridge = async (
    { destToken, destChainId, beneficiaryType, deltaPrice },
    requestParams
  ) => {
    assert(
      chainId !== deltaPrice.bridge.destinationChainId,
      '`deltaPrice.bridge.destinationChainId` must be different from `chainId` for crosschain Order.bridge'
    );

    assert(
      destChainId === deltaPrice.bridge.destinationChainId,
      '`destChainId` must match `deltaPrice.bridge.destinationChainId` for crosschain Order.bridge'
    );

    /* const getMulticallHandler = async (chainId: number) => {
      const multicallHandlersMap = await getMulticallHandlers(requestParams);
      const multicallHandler = multicallHandlersMap[chainId];

      assert(
        multicallHandler,
        `Multicall handler not found for chain ${chainId}`
      );

      return multicallHandler;
    };

    const { bridge } = await getDeltaBridge({
      destTokenDestChain: destToken,
      destChainId,
      bridgeFee: deltaPrice.bridgeFee,
      bridgeOutputToken: deltaPrice.bridge.outputToken,
      beneficiaryType,
      getMulticallHandler,
    }); */

    // @TODO remove the whole buildCrosschainOrderBridge() when API provides BridgePrice.bridge = whole Bridge object
    const bridge = {
      protocolSelector: '0x00000000',
      scalingFactor: 0,
      protocolData: '0x',
      destinationChainId: deltaPrice.bridge.destinationChainId,
      outputToken: deltaPrice.bridge.outputToken,
    };

    return {
      bridge,
    };
  };

  return {
    buildCrosschainOrderBridge,
  };
};
