import React from 'react';
import Approved from '../components/completed/Approved';
import useOrder from '../hooks/useOrder';

function Completed() {
  const { order, charge } = useOrder();

  return (
    <div>
      <Approved charge={charge} />
    </div>
  );
}

export default Completed;
