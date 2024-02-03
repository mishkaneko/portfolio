import './footer.css';
import React from 'react';
import { FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <a href="https://www.linkedin.com/in/grace-c-chan" rel="noopener noreferrer" className="footer-item">
          <div className="icon-container">
            <FaLinkedinIn />
          </div>
          <span>Grace C Chan</span>
        </a>
        <div className="footer-item">
          <div className="icon-container">
            <IoLogoWhatsapp />
          </div>
          <span>+852 5615 8321</span>
        </div>
        <div className="footer-item">
          <div className="icon-container">
            <FaEnvelope />
          </div>
          <span>cgc.grace.cc@gmail.com</span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
