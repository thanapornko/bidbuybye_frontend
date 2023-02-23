import { HiPencilSquare } from 'react-icons/hi2';
import { HiOutlineChevronRight } from 'react-icons/hi2';
import ButtonProduct from '../product/ButtonProduct';

export default function DetailPriceSeller({ onClickBack, onClickAsk }) {
  return (
    <div>
      <div>
        <hr className=" bg-gray-200 " />
        <div className="flex p-4 justify-between">
          <div className="text-[18px] text-gray-500">Ask Price</div>
          <div onClick={onClickAsk} className="flex items-center">
            <div className="flex justify-center text-gray-400 cursor-pointer">
              Add Price
            </div>

            <HiPencilSquare className="ml-4 cursor-pointer" />
          </div>
        </div>
        <div className="flex justify-between items-center w-auto h-[100px] bg-gray-100 py-3 px-10">
          <div className="text-md">
            Would you like to sell now to the highest bidder?
          </div>
          <div className="flex items-center ">
            <div className="text-xl pr-2">฿ 4,200</div>
            <button>
              <HiOutlineChevronRight />
            </button>
          </div>
        </div>
        <div className="flex justify-evenly p-4">
          <ButtonProduct
            className={'bg-gray-900 hover:bg-gray-600'}
            onClick={onClickBack}
          >
            Back
          </ButtonProduct>
          <ButtonProduct className={'bg-gray-300 hover hover:bg-gray-900'}>
            Next
          </ButtonProduct>
        </div>
      </div>
    </div>
  );
}
