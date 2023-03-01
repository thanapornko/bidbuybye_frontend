import useAuth from '../hooks/useAuth';
import profile from '../Images/profile.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import OrderStatusModal from '../components/OrderStatusModal';

export default function OrderStatus() {
  const { authenticatedUser } = useAuth();
  const [file, setFile] = useState(null);
  return (
    <>
      {/* nav left */}
      <div className="flex">
        <OrderStatusModal />
        <div className="flex-col bg-white h-screen w-1/5 ">
          <div className="flex items-center justify-around pt-3 pb-2 px-5 shadow">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : authenticatedUser.profilePicture || profile
              }
              className="h-16 w-16 rounded-full border-2 text-gray-600"
            />
            <h2 className="text-m text-gray-600 font-bold">
              {authenticatedUser.firstName || 'firstName'}{' '}
              {authenticatedUser.lastName || 'lastName'}
            </h2>
          </div>
          <Link
            to="/profile"
            className="flex items-center justify-center py-5 shadow-sm hover:bg-gray-100"
          >
            <i className="fa-solid fa-user text-m pr-2 text-gray-600" />
            <h2 className="text-m text-gray-600">Profile</h2>
          </Link>
          <Link
            to="/orderstatus"
            href="#"
            className="flex items-center justify-center py-5 shadow-sm hover:bg-gray-100"
          >
            <i className="fa-solid fa-basket-shopping text-m pr-2 text-gray-600"></i>
            <h2 className="text-m text-gray-600">Order Status</h2>
          </Link>
          <Link
            to="/history"
            href="#"
            className="flex items-center justify-center py-5 shadow-sm hover:bg-gray-100"
          >
            <i className="fa-solid fa-clock-rotate-left text-m pr-2 text-gray-600"></i>
            <h2 className="text-m text-gray-600">History</h2>
          </Link>
          <a
            href="#"
            className="flex items-center justify-center py-5 hover:bg-gray-100"
          >
            <i className="fa-solid fa-right-from-bracket text-m pr-2 text-gray-600"></i>
            <h2 className="text-m text-gray-600">Logout</h2>
          </a>
        </div>

        {/* right */}
        <div className="flex-col bg-gray-100 w-4/5 justify-center pt-10 space-y-1">
          {/* // */}
          <div className="flex bg-gray-100 justify-center">
            <div className="flex-col w-5/6 bg-white mx-10 px-20 py-5">
              <div className="flex justify-center pb-1 border-b">
                <p className="text-md text-gray-600 m-auto">Order detail</p>
              </div>
              <div className="flex justify-between">
                <div className="flex-col space-y-1 mt-2 pb-1">
                  <p className="text-sm text-gray-500">Order ID : 1234567890</p>
                  <p className="text-sm text-gray-400">Status</p>
                  <p className="text-sm text-green-600">Order completed</p>
                </div>
                <button
                  className="fa-solid fa-greater-than text-md text-gray-500 flex items-end pb-1"
                  data-drawer-target="drawer-right-example"
                  data-drawer-show="drawer-right-example"
                  data-drawer-placement="right"
                  aria-controls="drawer-right-example"
                ></button>
              </div>
            </div>
          </div>
          {/* // */}
          <div className="flex bg-gray-100 justify-center">
            <div className="flex-col w-5/6 bg-white mx-10 px-20 py-5 ">
              <div className="flex-col space-y-1 mt-2 pb-1 border-b">
                <div className="flex">
                  <img
                    alt="img"
                    src="https://img.icons8.com/ios-filled/256/nike.png"
                    className="w-20 bg-gray-200 p-2 text-black"
                  ></img>
                  <div className="pl-4 space-y-2">
                    <p className="text-md font-bold">
                      Nike Dunk Low Next Nature Lilac (W)
                    </p>
                    <p className="text-md text-gray-600 ">Nike | DN1431-103</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2 pt-2">
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600 ">Condition</p>
                  <p className="text-sm">Brand new</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600 ">Equipment</p>
                  <p className="text-sm">Original box</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm">Product image</p>
                  <img
                    alt="img"
                    src="https://img.icons8.com/ios-filled/256/nike.png"
                    className="w-16 bg-gray-200 p-2 text-black"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          {/* // */}
          <div className="flex bg-gray-100 justify-center">
            <div className="flex-col w-5/6 bg-white mx-10 px-20 py-5">
              <div className="flex">
                <i className="fa-sharp fa-solid fa-location-dot text-green-600 pr-2"></i>
                <p className="text-sm text-gray-600 ">Shipping address</p>
              </div>
              <div className="bg-gray-100 w-full p-2 mt-2 flex justify-center">
                <p className="text-sm text-gray-600 ">
                  111/1543 Ayudhaya Krungsri carforCash Thailand 1124
                </p>
              </div>
            </div>
          </div>
          {/* // */}
          <div className="flex bg-gray-100 justify-center">
            <div className="flex-col w-5/6 bg-white mx-10 px-20 py-5 mb-10">
              <div className="space-y-3 pt-2">
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Sub total</p>
                  <p className="text-sm">฿ 5,400</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Shipping fee</p>
                  <p className="text-sm">฿ 100</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Services price</p>
                  <p className="text-sm">฿ 0</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Authentication fee</p>
                  <p className="text-sm">Free</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm text-green-600">Total</p>
                  <p className="text-sm text-green-600">฿ 5,500</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
