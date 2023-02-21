import Dropdown from '../components/Dropwdown';
import { useLocation } from 'react-router-dom';
import { dateProductCloteJordan } from '../mocks/DataProductCloteJordan';
import Card from '../components/Card';
import NavbarShop from '../components/NanbarShop';

export default function ProductPage() {
  const { pathname } = useLocation();
  return (
    <div className="flex w-[100%] ">
      {/* Box left menuDropwdown */}
      <div className=" w-[25%] ml-2">
        <Dropdown pathname={pathname} />
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
            {dateProductCloteJordan.map((item) => (
              <Card
                image={item.linkImg}
                productname={item.prorductNmae}
                tital={item.tital}
                prict={item.price}
              />
            ))}
          </div>
        </div>
      </div>
      {/* ----------------------------------------- */}
    </div>
  );
}
