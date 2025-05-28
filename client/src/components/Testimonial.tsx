import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BsFillCaretLeftFill } from 'react-icons/bs';
import type { Testimonial } from '../types/testimonial';

const TestimonialCarousel: React.FC = () => {
  const [testimonialsData, setTestimonialsData] = useState<Testimonial[]>([]);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:5000/api/testimonials')
      .then(res => setTestimonialsData(res.data))
      .catch(err => console.error('Error fetching testimonials:', err));
  }, []);

  const handleAvatarClick = (index: number) => {
    setCurrentTestimonialIndex(index);
  };

  if (testimonialsData.length === 0) return null;

  const currentTestimonial = testimonialsData[currentTestimonialIndex];
  const reorderedTestimonials = [
    currentTestimonial,
    ...testimonialsData.filter((_, index) => index !== currentTestimonialIndex),
  ];

  return (
    <section className="text-white py-20 px-4 md:px-24 relative min-h-[500px] flex flex-col justify-center overflow-hidden">
      <h2 className="text-[16px] uppercase tracking-widest text-gray-500 mb-12" style={{ fontFamily: 'Roboto, sans-serif' }}>
        Our Customers
      </h2>

      <div className="flex flex-row justify-between items-start w-full gap-[100px] flex-nowrap">
        {/* Text Block */}
        <div className="w-[70%]">
          <div className="text-[18px] md:text-4xl font-light leading-snug mb-8 relative">
            <span className="absolute text-[40px] md:text-[90px] -top-6 left-0 text-white" style={{ fontFamily: 'Coolvetica, sans-serif' }}>“</span>
            <p className="pl-5 md:pl-12" style={{ fontFamily: 'Neue Montreal, sans-serif' }}>
              {currentTestimonial.text}
            </p>
          </div>
          <div className="pl-5 md:pl-12 mt-10" style={{ fontFamily: 'Neue Montreal, sans-serif' }}>
            <p className="text-[14px] md:text-lg font-semibold">{currentTestimonial.name}</p>
            <p className="text-[10px] md:text-sm text-gray-400">{currentTestimonial.location}</p>
          </div>
        </div>

        {/* Avatar Section */}
        <div className="flex flex-col items-start space-y-8 w-[30%] md:ml-[100px]">
          {reorderedTestimonials.map((testimonial, index) => {
            const isSelected = index === 0;
            const originalIndex = testimonialsData.findIndex(t => t.id === testimonial.id);

            return (
              <div
                key={testimonial.id}
                className="flex items-center gap-2 cursor-pointer group"
                onClick={() => handleAvatarClick(originalIndex)}
              >
                {isSelected && (
                  <BsFillCaretLeftFill className="text-white text-[18px] md:text-2xl mr-2 md:mr-4" />
                )}
                <img
                  src={testimonial.avatar}
                  alt={`Avatar of ${testimonial.name}`}
                  className={`rounded-full object-cover transition-all duration-300 ${
                    isSelected
                      ? 'w-[58px] h-[58px] md:w-[126px] md:h-[126px]'
                      : 'w-12 h-12 opacity-60 group-hover:opacity-100'
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>

      <hr className="h-[2px] mt-[70px] text-[#3D3D3D]" />
    </section>
  );
};

export default TestimonialCarousel;
