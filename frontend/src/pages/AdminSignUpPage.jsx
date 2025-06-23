
import { motion } from "framer-motion";
import React, { useState } from "react";
import Input from "../components/input";
import { Lock, Mail, UserCog, Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";
import { useAuthStore } from "../store/auth.store";
const AdminSignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { adminSignup, error, isLoading } = useAuthStore();
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await adminSignup(email, password, name);
      navigate("/adminLogin");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="min-h-screen inset-0 bg-black bg-opacity-10 flex items-center justify-center relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://tourismteacher.com/wp-content/uploads/2020/09/pexels-photo-753626.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white bg-opacity-20 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden"
      >
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-center bg-white text-transparent bg-clip-text">
            Admin Creation
          </h2>
          <form onSubmit={handleSignup}>
            <Input
              icon={UserCog}
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              icon={Mail}
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              icon={Lock}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <p className="text-red-500 font-semibold mt-2">{error}</p>
            )}
            {/* password strength meter */}
            <PasswordStrengthMeter password={password} />

            <motion.button
              className="mt-5 w-full tracking-[3px] py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200'"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader className="w-6 h-6 animate-spin text-center mx-auto" />
              ) : (
                "Create Admin"
              )}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminSignUpPage;
