import { BiMap } from 'react-icons/bi';
import { BsTruck } from 'react-icons/bs';
import { MdPayment, MdOutlineCropSquare } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import React from 'react';
import EditMethod from './EditMethod';

function OrderSummary(props) {
  console.log(props);
  return (
    // container all
    <div className="flex gap-4">
      <EditMethod />
      {/* box-left */}
      <div className="w-[533px] h-[562px] border-2">
        {/* top */}
        <div className="h-[132px] flex p-4 border-b-2 gap-4">
          {/* left */}
          <div>
            <img
              src={props.order[props.order.length - 1]?.Product.ProductImage}
              alt="nikeDunkLow"
              className="w-[100px] h-[100px]"
            />
          </div>
          {/* right */}
          <div>
            <p className="text-[16px] text-[1B1B1B] leading-[1.5px]">
              {' '}
              {props.order[props.order.length - 1]?.Product.title}
            </p>
            <p className="text-sm my-3 text-[#808080]">
              {props.order[props.order.length - 1]?.Product.Brand.title} | //{' '}
              {props.order[props.order.length - 1]?.Product.skuProduct}
            </p>
          </div>
        </div>
        {/* bottom */}
        <div className="py-6 px-10">
          {/* left */}
          <div>
            <div className="flex justify-between">
              <p className="text-sm">Sell to bid</p>
              <p>฿ {props.order[props.order.length - 1]?.Bid.price}</p>
            </div>

            <div className="flex justify-between my-6">
              <p className="text-sm">Size</p>
              <p>
                {
                  props.order[props.order.length - 1]?.Bid.ProductSize.Size
                    .sizeProduct
                }
              </p>
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
                  <img
                    src={
                      props.order[props.order.length - 1]?.Product.ProductImage
                    }
                    alt="nikeDunkLow"
                    className="w-[48px] h-[48px]"
                  />

                  <img
                    src={
                      props.order[props.order.length - 1]?.Product.ProductImage
                    }
                    alt="nikeDunkLow"
                    className="w-[48px] h-[48px]"
                  />

                  <img
                    src={
                      props.order[props.order.length - 1]?.Product.ProductImage
                    }
                    alt="nikeDunkLow"
                    className="w-[48px] h-[48px]"
                  />
                </div>
              </p>
            </div>
          </div>
          {/* right */}
          <div></div>
        </div>
      </div>
      {/* box-right */}
      <div className="w-[564px] ">
        <div>
          <p className="text-[18px] py-4 text-center ">Checkout</p>
          <div className="flex p-[16px] items-center justify-between border-t-2">
            <div className="flex items-center text-[#000] gap-2">
              <BiMap />
              Shipping address
            </div>

            {props.order.length > 0 &&
            props.order[props.order.length - 1]?.User.address ? (
              <div className="w-1/2">
                {props.order[props.order.length - 1]?.User.address}
              </div>
            ) : (
              <motion.div whileTap={{ scale: 0.75 }}>
                <nav>
                  <Link to="/profile">
                    <div>
                      <button className="hover:underline">
                        Add address &gt;
                      </button>
                    </div>
                  </Link>
                </nav>
              </motion.div>
            )}
          </div>

          <div className="flex p-[16px] items-center justify-between border-t-2">
            <div className="flex items-center text-[#000] gap-2">
              <BsTruck />
              Shipping method to BidBuyBye
            </div>
            <button className="hover:underline">Add method &gt;</button>
          </div>

          <div className="flex p-[16px] items-center justify-between border-t-2">
            <div className="flex items-center text-[#000] gap-2">
              <MdPayment />
              Payment method
            </div>
            <button
              className="hover:underline"
              data-drawer-target="drawer-right"
              data-drawer-show="drawer-right"
              data-drawer-placement="right"
              aria-controls="drawer-right"
            >
              Payout method &gt;
            </button>
          </div>

          <div className="flex p-[16px] flex-col  border-t-2">
            <div className="flex items-center justify-between">
              <p>Sub total</p>
              <p>฿ {props.order[props.order.length - 1]?.Bid.price}</p>
            </div>

            <div className="flex items-center justify-between my-4">
              <p>
                Transaction fee 7.0%
                <span className="text-[#FF0000]">&nbsp;&nbsp;4.9 %</span>
              </p>
              <p>
                {' '}
                ฿{' '}
                {(
                  props.order[props.order.length - 1]?.Bid.price *
                  0.049 *
                  1.07
                ).toFixed(2)}
              </p>
            </div>

            <div className="flex items-center justify-between my-4">
              <p>Payment Processing fee 3.0 %</p>
              <p>
                {' '}
                ฿{' '}
                {(
                  props.order[props.order.length - 1]?.Bid.price * 0.03
                ).toFixed(2)}
              </p>
            </div>

            <div className="flex items-center justify-between my-4">
              <p className="text-[18px] text-[#00AA00]">Total</p>
              <p className="text-[18px] text-[#00AA00]">
                ฿{' '}
                {(
                  parseFloat(props.order[props.order.length - 1]?.Bid.price) +
                  parseFloat(props.order[props.order.length - 1]?.Bid.price) *
                    0.049 *
                    1.07 +
                  parseFloat(props.order[props.order.length - 1]?.Bid.price) *
                    0.03
                ).toFixed(2)}{' '}
              </p>
            </div>

            <div>
              {/* top */}
              <div className="flex gap-5">
                <span className="mt-2">
                  <input
                    type={'checkbox'}
                    className="outline-none border-none"
                  />
                </span>
                <div>
                  <p className="text-[14px] font-bold">
                    I've read and agree to{' '}
                    <span className="underline">terms & conditions</span>
                  </p>
                  <p className="text-[12px]">
                    {' '}
                    All sales are final. We accept refund for product damaged in
                    transit or if the incorrect item was shipped
                  </p>
                </div>
              </div>
              {/* bottom */}
              <div className="flex flex-row justify-between  mt-7 gap-5">
                <div>
                  <motion.div whileTap={{ scale: 0.75 }}>
                    <button class="text-[12px] text-[#5A5A5A] px-[15px] py-[5px] border-2 font-medium	text-center w-[273px] h-[36px] rounded	hover:border-gray-900 cursor-pointer">
                      Cancel
                    </button>
                  </motion.div>
                </div>
                <div>
                  <motion.div whileTap={{ scale: 0.75 }}>
                    <nav>
                      <Link to="/payment">
                        <button class="text-[12px] text-[#5A5A5A] px-[15px] py-[5px] bg-[#D9D9D9] font-medium	text-center w-[273px] h-[36px] rounded	">
                          Submit
                        </button>
                      </Link>
                    </nav>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OrderSummary;
