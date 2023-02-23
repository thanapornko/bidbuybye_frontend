import { createContext, useState } from 'react';
import { DEFAULT, STEP_SELLER, STEP_BUYER } from '../constants/productDetail';

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  //state for change to sell, buy, bid or ask
  const [step, setStep] = useState(DEFAULT);

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
        onClickBid
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
