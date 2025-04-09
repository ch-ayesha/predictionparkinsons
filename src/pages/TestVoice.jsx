import React, { useState } from "react";
import { HiMicrophone } from "react-icons/hi";
import { Link } from "react-router-dom";

function TestVoice() {
  const [formData, setFormData] = useState({
    "MDVP:Fo(Hz)": "",
    "MDVP:Fhi(Hz)": "",
    "MDVP:Flo(Hz)": "",
    "MDVP:Jitter(%)": "",
    "MDVP:Jitter(Abs)": "",
    "MDVP:RAP": "",
    "MDVP:PPQ": "",
    "Jitter:DDP": "",
    "MDVP:Shimmer": "",
    "MDVP:Shimmer(dB)": "",
    "Shimmer:APQ3": "",
    "Shimmer:APQ5": "",
    "MDVP:APQ": "",
    "Shimmer:DDA": "",
    "NHR": "",
    "HNR": "",
    "RPDE": "",
    "DFA": "",
    "spread1": "",
    "spread2": "",
    "D2": "",
    "PPE": "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Send to backend here
  };

  return (
    <div className="min-h-screen bg-[#F8FAFF] pt-32 px-4 md:px-8 font-sans text-[#4A5568]">
      {/* Heading */}
      <div className="text-center mb-10">
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#0A192F] flex items-center justify-center gap-3">
  <HiMicrophone className="text-purple-700 text-4xl" />
  Voice Feature-Based Parkinson’s Detection
</h1>

        <p className="text-lg italic text-gray-700 mt-4">
          Kindly input the extracted audio features below and press{" "}
          <span className="text-blue-500 font-semibold">Detect</span> to analyze.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
      >
        {Object.keys(formData).map((key, idx) => (
          <div key={idx} className="flex flex-col">
            <label className="text-sm font-medium mb-1 text-gray-700">
              {key}
            </label>
            <input
              className="p-3 rounded-xl border border-gray-300 shadow-md bg-white focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
              type="text"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              placeholder="Enter value"
            />
          </div>
        ))}

        {/* Button */}
        <div className="col-span-full flex justify-center mt-8">
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-10 py-3 rounded-2xl font-semibold shadow-lg transition-all"
          >
            Detect
          </button>
        </div>
      </form>

      {/* Footer */}
      <footer className="text-sm text-center text-[#708090] mt-16 border-t pt-4">
        <p>© 2025 Parkinson's Voice AI Project</p>
        <p className="mt-1">
          <Link to="/privacy" className="text-[#00BFFF] underline">Privacy Policy</Link> •
          <Link to="/about" className="text-[#00BFFF] underline ml-1">About Us</Link> •
          <Link to="/contact" className="text-[#00BFFF] underline ml-1">Contact</Link>
        </p>
      </footer>
    </div>
  );
}

export default TestVoice;
