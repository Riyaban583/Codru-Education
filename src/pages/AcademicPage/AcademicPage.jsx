import React from 'react';
import CourseCard from '../../components/CourseCard/CourseCard';
import './AcademicPage.css';

const AcademicPage = () => {
  const courses = [
    {
      level: 'Foundation',
      title: 'Knowledge Builder',
      description: 'Building strong foundations in core subjects with fun activities!',
      features: ['Work with Numbers, Addition, Subtraction', 'English: Reading, Writing, Grammar', 'Science: Nature, Animals, Simple Experiments', 'Homework help and doubt clearing'],
      perfectFor: '1st - 5th Standard',
      tag: 'Young Learners (Ages 6-11)',
      color: '#27ae60'
    },
    {
      level: 'Intermediate',
      title: 'As Skills Developer',
      description: 'Advanced concepts in core subjects with exam preparation and knowledge!',
      features: ['Advanced Math: Algebra, Geometry', 'Science: Physics, Chemistry, Biology', 'English: Literature, Creative Writing', 'Social Studies: History, Geography'],
      perfectFor: '6th - 8th Standard',
      tag: 'Growing Minds (Ages 11-14)',
      color: '#2980b9'
    },
    {
      level: 'Advanced',
      title: 'Excellence Achiever',
      description: 'Board exam preparation and competitive exam readiness of concepts!',
      features: ['Mathematics: Trigonometry, Coordinate Geometry', 'Science: Advanced Physics, Chemistry', 'English: Advanced Grammar, Literature Analysis', 'Competitive exam foundation (JEE/NEET)'],
      perfectFor: '9th - 10th Standard',
      tag: 'Future Experts (Ages 14-16)',
      color: '#8e44ad'
    }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Academic Courses</h1>
      <p className="page-subtitle">Building Strong Foundations for Bright Futures!</p>
      <div className="course-grid">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default AcademicPage;