import { BiX } from 'react-icons/bi';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';

export default function NavbarShop({ setSelectedCategory, setSelectedBrand }) {
  const handleClear = () => {
    setSelectedCategory(0);
    setSelectedBrand(0);
  };

  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-1 p-2">
        <a className="hover:underline  cursor-pointer">
          <p className="text-[12px] text-[#969494] " onClick={handleClear}>
            Clear all
          </p>
        </a>

        <div className="flex gap-2">
          <div className="flex items-center gap-2 bg-[#00000014] px-3 rounded-full cursor-pointer">
            <p className="text-[#1b1b1b] text-[13px]  py-[2px]">Shoes</p>
            <i className="bg-gray-200 hover:bg-gray-300 rounded-full">
              <BiX className="text-[#1b1b1b42]" />
            </i>
          </div>

          <div className="flex w-[70px] items-center gap-2 bg-[#00000014]  rounded-full cursor-pointer">
            <p className="text-[#1b1b1b] ml-3 text-[13px] py-[2px]">Nike</p>
            <i className="bg-gray-200 hover:bg-gray-300 rounded-full">
              <BiX className="text-[#1b1b1b42]" />
            </i>
          </div>
        </div>
      </div>
      <div className="flex gap-10 p-2">
        <div className="flex gap-5 p-2">
          <p className="text-[14px]">Listing Type: Ask</p>
          <i className="cursor-pointer ">
            <AiOutlineCaretDown />
          </i>
        </div>
        <div className="flex gap-5 p-2">
          <p className="text-[14px]">Sort by Latest Listinh</p>
          <i className="cursor-pointer ">
            <AiOutlineCaretDown />
          </i>
        </div>
      </div>
    </div>
  );
}
