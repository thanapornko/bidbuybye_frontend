import { useEffect, useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';

export default function Dropdown({ pathname }) {
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);
  const [price, setPrice] = useState(false);

  const DataCategory = [
    {
      id: 1,
      title: 'Shopes'
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
      id: 3,
      title: 'Jordan'
    },
    {
      id: 4,
      title: 'New Balance'
    }
  ];

  const [brandIndex, setBrandIndex] = useState();

  useEffect(() => {
    {
      Databrands.map((el, index) => {
        if (pathname.includes(el.title.toLowerCase())) {
          setBrandIndex(index);
        }
      });
    }
  }, []);

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
        <div className="flex flex-col items-start  gap-2 absulute mb-3 mt-3">
          <>
            {DataCategory.map((el, idx) => (
              <button onClick={navigator} href="#" className="cursor-pointer">
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
        <div className=" flex flex-col items-start  gap-2 absulute mb-3 mt-3">
          {Databrands.map((el, idx) => (
            <>
              <button onClick={navigator} href="#" className="cursor-pointer">
                <p
                  className={`text-[14px] text-${
                    brandIndex === idx ? '[#FF3722]' : '[black]'
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
        <div className=" flex flex-col items-start  gap-2 absulute mb-3 mt-3">
          <a href="#" className="cursor-pointer">
            <p className="text-[14px]">4 4 4</p>
          </a>
        </div>
      )}
      {/* ----------------------------------------------------------------------- */}
    </div>
  );
}
