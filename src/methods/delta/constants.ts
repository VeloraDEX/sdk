import { ZERO_ADDRESS } from '../common/orders/buildOrderData';
import { Bridge } from './helpers/types';

// for same-chain Orders, all 0 params
export const DEFAULT_BRIDGE = {
  protocolSelector: '0x00000000', // 4 bytes
  destinationChainId: 0,
  outputToken: ZERO_ADDRESS,
  scalingFactor: 0,
  protocolData: '0x',
} as const satisfies Bridge;
