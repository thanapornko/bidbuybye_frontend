import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import ProductCloteNike from '../features/products/CloteNike/ProductCloteNike';
import NewBalance from '../assets/5a1ed88b4ac6b00ff574e2fa.png';
import ProductCloteJordan from '../features/products/CloteJordan/ProductCloteJordan';

export default function HomePage() {
  const slides = [
    {
      url: 'https://sasom.co.th/_next/image?url=https%3A%2F%2Fd2cva83hdk3bwc.cloudfront.net%2FHero_Banner_1_en.webp&w=1920&q=75'
    },
    {
      url: 'https://sasom.co.th/_next/image?url=https%3A%2F%2Fd2cva83hdk3bwc.cloudfront.net%2FHero_Banner_2_en.webp&w=1920&q=75'
    },
    {
      url: 'https://sasom.co.th/_next/image?url=https%3A%2F%2Fd2cva83hdk3bwc.cloudfront.net%2FHero_Banner_3_en.webp&w=1920&q=75'
    },
    {
      url: 'https://sasom.co.th/_next/image?url=https%3A%2F%2Fd2cva83hdk3bwc.cloudfront.net%2FHero_Banner_4_en.webp&w=1920&q=75'
    }
  ];

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
      <div className="max-w-[100%] h-[780px] w-full h-full  relative group">
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
          <div className="flex flex-col justify-center items-center cursor-pointer gap-2">
            <img
              alt="img"
              src="https://img.icons8.com/ios-filled/256/nike.png"
              className="w-[56px] bg-gray-200 p-2 rounded-full  text-black"
            ></img>
            <p className="text-xs">Nike</p>
          </div>

          <div className="flex flex-col justify-center items-center cursor-pointer gap-2">
            <img
              alt="img"
              src="https://img.icons8.com/ios/256/adidas-trefoil.png"
              className="w-[56px] bg-gray-200 p-2 rounded-full  text-black"
            ></img>
            <p className="text-xs">Adidas</p>
          </div>

          <div className="flex flex-col justify-center items-center cursor-pointer gap-2">
            <img
              alt="img"
              src="https://img.icons8.com/ios/256/air-jordan.png"
              className="w-[56px] bg-gray-200 p-2 rounded-full  text-black"
            ></img>
            <p className="text-xs">Jodan</p>
          </div>

          <div className="flex flex-col justify-center items-center cursor-pointer gap-2">
            <img
              alt="img"
              src={NewBalance}
              className="w-[56px] bg-gray-200 p-2 rounded-full  text-black"
            ></img>
            <p className="text-xs">New Balance</p>
          </div>
        </div>
        {/* --------------------------------------------------------- */}

        {/* Container shoe Brand*/}
        <ProductCloteNike />
        <ProductCloteJordan />
        {/* --------------------------------------------------------- */}

        {/* Container clothes */}

        {/* --------------------------------------------------------- */}
      </div>
    </div>
  );
}
