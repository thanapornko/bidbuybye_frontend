// import 'flowbite';
import React from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

export default function OrderStatusModal({ open, toggleDrawer }) {
  return (
    <>
      <Drawer open={open} onClose={toggleDrawer} direction="right" size="30vw">
        {/* content */}
        <div className="flex justify-end mr-4 mt-4">
          <button
            onClick={toggleDrawer}
            className="fa-solid fa-x text-gray-500 text-lg"
          ></button>
        </div>
        <div className="flex justify-between mx-10 mt-20">
          <div className="flex-col space-y-10">
            <div className="flex">
              <i className="fa-solid fa-circle text-green-500 text-xs mr-1"></i>
              <div className="flex-col">
                <p className="text-sm text-gray-900">Seller sold to your bid</p>
                <p className="text-sm text-gray-500">
                  Order is in shipment process
                </p>
                {/* <div className="bg-gray-900 w-[1px] h-[100px] m-2"></div> */}
              </div>
            </div>
            <div className="flex">
              <i className="fa-solid fa-circle text-green-500 text-xs mr-1"></i>
              <div className="flex-col">
                <p className="text-sm text-gray-900">
                  Item arrived at bidbuybye
                </p>
                <p className="text-sm text-gray-500">
                  Preparing to authenticate
                </p>
              </div>
            </div>
            <div className="flex">
              <i className="fa-solid fa-circle text-green-500 text-xs mr-1"></i>
              <div className="flex-col">
                <p className="text-sm text-gray-900">Authentication</p>
                <p className="text-sm text-gray-500">
                  Preparing to ship item to you
                </p>
              </div>
            </div>
            <div className="flex">
              <i className="fa-solid fa-circle text-green-500 text-xs mr-1"></i>
              <div className="flex-col">
                <p className="text-sm text-gray-900">
                  Item shipped from bidbuybye
                </p>
                <p className="text-sm text-gray-500">Standard delivery</p>
              </div>
            </div>
            <div className="flex">
              <i className="fa-solid fa-circle text-green-500 text-xs mr-1"></i>
              <div className="flex-col">
                <p className="text-sm text-gray-900">Order completed</p>
                <p className="text-sm text-gray-500">Item delivered</p>
              </div>
            </div>
          </div>
          <div className="flex-col space-y-16">
            <p className="text-sm text-gray-900">date 11/11/1111</p>
            <p className="text-sm text-gray-900">date 11/11/1111</p>
            <p className="text-sm text-gray-900">date 11/11/1111</p>
            <p className="text-sm text-gray-900">date 11/11/1111</p>
            <p className="text-sm text-gray-900">date 11/11/1111</p>
          </div>
        </div>
      </Drawer>
    </>
  );

  // return (
  //   <>
  //     {/* <!-- drawer component --> */}
  //     <div
  //       id="drawer-right-example"
  //       className="fixed top-0 right-0 z-40 h-screen p-6 overflow-y-auto transition-transform translate-x-full bg-white w-1/3 dark:bg-gray-800"
  //       tabIndex="-1"
  //       aria-labelledby="drawer-right-label"
  //     >
  //       <h5
  //         id="drawer-right-label"
  //         className="inline-flex items-center mb-4 text-base text-gray-500 dark:text-gray-400"
  //       >
  //         Order Status
  //       </h5>
  //       <button
  //         type="button"
  //         data-drawer-hide="drawer-right-example"
  //         aria-controls="drawer-right-example"
  //         className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-xs p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
  //       >
  //         <svg
  //           aria-hidden="true"
  //           className="w-5 h-5"
  //           fill="currentColor"
  //           viewBox="0 0 20 20"
  //           xmlns="http://www.w3.org/2000/svg"
  //         >
  //           <path
  //             fill-rule="evenodd"
  //             d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
  //             clip-rule="evenodd"
  //           ></path>
  //         </svg>
  //         <span className="sr-only">Close menu</span>
  //       </button>
  //       {/* content */}
  //       <div className="flex justify-between mt-10">
  //         <div className="flex-col space-y-10">
  //           <div className="flex">
  //             <i className="fa-solid fa-circle text-green-500 text-xs mr-1"></i>
  //             <div className="flex-col">
  //               <p className="text-sm text-gray-900">Seller sold to your bid</p>
  //               <p className="text-sm text-gray-500">
  //                 Order is in shipment process
  //               </p>
  //               {/* <div className="bg-gray-900 w-[1px] h-[100px] m-2"></div> */}
  //             </div>
  //           </div>
  //           <div className="flex">
  //             <i className="fa-solid fa-circle text-green-500 text-xs mr-1"></i>
  //             <div className="flex-col">
  //               <p className="text-sm text-gray-900">
  //                 Item arrived at bidbuybye
  //               </p>
  //               <p className="text-sm text-gray-500">
  //                 Preparing to authenticate
  //               </p>
  //             </div>
  //           </div>
  //           <div className="flex">
  //             <i className="fa-solid fa-circle text-green-500 text-xs mr-1"></i>
  //             <div className="flex-col">
  //               <p className="text-sm text-gray-900">Authentication</p>
  //               <p className="text-sm text-gray-500">
  //                 Preparing to ship item to you
  //               </p>
  //             </div>
  //           </div>
  //           <div className="flex">
  //             <i className="fa-solid fa-circle text-green-500 text-xs mr-1"></i>
  //             <div className="flex-col">
  //               <p className="text-sm text-gray-900">
  //                 Item shipped from bidbuybye
  //               </p>
  //               <p className="text-sm text-gray-500">Standard delivery</p>
  //             </div>
  //           </div>
  //           <div className="flex">
  //             <i className="fa-solid fa-circle text-green-500 text-xs mr-1"></i>
  //             <div className="flex-col">
  //               <p className="text-sm text-gray-900">Order completed</p>
  //               <p className="text-sm text-gray-500">Item delivered</p>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="flex-col space-y-16">
  //           <p className="text-sm text-gray-900">date 11/11/1111</p>
  //           <p className="text-sm text-gray-900">date 11/11/1111</p>
  //           <p className="text-sm text-gray-900">date 11/11/1111</p>
  //           <p className="text-sm text-gray-900">date 11/11/1111</p>
  //           <p className="text-sm text-gray-900">date 11/11/1111</p>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
}
