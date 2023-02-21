import { HiXMark } from 'react-icons/hi2';
import { HiChevronLeft } from 'react-icons/hi2';
import InputPrice from '../componentSeller/InputPrice';
import ButtonProduct from '../componentProduct/ButtonProduct';

export default function DetailBid({ onClickBack, onClickBackBuyer }) {
  return (
    <div>
      <div className="p-10">
        <div className="flex items-center justify-center">
          <HiChevronLeft
            className="flex text-[20px] cursor-pointer"
            onClick={onClickBackBuyer}
          />

          <div className="flex justify-center mx-auto">
            <div className="text-[24px] p-5">Place Bid</div>
          </div>
          <HiXMark
            className="flex text-[20px] cursor-pointer"
            onClick={onClickBack}
          />
        </div>
        <div className="px-10">
          <hr className=" bg-gray-200" />
        </div>
        <div className="flex flex-col ">
          <div className="p-4 text-gray-400 text-[18px] text-center">
            If you have the highest bid, a seller who places an Ask that matches
            yours will automatically sell to you
          </div>
          <div className="p-4 text-[20px] text-center">Size: 38</div>
        </div>
        <div className="flex justify-evenly text-[20px] text-center ">
          <div>฿ 4,500</div>
          <div>฿ 4,700</div>
        </div>
        <div className="flex justify-evenly text-[14px] text-center text-gray-400">
          <div>Lowest Bid</div>
          <div>Highest Bid</div>
        </div>
        <div className="flex text-gray-400 p-10">
          <div className="flex  justify-center items-center mx-auto">
            <div className="mr-4">฿</div>
            <InputPrice placeholder={'Enter your bid'} />
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
