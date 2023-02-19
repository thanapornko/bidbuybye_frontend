import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductCloteNike.css';
import { dateProductCloteNike } from './DataProductCloteNike';

export default function ProductCloteNike() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    // contaier All
    <div className="mt-10">
      {/* Content Link Clotes */}
      <div className="flex justify-center items-center gap-1 cursor-pointer">
        <p className="text-[20px] font-semibold">Nike</p>
        <i>
          <FaArrowRight />
        </i>
      </div>

      <Slider {...settings}>
        {dateProductCloteNike.map((item) => (
          // container card All
          <div className="mt-3 p-2">
            {/* // Card kuy */}
            <div className="flex cursor-pointer">
              <div className="flex flex-col border-2 w-[300px] h-[300px]">
                <img src={item.linkImg} alt="#" className="" />
                <div className="flex flex-col mt-3">
                  <p className="text-[14px]">{item.prorductNmae}</p>
                  <div className="mt-3">
                    <p className="text-[10px]">{item.tital}</p>
                    <p className="text-[16px]">{item.price}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
