import { ExternalLink } from 'lucide-react';

const Philosophy = () => (
  <section className="px-4 sm:px-6 md:px-[37px] py-12 sm:py-16 text-white">
    <p
      className="w-full max-w-[800px] text-[18px]  md:text-[45px] font-normal leading-snug sm:leading-[42px] md:leading-[48px] tracking-[-0.02em]"
      style={{ fontFamily: 'Neue Montreal, sans-serif' }}
    >
      Rooted in a philosophy of quiet luxury, our <br className="hidden sm:block" />
      garments are designed to speak softly in <br className="hidden sm:block" />
      cut, in movement, in presence.
    </p>

    <a
      href="#"
      className="text-xs sm:text-sm mt-6 inline-flex items-center gap-1 underline"
      style={{ fontFamily: 'Helvetica Neue, sans-serif' }}
    >
      Learn more about Eclypse <ExternalLink size={12} />
    </a>
  </section>
);

export default Philosophy;
