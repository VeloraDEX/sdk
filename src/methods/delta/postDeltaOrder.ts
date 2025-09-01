import { API_URL } from '../../constants';
import type { ConstructFetchInput, RequestParameters } from '../../types';
import { DeltaAuctionOrder, DeltaAuction } from './helpers/types';

export type DeltaOrderToPost = {
  /** @description Partner string */
  partner?: string;
  /** @description Referrer address */
  referrerAddress?: string;
  order: DeltaAuctionOrder;
  /** @description Signature of the order from order.owner address. EOA signatures must be submitted in ERC-2098 Compact Representation. */
  signature: string;
  chainId: number;
  /** @description designates the Order as being able to partially filled, as opposed to fill-or-kill */
  partiallyFillable?: boolean;

  /** @description Type of the order. MARKET or LIMIT. Default is MARKET */
  type?: 'MARKET' | 'LIMIT';

  includeAgents?: string[];
  excludeAgents?: string[];
};

export type PostDeltaOrderParams = Omit<DeltaOrderToPost, 'chainId'>;

export type DeltaOrderApiResponse = Omit<DeltaAuction, 'transactions'> & {
  orderVersion: string; // "2.0.0"
  deltaGasOverhead: number; // @TODO may be removed
  type: 'MARKET' | 'LIMIT';
};

type PostDeltaOrder = (
  postData: PostDeltaOrderParams,
  requestParams?: RequestParameters
) => Promise<DeltaOrderApiResponse>;

export type PostDeltaOrderFunctions = {
  postDeltaOrder: PostDeltaOrder;
};

export const constructPostDeltaOrder = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): PostDeltaOrderFunctions => {
  const postOrderUrl = `${apiURL}/delta/orders` as const;

  const postDeltaOrder: PostDeltaOrder = (postData, requestParams) => {
    const deltaOrderToPost: DeltaOrderToPost = { ...postData, chainId };

    return fetcher<DeltaOrderApiResponse>({
      url: postOrderUrl,
      method: 'POST',
      data: deltaOrderToPost,
      requestParams,
    });
  };

  return { postDeltaOrder };
};
