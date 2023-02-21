import { useState } from 'react';
import ProductBuyer from '../components/componentBuyer/ProductBuyer';
import NavigateList from '../components/componentProduct/NavigateList';
import Product from '../components/componentProduct/Product';
import ProductImage from '../components/componentProduct/ProductImage';
import DetailPlaceAsk from '../components/componentSeller/DetailPlaceAsk';
import ProductSeller from '../components/componentSeller/ProductSeller';
import { DEFAULT, STEP_SELLER, STEP_BUYER } from '../constants/productDetail';

export default function ProductDetailPage() {
  const [step, setStep] = useState(DEFAULT);
  return (
    <div>
      <NavigateList />
      <div className="flex justify-center">
        <ProductImage />
        <div className="flex flex-col">
          {step === DEFAULT ? (
            <Product
              onClickSeller={() => setStep(STEP_SELLER.productList)}
              onClickBuyer={() => setStep(STEP_BUYER.selectProduct)}
            />
          ) : null}
          {step === STEP_SELLER.productList ? (
            <ProductSeller
              onClickBack={() => setStep(DEFAULT)}
              onClickAsk={() => setStep(STEP_SELLER.addPrice)}
            />
          ) : null}
          {step === STEP_SELLER.addPrice ? (
            <DetailPlaceAsk onClickBack={() => setStep(DEFAULT)} />
          ) : null}
          {step === STEP_BUYER.selectProduct ? (
            <ProductBuyer onClickBack={() => setStep(DEFAULT)} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
