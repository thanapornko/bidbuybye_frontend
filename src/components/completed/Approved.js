import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import { BsFillCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';
import mastercardImage from '../../assets/masterCard.png';

function Approved(props) {
  console.log(props);

  return (
    <div>
      <div className="flex flex-col justify-start ml-5 ">
        <nav>
          <Link to="/product">
            <motion.div whileTap={{ scale: 0.75 }}>
              <MdOutlineKeyboardBackspace className="text-textColor text-3xl " />
            </motion.div>
          </Link>
        </nav>
      </div>

      <div className="text-center mt-[110px] ">
        {props.charge && (
          <div className="message">
            <h4 className=" font-bold text-3xl">
              Thank you for your payment with credit card.
            </h4>
            <p className="font-semi-bold text-xl">
              Your payment amount is{' '}
              <span className="amount">
                {new Intl.NumberFormat().format(props.charge.amount / 100)}{' '}
                Baht.{' '}
              </span>
              Status{' '}
              <span
                className={
                  props.charge.status === 'successful' ? 'success' : 'failed'
                }
              >
                {props.charge.status}
              </span>
            </p>
          </div>
        )}
      </div>
      <div className="pt-[80px] flex flex-row justify-center ">
        <div className="flex flex-col justify-center items-center">
          <div className="text-7xl text-green-500 mb-10 ">
            <AiOutlineCheckCircle />
          </div>
          <div className="text-3xl font-bold mb-4 ">Approved</div>
          <div className="flex flex-row justify-between relative pb-[25vh]">
            <div>
              <img
                src={mastercardImage || null}
                alt="mastercard"
                className="w-10 h-15 mt-[5px]"
              />
            </div>

            <div className="mt-2 ml-[10px]">4242</div>

            <div className="mt-2 ml-[10px]">09/25</div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Approved;
