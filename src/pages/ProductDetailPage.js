import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
  const {
    step,
    fetchProductDetail,
    productDetail,
    fetchSize,
    fetchPriceAsk,
    fetchPriceBid
  } = useProduct();
  const { productId } = useParams();
  // fetch data from useParams find by Id
  useEffect(() => {
    (async () => {
      try {
        await fetchProductDetail(productId);
        await fetchPriceAsk(productId);
        await fetchPriceBid(productId);
        await fetchSize();
      } catch (error) {}
    })();
  }, []);
  // console.log(productDetail);

  return (
    <div>
      <NavigateList />
      <div className="flex justify-center">
        {productDetail ? (
          <ProductImage imageURL={productDetail.products.ProductImage} />
        ) : null}
        <div className="flex flex-col w-[800px]">
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
