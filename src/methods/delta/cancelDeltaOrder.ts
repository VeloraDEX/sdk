import type {
  ConstructProviderFetchInput,
  RequestParameters,
} from '../../types';
import { constructGetDeltaContract } from './getDeltaContract';
import {
  buildCancelDeltaOrderSignableData,
  CancelDeltaOrderData,
} from './helpers/buildCancelDeltaOrderData';

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
  signCancelLimitDeltaOrderRequest: SignCancelDeltaOrderRequest;
  postCancelLimitDeltaOrderRequest: PostCancelDeltaOrderRequest;
  /** @description Cancel a Limit Delta order */
  cancelLimitDeltaOrders: CancelDeltaOrder;
};

export const constructCancelDeltaOrder = (
  options: Pick<
    ConstructProviderFetchInput<any, 'signTypedDataCall'>,
    'contractCaller' | 'fetcher' | 'apiURL' | 'chainId'
  >
): CancelDeltaOrderFunctions => {
  // cached internally
  const { getDeltaContract } = constructGetDeltaContract(options);

  const signCancelLimitDeltaOrderRequest: SignCancelDeltaOrderRequest = async (
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
    const signature = await options.contractCaller.signTypedDataCall(typedData);

    return signature;
  };

  const postCancelLimitDeltaOrderRequest: PostCancelDeltaOrderRequest = async (
    params,
    requestParams
  ) => {
    const cancelUrl = `${options.apiURL}/delta/orders/cancel` as const;

    const res = await options.fetcher<SuccessResponse>({
      url: cancelUrl,
      method: 'POST',
      data: params,
      requestParams,
    });

    return res;
  };

  const cancelLimitDeltaOrders: CancelDeltaOrder = async (
    { orderIds },
    requestParams
  ) => {
    const signature = await signCancelLimitDeltaOrderRequest(
      { orderIds },
      requestParams
    );

    const res = await postCancelLimitDeltaOrderRequest(
      {
        orderIds,
        signature,
      },
      requestParams
    );

    return res;
  };

  return {
    signCancelLimitDeltaOrderRequest,
    postCancelLimitDeltaOrderRequest,
    cancelLimitDeltaOrders,
  };
};
