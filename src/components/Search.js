import { Modal } from 'flowbite-react';
import { BiSearch } from 'react-icons/bi';

import Card from './Card';
import * as productAPI from '../apis/product-api';
import { useEffect, useState } from 'react';
import NavbarShop from './NanbarShop';

const Search = ({ openSearch, setOpenSearch }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const res = await productAPI.getProduct();
      setProducts(res.data.products);
    };
    fetchProduct();
  }, []);

  // console.log(products);
  return (
    <>
      <Modal
        show={openSearch}
        size="100vw"
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
            />
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="flex w-[100%] ">
            {/* Box left menuDropwdown */}
            {/* ----------------------------------------- */}
            {/* Box right */}
            <div className=" w-[100%] ml-5">
              {/* box right top  content*/}
              <NavbarShop />

              {/* ----------------------------------------- */}

              {/* box right bottom crad */}
              <div>
                <div className="flex flex-wrap  w-[100%] ">
                  {products.map((item) => (
                    <Card
                      key={item.id}
                      // image={item.ProductImage}
                      // productname={item.title}
                      // brand={item.Brand.title}
                      // title={item.Category?.typeProduct}
                      // price={item.price}
                    />
                  ))}
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
