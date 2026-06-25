import { API_URL } from '../../constants';
import type {
  ConstructProviderFetchInput,
  RequestParameters,
} from '../../types';
import { constructGetDeltaContract } from './getDeltaContract';
import {
  buildCancelDeltaOrderSignableData,
  type CancelDeltaOrderData,
  type SignableCancelDeltaOrderData,
} from './helpers/buildCancelDeltaOrderData';

type SuccessResponse = { success: true };

type CancelDeltaOrderRequestParams = {
  orderIds: string[];
  signature: string;
};

export type BuildCancelDeltaOrder = (
  params: CancelDeltaOrderData,
  requestParams?: RequestParameters
) => Promise<SignableCancelDeltaOrderData>;

export type SignCancelDeltaOrderRequest = (
  params: CancelDeltaOrderData,
  requestParams?: RequestParameters
) => Promise<string>;

export type PostCancelDeltaOrderRequest = (
  params: CancelDeltaOrderRequestParams,
  requestParams?: RequestParameters
) => Promise<SuccessResponse>;

export type CancelDeltaOrder = (
  params: CancelDeltaOrderData,
  requestParams?: RequestParameters
) => Promise<SuccessResponse>;

export type CancelDeltaOrderFunctions = {
  /** @description Build the EIP-712 signable data for cancelling one or more Delta orders */
  buildCancelDeltaOrder: BuildCancelDeltaOrder;
  signCancelDeltaOrderRequest: SignCancelDeltaOrderRequest;
  postCancelDeltaOrderRequest: PostCancelDeltaOrderRequest;
  /** @description Cancel one or more Delta orders via the v2 endpoint */
  cancelDeltaOrders: CancelDeltaOrder;
};

export const constructCancelDeltaOrder = (
  options: Pick<
    ConstructProviderFetchInput<any, 'signTypedDataCall'>,
    'contractCaller' | 'fetcher' | 'apiURL' | 'chainId'
  >
): CancelDeltaOrderFunctions => {
  const apiURL = options.apiURL ?? API_URL;

  const { getDeltaContract } = constructGetDeltaContract(options);

  const buildCancelDeltaOrder: BuildCancelDeltaOrder = async (
    params,
    requestParams
  ) => {
    const ParaswapDelta = await getDeltaContract(requestParams);
    if (!ParaswapDelta) {
      throw new Error(`Delta is not available on chain ${options.chainId}`);
    }

    return buildCancelDeltaOrderSignableData({
      orderInput: params,
      paraswapDeltaAddress: ParaswapDelta,
      chainId: options.chainId,
    });
  };

  const signCancelDeltaOrderRequest: SignCancelDeltaOrderRequest = async (
    params,
    requestParams
  ) => {
    const typedData = await buildCancelDeltaOrder(params, requestParams);

    return options.contractCaller.signTypedDataCall(typedData);
  };

  const postCancelDeltaOrderRequest: PostCancelDeltaOrderRequest = async (
    params,
    requestParams
  ) => {
    const cancelUrl = `${apiURL}/v2/delta/orders/cancel` as const;

    return options.fetcher<SuccessResponse>({
      url: cancelUrl,
      method: 'POST',
      data: params,
      requestParams,
    });
  };

  const cancelDeltaOrders: CancelDeltaOrder = async (
    { orderIds },
    requestParams
  ) => {
    const signature = await signCancelDeltaOrderRequest(
      { orderIds },
      requestParams
    );

    return postCancelDeltaOrderRequest({ orderIds, signature }, requestParams);
  };

  return {
    buildCancelDeltaOrder,
    signCancelDeltaOrderRequest,
    postCancelDeltaOrderRequest,
    cancelDeltaOrders,
  };
};
