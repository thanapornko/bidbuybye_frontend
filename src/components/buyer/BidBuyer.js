import useProduct from '../../hooks/useProduct';
import ButtonProduct from '../product/ButtonProduct';

export default function BidBuyer() {
  const { onClickBid, selectSize } = useProduct();

  const validateValue = () => {
    if (selectSize === undefined) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <div className=" flex justify-between items-center h-[100px] w-auto bg-slate-900 m-10 rounded-lg">
        <div className=" text-white mx-4">
          Buy a<span className="text-green-500 mx-2">Brand new</span> item at
          your preferred price
        </div>
        <ButtonProduct
          isDisabled={validateValue()}
          onClick={onClickBid}
          className={`bg-slate-900 border-white ${
            validateValue() === false ? 'hover:bg-gray-200' : ''
          } w-[100px] h-[40px] mx-4`}
        >
          Bid
        </ButtonProduct>
      </div>
    </div>
  );
}
