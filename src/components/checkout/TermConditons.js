// import 'flowbite';
import React from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';

import { useState } from 'react';

export default function TermConditions({ open, toggleDrawer }) {
  const handleClickSubmit = (e) => {
    e.preventDefault();

    // close the modal

    toggleDrawer();
  };

  return (
    <>
      <Drawer open={open} onClose={toggleDrawer} direction="right" size="30vw">
        <div className="flex justify-center items-start  px-10 gap-5  modal-body h-[100vh] overflow-y-scroll ">
          <div className="flex flex-col justify-between ">
            <div>
              <h2 className="text-2xl font-bold mt-10 ">
                Terms and Conditions
              </h2>
            </div>
            <div className="modal-body">
              <div>
                <ol class="list-decimal">
                  <li>
                    Welcome to bidbuybye, an online marketplace platform for
                    buying and selling specified products. Please read the
                    following agreements and policies before utilizing our
                    services:
                  </li>

                  <ol class="list-disc pl-5">
                    <li>User Agreement</li>
                    <li>Privacy Policy</li>
                    <li>Help Center</li>
                    <li>Discount Policy</li>
                    <li>Penalty Policy</li>
                  </ol>

                  <li>
                    By logging in or using our services, you agree to all of the
                    above agreements and policies. If you don't agree, please
                    stop using our services.
                  </li>
                  <li>
                    We only facilitate transactions, and the actual purchase
                    contract is directly between the buyer and seller. We are
                    responsible for ensuring that transactions process correctly
                    and quality checking items for authenticity. We don't
                    guarantee that your transaction will succeed or the time it
                    will take to complete. If you're under 18, you must have
                    your parents' or guardians' permission to use our platform
                    and services.
                  </li>
                  {/* <li>
                    We reserve the right to change, modify, suspend, or cancel
                    any or all of our services without further notice. We
                    reserve the right to refuse to grant you access to our
                    platform or services for any reason. Our platform and
                    services are only available to users who have agreed to this
                    User Agreement or minors with their parents' or guardians'
                    permission.
                  </li> */}
                  {/* <li>
                    You agree to use our platform and services for lawful
                    purposes and not violate any laws or regulations. You agree
                    not to use our platform and services for fraud,
                    misrepresentation, deception, or to violate the rights of
                    other users. You agree not to impersonate another person,
                    perform price manipulation, collect information about other
                    account owners, access unauthorized information, interfere
                    with the service or other users' enjoyment, or violate our
                    rights or intellectual property.
                  </li> */}
                </ol>
              </div>
            </div>
            <div className="modal-footer">
              <button
                class="text-[12px]
                         text-[#5A5A5A] px-[15px] py-[5px] 
                         bg-[#D9D9D9] font-medium	text-center w-[273px] h-[36px] rounded	"
                onClick={handleClickSubmit}
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}
