import { HiOutlineChevronDown } from 'react-icons/hi2';
import useProduct from '../../hooks/useProduct';

export default function DetailEquipment() {
  const { handleSelectEquipment, selectEquipment } = useProduct();
  const handleEquipment = () => {
    if (selectEquipment === null) {
      return 'Select Equipment';
    } else if (selectEquipment === true) {
      return 'Packaging';
    } else {
      return 'None Packaging';
    }
  };
  return (
    <div>
      <div className="flex p-4 justify-between">
        <div className="text-[18px] text-gray-500">Equipment</div>

        <div className="flex justify-center">
          <div>
            <div className="relative" data-te-dropdown-ref>
              <button
                className="flex items-center whitespace-nowrap text-[16px] "
                type="button"
                id="dropdownSize"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                {handleEquipment()}
                <span className="ml-2">
                  <HiOutlineChevronDown />
                </span>
              </button>
              <ul
                className="absolute z-[1000] float-left m-0 hidden min-w-max list-none 
                  overflow-hidden rounded-lg border-none bg-white 
                  bg-clip-padding text-left text-base shadow-lg [&[data-te-dropdown-show]]:block"
                aria-labelledby="dropdownMenuButton1"
                data-te-dropdown-menu-ref
              >
                <li
                  onClick={() => {
                    handleSelectEquipment(true);
                  }}
                >
                  <a
                    className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 
                      hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    Packaging
                  </a>
                </li>

                <li
                  onClick={() => {
                    handleSelectEquipment(false);
                  }}
                >
                  <a
                    className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 
                      hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    None Packaging
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
