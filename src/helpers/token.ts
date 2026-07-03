import type { MarkOptional } from 'ts-essentials';
import { uriToHttpURL } from './providers/uri';
import { ApiToken, TokenListItem } from '../types';

/**
 * @type hex token or account address
 */
export type Address = string;
/**
 * @type hex token address or token symbol
 */
export type AddressOrSymbol = string;
/**
 * @type number in string form
 */
export type PriceString = string;
/**
 * @type transaction hash
 */
export type TxHash = `0x${string}`;

// @TODO sync with what it actually is
export type LendingToken =
  | 'cToken'
  | 'iToken'
  | 'aToken'
  | 'aToken2'
  | 'idleToken'
  | 'Chai'
  | 'bDAI';

export type TokenType = 'ETH' | 'ERC20' | 'SYNTH';

/**
 * @type Token object returned from API used internally in API
 */
// consider if need the old class Token for backwards compatipility
// otherwise no real need
export type Token = {
  address: string;
  decimals: number;
  symbol?: string | undefined;
  name?: string | undefined;
  tags: string[];
  sources: string[];
  categories: string[];
  tokenType: LendingToken | TokenType;
  mainConnector: string;
  connectors: string[];
  network: number;
  img?: string | undefined;
  allowance?: string | undefined;
  balance?: string | undefined;
};

type DefaultedKeys =
  | 'tokenType'
  | 'mainConnector'
  | 'connectors'
  | 'network'
  | 'sources'
  | 'categories'
  | 'tags';

type ConstructTokenInput = MarkOptional<Token, DefaultedKeys>;

export const constructToken = <T extends ConstructTokenInput>(
  tokenProps: T
): Omit<T, DefaultedKeys> & Required<Pick<Token, DefaultedKeys>> => {
  const {
    tokenType = 'ERC20',
    mainConnector = 'ETH',
    connectors: connectorsInput = [],
    network = 1,
    sources = [],
    categories = [],
    tags = [],
    ...rest
  } = tokenProps;

  const connectors: Token['connectors'] =
    connectorsInput.length > 0 ? connectorsInput : [mainConnector];

  return {
    tokenType,
    connectors,
    mainConnector,
    network,
    sources,
    categories,
    tags,
    ...rest,
  };
};

export function constructApiToken(t: TokenListItem): ApiToken {
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
