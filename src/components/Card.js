export default function Card({
  image,
  productname,
  title,
  brand,
  onClick,
  minPriceBid
}) {
  return (
    <>
      <div className="mt-3 p-2 cursor-pointer" onClick={onClick}>
        {/* // container card All */}
        {/* // Card  */}
        <div className="flex flex-col cursor-pointer  transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100 ">
          {/* Box-top */}
          <div className="bg-[white] border border-gray-200">
            <img src={image} alt="#" className="w-[200px] h-[200px]" />
          </div>
          {/* Box-bottom */}
          <div className="flex flex-col mt-3">
            <p className="text-[14px] break-normal max-w-[100px] line-clamp-3">
              {productname}
            </p>
            <div className="mt-3">
              <p className="text-[12px] font-bold">{title}</p>
              <p className="text-[12px] font-bold">{brand}</p>
              <p className="text-[10px] ">STARTING FROM</p>
              {minPriceBid === null ? (
                <p className="text-[12px]">product has no minimum price.</p>
              ) : (
                <p className="text-[16px]">{`price ${minPriceBid} ฿`}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
