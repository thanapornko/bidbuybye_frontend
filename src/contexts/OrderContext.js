import React, { createContext, useEffect, useState } from 'react';
import * as OrderApi from '../apis/order-api';

export const OrderContext = createContext();

function OrderContextProvider({ children }) {
  const [order, setOrder] = useState([]);
  const [charge, setCharge] = useState(undefined);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await OrderApi.getAllOrder();

        setOrder(res.data);
      } catch (err) {}
    };

    fetchPost();
  }, []);

  return (
    <OrderContext.Provider value={{ order, charge, setCharge }}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderContextProvider;
