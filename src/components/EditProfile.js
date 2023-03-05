import React from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import profile from '../Images/profile.jpg';
import * as userApi from '../apis/user-api';
import * as authApi from '../apis/auth-api';
import validateProfile from '../validate/validate-profile';

export default function EditProfile({ open, setOpen, toggleDrawer }) {
  const { authenticatedUser, setAuthenticatedUser, updateProfile } = useAuth();
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
    mobilePhone: mobile,
    lineToken: lineToken
  };

  // handleClickSave;
  // const handleClickSave = async () => {
  //   try {
  //     const result = validateProfile(input);
  //     console.log(result, '---validate-result----');
  //     if (result) {
  //       setError(result);
  //     } else {
  //       console.log('no error');
  //       setError({});
  //       const formData = new FormData();
  //       formData.append('profilePicture', file);
  //       await updateProfile(formData);
  //       await userApi.updateUserInfo(input);
  //       toast.success('successfully updated!');
  //       setOpen(!open);
  //       setAuthenticatedUser({ ...authenticatedUser, ...input });
  //       console.log(authenticatedUser, '----after click save----');
  //     }
  //   } catch (err) {
  //     console.log(err.response?.data.message);
  //     toast.error('Failed to update');
  //   }
  // };

  const handleClickSave = async () => {
    try {
      const result = validateProfile(input);
      console.log(result, '---validate-result----');
      if (result) {
        setError(result);
      } else {
        console.log('no error');
        setError({});

        const formData = new FormData();
        formData.append('profilePicture', file);

        // Update profile picture on Cloudinary and get the URL
        let profilePictureUrl = authenticatedUser.profilePicture;
        if (file) {
          profilePictureUrl = await updateProfile(formData);
        }

        // Update user info on the server with the new or old profile picture URL
        const updatedUserInfo = { ...input, profilePicture: profilePictureUrl };
        const updatedAuthenticatedUser = {
          ...authenticatedUser,
          ...updatedUserInfo
        };
        setAuthenticatedUser(updatedAuthenticatedUser);
        await userApi.updateUserInfo(updatedUserInfo);

        toast.success('successfully updated!');
        setOpen(!open);
        console.log(authenticatedUser, '----after click save----');
      }
    } catch (err) {
      console.log(err.response?.data.message);
      toast.error('Failed to update');
    }
  };

  //////////
  useEffect(() => {
    setFname(authenticatedUser.firstName);
  }, [authenticatedUser.firstName]);

  useEffect(() => {
    setLname(authenticatedUser.lastName);
  }, [authenticatedUser.lastName]);

  ///convert date
  const bd = authenticatedUser.birthDate
    ? String(authenticatedUser.birthDate)
    : '';
  const newDate = bd.slice(0, 10) || '-';

  useEffect(() => {
    setBirthdate(newDate);
  }, [authenticatedUser.birthDate]);

  useEffect(() => {
    setEmail(authenticatedUser.email);
  }, [authenticatedUser.email]);

  useEffect(() => {
    setMobile(authenticatedUser.mobilePhone);
  }, [authenticatedUser.mobilePhone]);

  useEffect(() => {
    setAddress(authenticatedUser.address);
  }, [authenticatedUser.address]);

  useEffect(() => {
    setLineToken(authenticatedUser.lineToken);
  }, [authenticatedUser.lineToken]);

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
            placeholder={authenticatedUser.firstName || '-'}
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
            placeholder={authenticatedUser.lastName || '-'}
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
            value={mobile || authenticatedUser.mobilePhone}
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
}
