import { BiMap } from 'react-icons/bi';
import { BsTruck } from 'react-icons/bs';
import { MdPayment, MdOutlineCropSquare } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import React, { useEffect, useState } from 'react';
import EditMethods from '../checkout/EditMethods';
import useProduct from '../../hooks/useProduct';
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router-dom';
import EditProfile from '../EditProfile';
import styled from 'styled-components';

const MirrorImage10 = styled.img`
  width: 48px;
  height: 48px;
  transform: scaleX(-1) rotate(-5deg);
`;

const MirrorImage = styled.img`
  width: 48px;
  height: 48px;
  transform: scaleX(1) rotate(0deg);
`;

const MirrorImage30 = styled.img`
  width: 48px;
  height: 48px;
  transform: scalex(-1) rotate(3deg);
`;

function SellOrderSummary(props) {
  const [isChecked, setIsChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [newOpen, setNewOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const newToggleDrawer = () => {
    setNewOpen(!newOpen);
  };
  const { authenticatedUser } = useAuth();
  const {
    fetchProductDetail,
    productDetail,

    NewmaxPriceBySize
  } = useProduct();
  const { productId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        await fetchProductDetail(productId);
      } catch (error) {}
      if (NewmaxPriceBySize) {
        localStorage.setItem('maxPrice', JSON.stringify(NewmaxPriceBySize));
      }
    })();
  }, [productId]);
  function deleteMaxPrice() {
    localStorage.removeItem('maxPrice');
  }
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = () => {
    // Perform the submit action only if the checkbox is checked
    if (isChecked) {
      // Perform the submit action here
      console.log('Submitting form');
    } else {
      // Show an error message here
      console.log('Checkbox not checked');
    }
  };
  return (
    // container all
    <div className="flex gap-4">
      <EditProfile open={open} setOpen={setOpen} toggleDrawer={toggleDrawer} />
      <EditMethods
        open={newOpen}
        setOpen={setNewOpen}
        toggleDrawer={newToggleDrawer}
      />
      {/* box-left */}
      <div className="w-[533px] h-[562px] border-2">
        {/* top */}
        <div className="h-[132px] flex p-4 border-b-2 gap-4">
          {/* left */}
          <div>
            <img
              src={NewmaxPriceBySize.product}
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
              <p>฿ {NewmaxPriceBySize?.maxPrice}</p>
            </div>

            <div className="flex justify-between my-6">
              <p className="text-sm">Size</p>
              <p>{NewmaxPriceBySize?.size}</p>
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
                    src={NewmaxPriceBySize.product}
                    alt="nikeDunkLow"
                    className="w-[48px] h-[48px]"
                  />

                  <MirrorImage
                    src={NewmaxPriceBySize.product}
                    alt="nikeDunkLow"
                    className="w-[48px] h-[48px]"
                  />

                  <MirrorImage30
                    src={NewmaxPriceBySize.product}
                    alt="nikeDunkLow"
                    className="w-[48px] h-[48px] ml-[4px]"
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

            {authenticatedUser.address?.length > 0 &&
            authenticatedUser?.address ? (
              <div className="w-1/2">{authenticatedUser.address}</div>
            ) : (
              <motion.div whileTap={{ scale: 0.75 }}>
                <div>
                  <button className="hover:underline" onClick={toggleDrawer}>
                    Add address &gt;
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          <div className="flex p-[16px] items-center justify-between border-t-2">
            <div className="flex items-center text-[#000] gap-2">
              <BsTruck />
              Shipping method
            </div>
            <div className="hover:underline">Kerry Express</div>
          </div>

          <div className="flex p-[16px] items-center justify-between border-t-2">
            <div className="flex items-center text-[#000] gap-2">
              <MdPayment />
              Payment method
            </div>
            <button onClick={newToggleDrawer}>Bank transfer &gt;</button>
          </div>

          <div className="flex p-[16px] flex-col  border-t-2">
            <div className="flex items-center justify-between">
              <p>Sub total</p>
              <p>฿ {NewmaxPriceBySize?.maxPrice}</p>
            </div>

            <div className="flex items-center justify-between my-4">
              <p>
                Transaction fee 7.0%
                <span className="text-[#FF0000]">&nbsp;&nbsp;4.9 %</span>
              </p>
              <p>
                {' '}
                ฿ {(NewmaxPriceBySize?.maxPrice * 0.049 * 1.07).toFixed(2)}
              </p>
            </div>

            <div className="flex items-center justify-between my-4">
              <p>Payment Processing fee 3.0 %</p>
              <p> ฿ {(NewmaxPriceBySize?.maxPrice * 0.03).toFixed(2)}</p>
            </div>

            <div className="flex items-center justify-between my-4">
              <p className="text-[18px] text-[#00AA00]">Total</p>
              <p className="text-[18px] text-[#00AA00]">
                ฿{' '}
                {(
                  parseFloat(NewmaxPriceBySize?.maxPrice) +
                  parseFloat(NewmaxPriceBySize?.maxPrice) * 0.049 * 1.07 +
                  parseFloat(NewmaxPriceBySize?.maxPrice) * 0.03
                ).toFixed(2)}{' '}
              </p>
            </div>

            <div>
              <div className="flex gap-5">
                <span>
                  <input
                    type={'checkbox'}
                    className="border border-gray-400 rounded p-2 focus:outline-none"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                </span>
                <div>
                  <p className="text-[14px] font-bold">
                    I've read and agree to{' '}
                    <span className="underline">terms &amp; conditions</span>
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
                    <nav>
                      <Link to={`/product/detail/${productId}`}>
                        <button
                          class="text-[12px] text-[#5A5A5A] px-[15px] py-[5px] border-2 font-medium
                    	text-center w-[273px] h-[36px] rounded	hover:border-gray-900 cursor-pointer"
                          onClick={deleteMaxPrice}
                        >
                          Cancel
                        </button>
                      </Link>
                    </nav>
                  </motion.div>
                </div>
                <div>
                  <motion.div whileTap={{ scale: 0.75 }}>
                    <nav>
                      <Link to="/sell-completed">
                        <button
                          class="text-[12px]
                         text-[#5A5A5A] px-[15px] py-[5px] 
                         bg-[#D9D9D9] font-medium	text-center w-[273px] h-[36px] rounded	"
                          onClick={handleSubmit}
                          disabled={!isChecked} // Disable the button if the checkbox is not checked
                        >
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
export default SellOrderSummary;
