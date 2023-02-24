import { HiXMark } from 'react-icons/hi2';
import { HiChevronLeft } from 'react-icons/hi2';
import InputPrice from '../seller/InputPrice';
import ButtonProduct from '../product/ButtonProduct';
import useProduct from '../../hooks/useProduct';

export default function DetailPlaceAsk() {
  const { onClickBack, onClickBackProduct, handleSaveClick, resetPriceBid } =
    useProduct();
  const handleSavePrice = () => {
    onClickBackProduct();
    handleSaveClick();
    resetPriceBid();
  };
  return (
    <div className="p-10">
      <div className="flex items-center justify-center">
        <HiChevronLeft
          className="flex text-[20px] cursor-pointer"
          onClick={onClickBackProduct}
        />

        <div className="flex justify-center mx-auto">
          <div className="text-[24px] p-5">Place Ask</div>
        </div>
        <HiXMark
          className="flex text-[20px] cursor-pointer"
          onClick={onClickBack}
        />
      </div>
      <div className="px-10">
        <hr className=" bg-gray-200" />
      </div>
      <div className="flex flex-col">
        <div className="p-4 text-gray-400 text-[18px] text-center">
          Place an ask to sell at the price that you want or sell now to highest
          bid
        </div>
        <div className="p-4 text-[20px] text-center">Size: 38</div>
      </div>
      <div className="flex justify-evenly text-[20px] text-center ">
        <div>฿ 4,500</div>
        <div>฿ 4,700</div>
      </div>
      <div className="flex justify-evenly text-[14px] text-center text-gray-400">
        <div>Highest Bid</div>
        <div>Lowest Ask</div>
      </div>
      <div className="flex text-gray-400 p-10">
        <div className="flex  justify-center items-center mx-auto">
          <div className="mr-4">฿</div>
          <InputPrice placeholder={'Enter your price'} />
        </div>
      </div>
      <div className="flex justify-evenly p-4">
        <ButtonProduct
          className={'bg-gray-900 hover:bg-gray-600'}
          onClick={onClickBackProduct}
        >
          Back
        </ButtonProduct>
        <ButtonProduct
          onClick={handleSavePrice}
          className={'bg-gray-300 hover hover:bg-gray-900'}
        >
          Save
        </ButtonProduct>
      </div>
    </div>
  );
}
