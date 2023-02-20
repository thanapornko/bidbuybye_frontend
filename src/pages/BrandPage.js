import Dropwdiwn from '../components/Dropwdown';
import { BiX } from 'react-icons/bi';

export default function ShopNikePage() {
  return (
    <div className="flex w-[100%] h-[100px]">
      {/* Box left menuDropwdown */}
      <div className=" w-[15%] ml-2">
        <Dropwdiwn />
      </div>
      {/* ----------------------------------------- */}
      {/* Box right */}
      <div className=" w-[100%] ">
        {/* box right top  content*/}
        <div className="border-2 flex justify-between">
          <div className="flex flex-col gap-1">
            <a className="underline">
              <p className="text-[12px] text-[#969494]">Clear all</p>
            </a>

            <div className="flex gap-2">
              <div className="flex items-center gap-2 bg-[#00000014] px-3 rounded-full cursor-pointer">
                <p className="text-[#1b1b1b] ml-3 text-[13px]">Shoes</p>
                <i className="bg-gray-200 hover:bg-gray-300 rounded-full">
                  <BiX className="text-[#1b1b1b42]" />
                </i>
              </div>

              <div className="flex w-[70px] items-center gap-2 bg-[#00000014]  rounded-full cursor-pointer">
                <p className="text-[#1b1b1b] ml-3 text-[13px]">Nike</p>
                <i className="bg-gray-200 hover:bg-gray-300 rounded-full">
                  <BiX className="text-[#1b1b1b42]" />
                </i>
              </div>
            </div>
          </div>
          <div>right</div>
        </div>

        {/* ----------------------------------------- */}

        {/* box right bottom crad */}
        <div>ads</div>
      </div>
      {/* ----------------------------------------- */}
    </div>
  );
}
