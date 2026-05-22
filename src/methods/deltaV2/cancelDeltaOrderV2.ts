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
  signCancelLimitDeltaOrderRequestV2: SignCancelDeltaOrderRequestV2;
  postCancelLimitDeltaOrderRequestV2: PostCancelDeltaOrderRequestV2;
  /** @description Cancel one or more Limit Delta orders via the v2 endpoint */
  cancelLimitDeltaOrdersV2: CancelDeltaOrderV2;
};

export const constructCancelDeltaOrderV2 = (
  options: Pick<
    ConstructProviderFetchInput<any, 'signTypedDataCall'>,
    'contractCaller' | 'fetcher' | 'apiURL' | 'chainId'
  >
): CancelDeltaOrderV2Functions => {
  const { getDeltaContract } = constructGetDeltaContract(options);

  const signCancelLimitDeltaOrderRequestV2: SignCancelDeltaOrderRequestV2 =
    async (params, requestParams) => {
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

  const postCancelLimitDeltaOrderRequestV2: PostCancelDeltaOrderRequestV2 =
    async (params, requestParams) => {
      const cancelUrl = `${options.apiURL}/delta/v2/orders/cancel` as const;

      return options.fetcher<SuccessResponse>({
        url: cancelUrl,
        method: 'POST',
        data: params,
        requestParams,
      });
    };

  const cancelLimitDeltaOrdersV2: CancelDeltaOrderV2 = async (
    { orderIds },
    requestParams
  ) => {
    const signature = await signCancelLimitDeltaOrderRequestV2(
      { orderIds },
      requestParams
    );

    return postCancelLimitDeltaOrderRequestV2(
      { orderIds, signature },
      requestParams
    );
  };

  return {
    signCancelLimitDeltaOrderRequestV2,
    postCancelLimitDeltaOrderRequestV2,
    cancelLimitDeltaOrdersV2,
  };
};
