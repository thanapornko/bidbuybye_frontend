import React, { createContext, useEffect, useState } from 'react';
import * as OrderApi from '../apis/order-api';

export const OrderContext = createContext();

function OrderContextProvider({ children }) {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await OrderApi.getAllOrder();
      if (res) {
        setOrder(res.data);
      }
    };

    fetchPost();
  }, []);

  console.log(order);
  return (
    <OrderContext.Provider value={{ order }}>{children}</OrderContext.Provider>
  );
}

export default OrderContextProvider;
