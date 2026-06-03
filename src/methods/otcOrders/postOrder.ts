import { API_URL } from '../../constants';
import type { ConstructFetchInput, RequestParameters } from '../../types';
import { constructBaseFetchUrlGetter, PostOrderURLs } from './helpers/misc';
import type {
  OTCOrderApiResponse,
  OTCOrderToSend,
  OTCOrderFromApi,
  OTCOrderType,
} from './helpers/types';

type PostOTCOrder = (
  OTCOrderWithSignatureAndPermit: OTCOrderToSend,
  requestParams?: RequestParameters
) => Promise<OTCOrderFromApi>;

export type PostOTCOrderFunctions = {
  postOTCOrder: PostOTCOrder;
};

export const constructPostOTCOrder = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): PostOTCOrderFunctions => {
  const getBaseFetchURLByOrderType = constructBaseFetchUrlGetter({
    apiURL,
    chainId,
  });

  const postTypedOrder = async (
    OTCOrderWithSignatureAndPermit: OTCOrderToSend,
    type: OTCOrderType,
    requestParams?: RequestParameters
  ): Promise<OTCOrderFromApi> => {
    const fetchURL = getBaseFetchURLByOrderType(type);

    const { order: newOrder } = await fetcher<
      OTCOrderApiResponse,
      PostOrderURLs
    >({
      url: fetchURL,
      method: 'POST',
      data: OTCOrderWithSignatureAndPermit,
      requestParams,
    });

    return newOrder;
  };

  const postP2POrder: PostOTCOrder = (
    OTCOrderWithSignatureAndPermit,
    requestParams
  ) => {
    return postTypedOrder(
      OTCOrderWithSignatureAndPermit,
      'P2P',
      requestParams
    );
  };

  return { postOTCOrder: postP2POrder };
};
