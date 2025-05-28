import React, { useState } from "react";
import { motion } from "framer-motion";

const Waitlist: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // Simulate form submission
      console.log("Submitted email:", email);
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="bg-white text-red-800 py-16 px-4 min-h-[50vh] flex items-center justify-center">
      <motion.div
        className="bg-red-50 rounded-3xl shadow-2xl p-10 w-full max-w-xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4">Join Our Waitlist</h2>
        <p className="text-gray-700 mb-6">
          Be the first to know when we launch exclusive deals and early-bird offers!
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl border border-red-300 focus:outline-none focus:ring-2 focus:ring-red-500 text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-xl transition duration-300"
            >
              Join Now
            </motion.button>
          </form>
        ) : (
          <motion.p
            className="text-lg font-semibold text-green-600 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Thank you! You're on the list.
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};
export default Waitlist;
