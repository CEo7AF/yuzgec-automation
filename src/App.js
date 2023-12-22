// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Bar from './components/Bar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import AdminPanel from './Pages/AdminPanel.js';
import Calender from './Pages/Calender.js';
import ComplatedProjects from './Pages/ComplatedProjects.js';
import ContinuedProjects from './Pages/ContinuedProjects.js';
import Projects from './Pages/Projects.js';
import Error from './Pages/Error.js';
//endpoint routes
import Endpoint from './Endpoint/Cards.js';
import Dashboard from './Endpoint/Dashboard.js';
import Dosyalar from './Endpoint/Dosyalar.js';
import Makineparki from './Endpoint/Makineparki.js';
import Makinepuantaj from './Endpoint/Makinepuantaj.js';
import Muhasebe from './Endpoint/Muhasebe.js';
import Personel from './Endpoint/Personel.js';
import Personelpuantaj from './Endpoint/Personelpuantaj.js';
import Resimler from './Endpoint/Resimler.js';
import Yakitdurum from './Endpoint/Yakitdurum.js'
 
function App() {
  const isLoggedIn = true; // Demo sürümde giriş yapma zorunluluğunu kaldırıyoruz

  return (
    <Router>
      <div className="App">
        <Bar />
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/home" replace />}
          />
          <Route path="/home" element={<Home />} />
          <Route path="/admin-panel" element={<AdminPanel />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/complated-projects" element={<ComplatedProjects />} />
          <Route path="/continued-projects" element={<ContinuedProjects />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/error" element={<Error />} />
           {/* endpoint routes*/}
          <Route path="/endpoint" element={<Endpoint />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dosyalar" element={<Dosyalar />} />
          <Route path="/Makine-parki" element={<Makineparki />} />
          <Route path="/makine-puantaj" element={<Makinepuantaj />} />
          <Route path="/muhasebe" element={<Muhasebe />} />
          <Route path="/personel" element={<Personel />} />
          <Route path="/personel-puantaj" element={<Personelpuantaj />} />
          <Route path="/resimler" element={<Resimler />} />
          <Route path="/yakit-durum" element={<Yakitdurum />} />








        </Routes>
        <Footer backgroundColor="lightgray" textColor="blue" />
      </div>
    </Router>
  );
}

export default App;

//proje bittiğinde kullanılacak 

/*
// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Bar from './components/Bar';
import Footer from './components/Footer';
import Home from './Pages/Home';
import AdminPanel from './Pages/AdminPanel.js';
import Calender from './Pages/Calender.js';
import ComplatedProjects from './Pages/ComplatedProjects.js';
import ContinuedProjects from './Pages/ContinuedProjects.js';
import Projects from './Pages/Projects.js';
import Login from './Pages/Login.js';
import Error from './Pages/Error.js';
import Endpoint from './Pages/Endpoint.js';
import Dashboard from './Endpoint/Dashboard.js';
import Dosyalar from './Endpoint/Dosyalar.js';
import Makineparki from './Endpoint/Makineparki.js';
import Makinepuantaj from './Endpoint/Makinepuantaj.js';
import Muhasebe from './Endpoint/Muhasebe.js';
import Personel from './Endpoint/Personel.js';
import Personelpuantaj from './Endpoint/Personelpuantaj.js';
import Resimler from './Endpoint/Resimler.js';
import Yakitdurum from './Endpoint/Yakitdurum.js'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Bar />
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Navigate to="/home" /> : <Login onLogin={() => setLoggedIn(true)} />}
          />
          {isLoggedIn ? (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/admin-panel" element={<AdminPanel />} />
              <Route path="/calender" element={<Calender />} />
              <Route path="/complated-projects" element={<ComplatedProjects />} />
              <Route path="/continued-projects" element={<ContinuedProjects />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/endpoint" element={<Endpoint />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dosyalar" element={<Dosyalar />} />
              <Route path="/Makine-parki" element={<Makineparki />} />
              <Route path="/makine-puantaj" element={<Makinepuantaj />} />
              <Route path="/muhasebe" element={<Muhasebe />} />
              <Route path="/personel" element={<Personel />} />
              <Route path="/personel-puantaj" element={<Personelpuantaj />} />
              <Route path="/resimler" element={<Resimler />} />
              <Route path="/yakit-durum" element={<Yakitdurum />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/error" />} />
          )}
          <Route path="/error" element={<Error />} />
        </Routes>
        <Footer backgroundColor="lightgray" textColor="blue" />
      </div>
    </Router>
  );
}

export default App;

*/