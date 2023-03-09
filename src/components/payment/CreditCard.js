import { React, useState, useEffect } from 'react';
import { SiMastercard } from 'react-icons/si';

import { AiFillCheckCircle } from 'react-icons/ai';
import Script from 'react-load-script';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import masterCard from '../../Images/masterCard.png';
import useProduct from '../../hooks/useProduct';
import useAuth from '../../hooks/useAuth';
import styled from 'styled-components';

let OmiseCard;

const MirrorImage10 = styled.img`
  width: 48px;
  height: 48px;
  transform: scaleX(1) rotate(5deg);
`;

const MirrorImage = styled.img`
  width: 48px;
  height: 48px;
  transform: scaleX(-1) rotate(0deg);
`;

const MirrorImage30 = styled.img`
  width: 48px;
  height: 48px;
  transform: scalex(1) rotate(-5deg);
`;

function CreditCard(props) {
  const navigate = useNavigate();
  const { setMinPrice, createSummaryOrder } = props;

  const {
    fetchProductDetail,
    productDetail,

    NewMinPriceBySize
  } = useProduct();

  const { authenticatedUser } = useAuth();
  const { productId } = useParams();

  const handleLoadScript = () => {
    OmiseCard = window.OmiseCard;

    OmiseCard.configure({
      publicKey: 'pkey_test_5uvx5eva0ecjrz016tp',
      currency: 'THB',
      frameLabel: 'BIDBUYBYE',
      submitLabel: 'PAY NOW',
      buttonLabel: 'Pay with Omise'
    });
  };

  const creditCardConfigure = () => {
    OmiseCard.configure({
      defaultPaymentMethod: 'credit_card',
      otherPaymentMethods: []
    });
    OmiseCard.configureButton('#credit-card1');
    OmiseCard.attach();
  };
  let totalPrice;
  let name;
  let email;
  const omiseCardHandle = () => {
    const { createCreditCardCharge, setGetToken } = props;

    totalPrice = (
      (parseFloat(NewMinPriceBySize?.minPrice) +
        parseFloat(NewMinPriceBySize?.minPrice) * 0.049 * 1.07 +
        parseFloat(NewMinPriceBySize?.minPrice) * 0.03) *
      100
    ).toFixed(2);

    name = authenticatedUser.firstName;

    email = authenticatedUser.email;

    OmiseCard.open({
      amount: totalPrice,
      onCreateTokenSuccess: async function (token) {
        try {
          await createCreditCardCharge(email, name, totalPrice, token);
          await setGetToken(token);
          await createSummaryOrder();

          await navigate('/completed');

          // await localStorage.removeItem('minPrice');
        } catch (error) {
          // handle error
        }
      },
      onFormClosed: function () {
        // Redirect to the next page after the modal is closed
      }
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    creditCardConfigure();
    omiseCardHandle();
  };

  useEffect(() => {
    (async () => {
      try {
        await fetchProductDetail(productId);
      } catch (error) {}
      if (NewMinPriceBySize) {
        localStorage.setItem('minPrice', JSON.stringify(NewMinPriceBySize));
        setMinPrice(NewMinPriceBySize);
      }
    })();
  }, [productId]);

  return (
    <div className="flex gap-4 mb-10">
      <div className="w-[533px] h-[562px] border-2">
        {/* top */}
        <div className="h-[132px] flex p-4 border-b-2 gap-4">
          {/* left */}
          <div>
            <img
              src={NewMinPriceBySize?.product}
              alt="nikeDunkLow"
              className="w-[100px] h-[100px]"
            />
          </div>
          {/* right */}
          <div>
            <p className="text-[16px] text-[1B1B1B] leading-[1.5px]">
              {' '}
              {productDetail?.products.title}
            </p>
            <p className="text-sm my-3 text-[#808080]">
              {productDetail?.products.Brand.title} | //{' '}
              {productDetail?.products.skuProduct}
            </p>
          </div>
        </div>
        {/* bottom */}
        <div className="py-6 px-10">
          {/* left */}
          <div>
            <div className="flex justify-between">
              <p className="text-sm">Sell to bid</p>
              <p>฿ {NewMinPriceBySize?.minPrice}</p>
            </div>

            <div className="flex justify-between my-6">
              <p className="text-sm">Size</p>
              <p>{NewMinPriceBySize?.size}</p>
            </div>

            <div className="flex justify-between my-6">
              <p className="text-sm">Condition</p>
              <p>Brand new</p>
            </div>

            <div className="flex justify-between my-6">
              <p className="text-sm">Equipment</p>
              <p>Original box (no defect)</p>
            </div>

            <div className="flex justify-between my-6 py-2 items-center">
              <p className="text-sm">Product Images</p>
              <p>
                <div className="flex">
                  <MirrorImage10
                    src={NewMinPriceBySize?.product}
                    alt="nikeDunkLow"
                    className="w-[48px] h-[48px]"
                  />

                  <MirrorImage
                    src={NewMinPriceBySize?.product}
                    alt="nikeDunkLow"
                    className="w-[48px] h-[48px]"
                  />

                  <MirrorImage30
                    src={NewMinPriceBySize?.product}
                    alt="nikeDunkLow"
                    className="w-[48px] h-[48px] ml-[3px]"
                  />
                </div>
              </p>
            </div>
          </div>
          {/* right */}
          <div className="mt-8 border-t-2">
            <div className="text-gray-400 text-[10px] mt-5">Total</div>
            <div className="text-green-500 text-[15px]">
              {' '}
              ฿{' '}
              {(
                parseFloat(NewMinPriceBySize?.minPrice) +
                parseFloat(NewMinPriceBySize?.minPrice) * 0.049 * 1.07 +
                parseFloat(NewMinPriceBySize?.minPrice) * 0.03
              ).toFixed(2)}{' '}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[533px] h-[562px] p-[16px]  ">
        <Script
          type="text/javascript"
          url="https://cdn.omise.co/omise.js"
          onLoad={handleLoadScript}
        />
        <div className="flex flex-row justify-center  px-[50px]  ">
          <div className="font-semibold mb-[20px] ml-[5px]">
            Credit/Debit card
          </div>
        </div>
        <div className="border-2 rounded">
          <div className="p-1  flex flex-row  bg-gray-300 items-center justify-between">
            <div className="p-1 text-[12px] flex flex-row gap-1 h-[50px] items-center justify-between">
              <img src={masterCard} className="w-[30px]" />
              <p>MasterCard</p>
              <p className="text-gray-300">(default)</p>
            </div>
            <div className="mr-5 ">
              <AiFillCheckCircle className="text-[20px]" />
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center ml-[5px] ">
          <div className="p-1 text-[10px] mt-5 "> Add new card </div>
        </div>

        <div className="flex flex-row justify-center items-end h-[100%] ">
          <form>
            <button
              id="credit-card1"
              className="bg-gray-500 hover:bg-gray-700
           text-white font-bold py-2 ml-[0px] px-[220px] mt-[150px] rounded"
              onClick={handleClick}
            >
              Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
