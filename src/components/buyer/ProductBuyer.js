import { HiChevronLeft } from 'react-icons/hi2';
import useProduct from '../../hooks/useProduct';
import BidBuyer from './BidBuyer';
import DetailSizeBuyer from './DetailSizeBuyer';
import ProductBox from './ProductBox';

export default function ProductBuyer() {
  const { onClickBid, onClickBack, resetSelectSize } = useProduct();

  const handleResetSelectSize = () => {
    onClickBack();
    resetSelectSize();
  };
  return (
    <div>
      <div>
        <div className="flex items-center justify-center p-10">
          <HiChevronLeft
            onClick={handleResetSelectSize}
            className="flex text-[20px] cursor-pointer"
          />
          <div className="flex justify-center mx-auto">
            <div className="text-[24px] mx-3">Brand New | </div>
            <DetailSizeBuyer />
          </div>
        </div>
        <hr className="mx-10 my-5 bg-gray-200" />

        <div className="flex flex-col">
          <div className="px-10 text-[18px]">Product detail</div>
        </div>
        <ProductBox />
        <hr className="m-10 bg-gray-200" />

        <ProductBox />
      </div>
      <BidBuyer onClickBid={onClickBid} />
    </div>
  );
}
