import Dropdown from '../components/Dropwdown';
import Card from '../components/Card';
import NavbarShop from '../components/NanbarShop';
import { useEffect, useState } from 'react';
import * as productAPI from '../apis/product-api';
import * as getProductMinbit from '../apis/product-api';
import * as getAllBidAPI from '../apis/product-api';
import { useLocation, Navigate, useNavigate } from 'react-router-dom';

export default function ProductPage() {
  const [searchBrand, setSearchBrand] = useState();
  const [categoryAllBrand, setCategoryAllBrand] = useState();
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState(0);
  const [products, setProducts] = useState([]);
  const [minBid, setMidBid] = useState([]);
  const [allBid, setAllBid] = useState([]);
  const [selectedBid, setSelectedBid] = useState(0);

  const navigete = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setSelectedBrand(location.state.id);
    }
  }, [location.state]);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await productAPI.getProduct();
      const minbid = await getProductMinbit.getProductMinbit();
      const bidsellerbuyer = await getAllBidAPI.getAllBid();
      // console.log(bidsellerbuyer, 'ssssssssssssssss');
      setProducts(res.data.products);
      setMidBid(minbid.data.output);
      setAllBid(bidsellerbuyer.data);
      // console.log(bidsellerbuyer.data, 'bidsellerbuyer.data');
    };
    fetchProduct();
  }, []);

  // -------------------------------------------------

  let filter = [];
  if (selectedCategory === 0) {
    filter = products.filter((el) => true);
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
  if (selectedBid === 'SELLER') {
    filter = allBid.filter((el) => {
      return el.ProductSizes[0]?.Bids[0]?.type === 'SELLER';
    });
  }
  if (selectedBid === 'BUYER') {
    filter = allBid.filter((el) => {
      return el.ProductSizes[0]?.Bids[0]?.type === 'BUYER';
    });
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
          setSelectedBid={setSelectedBid}
        />
      </div>
      {/* ----------------------------------------- */}
      {/* Box right */}
      <div className=" w-[100%] ml-5">
        {/* box right top  content*/}
        <NavbarShop
          setSelectedCategory={setSelectedCategory}
          setSelectedBrand={setSelectedBrand}
          setSelectedBid={setSelectedBid}
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
              .map((item) => {
                let minBidIndex = minBid.findIndex(
                  (el) => el.productId === item.id
                );
                return (
                  <Card
                    onClick={() => {
                      navigete(`/product/detail/${item.id}`);
                    }}
                    key={item.id}
                    image={item.ProductImage}
                    productname={item.title}
                    title={item.Category?.typeProduct}
                    minPriceBid={
                      minBidIndex !== -1 ? minBid[minBidIndex].minbid : null
                    }
                  />
                );
              })}
          </div>
        </div>
      </div>
      {/* ----------------------------------------- */}
    </div>
  );
}
