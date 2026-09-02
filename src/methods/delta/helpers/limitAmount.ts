import type { DeltaRoute } from '../types';
import type { SwapSideUnion } from './types';

type ToOrderLimitAmountParams = {
  /**
   * @description The caller-supplied limit amount. On SELL, destination-token wei; on BUY,
   * origin src-token wei. See `toOrderLimitAmount`.
   */
  limitAmount?: string;
  /** @description The route the order is built from. */
  route: DeltaRoute;
  /** @description Order side. */
  side: SwapSideUnion;
};

/**
 * @description Converts a caller-supplied limit amount into the units the on-chain Order
 * carries.
 *
 * On a SELL the caller passes destination-token units (those of
 * `route.destination.output.amount`), but on a bridge route the Order's `destAmount` lives
 * in *bridge units*: the destination amount scaled by `bridge.contractParams.scalingFactor`,
 * the `int8` the settlement contract applies when it scales the amount back up on the
 * destination chain. Passing a destination-token amount straight through as `limitAmount`
 * therefore sets a limit that is wrong by `10 ** scalingFactor`.
 *
 * Returned unchanged for same-chain routes (`route.bridge === null`) and for BUY, where
 * `limitAmount` bounds `srcAmount` — origin src-token units, always an origin-chain amount,
 * never scaled. Which conversion applies is fully determined by the `route` and `side` the
 * caller already passes to the builders, so there is no unit flag to get wrong.
 */
export function toOrderLimitAmount({
  limitAmount,
  route,
  side,
}: ToOrderLimitAmountParams): string | undefined {
  const bridge = route.bridge;

  if (limitAmount === undefined || side !== 'SELL' || bridge === null) {
    return limitAmount;
  }

  return scaleToBridgeUnits(limitAmount, bridge.contractParams.scalingFactor);
}

function scaleToBridgeUnits(amount: string, scalingFactor: number): string {
  if (scalingFactor === 0) return amount;

  const value = BigInt(amount);

  if (scalingFactor < 0) {
    return (value * 10n ** BigInt(-scalingFactor)).toString();
  }

  const divisor = 10n ** BigInt(scalingFactor);

  // A SELL limitAmount is a *minimum* to receive, and Order units are integers:
  // round up, so that scaling back at settlement never lands below the amount
  // the user asked for.
  return ((value + divisor - 1n) / divisor).toString();
}
