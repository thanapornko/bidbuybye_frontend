import Dropdown from '../components/Dropwdown';
import { useLocation } from 'react-router-dom';
import { DataProductBrand } from '../mocks/DataProductBrand';
import Card from '../components/Card';
import NavbarShop from '../components/NanbarShop';
import { useState } from 'react';

export default function ProductPage() {
  const { pathname } = useLocation();
  const [searchBrand, setSearchBrand] = useState();
  const [categoryAllBrand, setCategoryAllBrand] = useState();

  return (
    <div className="flex w-[100%] ">
      {/* Box left menuDropwdown */}
      <div className=" w-[25%] ml-2">
        <Dropdown
          pathname={pathname}
          setSearchBrand={setSearchBrand}
          searchBrand={searchBrand}
          setCategoryAllBrand={setCategoryAllBrand}
        />
      </div>
      {/* ----------------------------------------- */}
      {/* Box right */}
      <div className=" w-[100%] ml-5">
        {/* box right top  content*/}
        <NavbarShop />

        {/* ----------------------------------------- */}

        {/* box right bottom crad */}
        <div>
          <div className="flex flex-wrap  w-[100%] ">
            {DataProductBrand.filter(
              (item) =>
                item.brand === searchBrand || item.category === categoryAllBrand
            ).map((item) => (
              <Card
                image={item.linkImg}
                productname={item.prorductNmae}
                brand={item.brand}
                category={item.category}
                title={item.title}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
      {/* ----------------------------------------- */}
    </div>
  );
}
