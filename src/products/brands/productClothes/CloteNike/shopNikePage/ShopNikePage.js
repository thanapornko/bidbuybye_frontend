import Dropwdiwn from '../../../../../component/Dropwdown';
import { BiX } from 'react-icons/bi';

export default function ShopNikePage() {
  return (
    <div className=" flex bg-red-300 w-[100%]">
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
          <div>
            <div className="w-20 flex items-center gap-2 bg-gray-400 px-2">
              <p className="text-[14px] ">Shoes</p>
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
