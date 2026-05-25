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

export type SignCancelDeltaOrderRequestV2 = (
  params: CancelDeltaOrderData,
  requestParams?: RequestParameters
) => Promise<string>;

export type PostCancelDeltaOrderRequestV2 = (
  params: CancelDeltaOrderRequestParams,
  requestParams?: RequestParameters
) => Promise<SuccessResponse>;

export type CancelDeltaOrderV2 = (
  params: CancelDeltaOrderData,
  requestParams?: RequestParameters
) => Promise<SuccessResponse>;

export type CancelDeltaOrderV2Functions = {
  signCancelDeltaOrderRequestV2: SignCancelDeltaOrderRequestV2;
  postCancelDeltaOrderRequestV2: PostCancelDeltaOrderRequestV2;
  /** @description Cancel one or more Delta orders via the v2 endpoint */
  cancelDeltaOrdersV2: CancelDeltaOrderV2;
};

export const constructCancelDeltaOrderV2 = (
  options: Pick<
    ConstructProviderFetchInput<any, 'signTypedDataCall'>,
    'contractCaller' | 'fetcher' | 'apiURL' | 'chainId'
  >
): CancelDeltaOrderV2Functions => {
  const apiURL = options.apiURL ?? API_URL;

  const { getDeltaContract } = constructGetDeltaContract(options);

  const signCancelDeltaOrderRequestV2: SignCancelDeltaOrderRequestV2 = async (
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

  const postCancelDeltaOrderRequestV2: PostCancelDeltaOrderRequestV2 = async (
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

  const cancelDeltaOrdersV2: CancelDeltaOrderV2 = async (
    { orderIds },
    requestParams
  ) => {
    const signature = await signCancelDeltaOrderRequestV2(
      { orderIds },
      requestParams
    );

    return postCancelDeltaOrderRequestV2(
      { orderIds, signature },
      requestParams
    );
  };

  return {
    signCancelDeltaOrderRequestV2,
    postCancelDeltaOrderRequestV2,
    cancelDeltaOrdersV2,
  };
};
