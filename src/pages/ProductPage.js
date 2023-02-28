import Dropdown from '../components/Dropwdown';
import Card from '../components/Card';
import NavbarShop from '../components/NanbarShop';
import { useEffect, useState } from 'react';
import * as productAPI from '../apis/product-api';
import { useLocation } from 'react-router-dom';

export default function ProductPage() {
  const [searchBrand, setSearchBrand] = useState();
  const [categoryAllBrand, setCategoryAllBrand] = useState();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState(0);

  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setSelectedBrand(location.state.id);
    }
  }, [location.state]);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await productAPI.getProduct();
      setProducts(res.data.products);
    };
    fetchProduct();
  }, []);

  // -------------------------------------------------

  let filter = [];

  if (selectedCategory === 0) {
    filter = products.filter(
      (el) => true
      // el.Category.typeProduct === 'Shoes' ||
      // el.Category.typeProduct === 'Apperal'
    );
    filter = filter.filter((el) =>
      selectedBrand ? el.brandId === selectedBrand : true
    );
  } else if (selectedCategory === 'Shoes') {
    filter = products.filter((el) => el.Category.typeProduct === 'Shoes');
    filter = filter.filter((el) =>
      selectedBrand ? el.brandId === selectedBrand : true
    );
  } else if (selectedCategory === 'Apperal') {
    filter = products.filter((el) => el.Category.typeProduct === 'Apperal');
    filter = filter.filter((el) =>
      selectedBrand ? el.brandId === selectedBrand : true
    );
  }
  // -------------------------------------------------

  return (
    <div className="flex w-[100%] ">
      {/* Box left menuDropwdown */}
      <div className=" w-[25%] ml-2">
        <Dropdown
          setSelectedCategory={setSelectedCategory}
          setSelectedBrand={setSelectedBrand}
          selectedCategory={selectedCategory}
          selectedBrand={selectedBrand}
        />
      </div>
      {/* ----------------------------------------- */}
      {/* Box right */}
      <div className=" w-[100%] ml-5">
        {/* box right top  content*/}
        <NavbarShop
          setSelectedCategory={setSelectedCategory}
          setSelectedBrand={setSelectedBrand}
        />

        {/* ----------------------------------------- */}

        {/* box right bottom crad */}
        <div>
          <div className="flex flex-wrap  w-[100%]  ">
            {filter
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
