import { HiOutlineChevronDown } from 'react-icons/hi2';

export default function DetailSizeBuyer() {
  return (
    <div>
      <div className="flex justify-center">
        <div>
          <div className="relative" data-te-dropdown-ref>
            <button
              className="flex items-center whitespace-nowrap text-[24px] "
              type="button"
              id="dropdownSize"
              data-te-dropdown-toggle-ref
              aria-expanded="false"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Size
              <span className="ml-2">
                <HiOutlineChevronDown />
              </span>
            </button>
            <ul
              className="absolute z-[1000] hidden min-w-max list-none 
                  overflow-hidden rounded-lg border-none bg-white text-[20px]
                  bg-clip-padding text-center shadow-lg [&[data-te-dropdown-show]]:block"
              aria-labelledby="dropdownMenuButton1"
              data-te-dropdown-menu-ref
            >
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent py-2 px-4  font-normal text-neutral-700 
                      hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  36
                </a>
              </li>
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent py-2 px-4 font-normal text-neutral-700 
                      hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  36.5
                </a>
              </li>
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent py-2 px-4 font-normal text-neutral-700 
                      hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  37
                </a>
              </li>
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent py-2 px-4 font-normal text-neutral-700 
                      hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  38
                </a>
              </li>
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent py-2 px-4 font-normal text-neutral-700 
                      hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  39
                </a>
              </li>
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent py-2 px-4 font-normal text-neutral-700 
                      hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  40
                </a>
              </li>
              <li>
                <a
                  className="block w-full whitespace-nowrap bg-transparent py-2 px-4 font-normal text-neutral-700 
                      hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  40.5
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
