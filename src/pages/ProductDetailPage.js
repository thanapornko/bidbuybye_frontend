import { useState } from 'react';
import DetailBid from '../components/buyer/DetailBid';
import ProductBuyer from '../components/buyer/ProductBuyer';
import NavigateList from '../components/product/NavigateList';
import Product from '../components/product/Product';
import ProductImage from '../components/product/ProductImage';
import DetailPlaceAsk from '../components/seller/DetailPlaceAsk';
import ProductSeller from '../components/seller/ProductSeller';
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
            <DetailPlaceAsk
              onClickBack={() => setStep(DEFAULT)}
              onClickBackProduct={() => setStep(STEP_SELLER.productList)}
            />
          ) : null}
          {step === STEP_BUYER.selectProduct ? (
            <ProductBuyer
              onClickBack={() => setStep(DEFAULT)}
              onClickBid={() => setStep(STEP_BUYER.BidPrice)}
            />
          ) : null}
          {step === STEP_BUYER.BidPrice ? (
            <DetailBid
              onClickBack={() => setStep(DEFAULT)}
              onClickBackBuyer={() => setStep(STEP_BUYER.selectProduct)}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
