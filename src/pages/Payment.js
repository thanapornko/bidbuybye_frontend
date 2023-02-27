import { React, useState } from 'react';
// import Script from 'react-load-script';
import OrderSummary from '../components/checkout/OrderSummary';
import CreditCard from '../components/payment/CreditCard';
import TotalPrices from '../components/payment/TotalPrices';
import axios from 'axios';
// import axios from '../config/axios';
import useOrder from '../hooks/useOrder';

function Payment() {
  const { order, charge, setCharge } = useOrder();

  const createCreditCardCharge = async (email, name, amount, token) => {
    try {
      const res = await axios({
        method: 'post',
        url: 'http://localhost:8080/checkout/checkout-credit-card',
        data: {
          email: email,
          name: name,
          amount: amount,
          token: token
        },
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const resData = res.data;
      setCharge(resData);
      console.log(resData);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(charge);
  return (
    <div className="ml-40 ">
      <div className="flex flex-row justify-center mt-20 ">
        <div>
          <div>
            <OrderSummary order={order} />
          </div>

          <div>
            <TotalPrices order={order} />
          </div>
        </div>
        <div className="px-3"></div>
        <div>
          <CreditCard
            createCreditCardCharge={createCreditCardCharge}
            order={order}
          />
        </div>
      </div>
    </div>
  );
}

export default Payment;
