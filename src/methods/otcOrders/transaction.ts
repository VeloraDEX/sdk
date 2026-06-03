import type { ConstructFetchInput, OptimalRate } from '../../types';

import { assert } from 'ts-essentials';
import {
  API_URL,
  SwapSide,
  ContractMethod,
  DEFAULT_VERSION,
} from '../../constants';
import {
  BuildOTCOrderTxInput,
  BuildOptions,
  BuildSwapAndOTCOrderTxInput,
  TransactionParams,
  constructBuildTx,
} from '../swap/transaction';
import { constructGetRate, GetRateInput, RateOptions } from '../swap/rates';
import type { OrderData } from './buildOrder';
import { isFilledArray } from '../../helpers/misc';
import type { RequestParameters } from '../../types';

type MinBuildSwapAndOTCOrderTxInput = Omit<
  // these are derived from `orders`
  BuildSwapAndOTCOrderTxInput,
  'srcToken' | 'srcAmount' | 'destToken' | 'destDecimals'
>;

type BuildSwapAndOTCOrdersTx = (
  params: MinBuildSwapAndOTCOrderTxInput,
  options?: BuildOptions,
  requestParams?: RequestParameters
) => Promise<TransactionParams>;

type MinBuildOTCOrderTxInput = Omit<
  BuildOTCOrderTxInput,
  // these are derived from `orders`
  'srcToken' | 'srcAmount' | 'destToken' | 'slippage'
  // `slippage` doesn't participate as we derive `srcAmount` already
>;

type BuildOTCOrdersTx = (
  params: MinBuildOTCOrderTxInput,
  options?: BuildOptions,
  requestParams?: RequestParameters
) => Promise<TransactionParams>;

export type BuildOTCOrdersTxFunctions = {
  getOTCOrdersRate: GetOTCOrdersRate;
  buildOTCOrderTx: BuildOTCOrdersTx;
  buildSwapAndOTCOrderTx: BuildSwapAndOTCOrdersTx;
};

type GetOTCOrdersRate = (
  // `amount`, if given, must equal the total of the orders' `takerAmounts`
  options: Omit<GetRateInput, 'amount' | 'side'> & { amount?: string },
  orders: CheckableOrderData[],
  requestParams?: RequestParameters
) => Promise<OptimalRate>;

export const constructBuildOTCOrderTx = ({
  apiURL = API_URL,
  version = DEFAULT_VERSION,
  chainId,
  fetcher,
}: ConstructFetchInput): BuildOTCOrdersTxFunctions => {
  const { buildTx: buildSwapTx } = constructBuildTx({
    apiURL,
    chainId,
    fetcher,
    version,
  });

  const { getRate: getSwapAndOTCOrderRate } = constructGetRate({
    apiURL,
    version,
    chainId,
    fetcher,
  });

  //  returns priceRoute that would allow to swap from srcToken to destToken(=order.takerAsset) followed by filling OTC orders
  const getOTCOrdersRate: GetOTCOrdersRate = async (
    { srcToken, destToken, amount, options: _options = {}, ...rest },
    orders,
    requestParams
  ) => {
    assert(orders.length > 0, 'must pass at least 1 order');

    const { totalTakerAmount, takerAsset } = checkAndParseOrders(orders);
    assert(
      takerAsset.toLowerCase() === destToken.toLowerCase(),
      'All orders must have the same takerAsset as destToken'
    );

    const takerAmountString = totalTakerAmount.toString(10);

    if (amount) {
      assert(
        amount === takerAmountString,
        "`amount` must equal the total of the orders' `takerAmounts`"
      );
    }

    // The pricing must use includeContractMethods=simpleBuy and side=BUY
    const options: RateOptions = {
      ..._options,
      includeContractMethods: [ContractMethod.simpleBuy],
    };

    const side = SwapSide.BUY;

    const rateInput: GetRateInput = {
      ...rest,
      srcToken,
      destToken,
      amount: takerAmountString,
      side,
      options,
    };

    // priceRoute
    const optimalRate = await getSwapAndOTCOrderRate(rateInput, requestParams);
    return optimalRate;
  };

  // derive srcToken, destToken and srcAmount from orders[]
  const buildOTCOrderTx: BuildOTCOrdersTx = (
    params,
    options,
    requestParams
  ) => {
    const { makerAsset, takerAsset, totalTakerAmount } = checkAndParseOrders(
      params.orders
    );

    const fillParams: BuildOTCOrderTxInput = {
      ...params,
      // taker supplies takerAsset
      srcToken: takerAsset,
      // no `slippage` in `params`
      srcAmount: totalTakerAmount.toString(10),
      // taker gets makerAsset in the end
      destToken: makerAsset,
    };

    return buildSwapTx(fillParams, options, requestParams);
  };

  const buildSwapAndOTCOrderTx: BuildSwapAndOTCOrdersTx = (
    params,
    options,
    requestParams
  ) => {
    const { makerAsset } = checkAndParseOrders(params.orders);

    const fillParams: BuildSwapAndOTCOrderTxInput = {
      ...params,
      // taker supplies srcToken
      srcToken: params.priceRoute.srcToken,
      // which is swapped for makerAsset, that would go towards filling the orders
      destToken: makerAsset,
      destDecimals: params.priceRoute.destDecimals,
      // one or the other
      ...(params.slippage
        ? { slippage: params.slippage }
        : //                                        may sneak in as part of `params`
          { srcAmount: params.priceRoute.srcAmount, slippage: undefined }),
    };

    return buildSwapTx(fillParams, options, requestParams);
  };

  return {
    getOTCOrdersRate,
    buildOTCOrderTx,
    buildSwapAndOTCOrderTx,
  };
};

type CheckAndParseOrdersResult = Omit<CheckableOrderData, 'takerAmount'> & {
  totalTakerAmount: bigint;
};

type CheckableOrderData = Pick<
  OrderData,
  'takerAsset' | 'makerAsset' | 'takerAmount' | 'maker'
> & { taker?: OrderData['taker'] };

function checkAndParseOrders(
  orders: CheckableOrderData[]
): CheckAndParseOrdersResult {
  assert(isFilledArray(orders), 'must pass at least 1 order');

  const { takerAssetsSet, makerAssetsSet, totalTakerAmount } = orders.reduce<
    Record<'takerAssetsSet' | 'makerAssetsSet', Set<string>> & {
      totalTakerAmount: bigint;
    }
  >(
    (accum, order) => {
      accum.takerAssetsSet.add(order.takerAsset.toLowerCase());
      accum.makerAssetsSet.add(order.makerAsset.toLowerCase());

      accum.totalTakerAmount =
        accum.totalTakerAmount + BigInt(order.takerAmount);
      return accum;
    },
    {
      takerAssetsSet: new Set(),
      makerAssetsSet: new Set(),
      totalTakerAmount: BigInt(0),
    }
  );

  assert(
    takerAssetsSet.size === 1,
    'All orders must have the same takerAsset as destToken'
  );
  assert(makerAssetsSet.size === 1, 'All orders must have the same makerAsset');

  const [{ maker, taker, makerAsset, takerAsset }] = orders;

  return {
    totalTakerAmount,
    maker,
    taker,
    makerAsset,
    takerAsset,
  };
}
