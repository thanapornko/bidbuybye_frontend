import { React, useState, useEffect } from 'react';
import CreditCard from '../components/payment/CreditCard';
import axios from 'axios';
import useOrder from '../hooks/useOrder';
import useAuth from '../hooks/useAuth';
import useProduct from '../hooks/useProduct';
import * as createOrderApi from '../apis/order-api';

const initialInput = {
  transactionId: '',
  bidId: '',
  userId: '',
  productId: ''
};

function BuyPayment() {
  const { order, charge, setCharge } = useOrder();
  const [getToken, setGetToken] = useState('');
  const [input, setInput] = useState(initialInput);
  const [minPrice, setMinPrice] = useState(
    JSON.parse(localStorage.getItem('minPrice')) || {}
  );

  const { productDetail } = useProduct();

  const { authenticatedUser } = useAuth('');

  useEffect(() => {
    setGetToken(getToken);
    setInput({
      ...input,
      transactionId: getToken,
      bidId: minPrice.bidId,

      userId: authenticatedUser.id,

      productId: productDetail?.products.id
    });
  }, [getToken]);

  const createSummaryOrder = async () => {
    await createOrderApi.createOrder(input);
    await localStorage.removeItem('minPrice');
  };

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

  return (
    <div className="ml-40 h-full">
      <div className="flex flex-row justify-center mt-[200px] mb-[500px] ">
        <div className="px-3"></div>
        <div>
          <CreditCard
            createCreditCardCharge={createCreditCardCharge}
            order={order}
            setGetToken={setGetToken}
            setInput={setInput}
            setMinPrice={setMinPrice}
            createSummaryOrder={createSummaryOrder}
          />
        </div>
      </div>
    </div>
  );
}

export default BuyPayment;
