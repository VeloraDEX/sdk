import { Prettify } from 'ts-essentials';
import { API_URL } from '../../constants';
import type { ConstructFetchInput, RequestParameters } from '../../types';
import type { DeltaAuction, TWAPOnChainOrderType } from './helpers/types';
import type { DeltaOrderToPost } from './postDeltaOrder';

export type PostTWAPDeltaOrderParams = Prettify<
  Omit<
    DeltaOrderToPost<'TWAPOrder'> | DeltaOrderToPost<'TWAPBuyOrder'>,
    'chainId'
  > & {
    /** @description Must be "TWAPOrder" or "TWAPBuyOrder" */
    onChainOrderType: TWAPOnChainOrderType;
    degenMode?: boolean;
  }
>;

type PostTWAPDeltaOrder = (
  postData: PostTWAPDeltaOrderParams,
  requestParams?: RequestParameters
) => Promise<DeltaAuction<'TWAPOrder'> | DeltaAuction<'TWAPBuyOrder'>>;

export type PostTWAPDeltaOrderFunctions = {
  postTWAPDeltaOrder: PostTWAPDeltaOrder;
};

export const constructPostTWAPDeltaOrder = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): PostTWAPDeltaOrderFunctions => {
  const postOrderUrl = `${apiURL}/delta/orders` as const;

  const postTWAPDeltaOrder: PostTWAPDeltaOrder = (postData, requestParams) => {
    const { onChainOrderType, ...rest } = postData;
    const deltaOrderToPost = {
      ...rest,
      chainId,
    };

    return fetcher<DeltaAuction<'TWAPOrder'> | DeltaAuction<'TWAPBuyOrder'>>({
      url: postOrderUrl,
      method: 'POST',
      data: deltaOrderToPost,
      requestParams,
    });
  };

  return { postTWAPDeltaOrder };
};
