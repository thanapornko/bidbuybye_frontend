import { useEffect } from 'react';
import { HiOutlineChevronDown } from 'react-icons/hi2';
import useProduct from '../../hooks/useProduct';

export default function DetailSizeBuyer() {
  const { size, productDetail, handleSelectSize, selectSize, showPriceBySize } =
    useProduct();
  const sizeProduct = () => {
    if (productDetail.products.Category.typeProduct === 'Shoes') {
      return size.getAllSizeShoes.map((el) => (
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
    showPriceBySize();
  }, [selectSize]);

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
              {selectSize?.sizeProduct ? (
                `Size: ${selectSize?.sizeProduct}`
              ) : (
                <div>
                  Select Size <span className="text-red-500">*</span>{' '}
                </div>
              )}

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
              {sizeProduct()}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
