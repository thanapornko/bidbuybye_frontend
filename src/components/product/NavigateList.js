import useProduct from '../../hooks/useProduct';
import { Link } from 'react-router-dom';

export default function NavigateList() {
  const { productDetail } = useProduct();
  return (
    <div className="flex ">
      <div className="flex items-end p-10">
        <Link to={'/'}>
          <div className="text-gray-400 mr-2">Home</div>
        </Link>
        <i className="fa-solid mr-2 fa-greater-than text-sm text-gray-400 " />
        <Link to={'/product'}>
          <div className="text-gray-400 mr-2">
            {productDetail?.products.Category.typeProduct}
          </div>
        </Link>

        <i className="fa-solid mr-2 fa-greater-than text-sm text-gray-400 " />
        <div className="text-gray-400 ml-2">
          {productDetail?.products.title}
        </div>
      </div>
    </div>
  );
}
