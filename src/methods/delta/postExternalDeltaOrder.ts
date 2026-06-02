import { API_URL } from '../../constants';
import type { ConstructFetchInput, RequestParameters } from '../../types';
import type { DeltaOrderToPost } from './postDeltaOrder';
import type { DeltaAuction } from './types';

export type PostExternalDeltaOrderParams = Omit<
  DeltaOrderToPost<'ExternalOrder'>,
  'chainId'
>;

type PostExternalDeltaOrder = (
  postData: PostExternalDeltaOrderParams,
  requestParams?: RequestParameters
) => Promise<DeltaAuction<'ExternalOrder'>>;

export type PostExternalDeltaOrderFunctions = {
  postExternalDeltaOrder: PostExternalDeltaOrder;
};

export const constructPostExternalDeltaOrder = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): PostExternalDeltaOrderFunctions => {
  const postOrderUrl = `${apiURL}/delta/v2/orders` as const;

  const postExternalDeltaOrder: PostExternalDeltaOrder = (
    postData,
    requestParams
  ) => {
    const deltaOrderToPost: DeltaOrderToPost<'ExternalOrder'> = {
      ...postData,
      chainId,
    };

    return fetcher<DeltaAuction<'ExternalOrder'>>({
      url: postOrderUrl,
      method: 'POST',
      data: deltaOrderToPost,
      requestParams,
    });
  };

  return { postExternalDeltaOrder };
};
