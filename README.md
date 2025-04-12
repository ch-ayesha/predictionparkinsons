# 🧠 Parkinson's Disease Prediction 

This is a web-based application that predicts Parkinson's Disease based on voice features using a trained Machine Learning model. The frontend is built using **React + Vite**, styled with **Tailwind CSS**, and the backend is powered by **Flask** with a Python-based ML model (XGBoost).


## 🧬 What is Parkinson’s Disease?

Parkinson's Disease is a progressive neurological disorder that affects movement and speech. It often begins with a slight tremor in one hand and gradually causes stiffness or slowing of movement. 

One of the early signs of Parkinson’s can be detected through changes in voice. Subtle variations in pitch, jitter, shimmer, and other acoustic features can indicate the onset of the disease.

Our application leverages **voice features** to detect Parkinson's with the help of a trained Machine Learning model.



## 🤖 Machine Learning Model

We have used the **XGBoost (Extreme Gradient Boosting)** algorithm for making predictions. This algorithm is known for its high performance in classification tasks.

- 🔍 Model: XGBoost Classifier
- 🎯 Accuracy: Achieved high accuracy (over 90%) on validation data
- 📁 Input: Voice features (e.g., MDVP:Fo(Hz), Jitter, Shimmer, etc.)
- 📤 Output: Predicts if the person is likely to have Parkinson’s Disease



## 📌 Features

- Upload voice features through UI.
- Predict whether the given features indicate Parkinson's Disease.
- Seamless integration of frontend and backend.
- Lightweight and easy to deploy.


## ⚙️ Installation and Running the Project


### 1. Clone the Repository

```bash
git https://github.com/ch-ayesha/predictionparkinsons.git
cd predictionparkinsons

### 2. Setup the Frontend (React + Vite + Tailwind CSS)

a. Create Vite React App (if not already created)

npm create vite@latest your-app-name --template react
cd your-app-name
b. Install project dependencies

npm install
c. Install Tailwind CSS

npm install -D tailwindcss @tailwindcss/vite
d. Tailwind Setup
vite.config.js


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})

index.css
@import "tailwindcss";

e. Start the frontend
npm run dev
