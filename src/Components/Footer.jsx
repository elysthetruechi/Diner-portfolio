import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Restaurant Info */}
        <div className="footer-section">
          <h3>Kary's Restaurant</h3>
          <p>Serving delicious meals since 2023</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <ul className="contact-info">
            <li><FaMapMarkerAlt /> 123 Food Street, Culinary City</li>
            <li><FaPhone /> (123) 456-7890</li>
            <li><FaEnvelope /> info@karys-restaurant.com</li>
          </ul>
        </div>

        {/* Hours */}
        <div className="footer-section">
          <h4>Opening Hours</h4>
          <ul className="opening-hours">
            <li><FaClock /> Mon-Fri: 11am - 10pm</li>
            <li><FaClock /> Sat-Sun: 10am - 11pm</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Kary's Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
}