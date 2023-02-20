import { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';

export default function Dropwdiwn() {
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);
  const [price, setPrice] = useState(false);
  return (
    <div className="relative flex flex-col rounde-lg">
      {/* Category */}
      <button
        onClick={() => setCategory((prev) => !prev)}
        className="border-b-[1px]  w-full flex items-center gap-10 text-lg text-[0.85rem] tracking-wider rounde-lg"
      >
        Category
        {!category ? (
          <AiOutlineCaretDown className="h-8 ml-2" />
        ) : (
          <AiOutlineCaretUp className="h-8 ml-2" />
        )}
      </button>

      {category && (
        <div className="flex flex-col items-start  gap-2 absulute">
          <a href="#" className="cursor-pointer">
            <p className="text-[14px]">Shopes</p>
          </a>
          <a href="#" className="cursor-pointer">
            <p className="text-[14px]">Apparel</p>
          </a>
        </div>
      )}
      {/* ----------------------------------------------------------------------- */}
      {/* Brand */}
      <button
        onClick={() => setBrand((prev) => !prev)}
        className="border-b-[1px] w-full flex items-center gap-10  text-lg text-[0.85rem] tracking-wider rounde-lg"
      >
        Brand
        {!brand ? (
          <AiOutlineCaretDown className="h-8 ml-7" />
        ) : (
          <AiOutlineCaretUp className="h-8 ml-7" />
        )}
      </button>

      {brand && (
        <div className=" flex flex-col items-start  gap-2 absulute">
          <a href="#" className="cursor-pointer">
            <p className="text-[14px]">Nike</p>
          </a>
          <a href="#" className="cursor-pointer">
            <p className="text-[14px]">Adidas</p>
          </a>
          <a href="#" className="cursor-pointer">
            <p className="text-[14px]">Jordan</p>
          </a>
          <a href="#" className="cursor-pointer">
            <p className="text-[14px]">New Balance</p>
          </a>
        </div>
      )}
      {/* ----------------------------------------------------------------------- */}
      {/* Price */}
      <button
        onClick={() => setPrice((prev) => !prev)}
        className="border-b-[1px] w-full flex items-center gap-10 text-[0.85rem]  text-lg tracking-wider rounde-lg"
      >
        Price
        {!price ? (
          <AiOutlineCaretDown className="h-8 ml-8" />
        ) : (
          <AiOutlineCaretUp className="h-8 ml-8" />
        )}
      </button>

      {price && (
        <div className=" flex flex-col items-start  gap-2 absulute">
          <a href="#" className="cursor-pointer">
            <p className="text-[14px]">Nike</p>
          </a>
          <a href="#" className="cursor-pointer">
            <p className="text-[14px]">Adidas</p>
          </a>
          <a href="#" className="cursor-pointer">
            <p className="text-[14px]">Jordan</p>
          </a>
          <a href="#" className="cursor-pointer">
            <p className="text-[14px]">New Balance</p>
          </a>
        </div>
      )}
      {/* ----------------------------------------------------------------------- */}
    </div>
  );
}
