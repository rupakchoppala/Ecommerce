import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Gallery from './components/Gallery';
import ProductShowcase from './components/ProductShowCase';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import InfoAccordion from './components/Accordion';
function App() {
  return (
    <main className="bg-[#070707] text-white">
      <Header />
      <Hero />
      <Philosophy />
      <Gallery />
      <ProductShowcase />
      {/* Add Accordion component here */}
      <InfoAccordion/>
      <Testimonial />
      <Footer />
    </main>
  );
}
export default App;
