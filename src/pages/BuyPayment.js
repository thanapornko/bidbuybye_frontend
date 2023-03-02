import { React, useState } from 'react';
// import Script from 'react-load-script';

import CreditCard from '../components/payment/CreditCard';

import axios from 'axios';
// import axios from '../config/axios';
import useOrder from '../hooks/useOrder';

function BuyPayment() {
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
    <div className="ml-40 h-full">
      <div className="flex flex-row justify-center mt-[200px] mb-[500px] ">
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

export default BuyPayment;
