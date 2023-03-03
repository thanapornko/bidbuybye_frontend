import { HiXMark } from 'react-icons/hi2';
import { HiChevronLeft } from 'react-icons/hi2';
import InputPrice from '../seller/InputPrice';
import ButtonProduct from '../product/ButtonProduct';
import useProduct from '../../hooks/useProduct';
import formattedValued from '../../utils/currency';
import { Link } from 'react-router-dom';

export default function DetailBid() {
  const {
    onClickBackBuyer,
    onClickBack,
    bidPrice,
    selectSize,
    createBid,
    resetPriceBid,
    resetAllSelected,
    resetSelectSize
  } = useProduct();

  const resetAndBack = () => {
    resetPriceBid();
    onClickBackBuyer();
  };
  const createdAndReset = () => {
    createBid();
    resetAllSelected();
  };

  const resetAndBackToBuyer = () => {
    onClickBack();
    resetPriceBid();
    resetSelectSize();
  };
  return (
    <div>
      <div className="p-10">
        <div className="flex items-center justify-center">
          <HiChevronLeft
            className="flex text-[20px] cursor-pointer"
            onClick={createdAndReset}
          />

          <div className="flex justify-center mx-auto">
            <div className="text-[24px] p-5">Place Bid</div>
          </div>
          <HiXMark
            className="flex text-[20px] cursor-pointer"
            onClick={resetAndBackToBuyer}
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
          <div className="p-4 text-[20px] text-center">
            Size: {selectSize?.sizeProduct}
          </div>
        </div>
        <div className="flex justify-evenly text-[20px] text-center ">
          <div>
            {bidPrice?.minBidPrice > 0
              ? `฿ ${formattedValued(bidPrice?.minBidPrice)}`
              : '-'}
          </div>
          <div>
            {bidPrice?.maxPrice > 0
              ? `฿ ${formattedValued(bidPrice?.maxPrice)}`
              : '-'}
          </div>
        </div>
        <div className="flex justify-evenly text-[14px] text-center text-gray-400">
          <div>Lowest Bid</div>
          <div>Highest Bid</div>
        </div>
        <div className="flex p-10">
          <div className="flex flex-col justify-center items-center mx-auto">
            <InputPrice placeholder={'Enter your bid'} />
            <div className="text-gray-400 pt-4">
              Your Bid will expired in 30 days.{' '}
            </div>
          </div>
        </div>
        <div className="flex justify-evenly p-4">
          <ButtonProduct
            onClick={resetAndBack}
            className={'bg-gray-900 hover:bg-gray-600'}
          >
            Back
          </ButtonProduct>
          <Link to={'/bidask'}>
            <ButtonProduct
              onClick={createdAndReset}
              className={'bg-gray-300 hover hover:bg-gray-900'}
            >
              submit
            </ButtonProduct>
          </Link>
        </div>
      </div>
    </div>
  );
}
