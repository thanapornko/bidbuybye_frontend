import { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';

export default function Dropwdiwn() {
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);
  const [price, setPrice] = useState(false);
  return (
    <div className="rekative flex flex-col items-center w-[340px] rounde-lg">
      {/* Category */}
      <button
        onClick={() => setCategory((prev) => !prev)}
        className="p-4 w-full flex items-center gap-10 text-lg tracking-wider rounde-lg"
      >
        Category
        {!category ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
      </button>

      {category && (
        <div className="w-[300px] flex flex-col items-start  gap-2 absulute">
          <a href="#" className="cursor-pointer">
            <p>Shopes</p>
          </a>
          <a href="#" className="cursor-pointer">
            <p>Apparel</p>
          </a>
        </div>
      )}
      {/* ----------------------------------------------------------------------- */}
      {/* Brand */}
      <button
        onClick={() => setBrand((prev) => !prev)}
        className="p-4 w-full flex items-center gap-10  text-lg tracking-wider rounde-lg"
      >
        Brand
        {!brand ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
      </button>

      {brand && (
        <div className="w-[300px] flex flex-col items-start  gap-2 absulute">
          <a href="#" className="cursor-pointer">
            <p>Nike</p>
          </a>
          <a href="#" className="cursor-pointer">
            <p>Adidas</p>
          </a>
          <a href="#" className="cursor-pointer">
            <p>Jordan</p>
          </a>
          <a href="#" className="cursor-pointer">
            <p>New Balance</p>
          </a>
        </div>
      )}
      {/* ----------------------------------------------------------------------- */}
      {/* Price */}
      <button
        onClick={() => setPrice((prev) => !prev)}
        className="p-4 w-full flex items-center gap-10  text-lg tracking-wider rounde-lg"
      >
        Price
        {!price ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
      </button>

      {price && (
        <div className="w-[300px] flex flex-col items-start  gap-2 absulute">
          <a href="#" className="cursor-pointer">
            <p>Nike</p>
          </a>
          <a href="#" className="cursor-pointer">
            <p>Adidas</p>
          </a>
          <a href="#" className="cursor-pointer">
            <p>Jordan</p>
          </a>
          <a href="#" className="cursor-pointer">
            <p>New Balance</p>
          </a>
        </div>
      )}
      {/* ----------------------------------------------------------------------- */}
    </div>
  );
}
