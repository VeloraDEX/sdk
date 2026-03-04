import type { ConstructProviderFetchInput } from '../../types';
import {
  BuildDeltaOrderDataParams,
  BuildDeltaOrderFunctions,
  constructBuildDeltaOrder,
} from './buildDeltaOrder';
import {
  constructPostDeltaOrder,
  DeltaOrderApiResponse,
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

export type SubmitDeltaOrderParams = BuildDeltaOrderDataParams & {
  /** @description designates the Order as being able to be partially filled, as opposed to fill-or-kill */
  partiallyFillable?: boolean;
  /** @description Referrer address */
  referrerAddress?: string;
} & Pick<DeltaOrderToPost, 'type' | 'includeAgents' | 'excludeAgents'>;

type SubmitDeltaOrder = (
  orderParams: SubmitDeltaOrderParams
) => Promise<DeltaOrderApiResponse>;

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
    });

    return response;
  };

  return { submitDeltaOrder };
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
  DeltaTokenModuleFunctions<T>;

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
  };
};
