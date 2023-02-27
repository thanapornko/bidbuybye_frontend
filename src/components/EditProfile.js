import 'flowbite';
import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import profile from '../Images/profile.jpg';

export default function EditProfile() {
  const { authenticatedUser } = useAuth();
  const [file, setFile] = useState(null);

  const handleClickSave = async () => {
    try {
    } catch (err) {}
  };

  return (
    <>
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
          src={
            file
              ? URL.createObjectURL(file)
              : authenticatedUser.profileImage || profile
          }
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
            placeholder={authenticatedUser.firstName || 'firstName'}
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
            placeholder={authenticatedUser.lastName || 'lastName'}
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
            placeholder={authenticatedUser.birthDate || '-'}
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
            placeholder={authenticatedUser.email || '-'}
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
            placeholder={authenticatedUser.mobilePhone || '-'}
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
            placeholder={authenticatedUser.address || '-'}
          />
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleClickSave}
            className="bg-green-600 hover:bg-green-500 px-4 py-2 mr-3 text-sm text-white"
          >
            save
          </button>
          <button
            type="button"
            data-drawer-hide="drawer-right-example"
            aria-controls="drawer-right-example"
            className="bg-gray-400 hover:bg-gray-300 px-3 py-1 text-sm text-white"
          >
            cancel
          </button>
        </div>
      </div>
    </>
  );
}
