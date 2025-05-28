import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState,useEffect } from "react";
interface ContactDetails {
  phone: string;
  email: string;
}
const Layout: React.FC = () => {
  const [contact, setContact] = useState<ContactDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch("http://localhost:5000/api/contact"); // your backend API endpoint
        if (!response.ok) throw new Error("Network response not ok");
        const data = await response.json();
        setContact({
          phone: data.phone,
          email: data.email,
        });
        console.log(data.phone,data.email);
      } catch (error) {
        console.error("Failed to fetch contact details:", error);
        setContact({ phone: "N/A", email: "N/A" }); // fallback
      } finally {
        setLoading(false);
      }
    }

    fetchContact();
  }, []);
  const location = useLocation();
  const isCartPage = location.pathname === "/cart";

  return (
    <div className={`min-h-screen flex flex-col ${isCartPage ? "bg-white text-black" : "bg-[#070707] text-white"}`}>
      <Header isCartPage={isCartPage} />
      <main className="flex-grow">
        <Outlet />
      </main>
      {/* Render Footer only if NOT on cart page */}
      {!isCartPage && <Footer phone={contact?.phone} email={contact?.email}/>}
    </div>
  );
};

export default Layout;
