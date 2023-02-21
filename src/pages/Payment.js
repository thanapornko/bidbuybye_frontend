import React from 'react';
import OrderSummary from '../components/checkout/OrderSummary';
import CreditCard from '../components/payment/CreditCard';
import TotalPrices from '../components/payment/TotalPrices';

function Payment() {
  return (
    <div className="ml-40 ">
      <div className="flex flex-row justify-center mt-20 ">
        <div>
          <div>
            <OrderSummary />
          </div>

          <div>
            <TotalPrices />
          </div>
        </div>
        <div className="px-3"></div>
        <div>
          <CreditCard />
        </div>
      </div>
    </div>
  );
}

export default Payment;
