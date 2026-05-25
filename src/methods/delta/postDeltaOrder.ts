import { API_URL } from '../../constants';
import { constructSearchString } from '../../helpers/misc';
import type { ConstructFetchInput, RequestParameters } from '../../types';
import type {
  DeltaAuction,
  DeltaOrderType,
  OnChainOrderMap,
} from './helpers/types';

export type DeltaOrderToPost<T extends keyof OnChainOrderMap = 'Order'> = {
  /** @description Partner string */
  partner?: string;
  /** @description Referrer address */
  referrerAddress?: string;
  order: OnChainOrderMap[T];
  /** @description Signature of the order from order.owner address. EOA signatures must be submitted in ERC-2098 Compact Representation. */
  signature: string;
  chainId: number;
  /** @description designates the Order as being able to partially filled, as opposed to fill-or-kill */
  partiallyFillable?: boolean;

  /** @description Type of the order. MARKET or LIMIT. Default is MARKET */
  type?: DeltaOrderType;

  includeAgents?: string[];
  excludeAgents?: string[];
};

export type PostDeltaOrderParams = Omit<DeltaOrderToPost, 'chainId'> & {
  degenMode?: boolean;
};

type PostDeltaOrder = (
  postData: PostDeltaOrderParams,
  requestParams?: RequestParameters
) => Promise<DeltaAuction>;

export type PostDeltaOrderFunctions = {
  postDeltaOrder: PostDeltaOrder;
};

export const constructPostDeltaOrder = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): PostDeltaOrderFunctions => {
  const postOrderUrl = `${apiURL}/delta/orders` as const;

  const postDeltaOrder: PostDeltaOrder = (_postData, requestParams) => {
    const { degenMode, ...postData } = _postData;
    const deltaOrderToPost: DeltaOrderToPost = { ...postData, chainId };

    const search = constructSearchString<{ degenMode?: boolean }>({
      degenMode,
    });
    const fetchURL = `${postOrderUrl}${search}` as const;

    return fetcher<DeltaAuction>({
      url: fetchURL,
      method: 'POST',
      data: deltaOrderToPost,
      requestParams,
    });
  };

  return { postDeltaOrder };
};
