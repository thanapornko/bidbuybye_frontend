import React from 'react';

import SellOrderSummary from '../components/checkout/SellOrderSummary';

function SellCheckout() {
  // console.log(order);
  return (
    <div className="ml-40  h-full  flex justify-center items-center">
      <div className="flex flex-row justify-center mt-[200px] mb-[500px]">
        <div>
          <SellOrderSummary />
        </div>
      </div>
    </div>
  );
}

export default SellCheckout;
