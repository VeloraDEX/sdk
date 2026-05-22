import { API_URL } from '../../constants';
import type { ConstructFetchInput, RequestParameters } from '../../types';
import type { DeltaAuction } from '../delta/helpers/types';
import type { DeltaOrderToPostV2 } from './postDeltaOrderV2';

export type PostExternalDeltaOrderV2Params = Omit<
  DeltaOrderToPostV2<'ExternalOrder'>,
  'chainId'
>;

type PostExternalDeltaOrderV2 = (
  postData: PostExternalDeltaOrderV2Params,
  requestParams?: RequestParameters
) => Promise<DeltaAuction<'ExternalOrder'>>;

export type PostExternalDeltaOrderV2Functions = {
  postExternalDeltaOrderV2: PostExternalDeltaOrderV2;
};

export const constructPostExternalDeltaOrderV2 = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): PostExternalDeltaOrderV2Functions => {
  const postOrderUrl = `${apiURL}/delta/v2/orders` as const;

  const postExternalDeltaOrderV2: PostExternalDeltaOrderV2 = (
    postData,
    requestParams
  ) => {
    const deltaOrderToPost: DeltaOrderToPostV2<'ExternalOrder'> = {
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

  return { postExternalDeltaOrderV2 };
};
