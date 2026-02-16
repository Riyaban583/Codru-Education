import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const quickLinks = [
  { path: '/contact', label: 'Contact Us' },
  { path: '/terms', label: 'Terms & Conditions' },
  { path: '/privacy', label: 'Privacy Policy' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="footer-place">
          <h4>Place</h4>
          <p>Near Ahimsa Circle, Kota</p>
        </div>

        <div className="footer-map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.396985311264!2d75.83688181500803!3d25.12217798393086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f81c9a6a8285b%3A0x356f9cb6d5c6c05d!2sCodru%20Education!5e0!3m2!1sen!2sin!4v1662898863158!5m2!1sen!2sin"
            width="100%" 
            height="200" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Codru Education Location Map"
          >
          </iframe>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Codru Education. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;