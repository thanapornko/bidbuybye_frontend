import React from 'react';

function TotalPrices(props) {
  return (
    <div className="mt-8">
      <div className="text-gray-400 text-[10px]">Total</div>
      <div className="text-green-500 text-[15px]">
        {' '}
        ฿{' '}
        {(
          parseFloat(props.order[props.order.length - 1]?.Bid.price) +
          parseFloat(props.order[props.order.length - 1]?.Bid.price) *
            0.049 *
            1.07 +
          parseFloat(props.order[props.order.length - 1]?.Bid.price) * 0.03
        ).toFixed(2)}{' '}
      </div>
    </div>
  );
}

export default TotalPrices;
