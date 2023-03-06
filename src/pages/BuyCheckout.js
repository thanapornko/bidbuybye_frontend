import React from 'react';
import BuyOrderSummary from '../components/checkout/BuyOrderSummary';

function BuyCheckout() {
  // console.log(order);
  return (
    <div className="ml-40  h-full  flex justify-center items-center">
      <div className="flex flex-row justify-center mt-[200px] mb-[500px]">
        <div>
          <BuyOrderSummary />
        </div>
      </div>
    </div>
  );
}

export default BuyCheckout;
