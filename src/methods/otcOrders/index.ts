import type {
  ConstructProviderFetchInput,
  RequestParameters,
} from '../../types';
import type { OTCOrderToPost, OTCOrderFromApi } from './helpers/types';
import {
  BuildOTCOrderFunctions,
  BuildOTCOrderInput,
  constructBuildOTCOrder,
} from './buildOrder';
import {
  CancelOTCOrderFunctions,
  constructCancelOTCOrder,
} from './cancelOrder';
import { constructGetOTCOrders, GetOTCOrdersFunctions } from './getOrders';
import { constructPostOTCOrder, PostOTCOrderFunctions } from './postOrder';
import { constructSignOTCOrder, SignOTCOrderFunctions } from './signOrder';
import {
  constructApproveTokenForOTCOrder,
  ApproveTokenForOTCOrderFunctions,
} from './approveForOrder';
import {
  GetOTCOrdersContractFunctions,
  constructGetOTCOrdersContract,
} from './getOrdersContract';
import {
  BuildOTCOrdersTxFunctions,
  constructBuildOTCOrderTx,
} from './transaction';
import type { Address } from '@paraswap/core';
import {
  FillOTCOrderFunctions,
  constructFillOTCOrder,
} from './fillOrderDirectly';

type SubmitOTCOrder = (
  buildOTCOrderParams: BuildOTCOrderInput & { taker: Address },
  extra?: { permitMakerAsset?: string },
  requestParams?: RequestParameters
) => Promise<OTCOrderFromApi>;

export type SubmitOTCOrderFuncs = {
  submitOTCOrder: SubmitOTCOrder;
};

export const constructSubmitOTCOrder = (
  options: ConstructProviderFetchInput<any, 'signTypedDataCall'>
): SubmitOTCOrderFuncs => {
  const { buildOTCOrder } = constructBuildOTCOrder(options);
  const { signOTCOrder } = constructSignOTCOrder(options);
  const { postOTCOrder } = constructPostOTCOrder(options);

  const prepareOTCOrder = async (
    buildOTCOrderParams: BuildOTCOrderInput,
    extra?: { permitMakerAsset?: string }
  ): Promise<OTCOrderToPost> => {
    const orderData = await buildOTCOrder(buildOTCOrderParams);
    const signature = await signOTCOrder(orderData);

    const orderWithSignature: OTCOrderToPost = {
      ...orderData.data,
      ...extra,
      signature,
    };

    return orderWithSignature;
  };


  const submitOTCOrder: SubmitOTCOrder = async (
    buildOTCOrderParams,
    extra = {},
    requestParams
  ) => {
    const orderWithSignature: OTCOrderToPost = await prepareOTCOrder(
      buildOTCOrderParams,
      extra
    );

    const newOrder = await postOTCOrder(orderWithSignature, requestParams);

    return newOrder;
  };

  return { submitOTCOrder };
};

export type OTCOrderHandlers<T> = SubmitOTCOrderFuncs &
  BuildOTCOrderFunctions &
  SignOTCOrderFunctions &
  PostOTCOrderFunctions &
  GetOTCOrdersFunctions &
  GetOTCOrdersContractFunctions &
  BuildOTCOrdersTxFunctions &
  CancelOTCOrderFunctions<T> &
  ApproveTokenForOTCOrderFunctions<T> &
  FillOTCOrderFunctions<T>;

/**
 * @description construct SDK with every OTCOrders-related method, fetching from API and contract calls
 */
export const constructAllOTCOrdersHandlers = <TxResponse>(
  options: ConstructProviderFetchInput<
    TxResponse,
    'signTypedDataCall' | 'transactCall' | 'staticCall'
  >
): OTCOrderHandlers<TxResponse> => {
  const OTCOrdersGetters = constructGetOTCOrders(options);
  const OTCOrdersContractGetter = constructGetOTCOrdersContract(options);

  const OTCOrdersSubmit = constructSubmitOTCOrder(options);
  const OTCOrdersBuild = constructBuildOTCOrder(options);
  const OTCOrdersSign = constructSignOTCOrder(options);
  const OTCOrdersPost = constructPostOTCOrder(options);

  const OTCOrdersCancel = constructCancelOTCOrder(options);
  const OTCOrdersApproveToken = constructApproveTokenForOTCOrder(options);

  const OTCOrdersFillOrderDirectly = constructFillOTCOrder(options);

  const OTCOrdersBuildTx = constructBuildOTCOrderTx(options);

  return {
    ...OTCOrdersGetters,
    ...OTCOrdersContractGetter,
    ...OTCOrdersSubmit,
    ...OTCOrdersBuild,
    ...OTCOrdersSign,
    ...OTCOrdersPost,
    ...OTCOrdersCancel,
    ...OTCOrdersApproveToken,
    ...OTCOrdersFillOrderDirectly,
    ...OTCOrdersBuildTx,
  };
};
