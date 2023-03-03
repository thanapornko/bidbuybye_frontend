import 'flowbite';
import { toast } from 'react-toastify';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// import profile from '../Images/profile.jpg';
// import * as userApi from '../apis/user-api';

export default function EditMethod() {
  const { authenticatedUser, updateProfile } = useAuth();
  const [file, setFile] = useState(null);

  const handleClickSave = async () => {
    try {
      // convert => multipart form data
      const formData = new FormData();
      // method append เพิ่มkey
      formData.append('profilePicture', file);
      // ชื่อ key, file
      await updateProfile(formData);
      // await userApi.updateUserName({ name });
      toast.success('successfully updated!');
    } catch (err) {
      toast.error(err.response?.data.message || 'Failed to update');
    }
  };

  console.log(
    authenticatedUser.profilePicture,
    '-------------------------------au'
  );
  console.log(file, '----------file');
  return (
    <>
      {/* <!-- drawer component --> */}
      <div
        id="drawer-right"
        className="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto 
        transition-transform translate-x-full bg-white w-1/3 dark:bg-gray-800"
        tabIndex="-1"
        aria-labelledby="drawer-right-label"
      >
        <button
          type="button"
          data-drawer-hide="drawer-right"
          aria-controls="drawer-right"
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
        <div>
          <div className=" h-[55px] bg-gray-200 text-[16px] ">
            <div className="flex flex-col h-[55px] justify-center items-center font-semibold">
              Payout Method
            </div>
          </div>
          <div>
            <div className="h-[100px] w-[100%] mt-[24px] "></div>
            <div className="h-[100px] w-[100%] mt-[24px] "></div>
            <div className="h-[100px] w-[100%] mt-[24px] "></div>
            <div className="h-[20px] w-[100%] mt-[24px] "></div>
          </div>
          <div className="h-[85px] w-[100%] mt-[24px] absolute bottom-0 flex flex-row ">
            <div>
              <motion.div whileTap={{ scale: 0.75 }}>
                <button class="text-[12px] text-[#5A5A5A] px-[15px] py-[5px] border-2 font-medium	text-center w-[273px] h-[36px] rounded	hover:border-gray-900 cursor-pointer">
                  Cancel
                </button>
              </motion.div>
            </div>
            <div>
              <motion.div whileTap={{ scale: 0.75 }}>
                <nav>
                  <Link to="/payment">
                    <button class="text-[12px] text-[#5A5A5A] px-[15px] py-[5px] bg-[#D9D9D9] font-medium	text-center w-[273px] h-[36px] rounded	">
                      Submit
                    </button>
                  </Link>
                </nav>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
