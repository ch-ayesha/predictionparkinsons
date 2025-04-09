import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import parkinsons from "../assets/parkinsons.jpg";
import { HiMicrophone, HiPencilAlt } from 'react-icons/hi';

function Home() {
  return (
    <div className="bg-[#F0F4F8] min-h-screen pt-32 px-4 md:px-8 font-sans text-[#2D3748]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto space-y-10"
      >
        {/* Overview Section */}
        <section className="bg-[#E6F2FF] p-8 rounded-xl shadow-md">
          <h1 className="text-4xl font-bold text-[#0A192F] mb-4">
            Predict. Prevent. Parkinson’s.
          </h1>
          <p className="text-lg mb-4">
          Parkinson's disease is a progressive disorder that affects the nervous system and the parts of the body controlled by the nerves. Symptoms start slowly. The first symptom may be a barely noticeable tremor in just one hand. Tremors are common, but the disorder may also cause stiffness or slowing of movement. This Web application will help you to predict whether a person has a risk of being a patient of Parkinson's disease or has the disease in minor or acute level.
          </p>
          <p className="text-lg">
          Our platform analyzes voice patterns using AI to predict the likelihood of Parkinson's, offering valuable insights for both patients and healthcare professionals.
          </p>
        </section>

        {/* Symptoms Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 bg-[#EAF3FB] p-8 rounded-xl shadow-md">
          <div className="w-full md:w-1/2">
            <img
              src={parkinsons}
              alt="Parkinson's Symptoms"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
          <p className="text-lg mb-4">
              Tremors are a common early sign of Parkinson’s disease, often beginning in the hands or fingers and typically appearing when the body is at rest.
            </p>
            <p className="text-lg mb-4">
              Bradykinesia, or slowed movement, can make everyday activities like walking or buttoning a shirt increasingly difficult.
            </p>
            <p className="text-lg mb-4">
              Muscle rigidity causes stiffness in the limbs or joints, which can limit range of motion and lead to discomfort.
            </p>
            <p className="text-lg mb-4">
              Postural instability affects balance and coordination, increasing the risk of falls.
            </p>          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-3xl text-[#00BFFF] font-semibold mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4">
              <HiMicrophone className="text-3xl text-[#00BFFF]" />
              <p className="text-lg">User records their voice through the app.</p>
            </div>
            <div className="flex items-center space-x-4">
              <HiPencilAlt className="text-3xl text-[#00BFFF]" />
              <p className="text-lg">User uploads a handwritten sample.</p>
            </div>
            <div className="flex items-center space-x-4">
              <HiMicrophone className="text-3xl text-[#00BFFF]" />
              <p className="text-lg">AI extracts voice features for analysis.</p>
            </div>
            <div className="flex items-center space-x-4">
              <HiPencilAlt className="text-3xl text-[#00BFFF]" />
              <p className="text-lg">Handwriting is processed for patterns.</p>
            </div>
            <div className="flex items-center space-x-4">
              <HiMicrophone className="text-3xl text-[#00BFFF]" />
              <p className="text-lg">AI predicts Parkinson’s likelihood.</p>
            </div>
            <div className="flex items-center space-x-4">
              <HiPencilAlt className="text-3xl text-[#00BFFF]" />
              <p className="text-lg">User sees results and suggestions.</p>
            </div>
          </div>
        </section>

        {/* Real-Time Demo Section */}
        <section className="bg-[#D6EAF8] p-6 rounded-xl shadow-md space-y-6 mt-10">
          <h2 className="text-3xl font-semibold text-[#0A192F] mb-4">
            Try a Voice Test or Handwritten Analysis
          </h2>
          <p className="text-lg">
          Choose an option to analyze either a voice clip or a handwritten sample. Our system will provide real-time predictions.
      
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-[#0090CC] text-white px-6 py-3 rounded-full hover:bg-[#006C8E] transition">
              <HiMicrophone className="inline mr-2" />
              Record Voice
            </button>
            <button className="bg-[#0090CC] text-white px-6 py-3 rounded-full hover:bg-[#006C8E] transition">
              <HiPencilAlt className="inline mr-2" />
              Upload Handwritten Image
            </button>
          </div>
        </section>

        {/* Recommendations Section */}
        <section className="mt-12 flex flex-col md:flex-row items-center gap-8">
          {/* For Patients */}
          <div className="w-full md:w-1/2 p-6 bg-[#AED6F1] rounded-lg shadow-lg text-[#0A192F]">
            <h2 className="text-2xl font-semibold mb-4">Living Well with Parkinson’s</h2>
            <ul className="space-y-4">
            <li className="flex items-center text-lg">
                Stay active with regular daily exercises to maintain muscle strength.
              </li>
              <li className="flex items-center text-lg">
                Follow a nutrient-rich diet filled with fruits, veggies, and antioxidants.
              </li>
              <li className="flex items-center text-lg">
                Prioritize mental well-being through relaxation techniques and mindfulness practices to manage stress and improve overall quality of life.
              </li>
       
            </ul>
          </div>

          {/* For Doctors */}
          <div className="w-full md:w-1/2 p-6 bg-[#85C1E9] rounded-lg shadow-lg text-[#0A192F]">
            <h2 className="text-2xl font-semibold mb-4">Tools for Medical Experts</h2>
            <ul className="space-y-4">
            <li className="flex items-center text-lg">
                Leverage AI-based voice analysis for early diagnosis and ongoing monitoring of Parkinson’s patients.
              </li>
              <li className="flex items-center text-lg">
                The system can detect subtle voice changes, offering valuable insights into disease progression.
              </li>
              <li className="flex items-center text-lg">
                Utilize real-time data and personalized insights to optimize treatment plans and enhance patient care.
              </li>
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-sm text-center text-[#708090] mt-12 border-t pt-4">
          <p>© 2025 Parkinson's Voice AI Project</p>
          <p className="mt-1">
            <Link to="/privacy" className="text-[#00BFFF] underline">Privacy Policy</Link> •
            <Link to="/about" className="text-[#00BFFF] underline ml-1">About Us</Link> •
            <Link to="/contact" className="text-[#00BFFF] underline ml-1">Contact</Link>
          </p>
        </footer>
      </motion.div>
    </div>
  );
}

export default Home;
