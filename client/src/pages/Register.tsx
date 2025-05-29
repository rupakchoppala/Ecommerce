import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const RegisterPage: React.FC = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const [loading, setLoading] = useState<boolean>(false);
  // const [error, setError] = useState<string | null>(null);
  const navigate=useNavigate();
  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setError(null);
    // setLoading(true);

    // Fake login simulation: wait 1.5 seconds then redirect
    setTimeout(() => {
      //setLoading(false);

      // Basic fake validation: if email and password not empty, succeed
      if (email.trim() !== "" && password.trim() !== "" && fullName.trim() !== "" ) {
        // Redirect to home page
        navigate("/");
      } else {
       // setError("Invalid email or password");
       console.log("Invalid credentilas");
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white font-sans">
      {/* Left - Welcome Section */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-red-600 text-white flex flex-col justify-center items-center px-10 py-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Us 🎉</h1>
        <p className="text-lg text-white/90 text-center max-w-md">
          Sign up now and start your shopping journey with amazing deals and products!
        </p>
        <img
          src="/avatar2.jpg"
          alt="Login Illustration"
          className="w-[200px] h-[200px] mt-10 md:block rounded-full"
        />
      </motion.div>
      {/* Right - Register Form */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col justify-center px-8 md:px-16 py-12"
      >
        <h2 className="text-3xl font-bold text-red-600 mb-6">Create Account</h2>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-all"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-6 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-red-600 hover:underline">
            Login here
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default RegisterPage;
