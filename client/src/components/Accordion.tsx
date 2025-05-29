import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const accordionData = [
  {
    title: "Size & Fit",
    content: "This section contains details about size and fitting guidance."
  },
  {
    title: "Delivery & Returns",
    content: "Information about delivery timelines and return policies."
  },
  {
    title: "How This Was Made",
    content: "Details about the manufacturing process and sustainability."
  }
];

const InfoAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" text-white w-full mt-[100px]">
      {accordionData.map((item, index) => (
        <div key={index} className="border-b border-gray-700 mb-6 ml-7 mr-7">
          <button
            className="w-full flex justify-between items-center py-5 px-4 focus:outline-none"
            onClick={() => toggleAccordion(index)}
          >
            <span className="md:text-[27px] text-[18px]"
            style={{ fontFamily: 'Neue Montreal, sans-serif' }}>{item.title}</span>
            {openIndex === index ? (
              <ChevronUp className="text-white text-sm" />
            ) : (
              <ChevronDown className="text-white text-sm" />
            )}
          </button>
          {openIndex === index && (
            <div className="text-gray-300 text-sm px-4 pb-5">
              {item.content}
            </div>
          )}
        </div>
      ))}
      <div className=" border-gray-700" />
    </div>
  );
};

export default InfoAccordion;
