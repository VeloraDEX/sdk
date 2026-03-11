import { API_URL } from '../../constants';
import type { ConstructFetchInput, RequestParameters } from '../../types';
import { ExternalDeltaOrder } from './helpers/types';
import { DeltaOrderApiResponse } from './postDeltaOrder';

export type ExternalDeltaOrderToPost = {
  /** @description Partner string */
  partner?: string;
  /** @description Referrer address */
  referrerAddress?: string;
  order: ExternalDeltaOrder;
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

export type PostExternalDeltaOrderParams = Omit<
  ExternalDeltaOrderToPost,
  'chainId'
>;

type PostExternalDeltaOrder = (
  postData: PostExternalDeltaOrderParams,
  requestParams?: RequestParameters
) => Promise<DeltaOrderApiResponse>;

export type PostExternalDeltaOrderFunctions = {
  postExternalDeltaOrder: PostExternalDeltaOrder;
};

export const constructPostExternalDeltaOrder = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): PostExternalDeltaOrderFunctions => {
  const postOrderUrl = `${apiURL}/delta/orders` as const;

  const postExternalDeltaOrder: PostExternalDeltaOrder = (
    postData,
    requestParams
  ) => {
    const deltaOrderToPost: ExternalDeltaOrderToPost = { ...postData, chainId };

    return fetcher<DeltaOrderApiResponse>({
      url: postOrderUrl,
      method: 'POST',
      data: deltaOrderToPost,
      requestParams,
    });
  };

  return { postExternalDeltaOrder };
};
