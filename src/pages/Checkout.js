import React from 'react';
import CheckOut from '../components/checkout/CheckOut';
import OrderSummary from '../components/checkout/OrderSummary';
import useOrder from '../hooks/useOrder';

function Checkout() {
  const { order } = useOrder();
  console.log(order);

  console.log(order);
  return (
    <div className="ml-40 ">
      <div className="flex flex-row justify-center mt-20 ">
        <div>
          <OrderSummary order={order} />
        </div>
        <div className="px-[8px]"></div>
        <div>
          <CheckOut order={order} />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
