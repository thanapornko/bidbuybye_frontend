import React from 'react';

function OrderSummary() {
  return (
    <div className=" border border-gray-300 pl-0 pr-24">
      <div className=" flex flex-col ml-20">
        <div className=" text-[12px] font-semibold">
          Nike Dunk Low Reverse Brazil
        </div>

        <div className=" text-[12px]">Nike | DV0833-300</div>
      </div>
      <div className="flex flex-col  w-[140%] ">
        <div className="flex flex-row justify-start">
          <div className="p-1 ">
            <img
              src={'https://picsum.photos/id/1/200/300'}
              alt="nikeDunkLow"
              className="w-18 h-10"
            />
          </div>
        </div>
        <div className="border-t-[1px] border-gray-300 ">
          <div className="p-1 ">
            <div className="flex flex-row justify-between ">
              <div className="p-1 text-[12px]">Sell to bid</div>
              <div className="p-1  text-[12px] font-semibold">฿ 3,000</div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="p-1  text-[12px]">Size</div>
              <div className="p-1 text-[12px] font-semibold">US 7.5</div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="p-1  text-[12px]">Condition</div>
              <div className="p-1  text-[12px] font-semibold">Brand new</div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="p-1  text-[12px]">Equipment</div>
              <div className="p-1  text-[12px] font-semibold">
                Original box (no defect)
              </div>
            </div>
            <div className="flex flex-row justify-between">
              <div className="p-1  text-[12px]">Product images</div>
              <div className="p-1 text-[12px] flex flex-row  font-semibold">
                <div>
                  {' '}
                  <img
                    src={'https://picsum.photos/id/1/200/300'}
                    alt="nikeDunkLow"
                    className="w-8 h-6"
                  />
                </div>
                <div>
                  {' '}
                  <img
                    src={'https://picsum.photos/id/1/200/300'}
                    alt="nikeDunkLow"
                    className="w-8 h-6"
                  />
                </div>
                <div>
                  {' '}
                  <img
                    src={'https://picsum.photos/id/1/200/300'}
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
