import React, { useState } from "react";
import { HiMicrophone } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function TestVoice() {
    const [formData, setFormData] = useState({
        "MDVP:Fo(Hz)": "", "MDVP:Fhi(Hz)": "", "MDVP:Flo(Hz)": "",
        "MDVP:Jitter(%)": "", "MDVP:Jitter(Abs)": "", "MDVP:RAP": "",
        "MDVP:PPQ": "", "Jitter:DDP": "", "MDVP:Shimmer": "",
        "MDVP:Shimmer(dB)": "", "Shimmer:APQ3": "", "Shimmer:APQ5": "",
        "MDVP:APQ": "", "Shimmer:DDA": "", "NHR": "", "HNR": "",
        "RPDE": "", "DFA": "", "spread1": "", "spread2": "",
        "D2": "", "PPE": ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const featureArray = Object.values(formData).map(parseFloat);

      
       
      



        try {
            const response = await fetch("http://localhost:5000/predict", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ features: featureArray }),
            });

            const data = await response.json();
            navigate("/voice-result", { state: data });

        } catch (error) {
            console.error("Error during prediction:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-[#F8FAFF] pt-32 px-4 md:px-8 font-sans text-[#4A5568]">
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

                <div className="col-span-full flex justify-center mt-8">
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-10 py-3 rounded-2xl font-semibold shadow-lg transition-all"
                    >
                        Detect
                    </button>
                </div>
            </form>
        </div>
    );
}

export default TestVoice;
