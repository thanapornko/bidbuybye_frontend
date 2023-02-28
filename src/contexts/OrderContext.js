import React, { createContext, useEffect, useState } from 'react';
import * as OrderApi from '../apis/order-api';

export const OrderContext = createContext();

function OrderContextProvider({ children }) {
  const [order, setOrder] = useState([]);
  const [charge, setCharge] = useState(undefined);
  // const [newCharge, setNewCharge] = useState(undefined);

  console.log(charge);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await OrderApi.getAllOrder();
        // if (res) {
        //   setOrder(res.data);
        // }
        setOrder(res.data);
      } catch (err) {}
    };

    fetchPost();
  }, []);

  // useEffect(() => {
  //   setNewCharge(charge);
  // }, [charge]);

  // console.log(newCharge);

  return (
    <OrderContext.Provider value={{ order, charge, setCharge }}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderContextProvider;
