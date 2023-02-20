import DetailPriceSeller from './DetailPriceSeller';
import DetailProductSeller from './DetailProductSeller';

export default function ProductSeller({ onClickBack }) {
  return (
    <div>
      <div className="flex justify-center p-10">
        <div className="flex flex-col w-[800px] justify-items-center p-10">
          <DetailProductSeller onClickBack={onClickBack} />
          <DetailPriceSeller onClickBack={onClickBack} />
        </div>
      </div>
    </div>
  );
}
