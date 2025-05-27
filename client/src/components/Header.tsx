import logo from '../assets/logo_circle.png'; // Replace with your actual logo path

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-3 bg-black text-white text-sm w-full flex-wrap">
      {/* Logo */}
      <div className="flex items-center ml-2">
        <img src={logo} alt="Eclypse Logo" className="w-[40px] h-[38px]" />
      </div>

      {/* Navigation */}
      <nav className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm mr-2 flex-wrap">
        <a href="#" className="hover:underline whitespace-nowrap">About Us</a>
        <a href="#" className="hover:underline whitespace-nowrap">Waitlist</a>
        <a href="#" className="hover:underline whitespace-nowrap">Cart</a>
        <button className="bg-white text-black px-3 py-1 text-xs sm:text-sm rounded-[6px] shadow">
          Buy
        </button>
      </nav>
    </header>
  );
};

export default Header;
