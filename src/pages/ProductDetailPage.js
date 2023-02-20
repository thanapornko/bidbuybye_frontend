import { useState } from 'react';
import NavigateList from '../components/componentProduct/NavigateList';
import Product from '../components/componentProduct/Product';
import ProductImage from '../components/componentProduct/ProductImage';
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
            <Product onClickSeller={() => setStep(STEP_SELLER.productList)} />
          ) : null}
          {step === STEP_SELLER.productList ? (
            <ProductSeller onClickBack={() => setStep(DEFAULT)} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
