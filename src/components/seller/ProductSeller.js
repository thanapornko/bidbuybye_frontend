import useProduct from '../../hooks/useProduct';
import DetailPriceSeller from './DetailPriceSeller';
import DetailProductSeller from './DetailProductSeller';

export default function ProductSeller() {
  const { onClickAsk, onClickBack } = useProduct();
  return (
    <div>
      <div className="flex justify-center">
        <div className="flex flex-col w-[800px] justify-items-center p-10">
          <DetailProductSeller onClickBack={onClickBack} />
          <DetailPriceSeller
            onClickBack={onClickBack}
            onClickAsk={onClickAsk}
          />
        </div>
      </div>
    </div>
  );
}
