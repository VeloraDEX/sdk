import type { Prettify } from 'ts-essentials';
import { API_URL } from '../../constants';
import { constructSearchString } from '../../helpers/misc';
import type { ConstructFetchInput, RequestParameters } from '../../types';
import type {
  DeltaAuction,
  TWAPOnChainOrderType,
} from '../delta/helpers/types';
import type { DeltaOrderToPostV2 } from './postDeltaOrderV2';

export type PostTWAPDeltaOrderV2Params = Prettify<
  Omit<
    DeltaOrderToPostV2<'TWAPOrder'> | DeltaOrderToPostV2<'TWAPBuyOrder'>,
    'chainId'
  > & {
    /** @description Must be "TWAPOrder" or "TWAPBuyOrder" */
    onChainOrderType: TWAPOnChainOrderType;
    degenMode?: boolean;
  }
>;

type PostTWAPDeltaOrderV2 = (
  postData: PostTWAPDeltaOrderV2Params,
  requestParams?: RequestParameters
) => Promise<DeltaAuction<'TWAPOrder'> | DeltaAuction<'TWAPBuyOrder'>>;

export type PostTWAPDeltaOrderV2Functions = {
  postTWAPDeltaOrderV2: PostTWAPDeltaOrderV2;
};

export const constructPostTWAPDeltaOrderV2 = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): PostTWAPDeltaOrderV2Functions => {
  const postOrderUrl = `${apiURL}/delta/v2/orders` as const;

  const postTWAPDeltaOrderV2: PostTWAPDeltaOrderV2 = (
    _postData,
    requestParams
  ) => {
    const { degenMode, ...postData } = _postData;
    const deltaOrderToPost: DeltaOrderToPostV2<'TWAPOrder' | 'TWAPBuyOrder'> = {
      ...postData,
      chainId,
    };

    const search = constructSearchString<{ degenMode?: boolean }>({
      degenMode,
    });

    const fetchURL = `${postOrderUrl}/${search}` as const;

    return fetcher<DeltaAuction<'TWAPOrder'> | DeltaAuction<'TWAPBuyOrder'>>({
      url: fetchURL,
      method: 'POST',
      data: deltaOrderToPost,
      requestParams,
    });
  };

  return { postTWAPDeltaOrderV2 };
};
