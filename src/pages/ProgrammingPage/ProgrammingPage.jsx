import React from 'react';
import CourseCard from '../../components/CourseCard/CourseCard';
import './ProgrammingPage.css';

const ProgrammingPage = () => {
  const courses = [
    {
      level: 'Beginner',
      title: 'Scratch Wizard',
      description: 'Learn programming through fun games and animations with drag-and-drop blocks!',
      features: ['Interactive games and stories', 'Animated character and sprites', 'Basic programming concepts (loops, conditions)', 'Problem solving through visual coding'],
      perfectFor: 'Ages 8-12',
      tag: 'Young Coders & Creative Minds',
      color: '#16a085'
    },
    {
      level: 'Intermediate',
      title: 'Python Explorer',
      description: 'Dive into real programming with Python - create games, apps, and cool projects!',
      features: ['Python programming fundamentals', 'Build simple games like Snake and Pong', 'Data analysis and visualization', 'Web scraping and automation', 'Introduction to AI and machine learning'],
      perfectFor: 'Ages 10-16',
      tag: 'Future Programmers & Tech Enthusiasts',
      color: '#f39c12'
    },
    {
      level: 'Advanced',
      title: 'Web Developer Pro',
      description: 'Build amazing websites and web applications from scratch!',
      features: ['HTML5 & CSS3 for beautiful layouts', 'JavaScript for interactive features', 'Responsive design for all devices', 'Build portfolio websites and blogs', 'Deploy your projects to the internet'],
      perfectFor: 'Ages 13+',
      tag: 'Aspiring Web Developers & Designers',
      color: '#c0392b'
    }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Programming Courses</h1>
      <p className="page-subtitle">Code Your Dreams Into Reality!</p>
      <div className="course-grid">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default ProgrammingPage;