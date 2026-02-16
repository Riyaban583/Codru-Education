import React from 'react';
import './EnrollmentPage.css';
import { FaMapMarkerAlt, FaClock, FaLaptop, FaChalkboardTeacher } from 'react-icons/fa';

const EnrollmentPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Enrollment form submitted successfully!');
  };

  return (
    <div className="page-container">
       <h1 className="page-title">Advanced Programming Course</h1>
       <p className="page-subtitle">Master Modern Software Development with Industry-Leading Technologies</p>
      <div className="enrollment-wrapper">
        <div className="course-details">
          <h2>Course Details</h2>
          <div className="detail-item">
            <h4><FaChalkboardTeacher /> Availability</h4>
            <p>Online / Offline</p>
          </div>
          <div className="detail-item">
            <h4><FaLaptop /> Online Platform</h4>
            <p>Via Google Meet</p>
          </div>
          <div className="detail-item">
            <h4><FaMapMarkerAlt /> Offline Location</h4>
            <p>Codru Education, 12 E, Poram, Sector A, near Alama Circle, Kota, Rajasthan - 324010</p>
            <a href="#" className="map-link">View on Google Maps</a>
          </div>
          <div className="detail-item">
            <h4><FaClock /> Course Duration Options</h4>
            <p>• 3 Months (Intensive)</p>
            <p>• 6 Months (Standard)</p>
            <p>• 12 Months (Comprehensive)</p>
          </div>
          <div className="detail-item">
            <h4>Technologies Covered</h4>
            <p>Python, JavaScript, React, NodeJS, SQL, Git, Cloud Computing, and more.</p>
          </div>
        </div>
        <div className="enrollment-form">
          <h2>Student Enrollment Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" placeholder="Enter your full name" required />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input type="number" id="age" placeholder="Enter your age" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email address" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" placeholder="Enter your phone number" required />
            </div>
            <div className="form-group">
              <label htmlFor="experience">Programming Experience</label>
              <select id="experience" required>
                <option value="">Select your experience level</option>
                <option value="beginner">Beginner (No Experience)</option>
                <option value="intermediate">Intermediate (Some Experience)</option>
                <option value="advanced">Advanced (Experienced)</option>
              </select>
            </div>
             <div className="form-group">
              <label htmlFor="specialization">Course Specialization</label>
              <select id="specialization" required>
                <option value="">Select Course Specialization</option>
                <option value="web-dev">Web Development</option>
                <option value="data-science">Data Science</option>
                <option value="robotics">Robotics</option>
                <option value="design">Graphic Design</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="duration">Preferred Duration</label>
              <select id="duration" required>
                <option value="">Select course duration</option>
                <option value="3">3 Months (Intensive)</option>
                <option value="6">6 Months (Standard)</option>
                <option value="12">12 Months (Comprehensive)</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="mode">Learning Mode</label>
              <select id="mode" required>
                <option value="">Select learning mode</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
            </div>
            <button type="submit" className="enroll-now-btn">Enroll Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentPage;