import React from "react";
import logo from '../assets/logo_circle.png';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
interface HeaderProps {
  isCartPage: boolean;
}

const Header: React.FC<HeaderProps> = ({ isCartPage }) => {
  const navigate=useNavigate();
  return (
    <header className={`flex justify-between items-center px-4 py-3 text-sm w-full flex-wrap ${
      isCartPage ? "bg-white text-black" : "bg-black text-white"
    }`}>
      <div className="flex items-center ml-2 md:ml-4">
        <img src={logo} alt="Eclypse Logo" className="w-[40px] h-[38px]" />
      </div>

      <nav className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm mr-2 flex-wrap">
        <Link to="/about" className={`hover:underline whitespace-nowrap ${isCartPage ? "text-black" : "text-white"}`}>
          About Us
        </Link>
        <Link to="/waitlist" className={`hover:underline whitespace-nowrap ${isCartPage ? "text-black" : "text-white"}`}>
          Waitlist
        </Link>
        <Link to="/cart" className={`hover:underline whitespace-nowrap ${isCartPage ? "text-black" : "text-white"}`}>
          Cart
        </Link>
        <button
          className={`px-3 py-1 text-xs sm:text-sm rounded-[6px] shadow ${
            isCartPage ? "bg-black text-white hidden" : "bg-white text-black"
          }`}
       onClick={()=>navigate('/cart')} >
          Buy
        </button>
      </nav>
    </header>
  );
};

export default Header;
