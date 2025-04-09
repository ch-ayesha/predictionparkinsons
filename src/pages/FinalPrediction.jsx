export default function FinalPrediction() {
    const result = "Parkinson Detected"; // Placeholder
  
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Final Prediction</h1>
        <div className="bg-white p-4 shadow rounded-xl text-center">
          <p className="text-xl">Result: <span className="font-bold">{result}</span></p>
        </div>
      </div>
    );
  }
  