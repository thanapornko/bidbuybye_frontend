import React from 'react';
import SellApproved from '../components/completed/SellApproved';
import useOrder from '../hooks/useOrder';

function SellCompleted() {
  const { order, charge } = useOrder();

  return (
    <div>
      <SellApproved charge={charge} />
    </div>
  );
}

export default SellCompleted;
