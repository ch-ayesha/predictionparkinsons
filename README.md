# 🧠 Parkinson's Disease Prediction 

This is a web-based application that predicts Parkinson's Disease based on voice features using a trained Machine Learning model. The frontend is built using **React + Vite**, styled with **Tailwind CSS**, and the backend is powered by **Flask** with a Python-based ML model (XGBoost).


## 🧬 What is Parkinson’s Disease?

Parkinson's Disease is a progressive neurological disorder that affects movement and speech. It often begins with a slight tremor in one hand and gradually causes stiffness or slowing of movement. One of the early signs of Parkinson’s can be detected through changes in voice. Subtle variations in pitch, jitter, shimmer, and other acoustic features can indicate the onset of the disease. Our application leverages **voice features** to detect Parkinson's with the help of a trained Machine Learning model.



## 🤖 Machine Learning Model

I have used the **XGBoost (Extreme Gradient Boosting)** algorithm for making predictions. This algorithm is known for its high performance in classification tasks.

- 🔍 Model: XGBoost Classifier
- 🎯 Accuracy: Achieved high accuracy (87%) on validation data
- 📁 Input: Voice features (e.g., MDVP:Fo(Hz), Jitter, Shimmer, etc.)
- 📤 Output: Predicts if the person is likely to have Parkinson’s Disease



## 📌 Features

- Upload voice features through UI.
- Predict whether the given features indicate Parkinson's Disease.
- Seamless integration of frontend and backend.
- Lightweight and easy to deploy.

##  🔄 How It Works
- The user enters voice-related features through the UI.
- React frontend sends a POST request to the Flask backend.
- Flask loads the trained ML model (model.pkl) and returns a prediction.
- The frontend displays whether the input indicates Parkinson’s disease.

## 📚 Tech Stack
- Frontend: React, Vite, Tailwind CSS
- Backend: Flask (Python)
- ML Model: XGBoost Classifier (scikit-learn)


## ⚙️ Installation and Running the Project
### 1. Clone the Repository

```bash
git https://github.com/ch-ayesha/predictionparkinsons.git
cd predictionparkinsons

### 2. Setup the Frontend (React + Vite + Tailwind CSS)

b. Install project dependencies
npm install

c. Install Tailwind CSS
npm install -D tailwindcss @tailwindcss/vite

d. Start the frontend
npm run dev

3. Setup the Backend (Flask + ML Model)

cd flaskapi

b. Install the dependencies
pip install -r requirements.txt

c. Run the Flask app
python app.py


