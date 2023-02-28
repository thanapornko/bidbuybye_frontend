import { React, useState } from 'react';
import { BiMap } from 'react-icons/bi';
import { BsTruck } from 'react-icons/bs';
import { MdPayment, MdOutlineCropSquare } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function CheckOut(props) {
  return (
    <div className="flex flex-col w-[70%]  border-t-[1px] border-gray-300">
      <div className="flex flex-row justify-center ">
        <div className="font-semibold ">Checkout</div>
      </div>
      <div className="flex flex-row justify-between border-t-[1px] border-gray-300 ">
        <div className="p-1  flex flex-row ">
          <div>
            <BiMap />
          </div>
          <div className="p-1 text-[12px]">Shipping address</div>
        </div>
        <div className="p-1 text-[12px] font-semibold">Add address</div>
      </div>

      <div className="flex flex-row justify-between border-t-[1px] border-gray-300 ">
        <div div className="p-1 flex flex-row ">
          <div>
            <BsTruck />
          </div>
          <div className="p-1  text-[12px]">Shipping method to Sasom</div>
        </div>
        <div className="p-1 text-[12px] font-semibold">Add method</div>
      </div>

      <div className="flex flex-row justify-between border-t-[1px] border-gray-300 ">
        <div div className="p-1 flex flex-row ">
          <div>
            <MdPayment />
          </div>
          <div className="p-1  text-[12px]">Payment method</div>
        </div>
        <div className="p-1 text-[12px] font-semibold">Payout method</div>
      </div>
      <div className="flex flex-row justify-between border-t-[1px] border-gray-300 ">
        <div className="p-1  text-[12px]">Sub total</div>

        <div className="p-1  text-[12px] font-semibold">
          {' '}
          ฿ {props.order[props.order.length - 1]?.Bid.price}
        </div>
      </div>
      <div className="flex flex-row justify-between  ">
        <div className="p-1  text-[12px]">Transaction fee 7.0 %4.9 %</div>

        <div className="p-1 text-[12px] font-semibold">
          ฿{' '}
          {(
            props.order[props.order.length - 1]?.Bid.price *
            0.049 *
            1.07
          ).toFixed(2)}
        </div>
      </div>
      <div className="flex flex-row justify-between  ">
        <div className="p-1  text-[12px]">Payment Processing fee 3.0 %</div>

        <div className="p-1 text-[12px] font-semibold">
          ฿ {(props.order[props.order.length - 1]?.Bid.price * 0.03).toFixed(2)}
        </div>
      </div>
      <div className="flex flex-row justify-between  ">
        <div className="p-1  text-[12px]">Total</div>

        <div className="p-1 text-[12px] font-semibold">
          ฿{' '}
          {(
            parseFloat(props.order[props.order.length - 1]?.Bid.price) +
            parseFloat(props.order[props.order.length - 1]?.Bid.price) *
              0.049 *
              1.07 +
            parseFloat(props.order[props.order.length - 1]?.Bid.price) * 0.03
          ).toFixed(2)}{' '}
        </div>
      </div>

      <div className="flex flex-row">
        <div>
          <MdOutlineCropSquare />
        </div>
        <div className="flex flex-col">
          <div className="p-1 text-[12px]">
            I've read and agree to terms & conditions
          </div>
          <div className="p-1 text-[12px]">
            All sales are final. We accept refund for product damaged in transit
            or if the incorrect item was shipped
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between ">
        <div>
          <motion.div whileTap={{ scale: 0.75 }}>
            <button class="border border-gray-300  bg-gray-50 hover:bg-gray-500 text-black font-bold py-0.5 px-[70px]  rounded">
              Cancel
            </button>
          </motion.div>
        </div>
        <div>
          <motion.div whileTap={{ scale: 0.75 }}>
            <nav>
              <Link to="/payment">
                <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-0.5 px-[70px]  rounded">
                  Submit
                </button>
              </Link>
            </nav>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
