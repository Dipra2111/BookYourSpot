import { motion } from "framer-motion";
import "../pages/allpage.css"

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden">
      {/* Simple Loading Spinner */}
      <motion.div
      // className="w-16 h-16 border-4 border-t-4 border-t-blue-500 border-blue-200 rounded-full"
      // animate={{ rotate: 360 }}
      // transition={{ duration: 1, repeat: Infinity, ease: "linear" }}

      />

      <div className="loader"></div>
    </div>
  );
};

export default LoadingSpinner;
