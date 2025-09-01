import { API_URL } from '../../constants';
import { constructSearchString } from '../../helpers/misc';
import type {
  Address,
  ConstructFetchInput,
  RequestParameters,
} from '../../types';
import type { DeltaAuction } from './helpers/types';

export type DeltaOrderFromAPI = Omit<DeltaAuction, 'signature'>;

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
  chainId?: number; // @TODO currently not working
  /** @description Filter by type. MARKET, LIMIT, or ALL. Default is ALL */
  type?: 'MARKET' | 'LIMIT' | 'ALL';
};
type OrderFiltersQuery = OrdersFilter;

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
    const search = constructSearchString<OrderFiltersQuery>({
      userAddress: options.userAddress,
      page: options.page,
      limit: options.limit,
      chainId: options.chainId,
      type: options.type,
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
