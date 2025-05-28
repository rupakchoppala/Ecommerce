import heroVideo from '../assets/hero1.mp4'; // Confirm this file exists in /src/assets

const Hero = () => {
  return (
    <section className="w-full mt-10">
      {/* Top black bar */}
      <div className="text-white flex justify-between items-end px-4 sm:px-6 pt-4 pb-2">
        <h1 className="text-[36px] sm:text-[30px] md:text-[70px] font-semibold leading-[44px] sm:leading-[60px] md:leading-[95px]">
          Eclypse
          <sup className="text-[16px] sm:text-[20px] md:text-[30px] align-super ml-1">®</sup>
        </h1>
        <span className="text-xs sm:text-sm mb-2 sm:mb-[1px]">© 2025</span>
      </div>

      {/* Video Section */}
      <div className="relative w-full px-4 sm:px-[5px] md:py-3 sm:py-[1px]">
        <video
          src={heroVideo}
          autoPlay
          loop
          playsInline
          className="w-full h-[220px] sm:h-[350px] md:h-[530px] object-cover md:rounded-md sm:rounded-[2px]"
        />
        <p className="absolute bottom-6 sm:bottom-8 md:bottom-10 right-4 sm:right-10 md:right-16 text-white text-[16px] sm:text-[14px] md:text-[30px]">
          A silhouette worth remembering
        </p>
      </div>
    </section>
  );
};

export default Hero;
