import React, { createContext, useEffect, useState } from 'react';
import * as OrderApi from '../apis/order-api';
import * as BidApi from '../apis/order-api';
export const OrderContext = createContext();

function OrderContextProvider({ children }) {
  const [order, setOrder] = useState([]);
  const [charge, setCharge] = useState(undefined);
  const [bid, setBid] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await OrderApi.getAllOrder();

        setOrder(res.data);
      } catch (err) {}
    };

    fetchPost();
  }, []);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await BidApi.getAllBid();

        setBid(res.data);
      } catch (err) {}
    };

    fetchPost();
  }, []);

  // console.log(bid, 'bid888888888888888888888888');
  return (
    <OrderContext.Provider value={{ order, charge, setCharge, bid }}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderContextProvider;
