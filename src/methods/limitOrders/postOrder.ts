import { API_URL } from '../../constants';
import type { ConstructFetchInput, RequestParameters } from '../../types';
import { constructBaseFetchUrlGetter, PostOrderURLs } from './helpers/misc';
import type {
  LimitOrderApiResponse,
  LimitOrderToSend,
  LimitOrderFromApi,
  LimitOrderType,
} from './helpers/types';

type PostLimitOrder = (
  limitOrderWithSignatureAndPermit: LimitOrderToSend,
  requestParams?: RequestParameters
) => Promise<LimitOrderFromApi>;

/** @deprecated Limit Orders are deprecated and will be removed in a future version. */
export type PostLimitOrderFunctions = {
  postLimitOrder: PostLimitOrder;
  postP2POrder: PostLimitOrder;
};

/** @deprecated Limit Orders are deprecated and will be removed in a future version. */
export const constructPostLimitOrder = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): PostLimitOrderFunctions => {
  const getBaseFetchURLByOrderType = constructBaseFetchUrlGetter({
    apiURL,
    chainId,
  });

  const postTypedOrder = async (
    limitOrderWithSignatureAndPermit: LimitOrderToSend,
    type: LimitOrderType,
    requestParams?: RequestParameters
  ): Promise<LimitOrderFromApi> => {
    const fetchURL = getBaseFetchURLByOrderType(type);

    const { order: newOrder } = await fetcher<
      LimitOrderApiResponse,
      PostOrderURLs
    >({
      url: fetchURL,
      method: 'POST',
      data: limitOrderWithSignatureAndPermit,
      requestParams,
    });

    return newOrder;
  };

  const postLimitOrder: PostLimitOrder = (
    limitOrderWithSignatureAndPermit,
    requestParams
  ) => {
    return postTypedOrder(
      limitOrderWithSignatureAndPermit,
      'LIMIT',
      requestParams
    );
  };

  const postP2POrder: PostLimitOrder = (
    limitOrderWithSignatureAndPermit,
    requestParams
  ) => {
    return postTypedOrder(
      limitOrderWithSignatureAndPermit,
      'P2P',
      requestParams
    );
  };

  return { postLimitOrder, postP2POrder };
};
