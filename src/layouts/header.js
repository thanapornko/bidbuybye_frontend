import { BiSearch } from 'react-icons/bi';
import { Outlet } from 'react-router-dom';

export default function Header() {
  return (
    <div className="flex flex-col border-b-2">
      <div className="flex justify-end bg-black">
        <h1 className="flex justify-center items-center text-white text-xs h-[32px] p-3 cursor-pointer">
          HELP
        </h1>
      </div>
      <div>
        <div className="flex items-center justify-around gap-80 h-14">
          <h1 className="ml-2">
            SA_ <br />
            SOM
          </h1>
          <form>
            <div className="flex gap-2 justify-Start items-center w-[608px] bg-gray-100  text-xs">
              <i className="text-sm text-gray-500 ml-3 ">
                <BiSearch />
              </i>
              <input
                className="outline-none bg-gray-100 border-none  w-[500px]"
                type="text"
                placeholder="Search for porduct by brands, model or try # to discover more...."
              />
            </div>
          </form>
          <button className="border-2 text-[#5a5a5a] py-[5px] px-[15px] rounded">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
