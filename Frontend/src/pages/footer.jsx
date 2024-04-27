import React from 'react';
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram } from 'react-feather';
import '../assets/css/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Eventify  is a leading event management company dedicated to creating memorable corporate experiences.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><MapPin /> 123 Event Street, Cityville, State, 12345</p>
          <p><Mail /> info@yourcompany.com</p>
          <p><Phone /> (123) 456-7890</p>
        </div>
      </div>
      <div id="footer-sec">
      <p className="footer-designed-by">© 2024 Corporate Events Management. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
