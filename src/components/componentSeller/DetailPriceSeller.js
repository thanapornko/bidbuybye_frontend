import { HiPencilSquare } from 'react-icons/hi2';
import { HiOutlineChevronRight } from 'react-icons/hi2';

export default function DetailPriceSeller() {
  return (
    <div>
      <div>
        <hr className="h-px bg-gray-200 " />
        <div className="flex p-4 justify-between">
          <div className="text-[18px] text-gray-500">Ask Price</div>
          <div className="flex items-center">
            <button>
              <div class="flex justify-center text-gray-400">Add Price</div>
            </button>
            <button>
              <HiPencilSquare className="ml-4" />
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center w-auto h-[100px] bg-gray-100 py-3 px-10">
          <div className="text-md">
            Would you like to sell now to the highest bidder?
          </div>
          <div className="flex items-center ">
            <div className="text-xl pr-2">฿ 4,200</div>
            <button>
              <HiOutlineChevronRight />
            </button>
          </div>
        </div>
        <div className="flex justify-evenly p-4">
          <button
            className="flex justify-center rounded-md border border-transparent bg-slate-900 py-2 px-4 text-sm w-[300px] font-medium text-white hover:bg-gray-600"
            type="button"
          >
            Back
          </button>
          <button
            className="flex justify-center rounded-md border border-transparent bg-gray-200 py-2 px-4 text-sm  w-[300px] font-medium text-white hover:bg-gray-900"
            type="button"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
