from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import joblib

app = Flask(__name__)
CORS(app)

# Load model and scaler
try:
    model = joblib.load("xgb_clf.pkl")
    scaler = joblib.load("scaler.pkl")
    print("✅ Model and scaler loaded successfully.")
except Exception as e:
    print("❌ Error loading model or scaler:", str(e))
@app.get("/")
def read_root():
    return {"message": "Welcome to Parkison Prediction API"}
@app.route('/predict', methods=['POST'])

def predict():
    try:
        data = request.get_json()
        features = np.array(data['features']).reshape(1, -1)
        features_scaled = scaler.transform(features)
        prediction = model.predict(features_scaled)

        result = "The person HAS Parkinson’s Disease" if prediction[0] == 1 else "The person does NOT have Parkinson’s Disease"
        return jsonify({'prediction': int(prediction[0]), 'message': result})
    
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run()
