import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryCard.css';

const CategoryCard = ({ title, subtitle, linkTo, icon, color }) => {
  return (
    <Link to={linkTo} className="category-card" style={{ '--card-color': color }}>
      <div className="category-icon-wrapper">
        {icon}
      </div>
      <div className="category-text">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;