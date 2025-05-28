import React from "react";
import { motion } from "framer-motion";

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-red-800 py-16 px-4">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold tracking-tight mb-6 text-red-700">
          Welcome to Eclypse
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          We're not just an eCommerce platform. We're your style guide, essentials expert, and tech trendsetter — all in one seamless shopping experience.
        </p>
      </motion.div>

      <div className="mt-16 grid gap-8 md:grid-cols-3 px-4 max-w-6xl mx-auto">
        {[
          {
            title: "Smart Experience",
            desc: "AI-powered suggestions to help you find what you need — faster, easier, and smarter.",
          },
          {
            title: "Sustainable Shopping",
            desc: "We support eco-friendly brands and green logistics for a better tomorrow.",
          },
          {
            title: "Community Driven",
            desc: "Join a vibrant shopping community. Share reviews, follow trends, and connect with fellow shoppers.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-red-50 rounded-3xl shadow-xl p-6 border border-red-200 hover:shadow-2xl transition duration-300"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-bold text-red-700 mb-2">
              {item.title}
            </h2>
            <p className="text-gray-700">{item.desc}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p className="text-gray-700 max-w-xl mx-auto mb-4 text-lg">
          Our mission is to redefine online shopping through innovation, connection, and care. We aim to make every transaction meaningful.
        </p>
        <p className="font-semibold text-red-700">Thank you for being part of the ShopEase family.</p>
      </motion.div>
    </div>
  );
};
export default AboutUs;
