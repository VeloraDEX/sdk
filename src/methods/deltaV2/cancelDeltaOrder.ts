import { API_URL } from '../../constants';
import type {
  ConstructProviderFetchInput,
  RequestParameters,
} from '../../types';
import { constructGetDeltaContract } from '../delta/getDeltaContract';
import {
  buildCancelDeltaOrderSignableData,
  type CancelDeltaOrderData,
} from '../delta/helpers/buildCancelDeltaOrderData';

type SuccessResponse = { success: true };

type CancelDeltaOrderRequestParams = {
  orderIds: string[];
  signature: string;
};

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

  const signCancelDeltaOrderRequest: SignCancelDeltaOrderRequest = async (
    params,
    requestParams
  ) => {
    const ParaswapDelta = await getDeltaContract(requestParams);
    if (!ParaswapDelta) {
      throw new Error(`Delta is not available on chain ${options.chainId}`);
    }

    const typedData = buildCancelDeltaOrderSignableData({
      orderInput: params,
      paraswapDeltaAddress: ParaswapDelta,
      chainId: options.chainId,
    });

    return options.contractCaller.signTypedDataCall(typedData);
  };

  const postCancelDeltaOrderRequest: PostCancelDeltaOrderRequest = async (
    params,
    requestParams
  ) => {
    const cancelUrl = `${apiURL}/delta/v2/orders/cancel` as const;

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

    return postCancelDeltaOrderRequest(
      { orderIds, signature },
      requestParams
    );
  };

  return {
    signCancelDeltaOrderRequest,
    postCancelDeltaOrderRequest,
    cancelDeltaOrders,
  };
};
