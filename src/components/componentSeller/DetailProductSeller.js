import { HiXMark } from 'react-icons/hi2';
import { HiChevronLeft } from 'react-icons/hi2';
import DetailEquipment from './DetailEquipment';
import DetailSize from './DetailSize';

export default function DetailProductSeller({ onClickBack }) {
  return (
    <div>
      <div className="flex items-center justify-center">
        <HiChevronLeft className="flex text-[20px]" onClick={onClickBack} />
        <div className="flex justify-center mx-auto">
          <div className="text-[24px] p-5">Listing Information</div>
        </div>
      </div>
      <hr className="h-px bg-gray-200" />

      <div className="flex flex-col">
        <div className="p-4 text-[18px]">Product detail</div>
        <DetailSize />
        <DetailEquipment />
      </div>
    </div>
  );
}
