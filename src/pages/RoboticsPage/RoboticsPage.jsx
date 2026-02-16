import React from 'react';
import CourseCard from '../../components/CourseCard/CourseCard';
import './RoboticsPage.css';

const RoboticsPage = () => {
  const courses = [
    {
      level: 'Beginner',
      title: 'Robot Builder Basics',
      description: 'Start your robotics journey with simple programmable robots! Learn basic programming concepts while building and controlling your first robot.',
      features: ['Block-based programming with Scratch for Robotics', 'Basic sensor integration (light, touch, sound)', 'Simple movement and navigation', 'LED patterns and basic displays'],
      perfectFor: 'Kids & Complete Beginners',
      tag: '8+ Weeks',
      color: '#27ae60'
    },
    {
      level: 'Advanced',
      title: 'Autonomous Systems Pro',
      description: 'Build sophisticated autonomous robots using ROS, Python, and advanced algorithms. Make robots that can navigate, map, and make decisions independently.',
      features: ['ROS (Robot Operating System) mastery', 'Computer vision and image processing', 'SLAM (Simultaneous Localization and Mapping)', 'Path planning and obstacle avoidance'],
      perfectFor: 'Passionate & Developers',
      tag: '16+ Weeks',
      color: '#d35400'
    },
    {
      level: 'Expert',
      title: 'AI Robotics Pioneer',
      description: 'Push the boundaries of robotics with AI integration! Build intelligent robots using machine learning, neural networks, and advanced algorithms.',
      features: ['Machine learning for robotics', 'Deep learning and neural networks', 'Natural language processing for robots', 'Multi-robot coordination and swarm intelligence'],
      perfectFor: 'Avid Researchers & Experts',
      tag: '24+ Weeks',
      color: '#8e44ad'
    }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Robotics Programming Courses</h1>
      <p className="page-subtitle">Build the Future with Code and Hardware!</p>
      <div className="course-grid">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default RoboticsPage;