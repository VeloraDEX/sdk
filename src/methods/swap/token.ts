import { API_URL } from '../../constants';
import { constructApiToken } from '../../helpers/token';
import { constructSearchString } from '../../helpers/misc';
import type {
  ApiToken,
  RequestParameters,
  ConstructFetchInput,
  TokenListApiResponse,
} from '../../types';

export type GetTokensParams = { category?: string };

export type GetTokens = {
  (
    options?: GetTokensParams,
    requestParams?: RequestParameters
  ): Promise<ApiToken[]>;
  /**
   * @deprecated Passing RequestParameters as the first argument is deprecated.
   * Pass it as the second argument instead: `getTokens({}, requestParams)`
   */
  (requestParams?: RequestParameters): Promise<ApiToken[]>;
};
export type GetAllTokens = (
  options?: GetTokensParams,
  requestParams?: RequestParameters
) => Promise<ApiToken[]>;

export type GetTokensFunctions = {
  getTokens: GetTokens;
  getAllTokens: GetAllTokens;
};

export const constructGetTokens = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): GetTokensFunctions => {
  const getTokens: GetTokens = async (
    { category, ..._requestParams }: GetTokensParams | RequestParameters = {},
    requestParams?: RequestParameters
  ) => {
    // always pass explicit type to make sure UrlSearchParams are correct
    const query = constructSearchString<GetTokensParams>({ category });

    const fetchURL = `${apiURL}/fiat/tokens/${chainId}${query}` as const;

    const data = await fetcher<TokenListApiResponse>({
      url: fetchURL,
      method: 'GET',
      requestParams: {
        ..._requestParams,
        ...requestParams,
      },
    });

    return data.tokens.map(constructApiToken);
  };

  const getAllTokens: GetAllTokens = async (
    { category } = {},
    requestParams
  ) => {
    // always pass explicit type to make sure UrlSearchParams are correct
    const query = constructSearchString<GetTokensParams>({ category });

    const fetchURL = `${apiURL}/fiat/tokens/all${query}` as const;

    const data = await fetcher<TokenListApiResponse>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    return data.tokens.map(constructApiToken);
  };

  return { getTokens, getAllTokens };
};
