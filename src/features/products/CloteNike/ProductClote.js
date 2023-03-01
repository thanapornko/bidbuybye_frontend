import React, { useEffect, useState } from 'react';
import { FaArrowRight, FaDAndD } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductClote.css';
import Card from '../../../components/Card';
import { Link, useNavigate } from 'react-router-dom';
import * as brandAPI from '../../../apis/brand-api';
import { Navigate } from 'react-router-dom';

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

  const navigete = useNavigate();

  const [brands, setBrands] = useState([]);
  useEffect(() => {
    const fetchBrand = async () => {
      const res = await brandAPI.getBrand();
      setBrands(res.data.brand);
      console.log(res.data.brand, 'res.data.brand');
    };
    fetchBrand();
  }, []);

  return (
    // contaier All
    <div className="mt-10">
      {/* Content Link Clotes */}
      <div className="flex flex-col justify-center items-center gap-20 cursor-pointer">
        {brands.map((el) => (
          <div>
            <div className="flex gap-[10px] items-center justify-center">
              <Link to="/product" state={{ id: el.id }}>
                <p className="text-[20px] font-semibold">{el.title}</p>
              </Link>
              <i>
                <FaArrowRight />
              </i>
            </div>
            <div className="grid grid-cols-1">
              <Slider {...settings}>
                {el.Products.map((item) => (
                  <Card
                    onClick={() => {
                      navigete(`/product/detail/${item.id}`);
                    }}
                    key={item.id}
                    image={item.ProductImage}
                    productname={item.title}
                    // brand={el.title}
                    price={item.price}
                  />
                ))}
              </Slider>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
