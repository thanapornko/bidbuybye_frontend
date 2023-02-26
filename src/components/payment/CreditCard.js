import { React, useState } from 'react';
import { SiMastercard } from 'react-icons/si';
// import { BsTruck } from 'react-icons/bs';
// import { MdPayment, MdOutlineCropSquare } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai';
import Script from 'react-load-script';

let OmiseCard;

function CreditCard(props) {
  const { createCreditCardCharge } = props;

  console.log(props.order);
  // const [state, setState] = useState({ charge: undefined });

  const handleLoadScript = () => {
    OmiseCard = window.OmiseCard;

    OmiseCard.configure({
      publicKey: 'pkey_test_5uvx5eva0ecjrz016tp',
      currency: 'thb',
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
    const { createCreditCardCharge } = props;
    totalPrice = (
      (parseFloat(props.order[props.order.length - 1]?.Bid.price) +
        parseFloat(props.order[props.order.length - 1]?.Bid.price) *
          0.049 *
          1.07 +
        parseFloat(props.order[props.order.length - 1]?.Bid.price) * 0.03) *
      100
    ).toFixed(2);

    name = props.order[props.order.length - 1]?.User.firstName;

    email = props.order[props.order.length - 1]?.User.email;

    OmiseCard.open({
      frameDescription: 'Invoice #3847',
      amount: totalPrice,
      onCreateTokenSuccess: (token) => {
        createCreditCardCharge(email, name, totalPrice, token);
      },
      onFormClosed: () => {}
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    creditCardConfigure();
    omiseCardHandle();
  };
  return (
    <div className="flex flex-col w-[70%]  ">
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
      <div
        className="flex flex-row justify-start  border-[1px]
       border-gray-300  pr-[160px] 
       gap-[140px]  
       
       "
      >
        <div className="p-1  flex flex-row mr-[50px]">
          <div className="mt-1.5">
            <SiMastercard />
          </div>
          <div className="p-1 text-[12px] flex flex-row gap-1">
            <p>MasterCard</p>
            <p className="text-gray-300">(default)</p>
          </div>
        </div>
        <div className="p-1 text-[18px] mt-1.5">
          <AiFillCheckCircle />
        </div>
      </div>

      <div className="flex flex-row justify-center ml-[5px] ">
        <div className="p-1 text-[10px] mt-5 "> Add new card </div>
      </div>
      <div className="flex flex-row justify-center  ">
        <div className="p-1 text-[10px] mt-5 text-gray-400 ml-[5px] ">
          {' '}
          You can add to 5 cards to 1 SASOM account{' '}
        </div>
      </div>

      <div className="flex flex-row justify-center ">
        <div>
          <form>
            <button
              id="credit-card1"
              className="bg-gray-500 hover:bg-gray-700
           text-white font-bold py-0.5 ml-[0px] px-[155px] mt-[150px] rounded"
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
