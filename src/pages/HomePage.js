import React, { useEffect, useState } from 'react';
import ProductClote from '../features/products/CloteNike/ProductClote';
import { Link } from 'react-router-dom';
import * as brandAPI from '../apis/brand-api';
import ImageSlide from '../components/imageSlide';

export default function HomePage() {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    const fetchBrand = async () => {
      const res = await brandAPI.getBrand();
      setBrands(res.data.brand);
    };
    fetchBrand();
  }, []);
  return (
    <div className="flex flex-col gap-8">
      <ImageSlide />

      {/* Container All  */}
      <div className="flex flex-col m-auto  w-[80%]">
        {/* Container icon */}
        <div className="flex justify-center items-center gap-20">
          {brands.map((el) => (
            <Link to="/product" state={{ id: el.id }}>
              <div className="flex flex-col justify-center items-center cursor-pointer gap-2">
                <img
                  alt="img"
                  src={el.brandPicture}
                  className="w-[56px] bg-gray-200 p-2 rounded-full  text-black"
                ></img>
                <p className="text-xs">{el.title}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Container shoe Brand*/}
        <ProductClote />
      </div>
    </div>
  );
}
