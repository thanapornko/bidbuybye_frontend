import { createContext, useEffect, useState } from 'react';
import { DEFAULT, STEP_SELLER, STEP_BUYER } from '../constants/productDetail';
import * as productApi from '../apis/product-api';

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  //state for change to sell, buy, bid or ask
  const [step, setStep] = useState(DEFAULT);
  const [productDetail, setProductDetail] = useState();
  const [price, setPrice] = useState();
  const [size, setSize] = useState();

  //click to sell page
  const onClickSeller = () => {
    setStep(STEP_SELLER.productList);
  };

  //click to buy page
  const onClickBuyer = () => {
    setStep(STEP_BUYER.selectProduct);
  };
  //click back to buy page
  const onClickBackBuyer = () => {
    setStep(STEP_BUYER.selectProduct);
  };

  // click back to sell page
  const onClickBackProduct = () => {
    setStep(STEP_SELLER.productList);
  };
  // click back to product
  const onClickBack = () => {
    setStep(DEFAULT);
  };
  //click to ask page
  const onClickAsk = () => {
    setStep(STEP_SELLER.addPrice);
  };

  //click to bid page
  const onClickBid = () => {
    setStep(STEP_BUYER.BidPrice);
  };

  //get product from id
  const fetchProductDetail = async (id) => {
    try {
      const res = await productApi.getProductDetail(id);
      setProductDetail(res.data);
    } catch (err) {}
  };

  const fetchPrice = async (id) => {
    try {
      const res = await productApi.getPrice(id);
      setPrice(res.data);
    } catch (err) {}
  };

  const fetchSize = async () => {
    try {
      const res = await productApi.getAllSize();
      setSize(res.data);
      console.log(res.data);
    } catch (err) {}
  };

  return (
    <ProductContext.Provider
      value={{
        step,
        onClickSeller,
        onClickBuyer,
        onClickAsk,
        onClickBack,
        onClickBackProduct,
        onClickBackBuyer,
        onClickBid,
        fetchProductDetail,
        productDetail,
        price,
        fetchPrice,
        fetchSize,
        size
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
