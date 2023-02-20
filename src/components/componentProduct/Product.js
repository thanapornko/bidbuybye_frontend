import product from '../../Images/1-remove.png';
import { BsShieldCheck } from 'react-icons/bs';
import { BsShieldLock } from 'react-icons/bs';

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
          <div className="flex justify-evenly p-4">
            <button
              onClick={onClickSeller}
              className="flex justify-center rounded-md border border-transparent bg-slate-900 py-2 px-4 text-sm w-[300px] font-medium text-white hover:bg-slate-600"
              type="button"
            >
              Sell
            </button>
            <button
              onClick={onClickBuyer}
              className="flex justify-center rounded-md border border-transparent bg-green-500 py-2 px-4 text-sm  w-[300px] font-medium text-white hover:bg-green-600"
              type="button"
            >
              Buy
            </button>
          </div>
          <div className="flex justify-evenly">
            <div className="flex">
              <BsShieldCheck className="text-[30px] mr-2" />
              <div className="text-gray-400">100% Authentic Guarantee</div>
            </div>
            <div className="flex">
              <BsShieldLock className="text-[30px] mr-2" />
              <div className="text-gray-400">Anti Fraudulent transaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
