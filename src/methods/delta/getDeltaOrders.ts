import { API_URL } from '../../constants';
import { constructSearchString } from '../../helpers/misc';
import type {
  Address,
  ConstructFetchInput,
  PaginatedResponse,
  RequestParameters,
} from '../../types';
import type { DeltaOrderType, OnChainOrderType } from './helpers/types';
import type { DeltaOrderStatus, DeltaAuction } from './types';

type GetDeltaOrderById = (
  orderId: string,
  requestParams?: RequestParameters
) => Promise<DeltaAuction>;

type GetDeltaOrderByHash = (
  orderHash: string,
  requestParams?: RequestParameters
) => Promise<DeltaAuction>;

type OrdersFilter = {
  /** @description `order.owner` to fetch Delta Orders for. */
  userAddress: Address;
  /** @description Pagination option. Default 1. */
  page?: number;
  /** @description Pagination option. Default 100, max 1000. */
  limit?: number;
  /** @description Filter by chainId. Omitted = orders across all chains. */
  chainId?: number[];
  /** @description Filter by integrator-facing status. */
  status?: DeltaOrderStatus[];
  /** @description Filter by order type. MARKET or LIMIT. */
  type?: DeltaOrderType;
  /** @description Filter by on-chain order type. */
  onChainOrderType?: OnChainOrderType;
};

type OrderFiltersQuery = Omit<OrdersFilter, 'chainId' | 'status'> & {
  chainId?: string;
  status?: string;
};

type GetDeltaOrders = (
  options: OrdersFilter,
  requestParams?: RequestParameters
) => Promise<PaginatedResponse<DeltaAuction>>;

type GetRequiredBalanceParams = {
  userAddress: Address;
  tokenAddress?: Address;
};

type GetRequiredBalance = (
  userParams: GetRequiredBalanceParams,
  requestParams?: RequestParameters
) => Promise<Record<string, string>>; // token -> required balance across open Delta orders

export type GetDeltaOrdersFunctions = {
  /** @description Fetch a single order by its UUID. */
  getDeltaOrderById: GetDeltaOrderById;
  /** @description Fetch a single order by its EIP-712 order hash. */
  getDeltaOrderByHash: GetDeltaOrderByHash;
  /** @description List Delta orders with the v2 pagination envelope. */
  getDeltaOrders: GetDeltaOrders;
  /** @description Required balance per token across the user's open Delta v2 orders. Pass `tokenAddress` to narrow the result to a single token. */
  getRequiredBalanceForDeltaOrders: GetRequiredBalance;
};

export const constructGetDeltaOrders = ({
  apiURL = API_URL,
  fetcher,
  chainId,
}: ConstructFetchInput): GetDeltaOrdersFunctions => {
  const baseUrl = `${apiURL}/delta/v2/orders` as const;

  const getDeltaOrderById: GetDeltaOrderById = async (
    orderId,
    requestParams
  ) => {
    const fetchURL = `${baseUrl}/${orderId}` as const;
    return fetcher<DeltaAuction>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });
  };

  const getDeltaOrderByHash: GetDeltaOrderByHash = async (
    orderHash,
    requestParams
  ) => {
    const fetchURL = `${baseUrl}/hash/${orderHash}` as const;
    return fetcher<DeltaAuction>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });
  };

  const getDeltaOrders: GetDeltaOrders = async (options, requestParams) => {
    const chainIdString = options.chainId?.join(',');
    const statusString = options.status?.join(',');

    const search = constructSearchString<OrderFiltersQuery>({
      userAddress: options.userAddress,
      page: options.page,
      limit: options.limit,
      type: options.type,
      onChainOrderType: options.onChainOrderType,
      chainId: chainIdString,
      status: statusString,
    });

    const fetchURL = `${baseUrl}${search}` as const;

    return fetcher<PaginatedResponse<DeltaAuction>>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });
  };

  const getRequiredBalanceForDeltaOrders: GetRequiredBalance = async (
    userParams,
    requestParams
  ) => {
    const userURL =
      `${baseUrl}/fillablebalance/${chainId}/${userParams.userAddress}` as const;
    const fetchURL = userParams.tokenAddress
      ? (`${userURL}/${userParams.tokenAddress}` as const)
      : userURL;

    const response = await fetcher<Record<string, string>>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    return response;
  };

  return {
    getDeltaOrderById,
    getDeltaOrderByHash,
    getDeltaOrders,
    getRequiredBalanceForDeltaOrders,
  };
};
