import { useEffect, useState } from 'react';
import * as adminApi from '../apis/admin-api';
import useAuth from '../hooks/useAuth';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Admin() {
  const [order, setOrder] = useState([]);
  const navigate = useNavigate();
  const { logout } = useAuth();

  const fetch = async () => {
    try {
      const res = await adminApi.getOrder();
      setOrder(res.data);
      console.log('mark', res.data);
      console.log('mark2', res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleShipped = async (orderId) => {
    try {
      console.log('orderiddd', orderId);
      await adminApi.updateShipped({ orderId, action: 'shipped' });
    } catch (err) {
      console.log(err);
    }
  };
  const handleArrived = async (orderId) => {
    try {
      await adminApi.updateArrived({ orderId, action: 'arrived' });
    } catch (err) {
      console.log(err);
    }
  };
  const handleVerified = async (orderId) => {
    try {
      await adminApi.updateVerified({ orderId, action: 'verified' });
    } catch (err) {
      console.log(err);
    }
  };
  const handleCancel = async (orderId) => {
    try {
      await adminApi.updateCancel({ orderId, action: 'cancel' });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      {/* nav left */}
      <div className="flex">
        <div className="flex-col bg-white h-screen w-1/5 ">
          <div className="flex items-center justify-around pt-3 pb-2 px-5 shadow">
            <h2 className="text-m text-gray-600 font-bold py-3">Admin</h2>
          </div>
          <a
            href="#"
            className="flex items-center justify-center py-5 shadow-sm hover:bg-gray-100"
          >
            <i className="fa-solid fa-truck-fast text-m pr-2 text-gray-600"></i>
            <h2 className="text-m text-gray-600">Order</h2>
          </a>
          <div
            href="#"
            className="flex items-center justify-center py-5 hover:bg-gray-100"
            onClick={handleLogout}
          >
            <i className="fa-solid fa-right-from-bracket text-m pr-2 text-gray-600"></i>
            <h2 className="text-m text-gray-600">Logout</h2>
          </div>
        </div>
        {/* profile right */}
        <div className="flex bg-gray-100 w-4/5 justify-center">
          <div className="flex-col w-5/6 bg-white m-10 px-20 py-5 rounded-lg">
            <div className="flex justify-center pb-1 border-b ">
              <p className="text-md pr-1 text-gray-600 ">Order</p>
            </div>
            {/* box */}
            {order.map((el, idx) => (
              <div className="flex-col border-b" key={idx}>
                <div className="flex border-2 mt-5 justify-between">
                  <div className="flex justify-between w-9/12">
                    <div className="my-5 mx-5 space-y-2 text-sm font-bold w-2/5 text-gray-600 ">
                      <p className="">Customer :</p>
                      <p className="">Order id :</p>
                      <p className="">Product :</p>
                      <p className="">Size :</p>
                      <p className="">Equipment :</p>
                      <p className="">Price :</p>
                      <p className="">Status :</p>
                    </div>
                    <div className="my-5  space-y-2 text-sm w-11/12 text-gray-600  ">
                      <p className="">{`${el.User.firstName} ${el.User.lastName}`}</p>
                      <p className="">{el.id}</p>
                      <p className="w-full">{el.Product.title}</p>
                      <p className="">{el.Size.sizeProduct}</p>
                      <p className="">{el.Bid.equipment ? 'Yes' : 'No'}</p>
                      <p className="">{el.Bid.price}</p>
                      <p className="">{el.Bid.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={el.Product.ProductImage}
                      className="h-48 w-48 mx-4 bg-gray-100"
                    />
                  </div>
                </div>
                <div className="flex my-5 mx-5 space-x-2 text-sm text-gray-600">
                  <div className="grid content-between justify-items-center w-1/3 h-16 p-1 bg-gray-100">
                    <p className="text-[13px]">Item arrived at bidbuybye</p>
                    <button
                      className="bg-green-500 rounded-xl px-3 py-1"
                      onClick={() => handleArrived(el.id)}
                    >
                      approve
                    </button>
                  </div>
                  <div className="grid content-between justify-items-center w-1/3 h-16 p-1 bg-gray-100">
                    <p className="text-[13px]">Verification</p>
                    <div className="flex">
                      <button
                        className="bg-green-500 rounded-xl px-3 py-1 mr-1"
                        onClick={() => handleVerified(el.id)}
                      >
                        approve
                      </button>
                      <button
                        className="bg-red-500 rounded-xl px-3 py-1"
                        onClick={() => handleCancel(el.id)}
                      >
                        decline
                      </button>
                    </div>
                  </div>
                  <div className="grid content-between justify-items-center w-1/3 h-16 p-1 bg-gray-100 ]">
                    <p className="text-[13px]">Item shipped from bidbuybye</p>
                    <button
                      className="bg-green-500 rounded-xl px-3 py-1"
                      onClick={() => handleShipped(el.id)}
                    >
                      approve
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {/* end box */}
            {/* box */}
            <div className="flex-col border-b">
              <div className="flex border-2 mt-5 justify-between">
                <div className="flex justify-between w-1/2">
                  <div className="my-5 mx-5 space-y-2 text-sm font-bold w-2/5 text-gray-600 ">
                    <p className="">Customer :</p>
                    <p className="">Order id :</p>
                    <p className="">Product :</p>
                    <p className="">Size :</p>
                    <p className="">Equipment :</p>
                    <p className="">Price :</p>
                    <p className="">Status :</p>
                  </div>
                  <div className="my-5 mx-5 space-y-2 text-sm w-2/5 text-gray-600 ">
                    <p className="">BigPom NaKrub</p>
                    <p className="">11111</p>
                    <p className="">Nike M777</p>
                    <p className="">38</p>
                    <p className="">Yes</p>
                    <p className="">9,600 THB</p>
                    <p className="">Buyer</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <img
                    src={'https://picsum.photos/id/1/200/300'}
                    className="h-48 w-48 mx-4 bg-gray-100"
                  />
                </div>
              </div>
              <div className="flex my-5 mx-5 space-x-2 text-sm text-gray-600">
                <div className="grid content-between justify-items-center w-1/3 h-16 p-1 bg-gray-100">
                  <p className="">Item arrived at bidbuybye</p>
                  <button className="bg-green-500 rounded-xl px-3 py-1">
                    approve
                  </button>
                </div>
                <div className="grid content-between justify-items-center w-1/3 h-16 p-1 bg-gray-100">
                  <p>Verification</p>
                  <div className="flex">
                    <button className="bg-green-500 rounded-xl px-3 py-1 mr-1">
                      approve
                    </button>
                    <button className="bg-red-500 rounded-xl px-3 py-1">
                      decline
                    </button>
                  </div>
                </div>
                <div className="grid content-between justify-items-center w-1/3 h-16 p-1 bg-gray-100">
                  <p className="">Item shipped from bidbuybye</p>
                  <button className="bg-green-500 rounded-xl px-3 py-1">
                    approve
                  </button>
                </div>
              </div>
            </div>
            {/* end box */}
          </div>
        </div>
      </div>
    </>
  );
}
