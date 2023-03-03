import { HiOutlineChevronDown } from 'react-icons/hi2';
import useProduct from '../../hooks/useProduct';
import { useEffect } from 'react';

export default function DetailSize() {
  const {
    size,
    productDetail,
    handleSelectSize,
    selectSize,
    showMaxPriceBySize,
    maxPriceBySize
  } = useProduct();
  const sizeProduct = () => {
    if (productDetail.products.Category.typeProduct === 'Shoes') {
      return size.getAllSizeShoes.map((el) => (
        <li
          onClick={() => {
            handleSelectSize(el);
            console.log(el);
          }}
        >
          <a
            className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 
            hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
            href="#"
            data-te-dropdown-item-ref
            key={el.id}
          >
            {el.sizeProduct}
          </a>
        </li>
      ));
    } else {
      return size.getAllSizeApperal.map((el) => (
        <li
          onClick={() => {
            handleSelectSize(el);
          }}
        >
          <a
            className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 
            hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400"
            href="#"
            data-te-dropdown-item-ref
            key={el.id}
          >
            {el.sizeProduct}
          </a>
        </li>
      ));
    }
  };

  useEffect(() => {
    showMaxPriceBySize();
  }, [selectSize]);

  return (
    <div>
      <div className="flex p-4 justify-between">
        <div className="text-[18px] text-gray-500">Size</div>

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
                {selectSize?.sizeProduct
                  ? `Size: ${selectSize?.sizeProduct}`
                  : 'Select Size'}
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
                {sizeProduct()}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
