export default function Card({ image, productname, tital, prict }) {
  return (
    <>
      <div className=" mt-3 p-2">
        {/* // container card All */}
        {/* // Card  */}
        <div className="flex flex-col cursor-pointer">
          {/* Box-top */}
          <div className="border-2 bg-gray-200">
            <img src={image} alt="#" className="w-[200px] h-[200px]" />
          </div>
          {/* Box-bottom */}
          <div className="flex flex-col mt-3">
            <p className="text-[14px] break-normal max-w-[100px] line-clamp-3">
              {productname.substring(12)}
            </p>
            <div className="mt-3">
              <p className="text-[10px]">{tital}</p>
              <p className="text-[16px]">{prict}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
