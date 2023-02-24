import Dropdown from '../components/Dropwdown';
import { useLocation } from 'react-router-dom';
import Card from '../components/Card';
import NavbarShop from '../components/NanbarShop';
import { useEffect, useState } from 'react';
import * as productAPI from '../apis/product-api';

export default function ProductPage() {
  const { pathname } = useLocation();
  const [searchBrand, setSearchBrand] = useState();
  const [categoryAllBrand, setCategoryAllBrand] = useState();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await productAPI.getProduct();
      setProducts(res.data.products);
    };
    fetchProduct();
  }, []);

  return (
    <div className="flex w-[100%] ">
      {/* Box left menuDropwdown */}
      <div className=" w-[25%] ml-2">
        <Dropdown
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
            {products
              .filter(
                (item) =>
                  item.brand === searchBrand ||
                  item.category === categoryAllBrand
              )
              .map((item) => (
                <Card
                  key={item.id}
                  image={item.ProductImage}
                  productname={item.title}
                  brand={item.Brand.title}
                  title={item.Category?.typeProduct}
                  // price={item.price}
                />
              ))}
          </div>
        </div>
      </div>
      {/* ----------------------------------------- */}
    </div>
  );
}
