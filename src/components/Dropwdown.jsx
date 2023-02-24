import { useEffect, useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import * as categoryAPI from '../apis/category-api';
import * as brandAPI from '../apis/brand-api';

export default function Dropdown({
  setSearchBrand,
  searchBrand,
  setCategoryAllBrand
}) {
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [brandDropdown, setBrandDropdown] = useState(false);
  const [priceDropdown, setPriceDropdown] = useState(false);

  const [brandIndex, setBrandIndex] = useState(false);
  const [brandText, setBrandText] = useState('');

  const doFunc = (text) => {
    setSearchBrand(text);
    setBrandText(text);
    if (searchBrand === brandText) {
      setBrandIndex(true);
    }
  };

  const [categorys, setCategorys] = useState([]);
  useEffect(() => {
    const fetchCategory = async () => {
      const res = await categoryAPI.getCategory();
      setCategorys(res.data.category);
    };
    fetchCategory();
  }, []);

  const [brands, setBrands] = useState([]);
  useEffect(() => {
    const fetchBrand = async () => {
      const res = await brandAPI.getBrand();
      setBrands(res.data.brand);
    };
    fetchBrand();
  }, []);

  return (
    <div className="relative flex flex-col  rounde-lg">
      {/* Category */}
      <button
        onClick={() => setCategoryDropdown((prev) => !prev)}
        className="border-b-[1px] w-full flex items-center justify-between gap-10 text-lg text-[0.85rem] tracking-wider rounde-lg"
      >
        Category
        {!categoryDropdown ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
      </button>

      {categoryDropdown && (
        <div className="flex flex-col items-start  gap-2  mb-3 mt-3">
          {categorys && (
            <>
              {categorys?.map((el) => (
                <button onClick={doFunc} href="#" className="cursor-pointer">
                  <p className="text-[14px]">{el.typeProduct}</p>
                </button>
              ))}
            </>
          )}
        </div>
      )}
      {/* ----------------------------------------------------------------------- */}
      {/* Brand */}
      <button
        onClick={() => setBrandDropdown((prev) => !prev)}
        className="border-b-[1px] w-full flex items-center justify-between gap-10  text-lg text-[0.85rem] tracking-wider rounde-lg"
      >
        Brand
        {!brandDropdown ? (
          <AiOutlineCaretDown className="h-8 " />
        ) : (
          <AiOutlineCaretUp className="h-8 " />
        )}
      </button>

      {brandDropdown && (
        <div className=" flex flex-col items-start  gap-2  mb-3 mt-3">
          {brands?.map((el) => (
            <>
              <button href="#" className="cursor-pointer">
                <p
                  className={`text-[14px] text-${
                    brandIndex ? '[#FF3722]' : '[black]'
                  }`}
                >
                  {el.title}
                </p>
              </button>
            </>
          ))}
        </div>
      )}

      {/* ----------------------------------------------------------------------- */}
      {/* Price */}
      <button
        onClick={() => setPriceDropdown((prev) => !prev)}
        className="border-b-[1px] w-full flex items-center justify-between gap-10 text-[0.85rem]  text-lg tracking-wider rounde-lg"
      >
        Price
        {!priceDropdown ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
      </button>

      {priceDropdown && (
        <div className=" flex flex-col items-start  gap-2  mb-3 mt-3">
          <a href="#" className="cursor-pointer">
            <p className="text-[14px]">ยังไม่ทำ</p>
          </a>
        </div>
      )}
      {/* ----------------------------------------------------------------------- */}
    </div>
  );
}
