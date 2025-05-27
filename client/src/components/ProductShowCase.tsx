import { useState } from "react";
import videoSrc from '../assets/hero1.mp4';

const ProductShowcase = () => {
  const [selectedSize, setSelectedSize] = useState("");

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const thumbnails = [
    "/vermillion1.jpg",
    "/vermillon3.jpg",
    "/vermillion2.jpg"
  ];

  return (
    <section className="min-h-screen text-white md:px-3 sm:px-0">
      <h1 className="text-2xl md:text-3xl font-light mb-12 ml-1 md:ml-3">
        Silhouette No. 1 – Vermilion
      </h1>

      <div className="flex flex-col md:flex-row  md:gap-0">
        {/* Video Section */}
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full md:w-[703px] h-[300px] sm:h-[370px] md:h-[800px] object-cover"
        />
        {/* Content Section */}
        <div className="bg-white text-black p-4 sm:p-6 shadow-lg w-full md:w-[703px] h-auto md:h-[800px] flex flex-col justify-between">
          <div>
          <p
  className="text-[15px] mb-6 sm:mb-8 hidden md:block"
  style={{ fontFamily: 'Neue Montreal, sans-serif' }}
>
  A tailored composition in motion. Cut from structured wool with a sculpted shoulder and softened hem, this piece captures presence without force. Worn here in the stillness of a city in motion.
</p>


            {/* Thumbnails */}
            <div className="flex gap-5 md:gap-3 overflow-x-auto mb-5 md:mb-20 md:mt-8 sm:mt-[5px]">
  {thumbnails.map((src, idx) => (
    <img
      key={idx}
      src={src}
      alt={`Thumbnail ${idx + 1}`}
      className=" w-[100px] h-[110px] md:w-[207px] md:h-[200px] flex-shrink-0 object-cover border border-gray-200"
    />
  ))}
</div>

            <hr className="h-[2px] text-gray-200 md:mt-6 mt-1" />
            {/* Price */}
            <p className=" text-[30px] md:text-2xl font-semibold mb-6 mt-8"
             style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
              ₹ 7,999{" "}
              <span className="text-gray-500 text-[17px] md:text-sm font-normal">
                MRP incl. of all taxes
              </span>
            </p>

            {/* Size Picker */}
            <label className="block text-sm font-medium mb-6">
              Please select a size{" "}
              <span className="underline md:ml-2 ml-[130px] text-gray-500 cursor-pointer">
                Size chart
              </span>
            </label>
            <div className="flex gap-3 overflow-x-auto flex-nowrap mb-6">

              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-2 py-1 border w-[60px] sm:w-[82px] h-[40px] sm:h-[49px] rounded text-sm ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "bg-gray-400 text-gray-700 hover:border-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <hr className="h-[2px] text-gray-300 mt-8" />
          </div>

          {/* Buttons */}
          <div className="flex flex-col-reverse sm:flex-row sm:space-x-4 gap-4 sm:mb-8 mt-6">

            <button className="border border-black px-6 w-full sm:w-[196px] h-[50px] rounded-[9px] text-sm hover:bg-black hover:text-white transition">
              Add to Cart
            </button>
            <button className="bg-black text-white px-6 py-2 md:py-5 w-full sm:w-[428px] rounded-[9px] text-sm hover:bg-gray-800 transition">
              Buy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductShowcase;
