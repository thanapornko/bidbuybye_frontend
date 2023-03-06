import { useEffect, useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import * as categoryAPI from '../apis/category-api';
import * as brandAPI from '../apis/brand-api';

export default function Dropdown({
  setSelectedCategory,
  setSelectedBrand,
  selectedCategory,
  selectedBrand
}) {
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [brandDropdown, setBrandDropdown] = useState(false);
  const [priceDropdown, setPriceDropdown] = useState(false);
  const [listingType, setListingType] = useState(false);

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
                    setSelectedCategory(
                      el.typeProduct === 'Shoes' ? 'Shoes' : 'Apperal'
                    );
                  }}
                  href="#"
                  className="cursor-pointer"
                >
                  <p
                    className={`text-[14px] ${
                      el.typeProduct === selectedCategory
                        ? 'text-[#FF3722]'
                        : 'text-black'
                    }`}
                  >
                    {el.typeProduct}
                  </p>
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
                }}
              >
                <p
                  className={`text-[14px] ${
                    el.id === selectedBrand ? 'text-[#FF3722]' : 'text-black'
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
      {/* ListingType */}
      <button
        onClick={() => setListingType((prev) => !prev)}
        className="border-b-[1px] w-full flex items-center justify-between gap-10  text-lg text-[0.85rem] tracking-wider rounde-lg"
      >
        ListingType
        {!listingType ? (
          <AiOutlineCaretDown className="h-8 " />
        ) : (
          <AiOutlineCaretUp className="h-8 " />
        )}
      </button>
      {listingType && (
        <div className=" flex flex-col items-start  gap-2  mb-3 mt-3">
          <div className="w-full hover:bg-gray-100 cursor-pointer p-2">
            <button>
              <p className="text-[16px] text-[#1B1B1B]">Ask</p>
            </button>
            <p className="text-[12px] text-[#969696]">
              View all ask placed by sellers
            </p>
          </div>

          <div className="w-full hover:bg-gray-100 cursor-pointer p-2">
            <button>
              <p className="text-[16px] text-[#1B1B1B]">Bid</p>
            </button>
            <p className="text-[12px] text-[#969696]">
              View all ask placed by buyers
            </p>
          </div>
        </div>
      )}
      {/* ----------------------------------------------------------------------- */}
      {/* Price */}
      {/* <button
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
        <div className=" flex flex-col items-start  gap-2  mb-3 mt-3 p-2">
          <form className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <label for="html" className="text-[14px]">
                &lt; 10,000
              </label>
            </div>

            <div className="flex gap-2 items-center">
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <label for="html" className="text-[14px]">
                &gt; 10,000 - 20,000
              </label>
            </div>

            <div className="flex gap-2 items-center">
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <label for="html" className="text-[14px]">
                &gt; 20,000 - 30,000
              </label>
            </div>

            <div className="flex gap-2 items-center">
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <label for="html" className="text-[14px]">
                &gt; 30,000 - 40,000
              </label>
            </div>

            <div className="flex gap-2 items-center">
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <label for="html" className="text-[14px]">
                &gt; 40,000 - 50,000
              </label>
            </div>

            <div className="flex gap-2 items-center">
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <label for="html" className="text-[14px]">
                &gt;= 50,000
              </label>
            </div>

            <div className="flex gap-2 items-center">
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <label for="html" className="text-[14px]">
                All
              </label>
            </div>
          </form>
        </div>
      )} */}
    </div>
  );
}
