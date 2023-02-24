import { useEffect, useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import * as categoryAPI from '../apis/category-api';
import * as brandAPI from '../apis/brand-api';

export default function Dropdown({ setSelectedCategory, setSelectedBrand }) {
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [brandDropdown, setBrandDropdown] = useState(false);
  const [priceDropdown, setPriceDropdown] = useState(false);

  const [categorys, setCategorys] = useState('');

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
                <button
                  onClick={() => {
                    setSelectedCategory(el.typeProduct === 'Shoes' ? 1 : 2);
                  }}
                  href="#"
                  className="cursor-pointer"
                >
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
              <button
                href="#"
                className="cursor-pointer"
                onClick={() => {
                  setSelectedBrand(el.id);

                  console.log(el.brand.title, ' el.brand.title');
                  console.log(
                    el.brand.Products.brandId,
                    ' el.brand.Products.brandId'
                  );
                }}
              >
                <p className={'text-[14px]'}>{el.title}</p>
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
