import React from "react";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-section">
          <div className="footer-about">
            <h2 className="footer-title">YASP</h2>
            <p>
              Loo faff about cockup Harry baking cakes hunky dory mush happy
              days on your bike mate.
            </p>
            <p>
              <i className="fas fa-phone-alt"></i> +464 145 684 325
            </p>
            <p>
              <i className="fas fa-envelope"></i> varsity@example.com
            </p>
          </div>
          <div className="footer-links">
            <h3 className="footer-title">Popular Courses</h3>
            <ul>
              <li>Algebra & Calculus</li>
              <li>Business Strategy</li>
              <li>Computer Security & Network</li>
              <li>Data Analysis</li>
              <li>English Learning</li>
              <li>Music & Art</li>
            </ul>
          </div>
          <div className="footer-links">
            <h3 className="footer-title">Course Categories</h3>
            <ul>
              <li>Arts & Humanities</li>
              <li>Business</li>
              <li>Computer Science</li>
              <li>Data Science</li>
              <li>Language Learning</li>
              <li>Math & Logic</li>
            </ul>
          </div>
          <div className="footer-links">
            <h3 className="footer-title">Quick Links</h3>
            <ul>
              <li>Live Class</li>
              <li>Tuition Fees</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Support</li>
              <li>Career</li>
            </ul>
          </div>
        </div>
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="#">
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
        <div className="copy">
          <p>
            © 2024 Copyright Varsity - WPTheme. Developed by MhrTheme.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;