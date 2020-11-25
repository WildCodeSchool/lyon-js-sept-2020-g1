import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <Link to="/AboutUs">Team developement</Link>
        <Link to="/Contact">Contact Us</Link>
        <a href="https://github.com/WildCodeSchool/lyon-js-sept-2020-g1">
          GitHub
        </a>
        <a href="https://www.wildcodeschool.com/fr-FR/campus/lyon">
          Wild Code School
        </a>
      </footer>
    </div>
  );
};

export default Footer;

// "https://github.com/WildCodeSchool/lyon-js-sept-2020-g1"
// https://www.wildcodeschool.com/fr-FR/campus/lyon"
