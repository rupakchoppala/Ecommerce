import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout";
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Gallery from './components/Gallery';
import ProductShowcase from './components/ProductShowCase';
import Testimonial from './components/Testimonial';
import InfoAccordion from './components/Accordion';
import ShippingCheckout from "./components/CheckOut";
import {Toaster} from 'react-hot-toast'
import AboutUs from "./pages/AboutUs";
import Waitlist from "./pages/waitlist";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
const HomePage: React.FC = () => (
  <>
    <Hero />
    <Philosophy />
    <Gallery />
    <ProductShowcase />
    <InfoAccordion />
    <Testimonial />
  </>
);

function App() {
  return (
    <BrowserRouter>
   <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/cart" element={<ShippingCheckout />} />
          <Route path='/about' element={<AboutUs/>}/>
          <Route path='/waitlist' element={<Waitlist/>}/>
        </Route>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
