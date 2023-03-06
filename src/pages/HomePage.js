import React, { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import ProductClote from '../features/products/CloteNike/ProductClote';
import { Link } from 'react-router-dom';
import * as brandAPI from '../apis/brand-api';
import { slides } from '../mocks/DataImageSlides';

export default function HomePage() {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    const fetchBrand = async () => {
      const res = await brandAPI.getBrand();
      setBrands(res.data.brand);
    };
    fetchBrand();
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Container Image Slide */}
      <div className=" w-full h-full  relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url}) ` }}
          className="w-[100%] h-[500px] bg-center bg-cover duration-500"
        ></div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>

      {/* --------------------------------------------------------- */}
      {/* Container All  */}
      <div className="flex flex-col m-auto  w-[80%]">
        {/* Container icon */}
        <div className="flex justify-center items-center gap-20">
          {brands.map((el) => (
            <Link to="/product" state={{ id: el.id }}>
              <div className="flex flex-col justify-center items-center cursor-pointer gap-2">
                <img
                  alt="img"
                  src="https://img.icons8.com/ios-filled/256/nike.png"
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
