import { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';

export default function Dropdown({
  setSearchBrand,
  searchBrand,
  setCategoryAllBrand
}) {
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);
  const [price, setPrice] = useState(false);

  const DataCategory = [
    {
      id: 1,
      title: 'Shoes'
    },
    {
      id: 2,
      title: 'Apparel'
    }
  ];

  const Databrands = [
    {
      id: 1,
      title: 'Nike'
    },
    {
      id: 2,
      title: 'Adidas'
    },

    {
      id: 4,
      title: 'New Balance'
    },
    {
      id: 5,
      title: 'Stussy'
    },
    {
      id: 6,
      title: 'Carnival'
    },
    {
      id: 7,
      title: 'Anti Social Social Club'
    },
    {
      id: 8,
      title: 'Kaws'
    }
  ];

  const [brandIndex, setBrandIndex] = useState(false);
  const [brandText, setBrandText] = useState('');

  const doFunc = (text) => {
    setSearchBrand(text);
    setBrandText(text);
    if (searchBrand === brandText) {
      setBrandIndex(true);
    }
  };

  return (
    <div className="relative flex flex-col  rounde-lg">
      {/* Category */}
      <button
        onClick={() => setCategory((prev) => !prev)}
        className="border-b-[1px] w-full flex items-center justify-between gap-10 text-lg text-[0.85rem] tracking-wider rounde-lg"
      >
        Category
        {!category ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
      </button>

      {category && (
        <div className="flex flex-col items-start  gap-2  mb-3 mt-3">
          <>
            {DataCategory.map((el, idx) => (
              <button
                onClick={() => setCategoryAllBrand(el.title)}
                href="#"
                className="cursor-pointer"
              >
                <p className="text-[14px]">{el.title}</p>
              </button>
            ))}
          </>
        </div>
      )}
      {/* ----------------------------------------------------------------------- */}
      {/* Brand */}
      <button
        onClick={() => setBrand((prev) => !prev)}
        className="border-b-[1px] w-full flex items-center justify-between gap-10  text-lg text-[0.85rem] tracking-wider rounde-lg"
      >
        Brand
        {!brand ? (
          <AiOutlineCaretDown className="h-8 " />
        ) : (
          <AiOutlineCaretUp className="h-8 " />
        )}
      </button>

      {brand && (
        <div className=" flex flex-col items-start  gap-2  mb-3 mt-3">
          {Databrands.map((el, idx) => (
            <>
              <button
                onClick={() => doFunc(el.title)}
                href="#"
                className="cursor-pointer"
              >
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
        onClick={() => setPrice((prev) => !prev)}
        className="border-b-[1px] w-full flex items-center justify-between gap-10 text-[0.85rem]  text-lg tracking-wider rounde-lg"
      >
        Price
        {!price ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
      </button>

      {price && (
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
