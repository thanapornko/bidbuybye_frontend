import 'flowbite';
import profile from '../images/profile.jpg';
export default function EditProfile() {
  return (
    <>
      {/* <!-- drawer init and toggle --> */}
      <div className="text-center">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          type="button"
          data-drawer-target="drawer-right-example"
          data-drawer-show="drawer-right-example"
          data-drawer-placement="right"
          aria-controls="drawer-right-example"
        >
          Show right drawer
        </button>
      </div>

      {/* <!-- drawer component --> */}
      <div
        id="drawer-right-example"
        className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-1/3 dark:bg-gray-800"
        tabIndex="-1"
        aria-labelledby="drawer-right-label"
      >
        <h5
          id="drawer-right-label"
          className="inline-flex items-center mb-4 text-base text-gray-500 dark:text-gray-400"
        >
          Profile
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-right-example"
          aria-controls="drawer-right-example"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-xs p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        {/* content */}
        <img
          src={profile}
          className="m-auto h-28 w-28 rounded-full border text-gray-600"
        />
        <div className="p-5">
          <label htmlFor="fname" className="block mb-2 text-xs text-gray-900">
            First Name
          </label>
          <input
            type="text"
            name="fname"
            className="block w-full bg-gray-100 text-gray-900 text-xs border-none"
            placeholder="BigPom"
          />
          <label
            htmlFor="lname"
            className="block mb-2 text-xs text-gray-900 mt-3"
          >
            Last Name
          </label>
          <input
            type="text"
            name="lname"
            className="block w-full bg-gray-100 text-gray-900 text-xs border-none"
            placeholder="NaKrub"
          />
          <label
            htmlFor="bday"
            className="block mb-2 text-xs text-gray-900 mt-3"
          >
            Birthday
          </label>
          <input
            type="text"
            name="bday"
            className="block w-full bg-gray-100 text-gray-900 text-xs border-none"
            placeholder="11/11/1888"
          />
          <label
            htmlFor="email"
            className="block mb-2 text-xs text-gray-900 mt-3"
          >
            Email Address
          </label>
          <input
            type="text"
            name="email"
            className="block w-full bg-gray-100 text-gray-900 text-xs border-none"
            placeholder="pomza55@yahoo.com"
          />

          <label
            htmlFor="mobile"
            className="block mb-2 text-xs text-gray-900 mt-3"
          >
            Mobile
          </label>
          <input
            type="text"
            name="mobile"
            className="block w-full bg-gray-100 text-gray-900 text-xs border-none"
            placeholder="0812345678"
          />
          <label
            htmlFor="address"
            className="block mb-2 text-xs text-gray-900 mt-3"
          >
            Address
          </label>
          <input
            type="text"
            name="address"
            className="block w-full bg-gray-100 text-gray-900 text-xs border-none"
            placeholder="Ayudhaya 99 Krungsri Thailand 11111"
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-green-600 hover:bg-green-500 px-4 py-2 mr-3 text-sm text-white">
            save
          </button>
          <button className="bg-gray-400 hover:bg-gray-300 px-3 py-1 text-sm text-white">
            cancel
          </button>
        </div>
      </div>
    </>
  );
}
