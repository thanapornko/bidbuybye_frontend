import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import { BsBank } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MdOutlineKeyboardBackspace } from 'react-icons/md';

function SellApproved(props) {
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
        <h4 className=" font-bold text-3xl">
          Thank you for your payment with Bank Transfer.
        </h4>
      </div>
      <div className="pt-[80px] flex flex-row justify-center ">
        <div className="flex flex-col justify-center pb-[25vh] ">
          <div className="text-7xl text-green-500 mb-10 ml-[40px]">
            <AiOutlineCheckCircle />
          </div>
          <div className="text-3xl font-bold mb-4 ">Approved</div>
          <div className="flex flex-row justify-center">
            <div>
              <BsBank className="font-normal text-[40px] text-blue-600 my-2" />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default SellApproved;
