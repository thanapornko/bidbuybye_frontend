import ButtonProduct from '../componentProduct/ButtonProduct';

export default function ProductBox() {
  return (
    <div>
      <div className="flex justify-between px-10 ">
        <div>฿ 5,500</div>
        <ButtonProduct className={'bg-gray-900 w-[100px] hover:bg-gray-500'}>
          Buy
        </ButtonProduct>
      </div>
      <div className="px-10 text-gray-400">Original box (no defect)</div>
    </div>
  );
}
