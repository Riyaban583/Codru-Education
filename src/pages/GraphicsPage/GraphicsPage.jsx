import React from 'react';
import CourseCard from '../../components/CourseCard/CourseCard';
import './GraphicsPage.css';

const GraphicsPage = () => {
  const courses = [
    {
      level: 'Young Artist',
      title: 'Art Explorer',
      description: 'Discover colors, shapes, and creativity through fun art projects!',
      features: ['Drawing with digital crayons and brushes', 'Creating colorful posters and greeting cards', 'Learning about colors, shapes, and patterns', 'Making simple animations and GIFs'],
      perfectFor: '1st - 4th Standard',
      tag: 'Little Artists (Ages 6-10)',
      color: '#e84393'
    },
    {
      level: 'Creative Designer',
      title: 'Design Creator',
      description: 'Build amazing designs and learn professional art tools!',
      features: ['Design logos and brand identities', 'Create magazine covers and flyers', 'Photo-editing and digital manipulation', 'Typography and text design basics'],
      perfectFor: '5th - 7th Standard',
      tag: 'Creative Kids (Ages 11-13)',
      color: '#0984e3'
    },
    {
      level: 'Digital Artist',
      title: 'Design Master',
      description: 'Master advanced design skills and create professional artwork!',
      features: ['Professional design software (Photoshop, Illustrator)', 'Web design and user interface creation', '3D modeling and digital sculpting basics', 'Portfolio development and presentation'],
      perfectFor: '8th - 10th Standard',
      tag: 'Designers (Ages 14-16)',
      color: '#6c5ce7'
    }
  ];

  return (
    <div className="page-container">
      <h1 className="page-title">Graphic Design Courses</h1>
      <p className="page-subtitle">Creative Adventures for Young Artists!</p>
      <div className="course-grid">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  );
};

export default GraphicsPage;