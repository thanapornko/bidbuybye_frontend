import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductCloteJordan.css';

import { dateProductCloteJordan } from './DataProductCloteJordan';
import Card from '../../../../component/card/Card';

export default function ProductCloteJordan() {
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
        <p className="text-[20px] font-semibold">Jordan</p>
        <i>
          <FaArrowRight />
        </i>
      </div>

      <Slider {...settings}>
        {dateProductCloteJordan.map((item) => (
          <Card
            image={item.linkImg}
            productname={item.prorductNmae}
            tital={item.tital}
            prict={item.price}
          />
        ))}
      </Slider>
    </div>
  );
}
