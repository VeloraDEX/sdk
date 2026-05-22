import { API_URL } from '../../constants';
import { constructSearchString } from '../../helpers/misc';
import type {
  Address,
  ConstructFetchInput,
  PaginatedResponse,
  RequestParameters,
} from '../../types';
import type { OnChainOrderType } from '../delta/helpers/types';
import type {
  DeltaOrderStatusV2,
  DeltaOrderTypeV2,
  DeltaOrderV2Response,
} from './types';

type GetDeltaOrderByIdV2 = (
  orderId: string,
  requestParams?: RequestParameters
) => Promise<DeltaOrderV2Response>;

type GetDeltaOrderByHashV2 = (
  orderHash: string,
  requestParams?: RequestParameters
) => Promise<DeltaOrderV2Response>;

type OrdersV2Filter = {
  /** @description `order.owner` to fetch Delta Orders for. */
  userAddress: Address;
  /** @description Pagination option. Default 1. */
  page?: number;
  /** @description Pagination option. Default 100, max 1000. */
  limit?: number;
  /** @description Filter by chainId. Omitted = orders across all chains. */
  chainId?: number[];
  /** @description Filter by integrator-facing status. */
  status?: DeltaOrderStatusV2[];
  /** @description Filter by order type. MARKET or LIMIT. */
  type?: DeltaOrderTypeV2;
  /** @description Filter by on-chain order type. */
  onChainOrderType?: OnChainOrderType;
};

type OrderFiltersV2Query = Omit<OrdersV2Filter, 'chainId' | 'status'> & {
  chainId?: string;
  status?: string;
};

type GetDeltaOrdersV2 = (
  options: OrdersV2Filter,
  requestParams?: RequestParameters
) => Promise<PaginatedResponse<DeltaOrderV2Response>>;

export type GetDeltaOrdersV2Functions = {
  /** @description Fetch a single order by its UUID. */
  getDeltaOrderByIdV2: GetDeltaOrderByIdV2;
  /** @description Fetch a single order by its EIP-712 order hash. */
  getDeltaOrderByHashV2: GetDeltaOrderByHashV2;
  /** @description List Delta orders with the v2 pagination envelope. */
  getDeltaOrdersV2: GetDeltaOrdersV2;
};

export const constructGetDeltaOrdersV2 = ({
  apiURL = API_URL,
  fetcher,
}: ConstructFetchInput): GetDeltaOrdersV2Functions => {
  const baseUrl = `${apiURL}/delta/v2/orders` as const;

  const getDeltaOrderByIdV2: GetDeltaOrderByIdV2 = async (
    orderId,
    requestParams
  ) => {
    const fetchURL = `${baseUrl}/${orderId}` as const;
    return fetcher<DeltaOrderV2Response>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });
  };

  const getDeltaOrderByHashV2: GetDeltaOrderByHashV2 = async (
    orderHash,
    requestParams
  ) => {
    const fetchURL = `${baseUrl}/hash/${orderHash}` as const;
    return fetcher<DeltaOrderV2Response>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });
  };

  const getDeltaOrdersV2: GetDeltaOrdersV2 = async (options, requestParams) => {
    const chainIdString = options.chainId?.join(',');
    const statusString = options.status?.join(',');

    const search = constructSearchString<OrderFiltersV2Query>({
      userAddress: options.userAddress,
      page: options.page,
      limit: options.limit,
      type: options.type,
      onChainOrderType: options.onChainOrderType,
      chainId: chainIdString,
      status: statusString,
    });

    const fetchURL = `${baseUrl}${search}` as const;

    return fetcher<PaginatedResponse<DeltaOrderV2Response>>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });
  };

  return {
    getDeltaOrderByIdV2,
    getDeltaOrderByHashV2,
    getDeltaOrdersV2,
  };
};
