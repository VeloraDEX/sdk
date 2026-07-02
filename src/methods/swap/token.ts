import { API_URL } from '../../constants';
import { constructToken } from '../../helpers/token';
import { constructSearchString } from '../../helpers/misc';
import type {
  RequestParameters,
  ConstructFetchInput,
  Token as SDKToken,
  TokenListApiResponse,
  TokenListItem,
} from '../../types';
import { MarkRequired, Prettify } from 'ts-essentials';
import { uriToHttpURL } from '../../helpers/providers/uri';

type GetTokensParams = { category?: string };

type Token = Prettify<
  MarkRequired<
    Omit<SDKToken, 'allowance' | 'balance'>,
    'sources' | 'categories'
  > & { name: string }
>;

type GetTokens = (
  options?: GetTokensParams,
  requestParams?: RequestParameters
) => Promise<Token[]>;
type GetAllTokens = (
  options?: GetTokensParams,
  requestParams?: RequestParameters
) => Promise<Token[]>;

export type GetTokensFunctions = {
  getTokens: GetTokens;
  getAllTokens: GetAllTokens;
};

function makeTokenFromApiToken(t: TokenListItem): Token {
  return constructToken({
    address: t.address,
    decimals: t.decimals,
    symbol: t.symbol,
    name: t.name,
    network: t.chainId,
    sources: t.sources,
    categories: t.categories,
    img: t.logoURI ? uriToHttpURL(t.logoURI) : undefined,
    tags: t.tags,
  });
}

export const constructGetTokens = ({
  apiURL = API_URL,
  chainId,
  fetcher,
}: ConstructFetchInput): GetTokensFunctions => {
  const getTokens: GetTokens = async ({ category } = {}, requestParams) => {
    // always pass explicit type to make sure UrlSearchParams are correct
    const query = constructSearchString<GetTokensParams>({ category });

    const fetchURL = `${apiURL}/fiat/tokens/${chainId}${query}` as const;

    const data = await fetcher<TokenListApiResponse>({
      url: fetchURL,
      method: 'GET',
      requestParams,
    });

    return data.tokens.map(makeTokenFromApiToken);
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

    return data.tokens.map(makeTokenFromApiToken);
  };

  return { getTokens, getAllTokens };
};
