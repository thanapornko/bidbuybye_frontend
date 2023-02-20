import { HiOutlineChevronDown } from 'react-icons/hi2';

export default function DetailSize() {
  return (
    <div>
      <div className="flex p-4 justify-between">
        <div className="text-[18px] text-gray-500">Size</div>

        <div class="flex justify-center">
          <div>
            <div class="relative" data-te-dropdown-ref>
              <button
                class="flex items-center whitespace-nowrap text-[16px] "
                type="button"
                id="dropdownSize"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Select Size
                <span class="ml-2 w-2">
                  <HiOutlineChevronDown />
                </span>
              </button>
              <ul
                class="absolute z-[1000] float-left m-0 hidden min-w-max list-none 
                  overflow-hidden rounded-lg border-none bg-white 
                  bg-clip-padding text-left text-base shadow-lg [&[data-te-dropdown-show]]:block"
                aria-labelledby="dropdownMenuButton1"
                data-te-dropdown-menu-ref
              >
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 
                      hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    36
                  </a>
                </li>
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 
                      hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    36.5
                  </a>
                </li>
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 
                      hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    37
                  </a>
                </li>
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 
                      hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    38
                  </a>
                </li>
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 
                      hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    39
                  </a>
                </li>
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 
                      hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    40
                  </a>
                </li>
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 
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
    </div>
  );
}
