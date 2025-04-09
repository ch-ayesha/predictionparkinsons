// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'



// export default App
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
// import Dashboard from "./pages/Dashboard.jsx";
import TestDrawing from "./pages/TestDrawing.jsx";
import TestVoice from "./pages/TestVoice.jsx";
import FinalPrediction from "./pages/FinalPrediction.jsx";

function App() {
  return (
    <Router>
      <div className="flex">
        <Navbar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/Home" element={<Home/>} />
            {/* <Route path="/" element={<Dashboard />} /> */}
            <Route path="/testdrawing" element={<TestDrawing />} />
            <Route path="/testvoice" element={<TestVoice />} />
            <Route path="/final" element={<FinalPrediction />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
