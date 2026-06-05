import type { Prettify } from 'ts-essentials';
import { API_URL } from '../../constants';
import { constructSearchString } from '../../helpers/misc';
import type { ConstructFetchInput, RequestParameters } from '../../types';
import type { TWAPOnChainOrderType } from './helpers/types';
import type { DeltaOrderToPost } from './postDeltaOrder';
import type { DeltaAuction } from './types';

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
  const postOrderUrl = `${apiURL}/delta/v2/orders` as const;

  const postTWAPDeltaOrder: PostTWAPDeltaOrder = (_postData, requestParams) => {
    const { degenMode, ...postData } = _postData;
    const deltaOrderToPost: DeltaOrderToPost<'TWAPOrder' | 'TWAPBuyOrder'> = {
      ...postData,
      chainId,
    };

    const search = constructSearchString<{ degenMode?: boolean }>({
      degenMode,
    });

    const fetchURL = `${postOrderUrl}${search}` as const;

    return fetcher<DeltaAuction<'TWAPOrder'> | DeltaAuction<'TWAPBuyOrder'>>({
      url: fetchURL,
      method: 'POST',
      data: deltaOrderToPost,
      requestParams,
    });
  };

  return { postTWAPDeltaOrder };
};
