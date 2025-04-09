import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"; // or use /logo.png if it's in public

const Navbar = () => {
  return (
    <nav className="bg-[#0A192F] shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
          {/* <h1 className="text-2xl font-bold text-white">Parkinson's Disease</h1> */}
        </div>
        <ul className="flex space-x-6 text-lg">
          <li>
            <Link to="/home" className="text-white hover:text-[#00BFFF] font-medium transition">Home</Link>
          </li>
          <li>
            <Link to="/testvoice" className="text-white hover:text-[#00BFFF] font-medium transition">TestVoice</Link>
          </li>
          <li>
            <Link to="/testdrawing" className="text-white hover:text-[#00BFFF] font-medium transition">TestDrawing</Link>
          </li>
          <li>
            <Link to="/finalprediction" className="text-white hover:text-[#00BFFF] font-medium transition">Final Prediction</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
