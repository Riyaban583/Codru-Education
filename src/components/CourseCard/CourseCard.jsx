import React from 'react';
import { Link } from 'react-router-dom';
import './CourseCard.css';
import { FaCheckCircle } from 'react-icons/fa';

const CourseCard = ({ level, title, description, features, perfectFor, color, tag }) => {
  return (
    <div className="course-card" style={{'--level-color': color}}>
      <div className="course-level">{level}</div>
      <div className="course-card-content">
        <h3 className="course-title">{title}</h3>
        <p className="course-description">{description}</p>
        
        <ul className="course-features">
          {features.map((feature, index) => (
            <li key={index}><FaCheckCircle className="feature-icon" />{feature}</li>
          ))}
        </ul>

        <div className="perfect-for">
          <h4>PERFECT FOR:</h4>
          <p>{perfectFor}</p>
          <span>{tag}</span>
        </div>
        
        <Link to="/enroll" className="know-more-btn">Know More</Link>
      </div>
    </div>
  );
};

export default CourseCard;