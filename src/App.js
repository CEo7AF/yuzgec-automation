// src/App.js
import React from 'react';
import Bar from './components/Bar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AdminPanel from './Pages/AdminPanel.js';
import Calender from './Pages/Calender.js';
import ComplatedProjects from './Pages/ComplatedProjects.js';
import ContinuedProjects from './Pages/ContinuedProjects.js';
import Projects from './Pages/Projects.js';




function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/complated-projects" element={<ComplatedProjects />} />
          <Route path="/continued-projects" element={<ContinuedProjects />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Bar/>
      </div>
    </Router>
  );
}
export default App;