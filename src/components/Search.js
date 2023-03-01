import { Modal } from 'flowbite-react';
import { BiSearch } from 'react-icons/bi';

import Card from './Card';
import * as productAPI from '../apis/product-api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Notfound from './Notfound';

const Search = ({ openSearch, setOpenSearch }) => {
  const [products, setProducts] = useState([]);
  const [word, setWord] = useState('');

  const navigate = useNavigate();
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await productAPI.getProduct();
      setProducts(res.data.products);
    };
    fetchProduct();
  }, []);

  // console.log(products);
  const searchProduct = (products) => {
    return products.filter((el) => {
      return (
        el.title.toLowerCase().includes(word.toLowerCase()) ||
        el.title.brand?.toLowerCase().includes(word.toLowerCase())
      );
    });
  };

  console.log(products);

  const show = searchProduct(products);

  return (
    <>
      <Modal
        show={openSearch}
        onScroll={false}
        size="100-vw"
        onClose={() => {
          setOpenSearch(false);
        }}
      >
        <Modal.Header className="flex flex-col items-center justify-center">
          <div className="flex gap-2 justify-Start items-center w-[675px] bg-gray-100  text-xs">
            <i className="text-sm text-gray-500 ml-3 ">
              <BiSearch />
            </i>
            <input
              className="outline-none bg-gray-100 border-none  w-full"
              type="text"
              placeholder="Search for product by brands, model or try # to discover more...."
              value={word}
              onChange={(e) => setWord(e.target.value)}
            />
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="flex w-[100%]">
            {/* Box left menuDropwdown */}
            {/* ----------------------------------------- */}
            {/* Box right */}
            <div className=" w-[100%] ml-5">
              {/* box right top  content*/}
              {/* <NavbarShop /> */}

              {/* ----------------------------------------- */}

              {/* box right bottom crad */}
              <div>
                <div className="flex flex-wrap  w-[100%]">
                  {show.length === 0 ? (
                    <Notfound />
                  ) : (
                    show.map((item) => (
                      <Card
                        onClick={() => {
                          navigate(`/product/detail/${item.id}`);
                          setOpenSearch(false);
                        }}
                        key={item.id}
                        image={item.ProductImage}
                        productname={item.title}
                        brand={item.Brand.title}
                        title={item.Category?.typeProduct}
                        // price={item.price}
                      />
                    ))
                  )}
                </div>
              </div>
            </div>
            {/* ----------------------------------------- */}
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default Search;
