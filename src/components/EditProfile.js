// import 'flowbite';
import React from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

import { toast } from 'react-toastify';
import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import profile from '../Images/profile.jpg';
import * as userApi from '../apis/user-api';
import validateProfile from '../validate/validate-profile';

export default function EditProfile({ open, toggleDrawer }) {
  const { authenticatedUser, updateProfile } = useAuth();
  const [error, setError] = useState({});
  const [file, setFile] = useState(null);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [lineToken, setLineToken] = useState('');

  const input = {
    firstName: fname,
    lastName: lname,
    birthDate: birthdate,
    email: email,
    address: address,
    mobilePhone: mobile
  };

  const handleClickSave = async () => {
    try {
      const formData = new FormData();
      formData.append('profilePicture', file);
      await updateProfile(formData);
      const result = validateProfile(input);
      console.log(result, '---validate-result----');
      if (result) {
        setError(result);
      } else {
        console.log('no error');
        setError({});
        await userApi.updateUserInfo(input);
        toast.success('successfully updated!');
      }
    } catch (err) {
      console.log(err.response?.data.message);
      // toast.error(err.response?.data.message || 'Failed to update');
    }
  };

  console.log(error, '************error******');

  const handleChangeFname = async (e) => {
    setFname(e.target.value);
  };
  const handleChangeLname = async (e) => {
    setLname(e.target.value);
  };
  const handleChangeBirthdate = async (e) => {
    setBirthdate(e.target.value);
  };
  const handleChangeEmail = async (e) => {
    setEmail(e.target.value);
  };
  const handleChangeAddress = async (e) => {
    setAddress(e.target.value);
  };
  const handleChangeMobile = async (e) => {
    setMobile(e.target.value);
  };
  const handleChangeLineToken = async (e) => {
    setLineToken(e.target.value);
  };

  console.log(
    authenticatedUser.profilePicture,
    '-------------------------------au'
  );
  console.log(file, '----------file');

  ///convert date
  const bd = String(authenticatedUser.birthDate);
  const newDate = bd.slice(0, 10);

  return (
    <>
      <Drawer open={open} onClose={toggleDrawer} direction="right" size="30vw">
        <div className="text-center mt-5 mx-5">
          <button className="flex justify-around">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : authenticatedUser.profilePicture || profile
              }
              className="m-auto h-32 w-32 rounded-full border text-gray-600"
            />

            <input
              onChange={(e) => {
                if (e.target.files[0]) {
                  setFile(e.target.files[0]);
                }
              }}
              type="file"
              className="text-xs text-grey-500
              hover:file:cursor-pointer hover:file:bg-grey-300
              hover:file:text-blue-500 m-auto w-1/2
            "
            />
          </button>
        </div>
        <div
          className={`py-4 px-8 ${
            error.firstName ||
            error.lastName ||
            error.birthDate ||
            error.email ||
            error.mobilePhone ||
            error.address ||
            error.lineToken
              ? ''
              : 'space-y-2'
          }`}
        >
          <label htmlFor="fname" className="block text-xs text-gray-900">
            First Name
          </label>
          <input
            type="text"
            name="fname"
            className="block w-full bg-gray-100 text-gray-900 text-xs border-none"
            value={fname}
            onChange={(e) => handleChangeFname(e)}
            placeholder={authenticatedUser.firstName || 'firstName'}
          />
          <p className="text-red-500 text-xs">{error?.firstName}</p>
          <label htmlFor="lname" className="block text-xs text-gray-900 mt-2">
            Last Name
          </label>
          <input
            type="text"
            name="lname"
            className="block w-full bg-gray-100 text-gray-900 text-xs border-none"
            value={lname}
            onChange={(e) => handleChangeLname(e)}
            placeholder={authenticatedUser.lastName || 'lastName'}
          />
          <p className="text-red-500 text-xs">{error?.lastName}</p>
          <label htmlFor="bday" className="block text-xs text-gray-900 mt-2">
            Birthday
          </label>
          <input
            type="text"
            name="bday"
            className="block w-full bg-gray-100 text-gray-900 text-xs border-none"
            value={birthdate}
            onChange={(e) => handleChangeBirthdate(e)}
            placeholder={newDate || '-'}
          />
          <p className="text-red-500 text-xs">{error?.birthDate}</p>
          <label htmlFor="email" className="block text-xs text-gray-900 mt-2">
            Email Address
          </label>
          <input
            type="text"
            name="email"
            className="block w-full bg-gray-100 text-gray-900 text-xs border-none"
            value={email}
            onChange={(e) => handleChangeEmail(e)}
            placeholder={authenticatedUser.email || '-'}
          />
          <p className="text-red-500 text-xs">{error?.email}</p>
          <label htmlFor="mobile" className="block text-xs text-gray-900 mt-2">
            Mobile
          </label>
          <input
            type="text"
            name="mobile"
            className="block w-full bg-gray-100 text-gray-900 text-xs border-none"
            value={mobile}
            onChange={(e) => handleChangeMobile(e)}
            placeholder={authenticatedUser.mobilePhone || '-'}
          />
          <p className="text-red-500 text-xs">{error?.mobilePhone}</p>
          <label htmlFor="address" className="block text-xs text-gray-900 mt-2">
            Address
          </label>
          <input
            type="text"
            name="address"
            className="block w-full bg-gray-100 text-gray-900 text-xs border-none"
            value={address}
            onChange={(e) => handleChangeAddress(e)}
            placeholder={authenticatedUser.address || '-'}
          />
          <p className="text-red-500 text-xs">{error?.address}</p>
          <label
            htmlFor="lineToken"
            className="block text-xs text-gray-900 mt-2"
          >
            Line token
          </label>
          <input
            type="text"
            name="lineToken"
            className="block w-full bg-gray-100 text-gray-900 text-xs border-none"
            value={lineToken}
            onChange={(e) => handleChangeLineToken(e)}
            placeholder={authenticatedUser.lineToken || '-'}
          />
          <p className="text-red-500 text-xs">{error?.lineToken}</p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleClickSave}
            className="bg-green-600 hover:bg-green-500 px-4 py-2 mr-3 text-sm text-white"
          >
            save
          </button>
          <button
            onClick={toggleDrawer}
            type="button"
            className="bg-gray-400 hover:bg-gray-300 px-3 py-1 text-sm text-white"
          >
            cancel
          </button>
        </div>
      </Drawer>
    </>
  );
  //   return (
  //     <>
  //       {/* <!-- drawer component --> */}
  //       <div
  //         id="drawer-right-example"
  //         className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-1/3 dark:bg-gray-800"
  //         tabIndex="-1"
  //         aria-labelledby="drawer-right-label"
  //       >
  //         <h5
  //           id="drawer-right-label"
  //           className="inline-flex items-center mb-4 text-base text-gray-500 dark:text-gray-400"
  //         >
  //           Profile
  //         </h5>
  //         <button
  //           // onClick={() => setOpen(!open)}
  //           type="button"
  //           data-drawer-hide="drawer-right-example"
  //           aria-controls="drawer-right-example"
  //           className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-xs p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
  //         >
  //           <svg
  //             aria-hidden="true"
  //             className="w-5 h-5"
  //             fill="currentColor"
  //             viewBox="0 0 20 20"
  //             xmlns="http://www.w3.org/2000/svg"
  //           >
  //             <path
  //               fillRule="evenodd"
  //               d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
  //               clipRule="evenodd"
  //             ></path>
  //           </svg>
  //           <span className="sr-only">Close menu</span>
  //         </button>
  //         {/* content */}
  //         <div className="text-center">
  //           <button className="flex-col space-y-2">
  //             <img
  //               src={
  //                 file
  //                   ? URL.createObjectURL(file)
  //                   : authenticatedUser.profilePicture || profile
  //               }
  //               className="m-auto h-32 w-32 rounded-full border text-gray-600"
  //             />
  //             <input
  //               onChange={(e) => {
}
