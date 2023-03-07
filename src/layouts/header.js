import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';

import Search from '../components/Search';
import useAuth from '../hooks/useAuth';
import logo from '../assets/logo.png';
import { Dropdown } from 'flowbite-react';

export default function Header() {
  const { authenticatedUser, logout } = useAuth();
  const [openSearch, setOpenSearch] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleProfile = () => {
    navigate('/profile');
  };

  return (
    <div className="flex flex-col border-b-2 ">
      <div className="flex justify-end bg-black">
        <h1 className="flex justify-center items-center text-white text-xs h-[32px] p-3 cursor-pointer">
          HELP
        </h1>
      </div>
      <div>
        <div className="flex  items-center justify-around gap-80 h-14  ">
          <Link to="/" className="ml-2">
            <img className="w-[120px]" src={logo} alt="logoImage" />
          </Link>
          <form>
            <div
              className="flex gap-2 justify-Start items-center w-[608px] bg-gray-100  text-xs"
              onClick={() => setOpenSearch(true)}
            >
              <i className="text-sm text-gray-500 ml-3 ">
                <BiSearch />
              </i>
              <input
                className="outline-none bg-gray-100 border-none  w-[500px]"
                type="text"
                placeholder="Search for product by brands, model or try # to discover more...."
              />
            </div>
          </form>
          <Search openSearch={openSearch} setOpenSearch={setOpenSearch} />
          {authenticatedUser ? (
            <Dropdown
              arrowIcon={false}
              label={<i className="fa-solid fa-bars px-6" />}
              dismissOnClick={false}
              inline={true}
            >
              <Dropdown.Item>
                <button onClick={handleProfile}>Profile</button>
              </Dropdown.Item>
              <Dropdown.Item>
                <button onClick={handleLogout}>Logout</button>
              </Dropdown.Item>
            </Dropdown>
          ) : (
            <Link
              to="/login"
              className="border-2 text-[#5a5a5a] py-[5px] px-[15px] rounded"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
