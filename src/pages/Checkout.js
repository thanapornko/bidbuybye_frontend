import React from 'react';
import CheckOut from '../components/checkout/CheckOut';
import OrderSummary from '../components/checkout/OrderSummary';

function Checkout() {
  return (
    <div className="ml-40 ">
      <div className="flex flex-row justify-center mt-20 ">
        <div>
          <OrderSummary />
        </div>
        <div className="px-2"></div>
        <div>
          <CheckOut />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
