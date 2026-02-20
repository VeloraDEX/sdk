import { API_URL } from '../../constants';
import { constructSearchString } from '../../helpers/misc';
import type {
  Address,
  ConstructFetchInput,
  RequestParameters,
} from '../../types';
import type { DeltaAuction, DeltaAuctionStatus } from './helpers/types';

export type DeltaOrderFromAPI = Omit<DeltaAuction, 'signature'>;

export type DeltaOrderFilterByStatus =
  | DeltaAuctionStatus
  | 'INSUFFICIENT_BALANCE'
  | 'INSUFFICIENT_ALLOWANCE'
  | 'INVALIDATED'
  | 'ACTIVE'
  | 'INACTIVE';

type GetDeltaOrderById = (
  orderId: string,
  requestParams?: RequestParameters
) => Promise<DeltaOrderFromAPI>;

type GetDeltaOrderByHash = (
  orderHash: string,
  requestParams?: RequestParameters
) => Promise<DeltaOrderFromAPI>;

type OrdersFilter = {
  /** @description Order.owner to fetch Delta Order for */
  userAddress: Address;
  /** @description Pagination option, page. Default 1 */
  page?: number;
  /** @description Pagination option, limit. Default 100 */
  limit?: number;
  /** @description Filter by chainId, without this filter, orders from all chains are returned */
  chainId?: number[];
  /**
   * @description
   * Filter by any known DeltaAuctionStatus and some custom statuses:
   * - **INSUFFICIENT_BALANCE** —  returned as SUSPENDED from API
   * - **INSUFFICIENT_ALLOWANCE** —  returned as SUSPENDED from API
   * - **INVALIDATED** —  returned as FAILED from API
   * - **ACTIVE** —  All orders with NOT_STARTED, RUNNING, EXECUTING, CANCELLING or SUSPENDED statuses.
   * - **INACTIVE** —  All orders with EXECUTED, FAILED, EXPIRED, CANCELLED or INVALIDATED statuses.
   */
  status?: DeltaOrderFilterByStatus[];
  /** @description Filter by type. MARKET, LIMIT. Orders with both types are returned if not specified */
  type?: 'MARKET' | 'LIMIT';
};
type OrderFiltersQuery = Omit<OrdersFilter, 'chainId' | 'status'> & {
  chainId?: string;
  status?: string;
};

type GetDeltaOrders = (
  options: OrdersFilter,
  requestParams?: RequestParameters
) => Promise<DeltaOrderFromAPI[]>;

type GetRequiredBalanceParams = {
  userAddress: Address;
  tokenAddress?: Address;
};

type GetRequiredBalance = (
  userParams: GetRequiredBalanceParams,
  requestParams?: RequestParameters
) => Promise<Record<string, string>>; // token -> balance in Limit Orders

export type GetDeltaOrdersFunctions = {
  getDeltaOrderById: GetDeltaOrderById;
  getDeltaOrderByHash: GetDeltaOrderByHash;
  getDeltaOrders: GetDeltaOrders;
  getRequiredBalanceForDeltaLimitOrders: GetRequiredBalance;
};

export const constructGetDeltaOrders = ({
  apiURL = API_URL,
  fetcher,
  chainId,
}: ConstructFetchInput): GetDeltaOrdersFunctions => {
  const baseUrl = `${apiURL}/delta/orders` as const;

  const getDeltaOrderById: GetDeltaOrderById = async (
    orderId,
    requestParams
  ) => {
    const fetchURL = `${baseUrl}/${orderId}` as const;

    const order = await fetcher<DeltaOrderFromAPI>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    return order;
  };

  const getDeltaOrderByHash: GetDeltaOrderByHash = async (
    orderHash,
    requestParams
  ) => {
    const fetchURL = `${baseUrl}/hash/${orderHash}` as const;

    const order = await fetcher<DeltaOrderFromAPI>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    return order;
  };

  const getDeltaOrders: GetDeltaOrders = async (options, requestParams) => {
    const chainIdString = options.chainId?.join(',');
    const statusString = options.status?.join(',');

    const search = constructSearchString<OrderFiltersQuery>({
      userAddress: options.userAddress,
      page: options.page,
      limit: options.limit,
      type: options.type,
      chainId: chainIdString,
      status: statusString,
    });

    const fetchURL = `${baseUrl}${search}` as const;

    const orders = await fetcher<DeltaOrderFromAPI[]>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    return orders;
  };

  const getRequiredBalanceForDeltaLimitOrders: GetRequiredBalance = async (
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
    getRequiredBalanceForDeltaLimitOrders,
  };
};
