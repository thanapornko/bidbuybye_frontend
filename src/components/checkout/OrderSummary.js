import React from 'react';

function OrderSummary(props) {
  console.log(props);
  return (
    <div className=" border border-gray-300 pl-0 pr-[109px]">
      <div className=" flex flex-col ml-20">
        <div className=" text-[12px] font-semibold">
          {props.order[props.order.length - 1]?.Product.title}
        </div>

        <div className=" text-[12px]">
          {props.order[props.order.length - 1]?.Product.Brand.title} |
          {props.order[props.order.length - 1]?.Product.skuProduct}
        </div>
      </div>
      <div className="flex flex-col  w-[140%] ">
        <div className="flex flex-row justify-start">
          <div className="p-1 ">
            <img
              src={props.order[props.order.length - 1]?.Product.ProductImage}
              alt="nikeDunkLow"
              className="w-18 h-10"
            />
          </div>
        </div>
        <div className="border-t-[1px] border-gray-300 ">
          <div className="py-1 ">
            <div className="flex flex-row justify-between ">
              <div className="p-1 text-[12px]">Sell to bid</div>
              <div className="py-1 px-4  text-[12px] font-semibold">
                ฿ {props.order[props.order.length - 1]?.Bid.price}
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="p-1  text-[12px]">Size</div>
              <div className="py-1 px-4  text-[12px] font-semibold">
                {
                  props.order[props.order.length - 1]?.Bid.ProductSize.Size
                    .sizeProduct
                }
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="p-1  text-[12px]">Condition</div>
              <div className="py-1 px-4   text-[12px] font-semibold">
                Brand new
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="p-1  text-[12px]">Equipment</div>
              <div className="py-1 px-4   text-[12px] font-semibold">
                Original box (no defect)
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="p-1  text-[12px]">Product images</div>
              <div className="py-1 px-4  text-[12px] flex flex-row  font-semibold">
                <div>
                  <img
                    src={
                      props.order[props.order.length - 1]?.Product.ProductImage
                    }
                    alt="nikeDunkLow"
                    className="w-8 h-6"
                  />
                </div>
                <div>
                  <img
                    src={
                      props.order[props.order.length - 1]?.Product.ProductImage
                    }
                    alt="nikeDunkLow"
                    className="w-8 h-6"
                  />
                </div>
                <div>
                  <img
                    src={
                      props.order[props.order.length - 1]?.Product.ProductImage
                    }
                    alt="nikeDunkLow"
                    className="w-8 h-6"
                  />
                </div>
              </div>
            </div>
            <div className="p-5 "></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
