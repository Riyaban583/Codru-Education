import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import { FaBook, FaCode, FaRobot, FaPalette, FaRocket, FaQuestionCircle } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="page-container">
      <section className="hero-section">
        <h1>Codru Education - Your Learning Companion</h1>
        <p>Empowering students to achieve academic excellence through personalized learning adventures.</p>
      </section>

      <section className="quick-start">
        <h2>Quick Start Your Learning Journey</h2>
        <div className="quick-start-cards">
          <div className="quick-card">
              <FaRocket className="quick-card-icon" style={{color: '#3498db'}} />
              <h3>Start your 5 Days Free Demo</h3>
              <p>Dive into a world of knowledge and shape your future at your own pace.</p>
              <Link to="/enroll" className="quick-card-btn blue">Start Adventure Now</Link>
          </div>
          <div className="quick-card">
              <FaQuestionCircle className="quick-card-icon" style={{color: '#e84393'}}/>
              <h3>Ask your Doubts here</h3>
              <p>Get instant help from our expert tutors and unlock your potential.</p>
              <button className="quick-card-btn pink">Ask Question Now</button>
          </div>
        </div>
      </section>

      <section className="courses-offered">
        <h2>Amazing Courses Offered</h2>
        <div className="category-grid">
          <CategoryCard 
            title="All Academic Subjects" 
            subtitle="Academic Excellence" 
            linkTo="/academic" 
            icon={<FaBook />}
            color="#3498db"
          />
          <CategoryCard 
            title="Programming Courses" 
            subtitle="Programming Skills" 
            linkTo="/programming" 
            icon={<FaCode />}
            color="#e84393"
          />
          <CategoryCard 
            title="Robotics Courses" 
            subtitle="Future Skills" 
            linkTo="/robotics" 
            icon={<FaRobot />}
            color="#e67e22"
          />
          <CategoryCard 
            title="Graphics Courses" 
            subtitle="Designing" 
            linkTo="/graphics" 
            icon={<FaPalette />}
            color="#8e44ad"
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;