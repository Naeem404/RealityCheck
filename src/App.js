import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from "./Components/Sidebar";
import Chat from './pages/chat';
// import Results from './pages/Results';
// import Recommendations from './pages/Recommendations'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <div className="MainContent">
          <Routes>
            <Route path="/chat" element={<Chat />} />
            {/* <Route path="/results" element={<Results />} />
            <Route path="/recommendations" element={<Recommendations />} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
