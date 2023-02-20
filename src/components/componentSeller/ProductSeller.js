import product from '../../Images/1-remove.png';
import DetailPriceSeller from './DetailPriceSeller';
import DetailProductSeller from './DetailProductSeller';

export default function ProductSeller() {
  return (
    <div>
      <div className="flex justify-center p-10">
        <img className="w-[600px] border bg-gray-100" src={product} />
        <div className="flex flex-col w-[800px] justify-items-center p-10">
          <DetailProductSeller />
          <DetailPriceSeller />
        </div>
      </div>
    </div>
  );
}
