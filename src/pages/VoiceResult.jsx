import React from "react";
import { useLocation, Link } from "react-router-dom";

function VoiceResult() {
    const location = useLocation();
    const { prediction, message } = location.state || {};

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col justify-center items-center px-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl text-center">
                <h1 className="text-3xl font-bold text-purple-700 mb-6">
                    Voice Analysis Result
                </h1>
                <p className="text-xl mb-4">{message}</p>

                {prediction === 0 ? (
                    <div className="text-green-600 text-lg">
                        🎉 Great news! You appear to be healthy.
                        <p className="mt-2">Keep nurturing your health, stay hydrated, and enjoy life to the fullest! 🌟</p>
                    </div>
                ) : (
                    <div className="text-red-600 text-lg">
                        ⚠️ Our analysis suggests the presence of Parkinson’s Disease.
                        <ul className="text-left mt-4 text-base list-disc pl-5">
                            <li>Consult a neurologist for further evaluation.</li>
                            <li>Engage in regular physical therapy or exercise routines.</li>
                            <li>Maintain a balanced diet rich in antioxidants.</li>
                            <li>Stay mentally active with puzzles and memory games.</li>
                            <li>Consider joining a support group for ongoing help.</li>
                        </ul>
                    </div>
                )}

                <Link to="/testvoice">
                    <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700">
                        Test Another Voice
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default VoiceResult;
