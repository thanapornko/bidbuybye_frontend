import useAuth from '../hooks/useAuth';
import profile from '../Images/profile.jpg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function History() {
  const { authenticatedUser } = useAuth();
  const [file, setFile] = useState(null);
  return (
    <>
      {/* nav left */}
      <div className="flex">
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
            <h2 className="text-m text-gray-600 font-bold ">
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
          <a
            href="#"
            className="flex items-center justify-center py-5 shadow-sm hover:bg-gray-100"
          >
            <i className="fa-solid fa-clock-rotate-left text-m pr-2 text-gray-600"></i>
            <h2 className="text-m text-gray-600">History</h2>
          </a>
          <a
            href="#"
            className="flex items-center justify-center py-5 hover:bg-gray-100"
          >
            <i className="fa-solid fa-right-from-bracket text-m pr-2 text-gray-600"></i>
            <h2 className="text-m text-gray-600">Logout</h2>
          </a>
        </div>
        {/* profile right */}
        <div className="flex bg-gray-100 w-4/5 justify-center">
          <div className="flex-col w-5/6 bg-white m-10 px-20 py-5">
            <div className="flex justify-center pb-1 border-b">
              <p className="text-md pr-1 text-gray-600 ">History</p>
            </div>
            <div className="flex border-2 mt-5 justify-between">
              <div className="flex justify-between w-1/2">
                <div className="my-5 mx-5 space-y-2 text-sm font-bold w-2/5 text-gray-600 ">
                  <p>Product :</p>
                  <p>Size :</p>
                  <p>Equipment :</p>
                  <p>Price :</p>
                  <p>Status :</p>
                </div>
                <div className="my-5 mx-5 space-y-2 text-sm w-2/5 text-gray-600 ">
                  <p>Nike M777</p>
                  <p>38</p>
                  <p>Yes</p>
                  <p>9,600 THB</p>
                  <p>Buyer</p>
                </div>
              </div>
              <div className="flex items-center px-2">
                <img
                  src={'https://picsum.photos/id/1/200/300'}
                  className="h-40 w-40 bg-gray-100"
                />
              </div>
            </div>
            <div className="flex border-2 mt-5 justify-between">
              <div className="flex justify-between w-1/2">
                <div className="my-5 mx-5 space-y-2 text-sm font-bold w-2/5 text-gray-600 ">
                  <p>Product :</p>
                  <p>Size :</p>
                  <p>Equipment :</p>
                  <p>Price :</p>
                  <p>Status :</p>
                </div>
                <div className="my-5 mx-5 space-y-2 text-sm w-2/5 text-gray-600 ">
                  <p>Nike M777</p>
                  <p>38</p>
                  <p>Yes</p>
                  <p>9,600 THB</p>
                  <p>Buyer</p>
                </div>
              </div>
              <div className="flex items-center px-2">
                <img
                  src={'https://picsum.photos/id/1/200/300'}
                  className="h-40 w-40 bg-gray-100"
                />
              </div>
            </div>
            <div className="flex border-2 mt-5 justify-between">
              <div className="flex justify-between w-1/2">
                <div className="my-5 mx-5 space-y-2 text-sm font-bold w-2/5 text-gray-600 ">
                  <p>Product :</p>
                  <p>Size :</p>
                  <p>Equipment :</p>
                  <p>Price :</p>
                  <p>Status :</p>
                </div>
                <div className="my-5 mx-5 space-y-2 text-sm w-2/5 text-gray-600 ">
                  <p>Nike M777</p>
                  <p>38</p>
                  <p>Yes</p>
                  <p>9,600 THB</p>
                  <p>Buyer</p>
                </div>
              </div>
              <div className="flex items-center px-2">
                <img
                  src={'https://picsum.photos/id/1/200/300'}
                  className="h-40 w-40 bg-gray-100"
                />
              </div>
            </div>
            <div className="flex border-2 mt-5 justify-between">
              <div className="flex justify-between w-1/2">
                <div className="my-5 mx-5 space-y-2 text-sm font-bold w-2/5 text-gray-600 ">
                  <p>Product :</p>
                  <p>Size :</p>
                  <p>Equipment :</p>
                  <p>Price :</p>
                  <p>Status :</p>
                </div>
                <div className="my-5 mx-5 space-y-2 text-sm w-2/5 text-gray-600 ">
                  <p>Nike M777</p>
                  <p>38</p>
                  <p>Yes</p>
                  <p>9,600 THB</p>
                  <p>Buyer</p>
                </div>
              </div>
              <div className="flex items-center px-2">
                <img
                  src={'https://picsum.photos/id/1/200/300'}
                  className="h-40 w-40 bg-gray-100"
                />
              </div>
            </div>
            <div className="flex border-2 mt-5 justify-between">
              <div className="flex justify-between w-1/2">
                <div className="my-5 mx-5 space-y-2 text-sm font-bold w-2/5 text-gray-600 ">
                  <p>Product :</p>
                  <p>Size :</p>
                  <p>Equipment :</p>
                  <p>Price :</p>
                  <p>Status :</p>
                </div>
                <div className="my-5 mx-5 space-y-2 text-sm w-2/5 text-gray-600 ">
                  <p>Nike M777</p>
                  <p>38</p>
                  <p>Yes</p>
                  <p>9,600 THB</p>
                  <p>Buyer</p>
                </div>
              </div>
              <div className="flex items-center px-2">
                <img
                  src={'https://picsum.photos/id/1/200/300'}
                  className="h-40 w-40 bg-gray-100"
                />
              </div>
            </div>
            <div className="flex border-2 mt-5 justify-between">
              <div className="flex justify-between w-1/2">
                <div className="my-5 mx-5 space-y-2 text-sm font-bold w-2/5 text-gray-600 ">
                  <p>Product :</p>
                  <p>Size :</p>
                  <p>Equipment :</p>
                  <p>Price :</p>
                  <p>Status :</p>
                </div>
                <div className="my-5 mx-5 space-y-2 text-sm w-2/5 text-gray-600 ">
                  <p>Nike M777</p>
                  <p>38</p>
                  <p>Yes</p>
                  <p>9,600 THB</p>
                  <p>Buyer</p>
                </div>
              </div>
              <div className="flex items-center px-2">
                <img
                  src={'https://picsum.photos/id/1/200/300'}
                  className="h-40 w-40 bg-gray-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
