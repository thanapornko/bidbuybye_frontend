import { HiPencilSquare } from 'react-icons/hi2';
import { HiOutlineChevronRight } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import useProduct from '../../hooks/useProduct';
import ButtonProduct from '../product/ButtonProduct';
import formattedValued from '../../utils/currency';
import { useParams } from 'react-router-dom';

export default function DetailPriceSeller({ onClickBack, onClickAsk }) {
  const {
    resetSelectSize,
    resetSelectEquipment,
    savedValue,
    bidPrice,
    createBid,
    maxPriceBySize
  } = useProduct();
  const { productId } = useParams();
  const handleResetSelectSize = () => {
    onClickBack();
    resetSelectSize();
    resetSelectEquipment();
  };
  return (
    <div>
      <div>
        <hr className=" bg-gray-200 " />
        <div className="flex p-4 justify-between">
          <div className="text-[18px] text-gray-500">Ask Price</div>
          <div onClick={onClickAsk} className="flex items-center">
            <div className="flex justify-center text-xl text-gray-400 cursor-pointer">
              {savedValue ? `฿ ${formattedValued(savedValue)}` : 'Add price'}
            </div>

            <HiPencilSquare className="ml-4 cursor-pointer" />
          </div>
        </div>
        <div className="flex justify-between items-center w-auto h-[100px] bg-gray-100 py-3 px-10">
          <div className="text-md">
            Would you like to sell now to the highest bidder?
          </div>
          <div className="flex items-center ">
            <Link to={`/sell-checkout/${productId}`}>
              <div className="flex items-center text-xl pr-2">
                {maxPriceBySize?.maxPrice > 0
                  ? `฿ ${formattedValued(maxPriceBySize?.maxPrice)}`
                  : '-'}
                <HiOutlineChevronRight />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex justify-evenly p-4">
          <ButtonProduct
            className={'bg-gray-900 hover:bg-gray-600'}
            onClick={handleResetSelectSize}
          >
            Back
          </ButtonProduct>
          <Link to={'/history'}>
            <ButtonProduct
              className={'bg-gray-300 hover hover:bg-gray-900'}
              onClick={createBid}
            >
              submit
            </ButtonProduct>
          </Link>
        </div>
      </div>
    </div>
  );
}
