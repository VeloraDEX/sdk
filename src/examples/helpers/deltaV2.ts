import { DeltaOrderV2Response } from '../..';

// v2 status COMPLETED already accounts for destChain bridge settlement
// (crosschain orders sit in BRIDGING until the destChain leg is done).
function isCompletedDeltaV2Order(order: DeltaOrderV2Response) {
  return order.status === 'COMPLETED';
}

type GetDeltaOrderV2Fn = () => Promise<DeltaOrderV2Response>;

function fetchOrderPeriodically(getDeltaOrder: GetDeltaOrderV2Fn) {
  const intervalId = setInterval(async () => {
    const order = await getDeltaOrder();
    console.log('checks: ', order); // Handle or log the fetched order as needed

    if (isCompletedDeltaV2Order(order)) {
      clearInterval(intervalId); // Stop interval if completed
      console.log('Order completed');
    }
  }, 3000);
  console.log('Order Pending');
  // Return intervalId to enable clearing the interval if needed externally
  return intervalId;
}

export function startStatusCheckV2(getDeltaOrder: GetDeltaOrderV2Fn) {
  const intervalId = fetchOrderPeriodically(getDeltaOrder);
  setTimeout(() => clearInterval(intervalId), 60000 * 5); // Stop after 5 minutes
}
