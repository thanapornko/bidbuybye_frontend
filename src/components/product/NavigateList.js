import useProduct from '../../hooks/useProduct';

export default function NavigateList() {
  const { productDetail } = useProduct();
  return (
    <div className="flex ">
      <div className="flex items-end p-10">
        <div className="text-gray-400 mr-2">Home</div>
        <i className="fa-solid mr-2 fa-greater-than text-sm text-gray-400 " />
        <div className="text-gray-400 mr-2">
          {' '}
          {productDetail?.products.Category.typeProduct}
        </div>
        <i className="fa-solid mr-2 fa-greater-than text-sm text-gray-400 " />
        <div className="text-gray-400 mr-2">
          {productDetail?.products.Brand.title}
        </div>
        <i className="fa-solid mr-2 fa-greater-than text-sm text-gray-400 " />
        <div className="text-gray-400 ml-2">
          {productDetail?.products.title}
        </div>
      </div>
    </div>
  );
}
