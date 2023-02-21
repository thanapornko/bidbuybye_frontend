export default function Register() {
  return (
    <div className="flex justify-center mt-10">
      {/* ///////////// */}
      <div className="w-1/3 bg-white rounded-md shadow-md">
        <div className="px-6 py-8 space-y-4">
          <div className="w-full bg-gray-200 rounded-md p-1 flex justify-between">
            <div className="w-1/2 text-center text-sm rounded-md p-1 hover:bg-white">
              Signup
            </div>
            <div className="w-1/2 text-center text-sm rounded-md p-1 hover:bg-white">
              Login
            </div>
          </div>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-bold text-gray-900 mt-8"
              >
                Email Address
              </label>
              <input
                type="text"
                name="email"
                className="block w-full p-2.5 bg-white border-b text-gray-900 focus:outline-none focus:border-b-black"
                placeholder="Email Address"
              />
              {/* <div className="text-red-500 text-sm pt-1">error</div> */}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-bold text-gray-900 relative"
              >
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-input block w-full p-2.5 bg-white border-b text-gray-900 focus:outline-none focus:border-b-black"
                />
                <button className="fa-solid fa-eye pr-1 absolute right-5 bottom-3" />
                {/* <i class="fa-solid fa-eye-slash"/> */}
              </label>

              {/* <div className="text-red-500 text-sm pt-1">error</div> */}
            </div>
            <div className="flex">
              <input type="checkbox" className="mr-2"></input>
              <p className="text-sm mr-1">I've read and agree to</p>
              <a className="text-sm font-bold underline" href="#">
                Terms & Conitions
              </a>
            </div>

            <div>
              <button className="w-full text-white bg-black hover:bg-gray-600 rounded-lg text-sm px-5 py-2.5 text-center">
                Signup
              </button>
              <p className="text-gray-500 text-center my-2">Or</p>
              <button className="w-full text-gray-600 bg-white border border-gray-300 hover:border-gray-700 rounded-lg text-sm px-5 py-2.5 text-center">
                <i className="fa-brands fa-google pr-1"></i> Continue with
                Google
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* ////////////// */}
    </div>
  );
}
