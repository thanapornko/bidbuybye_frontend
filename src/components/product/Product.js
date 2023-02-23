import { BsShieldCheck } from 'react-icons/bs';
import { BsShieldLock } from 'react-icons/bs';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { BsBoxSeam } from 'react-icons/bs';
import ButtonProduct from '../product/ButtonProduct';

export default function Product({ onClickSeller, onClickBuyer }) {
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex flex-col w-[800px] justify-items-center p-10">
          <div className="text-[24px] p-5">
            Nike Dunk Low White Black (2021) (W)
          </div>
          <hr className="h-px bg-gray-200 border-0 " />
          <div className="flex justify-evenly mt-4">
            <div className=" text-xs text-gray-400">LOWEST ASK</div>
            <div className=" text-xs text-gray-400">HIGHEST BID</div>
            <div className=" text-xs text-gray-400">LAST SALE</div>
          </div>
          <div className="flex justify-evenly">
            <div className="text-lg ">฿ 4,000</div>
            <div className="text-lg ">฿ 4,000</div>
            <div className="text-lg ">฿ 4,000</div>
          </div>
          <div className="mt-4">
            <hr className="h-px bg-gray-200" />
          </div>
          <div className="flex justify-evenly items-center">
            <div>
              <div className="text-center rounded text-white px-5 py-1 bg-green-500 m-4">
                New
              </div>
              <div className="text-gray-400 text-center">Brand New</div>
            </div>
            <div className="flex flex-col items-center">
              <BsFillLightningChargeFill className="text-[30px] text-green-500 m-4" />
              <div className="text-gray-400 ">Ready to ship</div>
            </div>
            <div className="flex flex-col items-center">
              <BsBoxSeam className=" text-[30px] text-green-500 m-4" />

              <div className="text-gray-400">Express delivery</div>
            </div>
          </div>
          <div className="mt-4">
            <hr className="h-px bg-gray-200" />
          </div>
          <div className="flex justify-evenly p-6">
            <div className="flex">
              <BsShieldCheck className="text-[30px] mr-2" />
              <div className="text-gray-400">100% Authentic Guarantee</div>
            </div>
            <div className="flex">
              <BsShieldLock className="text-[30px] mr-2" />
              <div className="text-gray-400">Anti Fraudulent transaction</div>
            </div>
          </div>
          <div className="flex justify-evenly p-4">
            <ButtonProduct
              className={'bg-gray-900 hover:bg-gray-600'}
              onClick={onClickSeller}
            >
              Sell
            </ButtonProduct>
            <ButtonProduct
              className={'bg-green-500 hover hover:bg-green-600'}
              onClick={onClickBuyer}
            >
              Buy
            </ButtonProduct>
          </div>
        </div>
      </div>
    </div>
  );
}
