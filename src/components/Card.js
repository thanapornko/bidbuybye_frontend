export default function Card({
  image,
  productname,
  title,
  price,
  brand,
  category
}) {
  return (
    <>
      <div className=" mt-3 p-2">
        {/* // container card All */}
        {/* // Card  */}
        <div className="flex flex-col cursor-pointer">
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
              <p className="text-[16px]">2000</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
