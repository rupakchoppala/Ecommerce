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
          <Route path="cart" element={<ShippingCheckout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
