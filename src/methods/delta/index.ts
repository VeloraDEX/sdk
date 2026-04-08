import type { ConstructProviderFetchInput } from '../../types';
import type { DeltaAuction } from './helpers/types';
import {
  BuildDeltaOrderDataParams,
  BuildDeltaOrderFunctions,
  constructBuildDeltaOrder,
} from './buildDeltaOrder';
import {
  constructPostDeltaOrder,
  DeltaOrderToPost,
  PostDeltaOrderFunctions,
} from './postDeltaOrder';
import {
  constructSignDeltaOrder,
  SignDeltaOrderFunctions,
} from './signDeltaOrder';
import {
  GetDeltaContractFunctions,
  constructGetDeltaContract,
} from './getDeltaContract';
import {
  constructGetDeltaPrice,
  GetDeltaPriceFunctions,
} from './getDeltaPrice';
import {
  constructGetDeltaOrders,
  GetDeltaOrdersFunctions,
} from './getDeltaOrders';
import {
  constructGetPartnerFee,
  GetPartnerFeeFunctions,
} from './getPartnerFee';
import {
  ApproveTokenForDeltaFunctions,
  constructApproveTokenForDelta,
} from './approveForDelta';
import {
  constructGetBridgeInfo,
  GetBridgeInfoFunctions,
} from './getBridgeInfo';
import {
  constructIsTokenSupportedInDelta,
  IsTokenSupportedInDeltaFunctions,
} from './isTokenSupportedInDelta';
import {
  CancelDeltaOrderFunctions,
  constructCancelDeltaOrder,
} from './cancelDeltaOrder';
import {
  constructPreSignDeltaOrder,
  PreSignDeltaOrderFunctions,
} from './preSignDeltaOrder';
import {
  DeltaTokenModuleFunctions,
  constructDeltaTokenModule,
} from './deltaTokenModule';
import {
  BuildExternalDeltaOrderParams,
  BuildExternalDeltaOrderFunctions,
  constructBuildExternalDeltaOrder,
} from './buildExternalDeltaOrder';
import {
  constructSignExternalDeltaOrder,
  SignExternalDeltaOrderFunctions,
} from './signExternalDeltaOrder';
import {
  constructPostExternalDeltaOrder,
  PostExternalDeltaOrderFunctions,
} from './postExternalDeltaOrder';
import {
  constructPreSignExternalDeltaOrder,
  PreSignExternalDeltaOrderFunctions,
} from './preSignExternalDeltaOrder';
import {
  BuildTWAPDeltaOrderParams,
  BuildTWAPDeltaOrderFunctions,
  constructBuildTWAPDeltaOrder,
} from './buildTWAPDeltaOrder';
import {
  constructSignTWAPDeltaOrder,
  SignTWAPDeltaOrderFunctions,
} from './signTWAPDeltaOrder';
import {
  constructPostTWAPDeltaOrder,
  PostTWAPDeltaOrderFunctions,
} from './postTWAPDeltaOrder';
import {
  constructPreSignTWAPDeltaOrder,
  PreSignTWAPDeltaOrderFunctions,
} from './preSignTWAPDeltaOrder';

export type SubmitDeltaOrderParams = BuildDeltaOrderDataParams & {
  /** @description designates the Order as being able to be partially filled, as opposed to fill-or-kill */
  partiallyFillable?: boolean;
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
  // in the normal submitOrderFlow preSign tx is not involved
  const { signDeltaOrder } = constructSignDeltaOrder(options);
  const { postDeltaOrder } = constructPostDeltaOrder(options);

  const submitDeltaOrder: SubmitDeltaOrder = async (orderParams) => {
    const orderData = await buildDeltaOrder(orderParams);
    const signature = await signDeltaOrder(orderData);

    const response = await postDeltaOrder({
      signature,
      partner: orderParams.partner,
      order: orderData.data,
      partiallyFillable: orderParams.partiallyFillable,
      referrerAddress: orderParams.referrerAddress,
      type: orderParams.type,
      includeAgents: orderParams.includeAgents,
      excludeAgents: orderParams.excludeAgents,
      degenMode: orderParams.degenMode,
    });

    return response;
  };

  return { submitDeltaOrder };
};

export type SubmitExternalDeltaOrderParams = BuildExternalDeltaOrderParams & {
  /** @description designates the Order as being able to be partially filled, as opposed to fill-or-kill */
  partiallyFillable?: boolean;
  /** @description Referrer address */
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
  const { signExternalDeltaOrder } = constructSignExternalDeltaOrder(options);
  const { postExternalDeltaOrder } = constructPostExternalDeltaOrder(options);

  const submitExternalDeltaOrder: SubmitExternalDeltaOrder = async (
    orderParams
  ) => {
    const orderData = await buildExternalDeltaOrder(orderParams);
    const signature = await signExternalDeltaOrder(orderData);

    const response = await postExternalDeltaOrder({
      signature,
      partner: orderParams.partner,
      order: orderData.data,
      partiallyFillable: orderParams.partiallyFillable,
      referrerAddress: orderParams.referrerAddress,
      type: orderParams.type,
      includeAgents: orderParams.includeAgents,
      excludeAgents: orderParams.excludeAgents,
    });

    return response;
  };

  return { submitExternalDeltaOrder };
};

export type SubmitTWAPDeltaOrderParams = BuildTWAPDeltaOrderParams & {
  /** @description designates the Order as being able to be partially filled, as opposed to fill-or-kill */
  partiallyFillable?: boolean;
  /** @description Referrer address */
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
  const { signTWAPDeltaOrder } = constructSignTWAPDeltaOrder(options);
  const { postTWAPDeltaOrder } = constructPostTWAPDeltaOrder(options);

  const submitTWAPDeltaOrder: SubmitTWAPDeltaOrder = async (orderParams) => {
    const orderData = await buildTWAPDeltaOrder(orderParams);
    const signature = await signTWAPDeltaOrder(orderData);

    const response = await postTWAPDeltaOrder({
      signature,
      partner: orderParams.partner,
      order: orderData.data,
      onChainOrderType: orderParams.onChainOrderType,
      partiallyFillable: orderParams.partiallyFillable,
      referrerAddress: orderParams.referrerAddress,
      type: orderParams.type,
      includeAgents: orderParams.includeAgents,
      excludeAgents: orderParams.excludeAgents,
      degenMode: orderParams.degenMode,
    });

    return response;
  };

  return { submitTWAPDeltaOrder };
};

export type DeltaOrderHandlers<T> = SubmitDeltaOrderFuncs &
  ApproveTokenForDeltaFunctions<T> &
  BuildDeltaOrderFunctions &
  GetDeltaOrdersFunctions &
  GetDeltaPriceFunctions &
  GetDeltaContractFunctions &
  GetPartnerFeeFunctions &
  GetBridgeInfoFunctions &
  IsTokenSupportedInDeltaFunctions &
  PostDeltaOrderFunctions &
  SignDeltaOrderFunctions &
  PreSignDeltaOrderFunctions<T> &
  CancelDeltaOrderFunctions &
  DeltaTokenModuleFunctions<T> &
  SubmitExternalDeltaOrderFuncs &
  BuildExternalDeltaOrderFunctions &
  SignExternalDeltaOrderFunctions &
  PostExternalDeltaOrderFunctions &
  PreSignExternalDeltaOrderFunctions<T> &
  SubmitTWAPDeltaOrderFuncs &
  BuildTWAPDeltaOrderFunctions &
  SignTWAPDeltaOrderFunctions &
  PostTWAPDeltaOrderFunctions &
  PreSignTWAPDeltaOrderFunctions<T>;

/** @description construct SDK with every Delta Order-related method, fetching from API and Order signing */
export const constructAllDeltaOrdersHandlers = <TxResponse>(
  options: ConstructProviderFetchInput<
    TxResponse,
    'signTypedDataCall' | 'transactCall'
  >
): DeltaOrderHandlers<TxResponse> => {
  const deltaOrdersGetters = constructGetDeltaOrders(options);
  const deltaOrdersContractGetter = constructGetDeltaContract(options);
  const deltaPrice = constructGetDeltaPrice(options);

  const partnerFee = constructGetPartnerFee(options);
  const bridgeInfo = constructGetBridgeInfo(options);
  const isTokenSupportedInDelta = constructIsTokenSupportedInDelta(options);

  const approveTokenForDelta = constructApproveTokenForDelta(options);

  const deltaOrdersSubmit = constructSubmitDeltaOrder(options);

  const deltaOrdersBuild = constructBuildDeltaOrder(options);
  const deltaOrdersSign = constructSignDeltaOrder(options);
  const deltaOrdersPreSign = constructPreSignDeltaOrder(options);
  const deltaOrdersPost = constructPostDeltaOrder(options);

  const deltaOrdersCancel = constructCancelDeltaOrder(options);

  const deltaTokenModule = constructDeltaTokenModule(options);

  const externalDeltaOrdersSubmit = constructSubmitExternalDeltaOrder(options);
  const externalDeltaOrdersBuild = constructBuildExternalDeltaOrder(options);
  const externalDeltaOrdersSign = constructSignExternalDeltaOrder(options);
  const externalDeltaOrdersPost = constructPostExternalDeltaOrder(options);
  const externalDeltaOrdersPreSign =
    constructPreSignExternalDeltaOrder(options);

  const twapDeltaOrdersSubmit = constructSubmitTWAPDeltaOrder(options);
  const twapDeltaOrdersBuild = constructBuildTWAPDeltaOrder(options);
  const twapDeltaOrdersSign = constructSignTWAPDeltaOrder(options);
  const twapDeltaOrdersPost = constructPostTWAPDeltaOrder(options);
  const twapDeltaOrdersPreSign = constructPreSignTWAPDeltaOrder(options);

  return {
    ...deltaOrdersGetters,
    ...deltaOrdersContractGetter,
    ...deltaPrice,
    ...partnerFee,
    ...bridgeInfo,
    ...isTokenSupportedInDelta,
    ...approveTokenForDelta,
    ...deltaOrdersSubmit,
    ...deltaOrdersBuild,
    ...deltaOrdersSign,
    ...deltaOrdersPreSign,
    ...deltaOrdersPost,
    ...deltaOrdersCancel,
    ...deltaTokenModule,
    ...externalDeltaOrdersSubmit,
    ...externalDeltaOrdersBuild,
    ...externalDeltaOrdersSign,
    ...externalDeltaOrdersPost,
    ...externalDeltaOrdersPreSign,
    ...twapDeltaOrdersSubmit,
    ...twapDeltaOrdersBuild,
    ...twapDeltaOrdersSign,
    ...twapDeltaOrdersPost,
    ...twapDeltaOrdersPreSign,
  };
};
