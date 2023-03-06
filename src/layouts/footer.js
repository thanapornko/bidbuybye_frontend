import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <div className="bg-zinc-200">
      <div className="flex gap-1 justify-center pt-5 space-x-2">
        <div className="w-6 h-6 flex justify-center items-center">
          <a href="/" className="fa-brands fa-facebook text-sky-600 text-xl" />
        </div>
        <div className=" w-6 h-6 flex justify-center items-center">
          <a href="/" className="fa-brands fa-twitter text-sky-300 text-xl" />
        </div>
        <div className="bg-pink-600 w-6 h-6 flex justify-center items-center rounded-lg">
          <a href="/" className="fa-brands fa-instagram text-white" />
        </div>
        <div className="w-6 h-6 flex justify-center items-center">
          <a href="/" className="fa-brands fa-youtube text-red-600 text-xl" />
        </div>
        <div className="w-6 h-6 flex justify-center items-center">
          <a href="/" className="fa-brands fa-line text-green-500 text-xl" />
        </div>
      </div>
      <div className="flex gap-4 justify-center pt-5">
        <p className="text-[13px]">Nike</p>
        <p className="text-[13px]">Adidas</p>
        <p className="text-[13px]">Jordan</p>
        <p className="text-[13px]">New Balance</p>
      </div>
      <div className="flex justify-center pt-5">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex justify-center py-5">
        <p>&#169; 2023 BidBuyBye Co., Ltd.</p>
      </div>
    </div>
  );
};

export default Footer;
