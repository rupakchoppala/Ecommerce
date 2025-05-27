import videoSrc from '../assets/galleryVideo.mp4';
import img1 from '../assets/gallery1.png';
import img2 from '../assets/gallery2.png';
import img3 from '../assets/gallery3.png';
import img5 from '../assets/logo_circle.png';

const Gallery = () => (
  <section className="px-3 py-10 md:space-y-6 space-y-3">

    {/* First row: video + image2 on large screens, only video on small screens */}
    <div className="grid gap-5 md:h-[489px] sm:h-[223px] grid-cols-1 lg:grid-cols-[2fr_1fr]">
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        className="s:w-[430px] s:h-[223px] object-cover  rounded-[2px] md:rounded-[5px] md:w-full md:h-full"
      />
      
      {/* Show image2 only on large screens here */}
      <img
        src={img2}
        alt="Gallery 2"
        className="hidden lg:block w-full h-full object-cover rounded-[5px]"
      />
    </div>

    {/* Second row: show image2, image1, image3 (no logo) on small screens;
        on large screens show image1, image3, logo */}
    <div className="grid gap-2 md:h-[489px]  sm:h-[125px]
                    grid-cols-3 sm:grid-cols-3 lg:grid-cols-3">

      {/* On small screens: image2 shows here instead of first row */}
      <img
        src={img2}
        alt="Gallery 2"
        className="block lg:hidden w-full h-[100px] rounded-[5px]"
      />

      <img
        src={img1}
        alt="Gallery 1"
        className="md:w-full md:h-[410px] sm:w-[125px] sm:h-[139px] object-cover rounded-[5px]"
      />
      
      <img
        src={img3}
        alt="Gallery 3"
        className="md:w-full md:h-[410px] sm:w-[125px] sm:h-[139px] object-cover rounded-[5px]"
      />

      {/* Logo: only on large screens */}
      <img
        src={img5}
        alt="Logo"
        className="hidden lg:block w-full h-[410px] object-cover rounded-[5px]"
      />
    </div>
  </section>
);

export default Gallery;
