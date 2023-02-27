export default function Admin() {
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
          <div className="flex-col w-5/6 bg-white m-10 px-20 py-5 rounded-lg">
            <div className="flex justify-center pb-1 border-b ">
              <p className="text-md pr-1 text-gray-600 ">Order</p>
            </div>
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
