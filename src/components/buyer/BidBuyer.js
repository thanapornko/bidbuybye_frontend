import ButtonProduct from '../product/ButtonProduct';

export default function BidBuyer({ onClickBid }) {
  return (
    <div>
      <div className=" flex justify-between items-center h-[100px] w-auto bg-slate-900 m-10 rounded-lg">
        <div className=" text-white mx-4">
          Buy a<span className="text-green-500 mx-2">Brand new</span> item at
          your preferred price
        </div>
        <ButtonProduct
          onClick={onClickBid}
          className={
            'bg-slate-900 border-white hover:bg-gray-500 w-[100px] h-[40px] mx-4'
          }
        >
          Bid
        </ButtonProduct>
      </div>
    </div>
  );
}
