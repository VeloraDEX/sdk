import { DeltaAuction, DeltaOrderStatus } from '../..';

// Terminal statuses — once an order reaches any of these it won't change again,
// so polling should stop. COMPLETED already accounts for destChain bridge
// settlement (crosschain orders sit in BRIDGING until the destChain leg is done).
const SETTLED_STATUSES: DeltaOrderStatus[] = [
  'COMPLETED',
  'FAILED',
  'CANCELLED',
  'EXPIRED',
  'REFUNDED',
];

function isSettledDeltaOrder(order: DeltaAuction) {
  return SETTLED_STATUSES.includes(order.status);
}

type GetDeltaOrderFn = () => Promise<DeltaAuction>;

function fetchOrderPeriodically(getDeltaOrder: GetDeltaOrderFn) {
  const intervalId = setInterval(async () => {
    const order = await getDeltaOrder();
    console.log('checks: ', order); // Handle or log the fetched order as needed

    if (isSettledDeltaOrder(order)) {
      clearInterval(intervalId); // Stop interval once the order is settled
      console.log(`Order settled: ${order.status}`);
    }
  }, 3000);
  console.log('Order Pending');
  // Return intervalId to enable clearing the interval if needed externally
  return intervalId;
}

export function startStatusCheck(getDeltaOrder: GetDeltaOrderFn) {
  const intervalId = fetchOrderPeriodically(getDeltaOrder);
  const timeoutId = setTimeout(() => clearInterval(intervalId), 60000 * 5); // Stop after 5 minutes

  return () => {
    clearInterval(intervalId);
    clearTimeout(timeoutId);
  };
}
