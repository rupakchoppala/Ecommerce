import { FaArrowUp } from "react-icons/fa";
interface FooterProps {
  phone?: string;
  email?: string;
}

const Footer = ({ phone, email }: FooterProps) => (
  
  <footer className="text-white  md:px-20 md:py-10 text-xs relative overflow-x-hidden">
    <div className="flex flex-row justify-between items-start w-full gap-6">

      {/* Left Section: Logo + Nav */}
      <div className="flex flex-col md:gap-4 gap-6  ml-5">
        <h3
          className=" text-[12px] md:text-[32px] font-semibold mb-1 md:mb-8 flex items-center gap-1"
          style={{ fontFamily: "Neue Montreal, sans-serif" }}
        >
          Eclypse
          <span
            className="inline-block"
            style={{
              transform: "rotate(30deg) translateY(-6px)",
              fontSize: "12px",
            }}
          >
            <FaArrowUp />
          </span>
        </h3>

        <div
          className="flex flex-col gap-1 text-[14px] text-white/80"
          style={{ fontFamily: "Neue Montreal, sans-serif" }}
        >
          <div className="flex items-center gap-1">
            <a href="#" className="hover:underline mr-3">
              Home
            </a>
            <span className="mr-3">/</span>
            <a href="#" className="hover:underline mr-3">
              About
            </a>
            <span className="mr-3">/</span>
            <a href="#" className="hover:underline">
              Buy
            </a>
          </div>
          <div className="flex items-center gap-1">
            <a href="#" className="hover:underline mr-3 mb-1">
              Our Customers
            </a>
            <span>/</span>
          </div>
          <a href="#" className="hover:underline">
            Contacts
          </a>
        </div>
      </div>
      {/* Contact Info */}
      <div className="flex flex-col gap-4 mt-3  md:mt-0 text-[11px] text-white/90 md:ml-20 w-full md:w-auto">
        <div className="mt-4 md:mt-12 mb-3">
          <p
            className="uppercase text-white/50 text-[10px] mb-1 tracking-wide"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Contact
          </p>
          <p
            className="text-[20px]"
            style={{ fontFamily: "Neue Montreal, sans-serif" }}
          >
            {phone}
          </p>
        </div>
        <div>
          <p
            className="uppercase text-white/50 text-[10px] mb-2 tracking-wide"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            email
          </p>
          <p className="text-[14px]">{email}</p>
        </div>
      </div>

      {/* Up Arrow */}
      <div className="flex flex-col items-center gap-6 mt-7 md:mt-0 md:ml-auto">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow hover:bg-gray-300 transition"
          aria-label="Scroll to Top"
        >
          <FaArrowUp className="text-xs" />
        </button>
      </div>
    </div>

    {/* Copyright */}
    <p className="absolute  bottom-[130px] md:bottom-[58px]  right-6 md:right-10 text-white/40 text-[10px]">
      © Eclypse 2025
    </p>
  </footer>
);

export default Footer;
