import { HiXMark } from 'react-icons/hi2';
import { HiChevronLeft } from 'react-icons/hi2';
import DetailEquipment from './DetailEquipment';
import DetailSize from './DetailSize';

export default function DetailProductSeller() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <HiChevronLeft className="text-[20px]" />
        <div className="flex justify-center text-[24px] p-5">
          Listing Information
        </div>
        <HiXMark className="text-[20px]" />
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