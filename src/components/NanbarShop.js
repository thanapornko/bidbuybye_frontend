import React from 'react';

export default function NavbarShop({
  setSelectedCategory,
  setSelectedBrand,
  setSelectedBid
}) {
  const handleClear = () => {
    setSelectedCategory(0);
    setSelectedBrand(0);
    setSelectedBid(0);
  };

  return (
    <div className="flex justify-start  items-center">
      <div className="flex flex-col p-2">
        <a className="hover:underline  cursor-pointer">
          <p className="text-[14px] text-[#969494] " onClick={handleClear}>
            Clear all
          </p>
        </a>
      </div>
    </div>
  );
}
