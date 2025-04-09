import React, { useState } from "react";
import { motion } from "framer-motion";
import handparkinsons from "../assets/handparkinsons.jpg"; // Ensure this path is correct

function TestDrawing() {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulating image analysis for the prediction
    setPrediction("Healthy or Parkinson's Patient"); // Replace with actual prediction logic
  };

  return (
    <div className="min-h-screen bg-[#EAF3FB] p-8 text-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center space-y-6"
      >
        {/* Header Section */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#0A192F] flex items-center justify-center gap-3">
          Parkinson’s Detection Using Handwritten Drawings
        </h1>

        {/* Image below main heading */}
        <div className="w-full md:w-1/2 mt-6 mx-auto">
          <img
            src={handparkinsons}
            alt="Parkinson's Symptoms"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <p className="text-lg mb-6 text-gray-700">
          Upload your handwriting sample to detect if you may have Parkinson’s disease. Our system will analyze your handwriting and provide a prediction.
        </p>

        {/* Image Upload Section */}
<div className="bg-[#AED6F1] p-8 rounded-lg shadow-lg">
  <h2 className="text-xl font-semibold text-[#0A192F] mb-4">Upload Your Image</h2>
  <input
    type="file"
    accept="image/*"
    onChange={handleImageChange}
    className="mb-4 text-[#0A192F] border border-[#00BFFF] rounded-md p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
  />
  {image && <img src={image} alt="Handwriting" className="w-full h-64 object-contain border-2 border-[#00BFFF] rounded-md mb-4" />}

  <button
    onClick={handleSubmit}
    className="bg-[#00BFFF] hover:bg-[#00a3c3] text-white text-lg px-6 py-3 rounded-xl font-semibold shadow-md transition-all"
  >
    Analyze Handwriting
  </button>
</div>

{/* Prediction Result Section */}
{prediction && (
  <div className="mt-8 bg-white p-8 rounded-lg shadow-lg">
    <h2 className="text-xl font-semibold text-[#0A192F] mb-4">Prediction Result</h2>
    <p className="text-lg font-medium text-gray-700">{prediction}</p>
  </div>
)}


        {/* Footer Section */}
        <footer className="text-sm text-center text-[#708090] mt-12 border-t pt-4">
          <p>© 2025 Parkinson's Voice AI Project</p>
          <p className="mt-1">
            <a href="/privacy" className="text-[#00BFFF] underline">Privacy Policy</a> •
            <a href="/about" className="text-[#00BFFF] underline ml-1">About Us</a> •
            <a href="/contact" className="text-[#00BFFF] underline ml-1">Contact</a>
          </p>
        </footer>
      </motion.div>
    </div>
  );
}

export default TestDrawing;
