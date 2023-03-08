import React from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import useProduct from '../hooks/useProduct';

export default function OrderStatusAsking({ open, toggleDrawer, data }) {
  // console.log(data);
  const renderAuthStatus = (e) => {
    if (e.Order?.OrderStatuses[0].status === 'VERIFIED') {
      return (
        <div className="flex">
          <i className="fa-solid fa-circle text-green-500 text-xs mr-1" />
          <div className="flex flex-col">
            <p className="text-sm text-gray-900">Authentication</p>
            <p className="text-sm text-gray-500">
              Preparing to ship item to you
            </p>
          </div>
        </div>
      );
    }

    if (e.Order?.OrderStatuses[0].status === 'CANCEL') {
      return (
        <div className="flex">
          <i className="fa-solid fa-circle text-red-500 text-xs mr-1" />
          <div className="flex flex-col">
            <p className="text-sm text-gray-900">Unauthenticated</p>
            <p className="text-sm text-gray-500">
              Your product canceled because unauthenicated.
            </p>
          </div>
        </div>
      );
    }
    return (
      <div className="flex">
        <i className="fa-solid fa-circle text-gray-500 text-xs mr-1" />
        <p className="text-sm text-gray-900">Authentication</p>
        <p className="text-sm text-gray-500">Preparing to ship item to you</p>
      </div>
    );
  };
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
        {/* SELLER */}
        {data?.map((e) =>
          e.type === 'SELLER' ? (
            <div className="flex justify-between mx-10 mt-20">
              <div className="flex-col space-y-10 pr-4">
                <div className="flex">
                  {e.Order?.OrderStatuses[0].status === 'CONFIRMED' ? (
                    <i className="fa-solid fa-circle text-green-500 text-xs mr-1"></i>
                  ) : (
                    <i className="fa-solid fa-circle text-gray-500 text-xs mr-1"></i>
                  )}
                  <div className="flex-col">
                    <p className="text-sm text-gray-900">Order Confirmed</p>
                    <p className="text-sm text-gray-500">
                      Please sent product to bidbyebuy flagship store. Mint
                      Tower, 719 Rama 6 Road, Wangmai, Pathumwan, Bangkok 10330
                    </p>
                  </div>
                </div>
                <div className="flex">
                  {e.renderAuthStatus ? (
                    <i className="fa-solid fa-circle text-green-500 text-xs mr-1"></i>
                  ) : (
                    <i className="fa-solid fa-circle text-gray-500 text-xs mr-1"></i>
                  )}
                  <div className="flex-col">
                    <p className="text-sm text-gray-900">
                      Item arrived at bidbuybye
                    </p>
                    <p className="text-sm text-gray-500">
                      Preparing to authenticate
                    </p>
                  </div>
                </div>
                <div className="flex">{renderAuthStatus(e)}</div>
                <div className="flex">
                  {e.Order?.OrderStatuses[0].status === 'SHIPPED' ? (
                    <i className="fa-solid fa-circle text-green-500 text-xs mr-1"></i>
                  ) : (
                    <i className="fa-solid fa-circle text-gray-500 text-xs mr-1"></i>
                  )}
                  <div className="flex-col">
                    <p className="text-sm text-gray-900">
                      Item shipped from bidbuybye
                    </p>
                    <p className="text-sm text-gray-500">Standard delivery</p>
                  </div>
                </div>
                <div className="flex">
                  {e.Order?.OrderStatuses[0].status === 'COMPLETED' ? (
                    <i className="fa-solid fa-circle text-green-500 text-xs mr-1"></i>
                  ) : (
                    <i className="fa-solid fa-circle text-gray-500 text-xs mr-1"></i>
                  )}
                  <div className="flex-col">
                    <p className="text-sm text-gray-900">Order completed</p>
                    <p className="text-sm text-gray-500">Item delivered</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // BUYER
            <div className="flex justify-between mx-10 mt-20">
              <div className="flex-col space-y-10">
                <div className="flex">
                  {e.Order?.OrderStatuses[0].status === 'CONFIRMED' ? (
                    <i className="fa-solid fa-circle text-green-500 text-xs mr-1"></i>
                  ) : (
                    <i className="fa-solid fa-circle text-gray-500 text-xs mr-1"></i>
                  )}
                  <div className="flex-col">
                    <p className="text-sm text-gray-900">
                      Seller sold to your bid
                    </p>
                    <p className="text-sm text-gray-500">
                      Order is in shipment process
                    </p>
                  </div>
                </div>
                <div className="flex">
                  {e.Order?.OrderStatuses[0].status === 'ARRIVED' ? (
                    <i className="fa-solid fa-circle text-green-500 text-xs mr-1"></i>
                  ) : (
                    <i className="fa-solid fa-circle text-gray-500 text-xs mr-1"></i>
                  )}
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
                  {e.Order?.OrderStatuses[0].status === 'VERIFIED' ? (
                    <i className="fa-solid fa-circle text-green-500 text-xs mr-1"></i>
                  ) : (
                    <i className="fa-solid fa-circle text-gray-500 text-xs mr-1"></i>
                  )}
                  <div className="flex-col">
                    <p className="text-sm text-gray-900">Authentication</p>
                    <p className="text-sm text-gray-500">
                      Preparing to ship item to you
                    </p>
                  </div>
                </div>
                <div className="flex">
                  {e.Order?.OrderStatuses[0].status === 'SHIPPED' ? (
                    <i className="fa-solid fa-circle text-green-500 text-xs mr-1"></i>
                  ) : (
                    <i className="fa-solid fa-circle text-gray-500 text-xs mr-1"></i>
                  )}
                  <div className="flex-col">
                    <p className="text-sm text-gray-900">
                      Item shipped from bidbuybye
                    </p>
                    <p className="text-sm text-gray-500">Standard delivery</p>
                  </div>
                </div>
                <div className="flex">
                  {e.Order?.OrderStatuses[0].status === 'COMPLETED' ? (
                    <i className="fa-solid fa-circle text-green-500 text-xs mr-1"></i>
                  ) : (
                    <i className="fa-solid fa-circle text-gray-500 text-xs mr-1"></i>
                  )}
                  <div className="flex-col">
                    <p className="text-sm text-gray-900">Order completed</p>
                    <p className="text-sm text-gray-500">Item delivered</p>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </Drawer>
    </>
  );
}
