import useAuth from '../hooks/useAuth';
import useProduct from '../hooks/useProduct';
import profile from '../Images/profile.jpg';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import formattedValued from '../utils/currency';
import ModalBid from '../components/ModalBid';
import OrderStatusModal from '../components/OrderStatusModal';

export default function BidAskPage() {
  const { authenticatedUser } = useAuth();
  const { allBid, fetchAllBids, cancelBid } = useProduct();
  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);
  const [bid, setBid] = useState();

  const filterBid = () => {
    if (bid) {
      const filtered = allBid.getBids.filter((i) => i.id === bid);
      return filtered;
    }
  };

  const toggleDrawer = (id) => {
    setOpen(!open);
    setBid(id);
  };

  useEffect(() => {
    (async () => {
      try {
        await fetchAllBids();
      } catch (error) {}
    })();
  }, []);

  const fetchBids = async (id) => {
    await cancelBid(id);
    await fetchAllBids();
  };

  return (
    <>
      {/* nav left */}
      <div className="flex">
        <OrderStatusModal
          open={open}
          setOpen={setOpen}
          toggleDrawer={toggleDrawer}
          data={filterBid()}
        />
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
            to="/bidask"
            className="flex items-center justify-center py-5 shadow-sm hover:bg-gray-100"
          >
            <i className="fa-solid fa-tag text-m pr-2 text-gray-600" />
            <h2 className="text-m text-gray-600">Bid/Ask status</h2>
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
        {/* profile right */}
        <div className="flex bg-gray-100 w-4/5 justify-center">
          <div className="flex-col w-5/6 bg-white m-10 px-20 py-5">
            <div className="flex justify-center pb-1 border-b">
              <p className="text-md pr-1 text-gray-600 ">Bid/Ask Status</p>
            </div>
            {allBid?.getBids.map((e) => (
              <div
                className="flex justify-between border-2 mt-5 w-auto"
                key={e.id}
              >
                <div className="flex flex-col justify-center my-5 mx-5 space-y-2 text-sm w-3/5 text-gray-600 ">
                  <div className="flex justify-between">
                    <div className="font-bold ">Product :</div>
                    <div>{e.ProductSize.Product.title}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="font-bold ">Size :</div>
                    <div>{e.ProductSize.Size.sizeProduct}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="font-bold ">Equipment :</div>
                    {e.equipment === true ? (
                      <div>packaging</div>
                    ) : (
                      <div>None packaging</div>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <div className="font-bold ">Price :</div>
                    <div>฿ {formattedValued(e.price)}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="font-bold ">Type :</div>
                    {e.type === 'SELLER' ? (
                      <div>Asking</div>
                    ) : (
                      <div>Biding</div>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <div className="font-bold ">Status :</div>
                    <div>{e.expiredDate}</div>
                  </div>
                  <div className="flex justify-center">
                    {/* <div className="font-bold ">Order Status :</div> */}
                    <button
                      onClick={() => {
                        toggleDrawer(e.id);
                      }}
                      className="bg-green-500 hover:bg-green-600 p-2 rounded-lg"
                    >
                      <p className="text-zinc-100">
                        Click to check your order status
                      </p>
                    </button>
                  </div>
                </div>
                <div className="flex items-center px-2">
                  <img
                    src={e.ProductSize.Product.ProductImage}
                    className="h-40 w-40 bg-gray-100"
                  />
                </div>

                <div className="flex items-end ">
                  {e.expiredDate !== 'CANCEL' && e.expiredDate !== 'EXPIRED' ? (
                    <ModalBid
                      onClick={() => {
                        fetchBids(e.id);
                      }}
                    />
                  ) : (
                    <div className="w-[135px]"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
