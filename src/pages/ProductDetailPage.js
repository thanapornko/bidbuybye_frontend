import DetailBid from '../components/buyer/DetailBid';
import ProductBuyer from '../components/buyer/ProductBuyer';
import NavigateList from '../components/product/NavigateList';
import Product from '../components/product/Product';
import ProductImage from '../components/product/ProductImage';
import DetailPlaceAsk from '../components/seller/DetailPlaceAsk';
import ProductSeller from '../components/seller/ProductSeller';
import { DEFAULT, STEP_SELLER, STEP_BUYER } from '../constants/productDetail';
import useProduct from '../hooks/useProduct';

export default function ProductDetailPage() {
  const { step } = useProduct();

  return (
    <div>
      <NavigateList />
      <div className="flex justify-center">
        <ProductImage />
        <div className="flex flex-col">
          {step === DEFAULT ? <Product /> : null}
          {step === STEP_SELLER.productList ? <ProductSeller /> : null}
          {step === STEP_SELLER.addPrice ? <DetailPlaceAsk /> : null}
          {step === STEP_BUYER.selectProduct ? <ProductBuyer /> : null}
          {step === STEP_BUYER.BidPrice ? <DetailBid /> : null}
        </div>
      </div>
    </div>
  );
}
