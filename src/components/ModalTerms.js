import { Modal } from 'flowbite-react';
import { useState } from 'react';

export default function ModalTerms({ show, setShow }) {
  return (
    <>
      <Modal show={show} className=" w-1/3 m-auto bg-transparent">
        <Modal.Header onClick={() => setShow(false)} className="bg-gray-20">
          <h3 className="px-6 text-xl font-medium text-gray-900 ">
            Terms and Conditions
          </h3>
          <path fillRule="evenodd" clipRule="evenodd"></path>
          <span className="sr-only">Close modal</span>
        </Modal.Header>
        <Modal.Body className="bg-gray-20">
          <div className="p-4 space-y-6">
            <p className="text-base leading-relaxed text-gray-500">
              Users can use the bid order to show willingness to buy certain
              /products at a certain price. The Company will show the bid offer
              to other users, including but not limited to price, size, model,
              brand and type of product. The Company will match the transaction
              as soon as there is a matching ask/sell order.
            </p>
            <p className="text-base leading-relaxed text-gray-500">
              The purchase contract between buyer and seller will immediately
              begin when either the user's bid order has been matched or user
              place buy order to match seller ask order.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="h-20 bg-gray-20">
          <div className="flex items-center p-6 space-x-2 rounded-b ">
            <button
              onClick={() => setShow(false)}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Close
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
