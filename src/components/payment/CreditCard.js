import React from 'react';
import { SiMastercard } from 'react-icons/si';
import { BsTruck } from 'react-icons/bs';
import { MdPayment, MdOutlineCropSquare } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai';
function CreditCard() {
  return (
    <div className="flex flex-col w-[70%]  ">
      <div className="flex flex-row justify-center  px-[50px]  ">
        <div className="font-semibold mb-[20px] ml-[5px]">
          Credit/Debit card
        </div>
      </div>
      <div
        className="flex flex-row justify-start  border-[1px]
       border-gray-300  pr-[160px] 
       gap-[140px]  
       
       "
      >
        <div className="p-1  flex flex-row mr-[50px]">
          <div className="mt-1.5">
            <SiMastercard />
          </div>
          <div className="p-1 text-[12px] flex flex-row gap-1">
            <p>MasterCard</p>
            <p className="text-gray-300">(default)</p>
          </div>
        </div>
        <div className="p-1 text-[18px] mt-1.5">
          <AiFillCheckCircle />
        </div>
      </div>

      <div className="flex flex-row justify-center ml-[5px] ">
        <div className="p-1 text-[10px] mt-5 "> Add new card </div>
      </div>
      <div className="flex flex-row justify-center  ">
        <div className="p-1 text-[10px] mt-5 text-gray-400 ml-[5px] ">
          {' '}
          You can add to 5 cards to 1 SASOM account{' '}
        </div>
      </div>

      <div className="flex flex-row justify-center ">
        <div>
          <button
            class="bg-gray-500 hover:bg-gray-700
           text-white font-bold py-0.5 ml-[0px] px-[155px] mt-[150px] rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
