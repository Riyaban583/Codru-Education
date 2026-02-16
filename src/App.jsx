import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import AcademicPage from './pages/AcademicPage/AcademicPage';
import ProgrammingPage from './pages/ProgrammingPage/ProgrammingPage';
import RoboticsPage from './pages/RoboticsPage/RoboticsPage';
import GraphicsPage from './pages/GraphicsPage/GraphicsPage';
import EnrollmentPage from './pages/EnrollmentPage/EnrollmentPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/academic" element={<AcademicPage />} />
            <Route path="/programming" element={<ProgrammingPage />} />
            <Route path="/robotics" element={<RoboticsPage />} />
            <Route path="/graphics" element={<GraphicsPage />} />
            <Route path="/enroll" element={<EnrollmentPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;