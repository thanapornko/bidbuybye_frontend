import useProduct from '../../hooks/useProduct';
import ButtonProduct from '../product/ButtonProduct';

import { Link } from 'react-router-dom';

export default function ProductBox() {
  const { minPriceBySize } = useProduct();
  return (
    <div>
      <div className="flex justify-between px-10">
        <div>
          {' '}
          {minPriceBySize ? (
            `฿ ${minPriceBySize}`
          ) : (
            <p className="text-red-700">No one sell for now.</p>
          )}
        </div>
        <Link to={`/checkout`}>
          <ButtonProduct className={'bg-gray-900 w-[100px] hover:bg-gray-500'}>
            Buy
          </ButtonProduct>
        </Link>
      </div>
      {/* <div className="px-10 text-gray-400">Original box (no defect)</div> */}
    </div>
  );
}
