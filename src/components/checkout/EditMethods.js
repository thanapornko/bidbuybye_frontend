// import 'flowbite';
import React from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

import { useState } from 'react';

const initialInput = {
  name: '',
  accountNumber: '',
  selectedBank: ''
};

export default function EditProfile({ open, toggleDrawer }) {
  const [input, setInput] = useState(initialInput);
  const [bankTransfer, setBankTransfer] = useState({});
  const [selectedBank, setSelectedBank] = useState('');

  const handleChangeInput = (e) => {
    setSelectedBank(e.target.value);
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };
  // const handleChangeOutput = (event) => {
  //   setSelectedBank(event.target.value);
  // };
  const handleClickSubmit = (e) => {
    e.preventDefault();

    setBankTransfer(input);
  };

  console.log(input, '5555588888888888888888888888');
  // console.log(selectedBank);

  return (
    <>
      <Drawer open={open} onClose={toggleDrawer} direction="right" size="30vw">
        <div>
          <div className=" h-[55px] text-[16px] ">
            <div className="flex flex-col h-[55px] justify-center items-center font-semibold">
              Payout Method
            </div>
          </div>
          <div className="p-[25px]">
            <div className="h-[100px] w-[100%] mt-[24px] ">
              <select
                id="SelectBank"
                className={`border border-gray-300 text-sm rounded-lg
      focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400 ${
        selectedBank === 'Selected Bank' || selectedBank === ''
          ? 'text-gray-400'
          : ''
      }`}
                onChange={handleChangeInput}
                value={selectedBank}
                name="selectedBank"
              >
                <option
                  value="Selected Bank"
                  // className={
                  //   selectedBank === 'Selected Bank' ? 'text-gray-400' : ''
                  // }
                >
                  Selected Bank
                </option>
                <option value="Bangkok Bank" className="text-black">
                  Bangkok Bank
                </option>
                <option value="Kasikorn Bank" className="text-black">
                  Kasikorn Bank
                </option>
                <option value="Krungthai Bank" className="text-black">
                  Krungthai Bank
                </option>
                <option
                  value="Siam Commercial Bank (SCB)"
                  className="text-black"
                >
                  Siam Commercial Bank (SCB)
                </option>
              </select>
            </div>
            <div className="h-[100px] w-[100%] mt-[24px] ">
              <div className="mb-4">
                <label
                  className="block mb-2 text-[14px] font-medium text-gray-350"
                  for="Name"
                  htmlFor="Name"
                >
                  Name
                </label>
                <div className="border-b-[1px] border-gray-900 ">
                  <input
                    className="  placeholder-gray-400 text-sm  border-none outline-none  block w-full p-2.5
                    dark:text-white focus:border-none focus:ring-0
                    
                 "
                    value={input.name}
                    onChange={handleChangeInput}
                    name="name"
                    type="text"
                    placeholder="Enter full name"
                  />
                </div>
              </div>
            </div>
            <div className="h-[100px] w-[100%] mt-[24px] ">
              <div className="mb-4">
                <label
                  className="block mb-2 text-[14px] font-medium text-gray-350"
                  for="Name"
                  htmlFor="Name"
                >
                  Account number
                </label>
                <div className="border-b-[1px] border-gray-900 ">
                  <input
                    className="  placeholder-gray-400 text-sm  border-none outline-none  block w-full p-2.5
                    dark:text-white focus:border-none focus:ring-0
                 "
                    value={input.accountNumber}
                    onChange={handleChangeInput}
                    name="accountNumber"
                    type="password"
                    placeholder="***-*-*****-*"
                  />
                </div>
              </div>
            </div>
            <div className="h-[20px] w-[100%] mt-[24px] ">
              <p className="text-gray-400 text-sm ">
                This is the bank account info. for receiving payout when you
                sold your item
              </p>
            </div>
          </div>
          <div className="h-[85px] w-[100%] mt-[24px] absolute bottom-0 flex flex-row justify-center gap-[35px] ">
            <div>
              <button class="text-[12px] text-[#5A5A5A] px-[15px] py-[5px] border-2 font-medium	text-center w-[12vw] h-[36px] rounded	hover:border-gray-900 cursor-pointer">
                Cancel
              </button>
            </div>
            <div>
              <nav>
                <button
                  class="text-[12px] text-[#5A5A5A]
                 px-[15px] py-[5px] bg-[#D9D9D9] 
                 font-medium	text-center w-[12vw]
                  h-[36px] rounded	"
                  onClick={handleClickSubmit}
                >
                  Submit
                </button>
              </nav>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}
