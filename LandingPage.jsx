import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-yellow-400 relative">
      <nav className="w-full max-w-6xl flex justify-between items-center py-4">
        <h2 className="text-2xl font-bold">MatchPoint</h2>
        <div className="flex gap-6 text-lg">
          <a href="#home" className="hover:text-yellow-500">Home</a>
          <a href="#about" className="hover:text-yellow-500">About Us</a>
          <a href="#features" className="hover:text-yellow-500">Features</a>
          <a href="#pricing" className="hover:text-yellow-500">Pricing</a>
          <a href="#login" className="hover:text-yellow-500">Log In</a>
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-xl">
            Get Started
          </Button>
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center flex-grow text-center">
        <motion.h1 
          className="text-5xl font-extrabold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          The Future of Sports Career Management
        </motion.h1>
        <Button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-xl text-lg font-bold animate-pulse">
          Join Now
        </Button>
        <p className="mt-4 text-lg text-yellow-300">Connecting Players, Agents, and Clubs in One Place</p>
      </div>
      <div className="w-full max-w-4xl mt-10 p-6 bg-gray-800 text-center rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-yellow-400">Why Join MatchPoint?</h2>
        <p className="mt-2 text-yellow-300">✔ Find the best career opportunities</p>
        <p className="mt-1 text-yellow-300">✔ Network with top agents and clubs</p>
        <p className="mt-1 text-yellow-300">✔ Stay ahead with career management tools</p>
      </div>
      <footer className="w-full mt-12 p-6 bg-gray-900 text-center text-yellow-400">
        <div className="flex justify-center gap-6 text-lg mb-4">
          <a href="#terms" className="hover:text-yellow-500">Terms and Conditions</a>
          <a href="#privacy" className="hover:text-yellow-500">Privacy Policy</a>
          <a href="#contact" className="hover:text-yellow-500">Contact Us</a>
        </div>
        <div className="flex justify-center gap-4 text-2xl">
          <a href="#linkedin" className="hover:text-yellow-500"><FaLinkedin /></a>
          <a href="#instagram" className="hover:text-yellow-500"><FaInstagram /></a>
          <a href="#facebook" className="hover:text-yellow-500"><FaFacebook /></a>
        </div>
      </footer>
    </div>
  );
}
