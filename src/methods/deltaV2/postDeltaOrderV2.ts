import { API_URL } from '../../constants';
import { constructSearchString } from '../../helpers/misc';
import type { ConstructFetchInput, RequestParameters } from '../../types';
import type {
  DeltaAuction,
  DeltaOrderType,
  OnChainOrderMap,
} from '../delta/helpers/types';

export type DeltaOrderToPostV2<T extends keyof OnChainOrderMap = 'Order'> = {
  /** @description Partner string */
  partner?: string;
  /** @description Referrer address */
  referrerAddress?: string;
  order: OnChainOrderMap[T];
  /** @description Signature of the order from order.owner address. EOA signatures must be submitted in ERC-2098 Compact Representation. */
  signature: string;
  chainId: number;
  /** @description Designates the Order as being able to be partially filled, as opposed to fill-or-kill */
  partiallyFillable?: boolean;
  /** @description Type of the order. MARKET or LIMIT. Default is MARKET */
  type?: DeltaOrderType;
  includeAgents?: string[];
  excludeAgents?: string[];
};

export type PostDeltaOrderV2Params = Omit<DeltaOrderToPostV2, 'chainId'> & {
  degenMode?: boolean;
};

type PostDeltaOrderV2 = (
  postData: PostDeltaOrderV2Params,
  requestParams?: RequestParameters
) => Promise<DeltaAuction>;

export type PostDeltaOrderV2Functions = {
  postDeltaOrderV2: PostDeltaOrderV2;
};

export const constructPostDeltaOrderV2 = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): PostDeltaOrderV2Functions => {
  const postOrderUrl = `${apiURL}/delta/v2/orders` as const;

  const postDeltaOrderV2: PostDeltaOrderV2 = (_postData, requestParams) => {
    const { degenMode, ...postData } = _postData;
    const deltaOrderToPost: DeltaOrderToPostV2 = { ...postData, chainId };

    const search = constructSearchString<{ degenMode?: boolean }>({
      degenMode,
    });
    const fetchURL = `${postOrderUrl}/${search}` as const;

    return fetcher<DeltaAuction>({
      url: fetchURL,
      method: 'POST',
      data: deltaOrderToPost,
      requestParams,
    });
  };

  return { postDeltaOrderV2 };
};
