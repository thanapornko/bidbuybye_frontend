import Dropwdiwn from '../components/Dropwdown';
import { BiX } from 'react-icons/bi';

export default function ShopNikePage() {
  return (
    <div className=" flex w-[100%]">
      {/* Box left */}
      <div className="border-2 w-[15%]">
        <Dropwdiwn />
      </div>
      {/* Box right */}
      <div className="border-2 w-[85%]">
        {/* Box-top right */}
        <div>
          {/* box-top */}
          <div>
            <a className="cursor-pointer underline text-[#969494] text-[12px]">
              Clear all
            </a>
          </div>
          {/* box-bottom */}
          <div className="flex border-2 p-1 ">
            {/* Shoes x */}
            <div className="w-20 flex items-center gap-2 bg-[#00000014] px-2 rounded-lg ">
              <p className="text-[14px] text-[#1b1b1b]">Shoes</p>
              <i className="bg-gray-200 rounded-full">
                <BiX className="text-black/30" />
              </i>
            </div>
            {/* Nike x */}
            <div className="w-20 flex items-center gap-2 bg-[#00000014] px-2 rounded-lg ">
              <p className="text-[14px] text-[#1b1b1b]">Nike</p>
              <i className="bg-gray-200 rounded-full">
                <BiX className="text-black/30" />
              </i>
            </div>
          </div>
        </div>
        {/* Box-bottom right */}
        <div></div>
      </div>
    </div>
  );
}
