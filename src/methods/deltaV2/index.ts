import type { ConstructProviderFetchInput } from '../../types';
import type { OnChainOrderMap } from '../delta/helpers/types';
import type { DeltaAuction } from './types';

// reused v1 modules
import {
  GetDeltaContractFunctions,
  constructGetDeltaContract,
} from '../delta/getDeltaContract';
import {
  constructGetPartnerFee,
  GetPartnerFeeFunctions,
} from '../delta/getPartnerFee';
import {
  ApproveTokenForDeltaFunctions,
  constructApproveTokenForDelta,
} from '../delta/approveForDelta';
import {
  constructPreSignDeltaOrder,
  PreSignDeltaOrderFunctions,
} from '../delta/preSignDeltaOrder';
import {
  constructPreSignExternalDeltaOrder,
  PreSignExternalDeltaOrderFunctions,
} from '../delta/preSignExternalDeltaOrder';
import {
  constructPreSignTWAPDeltaOrder,
  PreSignTWAPDeltaOrderFunctions,
} from '../delta/preSignTWAPDeltaOrder';
import {
  DeltaTokenModuleFunctions,
  constructDeltaTokenModule,
} from '../delta/deltaTokenModule';

// new v2 modules
import {
  BuildDeltaOrderFunctions,
  BuildDeltaOrderParams,
  BuiltDeltaOrder,
  constructBuildDeltaOrder,
} from './buildDeltaOrder';
import {
  BuildExternalDeltaOrderFunctions,
  BuildExternalDeltaOrderParams,
  constructBuildExternalDeltaOrder,
} from './buildExternalDeltaOrder';
import {
  BuildTWAPDeltaOrderFunctions,
  BuildTWAPDeltaOrderParams,
  constructBuildTWAPDeltaOrder,
} from './buildTWAPDeltaOrder';
import {
  constructPostDeltaOrder,
  DeltaOrderToPost,
  PostDeltaOrderFunctions,
} from './postDeltaOrder';
import {
  constructPostExternalDeltaOrder,
  PostExternalDeltaOrderFunctions,
} from './postExternalDeltaOrder';
import {
  constructPostTWAPDeltaOrder,
  PostTWAPDeltaOrderFunctions,
} from './postTWAPDeltaOrder';
import {
  constructGetDeltaPrice,
  GetDeltaPriceFunctions,
} from './getDeltaPrice';
import {
  constructGetDeltaOrders,
  GetDeltaOrdersFunctions,
} from './getDeltaOrders';
import {
  constructGetBridgeRoutes,
  GetBridgeRoutesFunctions,
} from './getBridgeRoutes';
import {
  constructIsTokenSupportedInDelta,
  IsTokenSupportedInDeltaFunctions,
} from './isTokenSupportedInDelta';
import {
  CancelDeltaOrderFunctions,
  constructCancelDeltaOrder,
} from './cancelDeltaOrder';
import {
  constructGetAgentsList,
  GetAgentsListFunctions,
} from './getAgentsList';

// Re-export public surface so `import * as DeltaV2` carries everything.
export * from './types';
export * from './buildDeltaOrder';
export * from './buildExternalDeltaOrder';
export * from './buildTWAPDeltaOrder';
export * from './postDeltaOrder';
export * from './postExternalDeltaOrder';
export * from './postTWAPDeltaOrder';
export * from './getDeltaPrice';
export * from './getDeltaOrders';
export * from './getBridgeRoutes';
export * from './isTokenSupportedInDelta';
export * from './cancelDeltaOrder';
export * from './getAgentsList';

// ── Sign v2 ─────────────────────────────────────────────────────────────────

type SignDeltaOrder = (builtOrder: BuiltDeltaOrder) => Promise<string>;

export type SignDeltaOrderFunctions = {
  /** @description Sign a BuiltDeltaOrder (any order type) using EIP-712 typed data. */
  signDeltaOrder: SignDeltaOrder;
};

export const constructSignDeltaOrder = (
  options: Pick<
    ConstructProviderFetchInput<any, 'signTypedDataCall'>,
    'contractCaller'
  >
): SignDeltaOrderFunctions => {
  const signDeltaOrder: SignDeltaOrder = async (builtOrder) => {
    return options.contractCaller.signTypedDataCall({
      types: builtOrder.toSign.types,
      domain: builtOrder.toSign.domain,
      data: builtOrder.toSign.value,
    });
  };
  return { signDeltaOrder };
};

// ── Submit orchestrators ─────────────────────────────────────────────────────

export type SubmitDeltaOrderParams = BuildDeltaOrderParams & {
  /** @description Referrer address */
  referrerAddress?: string;
  degenMode?: boolean;
} & Pick<DeltaOrderToPost, 'type' | 'includeAgents' | 'excludeAgents'>;

type SubmitDeltaOrder = (
  orderParams: SubmitDeltaOrderParams
) => Promise<DeltaAuction<'Order'>>;

export type SubmitDeltaOrderFuncs = {
  submitDeltaOrder: SubmitDeltaOrder;
};

export const constructSubmitDeltaOrder = (
  options: ConstructProviderFetchInput<any, 'signTypedDataCall'>
): SubmitDeltaOrderFuncs => {
  const { buildDeltaOrder } = constructBuildDeltaOrder(options);
  const { signDeltaOrder } = constructSignDeltaOrder(options);
  const { postDeltaOrder } = constructPostDeltaOrder(options);

  const submitDeltaOrder: SubmitDeltaOrder = async (orderParams) => {
    const orderData = await buildDeltaOrder(orderParams);
    const signature = await signDeltaOrder(orderData);

    return postDeltaOrder({
      signature,
      partner: orderParams.partner,
      order: orderData.toSign.value as OnChainOrderMap['Order'],
      partiallyFillable: orderParams.partiallyFillable,
      referrerAddress: orderParams.referrerAddress,
      type: orderParams.type,
      includeAgents: orderParams.includeAgents,
      excludeAgents: orderParams.excludeAgents,
      degenMode: orderParams.degenMode,
    });
  };

  return { submitDeltaOrder };
};

export type SubmitExternalDeltaOrderParams = BuildExternalDeltaOrderParams & {
  referrerAddress?: string;
} & Pick<DeltaOrderToPost, 'type' | 'includeAgents' | 'excludeAgents'>;

type SubmitExternalDeltaOrder = (
  orderParams: SubmitExternalDeltaOrderParams
) => Promise<DeltaAuction<'ExternalOrder'>>;

export type SubmitExternalDeltaOrderFuncs = {
  submitExternalDeltaOrder: SubmitExternalDeltaOrder;
};

export const constructSubmitExternalDeltaOrder = (
  options: ConstructProviderFetchInput<any, 'signTypedDataCall'>
): SubmitExternalDeltaOrderFuncs => {
  const { buildExternalDeltaOrder } = constructBuildExternalDeltaOrder(options);
  const { signDeltaOrder } = constructSignDeltaOrder(options);
  const { postExternalDeltaOrder } = constructPostExternalDeltaOrder(options);

  const submitExternalDeltaOrder: SubmitExternalDeltaOrder = async (
    orderParams
  ) => {
    const orderData = await buildExternalDeltaOrder(orderParams);
    const signature = await signDeltaOrder(orderData);

    return postExternalDeltaOrder({
      signature,
      partner: orderParams.partner,
      order: orderData.toSign.value as OnChainOrderMap['ExternalOrder'],
      partiallyFillable: orderParams.partiallyFillable,
      referrerAddress: orderParams.referrerAddress,
      type: orderParams.type,
      includeAgents: orderParams.includeAgents,
      excludeAgents: orderParams.excludeAgents,
    });
  };

  return { submitExternalDeltaOrder };
};

export type SubmitTWAPDeltaOrderParams = BuildTWAPDeltaOrderParams & {
  referrerAddress?: string;
  degenMode?: boolean;
} & Pick<DeltaOrderToPost, 'type' | 'includeAgents' | 'excludeAgents'>;

type SubmitTWAPDeltaOrder = (
  orderParams: SubmitTWAPDeltaOrderParams
) => Promise<DeltaAuction<'TWAPOrder'> | DeltaAuction<'TWAPBuyOrder'>>;

export type SubmitTWAPDeltaOrderFuncs = {
  submitTWAPDeltaOrder: SubmitTWAPDeltaOrder;
};

export const constructSubmitTWAPDeltaOrder = (
  options: ConstructProviderFetchInput<any, 'signTypedDataCall'>
): SubmitTWAPDeltaOrderFuncs => {
  const { buildTWAPDeltaOrder } = constructBuildTWAPDeltaOrder(options);
  const { signDeltaOrder } = constructSignDeltaOrder(options);
  const { postTWAPDeltaOrder } = constructPostTWAPDeltaOrder(options);

  const submitTWAPDeltaOrder: SubmitTWAPDeltaOrder = async (orderParams) => {
    const orderData = await buildTWAPDeltaOrder(orderParams);
    const signature = await signDeltaOrder(orderData);

    return postTWAPDeltaOrder({
      signature,
      partner: orderParams.partner,
      order: orderData.toSign.value as
        | OnChainOrderMap['TWAPOrder']
        | OnChainOrderMap['TWAPBuyOrder'],
      onChainOrderType: orderParams.onChainOrderType,
      partiallyFillable: orderParams.partiallyFillable,
      referrerAddress: orderParams.referrerAddress,
      type: orderParams.type,
      includeAgents: orderParams.includeAgents,
      excludeAgents: orderParams.excludeAgents,
      degenMode: orderParams.degenMode,
    });
  };

  return { submitTWAPDeltaOrder };
};

// ── Handler bundle ───────────────────────────────────────────────────────────

export type DeltaOrderHandlers<TxResponse> = SubmitDeltaOrderFuncs &
  SubmitExternalDeltaOrderFuncs &
  SubmitTWAPDeltaOrderFuncs &
  BuildDeltaOrderFunctions &
  BuildExternalDeltaOrderFunctions &
  BuildTWAPDeltaOrderFunctions &
  PostDeltaOrderFunctions &
  PostExternalDeltaOrderFunctions &
  PostTWAPDeltaOrderFunctions &
  SignDeltaOrderFunctions &
  PreSignDeltaOrderFunctions<TxResponse> &
  PreSignExternalDeltaOrderFunctions<TxResponse> &
  PreSignTWAPDeltaOrderFunctions<TxResponse> &
  GetDeltaPriceFunctions &
  GetDeltaOrdersFunctions &
  GetBridgeRoutesFunctions &
  IsTokenSupportedInDeltaFunctions &
  GetAgentsListFunctions &
  GetDeltaContractFunctions &
  GetPartnerFeeFunctions &
  ApproveTokenForDeltaFunctions<TxResponse> &
  DeltaTokenModuleFunctions<TxResponse> &
  CancelDeltaOrderFunctions;

/** @description Construct an SDK bundle exposing every Delta v2 method (queries, build/sign/post, on-chain helpers). */
export const constructAllDeltaOrdersHandlers = <TxResponse>(
  options: ConstructProviderFetchInput<
    TxResponse,
    'signTypedDataCall' | 'transactCall'
  >
): DeltaOrderHandlers<TxResponse> => {
  return {
    ...constructSubmitDeltaOrder(options),
    ...constructSubmitExternalDeltaOrder(options),
    ...constructSubmitTWAPDeltaOrder(options),
    ...constructBuildDeltaOrder(options),
    ...constructBuildExternalDeltaOrder(options),
    ...constructBuildTWAPDeltaOrder(options),
    ...constructPostDeltaOrder(options),
    ...constructPostExternalDeltaOrder(options),
    ...constructPostTWAPDeltaOrder(options),
    ...constructSignDeltaOrder(options),
    ...constructPreSignDeltaOrder(options),
    ...constructPreSignExternalDeltaOrder(options),
    ...constructPreSignTWAPDeltaOrder(options),
    ...constructGetDeltaPrice(options),
    ...constructGetDeltaOrders(options),
    ...constructGetBridgeRoutes(options),
    ...constructIsTokenSupportedInDelta(options),
    ...constructGetAgentsList(options),
    ...constructGetDeltaContract(options),
    ...constructGetPartnerFee(options),
    ...constructApproveTokenForDelta(options),
    ...constructDeltaTokenModule(options),
    ...constructCancelDeltaOrder(options),
  };
};
